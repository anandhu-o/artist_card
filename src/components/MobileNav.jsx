import { Compass, Palette, CalendarDays, User } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 rounded-t-3xl bg-surface/90 backdrop-blur-md shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4),-6px_-6px_12px_rgba(255,255,255,0.05)]">
      <div className="flex justify-around items-center px-4 py-3 pb-safe">
        <a className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:bg-white/20 transition-all scale-95 duration-200" href="#">
          <Compass size={24} className="mb-1" />
          <span className="font-sans text-xs font-medium">Explore</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary neo-pressed rounded-2xl px-4 py-2 hover:bg-white/20 transition-all scale-95 duration-200" href="#">
          <Palette size={24} className="mb-1 focus:fill-primary" />
          <span className="font-sans text-xs font-medium">Artists</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:bg-white/20 transition-all scale-95 duration-200" href="#">
          <CalendarDays size={24} className="mb-1" />
          <span className="font-sans text-xs font-medium">Bookings</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary px-4 py-2 hover:bg-white/20 transition-all scale-95 duration-200" href="#">
          <User size={24} className="mb-1" />
          <span className="font-sans text-xs font-medium">Profile</span>
        </a>
      </div>
    </nav>
  );
}
