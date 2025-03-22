import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function Stat({ value, label, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      let intervalId: NodeJS.Timeout;
      
      if (value.includes("%")) {
        const endValue = parseFloat(value);
        const duration = 2000;
        const interval = 20;
        const increment = endValue / (duration / interval);
        
        intervalId = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(intervalId);
            startValue = endValue;
          }
          setDisplayValue(startValue.toFixed(1) + "%");
        }, interval);
      } else if (value.includes("+")) {
        const endValue = parseInt(value);
        const duration = 2000;
        const interval = 20;
        const increment = endValue / (duration / interval);
        
        intervalId = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(intervalId);
            startValue = endValue;
          }
          setDisplayValue(Math.floor(startValue) + "+");
        }, interval);
      } else if (value.includes("/")) {
        // Don't animate 24/7
        setDisplayValue(value);
      } else {
        const endValue = parseInt(value);
        const duration = 2000;
        const interval = 50;
        const increment = endValue / (duration / interval);
        
        intervalId = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(intervalId);
            startValue = endValue;
          }
          setDisplayValue(Math.floor(startValue).toString());
        }, interval);
      }
      
      return () => clearInterval(intervalId);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      className="text-center"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">
        {displayValue}
      </p>
      <p className="text-sm md:text-base text-neutral-100/70 mt-2">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    { value: "92.7%", label: "Prediction Accuracy", delay: 0 },
    { value: "5000+", label: "Trading Patterns", delay: 0.1 },
    { value: "24/7", label: "Market Monitoring", delay: 0.2 },
    { value: "12", label: "Major Currencies", delay: 0.3 },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <Stat 
              key={index}
              value={stat.value} 
              label={stat.label} 
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
