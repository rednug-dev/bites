'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 relative bg-black">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bilder */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:order-first order-last">
            <div className="pt-24 flex items-start justify-start sm:justify-end">
              <Image
                src="/aboutus2.png"
                alt="Team som jobber sammen"
                width={400}
                height={300}
                className="rounded-xl object-cover"
                priority
              />
            </div>
            <div className="flex items-start justify-end sm:justify-start">
              <Image
                src="/aboutus3.png"
                alt="Smashburger pop-up"
                width={400}
                height={300}
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Tekst & tall */}
          <div className="w-full flex flex-col items-center lg:items-start justify-center gap-10">
            {/* Overskrift & beskrivelse */}
            <div className="w-full flex flex-col items-center lg:items-start gap-3">
              <h2 className="text-neutral text-4xl font-bold leading-normal text-center lg:text-left">
                Om Bites
              </h2>
              <p className="text-neutral/80 text-base leading-relaxed text-center lg:text-left max-w-xl">
                Bites er en pop-up smashburger-restaurant i Oslo. Vår visjon er å servere
                velsmakende burgere ved festivaler, nabolagsfest og private events – samtidig
                som vi gir ungdom verdifull arbeidserfaring.
              </p>
            </div>
            
            {/* Stats */}
            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-10">
              <div className="flex flex-col items-start">
                <h3 className="text-neutral text-4xl font-bold leading-normal">50+</h3>
                <h6 className="text-neutral/80 text-base leading-relaxed">Festivaler</h6>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-neutral text-4xl font-bold leading-normal">200+</h3>
                <h6 className="text-neutral/80 text-base leading-relaxed">Events</h6>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-neutral text-4xl font-bold leading-normal">100+</h3>
                <h6 className="text-neutral/80 text-base leading-relaxed">Ungdom i jobb</h6>
              </div>
            </div>

            {/* Call to Action */}
            <button
              className="w-full sm:w-auto px-3.5 py-2 bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out rounded-lg flex items-center justify-center"
            >
              <span className="text-neutral text-sm font-medium leading-6">
                Book Event
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
