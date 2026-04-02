"use client";
import React from 'react';
import Link from 'next/link';

export default function BusinessBoostSlot() {
  return (
    <div className="glass rounded-[2.5rem] p-8 border-2 border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-center gap-6 group hover:border-primary/40 transition-all min-h-[300px]">
       <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xl shadow-primary/10">🚀</div>
       <div>
          <h4 className="text-xl font-black text-white mb-2">Want your shop here?</h4>
          <p className="text-sm text-white/40 max-w-xs mx-auto italic font-medium leading-relaxed">Join the Oasis ecosystem and boost your visibility to thousands of Lakes Region residents.</p>
       </div>
       <Link href="/membership" className="px-8 py-3 bg-primary text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">Promote Your Business</Link>
    </div>
  );
}
