'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Info, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative w-full bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center h-16">
        {/* 1. Logo til venstre */}
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-12">
            <Image
              src="/biteslogo-r.png"
              alt="Bites logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* 2. Navigasjon i midten (desktop only) */}
        <div className="hidden md:flex justify-center space-x-8">
          <Link href="/about" className="flex items-center space-x-2 text-white text-sm hover:text-secondary">
            <Info className="w-4 h-4" /><span>Om oss</span>
          </Link>
          <Link href="/kontakt" className="flex items-center space-x-2 text-white text-sm hover:text-secondary">
            <Mail className="w-4 h-4" /><span>Kontakt</span>
          </Link>
        </div>

        {/* 3. Knapp og hamburger (knapp desktop, hamburger mob) */}
        <div className="flex justify-end items-center space-x-4">
          {/* Desktop-knapp */}
          <div className="hidden md:block">
            <Button
              className="bg-white hover:bg-white/90 text-neutral"
              onClick={() => window.location.href = "/booking"}
            >
              Book nå
            </Button>
          </div>
          {/* Hamburger på mobil */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Åpne meny"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute inset-0 bg-black/90 z-50 flex flex-col p-6 space-y-6">
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} aria-label="Lukk meny">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link onClick={() => setOpen(false)} href="/about" className="text-white text-lg">
              Om oss
            </Link>
            <Link onClick={() => setOpen(false)} href="/kontakt" className="text-white text-lg">
              Kontakt
            </Link>
          </nav>
          <Button
            className="mt-4 bg-white hover:bg-white/90 text-neutral self-start"
            onClick={() => {
              setOpen(false)
              window.location.href = "/booking"
            }}
          >
            Book nå
          </Button>
        </div>
      )}
    </nav>
  )
}
