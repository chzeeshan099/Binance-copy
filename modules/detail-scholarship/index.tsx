"use client";
import { useApplyModal } from "@/components/providers/apply-modal-provider";
import { HeroSection } from "./Hero";
import { OverviewSection } from "./OverviewSection";
import { BenefitsSection } from "./BenefitsSection";
import { EligibilitySection } from "./EligibilitySection";
import { ImportantDates } from "./ImportantDates";
import CallToAction from "./CallToAction";
import DetailData from "./DetailData";

export function ScholarshipDetail({
  scholarship,
  related,
}: any) {
  const { open } = useApplyModal();

  const handleApply = () => {
    open(scholarship.title);
  };

  return (
    <div className="">

      {/* Hero */}

      <HeroSection
        scholarship={scholarship}
        onApply={handleApply}
      />

      {/* DetailData */}

      <DetailData />


      {/* CallToAction */}

      <CallToAction/>

























       {/* Overview */}

      {/* <OverviewSection
        scholarship={scholarship}
      /> */}

      {/* Benefits  + dates*/}
      {/* <div className="grid gap-5 sm:grid-cols-2 mt-5">
      <BenefitsSection
        scholarship={scholarship}
      />


      <ImportantDates
        scholarship={scholarship}
      />

      </div> */}


      {/* Eligibility / Countries / Documents */}

      {/* <EligibilitySection
        scholarship={scholarship}
        onApply={handleApply}
      /> */}

    </div>
  );
}