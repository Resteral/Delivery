"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const initialOrders = [
  { id: "TUG-101", customer: "John D.", address: "123 Pine St, Effingham", items: "Specialty Sub, Draft IPA", total: 28.99, status: "pending", phone: "603-555-0123" },
  { id: "TUG-102", customer: "Sarah K.", address: "Main St, North Conway", items: "Moose Burger, Lodge Ribs", total: 40.50, status: "picked_up", phone: "603-555-0456" },
  { id: "TUG-103", customer: "Mike R.", address: "Dockside, Wolfeboro", items: "Fried Clams, Ice Cream", total: 26.50, status: "delivered", phone: "603-555-0789" }
];

export default function DriverHub() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
            Driver Hub & Logistics
          </span>
          <h1 className="text-4xl font-black tracking-tighter">Active <span className="text-primary italic">Deliveries</span></h1>
        </div>
        <Link href="/" className="text-xs font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-1">Back to Public View</Link>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {orders.map((order) => (
          <div key={order.id} className={`glass rounded-[2rem] p-8 border ${order.status === 'delivered' ? 'border-primary/10 opacity-50' : 'border-white/5'} transition-all`}>
            <div className="flex flex-col md:flex-row justify-between gap-6">
               <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-xs font-black text-secondary">{order.id}</span>
                     <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                       order.status === 'pending' ? 'bg-amber-500/20 text-amber-500' :
                       order.status === 'picked_up' ? 'bg-blue-500/20 text-blue-500' :
                       'bg-primary/20 text-primary'
                     }`}>
                       {order.status.replace('_', ' ')}
                     </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{order.customer}</h4>
                  <p className="text-white/60 text-sm mb-1">{order.address}</p>
                  <p className="text-white/30 text-xs mb-6 italic">{order.items}</p>
                  
                  <div className="flex gap-4">
                    <Link href={`tel:${order.phone}`} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all">Call Customer</Link>
                    <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(order.address)}`} target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase hover:bg-white/10 transition-all">Navigate</Link>
                  </div>
               </div>

               <div className="md:w-64 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Update Logistics</p>
                    <div className="flex flex-col gap-2">
                       <button 
                         onClick={() => updateStatus(order.id, 'picked_up')}
                         className={`py-3 rounded-xl text-[10px] font-bold uppercase transition-all ${order.status === 'picked_up' ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
                       >
                         Mark Picked Up
                       </button>
                       <button 
                         onClick={() => updateStatus(order.id, 'delivered')}
                         className={`py-3 rounded-xl text-[10px] font-bold uppercase transition-all ${order.status === 'delivered' ? 'bg-primary text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
                       >
                         Mark Delivered
                       </button>
                    </div>
                  </div>
                  <div className="mt-8 text-right">
                     <p className="text-2xl font-black text-secondary">${order.total.toFixed(2)}</p>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 pt-10 border-t border-white/5 text-center pb-20">
         <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Delivery Management Dashboard &copy; 2026 TUG Oasis</p>
      </footer>
    </div>
  );
}
