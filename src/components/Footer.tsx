import { Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#020617] text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-xl font-serif text-white tracking-tight block mb-4">RADIANT SKIN NYC</a>
            <p className="text-sm font-light leading-relaxed mb-6">
              Providing top-tier dermatological and cosmetic care in the heart of New York City.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/radiantskinnyc/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/radiantskinnyc/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.youtube.com/channel/UCjoKe_QciW8na01TQyB2vVg" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#blog" className="hover:text-[#D4AF37] transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Patients</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Patient Forms</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Insurance Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase text-xs tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center gap-2"><Phone className="text-[#D4AF37]" size={16} /> +1 (212) 229-0007</li>
              <li className="flex items-start gap-2"><MapPin className="text-[#D4AF37] shrink-0 mt-1" size={16} /> <span>207 W. 115 St.<br />New York NY 10026</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
          <p>© 2026 Dr. Dele-Michael. All rights reserved. Customized by Ryan Smith</p>
          <div className="mt-4 md:mt-0 opacity-50">
            Designed with Radiant Care
          </div>
        </div>
      </div>
    </footer>
  );
}
