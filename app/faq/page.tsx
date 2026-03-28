"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** アコーディオンアイテム */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-[#e5eaea] rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[#f8fafa] transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <p className="font-medium text-on-surface flex items-start gap-3 flex-1">
          <span className="text-primary font-medium text-base shrink-0">Q.</span>
          {q}
        </p>
        <span
          className="material-symbols-outlined text-primary shrink-0 mt-0.5 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-on-surface-variant leading-relaxed pl-7">{a}</p>
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
    a: "対応エリア（佐倉市・八千代市・四街道市・印西市ほか近隣）内であれば、ご自宅への訪問が可能です。",
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
    a: "5名以上から対応可能です。まずはご相談ください。",
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
        <section className="page-section border-b border-[#e5eaea]">
          <div className="max-content-width">
            <div className="space-y-3 text-center">
              <h1 className="text-[24px] font-medium text-on-surface">
                よくある質問
              </h1>
              <div className="mx-auto h-0.5 w-8 bg-primary" />
              <p className="text-base text-on-surface-variant leading-relaxed">
                ご不明な点を解消して、安心してご利用ください。
              </p>
            </div>
          </div>
        </section>

        {/* ===== タブ + FAQ ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="max-w-3xl mx-auto">
              {/* アンダーライン型タブ切替 */}
              <div className="flex mb-8 border-b border-[#e5eaea]">
                <button
                  className={`flex-1 py-3 text-sm font-medium text-center transition-colors border-b-2 -mb-px ${
                    tab === "personal"
                      ? "border-primary text-primary"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setTab("personal")}
                >
                  個人の方向け
                </button>
                <button
                  className={`flex-1 py-3 text-sm font-medium text-center transition-colors border-b-2 -mb-px ${
                    tab === "facility"
                      ? "border-primary text-primary"
                      : "border-transparent text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setTab("facility")}
                >
                  施設の方向け
                </button>
              </div>

              {/* FAQ一覧 */}
              <div className="space-y-3 text-center">
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
