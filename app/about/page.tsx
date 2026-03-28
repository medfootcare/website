import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メディフットケアとは？ | メディフットケア",
  description: "メディフットケアの概要・企業情報・沿革をご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#e5eaea]">
          <div className="max-content-width">
            <div className="space-y-3 text-center">
              <h1 className="text-[24px] font-medium text-on-surface">
                メディフットケアとは？
              </h1>
              <div className="mx-auto h-0.5 w-8 bg-primary" />
              <p className="text-base text-on-surface-variant leading-relaxed">
                医師・看護師による訪問フットケアサービスについてご紹介します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 概要 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="mb-8">
              <h2 className="section-heading">概要</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-6 text-center text-on-surface-variant leading-loose">
              <p>
                メディフットケアは、医師の監修のもと、看護師資格を持つスタッフがご自宅や施設へ訪問し、
                フットケアを提供するサービスです。
              </p>
              <p>
                加齢や疾患により、自分で爪のケアが難しくなった方、巻き爪・肥厚爪などのトラブルを抱える方に、
                専門的かつ安心・安全なケアをお届けします。
              </p>
              <p>
                千葉県佐倉市を拠点に、八千代市・四街道市・印西市などの近隣エリアへ訪問対応しています。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 企業情報 ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="mb-8">
              <h2 className="section-heading">企業情報</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-3xl mx-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "サービス名", value: "メディフットケア" },
                    { label: "所在地", value: "〒XXX-XXXX 千葉県佐倉市〇〇〇〇" },
                    { label: "電話番号", value: "XXX-XXXX-XXXX" },
                    { label: "設立", value: "XXXX年XX月" },
                    { label: "代表者", value: "〇〇 〇〇" },
                    { label: "対応エリア", value: "千葉県佐倉市・八千代市・四街道市・印西市ほか近隣" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-[#e5eaea]">
                      <th className="py-4 pr-8 text-left text-sm font-medium text-on-surface w-36 align-top">
                        {row.label}
                      </th>
                      <td className="py-4 text-sm text-on-surface-variant leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== 沿革 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="mb-8">
              <h2 className="section-heading">沿革</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-0">
              {[
                { year: "XXXX年XX月", event: "メディフットケア設立" },
                { year: "XXXX年XX月", event: "訪問フットケアサービス開始" },
                { year: "XXXX年XX月", event: "施設向けサービス開始" },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start border-b border-[#e5eaea] py-5">
                  <span className="text-sm font-medium text-primary w-36 shrink-0">{item.year}</span>
                  <span className="text-sm text-on-surface-variant leading-relaxed">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
