"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const businesses = [
  {
    id: "pnb-eats",
    name: "PNB Eats",
    location: "Effingham, NH",
    town: "Effingham",
    phone: "603-301-0113",
    category: "Pizza & Subs",
    description: "Breakfast, sandwiches, specialty subs, and fresh pizza.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    products: [
      { id: "p1", name: "Specialty Sub", price: 12.99 },
      { id: "p2", name: "Large Pizza", price: 18.50 }
    ]
  },
  {
    id: "boyles",
    name: "Boyle's General Store",
    location: "Effingham Falls, NH",
    town: "Effingham",
    phone: "603-539-7888",
    category: "General Store",
    description: "Local convenience, groceries, and neighborhood essentials.",
    image: "https://images.unsplash.com/photo-1534723452243-ec02b70498b3?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    products: [
      { id: "b1", name: "Local Honey", price: 9.00 },
      { id: "b2", name: "Fresh Produce Box", price: 25.00 }
    ]
  },
  {
    id: "muddy-moose",
    name: "Muddy Moose Pub",
    location: "North Conway, NH",
    town: "North Conway",
    phone: "603-356-3827",
    category: "Restaurant",
    description: "Hearty American comfort food in a rustic lodge setting.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    products: [
      { id: "m1", name: "Moose Burger", price: 16.50 },
      { id: "m2", name: "Lodge Ribs", price: 24.00 }
    ]
  },
  {
    id: "wolfeboro-dockside",
    name: "Wolfeboro Dockside",
    location: "Wolfeboro, NH",
    town: "Wolfeboro",
    phone: "603-569-3456",
    category: "Seafood & Grill",
    description: "Casual lakeside dining and famous dairy bar treats.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400",
    isOpen: false,
    products: [
      { id: "w1", name: "Fried Clam Strip Plate", price: 19.99 },
      { id: "w2", name: "Double Scoop Cone", price: 6.50 }
    ]
  },
  {
    id: "barley-salt",
    name: "Barley & Salt",
    location: "North Conway, NH",
    town: "North Conway",
    phone: "603-730-5306",
    category: "Tap House",
    description: "Modern tap house with rotating craft beers and creative kitchen items.",
    image: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    products: [
      { id: "bs1", name: "Artisan Flatbread", price: 14.00 },
      { id: "bs2", name: "Local Craft 4-Pack", price: 18.00 }
    ]
  },
  {
    id: "morrisseys",
    name: "Morrissey's Front Porch",
    location: "Wolfeboro, NH",
    town: "Wolfeboro",
    phone: "603-569-3662",
    category: "Seafood & Irish",
    description: "Family seafood, Irish fare, and premium ice cream standards.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400",
    isOpen: true,
    products: [
      { id: "mp1", name: "Fish and Chips", price: 18.99 },
      { id: "mp2", name: "Irish Beef Stew", price: 16.00 }
    ]
  }
];

