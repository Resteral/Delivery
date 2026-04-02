import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4">Merchant Portal</h1>
          <p className="text-white/40 text-sm">Sign in to manage your TUG Oasis storefront.</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/10"
              placeholder="name@business.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Secure Key</label>
            <input 
              type="password" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/10"
              placeholder="••••••••"
            />
          </div>

          <Link 
            href="/dashboard"
            className="block w-full bg-primary text-black text-center font-black py-5 rounded-2xl hover:scale-[1.02] transition-transform uppercase text-xs tracking-[0.2em] shadow-xl shadow-primary/10"
          >
            Enter Dashboard
          </Link>
        </form>

        <div className="mt-12 text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
          Powered by TUG Logistics
        </div>
      </div>
    </div>
  );
}
