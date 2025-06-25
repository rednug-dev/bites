"use client";

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-secondary">
      <div className="absolute inset-0 bg-accent/80"></div>
      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Refererer direkte til public/biteslogo.png */}
        <h1 className="text-5xl font-extrabold text-neutral mb-4">
          Bites – Smashburgers på farten
        </h1>
        <p className="text-lg text-neutral/90 mb-8">
          Velsmakende pop-up restaurant i Oslo. Vi gir ungdom arbeidserfaring,
          én burger om gangen.
        </p>

        <Button
          className="bg-primary hover:bg-primary/90 text-neutral px-8 py-3 text-lg"
          onClick={() => window.location.href = "/booking"}
        >
          Bestill bord
        </Button>
      </div>
    </section>
  )
}
