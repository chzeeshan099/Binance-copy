import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
} from "lucide-react";

import { eligibleCountries } from "./constants";
import Card from "@/components/cards/Card";

// function Card({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_28px_rgba(15,51,115,0.06)] sm:p-6">
//       {children}
//     </section>
//   );
// }

function Title({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-5 border-b border-slate-100 pb-3 text-base font-extrabold text-blue-950 after:mt-2 after:block after:h-0.5 after:w-9 after:bg-blue-600">
      {children}
    </h2>
  );
}

type Props = {
  scholarship: any;
  onApply: () => void;
};

export function EligibilitySection({
  scholarship,
  onApply,
}: Props) {

     const eligibility = scholarship.eligibility
    .concat([
      "Meet admission requirements",
      "Strong motivation to study abroad",
    ])
    .slice(0, 6);

  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-3">

          {/* Eligibility */}

      <Card className="p-5">
        <Title>Eligibility Requirements</Title>

        <ul className="">
          {eligibility.map((item:any) => (
            <li
              key={item}
              className="text-xs leading-5 text-slate-600 flex items-center justify-start gap-2 py-1"
            >

              <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <BadgeCheck size={12} />
                </span>

              {item}
            </li>
          ))}
        </ul>
      </Card>

      {/* Countries */}

     <Card className="p-5">
        <Title>Eligible Countries</Title>

        <p className="mb-4 text-xs leading-5 text-slate-500">
          This scholarship is open to international students from
          around the world.
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-xs font-semibold text-slate-600">
          {eligibleCountries.map(({ name }:any) => (
            <div
              key={name}
              className="flex items-center gap-2"
            >
              {name}
            </div>
          ))}
        </div>
      </Card>

      {/* Documents */}

     <Card className="p-5">
        <Title>Required Documents</Title>

        <ul className="space-y-2">
          {scholarship.requiredDocuments.map((item:any) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs text-slate-600"
            >
              <FileCheck2
                size={15}
                className="text-blue-600"
              />

              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/required-documents"
          className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-blue-700 hover:underline"
        >
          View Complete Document Guide
          <ArrowRight size={13} />
        </Link>
      </Card>
    </div>
  );
}