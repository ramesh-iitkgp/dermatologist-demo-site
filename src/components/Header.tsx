import { useState, useEffect } from 'react';
import { Calendar, Menu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed transition-all duration-300 z-50 w-full border-transparent border-b pt-4 pb-4 top-0 ${isScrolled ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="flex max-w-7xl mx-auto px-6 items-center justify-between">
        <a href="#" className="flex flex-col relative z-50 group">
          <span className="md:text-3xl group-hover:opacity-80 transition-opacity text-2xl text-[#F8FAFC] tracking-tight font-serif">
            RADIANT SKIN
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium">Dermatology & Laser NYC</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase">Services</a>
          <a href="#about" className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase">About</a>
          <a href="#testimonials" className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase">Reviews</a>
          <a href="#contact" className="text-sm font-light text-slate-200 hover:text-[#D4AF37] transition-colors tracking-wide uppercase">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#appointment" className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-[#D4AF37] text-white text-sm font-medium tracking-wide hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <span>Request Appointment</span>
            <Calendar size={20} />
          </a>
          <button className="md:hidden text-white relative z-50" aria-label="Menu">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
