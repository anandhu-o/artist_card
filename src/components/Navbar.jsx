import { Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full top-0 sticky z-40 bg-surface/80 backdrop-blur-md shadow-[6px_6px_12px_rgba(0,0,0,0.8),-6px_-6px_12px_rgba(255,255,255,0.02)] transition-colors duration-500">
      <div className="flex justify-between items-center px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center p-1">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png.png`} 
              alt="Saarang Logo" 
              className="w-full h-full object-contain filter dark:drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={{ display: 'none' }} className="font-display font-black text-primary text-xl">S</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-black text-primary tracking-tight">Saarang '27</h1>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-semibold">
          <a className="text-secondary hover:text-primary transition-colors text-lg" href="#">Explore</a>
          <a className="text-primary font-bold border-b-2 border-primary text-lg" href="#">Artists</a>
          <a className="text-secondary hover:text-primary transition-colors text-lg" href="#">Bookings</a>
        </nav>
        
        <div className="flex items-center gap-4 text-primary">
          <button className="w-10 h-10 rounded-full flex items-center justify-center neo-raised neo-button-hover transition-all bg-surface">
            <Bell size={20} />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center neo-raised neo-button-hover transition-all bg-surface">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
