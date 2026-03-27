import { Search, Kanban } from 'lucide-react';

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="h-16 bg-slate-900/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
          <Kanban size={20} className="text-white rotate-90" />
        </div>
        <h1 className="text-lg font-black tracking-tighter uppercase text-white">Kanban Task Board
        </h1>
      </div>
      
      <div className="relative w-full max-w-md hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search missions..." 
          className="w-full bg-slate-800/50 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-600 to-purple-600 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white uppercase"></div>
      </div>
    </header>
  );
}
export default Header;