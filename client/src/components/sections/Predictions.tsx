import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BullishChart = () => (
  <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#00D09C" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#00D09C" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <path 
      d="M0,150 C50,140 75,160 100,100 C125,40 150,80 175,90 C200,100 225,70 250,50 C275,30 300,20 350,10 L350,190 L0,190 Z" 
      fill="url(#gradientFill)" 
      opacity="0.2"
    />
    
    <motion.path 
      d="M0,150 C50,140 75,160 100,100 C125,40 150,80 175,90 C200,100 225,70 250,50 C275,30 300,20 350,10" 
      fill="none" 
      stroke="#00D09C" 
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    />
    
    <path 
      d="M350,10 L400,5" 
      fill="none" 
      stroke="#00D09C" 
      strokeWidth="2"
      strokeDasharray="5,5"
    />
    
    <circle cx="350" cy="10" r="4" fill="#00D09C" />
  </svg>
);

const BearishChart = () => (
  <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradientFillRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF5252" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FF5252" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <path 
      d="M0,50 C25,40 50,60 100,70 C150,80 175,90 200,60 C225,30 250,70 275,90 C300,110 325,130 350,150 L350,190 L0,190 Z" 
      fill="url(#gradientFillRed)" 
      opacity="0.2"
    />
    
    <motion.path 
      d="M0,50 C25,40 50,60 100,70 C150,80 175,90 200,60 C225,30 250,70 275,90 C300,110 325,130 350,150" 
      fill="none" 
      stroke="#FF5252" 
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    />
    
    <path 
      d="M350,150 L400,170" 
      fill="none" 
      stroke="#FF5252" 
      strokeWidth="2"
      strokeDasharray="5,5"
    />
    
    <circle cx="350" cy="150" r="4" fill="#FF5252" />
  </svg>
);

interface PredictionCardProps {
  title: string;
  change: string;
  isPositive: boolean;
  entryPoint: string;
  targetPrice: string;
  timeframe: string;
  risk: string;
  confidence: string;
  delay?: number;
}

function PredictionCard({
  title,
  change,
  isPositive,
  entryPoint,
  targetPrice,
  timeframe,
  risk,
  confidence,
  delay = 0
}: PredictionCardProps) {
  return (
    <motion.div 
      className="bg-secondary rounded-xl overflow-hidden border border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-5 border-b border-neutral-800">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-neutral-100/50">Prediction</span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <div className={`${isPositive ? 'bg-primary/10 text-primary' : 'bg-[#FF5252]/10 text-[#FF5252]'} px-3 py-1.5 rounded-lg text-sm font-medium`}>
            {change} {isPositive ? <ArrowUp className="ml-1 h-3 w-3 inline" /> : <ArrowDown className="ml-1 h-3 w-3 inline" />}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="h-52 w-full relative bg-neutral-800/50 rounded-lg overflow-hidden">
          {isPositive ? <BullishChart /> : <BearishChart />}
          <div className="absolute top-2 right-2 bg-secondary/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-mono">
            Confidence: {confidence}
          </div>
        </div>
        
        <div className="mt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-100/70">Entry Point</span>
            <span className="font-mono font-medium">{entryPoint}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-100/70">Target Price</span>
            <span className={`font-mono font-medium ${isPositive ? 'text-primary' : 'text-[#FF5252]'}`}>
              {targetPrice}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-100/70">Predicted Timeframe</span>
            <span className="font-mono font-medium">{timeframe}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-100/70">Risk Assessment</span>
            <span className="font-mono font-medium">{risk}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Predictions() {
  return (
    <section id="predictions" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Predictions</span></h2>
          <p className="text-muted-foreground">See how our platform accurately predicts cryptocurrency movements with detailed analysis.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PredictionCard 
            title="BTC/USD Uptrend"
            change="+12.7%"
            isPositive={true}
            entryPoint="$42,350.00"
            targetPrice="$47,728.45"
            timeframe="7-10 days"
            risk="Low"
            confidence="92%"
          />
          
          <PredictionCard 
            title="ETH/USD Correction"
            change="-8.3%"
            isPositive={false}
            entryPoint="$3,125.75"
            targetPrice="$2,866.31"
            timeframe="3-5 days"
            risk="Medium"
            confidence="87%"
            delay={0.2}
          />
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#waitlist">
            <Button className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
              Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
