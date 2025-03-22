import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const faqs = [
  {
    question: "How accurate are the predictions?",
    answer: "Our predictions have maintained an accuracy rate of 92.7% over the past year based on our backtesting data. While no prediction system is perfect, our AI continuously learns from market movements to improve its accuracy."
  },
  {
    question: "Is AlgoTrade suitable for beginners?",
    answer: "Absolutely! We designed AlgoTrade to be accessible for traders of all experience levels. Beginners benefit from our educational resources and simplified interface, while experienced traders can leverage the detailed analytics and advanced features."
  },
  {
    question: "Which cryptocurrencies do you support?",
    answer: "We currently support predictions for 12 major cryptocurrencies including Bitcoin, Ethereum, Solana, Cardano, Binance Coin, and others. We plan to expand our coverage based on user demand and market conditions."
  },
  {
    question: "How often are predictions updated?",
    answer: "Our system continuously monitors the market and generates predictions in real-time. You'll receive immediate alerts when significant opportunities are detected, and all predictions are updated hourly to reflect current market conditions."
  },
  {
    question: "What will AlgoTrade cost after launch?",
    answer: "We're still finalizing our pricing structure, but we plan to offer multiple tiers to accommodate different trading needs and budgets. Early waitlist members will receive preferential pricing and special bonuses when we launch."
  },
  {
    question: "Does AlgoTrade integrate with exchanges?",
    answer: "We're developing API integrations with major exchanges to allow for seamless trading based on our predictions. At launch, we'll support manual trading with our predictions, with automated trading options coming in a future update."
  }
];

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="py-6 border-b border-neutral-800 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <Minus className="text-primary flex-shrink-0" />
        ) : (
          <Plus className="text-primary flex-shrink-0" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mt-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Questions</span></h2>
          <p className="text-muted-foreground">Everything you need to know about AlgoTrade's prediction platform.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto divide-y divide-neutral-800">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
