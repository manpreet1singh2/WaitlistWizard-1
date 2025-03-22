import { motion } from "framer-motion";

interface StepProps {
  number: number;
  title: string;
  description: string;
  isRight?: boolean;
  delay?: number;
}

function Step({ number, title, description, isRight = false, delay = 0 }: StepProps) {
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
      {!isRight && (
        <motion.div 
          className="md:text-right order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <div className="p-6 bg-background rounded-xl border border-neutral-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </motion.div>
      )}
      
      <div className="hidden md:flex items-center justify-center relative order-2">
        <motion.div 
          className={`bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl z-10 ${isRight ? 'order-1' : 'order-2'}`}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {number}
        </motion.div>
        <motion.div 
          className="absolute w-16 h-16 bg-primary/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>
      
      {isRight && (
        <motion.div 
          className="order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <div className="p-6 bg-background rounded-xl border border-neutral-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description: "Our system continuously gathers data from global exchanges, news sources, and social sentiment to build a comprehensive market view.",
      isRight: false
    },
    {
      number: 2,
      title: "AI Analysis",
      description: "Our proprietary algorithms process this data using advanced machine learning models trained on historical cryptocurrency movements.",
      isRight: true
    },
    {
      number: 3,
      title: "Pattern Recognition",
      description: "The AI identifies recurring patterns and correlations that precede significant price movements, with particular attention to emerging trends.",
      isRight: false
    },
    {
      number: 4,
      title: "Prediction Generation",
      description: "Based on the analysis, our system generates detailed predictions with confidence scores, expected price movements, and optimal entry/exit points.",
      isRight: true
    },
    {
      number: 5,
      title: "Delivery & Feedback",
      description: "Predictions are delivered to you in real-time, and the system continuously learns from outcomes to improve future predictions.",
      isRight: false
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">AlgoTrade</span> Works</h2>
          <p className="text-muted-foreground">Our sophisticated platform combines multiple data sources with AI to generate accurate predictions.</p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-neutral-700 -translate-x-1/2 hidden md:block" />
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <Step 
                key={index}
                number={step.number} 
                title={step.title} 
                description={step.description} 
                isRight={step.isRight}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
