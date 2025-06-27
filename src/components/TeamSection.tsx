'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { X, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'

interface Member {
  name: string
  role: string
  image: string
  bio: string
  twitter?: string
  instagram?: string
}

const team: Member[] = [
  {
    name: 'Oda Hansen',
    role: 'Grunnlegger & CEO',
    image: '/team/teamex.png',
    bio: 'Oda startet Bites etter en livslang lidenskap for god mat og samfunnsengasjement. Som CEO driver hun selskapet fremover med visjon og hjerte.',
    instagram: '#',
  },
  {
    name: 'Emil Karlsen',
    role: 'Head Chef',
    image: '/team/teamex.png',
    bio: 'Emil er vårt kjøkkengeni og sørger for at hver burger er perfekt stekt med smør, krydder og kjærlighet.',
    instagram: '#',
  },
  {
    name: 'Sara Nilsen',
    role: 'Event-koordinator',
    image: '/team/teamex.png',
    bio: 'Sara planlegger og organiserer alle våre pop-up events, fra festival til private sammenkomster, med presisjon og smil.',
    instagram: '#',
  },
  {
    name: 'Anders Berg',
    role: 'Logistikkansvarlig',
    image: '/team/teamex.png',
    bio: 'Anders sørger for at våre pop-up stands alltid har riktig utstyr på rett sted til rett tid, med smidig koordinering.',
    instagram: '#',
  },
]

function FlippableCard({ member }: { member: Member }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="w-full aspect-[3/4]"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side */}
        <Card
          className="absolute inset-0 bg-[#0A1F44] border-black overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-4">
            <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
            <p className="text-gray-200 mb-2">{member.role}</p>
            <div className="flex space-x-3">
              {member.twitter && (
                <Link href={member.twitter} aria-label="Twitter">
                  <X className="w-6 h-6 text-white hover:text-primary" />
                </Link>
              )}
              {member.instagram && (
                <Link href={member.instagram} aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-white hover:text-primary" />
                </Link>
              )}
            </div>
          </div>
        </Card>

        {/* Back side */}
        <Card
          className="absolute inset-0 bg-[#0A1F44] border-black flex items-center justify-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="text-white">{member.bio}</p>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default function TeamSection() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i === 0 ? team.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === team.length - 1 ? 0 : i + 1))

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Møt teamet vårt</h2>
        <p className="text-gray-400 mb-12">
          De jobber for å gi deg de beste smashburgers-opplevelsene.
        </p>

        {/* Carousel on mobile */}
        <div className="relative md:hidden">
          <FlippableCard member={team[index]} />
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Grid on desktop */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <FlippableCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
