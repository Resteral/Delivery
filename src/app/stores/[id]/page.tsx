import Link from 'next/link';
import Image from 'next/image';
import { businesses } from '@/lib/data';
import { notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';

export async function generateStaticParams() {
  return businesses.map((bz) => ({ id: bz.id }));
}

export default async function StorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const store = businesses.find(b => b.id === id);

  if (!store) notFound();

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image 
           src={store.image} 
           alt={store.name} 
           fill 
           className="object-cover brightness-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] to-transparent" />
        
        <div className="absolute bottom-20 left-10 md:left-24 max-w-4xl">
           <Link href="/" className="px-4 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-block hover:bg-white/20 transition-all">← Back to Directory</Link>
           <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">{store.name}</h1>
           <div className="flex gap-4 items-center mb-8">
              <span className="px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-black uppercase tracking-widest leading-none flex items-center gap-2">
                 {store.isOpen ? '● OPEN NOW' : '○ CLOSED'}
              </span>
              <span className="text-xs font-bold text-white/40">{store.location}</span>
           </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-10 md:px-24">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-20 border-b border-white/5">
            <div className="lg:col-span-2">
               <h2 className="text-3xl font-black mb-8 italic">Merchant <span className="text-primary italic">Story</span></h2>
               <p className="text-xl text-white/60 leading-[1.8] mb-12 font-medium">
                  {store.description} Discover why {store.name} is a premier "Oasis" partner in the Lakes Region.
               </p>

               <div className="space-y-12 mb-20">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Seating & Atmosphere</h3>
                  <div className="flex gap-4 flex-wrap">
                     {store.seating.map(s => (
                       <div key={s} className="px-8 py-5 bg-white/5 border border-white/10 rounded-[1.5rem] text-sm font-bold flex items-center gap-3">
                          <span className="text-primary">✦</span> {s}
                       </div>
                     ))}
                  </div>
               </div>

               <section>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-10">Elite Menu Items</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {store.products.map(p => (
                        <div key={p.id} className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group">
                           <div className="flex justify-between items-start mb-4">
                              <h4 className="font-bold text-lg">{p.name}</h4>
                              <span className="text-sm font-black text-secondary">${p.price.toFixed(2)}</span>
                           </div>
                           <button className="w-full py-3 bg-white/5 group-hover:bg-primary group-hover:text-black rounded-xl text-[10px] font-black uppercase transition-all">+ Add to Oasis Basket</button>
                        </div>
                     ))}
                  </div>
               </section>
            </div>

            {/* Sidebar Contact */}
            <div>
               <div className="glass p-10 rounded-[3rem] sticky top-32 border border-white/10 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                  <h3 className="text-xl font-black mb-10 tracking-tight">Direct Access</h3>
                  
                  <div className="space-y-10">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Phone Line</p>
                        <Link href={`tel:${store.phone.replace(/-/g, '')}`} className="text-2xl font-black text-white hover:text-primary transition-colors hover:scale-105 inline-block">
                           {store.phone}
                        </Link>
                     </div>

                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Delivery Logistics</p>
                        <p className="text-sm font-bold text-white/60 mb-8 leading-relaxed">Delivery provided by TUG Concierge. Call to initiate pickup or use the on-site basket.</p>
                     </div>

                     <Link 
                       href={`tel:${store.phone.replace(/-/g, '')}`} 
                       className="block w-full py-5 bg-white text-black text-center font-black rounded-2xl hover:scale-[1.02] transition-transform uppercase text-xs tracking-[0.2em] shadow-2xl shadow-white/5"
                     >
                        PLACE ORDER NOW
                     </Link>

                     <SocialShare title={`Check out ${store.name} on TUG Oasis!`} url={`https://delivery-theta-wheat.vercel.app/stores/${store.id}`} />
                  </div>
               </div>
            </div>
         </div>
      </main>

      <footer className="py-20 text-center border-t border-white/5 bg-black/40">
         <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Integrated Merchant Profile &copy; 2026 TUG Logistics</p>
      </footer>
    </div>
  );
}
