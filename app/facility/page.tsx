import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable";
import PageHeroTitle from "@/components/PageHeroTitle";
import InlineIconLink from "@/components/InlineIconLink";
import StaticFaqList from "@/components/StaticFaqList";
import ContactCtaCard from "@/components/ContactCtaCard";
import { sharedPricingItems } from "@/data/pricing";
import { facilityVisitFaqItems } from "@/data/faqs";

export const metadata: Metadata = {
  title: "施設スタッフ様へ | メディフットケア",
  description: "有料老人ホーム・特養・サ高住への訪問フットケアサービス。体験会から始められます。",
};

export default function FacilityPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="section-panel-hero space-y-6 py-10 text-center flex flex-col items-center">
              <PageHeroTitle lines={["施設への", "訪問フットケアサービス"]} />
              <p className="copy-body-lg text-on-surface-variant break-keep">
                有料老人ホーム・特養・サ高住など、<br className="md:hidden" />
                施設への定期訪問に対応しています。
                <br />
                まずは体験会からお気軽にどうぞ。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 導入メリット ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">施設への導入メリット</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/care-heart.png" alt="" className="w-14 h-14 mx-auto object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">利用者様の満足度向上</span>
                  </h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    足元のケアは生活の質に直結します。<br />歩行が楽になることで活動量が増え、<br />施設全体の雰囲気も明るくなります。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/care-heart.png" alt="" className="w-14 h-14 mx-auto object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">スタッフの負担軽減</span>
                  </h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    爪切りはスタッフにとっても
                    <br className="md:hidden" />
                    <br className="hidden md:block xl:hidden" />
                    難易度が高い業務。<br />
                    専門家に委託することで、
                    <br className="md:hidden" />
                    <br className="hidden md:block xl:hidden" />
                    <br className="hidden xl:block" />
                    スタッフが本来のケアに集中できます。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/care-heart.png" alt="" className="w-14 h-14 mx-auto object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">記録提供</span>
                  </h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    施術後に記録をご提供します。<br />施設のフォーマットへの対応も可能です。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/care-heart.png" alt="" className="w-14 h-14 mx-auto object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">定期訪問で継続ケア</span>
                  </h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    ご希望の頻度で定期訪問します。<br />
                    曜日・時間帯は施設のスケジュールに
                    <br className="md:hidden" />
                    <br className="hidden md:block xl:hidden" />
                    合わせて調整できます。
                  </p>
                </div>
              </div>
              {/* イラスト */}
              <div className="mt-8 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/facility-patient-team.png"
                  alt="スタッフと患者さんのイラスト"
                  className="w-full max-w-72"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 導入の流れ ===== */}
        <section className="page-section bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">導入の流れ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 max-w-lg mx-auto">
                {[
                  {
                    step: "01",
                    title: "体験会",
                    desc: "まず体験会でサービスをご確認ください。\n数名の利用者様にご体験いただき、\n効果・安全性をご確認いただけます。",
                    icon: "experiment",
                  },
                  {
                    step: "02",
                    title: "ご提案",
                    desc: "訪問頻度・対象人数・料金などを\nご提案します。",
                    icon: "description",
                  },
                  {
                    step: "03",
                    title: "契約",
                    desc: "ご提案内容にご納得いただけましたら、\n契約書を締結します。\n同意書の雛形もご提供します。",
                    icon: "contract",
                  },
                  {
                    step: "04",
                    title: "定期訪問開始",
                    desc: <>ご希望のスケジュールで定期訪問を<br className="hidden mobile-narrow:block" />開始します。<br />施術記録を毎回ご提供します。</>,
                    icon: "event_repeat",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="step-card border-l-2 border-primary pl-4 transition-transform duration-200 hover:translate-x-1"
                  >
                    <p className="mb-1 text-[15px] font-medium tracking-wide text-primary md:text-sm">STEP {item.step}</p>
                    <h3 className="mb-2 text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="copy-note break-keep whitespace-pre-line text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 継続訪問について ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">継続訪問について</h2>
                <div className="section-heading-bar"></div>
              </div>
              <StaticFaqList items={facilityVisitFaqItems} />
              <div className="mt-6">
                <InlineIconLink href="/faq" icon="quiz">
                  よくある質問をもっと見る
                </InlineIconLink>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 料金について ===== */}
        <section className="page-section bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">料金案内</h2>
                <div className="section-heading-bar mb-4"></div>
              </div>
              <div className="max-w-2xl mx-auto">
                <PricingTable items={sharedPricingItems} />
              </div>
              <div className="mt-6">
                <InlineIconLink href="/service" icon="payments">
                  料金プランを詳しく見る
                </InlineIconLink>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 末尾CTA ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">お問い合わせ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <ContactCtaCard
                title="無料体験会も実施できます。"
                description={
                  <>
                    体験会では実際の施術を<br />
                    数名の利用者様にご体験いただきながら、<br />
                    導入の流れや費用感をご説明します。
                  </>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
