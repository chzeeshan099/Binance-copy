import React from 'react'
import { DestinationCard } from '@/components/cards/destination-card'
import Heading from '@/components/Heading'
import { FadeIn } from '@/components/motion/fade-in'
import { destinations } from '@/lib/data'
import { Globe2 } from 'lucide-react'

const PopularDestinations = () => {
  return (
    <div>
        <section className="">
        <Heading
          icon={Globe2}
          title="Popular Destinations"
          description="Explore top study destinations offering world class education, career opportunities, and student friendly pathways"
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination, index) => (
            <FadeIn key={destination.slug} delay={index * 0.12}>
              <DestinationCard destination={destination} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PopularDestinations
