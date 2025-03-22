import { motion } from "framer-motion";
import { ChartGrid } from "@/components/ui/chart-grid";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChartLine, Bot } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export default function Hero() {
  // Fetch waitlist count
  const { data } = useQuery({
    queryKey: ['/api/waitlist/count'],
    refetchOnWindowFocus: false,
  });

  const waitlistCount = data?.count || "1,243+";

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      <ChartGrid className="absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Crypto Predictions</span> For Smarter Trading
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-100/80">
              Our advanced algorithm analyzes market patterns to predict cryptocurrency movements with unmatched accuracy. Stay ahead of the market with AlgoTrade.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:opacity-90">
                Join The Waitlist
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">TS</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">+</div>
              </div>
              <p className="text-sm text-neutral-100/70">
                <span className="font-semibold text-primary">{waitlistCount}</span> traders already on the waitlist
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="relative bg-secondary rounded-2xl p-2 md:p-4 border border-neutral-800 shadow-xl overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80" 
                alt="Cryptocurrency trading dashboard" 
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg flex items-end">
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-mono">BTC/USD</p>
                      <p className="text-xl font-semibold font-mono">$45,738.21</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-semibold">
                      +4.32% <ArrowRight className="ml-1 h-3 w-3 inline rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-secondary p-3 rounded-lg border border-neutral-800 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <ChartLine className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs">Prediction Accuracy</p>
                  <p className="text-sm font-semibold">92.7%</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 bg-secondary p-3 rounded-lg border border-neutral-800 shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs">AI Analysis</p>
                  <p className="text-sm font-semibold">Real-time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
