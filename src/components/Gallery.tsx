import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc5c9d2b735b400006_Mask%20Group.png', label: 'Injectables' },
    { src: 'https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc150ebe04f7ed2d3a_Mask%20Group-1.png', label: 'Body Contouring' },
    { src: 'https://cdn.prod.website-files.com/605eea74abaa952d89167728/606175bc58b08a4d4a22a285_Mask%20Group-2.png', label: 'Anti-Aging' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="flex flex-col md:flex-row justify-between items-end mb-12"
        >
          <div>
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Visual Results</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">The Radiant Difference</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
            View Before & Afters <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.5, 0, 0, 1] }}
              className="relative group overflow-hidden h-80"
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-serif text-xl tracking-wide">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
