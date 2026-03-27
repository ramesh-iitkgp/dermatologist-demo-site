import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I have been going to Dr. Dele-Michael for some time now and I can honestly say that she's one of the best. She's very knowledgeable and has been able to get my skin under control.",
      initial: "E",
      name: "E.S.",
    },
    {
      text: "She's wonderful. I was very nervous meeting with a new derm, but she quickly took away my worries! Nice, sweet. Looking forward to our appointment a couple of weeks from now!",
      initial: "J",
      name: "J.W.",
    },
    {
      text: "I am very pleased about my experience with Dr. Dele-Michael. She is an outstanding dermatologist with superb bedside manners. I would recommend her without hesitation.",
      initial: "Y",
      name: "Y.F.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-[#0F172A] tracking-tight">Patient Stories</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.5, 0, 0, 1] }}
              className="bg-slate-50 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex text-[#D4AF37] mb-4 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 font-light italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-serif text-lg">{testimonial.initial}</div>
                <div>
                  <p className="font-medium text-[#0F172A] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
