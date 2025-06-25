'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-black w-full">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="inline-block">
            <Image
              src="/biteslogo-r.png"
              alt="Bites logo"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop-nav lenker (midtstilt) */}
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          <Link
            href="/about"
            className="flex items-center text-white hover:text-secondary space-x-1"
          >
            <Info className="h-5 w-5" />
            <span>Om oss</span>
          </Link>
          <Link
            href="/kontakt"
            className="flex items-center text-white hover:text-secondary space-x-1"
          >
            <Mail className="h-5 w-5" />
            <span>Kontakt</span>
          </Link>
        </div>

        {/* Desktop-CTA */}
        <div className="hidden md:flex flex-shrink-0">
          <Button asChild>
            <Link href="/booking">Book nå</Link>
          </Button>
        </div>

        {/* Mobil-hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobil-meny */}
      {mobileOpen && (
        <div className="md:hidden bg-black">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center text-white hover:text-secondary space-x-1"
            >
              <Info className="h-5 w-5" />
              <span>Om oss</span>
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center text-white hover:text-secondary space-x-1"
            >
              <Mail className="h-5 w-5" />
              <span>Kontakt</span>
            </Link>
            <Button
              asChild
              className="w-full mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/booking">Book nå</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