const towns = ["All", "Effingham", "North Conway", "Wolfeboro"];

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [activeTown, setActiveTown] = useState("All");

  const addToCart = (product: any, bizName: string) => {
    setCart([...cart, { ...product, bizName, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId: number) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const filteredBusinesses = activeTown === "All" 
    ? businesses 
    : businesses.filter(b => b.town === activeTown);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#020408]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
             <Image src="/logo.png" alt="TUG Logo" width={42} height={42} className="brightness-200" />
             <h1 className="text-2xl font-black tracking-tighter text-white">TUG <span className="text-primary uppercase">Oasis</span></h1>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/5 rounded-full">
               <span className="text-sm">🌤️</span>
               <div className="text-left">
                  <p className="text-[8px] font-black uppercase text-white/40 tracking-widest leading-none">Lakes Region</p>
                  <p className="text-[10px] font-bold text-white leading-none">42°F · Clear Skies</p>
               </div>
            </div>
            <Link href="/forum" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">Forum</Link>
            <Link href="/membership" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">Membership</Link>
            <button onClick={() => setShowCart(!showCart)} className="relative text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">
              Cart ({cart.length})
              {cart.length > 0 && <span className="absolute -top-2 -right-3 w-4 h-4 bg-primary text-black rounded-full text-[8px] flex items-center justify-center font-black animate-pulse">!</span>}
            </button>
            <Link href="tel:5085070305" className="px-6 py-2.5 bg-secondary text-black rounded-full font-bold text-sm hover:opacity-90 transition-all">508.507.0305</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block">TUG Oasis: Premium Local Delivery</span>
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-[calc(-0.04em)] mb-8">Effingham's <br /><span className="text-gradient">Elite Concierge.</span></h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12 italic">"We pick up what you order. Fast, secure, and personalized delivery within a 1-hour radius."</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="#directory" className="px-10 py-5 bg-primary text-black rounded-full font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/20">Browse Directory</Link>
            <Link href="/membership" className="px-10 py-5 bg-white/5 text-white/80 border border-white/10 rounded-full font-black text-lg hover:bg-white/10 transition-all">Join The Oasis Members</Link>
          </div>
        </div>
      </section>

      {/* Merchant Updates Feed */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6">Town Feed</h3>
               <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Active In The <span className="italic">Neighborhood</span></h2>
               <p className="text-sm text-white/40 mb-8 leading-relaxed">Stay updated with fresh arrivals and town-specific announcements from our partners.</p>
            </div>
            <div className="flex-1 space-y-6">
               <div className="glass p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">PNB EATS</span>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Just Now</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">✨ Fresh batch of hand-rolled specialty subs is ready for the lunch rush! Call Sean for VIP delivery. 🥖🔥</p>
               </div>
               <div className="glass p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] opacity-60">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase">BOYLE'S GENERAL</span>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">2 Hours Ago</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-medium">New arrival of local maple syrup and fresh farm eggs this morning. Come stock up your Oasis! 🥚🍁</p>
               </div>
            </div>
         </div>
      </section>

      {/* Town Filtering & Directory */}
      <section id="directory" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <h3 className="text-3xl font-black text-white mb-2">Featured Hubs</h3>
                <p className="text-white/40 italic">Refine by neighborhood within our 1-hour coverage.</p>
             </div>
             <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-2xl">
                {towns.map(town => (
                  <button 
                    key={town} 
                    onClick={() => setActiveTown(town)}
                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTown === town ? 'bg-primary text-black' : 'text-white/40 hover:text-white'}`}
                  >
                    {town}
                  </button>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBusinesses.map((biz) => (
              <div key={biz.id} className="group glass rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all border border-white/5 hover:border-primary/20 flex flex-col md:flex-row gap-8 relative overflow-hidden">
                {!biz.isOpen && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                    <span className="px-6 py-2 bg-black text-white/60 text-[10px] font-black uppercase tracking-[0.4em] border border-white/10 rounded-full">Currently Closed</span>
                  </div>
                )}
                <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden shrink-0 relative">
                  <Image src={biz.image} alt={biz.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{biz.name}</h4>
                       <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{biz.category}</span>
                    </div>
                    <p className="text-xs text-white/40 mb-1">{biz.location}</p>
                    <p className="text-sm text-white/50 mb-6 line-clamp-1">{biz.description}</p>
                    <div className="space-y-3 mb-8">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 ml-1">Featured: Lunch Menu</p>
                      {biz.products.map(p => (
                        <div key={p.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-primary/40 transition-all group/item">
                           <div>
                              <span className="text-xs font-bold text-white/90 block mb-1">{p.name}</span>
                              <div className="flex items-center gap-2">
                                 <span className="text-[9px] font-black text-white/10 line-through">${(p.price * 1.15).toFixed(2)}</span>
                                 <span className="text-[9px] font-black text-secondary uppercase tracking-widest bg-secondary/10 px-2 rounded-full">15% OFF</span>
                              </div>
                           </div>
                           <div className="flex items-center gap-5">
                             <span className="text-sm text-secondary font-black">${p.price.toFixed(2)}</span>
                             <button onClick={() => addToCart(p, biz.name)} className="px-5 py-2 bg-primary/20 text-primary rounded-xl text-[10px] font-black uppercase hover:bg-primary hover:text-black shadow-lg shadow-primary/10 transition-all">+ Cart</button>
                           </div>
                        </div>
                      ))}
                    </div>

                    {/* Seating Arrangement Hint */}
                    <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                          <span className="text-sm">🪑</span>
                          <div className="text-left">
                             <p className="text-[8px] font-black uppercase text-white/40 tracking-widest mb-0.5 leading-none">Oasis Seating</p>
                             <p className="text-[9px] font-black text-white/80 leading-none">Inside & Patio Available</p>
                          </div>
                       </div>
                       <button className="text-[9px] font-black text-primary uppercase tracking-[0.2em] border-b border-primary/20 pb-0.5 hover:text-white transition-all">Book Zone</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Info Section */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Elite Logistics Protocol</h3>
               <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">How the <span className="text-gradient underline underline-offset-8">Oasis Works</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full border border-primary/20 flex items-center justify-center text-2xl mx-auto mb-8 shadow-xl shadow-primary/10">🔍</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">1. Browse & Select</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Explore premium goods from exclusive partners in North Conway, Wolfeboro, and Effingham. Add your favorites directly to your Oasis Basket.</p>
               </div>
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full border border-secondary/20 flex items-center justify-center text-2xl mx-auto mb-8 shadow-xl shadow-secondary/10">🚛</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">2. Concierge Pickup</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Our elite driver (Sean) is dispatched instantly. We coordinate directly with the merchant to match your order and handle the logistics for you.</p>
               </div>
               <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-2xl mx-auto mb-8">✨</div>
                  <h4 className="text-xl font-bold text-white tracking-tight">3. Premium Delivery</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">Track your Oasis in real-time. Delivery is completed within 1 hour, bringing the best of the lakes region directly to your door.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowCart(false)} />
           <div className="relative glass w-full max-w-lg rounded-[3rem] p-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
              <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">Your Shopping Basket</h3>
              <div className="space-y-4 mb-10 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {cart.length === 0 ? (
                  <p className="text-white/30 text-center py-10 italic uppercase text-[10px] tracking-widest font-bold">Your Oasis basket is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.cartId} className="flex justify-between items-center border-b border-white/5 pb-4">
                       <div>
                         <p className="text-xs font-bold text-white">{item.name}</p>
                         <p className="text-[10px] text-white/30 uppercase">{item.bizName}</p>
                       </div>
                       <div className="flex items-center gap-6">
                          <p className="text-sm font-black text-secondary">${item.price.toFixed(2)}</p>
                          <button onClick={() => removeFromCart(item.cartId)} className="text-white/20 hover:text-red-500 transition-colors">✕</button>
                       </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mb-10 p-6 bg-white/5 rounded-3xl border border-white/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 ml-1">Tip Your Concierge (Sean)</p>
                 <div className="flex gap-3">
                    {[15, 20, 25].map(pct => (
                      <button key={pct} className="flex-1 py-3 bg-black/40 border border-white/10 rounded-xl text-[10px] font-black text-white/60 hover:border-primary hover:text-white transition-all">{pct}%</button>
                    ))}
                    <button className="flex-1 py-3 bg-black/40 border border-white/10 rounded-xl text-[10px] font-black text-white/60 hover:border-primary hover:text-white transition-all">OTHER</button>
                 </div>
              </div>
              <div className="flex justify-between items-center mb-8 px-2">
                 <span className="text-white/40 uppercase text-[10px] font-black tracking-widest">Total Estimate</span>
                 <span className="text-2xl font-black text-white">${total.toFixed(2)}</span>
              </div>
              <div className="space-y-4">
                <Link href="/track" className="block w-full py-5 bg-primary text-black text-center font-black rounded-2xl hover:scale-[1.02] transition-transform uppercase text-sm tracking-widest cursor-pointer shadow-xl shadow-primary/20">Place Order & Track Logistics</Link>
                <button onClick={() => setShowCart(false)} className="block w-full py-4 text-white/40 text-center text-xs font-bold uppercase transition-all hover:text-white">Continue Shopping</button>
              </div>
           </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-3">
             <Image src="/logo.png" alt="TUG Logo" width={36} height={36} className="brightness-200" />
             <span className="text-lg font-black tracking-tighter text-white">TUG OASIS</span>
          </div>
          <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.4em]">&copy; 2026 The Urban Guide. Elite Logistics Protocol.</p>
          <div className="flex gap-8 text-center md:text-left flex-wrap justify-center">
            <Link href="/forum" className="text-xs font-black text-primary hover:text-white transition-colors uppercase tracking-[0.2em] underline underline-offset-8">Oasis Forum</Link>
            <Link href="/membership" className="text-xs font-bold text-secondary hover:text-white transition-colors uppercase tracking-[0.2em] underline underline-offset-8">Join the Oasis</Link>
            <Link href="/driver" className="text-xs font-black text-white/40 hover:text-white transition-colors uppercase tracking-widest underline underline-offset-8">Driver Hub</Link>
            <Link href="/login" className="text-xs font-black text-white/40 hover:text-primary transition-colors uppercase tracking-widest">Merchant Profile</Link>
            <Link href="tel:5085070305" className="text-xs font-black text-white/40 hover:text-primary transition-colors uppercase tracking-widest">Support: 508.507.0305</Link>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-10 right-10 z-[100]">
         <button className="group relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all">
            <div className="absolute -top-12 right-0 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">Chat with TUG Oasis</div>
            <span className="text-2xl">💬</span>
            <span className="absolute top-0 right-0 w-5 h-5 bg-secondary text-black rounded-full border-4 border-[#020408] text-[8px] font-black flex items-center justify-center">1</span>
         </button>
      </div>
    </div>
  );
}
