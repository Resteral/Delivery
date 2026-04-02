"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const statuses = [
  { id: 'pending', name: 'Order Received', desc: 'The Oasis has received your request.', icon: '📜' },
  { id: 'confirmed', name: 'Shop Confirmed', desc: 'The local partner is preparing your goods.', icon: '🤝' },
  { id: 'picked_up', name: 'On the Road', desc: 'The TUG driver is en route with your order.', icon: '🚗' },
  { id: 'delivered', name: 'Arrived at Oasis', desc: 'Your delivery has been successfully completed.', icon: '✨' }
];

export default function OrderTracking() {
  const [currentStep, setCurrentStep] = useState(0);

  // Mock progress for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(s => (s < 2 ? s + 1 : s));
    }, 15000); // Progress every 15s for demo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020408] text-white p-6 font-sans flex flex-col items-center">
      <header className="max-w-4xl w-full mb-16 pt-12 text-center">
         <Link href="/" className="inline-flex items-center gap-3 mb-10">
            <Image src="/logo.png" alt="TUG Logo" width={56} height={56} className="brightness-200" />
            <h1 className="text-3xl font-black tracking-tighter">TUG <span className="text-primary uppercase italic">Track</span></h1>
            <div className="ml-4 w-4 h-4 bg-primary rounded-full animate-ping shadow-[0_0_20px_#10b981]" />
         </Link>
         <h2 className="text-4xl md:text-6xl font-black mb-4">Track your <span className="text-primary italic">Oasis</span></h2>
         <div className="flex justify-center gap-12 mt-12 mb-4">
            <div className="text-center">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Estimated Arrival</p>
               <p className="text-4xl font-black text-secondary">11:14 AM</p>
            </div>
            <div className="text-center">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Current ETA</p>
               <p className="text-4xl font-black text-white">~ 18 MINS</p>
            </div>
         </div>
         <p className="text-white/40 text-[9px] tracking-[0.6em] uppercase font-bold">Order ID: TUG-101-EFH</p>
      </header>

      <div className="max-w-2xl w-full glass rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
         {/* Visual Progress Road */}
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
         
         <div className="relative z-10 space-y-12">
            {statuses.map((status, i) => (
              <div key={status.id} className={`flex gap-8 items-start transition-all duration-700 ${i <= currentStep ? 'opacity-100' : 'opacity-20'}`}>
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-all ${
                   i < currentStep ? 'bg-primary text-black' : 
                   i === currentStep ? 'bg-secondary text-black shadow-lg shadow-secondary/20 animate-pulse' : 
                   'bg-white/5 text-white/40'
                 }`}>
                    {i < currentStep ? '✓' : status.icon}
                 </div>
                 
                 <div>
                    <h4 className={`text-xl font-bold ${i === currentStep ? 'text-white' : i < currentStep ? 'text-white' : 'text-white/20'}`}>{status.name}</h4>
                    <p className="text-sm text-white/40">{status.desc}</p>
                 </div>
              </div>
            ))}
         </div>

         {/* Driver Info Overlay if Picked Up */}
         {currentStep >= 2 && currentStep < 3 && (
            <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full border border-primary/20 flex items-center justify-center text-xs font-black italic">DR</div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-1">Your Driver</p>
                    <p className="text-sm font-bold">Sean - TUG Concierge</p>
                  </div>
               </div>
               <Link href="tel:5085070305" className="px-6 py-3 bg-secondary text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">Call Sean</Link>
            </div>
         )}
      </div>

      {/* Aesthetic Map Hint */}
      <div className="max-w-xl w-full mt-12 bg-primary/5 rounded-[2rem] p-8 border border-primary/10 flex items-center gap-6">
         <span className="text-3xl">📍</span>
         <div className="flex-1">
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-1">Destination</h4>
            <p className="text-sm font-bold">123 Pine St, Effingham</p>
         </div>
         <p className="text-xs font-black text-white/40">~ 8 MINS</p>
      </div>

      <footer className="mt-24 text-center pb-20">
         <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">Integrated Logistics powered by TUG</p>
      </footer>
    </div>
  );
}
