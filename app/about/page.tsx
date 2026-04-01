import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";
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
        <section className="page-section border-b border-[#e5eaea] bg-gradient-to-b from-[#f0f9f8] to-white">
          <div className="max-content-width">
            <div className="py-10 flex justify-center w-full">
              <PageHeroTitle lines="メディフットケアとは？" />
            </div>
          </div>
        </section>

        {/* ===== 概要 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="mb-8 text-center">
              <h2 className="section-heading">概要</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-3xl mx-auto space-y-6 text-center text-on-surface-variant leading-loose">
              <p>
                メディフットケアは、医師の監修のもと、<br />
                看護師資格を持つスタッフがご自宅や施設へ訪問し、<br />
                フットケアを提供するサービスです。
              </p>
              <p>
                自分で爪のケアが難しくなった方、<br />
                巻き爪・肥厚爪などのトラブルを抱える方に、<br />
                専門的かつ安心・安全なケアをお届けします。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 企業情報 ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="mb-8 text-center">
              <h2 className="section-heading">企業情報</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-sm mx-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "サービス名", value: "メディフットケア" },
                    { label: "所在地", value: "千葉県八千代市" },
                    { label: "設立", value: "2025年5月" },
                    { label: "代表者", value: "小西 克哉" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-[#e5eaea]">
                      <th className="w-24 py-4 pr-4 text-left text-sm font-medium text-on-surface align-top sm:w-36 sm:pr-8">
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
            <div className="mb-8 text-center">
              <h2 className="section-heading">沿革</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="max-w-sm mx-auto space-y-0">
              {[
                { year: "2025年5月", event: "メディフットケア設立" },
                { year: "2025年8月", event: "施設向けサービス開始" },
                { year: "2026年3月", event: "訪問フットケアサービス開始" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-[#e5eaea] py-5 sm:gap-8">
                  <span className="w-24 shrink-0 text-sm font-medium text-primary sm:w-36">{item.year}</span>
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
