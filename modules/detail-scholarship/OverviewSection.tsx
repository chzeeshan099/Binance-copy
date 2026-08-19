import {
  CalendarDays,
  CircleDollarSign,
  Globe2,
  GraduationCap,
  Languages,
  University,
} from "lucide-react";
import Card from "@/components/cards/Card";
import Title from "@/components/Title";



export function OverviewSection({
  scholarship,
}: any) {
  const quickInformation = [
    {
      icon: Globe2,
      label: "Country",
      value: scholarship.country,
    },
    {
      icon: GraduationCap,
      label: "Degree Level",
      value: scholarship.degreeLevel,
    },
    {
      icon: CircleDollarSign,
      label: "Funding Type",
      value: scholarship.funding,
    },
    {
      icon: CalendarDays,
      label: "Deadline",
      value: scholarship.deadline,
    },
    {
      icon: University,
      label: "University",
      value: scholarship.university,
    },
    {
      icon: Languages,
      label: "IELTS Required",
      value: scholarship.ieltsRequired ? "Yes" : "No",
    },
  ];

  return (
    <div
      id="overview"
      className="mt-5 grid gap-5 lg:grid-cols-2"
    >
      <Card className='p-5'>
        <Title>Overview</Title>

        <p className="text-sm leading-7 text-slate-600">
          {scholarship.description}
        </p>
        <p className="text-sm leading-7 text-slate-600">
          {scholarship.description}
        </p>
        <p className="text-sm leading-7 text-slate-600">
          {scholarship.description}
        </p>
        <p className="text-sm leading-7 text-slate-600">
          {scholarship.description}
        </p>

      </Card>



      <Card className='p-5'>
        <Title>Quick Information</Title>

        <div className="divide-y divide-slate-200">
          {quickInformation.map(
            ({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[26px_1fr_auto] items-center gap-2 py-2.5 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <Icon size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  {label}
                </span>

                <span className="text-right font-bold text-blue-950">
                  {value}
                </span>
              </div>
            )
          )}
        </div>
      </Card>
    </div>
  );
}