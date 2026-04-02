"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { businesses } from '@/lib/data';
import SocialFeed from '@/components/SocialFeed';
import FeaturedAd from '@/components/FeaturedAd';
import BusinessBoostSlot from '@/components/BusinessBoostSlot';
import SocialLinks from '@/components/SocialLinks';

const towns = ["All", "Effingham", "North Conway", "Wolfeboro"];

export default function HomeClient() {
  const [activeTown, setActiveTown] = useState("All");

  const filteredBusinesses = activeTown === "All" 
    ? businesses 
    : businesses.filter(b => b.town === activeTown);

  return (
    <div className="min-h-screen bg-[#020408]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
             <Image src="/logo.png" alt="TUG Logo" width={42} height={42} className="brightness-200" />
             <h1 className="text-2xl font-black tracking-tighter text-white">TUG <span className="text-primary uppercase">Oasis</span></h1>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/5 rounded-full">
               <span className="text-sm">🌤️</span>
               <div className="text-left">
                  <p className="text-[8px] font-black uppercase text-white/40 tracking-widest leading-none">Lakes Region</p>
                  <p className="text-[10px] font-bold text-white leading-none">42°F · Clear Skies</p>
               </div>
            </div>
            <Link href="/events" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors">Events</Link>
            <Link href="/forum" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">Forum</Link>
            <Link href="/orders" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">Orders</Link>
            <Link href="/membership" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">Membership</Link>
            <Link href="tel:5085070305" className="px-6 py-2.5 bg-secondary text-black rounded-full font-bold text-sm hover:opacity-90 transition-all">508.507.0305</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block">TUG Oasis: Premium Local Delivery</span>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-[calc(-0.04em)] mb-8">Effingham&apos;s <br /><span className="text-gradient">Elite Concierge.</span></h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 italic">&quot;We pick up what you order. Fast, secure, and personalized delivery within a 1-hour radius.&quot;</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#directory" className="px-10 py-5 bg-primary text-black rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20">Browse Directory</Link>
            <Link href="/membership" className="px-10 py-5 bg-white/5 text-white/80 border border-white/10 rounded-full font-black text-lg hover:bg-white/10 transition-all">Join The Oasis Members</Link>
          </div>
        </div>
      </section>

      <section className="px-6 mb-32">
         <div className="max-w-7xl mx-auto">
            <FeaturedAd />
         </div>
      </section>

      {/* Town Filtering & Merchant Directory */}
      <section id="directory" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <h3 className="text-3xl font-black text-white mb-2 underline underline-offset-8 decoration-primary/20">Local Hubs</h3>
                <p className="text-white/40 italic">One-tap call or explore their menu in our oasis.</p>
             </div>
             <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-2xl">
                {towns.map(town => (
                  <button 
                    key={town} 
                    onClick={() => setActiveTown(town)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTown === town ? 'bg-primary text-black' : 'text-white/40 hover:text-white'}`}
                  >
                    {town}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBusinesses.map((biz) => (
              <div key={biz.id} className="group glass rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all border border-white/5 hover:border-primary/20 flex flex-col md:flex-row gap-8 relative overflow-hidden">
                {!biz.isOpen && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px] z-20 flex items-center justify-center">
                    <span className="px-6 py-2 bg-black text-white/60 text-[10px] font-black uppercase tracking-[0.4em] border border-white/10 rounded-full">Merchant Closed</span>
                  </div>
                )}
                <div className="w-full md:w-56 h-56 rounded-[2.5rem] overflow-hidden shrink-0 relative transition-transform group-hover:scale-105">
                  <Image src={biz.image} alt={biz.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors">{biz.name}</h4>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">{biz.category} · {biz.town}</p>
                    <p className="text-sm text-white/50 mb-8 line-clamp-2 leading-relaxed">{biz.description}</p>
                    
                    <div className="flex flex-col gap-3">
                       <Link 
                         href={`/stores/${biz.id}`} 
                         className="w-full py-4 bg-white/[0.04] border border-white/10 text-center rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:bg-white/10 transition-all"
                       >
                         View Oasis Profile
                       </Link>
                       <Link 
                         href={`tel:${biz.phone.replace(/-/g, '')}`} 
                         className="w-full py-4 bg-primary text-black text-center font-black rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/10 hover:scale-[1.02] transition-transform"
                       >
                         CALL: {biz.phone}
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <BusinessBoostSlot />
          </div>
        </div>
      </section>

      {/* Social Pulse Section */}
      <section className="py-32 px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <SocialFeed />
         </div>
      </section>

      <SocialLinks />

      {/* How it Works / Platform Info */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Elite Logistics Protocol</h3>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">How the <span className="text-gradient underline underline-offset-8">Oasis Works</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full border border-primary/20 flex items-center justify-center text-2xl mx-auto mb-8 shadow-xl shadow-primary/10">🔍</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">1. Browse & Select</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Explore premium goods from exclusive partners in North Conway, Wolfeboro, and Effingham. Add your favorites directly to your Oasis Basket.</p>
               </div>
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full border border-secondary/20 flex items-center justify-center text-2xl mx-auto mb-8 shadow-xl shadow-secondary/10">🚛</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">2. Concierge Pickup</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Our elite driver (Sean) is dispatched instantly. We coordinate directly with the merchant to match your order and handle the logistics for you.</p>
               </div>
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-2xl mx-auto mb-8">✨</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">3. Premium Delivery</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Track your Oasis in real-time. Delivery is completed within 1 hour, bringing the best of the lakes region directly to your door.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-3">
             <Image src="/logo.png" alt="TUG Logo" width={36} height={36} className="brightness-200" />
             <span className="text-lg font-black tracking-tighter text-white">TUG OASIS</span>
          </div>
          <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.4em]">&copy; 2026 The Urban Guide. Elite Logistics Protocol. [BUILD 1.0.10-STABLE]</p>
          <div className="flex gap-8 text-center md:text-left flex-wrap justify-center">
            <Link href="/events" className="text-xs font-black text-primary hover:text-white transition-colors uppercase tracking-[0.2em] underline underline-offset-8">Regional Events</Link>
            <Link href="/forum" className="text-xs font-black text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] underline underline-offset-8">Oasis Forum</Link>
            <Link href="/membership" className="text-xs font-bold text-secondary hover:text-white transition-colors uppercase tracking-[0.2em] underline underline-offset-8">Join the Oasis</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
