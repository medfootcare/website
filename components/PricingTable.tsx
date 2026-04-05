import type { ReactNode } from "react";

export interface PricingItem {
  name: string;
  description: ReactNode;
  price: string;
  subnote?: ReactNode;
}

interface PricingTableProps {
  items: PricingItem[];
  ariaLabel?: string;
  variant?: "default" | "hero";
}

export default function PricingTable({
  items,
  ariaLabel = "料金一覧",
  variant = "default",
}: PricingTableProps) {
  const isHero = variant === "hero";

  return (
    <div className="price-card" role="table" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <div
          key={item.name}
          role="row"
          className={`flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left ${
            isHero ? "gap-4 py-6 md:gap-6" : "gap-5 py-5 md:gap-6"
          } ${
            index < items.length - 1 ? "border-b border-[#CBD5E1]" : ""
          }`}
        >
          <div className="space-y-1">
            <h3 className={isHero ? "text-[18px] font-bold text-[#020617] break-keep" : "text-[18px] font-medium text-on-surface md:text-base"}>
              {item.name}
            </h3>
            <p className={isHero ? "copy-body-lg break-keep text-[#334155]" : "copy-note break-keep text-on-surface-variant"}>
              {item.description}
            </p>
            {item.subnote ? (
              <p className="copy-note inline-block border-b border-[#CBD5E1] pb-0.5 text-on-surface-variant">
                {item.subnote}
              </p>
            ) : null}
          </div>
          <div className="shrink-0 text-center md:text-right">
            <div className="flex items-end justify-center gap-2 md:block">
              <div className={isHero ? "text-[28px] font-bold text-[#0369A1] whitespace-nowrap font-headline" : "text-[24px] font-medium text-primary whitespace-nowrap"}>
                {item.price}
              </div>
              <span className={isHero ? "copy-body-lg mb-1 text-[#334155] md:mb-0" : "copy-note mb-1 font-normal text-on-surface-variant md:mb-0"}>
                税込
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
