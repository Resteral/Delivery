"use client";
import React from 'react';
import Link from 'next/link';

const upcomingEvents = [
  { id: 1, title: "Mud Season Mixer", date: "April 15, 2026", time: "6:00 PM", location: "PNB Eats Patio", description: "Join us for a casual community meetup with special Oasis pricing on all subs and brews.", category: "Social" },
  { id: 2, title: "Lakes Region Spring Clean", date: "April 22, 2026", time: "9:00 AM", location: "Effingham Town Square", description: "A town-wide clean-up day. TUG Oasis is providing complimentary coffee for all volunteers.", category: "Community" },
  { id: 3, title: "Wolfeboro Boat Show Preview", date: "May 1, 2026", time: "10:00 AM", location: "Wolfeboro Dockside", description: "Get a first look at the 2026 fleet. Exclusive reservation bookings available during the event.", category: "Business" }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans">
      <header className="max-w-5xl mx-auto py-16 flex justify-between items-end border-b border-white/5 mb-16">
         <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-4 block">Regional Calendar</span>
            <h1 className="text-5xl font-black tracking-tighter">Oasis <span className="text-gradient underline underline-offset-8">EVENTS</span></h1>
         </div>
         <Link href="/" className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">← Back to Shop</Link>
      </header>

      <main className="max-w-5xl mx-auto space-y-12 pb-32">
         {upcomingEvents.map(event => (
           <div key={event.id} className="glass p-12 rounded-[3.5rem] border border-white/5 hover:border-primary/20 transition-all flex flex-col md:flex-row gap-12 group">
              <div className="w-full md:w-48 text-center shrink-0">
                 <div className="text-4xl font-black text-primary mb-2 leading-none uppercase">{event.date.split(' ')[0]}</div>
                 <div className="text-6xl font-black text-white leading-none">{event.date.split(' ')[1].replace(',', '')}</div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mt-4">{event.category}</p>
              </div>

              <div className="flex-1">
                 <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black group-hover:text-primary transition-colors tracking-tight">{event.title}</h3>
                    <div className="text-right">
                       <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">{event.time}</p>
                       <p className="text-xs font-medium text-white/30">{event.location}</p>
                    </div>
                 </div>
                 <p className="text-lg text-white/50 leading-relaxed mb-8">{event.description}</p>
                 <div className="flex gap-4">
                    <button className="px-8 py-3 bg-primary text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Add to Calendar</button>
                    <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10">Share Event</button>
                 </div>
              </div>
           </div>
         ))}
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black/40">
         <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">Official Community Calendar &copy; 2026 TUG Logistics</p>
      </footer>
    </div>
  );
}
