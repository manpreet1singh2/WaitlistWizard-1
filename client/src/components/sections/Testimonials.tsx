import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Crypto Trader, 3 years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    text: "The prediction accuracy is unlike anything I've seen before. I was skeptical at first, but after following AlgoTrade's signals for a month, my portfolio is up 34%."
  },
  {
    name: "Sarah Chen",
    role: "Investment Analyst",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 4.5,
    text: "I've tried numerous prediction tools, but AlgoTrade stands out with its detailed analysis and risk assessment. It's become an essential part of my decision-making process."
  },
  {
    name: "Michael Rodriguez",
    role: "Crypto Enthusiast",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80",
    stars: 5,
    text: "As a newcomer to crypto trading, AlgoTrade has been invaluable. The educational resources alongside predictions help me understand why certain movements are expected."
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-primary">
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(rating)) {
          return <Star key={i} className="fill-primary" />;
        } else if (i < rating) {
          return (
            <div key={i} className="relative">
              <Star className="text-muted" />
              <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(rating - Math.floor(rating)) * 100}%` }}>
                <Star className="fill-primary" />
              </div>
            </div>
          );
        } else {
          return <Star key={i} className="text-muted" />;
        }
      })}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <motion.div 
      className="bg-background rounded-xl p-6 border border-neutral-800 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover" 
        />
        <div className="ml-3">
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-xs text-neutral-100/50">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-4">
        <StarRating rating={testimonial.stars} />
      </div>
      <p className="text-muted-foreground">{testimonial.text}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Beta Users Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Saying</span></h2>
          <p className="text-muted-foreground">Early beta testers are already seeing remarkable results with our prediction technology.</p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
