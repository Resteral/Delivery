"use client";
import React from 'react';
import Link from 'next/link';

const pastOrders = [
  { id: "TUG-998", merchant: "PNB Eats", date: "Mar 28, 2026", items: ["Specialty Sub", "Large Pizza"], total: 31.49, status: "Delivered" },
  { id: "TUG-942", merchant: "Muddy Moose Pub", date: "Mar 22, 2026", items: ["Moose Burger", "Clam Chowder"], total: 25.00, status: "Delivered" },
  { id: "TUG-812", merchant: "Boyle's General", date: "Mar 15, 2026", items: ["Local Honey", "Produce Box"], total: 34.00, status: "Delivered" }
];

export default function OrderHistory() {
  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans">
      <header className="max-w-4xl mx-auto py-16 flex justify-between items-end border-b border-white/5 mb-20">
         <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Personal Archive</span>
            <h1 className="text-5xl font-black tracking-tighter">Your <span className="text-gradient">Oasis Orders</span></h1>
         </div>
         <Link href="/" className="text-xs font-black text-white/20 hover:text-white uppercase tracking-widest border-b border-white/10 pb-1">Back to Shop</Link>
      </header>

      <main className="max-w-4xl mx-auto space-y-8 pb-32">
         {pastOrders.map(order => (
           <div key={order.id} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all flex flex-col md:flex-row justify-between gap-12 group">
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{order.id}</span>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{order.date}</span>
                 </div>
                 <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{order.merchant}</h3>
                 <div className="flex gap-2 flex-wrap">
                    {order.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white/40 uppercase">{item}</span>
                    ))}
                 </div>
              </div>

              <div className="md:text-right flex flex-col justify-between">
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/10 mb-2">Total Paid</p>
                    <p className="text-4xl font-black text-white leading-none">${order.total.toFixed(2)}</p>
                 </div>
                 <div className="mt-8 flex gap-4 md:justify-end">
                    <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10">View Receipt</button>
                    <button className="px-6 py-3 bg-primary/20 text-primary border border-primary/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">Reorder</button>
                 </div>
              </div>
           </div>
         ))}
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black/40">
         <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.6em]">Secure Logistic Archive &copy; 2026 TUG Logistics</p>
      </footer>
    </div>
  );
}
