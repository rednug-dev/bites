'use client'

import Image from "next/image"
import Link from "next/link"
import { Info, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-sm">
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

        {/* 2. Navigasjon i midten */}
        <div className="flex justify-center space-x-8">
          <Link
            href="/about"
            className="flex items-center space-x-2 text-white text-sm transition-colors hover:text-secondary"
          >
            <Info className="w-4 h-4" />
            <span>Om oss</span>
          </Link>
          <Link
            href="/kontakt"
            className="flex items-center space-x-2 text-white text-sm transition-colors hover:text-secondary"
          >
            <Mail className="w-4 h-4" />
            <span>Kontakt</span>
          </Link>
        </div>

        {/* 3. Knapp til høyre */}
        <div className="flex justify-end">
          <Button
            className="bg-white hover:bg-white/90 text-neutral"
            onClick={() => window.location.href = "/booking"}
          >
            Book nå
          </Button>
        </div>
      </div>
    </nav>
  )
}
