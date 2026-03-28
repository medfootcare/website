import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FORM_URL, LINE_URL } from "@/constants/links";

export const metadata: Metadata = {
  title: "ご利用者様・ご家族様へ | メディフットケア",
  description: "ご自宅へ訪問する訪問フットケアのご案内。ご利用の流れ・料金・安心ポイントをご説明します。",
};

/** フォーム・LINEのCTAブロック */
function PersonalCTA({ label }: { label: string }) {
  return (
    <div className="space-y-6">
      <p className="text-on-surface-variant font-medium">{label}</p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-k"
        >
          フォームで相談する（無料）
        </a>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line-k"
        >
          LINEで相談する
        </a>
      </div>
    </div>
  );
}

export default function PersonalPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#e5eaea]">
          <div className="max-content-width">
            <div className="section-panel-hero space-y-4 py-5 text-center">
              <h1 className="text-[24px] font-medium leading-[1.75] text-on-surface">
                ご自宅・ご本人への
                <br />
                訪問フットケア
              </h1>
              <div className="mx-auto h-px w-10 bg-primary" />
              <p className="text-base leading-loose text-on-surface-variant">
                看護師が直接ご自宅へ伺い、安心・丁寧なフットケアをお届けします。
              </p>
            </div>
          </div>
        </section>

        {/* ===== こんな方にご利用いただいています ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">こんな方にご利用いただいています</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                {[
                  "親の爪が分厚くなって、切り方が分からなくなった",
                  "自分では爪が切れなくなってきた",
                  "巻き爪が痛くて歩くのが辛い",
                  "病院に行くほどではないが、足のケアをしてほしい",
                  "認知症があり、安全に爪切りができるか不安",
                  "外出が難しいが、ケアを受けたい",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="surface-card-soft flex items-start gap-4"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl shrink-0 fill-icon mt-0.5">
                      check_circle
                    </span>
                    <p className="text-base leading-loose text-on-surface">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ご利用の流れ ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">ご利用の流れ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                {[
                  {
                    step: "01",
                    title: "お問い合わせ",
                    desc: "フォームまたはLINEでお気軽にご連絡ください。2営業日以内にご返信します。",
                    icon: "mail",
                  },
                  {
                    step: "02",
                    title: "ヒアリング",
                    desc: "足の状態やご要望、ご自宅の環境などをお伺いします。不安なことも何でもお聞かせください。",
                    icon: "record_voice_over",
                  },
                  {
                    step: "03",
                    title: "日程調整",
                    desc: "ご希望の日時・場所をお伺いし、訪問日を決定します。",
                    icon: "calendar_month",
                  },
                  {
                    step: "04",
                    title: "訪問・施術",
                    desc: "担当スタッフがご自宅へお伺いし、丁寧に施術を行います（30〜60分）。",
                    icon: "home_health",
                  },
                  {
                    step: "05",
                    title: "お会計",
                    desc: "施術後に現地でお支払いいただきます。領収書を発行いたします。",
                    icon: "payments",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="step-card border-l-2 border-primary pl-4"
                  >
                    <p className="mb-1 text-sm font-medium tracking-wide text-primary">STEP {item.step}</p>
                    <h3 className="mb-2 text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="text-sm leading-loose text-on-surface-variant">{item.desc}</p>
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
              <div className="space-y-4">
                <div className="surface-card">
                  <h3 className="mb-3 flex items-center gap-3 text-base font-medium text-primary">
                    <span className="material-symbols-outlined fill-icon">family_restroom</span>
                    立ち会いについて
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    立ち会いは任意です。ご本人の意思確認ができれば、ご家族の立ち会いがなくても<br />
                    施術を行います。初回は立ち会っていただくと安心です。
                  </p>
                </div>
                <div className="surface-card">
                  <h3 className="mb-3 flex items-center gap-3 text-base font-medium text-primary">
                    <span className="material-symbols-outlined fill-icon">phone_in_talk</span>
                    代わりに申し込みできますか？
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    はい、ご家族からのお申し込みも承っております。<br />
                    「親の爪が心配で…」といったご相談もお気軽にどうぞ。
                  </p>
                </div>
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
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">料金案内</h2>
                <div className="section-heading-bar mb-4"></div>
              </div>
              <div className="price-card">
                <div className="space-y-0">
                  {/* 料金行1 */}
                  <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                    <div className="space-y-1">
                      <h4 className="text-base font-medium text-on-surface">ご施設ケア</h4>
                      <p className="text-sm text-on-surface-variant">爪ケア・角質ケア・保湿を含む、基本のフットケア</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥5,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
                    </div>
                  </div>
                  {/* 料金行2 */}
                  <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                    <div className="space-y-1">
                      <h4 className="text-base font-medium text-on-surface">ご施設しっかりケア</h4>
                      <p className="text-sm text-on-surface-variant">巻き爪ケアを含む、より丁寧な個別ケア</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥10,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
                    </div>
                  </div>
                  {/* 料金行3 */}
                  <div className="flex items-start justify-between gap-6 py-5">
                    <div className="space-y-1">
                      <h4 className="text-base font-medium text-on-surface">個人宅訪問ケア</h4>
                      <p className="text-sm text-on-surface-variant">爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥12,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
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
                <h2 className="section-heading">お問い合わせ・お申し込み</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 py-5">
                <h3 className="text-[24px] font-medium text-on-surface">はじめての方もお気軽にどうぞ</h3>
                <p className="text-sm leading-loose text-on-surface-variant">
                  いきなり予約しなくても大丈夫です。<br />
                  「こんな状態でも大丈夫？」「どんなことをするの？」<br />
                  そんな疑問だけでも、まずはご相談ください。
                </p>
                <p className="text-base font-medium text-on-surface">
                  ご本人・ご家族どちらからのご連絡も歓迎しています。
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k"
                  >
                    フォームで相談する（無料）
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k"
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
