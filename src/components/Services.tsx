import { ScanFace, User, Syringe, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      icon: <ScanFace size={32} />,
      title: 'Acne & Scars',
      description: 'Customized treatment plans for acne and scarring to restore smooth, clear confidence to your complexion.'
    },
    {
      icon: <User size={32} />,
      title: 'Hair Loss',
      description: 'Leading Alopecia treatments. We help restore hair density with expert care and modern therapies.'
    },
    {
      icon: <Syringe size={32} />,
      title: 'Cosmetic Injectables',
      description: 'Botox, Dermal Fillers, and volumizing treatments to smooth wrinkles and enhance natural contours.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Medical Dermatology',
      description: 'Expert diagnosis and treatment for skin cancer, biopsies, rashes, and all general skin conditions.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Comprehensive Care</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 tracking-tight">Our Specialties</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.5, 0, 0, 1] }}
              className="group p-8 border border-white/5 bg-white/5 hover:bg-[#D4AF37] transition-all duration-500"
            >
              <div className="w-12 h-12 mb-6 text-[#D4AF37] group-hover:text-white transition-colors duration-500 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-sm font-light text-slate-400 group-hover:text-white/90 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
