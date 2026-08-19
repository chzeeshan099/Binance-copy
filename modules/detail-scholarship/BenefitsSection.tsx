import Card from "@/components/cards/Card";
import { benefitIcons } from "./constants";
import CardItem from "@/components/cards/CardItem";
import Title from "@/components/Title";
import { ArrowRight, BadgeCheck } from "lucide-react";

type Props = {
  scholarship:any;
};

export function BenefitsSection({
  scholarship,
}: Props) {
  const benefits = scholarship.benefits
    .concat([
      "Health insurance",
      "Accommodation support",
      "Research allowance",
    ])
    .slice(0, 6);


 

  return (
    <Card className="p-5">
      <Title>
        What Does This Scholarship Cover?
      </Title>

       <div className="">
          {benefits.map((benefit:any , index:any) =>{
                const Icon = benefitIcons[index];
                return(
              <div
                key={benefit}
                className="flex items-center justify-start gap-2 py-1 text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-blue-700">
                  <Icon size={12} />
                </span>

                <span className="font-medium text-slate-500">
                  {benefit}
                </span>

              </div>
            )}
          )}
        </div>
    </Card>
  );
}