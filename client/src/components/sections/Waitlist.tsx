import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ChartGrid } from "@/components/ui/chart-grid";
import { Check, Loader2, Twitter } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  tradingExperience: z.string().min(1, "Please select your trading experience"),
  wantsUpdates: z.boolean().default(true),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      tradingExperience: "beginner",
      wantsUpdates: true,
    },
  });
  
  const { mutate, isPending } = useMutation({
    mutationFn: async (values: WaitlistFormValues) => {
      const res = await apiRequest('POST', '/api/waitlist', values);
      const data = await res.json();
      return data;
    },
    onSuccess: (data) => {
      setIsSuccess(true);
      toast({
        title: "Successfully joined waitlist!",
        description: "You'll be among the first to know when we launch.",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(values: WaitlistFormValues) {
    mutate(values);
  }

  return (
    <section id="waitlist" className="py-20 bg-secondary relative overflow-hidden">
      <ChartGrid className="absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-background rounded-2xl p-8 md:p-10 border border-neutral-800 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D09C] to-[#5FFFD7]">Waitlist</span></h2>
              <p className="text-muted-foreground">Be among the first to access our cutting-edge prediction platform. Early members receive exclusive benefits and discounted pricing.</p>
            </div>
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                {...field}
                                className="w-full px-4 py-3 bg-secondary border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="tradingExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Trading Experience</FormLabel>
                            <Select 
                              defaultValue={field.value} 
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-3 bg-secondary border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                                  <SelectValue placeholder="Select your trading experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                                <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                                <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                                <SelectItem value="professional">Professional Trader</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="wantsUpdates"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-1 h-4 w-4 bg-secondary border border-neutral-700 rounded focus:ring-primary text-primary transition-all"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-muted-foreground">
                                I would like to receive updates about product launches and trading tips.
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold rounded-lg px-8 py-3.5 transition-all"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Join The Waitlist"
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  className="text-center space-y-4 mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">You're on the list!</h3>
                  <p className="text-muted-foreground">We've added you to our waitlist. You'll be among the first to know when we launch.</p>
                  <div className="pt-2">
                    <a href="#" className="text-primary hover:underline inline-flex items-center">
                      <Twitter className="mr-1 h-4 w-4" /> Share on Twitter
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
            alt="Market analysis dashboard" 
            className="rounded-lg shadow-xl w-full h-auto opacity-80" 
          />
        </motion.div>
      </div>
    </section>
  );
}
