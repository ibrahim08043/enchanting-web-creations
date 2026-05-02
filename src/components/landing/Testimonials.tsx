import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Sara Ahmed", role: "Product Lead, Lumen", quote: "Nexe transformed how our team ships. The animations alone made our app feel like a different product." },
  { name: "Daniel Park", role: "Founder, Stackly", quote: "The cleanest design system I've used in years. Our designers and engineers finally speak the same language." },
  { name: "Maya Patel", role: "CTO, Northwind", quote: "We replaced three internal tools with Nexe and never looked back. It's that good." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by <span className="text-gradient">modern teams</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Join thousands of builders shipping faster every day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col gap-4"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
