import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="hero" className="relative bg-hero pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-sm text-muted-foreground mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Build faster with Nexe Agent
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Ship beautiful products
          <br />
          <span className="text-gradient">at the speed of thought</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          A modern toolkit for teams that care about craft. Animated, responsive, and ready for whatever you build next.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3 flex-wrap"
        >
          <Button onClick={onOpenModal} size="lg" className="bg-gradient-primary border-0 shadow-elegant hover:shadow-glow transition-all">
            Start free trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#features">Explore features</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
