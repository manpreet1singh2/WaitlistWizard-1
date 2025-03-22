import { Link } from "wouter";
import { Twitter, MessageSquare, MessageCircle, BookOpen } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7] mb-4">AlgoTrade</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Advanced AI-powered cryptocurrency prediction platform that helps traders make informed decisions and maximize profits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <BookOpen className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">How It Works</a></li>
              <li><a href="#predictions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Predictions</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-neutral-800 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} AlgoTrade. All rights reserved.</p>
          <p className="text-xs text-neutral-100/30 mt-2">Cryptocurrency trading involves risk. Past performance is not indicative of future results.</p>
        </div>
      </div>
    </footer>
  );
}
