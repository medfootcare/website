import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FORM_URL, LINE_URL } from "@/constants/links";
import PageHeroTitle from "@/components/PageHeroTitle";

export const metadata: Metadata = {
  title: "ご利用者様・ご家族様へ | メディフットケア",
  description: "ご自宅へ訪問する訪問フットケアのご案内。ご利用の流れ・料金・安心ポイントをご説明します。",
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
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 max-w-5xl mx-auto">
                {[
                  { key: "family-nail", text: <>親の爪が分厚くなって、<br className="md:hidden" />切り方が分からなくなった</> },
                  { key: "self-nail", text: "自分では爪が切れなくなってきた" },
                  { key: "painful-walk", text: "巻き爪が痛くて歩くのが辛い" },
                  { key: "no-hospital", text: <>病院に行くほどではないが、<br className="md:hidden" />足のケアをしてほしい</> },
                  { key: "dementia", text: <><span className="block md:inline">認知症があり、</span>安全に爪切りができるか不安</> },
                  { key: "hard-to-go-out", text: "外出が難しいが、ケアを受けたい" },
                ].map((item, i) => (
                  <div
                    key={item.key}
                    className="surface-card-soft flex items-center gap-4 text-left md:min-h-[112px] md:items-center md:text-left"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl shrink-0 fill-icon">
                      check_circle
                    </span>
                    <p className="copy-body-lg min-w-0 break-keep text-on-surface">{item.text}</p>
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
                    desc: <>ご希望の日時・場所をお伺いし、<br className="md:hidden" />訪問日を決定します。</>,
                    icon: "calendar_month",
                  },
                  {
                    step: "04",
                    title: "訪問・施術",
                    desc: <>担当スタッフがご自宅へお伺いし、<br className="md:hidden" /><br className="hidden md:block lg:hidden" />丁寧に施術を行います（30〜60分）。</>,
                    icon: "home_health",
                  },
                  {
                    step: "05",
                    title: "お会計",
                    desc: <>施術後に現地でお支払いいただきます。<br className="md:hidden" /><br className="hidden md:block lg:hidden" />領収書を発行いたします。</>,
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
                <h2 className="section-heading">ご家族の方へ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="mx-auto max-w-2xl space-y-4 text-left">
                {[
                  {
                    q: "立ち会いは必要ですか？",
                    a: "立ち会いは任意です。ご本人の意思確認ができれば、ご家族の立ち会いがなくても施術を行います。初回は立ち会っていただくと安心です。",
                  },
                  {
                    q: "家族の代わりに申し込みできますか？",
                    a: "はい、ご家族からのお申し込みも承っております。「親の爪が心配で…」といったご相談もお気軽にどうぞ。",
                  },
                ].map((item, i) => (
                  <div key={i} className="qa-card">
                    <p className="copy-note mb-2 flex items-start gap-3 font-medium text-on-surface">
                      <span className="copy-note shrink-0 font-medium text-primary">Q.</span>
                      <span className="flex-1 min-w-0">{item.q}</span>
                    </p>
                    <p className="copy-body-lg flex items-start gap-3 leading-relaxed text-on-surface-variant">
                      <span className="copy-body-lg shrink-0 font-medium text-on-surface-variant">A.</span>
                      <span className="flex-1 min-w-0">{item.a}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/faq">
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                    quiz
                  </span>
                  よくある質問をもっと見る
                </Link>
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
              <div className="space-y-0 max-w-2xl mx-auto">
                <div className="price-card text-left">
                  <div className="space-y-0">
                    {/* 料金行1 */}
                    <div className="flex flex-col items-center gap-5 py-5 border-b border-[#CBD5E1] text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                      <div className="space-y-1">
                        <h4 className="text-[18px] font-medium text-on-surface md:text-base">ご施設ケア</h4>
                        <p className="text-[15px] text-on-surface-variant break-keep md:text-sm">
                          爪ケア・角質ケア・保湿を含む、
                          <br className="md:hidden" />
                          基本のフットケア
                        </p>
                      </div>
                      <div className="shrink-0 text-center md:text-right">
                        <div className="flex items-end justify-center gap-2 md:block">
                          <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥5,000</div>
                          <span className="mb-1 text-[15px] font-normal text-on-surface-variant md:mb-0 md:text-sm">税込</span>
                        </div>
                      </div>
                    </div>
                    {/* 料金行2 */}
                    <div className="flex flex-col items-center gap-5 py-5 border-b border-[#CBD5E1] text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                      <div className="space-y-1">
                        <h4 className="text-[18px] font-medium text-on-surface md:text-base">ご施設しっかりケア</h4>
                        <p className="text-[15px] text-on-surface-variant break-keep md:text-sm">
                          巻き爪ケアを含む、
                          <br className="md:hidden" />
                          より丁寧な個別ケア
                        </p>
                      </div>
                      <div className="shrink-0 text-center md:text-right">
                        <div className="flex items-end justify-center gap-2 md:block">
                          <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥10,000</div>
                          <span className="mb-1 text-[15px] font-normal text-on-surface-variant md:mb-0 md:text-sm">税込</span>
                        </div>
                      </div>
                    </div>
                    {/* 料金行3 */}
                    <div className="flex flex-col items-center gap-5 py-5 text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                      <div className="space-y-1">
                        <h4 className="text-[18px] font-medium text-on-surface md:text-base">個人宅訪問ケア</h4>
                        <p className="text-[15px] text-on-surface-variant break-keep md:text-sm">
                          爪や足の状態に合わせて、
                          <br className="md:hidden" />
                          ご自宅で丁寧に行うフットケア
                        </p>
                      </div>
                      <div className="shrink-0 text-center md:text-right">
                        <div className="flex items-end justify-center gap-2 md:block">
                          <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥12,000</div>
                          <span className="mb-1 text-[15px] font-normal text-on-surface-variant md:mb-0 md:text-sm">税込</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/service">
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                    payments
                  </span>
                  料金プランを詳しく見る
                </Link>
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
              <div className="mx-auto max-w-xl space-y-6 rounded-sm border-2 border-[#CBD5E1] bg-[#EFF6FF] px-5 py-6 text-center md:px-8 md:py-8">
                <div className="space-y-3">
                  <h3 className="break-keep text-lg font-medium text-on-surface md:text-[20px]">はじめての方もお気軽にどうぞ</h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    「こんな状態でも大丈夫？」<br />
                    「どんなことをするの？」<br />
                    そんな疑問だけでも、まずはご相談ください。
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k w-full whitespace-nowrap md:w-[220px]"
                  >
                    <span>フォームで相談する</span>
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k w-full whitespace-nowrap md:w-[220px]"
                  >
                    LINEで相談する
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
