import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メディフットケアとは？ | メディフットケア",
  description: "メディフットケアの概要・企業情報・沿革をご紹介します。",
  alternates: { canonical: "/about" },
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
            <div className="copy-body max-w-3xl mx-auto space-y-6 text-center text-on-surface-variant mobile:text-[12px] md:text-base">
              <p>
                医師・看護師による<br className="md:hidden" />訪問フットケアサービスです。
              </p>
              <p>
                皮膚科診療の現場で、<br />
                「十分な時間をかけて足や爪のケアを<br className="md:hidden" />行うことが難しい」<br />
                と感じたことをきっかけに始まりました。
              </p>
              <p>
                爪の変形や足のお悩みに対して、<br />
                医師・看護師のみで構成されたチームで、<br />
                確かな技術と安心をお届けします。
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
            <div className="mx-auto w-full max-w-[20rem]">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "2025年5月", value: "メディフットケア設立" },
                    { label: "2025年8月", value: "施設向けサービス開始" },
                    { label: "2026年3月", value: "個人向けサービス開始" },
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
      </main>

      <Footer />
    </div>
  );
}
