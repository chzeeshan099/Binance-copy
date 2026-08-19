import React from 'react'
import { ScholarshipCard2 } from '@/components/cards/scholarship-card2'
import Heading from '@/components/Heading'
import { FadeIn } from '@/components/motion/fade-in'
import { scholarships } from '@/lib/data'
import { ArrowRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const CurrentScholarships = () => {
  return (
    <div>
      <section className="">
        <Heading
          icon={GraduationCap}
          title="Current Scholarships"
          description="Explore current scholarship opportunities to reduce study costs and make your international education more affordable"
        />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {scholarships.slice(0, 4).map((scholarship:any, index:any) => (
            <FadeIn key={scholarship.slug} delay={index * 0.12}>
              <ScholarshipCard2 scholarship={scholarship} />
            </FadeIn>
          ))}
        </div>


        <div className="flex items-center justify-end mt-5">
            <Link href="/scholarships" className="btn-secondary !border !border-blue-500">
              View all scholarships <ArrowRight size={17} />
            </Link>
        </div>

      </section>
    </div>
  )
}

export default CurrentScholarships
