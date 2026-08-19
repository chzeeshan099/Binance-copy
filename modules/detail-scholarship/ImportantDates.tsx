import {
  CalendarDays,
  ClipboardCheck,
  Sparkles,
  Timer,
  Trophy,
} from "lucide-react";

import Card from "@/components/cards/Card";
import Title from "@/components/Title";

type Props = {
  scholarship: any;
};

export function ImportantDates({
  scholarship,
}: Props) {
  const dates = [
    {
      label: "Applications Open",
      date: scholarship.admissionOpen,
      icon: CalendarDays,
      tone: "text-blue-700 bg-blue-50",
    },
    {
      label: "Deadline for Application",
      date: scholarship.deadline,
      icon: Timer,
      tone: "text-rose-600 bg-rose-50",
    },
    {
      label: "Shortlisting Result",
      date: "15 Dec 2026",
      icon: ClipboardCheck,
      tone: "text-blue-700 bg-blue-50",
    },
    {
      label: "Final Result",
      date: "31 Jan 2027",
      icon: Trophy,
      tone: "text-blue-700 bg-blue-50",
    },
  ];

  return (
    <>

     <Card className='p-5'>
        <Title>Important Dates</Title>

        <div className="divide-y divide-slate-200">
              <div
                className="grid grid-cols-[26px_1fr_auto] items-center gap-2 py-2.5 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <CalendarDays size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  Applications Open
                </span>

                <span className="text-right font-bold text-blue-950">
                  15 August 2003
                </span>
              </div>

                <div
                className="grid grid-cols-[26px_1fr_auto] items-center gap-2 py-2.5 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-red-50 text-red-500">
                  <Timer size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  Deadline for Application
                </span>

                <span className="text-right font-bold text-blue-950">
                  15 August 2003
                </span>
              </div>

                <div
                className="grid grid-cols-[26px_1fr_auto] items-center gap-2 py-2.5 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <ClipboardCheck size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  Shortlisting Result
                </span>

                <span className="text-right font-bold text-blue-950">
                  15 August 2003
                </span>
              </div>

                <div
                className="grid grid-cols-[26px_1fr_auto] items-center gap-2 py-2.5 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <Trophy size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  Final Result


                </span>

                <span className="text-right font-bold text-blue-950">
                  15 August 2003
                </span>
              </div>
        </div>
    </Card>











    {/* <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_28px_rgba(15,51,115,0.06)] sm:p-6">
      <h2 className="mb-5 border-b border-slate-100 pb-3 text-base font-extrabold text-blue-950 after:mt-2 after:block after:h-0.5 after:w-9 after:bg-blue-600">
        Important Dates
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dates.map(
          ({ label, date, icon: Icon, tone }) => (
            <div
              key={label}
              className="flex gap-3 border-l border-blue-100 pl-3"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone}`}
              >
                <Icon size={19} />
              </span>

              <div>
                <p className="text-sm font-black text-blue-700">
                  {date}
                </p>

                <p className="mt-1 text-[11px] font-bold text-blue-950">
                  {label}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section> */}
    </>
  );
}