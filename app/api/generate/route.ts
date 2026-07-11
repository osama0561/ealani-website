import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type GenerateBody = {
  business?: string;
  offer?: string;
  style?: string;
  language?: string;
};

const styleMap: Record<string, string> = {
  workshop: 'clean Saudi car workshop, mechanic checking engine, realistic commercial photography, practical lighting, trust-building layout',
  maintenance: 'Saudi home maintenance service, technician working on AC or repair task, clean realistic scene, professional and trustworthy',
  barber: 'local Saudi barber shop, neat chair and tools, realistic service promo, clean masculine layout, clear offer area',
  clinic: 'modern Saudi clinic or dental checkup scene, clean trustworthy healthcare visual, professional but approachable',
  cleaning: 'home cleaning or car detailing service scene, realistic before/after feeling, clean bright commercial photography',
};

function buildPrompt(body: GenerateBody) {
  const business = body.business?.trim() || 'Jeddah Auto Workshop';
  const offer = body.offer?.trim() || 'Full car inspection for 99 SAR';
  const style = body.style || 'workshop';
  const language = body.language || 'Arabic and English';
  return `Create a realistic square Instagram promotional ad for ${business}. Campaign offer: ${offer}. Visual direction: ${styleMap[style] || styleMap.workshop}. Use practical commercial photography, a believable Saudi/GCC local service-business scene, clean ad layout, empty space for ${language} headline text, clear offer area, WhatsApp CTA space, realistic shadows and colors. Avoid futuristic styling, glossy 3D render look, fake logos, fake QR codes, unreadable tiny text, distorted hands, and anything that looks obviously AI-generated.`;
}

async function generateWithGemini(prompt: string, apiKey: string) {
  const model = process.env.GEMINI_IMAGE_MODEL || 'gemini-3-pro-image-preview';
  const endpoint = new URL(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`);
  endpoint.searchParams.set('key', apiKey);
  const response = await fetch(endpoint.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    return { error: data.error?.message || 'Gemini image generation failed', status: response.status };
  }
  const parts = data.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find((part: any) => part.inlineData?.data || part.inline_data?.data);
  const inline = imagePart?.inlineData || imagePart?.inline_data;
  if (!inline?.data) return { error: 'Gemini returned no image', status: 502 };
  const mimeType = inline.mimeType || inline.mime_type || 'image/png';
  return { image: `data:${mimeType};base64,${inline.data}` };
}

async function generateWithOpenAI(prompt: string, apiKey: string) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      size: '1024x1024',
      quality: 'medium',
      n: 1,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    return { error: data.error?.message || 'OpenAI image generation failed', status: response.status };
  }
  const image = data.data?.[0]?.b64_json ? `data:image/png;base64,${data.data[0].b64_json}` : data.data?.[0]?.url;
  return { image };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateBody;
    const prompt = buildPrompt(body);
    const geminiKey = process.env.GOOGLE_AI_STUDIO_API_KEY || process.env.GEMINI_API_KEY;
    const openAiKey = process.env.OPENAI_API_KEY;

    if (geminiKey) {
      const result = await generateWithGemini(prompt, geminiKey);
      if ('error' in result) return NextResponse.json({ error: result.error, prompt }, { status: result.status });
      return NextResponse.json({ provider: 'gemini', image: result.image, prompt });
    }

    if (openAiKey) {
      const result = await generateWithOpenAI(prompt, openAiKey);
      if ('error' in result) return NextResponse.json({ error: result.error, prompt }, { status: result.status });
      return NextResponse.json({ provider: 'openai', image: result.image, prompt });
    }

    return NextResponse.json(
      {
        mode: 'demo',
        prompt,
        message: 'No image API key is configured on Vercel yet. Add GOOGLE_AI_STUDIO_API_KEY/GEMINI_API_KEY for Nano Banana/Gemini, or OPENAI_API_KEY for OpenAI.',
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
