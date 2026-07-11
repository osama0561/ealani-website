const services = [
  ['Business landing page / website', 'A mobile-first website with your services, offer, contact details, and WhatsApp CTA.'],
  ['Visual identity / هوية بصرية', 'Logo direction or cleanup, brand colors, font direction, and a simple style system.'],
  ['Launch promotional ads', 'Static promo ads for your main offers, services, and first campaigns.'],
  ['Social media launch kit', 'Ready-to-post visuals for Instagram, Snapchat, WhatsApp, and Google Business.'],
  ['WhatsApp-ready sales material', 'Images and text you can send directly when customers ask about your service.'],
  ['Offer and copywriting help', 'We shape the offer so the creative is not just pretty — it is clear and sellable.'],
];
export default function Services(){return <main className="page business-page"><p className="eyebrow">What’s Included</p><h1>One launch bucket for your website, brand, and first ads.</h1><p className="lead small">اعلاني is not a design tutorial and not a recurring posts package. It is a fixed-scope done-for-you launch package for business owners who need to look professional quickly.</p><div className="cards">{services.map(([t,d])=><article key={t}><h2>{t}</h2><p>{d}</p></article>)}</div><div className="contact-card"><h2>Best fit</h2><p>Workshops, AC maintenance, plumbing, barbers, car detailing, cleaning, clinics, mobile repair, small shops, and new local service businesses.</p><a className="btn primary" href="/contact">Claim launch offer</a></div></main>}
