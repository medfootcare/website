"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";
import { facilityFaqItems, personalFaqItems } from "@/data/faqs";

/** アコーディオンアイテム */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
        <div className="overflow-hidden rounded-sm border-2 border-[#CBD5E1] bg-white">
      <button
        className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-[#F8FAFC] md:gap-4 md:px-6 md:py-5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <p className="font-medium text-on-surface flex items-start gap-3 flex-1">
          <span className="shrink-0 text-[15px] font-medium text-primary md:text-base">Q.</span>
          <span className="break-normal md:break-keep">{q}</span>
        </p>
        <span
          className="material-symbols-outlined text-primary shrink-0 mt-0.5 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 md:px-6">
          <p className="copy-body-lg flex items-start gap-3 leading-relaxed text-on-surface-variant">
            <span className="copy-body-lg shrink-0 font-medium text-on-surface-variant">A.</span>
            <span className="flex-1 min-w-0 break-normal md:break-keep">{a}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [tab, setTab] = useState<"personal" | "facility">("personal");

  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="よくある質問" />
            </div>
          </div>
        </section>

        {/* ===== タブ + FAQ ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="max-w-3xl mx-auto">
              {/* アンダーライン型タブ切替 */}
              <div className="mb-8 flex border-b border-[#CBD5E1]">
                <button
                  className={`-mb-px flex-1 whitespace-nowrap border-b-2 px-0.5 py-3 text-center text-[14px] font-medium transition-colors mobile-narrow:text-[12px] mobile-mini:text-[11px] md:text-sm ${
                    tab === "personal"
                      ? "border-primary text-primary"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setTab("personal")}
                >
                  ご利用者様・ご家族様向け
                </button>
                <button
                  className={`-mb-px flex-1 whitespace-nowrap border-b-2 px-0.5 py-3 text-center text-[14px] font-medium transition-colors mobile-narrow:text-[12px] mobile-mini:text-[11px] md:text-sm ${
                    tab === "facility"
                      ? "border-primary text-primary"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setTab("facility")}
                >
                  施設スタッフ様向け
                </button>
              </div>

              {/* FAQ一覧 */}
              <div className="space-y-3 text-left">
                {(tab === "personal" ? personalFaqItems : facilityFaqItems).map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
