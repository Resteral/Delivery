"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedAd() {
  return (
    <div className="relative glass rounded-[3rem] p-12 border border-primary/20 overflow-hidden group mb-32">
       <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <Image 
             src="https://images.unsplash.com/photo-1581094288338-2314dddb7385?auto=format&fit=crop&q=80&w=800" 
             alt="Carpentry Banner" 
             fill 
             className="object-cover"
          />
       </div>
       <div className="relative z-10 max-w-2xl">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-block">Featured Professional</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Walt&apos;s <span className="text-gradient">Carpentry</span></h2>
          <p className="text-xl text-white/50 leading-relaxed mb-10 font-medium">Build your Oasis with premium craftsmanship. Custom framing, restorative woodcraft, and bespoke cabinetry direct from Effingham.</p>
          <div className="flex flex-col md:flex-row gap-6">
             <Link href="/stores/walts-carpentry" className="px-10 py-5 bg-primary text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">Explore Craft</Link>
             <Link href="tel:6035550912" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                <span className="text-primary text-lg">📞</span> Call Walt Now
             </Link>
          </div>
       </div>
    </div>
  );
}
