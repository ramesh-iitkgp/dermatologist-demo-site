import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="overflow-hidden bg-white py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4AF37]/10 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0F172A]/5 z-0"></div>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/878cf253-e334-4220-8b46-317a1e95f5ff_1600w.png" alt="Dr. Dele-Michael" className="object-left transition-all duration-700 w-full h-[500px] object-cover z-10 relative shadow-2xl" />
            
            <div className="absolute -bottom-8 left-8 md:right-8 md:left-auto max-w-xs p-6 bg-white shadow-xl z-20 border-l-4 border-[#D4AF37]">
              <p className="font-serif italic text-slate-800 text-lg">"Healthy, radiant skin is not just a goal, it's a journey we take together."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          >
            <h2 className="uppercase text-xs font-semibold text-[#D4AF37] tracking-[0.2em] mb-3">Meet The #1 Of the BEST DERMATOLOGIST (NYC)</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#0F172A] mb-6 tracking-tight">Dr. Dele-Michael</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Dr. Dele-Michael is a board-certified dermatologist specializing in General Dermatology, Dermatologic Surgery, and Cosmetic Dermatology in Manhattan, New York.
            </p>
            <p className="text-slate-600 font-light leading-relaxed mb-8">
              She is an Assistant Professor of Dermatology at the prestigious Mount Sinai School of Medicine where she teaches residents and medical students. Recognized as one of the best dermatologists in NYC, she combines medical expertise with an artistic eye to help you achieve your most radiant self.
            </p>
            
            <div className="flex items-center gap-4">
              <div>
                <p className="font-serif text-[#0F172A] text-lg">Radiant Skin Dermatology</p>
                <p className="text-xs text-[#D4AF37] uppercase tracking-wide">Board Certified</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#appointment" className="inline-flex items-center gap-1 text-sm font-medium text-[#0F172A] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
                Read Full Bio <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
