import { notFound } from "next/navigation";
import { ScholarshipDetail } from "@/modules/detail-scholarship/index";
import { scholarships } from "@/lib/data";

export function generateStaticParams() {
  return scholarships.map((scholarship: { slug: string }) => ({ slug: scholarship.slug }));
}

export default async function ScholarshipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scholarship = scholarships.find((item: { slug: string }) => item.slug === slug);

  if (!scholarship) notFound();

  const related = scholarships.filter((item: { slug: string }) => item.slug !== scholarship.slug).slice(0, 4);

  return <ScholarshipDetail scholarship={scholarship} related={related} />;
}
