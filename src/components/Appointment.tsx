import { Phone, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          >
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Start Your Journey</span>
            <h2 className="text-3xl md:text-5xl font-serif mt-3 text-white tracking-tight mb-6">Request An <br />Appointment</h2>
            <p className="text-slate-400 font-light leading-relaxed mb-10 max-w-md">
              Your quest for radiant skin ends here. Fill out the form, and our team will contact you to schedule your consultation with Dr. Dele-Michael.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-[#D4AF37] flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Office Phone</p>
                  <p className="text-slate-400 text-sm font-light">+1 (212) 229-0007</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-[#D4AF37] flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Insurance</p>
                  <p className="text-slate-400 text-sm font-light">We participate in most commercial plans.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
            className="bg-white p-8 md:p-10 shadow-2xl"
          >
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase text-slate-500 font-medium mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-slate-500 font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="+1 (212) ..." />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-slate-500 font-medium mb-2">Interested In</label>
                <select className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-slate-600">
                  <option>General Dermatology</option>
                  <option>Acne Treatment</option>
                  <option>Hair Loss / Alopecia</option>
                  <option>Cosmetic Procedures</option>
                  <option>Skin Cancer Screening</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-slate-500 font-medium mb-2">Message</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 p-3 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-white font-semibold text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-300">
                Request Appointment
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
