import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Send,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import Image from "next/image";

type Props = {
  scholarship: any;
  onApply: () => void;
};

export function HeroSection({
  scholarship,
  onApply,
}: Props) {

  return (
    <>

     <section className="pt-8">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
        <FadeIn delay={0.12}>
          <div>
            <span className="section-label">{scholarship.country} </span>
            <h1 className="text-4xl sm:text-6xl font-semibold sm:leading-[1.2] tracking-[-0.06em] mt-6 max-w-4xl text-black ">
              {scholarship.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 md:text-lg">
             {scholarship.description?.split(" ").slice(0, 20).join(" ")}
             {scholarship.description?.split(" ").length > 20 && "..."}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link href="/" onClick={()=>open()} className="btn-primary text-xs sm:text-base">
                Apply Now <Send size={18}/>
              </Link>
              <Link href="/required-documents" className="btn-secondary text-xs sm:text-base">
                 Required Documents <ChevronRight size={18}/>
              </Link>
            </div>
           
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[34px] p-3">
              <div className="relative overflow-hidden rounded-[28px] flex items-center justify-center">
                <Image
                  src="/univeristy.webp"
                  alt="scholarships image"
                  height={1000}
                  width={1000}
                  priority
                  className="object-contain"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" /> */}
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
    
    </>
  );
}