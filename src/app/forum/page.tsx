"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const initialThreads = [
  { id: 1, author: "Local-Eats-Fan", title: "Best Pizza in Ossipee?", content: "Trying to decide between PNB and others. Any consensus?", category: "Recommendations", replies: 12, time: "2h ago" },
  { id: 2, author: "Sean-TUG", title: "Delivery Update: Mud Season Protocol", content: "Just a heads up, deliveries to back-roads might take an extra 10 mins due to mud. Stay safe!", category: "Announcements", replies: 5, time: "4h ago" },
  { id: 3, author: "Wolfeboro-Boutique", title: "Spring Collection Launch Event!", content: "Next Friday we're hosting a small preview of the new lakeside apparel. All Oasis members welcome!", category: "Events", replies: 28, time: "1d ago" }
];

export default function Forum() {
  const [threads] = useState(initialThreads);
  const [showNewThread, setShowNewThread] = useState(false);

  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans">
      <header className="max-w-5xl mx-auto py-12 flex justify-between items-end border-b border-white/5 mb-16">
        <div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Town Discussion Board</span>
           <h1 className="text-5xl font-black tracking-tighter italic">Oasis <span className="text-gradient">COMMUNITY</span></h1>
        </div>
        <button 
          onClick={() => setShowNewThread(true)}
          className="px-8 py-3 bg-primary text-black rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
        >
          + Create Thread
        </button>
      </header>

      <main className="max-w-5xl mx-auto">
        {/* Category Filters */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 custom-scrollbar">
           {["All Threads", "Recommendations", "Announcements", "Events", "Marketplace"].map(cat => (
             <button key={cat} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all whitespace-nowrap">
                {cat}
             </button>
           ))}
        </div>

        {/* Thread List */}
        <div className="space-y-6 mb-24">
           {threads.map(thread => (
             <div key={thread.id} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                        {thread.category}
                      </span>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{thread.title}</h3>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">{thread.time}</p>
                      <p className="text-xs font-bold text-white/40">{thread.replies} Replies</p>
                   </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed mb-6 line-clamp-2">{thread.content}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                   <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black italic">
                      {thread.author[0]}
                   </div>
                   <span className="text-xs font-bold text-white/60">{thread.author}</span>
                </div>
             </div>
           ))}
        </div>
      </main>

      {/* New Thread Modal (Mock) */}
      {showNewThread && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
           <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowNewThread(false)} />
           <div className="relative glass w-full max-w-xl rounded-[3rem] p-12 overflow-hidden">
              <h2 className="text-3xl font-black mb-8 italic">Start a <span className="text-primary italic">Discussion</span></h2>
              <div className="space-y-6">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2 px-1">Thread Title</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none" placeholder="What&apos;s on your mind?" />
                 </div>
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2 px-1">Content</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm focus:border-primary outline-none min-h-[150px]" placeholder="Explain your thoughts..." />
                 </div>
                 <div className="flex gap-4 pt-4">
                    <button className="flex-1 py-4 bg-primary text-black rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform">Publish to Oasis</button>
                    <button onClick={() => setShowNewThread(false)} className="flex-1 py-4 bg-white/5 text-white/40 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10">Discard</button>
                 </div>
              </div>
           </div>
        </div>
      )}

      <footer className="py-20 text-center">
         <Link href="/" className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-[0.6em] transition-colors">Return to Merchant Directory</Link>
      </footer>
    </div>
  );
}
