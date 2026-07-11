'use client';
import { useState } from 'react';

export default function Studio(){
 const [business,setBusiness]=useState('Jeddah Auto Workshop');
 const [offer,setOffer]=useState('Full car inspection for 99 SAR');
 const [style,setStyle]=useState('workshop');
 const [result,setResult]=useState<any>(null);
 const [loading,setLoading]=useState(false);
 async function generate(){setLoading(true);setResult(null);const res=await fetch('/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({business,offer,style})});setResult(await res.json());setLoading(false)}
 return <main className="page studio-page"><div><p className="eyebrow">AI Studio</p><h1>Generate a realistic static promo ad concept for a local service business.</h1><p className="lead small">This calls the server API route. If no image API key is added in Vercel, it safely returns the final prompt preview instead of exposing any key.</p></div><section className="studio"><div className="studio-form"><label>Business name<input value={business} onChange={e=>setBusiness(e.target.value)} /></label><label>Offer / Campaign<input value={offer} onChange={e=>setOffer(e.target.value)} /></label><label>Style<select value={style} onChange={e=>setStyle(e.target.value)}><option value="workshop">Car workshop / mechanic</option><option value="maintenance">AC / home maintenance</option><option value="barber">Barber / personal service</option><option value="clinic">Clinic / dental</option><option value="cleaning">Cleaning / home service</option></select></label><button className="btn primary" onClick={generate} disabled={loading}>{loading?'Generating…':'Generate concept'}</button></div><div className="studio-output">{result?.image?<img src={result.image} alt="Generated promo" />:<div className="empty">{result?.prompt || 'Your realistic static ad prompt will appear here.'}</div>}{result?.message && <p>{result.message}</p>}{result?.error && <p className="error">{result.error}</p>}</div></section></main>
}
