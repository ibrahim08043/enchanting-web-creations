import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { CTAModal } from "@/components/landing/CTAModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexe Agent — Ship beautiful products at the speed of thought" },
      { name: "description", content: "A modern, animated toolkit for teams that care about craft. Build responsive, beautiful web apps with Nexe Agent." },
      { property: "og:title", content: "Nexe Agent" },
      { property: "og:description", content: "Modern toolkit for shipping beautiful, animated, production-ready apps." },
    ],
  }),
});

function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <main className="flex-1">
        <Hero onOpenModal={() => setModalOpen(true)} />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <CTAModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
