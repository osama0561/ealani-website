import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'اعلاني — Website, Visual Identity, and Launch Ads for Saudi Businesses',
  description: 'Done-for-you business launch package for Saudi/GCC local businesses: website, visual identity, promotional ads, WhatsApp-ready sales material, and launch content.',
  icons: {
    icon: '/brand/ealani-icon.svg',
    apple: '/brand/ealani-icon.svg',
  },
  openGraph: {
    title: 'اعلاني — Full Business Launch Bucket',
    description: 'A 7999 SAR launch bundle offered for 2499 SAR: website, visual identity, promo ads, and launch content for Saudi/GCC local businesses.',
    images: ['/brand/ealani-ai-logo-concept.jpg'],
  },
};

const nav = [
  ['What’s Included','/services'], ['Examples','/gallery'], ['Pricing','/pricing'], ['AI Studio','/studio'], ['Contact','/contact']
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><div className="noise" /><header className="site-header"><a className="logo" href="/" aria-label="اعلاني home"><img src="/brand/ealani-icon.svg" alt="" /><span>اعلاني</span></a><nav>{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><a className="nav-cta" href="/contact">Get the 2499 SAR offer</a></header>{children}<footer className="footer"><div><img className="footer-logo" src="/brand/ealani-logo.svg" alt="اعلاني logo" /><p>Website, visual identity, and promotional content for Saudi/GCC local businesses.</p></div><div className="footer-links">{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}<a href="/prompt">Internal prompt system</a></div></footer></body></html>;
}
