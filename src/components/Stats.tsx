import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '5,000s+', label: 'Happy Patients' },
    { value: '7,490s+', label: 'Procedures Done' },
    { value: '18+', label: 'Years Practice' },
    { value: '25+', label: 'Awards Won' },
  ];

  return (
    <div className="bg-[#0F172A] border-b border-white/5 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.5, 0, 0, 1] }}
            >
              <p className="text-3xl text-white font-serif mb-1">{stat.value}</p>
              <p className="text-xs text-[#D4AF37] uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
