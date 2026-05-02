import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  links: { label: string; href: string }[];
}

export function AppSidebar({ open, onOpenChange, links }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-border shadow-elegant p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-gradient">Menu</span>
              <button onClick={() => onOpenChange(false)} className="p-2 rounded-md hover:bg-muted transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => onOpenChange(false)}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="px-4 py-3 rounded-lg hover:bg-muted text-foreground font-medium transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto text-xs text-muted-foreground">
              <p>nexeagent@gmail.com</p>
              <p>03222100121</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
