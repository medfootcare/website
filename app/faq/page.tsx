"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";

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

const personalFaqs = [
  {
    q: "どんな方が対象ですか？",
    a: "高齢者・自分で爪切りが難しくなってきた方・家族が心配な方など、どなたでもご相談ください。",
  },
  {
    q: "自宅にも来てもらえますか？",
    a: "対応エリア（佐倉市・八千代市・四街道市・印西市・千葉市ほか近隣）内であれば、ご自宅への訪問が可能です。",
  },
  {
    q: "1回だけでも依頼できますか？",
    a: "はい、1回からお気軽にご依頼いただけます。継続利用も歓迎しております。",
  },
  {
    q: "爪がかなり変形していても大丈夫ですか？",
    a: "まずはお写真をLINEで送っていただくか、ご相談ください。状態を確認した上で対応可能かお伝えします。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "個人宅訪問ケア ¥12,000（税込）です。詳細はサービス・料金ページをご覧ください。",
  },
  {
    q: "家族の立ち会いは必要ですか？",
    a: "立ち会いは任意です。ご本人の意思確認ができれば、ご家族の立ち会いがなくても施術を行います。初回は立ち会いをおすすめします。",
  },
  {
    q: "家族の代わりに申し込みできますか？",
    a: "はい、ご家族からのお申し込みも承っております。「親の爪が心配で…」といったご相談もお気軽にどうぞ。",
  },
];

const facilityFaqs = [
  {
    q: "何名から依頼できますか？",
    a: "3名以上から対応可能です。まずはご相談ください。",
  },
  {
    q: "体験会はできますか？",
    a: "はい、実施可能です。詳細は施設向けご案内ページをご覧ください。",
  },
  {
    q: "同意書は必要ですか？",
    a: "施設のルールに合わせて対応します。書類の雛形もご提供できます。",
  },
  {
    q: "施術後の報告はありますか？",
    a: "施術記録を毎回ご提供します。施設のフォーマットへの転記にも対応します。",
  },
  {
    q: "継続訪問はできますか？",
    a: "定期訪問に対応しています。月1回が標準ですが、頻度・曜日はご相談のうえ決定いたします。",
  },
  {
    q: "訪問頻度はどのくらいですか？",
    a: "月1回が標準です。利用者数や状態に応じて週1回対応も可能です。",
  },
  {
    q: "スタッフの立ち会いは必要ですか？",
    a: "初回のみ推奨しています。慣れてきたら不要になる場合もあります。",
  },
];

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
                {(tab === "personal" ? personalFaqs : facilityFaqs).map((item, i) => (
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
