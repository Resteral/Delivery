import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      {/* Sidebar Navigation */}
      <nav className="glass border-b border-white/5 px-8 pt-8 flex justify-between items-end pb-8 sticky top-0 z-50">
        <div>
           <h1 className="text-3xl font-black tracking-tighter mb-1">Business <span className="text-primary italic">Success</span></h1>
           <p className="text-xs text-white/30 font-bold uppercase tracking-[0.3em]">Management Console</p>
        </div>
        <Link href="/" className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Sign Out</Link>
      </nav>

      <main className="max-w-7xl mx-auto p-8 lg:p-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
           <div className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-2">Total Orders</span>
              <div className="text-5xl font-black mb-4 tracking-tighter">142</div>
              <p className="text-xs text-secondary font-black tracking-widest">+12.4% <span className="text-white/20 uppercase ml-2">from last week</span></p>
           </div>
           
           <div className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-secondary/20 transition-all">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary block mb-2">Gross Revenue</span>
              <div className="text-5xl font-black mb-4 tracking-tighter">$2,840.00</div>
              <p className="text-xs text-white/30 tracking-widest">Lakes Region Top 5%</p>
           </div>

           <div className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col justify-between">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 block mb-2">Market Share</span>
                 <div className="text-xl font-black mb-4 tracking-tight">Oasis Growth Trend</div>
              </div>
              <div className="h-10 flex items-end gap-1 px-1">
                 {[40, 60, 50, 70, 90, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                 ))}
              </div>
           </div>
        </div>

        {/* Customization & Seating Hierarchy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
           <div className="glass rounded-[3rem] p-10 border border-white/5 bg-primary/5">
              <h2 className="text-xl font-black tracking-tight mb-6 uppercase tracking-widest text-primary">Seating Arrangement</h2>
              <div className="space-y-6">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Dining Zones</label>
                    <div className="space-y-2">
                       <div className="flex justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                          <span className="text-xs font-bold text-white/80">Main Dining Room</span>
                          <span className="text-[9px] font-black text-primary">12 TABLES</span>
                       </div>
                       <div className="flex justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                          <span className="text-xs font-bold text-white/80">Patio / Outdoor</span>
                          <span className="text-[9px] font-black text-primary">6 TABLES</span>
                       </div>
                       <div className="flex justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                          <span className="text-xs font-bold text-white/80">Bar Area</span>
                          <span className="text-[9px] font-black text-primary">8 STOOLS</span>
                       </div>
                    </div>
                 </div>
                 <button className="w-full py-4 bg-white/10 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                   Modify Seating Map
                 </button>
              </div>
           </div>

           <div className="glass rounded-[3rem] p-10 border border-white/5">
              <h2 className="text-xl font-black tracking-tight mb-6 uppercase tracking-widest text-primary">Customize Storefront</h2>
              <div className="space-y-6">
                 <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 block mb-2">Display Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-primary outline-none" defaultValue="PNB Eats" />
                 </div>
                 <button className="w-full py-4 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest">Save Identity Changes</button>
              </div>
           </div>
        </div>

        {/* Messaging & Updates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
           <div className="glass rounded-[3rem] p-10 border border-white/5">
              <h2 className="text-xl font-black tracking-tight mb-6 uppercase tracking-widest text-primary">Direct Inquiries</h2>
              <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                 <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                    <p className="text-xs font-black text-white mb-1">John D.</p>
                    <p className="text-[11px] text-white/40 mb-4 line-clamp-1">"Hey, is the specialty sub still available for lunch? I'm in Effingham..."</p>
                    <div className="flex gap-2">
                       <button className="flex-1 py-2 bg-primary/20 text-primary rounded-lg text-[9px] font-bold uppercase transition-all">Reply</button>
                       <button className="flex-1 py-2 bg-secondary/20 text-secondary rounded-lg text-[9px] font-bold uppercase transition-all">Match Order</button>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass rounded-[3rem] p-10 border border-white/5 bg-primary/5">
              <h2 className="text-xl font-black tracking-tight mb-6 uppercase tracking-widest text-primary">Post Local Update</h2>
              <div className="space-y-4">
                 <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-white focus:border-primary outline-none min-h-[120px]" placeholder="Share a special item or town update..."></textarea>
                 <button className="w-full py-4 bg-primary text-black rounded-xl font-black text-xs uppercase tracking-widest">Publish to Feed</button>
              </div>
           </div>
        </div>

        {/* Inventory & Discounts Section */}
        <section className="glass rounded-[3rem] p-12 border border-white/5">
           <div className="flex justify-between items-center mb-12">
              <div>
                 <h2 className="text-2xl font-black tracking-tight mb-2">Store Inventory & <span className="text-primary italic">Promotions</span></h2>
                 <p className="text-sm text-white/40">Manage products, menu categories, and active discounts.</p>
              </div>
              <button className="px-8 py-4 bg-primary text-black rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">+ Add New Product</button>
           </div>

           <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-center bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:bg-white/[0.08] transition-all gap-8">
                 <div className="flex gap-6 items-center flex-1">
                    <div className="w-20 h-20 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 italic text-white/20">IMG</div>
                    <div>
                       <h4 className="font-bold text-xl mb-1">Specialty Sub</h4>
                       <div className="flex gap-2">
                          <span className="text-[9px] font-black text-white/20 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Menu: Lunch</span>
                          <span className="text-[9px] font-black text-secondary uppercase tracking-widest border border-secondary/20 px-2 py-0.5 rounded-full">Discount: 15%</span>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-12 text-right">
                    <div>
                       <p className="text-[10px] uppercase font-black tracking-widest text-white/20 mb-1">Base Price</p>
                       <p className="text-lg font-bold text-white/40 line-through">$14.99</p>
                    </div>
                    <div>
                       <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-1">Net Price</p>
                       <p className="text-2xl font-black text-secondary">$12.74</p>
                    </div>
                    <button className="px-4 py-2 h-max bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase text-white/40 hover:text-white transition-all">Edit Promo</button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-20 px-12 border-t border-white/5 bg-black/40 text-center">
        <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.4em]">&copy; 2026 The Urban Guide. Private Merchant Dashboard.</p>
      </footer>
    </div>
  );
}
