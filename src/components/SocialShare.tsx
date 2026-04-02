"use client";
import React from 'react';

export default function SocialShare({ title, url }: { title: string, url: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-3 items-center mt-6">
       <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mr-2">Share Oasis:</span>
       <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-lg"
       >
          FB
       </a>
       <a 
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-xs font-black"
       >
          X
       </a>
       <a 
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all text-lg"
       >
          WA
       </a>
    </div>
  );
}
