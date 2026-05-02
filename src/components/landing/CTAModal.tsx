import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function CTAModal({ open, onOpenChange }: Props) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatePresence onExitComplete={() => setSubmitted(false)}>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className="pointer-events-auto w-full max-w-md bg-card border border-border rounded-2xl shadow-elegant p-8 relative"
            >
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold tracking-tight">Start your free trial</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Join thousands of teams building faster with Nexe.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" required placeholder="jane@company.com" />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-primary border-0 shadow-elegant hover:shadow-glow transition-all">
                      Create account
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow mb-4">
                    <span className="text-primary-foreground text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold">You're in!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Check your inbox to confirm your account.</p>
                  <Button onClick={() => onOpenChange(false)} className="mt-6">Close</Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
