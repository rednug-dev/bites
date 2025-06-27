// src/app/om-oss/page.tsx
'use client'

import AboutSection from '@/components/AboutSection'
import Navbar from '@/components/Navbar'
import TeamSection from '@/components/TeamSection'

export default function OmOssPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <AboutSection />
        <TeamSection />
      </main>
    </>
  )
}
