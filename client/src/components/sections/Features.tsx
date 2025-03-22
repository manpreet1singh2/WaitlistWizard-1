import { motion } from "framer-motion";
import { 
  Bot, ChartLine, Bell, Shield, PieChart, GraduationCap 
} from "lucide-react";

const features = [
  {
    icon: <Bot className="text-primary text-xl" />,
    title: "AI-Powered Analysis",
    description: "Our advanced algorithms process millions of data points to identify profitable trading opportunities."
  },
  {
    icon: <ChartLine className="text-primary text-xl" />,
    title: "Trend Predictions",
    description: "Get accurate predictions on market movements before they happen, with detailed probability assessments."
  },
  {
    icon: <Bell className="text-primary text-xl" />,
    title: "Real-time Alerts",
    description: "Receive instant notifications about market shifts and profitable trading opportunities."
  },
  {
    icon: <Shield className="text-primary text-xl" />,
    title: "Risk Assessment",
    description: "Every prediction includes a comprehensive risk analysis to help you make informed decisions."
  },
  {
    icon: <PieChart className="text-primary text-xl" />,
    title: "Portfolio Optimization",
    description: "Recommendations for balancing your crypto portfolio based on market conditions and risk tolerance."
  },
  {
    icon: <GraduationCap className="text-primary text-xl" />,
    title: "Trading Education",
    description: "Access educational resources to understand the reasoning behind each prediction and improve your trading skills."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Features</span></h2>
          <p className="text-muted-foreground">Our platform combines cutting-edge AI with years of market data to deliver accurate predictions for both new and experienced traders.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-secondary rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
