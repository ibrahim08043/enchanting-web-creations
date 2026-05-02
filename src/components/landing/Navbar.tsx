import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "./AppSidebar";

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40"
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow" />
            <span className="text-gradient">Nexe</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={onOpenModal} variant="default" size="sm" className="bg-gradient-primary border-0 shadow-elegant hover:opacity-90">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>
      <AppSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} links={links} />
    </>
  );
}
