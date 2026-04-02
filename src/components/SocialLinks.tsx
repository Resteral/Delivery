"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="py-20 px-6 border-y border-white/5 bg-[#03050a] flex flex-col items-center text-center">
       <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary mb-8 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">The Regional Hub</span>
       <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter">Join the <span className="text-secondary italic underline underline-offset-8 decoration-secondary/20 font-black uppercase tracking-[0.2em]">Oasis Community</span></h2>
       
       <div className="flex flex-wrap justify-center gap-6 mb-20 max-w-2xl mx-auto">
          <Link href="https://facebook.com" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-white transition-all">Facebook</Link>
          <Link href="https://instagram.com" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-white transition-all">Instagram</Link>
          <Link href="https://twitter.com" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-primary hover:text-white transition-all">Twitter / X</Link>
          <Link href="https://whatsapp.com" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-secondary hover:text-white transition-all">WhatsApp Group</Link>
       </div>

       <div className="flex items-center gap-6 p-4 bg-white/[0.02] border border-white/5 rounded-[2rem] px-10 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
          <div className="flex -space-x-4">
             <div className="w-10 h-10 bg-primary rounded-full border-2 border-black flex items-center justify-center font-bold text-black text-xs">S</div>
             <div className="w-10 h-10 bg-secondary rounded-full border-2 border-black flex items-center justify-center font-bold text-black text-xs">W</div>
             <div className="w-10 h-10 bg-white/20 rounded-full border-2 border-black flex items-center justify-center font-bold text-white text-xs">8+</div>
          </div>
          <div className="text-left">
             <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Live from Effingham</p>
             <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-none">1.2K Community Members Online</p>
          </div>
       </div>
    </div>
  );
}
