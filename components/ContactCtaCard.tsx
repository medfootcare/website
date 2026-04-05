import type { ReactNode } from "react";
import ContactButtons from "@/components/ContactButtons";

interface ContactCtaCardProps {
  title: ReactNode;
  description: ReactNode;
}

export default function ContactCtaCard({
  title,
  description,
}: ContactCtaCardProps) {
  return (
    <div className="mx-auto max-w-xl space-y-6 rounded-sm border-2 border-[#CBD5E1] bg-[#EFF6FF] px-5 py-6 text-center md:px-8 md:py-8">
      <div className="space-y-3">
        <h3 className="break-keep text-lg font-medium text-on-surface md:text-[20px]">{title}</h3>
        <p className="copy-note break-keep text-on-surface-variant">{description}</p>
      </div>
      <ContactButtons />
    </div>
  );
}
