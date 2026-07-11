const images = [
  {
    title: 'Car workshop launch bucket',
    body: 'Website hero, brand direction, inspection offer ads, and WhatsApp-ready service visuals.',
    image: '/static-ads/car-workshop.jpg',
  },
  {
    title: 'AC maintenance launch bucket',
    body: 'Landing page structure, seasonal offer creative, service cards, and emergency visit CTA.',
    image: '/static-ads/ac-maintenance.jpg',
  },
  {
    title: 'Plumbing service launch bucket',
    body: 'Trust-focused service page, urgent repair promos, and customer message material.',
    image: '/static-ads/plumbing-service.jpg',
  },
  {
    title: 'Barber shop launch bucket',
    body: 'Visual identity direction, package offer posts, and booking/WhatsApp assets.',
    image: '/static-ads/barber-package.jpg',
  },
  {
    title: 'Car detailing launch bucket',
    body: 'Premium style direction, service bundle ads, and mobile-first lead page sections.',
    image: '/static-ads/car-detailing.jpg',
  },
  {
    title: 'Mobile repair launch bucket',
    body: 'Same-day repair messaging, trust visuals, service offer ads, and contact CTA assets.',
    image: '/static-ads/mobile-repair.jpg',
  },
];

export default function Gallery(){return <main className="page business-page"><p className="eyebrow">Examples</p><h1>Launch-bucket examples for local service businesses.</h1><p className="lead small">Each category can include a website, visual identity direction, launch ads, social posts, and WhatsApp-ready sales material. Final assets are customized to the business.</p><div className="gallery-grid image-gallery">{images.map((item,i)=><article className={`gallery-card g${i%4}`} key={item.title}><div className="fake-visual image-visual"><img src={item.image} alt={item.title} /></div><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><div className="contact-card"><h2>Want this for your business?</h2><p>Send your business type, city, and offer. اعلاني will scope the 2499 SAR launch package before starting.</p><a className="btn primary" href="/contact">Claim launch offer</a></div></main>}
