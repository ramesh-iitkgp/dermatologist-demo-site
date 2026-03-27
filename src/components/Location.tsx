import { Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Visit Us</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Our Location</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
            className="flex flex-col md:flex-row border border-slate-100 bg-slate-50"
          >
            <div className="h-64 md:h-auto md:w-1/2 bg-slate-200 relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.914902341457!2d-73.95540328459296!3d40.80164897932224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f612847c1b81%3A0x6e7b1a6448386b8!2s207%20W%20115th%20St%2C%20New%20York%2C%20NY%2010026!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%)' }} allowFullScreen loading="lazy"></iframe>
            </div>
            <div className="p-10 md:w-1/2">
              <h3 className="text-xl font-serif text-[#0F172A] mb-2">Harlem / NYC</h3>
              <p className="text-slate-500 font-light text-sm mb-6">207 W. 115 St.<br />New York, NY 10026</p>
              
              <div className="flex flex-col gap-4 mb-8">
                <a href="tel:2122290007" className="flex items-center gap-3 text-sm text-slate-600 hover:text-[#D4AF37]">
                  <Phone className="text-[#D4AF37]" size={18} /> +1 (212) 229-0007
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock className="text-[#D4AF37]" size={18} /> Mon-Fri: 9AM - 6PM
                </div>
              </div>

              <a href="https://radiantskindermatologyandlaser.novopatient.com/home!requestAppointment.do" className="inline-block w-full py-3 border border-[#0F172A] text-[#0F172A] text-sm font-medium hover:bg-[#0F172A] hover:text-white transition-colors uppercase tracking-wide text-center">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
