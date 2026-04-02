import React from 'react';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';

const tiers = [
  {
    name: "Silver Oasis",
    price: 10,
    period: "month",
    features: ["Priority Scheduling", "Reduced Delivery Fees ($2 Off)", "Access to Daily Store Specials"],
    cta: "Join Silver",
    color: "bg-white/10",
    border: "border-white/20"
  },
  {
    name: "Gold Oasis",
    price: 20,
    period: "month",
    features: ["High-Priority Concierge", "50% Off ALL Delivery Fees", "Oasis Partner Discounts (10% Off Items)", "Early Access to Seasonal Events"],
    cta: "Elite Status",
    color: "bg-secondary/10",
    border: "border-secondary/40",
    mostPopular: true
  },
  {
    name: "Emerald Oasis",
    price: 30,
    period: "month",
    features: ["VIP Priority: Zero Waiting", "FREE Delivery on all orders", "ALL Tips Included ($5 Flat Credit Per Order)", "Direct Private Channel to Driver (Sean)"],
    cta: "Emerald Access",
    color: "bg-primary/20",
    border: "border-primary/50"
  }
];

export default function Membership() {
  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans flex flex-col items-center">
      <header className="max-w-4xl w-full mb-20 pt-16 text-center">
         <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block">
            TUG Oasis Premium
         </span>
         <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">Elevate Your <br /><span className="text-gradient">Local Experience.</span></h1>
         <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
            Choose the membership tier that fits your lifestyle. Enjoy priority scheduling, inclusive tips, and elite delivery perks.
         </p>
      </header>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
         {tiers.map((tier) => (
           <div key={tier.name} className={`relative glass p-10 rounded-[3rem] border ${tier.border} ${tier.color} transition-all hover:scale-[1.02] flex flex-col justify-between overflow-hidden`}>
              {tier.mostPopular && (
                 <div className="absolute top-8 right-8 px-3 py-1 bg-secondary text-black text-[8px] font-black uppercase tracking-widest rounded-full">Most Popular</div>
              )}
              <div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-10">
                   <span className="text-5xl font-black tracking-tighter">${tier.price}</span>
                   <span className="text-white/30 text-sm mb-1 font-bold uppercase tracking-widest">/ {tier.period}</span>
                </div>
                
                <ul className="space-y-4 mb-12">
                   {tier.features.map(f => (
                     <li key={f} className="flex items-start gap-4 text-sm text-white/60 font-medium">
                        <span className="text-primary mt-1">✓</span>
                        {f}
                     </li>
                   ))}
                </ul>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${
                tier.mostPopular ? 'bg-secondary text-black hover:opacity-90' : 'bg-white text-black hover:bg-white/90'
              }`}>
                 {tier.cta}
              </button>
           </div>
         ))}
      </div>

      {/* Oasis Partner Program */}
      <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
         <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Business Expansion</h3>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter italic">Oasis <span className="text-gradient">PARTNER PROGRAM</span></h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 font-medium italic">&quot;Want your shop promoted? Boost your visibility with our professional merchant tier.&quot;</p>
            <ul className="space-y-4 mb-10">
               <li className="flex items-center gap-4 text-sm font-bold text-white/80">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-[10px]">1</span>
                  Premium Directory Boost Slot
               </li>
               <li className="flex items-center gap-4 text-sm font-bold text-white/80">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-[10px]">2</span>
                  Professional Storefront Verification
               </li>
               <li className="flex items-center gap-4 text-sm font-bold text-white/80">
                  <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-[10px]">3</span>
                  Social Media Spotlight Features
               </li>
            </ul>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all">Partner Inquiry</button>
         </div>
         <div className="glass p-10 rounded-[3rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center py-20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <span className="text-5xl mb-8 relative z-10 group-hover:scale-110 transition-transform">🏘️</span>
            <h4 className="text-xl font-bold text-white relative z-10 mb-4 group-hover:text-primary transition-colors italic uppercase tracking-widest leading-none">Oasis Spotlight</h4>
            <p className="text-xs text-white/30 relative z-10 italic max-w-[180px]">Secure your featured slot on the directory home page.</p>
         </div>
      </section>

      <SocialLinks />
      <footer className="py-20 text-center">
         <Link href="/" className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-[0.6em] transition-colors">Return to Merchant Directory</Link>
      </footer>
    </div>
  );
}
