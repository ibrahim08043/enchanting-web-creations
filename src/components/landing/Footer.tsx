import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow" />
            <span className="text-gradient">Nexe Agent</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Build delightful, animated, modern web apps with a toolkit designed for craft.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> nexeagent@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 03222100121</li>
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> Nexe-Agent</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Nexe Agent. All rights reserved.
      </div>
    </footer>
  );
}
