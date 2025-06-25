'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Tekst-kolonne */}
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* Inngangsanimajson på tittelen */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, duration: 0.6 }}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            Bites – Smashburgers på farten
          </motion.h1>

          {/* Enkel fade-in for undertekst */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl"
          >
            Velsmakende pop-up restaurant i Oslo. Vi gir ungdom arbeidserfaring, én burger om gangen.
          </motion.p>

          {/* Fade-in for knappene */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium rounded-lg bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/30"
            >
              Book Oss
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 
                         010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                         11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 
                         010-1.414z"
                      clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-700"
            >
              Kontakt oss
            </Link>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 w-full lg:justify-end lg:mt-0 lg:col-span-5">
          <Image
            src="/trippelb.png"
            alt="Smash grilling"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
