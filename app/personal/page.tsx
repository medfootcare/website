import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable";
import PageHeroTitle from "@/components/PageHeroTitle";
import InlineIconLink from "@/components/InlineIconLink";
import StaticFaqList from "@/components/StaticFaqList";
import ContactCtaCard from "@/components/ContactCtaCard";
import { sharedPricingItems } from "@/data/pricing";
import { personalFamilyFaqItems } from "@/data/faqs";

export const metadata: Metadata = {
  title: "ご利用者様・ご家族様へ | メディフットケア",
  description: "ご自宅へ訪問する訪問フットケアのご案内。ご利用の流れ・料金・安心ポイントをご説明します。",
  alternates: { canonical: "/personal" },
};

export default function PersonalPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="section-panel-hero space-y-6 py-10 text-center flex flex-col items-center">
              <PageHeroTitle lines={["ご自宅・ご本人への", "訪問フットケア"]} />
              <p className="copy-body-lg text-on-surface-variant">
                看護師が直接ご自宅へ伺い、
                <br className="md:hidden" />
                安心・丁寧なフットケアをお届けします。
              </p>
            </div>
          </div>
        </section>

        {/* ===== こんな方にご利用いただいています ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  こんな方に
                  <br className="md:hidden" />
                  ご利用いただいています
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-6 xl:space-y-0 max-w-5xl mx-auto">
                {[
                  { key: "painful-walk", text: "巻き爪が痛くて歩くのが辛い" },
                  { key: "self-nail", text: "自分では爪が切れなくて困っている" },
                  { key: "family-nail", text: <><span className="block mobile-wide:hidden">親の爪が分厚くなっているが、切り方が分からない</span><span className="hidden mobile-wide:block">親の爪が分厚くなっているが、<br />切り方が分からない</span></> },
                  { key: "no-hospital", text: <><span className="block mobile-wide:hidden">足のケアをうけたいが、なかなか病院にいけない</span><span className="hidden mobile-wide:block">足のケアをうけたいが、<br />なかなか病院にいけない</span></> },
                  { key: "dementia", text: <><span className="block mobile-wide:hidden">認知症があり、安全に爪切りができるか不安</span><span className="hidden mobile-wide:block">認知症があり、<br />安全に爪切りができるか不安</span></> },
                ].map((item, i) => (
                  <div
                    key={item.key}
                    className="surface-card-soft flex items-center gap-4 text-left xl:min-h-[112px] xl:items-center xl:text-left"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl shrink-0 fill-icon">
                      check_circle
                    </span>
                    <p className="min-w-0 break-keep text-[15px] leading-loose text-on-surface mobile-wide:text-[13px] mobile-narrow:text-[13px] xl:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
              {/* イラスト */}
              <div className="mt-8 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/personal-home-visit.png"
                  alt=""
                  className="h-auto w-full max-w-64 object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== ご利用の流れ ===== */}
        <section className="page-section bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">ご利用の流れ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 max-w-lg mx-auto">
                {[
                  {
                    step: "01",
                    title: "お問い合わせ",
                    desc: <>フォームまたはLINEで<br className="md:hidden" />お気軽にご連絡ください。<br />2営業日以内にご返信します。</>,
                    icon: "mail",
                  },
                  {
                    step: "02",
                    title: "ヒアリング",
                    desc: <>足の状態やご要望、<br className="md:hidden" />ご自宅の環境などをお伺いします。<br />不安なことも何でもお聞かせください。</>,
                    icon: "record_voice_over",
                  },
                  {
                    step: "03",
                    title: "日程調整",
                    desc: <>ご希望の日時・場所をお伺いし、<br />訪問日を決定します。</>,
                    icon: "calendar_month",
                  },
                  {
                    step: "04",
                    title: "訪問・施術",
                    desc: <>担当スタッフがご自宅へお伺いし、<br />丁寧に施術を行います。</>,
                    icon: "home_health",
                  },
                  {
                    step: "05",
                    title: "報告書作成",
                    desc: <>施術後にケア内容、施術の様子を<br />報告書でご報告します。</>,
                    icon: "description",
                  },
                  {
                    step: "06",
                    title: "お会計",
                    desc: <>お振込・現金・カード支払いに<br />対応しています。</>,
                    icon: "payments",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="step-card border-l-2 border-primary pl-4 transition-transform duration-200 hover:translate-x-1"
                  >
                    <p className="mb-1 text-[15px] font-medium tracking-wide text-primary md:text-sm">STEP {item.step}</p>
                    <h3 className="mb-2 text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="copy-note break-keep text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ご家族向け説明 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">よくある質問</h2>
                <div className="section-heading-bar"></div>
              </div>
              <StaticFaqList items={personalFamilyFaqItems} />
              <div className="mt-6">
                <InlineIconLink href="/faq" icon="quiz">
                  よくある質問をもっと見る
                </InlineIconLink>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 料金の目安 ===== */}
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
                title="はじめての方もお気軽にどうぞ"
                description={
                  <>
                    「こんな状態でも大丈夫？」<br />
                    「どんなことをするの？」<br />
                    そんな疑問だけでも、まずはご相談ください。
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
