"use client";
import React from 'react';
import Image from 'next/image';

const socialPosts = [
  { id: 1, user: "@EffinghamEats", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400", caption: "PNB Specialty sub hitting different today! #Oasis #Effingham", likes: 42, time: "2h ago" },
  { id: 2, user: "@ConwayConcierge", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=400", caption: "Just picked up some fresh honeycomb from Boyle's for a client. The logistics are smooth! #OasisLife", likes: 88, time: "5h ago" },
  { id: 3, user: "@LakesRegionLover", image: "https://images.unsplash.com/photo-1544333346-646698993425?auto=format&fit=crop&q=80&w=400", caption: "Sun setting over Wolfeboro. Dockside is opening soon for the season! #NH #Wolfeboro", likes: 156, time: "8h ago" }
];

export default function SocialFeed() {
  return (
    <div className="space-y-12">
       <div className="flex justify-between items-end mb-12">
          <div>
             <h3 className="text-3xl font-black text-white mb-2">Neighborhood <span className="text-primary italic">Live</span></h3>
             <p className="text-white/40 italic">Aggregating the Oasis social pulse in real-time.</p>
          </div>
          <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all leading-none">View Social Archive</button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPosts.map(post => (
            <div key={post.id} className="glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/20 transition-all group">
               <div className="relative h-64 overflow-hidden">
                  <Image src={post.image} alt={post.caption} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white">{post.user}</div>
               </div>
               <div className="p-6">
                  <p className="text-sm text-white/60 mb-6 italic">&quot;{post.caption}&quot;</p>
                  <div className="flex justify-between items-center border-t border-white/5 pt-6">
                     <div className="flex items-center gap-4">
                        <span className="text-xs text-secondary font-black tracking-widest uppercase">♥ {post.likes}</span>
                        <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{post.time}</span>
                     </div>
                     <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] underline underline-offset-4 decoration-primary/20 cursor-pointer">Share Pulse</span>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
}
