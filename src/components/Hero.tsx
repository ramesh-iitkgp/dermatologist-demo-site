import { Phone, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center bg-[#0F172A]">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2000&auto=format&fit=crop" className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover">
          <source src="https://videos.pexels.com/video-files/5927885/5927885-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="z-10 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-[#0F172A]/20 absolute inset-0"></div>

      <div className="z-20 w-full max-w-7xl mx-auto pt-12 px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[#D4AF37] text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">Board-Certified Excellence</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 tracking-tight">
            Advanced Dermatology <br /> <span className="italic text-[#fbeebb]">In New York City</span>
          </h1>
          <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg shadow-black drop-shadow-md">
            We are excited about partnering with our patients to create result-driven, personalized regimens to enhance skin health and appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#appointment" className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white text-sm tracking-wide font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
              Book Appointment
            </a>
            <a href="tel:2122290007" className="inline-flex justify-center items-center gap-2 px-8 py-3 border border-white/30 text-white backdrop-blur-md text-sm tracking-wide font-medium hover:bg-white hover:text-[#0F172A] transition-all duration-300">
              <Phone size={20} />
              (212) 229-0007
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
