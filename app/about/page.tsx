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
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
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
            <div className="copy-body max-w-3xl mx-auto space-y-6 text-center text-on-surface-variant max-[413px]:text-[12px] md:text-base">
              <p>
                メディフットケアは、医師の監修のもと、<br />
                看護師資格を持つスタッフが
                <br className="md:hidden" />
                ご自宅や施設へ訪問し、<br />
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
        <section className="page-section bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="mb-8 text-center">
              <h2 className="section-heading">企業情報</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="mx-auto w-full max-w-[20rem]">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "サービス名", value: "メディフットケア" },
                    { label: "所在地", value: "千葉県八千代市" },
                    { label: "設立", value: "2025年5月" },
                    { label: "代表者", value: "小西 克哉" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-[#CBD5E1]">
                      <th className="w-24 py-4 pr-3 text-left text-[15px] font-medium text-on-surface align-top md:w-36 md:pr-8">
                        {row.label}
                      </th>
                      <td className="copy-note py-4 text-on-surface-variant leading-relaxed">
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
            <div className="mx-auto w-full max-w-[24rem] space-y-0">
              {[
                { year: "2025年5月", event: "メディフットケア設立" },
                { year: "2025年8月", event: "施設向けサービス開始" },
                { year: "2026年3月", event: "個人向けサービス開始" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 border-b border-[#CBD5E1] py-5 md:gap-8">
                  <span className="w-24 shrink-0 text-[15px] font-medium text-primary md:w-36">{item.year}</span>
                  <span className="copy-note text-on-surface-variant leading-relaxed">{item.event}</span>
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
