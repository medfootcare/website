import type { FaqItem } from "@/data/faqs";
import { NORMAL_WRAP_STYLE } from "@/lib/textStyles";

interface StaticFaqListProps {
  items: FaqItem[];
  variant?: "default" | "hero";
  staggerStart?: number;
}

export default function StaticFaqList({
  items,
  variant = "default",
  staggerStart = 1,
}: StaticFaqListProps) {
  if (variant === "hero") {
    return (
      <div className="mx-auto max-w-2xl space-y-3 text-left">
        {items.map((item, index) => (
          <div key={`${item.q}-${index}`} className={`qa-card stagger-${staggerStart + index}`}>
            <p className="mb-3 flex items-start gap-3 font-bold text-[#020617]">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0369A1] text-[15px] font-bold text-white font-headline md:text-[13px]"
                aria-label="質問"
              >
                Q
              </span>
              <span className="flex-1 min-w-0 break-normal text-[17px] md:break-keep" style={NORMAL_WRAP_STYLE}>
                {item.q}
              </span>
            </p>
            <p className="copy-body-lg flex items-start gap-3 text-[#334155]">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[#0369A1] text-[15px] font-bold text-[#0369A1] font-headline md:text-[13px]"
                aria-label="回答"
              >
                A
              </span>
              <span className="flex-1 min-w-0 break-normal md:break-keep" style={NORMAL_WRAP_STYLE}>
                {item.a}
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4 text-left">
      {items.map((item, index) => (
        <div key={`${item.q}-${index}`} className="qa-card">
          <p className="copy-note mb-2 flex items-start gap-3 font-medium text-on-surface">
            <span className="copy-note shrink-0 font-medium text-primary">Q.</span>
            <span className="flex-1 min-w-0">{item.q}</span>
          </p>
          <p className="copy-body-lg flex items-start gap-3 leading-relaxed text-on-surface-variant">
            <span className="copy-body-lg shrink-0 font-medium text-on-surface-variant">A.</span>
            <span className="flex-1 min-w-0">{item.a}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
