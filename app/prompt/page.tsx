const promptBlocks = [
  {
    title: 'Image generation system prompt',
    code: `Create a realistic square Instagram promotional ad for {business}. Campaign offer: {offer}. Visual direction: {style}. Use practical commercial photography, a believable local Saudi/GCC service scene, clean ad layout, empty space for Arabic and English headline text, clear offer area, trust-building composition, no logos, no fake QR codes, no unreadable tiny text, not futuristic, not glossy 3D, not AI-looking.`,
  },
  {
    title: 'Car workshop example',
    code: `Business: Jeddah Auto Workshop
Offer: Full inspection for 99 SAR
Style: clean car workshop, mechanic checking engine, realistic lighting, practical commercial photo, Arabic headline space, WhatsApp CTA area`,
  },
  {
    title: 'AC maintenance example',
    code: `Business: Riyadh AC Maintenance
Offer: Summer AC cleaning from 149 SAR
Style: technician servicing wall AC unit in a clean Saudi home, trustworthy, realistic, simple offer layout`,
  },
];
export default function PromptGuide(){
 return <main className="page guide-page"><p className="eyebrow">Prompt guide</p><h1>How اعلاني creates launch assets for local service businesses.</h1><p className="lead small">Like the FABLE guide pages, this documents the system behind the website: the trade/service offer, the prompt architecture, the image API route, and the QA loop used before delivering client assets.</p><section className="guide-layout"><aside className="toc"><a href="#system">System</a><a href="#workflow">Workflow</a><a href="#prompts">Prompts</a><a href="#qa">QA</a></aside><article className="guide-content"><section id="system"><h2>1. The system</h2><p>اعلاني is built around repeatable static ad production. Each image starts from a business type, offer, service area, trust signal, and desired Arabic/English CTA.</p><div className="callout">The goal is not surreal AI art. The goal is a believable ad a Saudi workshop, technician, barber, cleaner, or clinic could post today.</div></section><section id="workflow"><h2>2. Workflow</h2><ol><li>Collect the business type, location, offer, price, and service promise.</li><li>Pick a realistic visual direction: workshop, AC visit, barber chair, cleaning visit, clinic checkup.</li><li>Generate a static image concept with clear empty text areas.</li><li>QA for realism, readable layout, local relevance, and no weird hands/logos/text.</li><li>Deliver captions, calendar, and assets for founder approval before posting.</li></ol></section><section id="prompts"><h2>3. Prompt blocks</h2>{promptBlocks.map(block=><div className="code-card" key={block.title}><h3>{block.title}</h3><pre>{block.code}</pre></div>)}</section><section id="qa"><h2>4. QA checklist</h2><table><tbody>{[['Realistic','Looks like a practical local business ad, not shiny AI art.'],['Useful','Includes a clear offer space and CTA area.'],['Local','Matches Saudi/GCC service-business context.'],['Safe','No fake logos, QR codes, or unreadable text.']].map(([a,b])=><tr key={a}><th>{a}</th><td>{b}</td></tr>)}</tbody></table></section></article></section></main>;
}
