import { notFound } from "next/navigation";
import { CabanaDetail } from "@/components/sections/cabana-detail";
import { cabanas } from "@/data/cabanas";

interface Props {
  params: { slug: string };
}

export default function CabanaDetailPage({ params }: Props) {
  const cabana = cabanas.find((c) => c.slug === params.slug);
  if (!cabana) return notFound();

  return <CabanaDetail cabana={cabana} />;
}


