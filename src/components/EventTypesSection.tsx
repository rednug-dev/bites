'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Music, Home, PartyPopper } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    title: 'Festivaler',
    description:
      'Større arrangementer på festivaler og matmarkeder med høy energi og masse publikum.',
    icon: Music,
    bgImage: '/festival-bg.png',
  },
  {
    title: 'Blokk party',
    description:
      'Nabolagsfester hvor vi setter opp pop-up stand i gaten—nabolagskos på sitt beste.',
    icon: Home,
    bgImage: '/blockparty-bg.png',
  },
  {
    title: 'Private sammenkomster',
    description:
      'Selskaper, bursdager og firmaevents – vi bringer smashburgers hjem til deg.',
    icon: PartyPopper,
    bgImage: '/private-bg.png',
  },
]

export default function EventTypesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Hvor du kan finne oss
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-400">
          Vi leverer smashburgers til alle typer events – fra store festivaler til intime sammenkomster.
        </p>
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {events.map(({ title, description, icon: Icon, bgImage }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="h-full"
            >
              <Card className="relative overflow-hidden border-transparent bg-transparent h-full">
                {/* Bakgrunnsbilde + overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={bgImage}
                    alt={`${title} bakgrunn`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 405px"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <CardContent className="relative z-10 flex flex-col items-center p-8 h-full justify-center">
                  <Icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-white">{description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
