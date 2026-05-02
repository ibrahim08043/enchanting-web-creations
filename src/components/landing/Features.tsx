import { motion } from "framer-motion";
import { Zap, Shield, Layers, Palette, Globe, Code2 } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance with smooth 60fps animations everywhere." },
  { icon: Shield, title: "Secure by Default", desc: "Best-in-class security practices baked into every component." },
  { icon: Layers, title: "Composable", desc: "Mix and match building blocks to create unique experiences." },
  { icon: Palette, title: "Beautifully Themed", desc: "A complete design system with semantic tokens and dark mode." },
  { icon: Globe, title: "Globally Ready", desc: "I18n-friendly, accessible, and SEO-optimized out of the box." },
  { icon: Code2, title: "Developer Love", desc: "Type-safe APIs and predictable patterns engineers actually enjoy." },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need, <span className="text-gradient">nothing you don't</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A focused set of features designed to help you ship with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:shadow-elegant transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
