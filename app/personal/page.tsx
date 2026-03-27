import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "個人向けご案内 | メディフットケア",
  description: "ご自宅へ訪問する訪問フットケアのご案内。ご利用の流れ・料金・安心ポイントをご説明します。",
};

/** フォーム・LINEのCTAブロック */
function PersonalCTA({ label }: { label: string }) {
  return (
    <div className="text-center space-y-6">
      <p className="text-on-surface-variant font-medium">{label}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-k text-base px-10 py-4 justify-center w-64"
        >
          フォームで相談する（無料）
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line-k text-base px-10 py-4 justify-center w-64"
        >
          LINEで相談する
        </a>
      </div>
    </div>
  );
}

export default function PersonalPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="py-20 px-6 bg-surface-container-low border-b border-surface-container">
          <div className="max-content-width">
            <div className="bg-white border border-surface-container shadow-sm p-10 md:p-16 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-thin text-on-surface leading-[1.2] tracking-tight">
                ご自宅・ご本人への
                <br />
                訪問フットケア
              </h1>
              <div className="h-0.5 w-full bg-primary" />
              <p className="text-base text-on-surface-variant font-normal leading-relaxed">
                看護師が直接ご自宅へ伺い、安心・丁寧なフットケアをお届けします。
              </p>
            </div>
          </div>
        </section>

        {/* ===== こんな方にご利用いただいています ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">こんな方にご利用いただいています</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                    className="flex items-start gap-4 bg-white p-6 border border-surface-container"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl shrink-0 fill-icon mt-0.5">
                      check_circle
                    </span>
                    <p className="text-on-surface leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== ご利用の流れ ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">ご利用の流れ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-2xl mx-auto space-y-6">
                {[
                  {
                    step: "01",
                    title: "お問い合わせ",
                    desc: "フォームまたはLINEでお気軽にご連絡ください。2営業日以内にご返信します。",
                    icon: "mail",
                  },
                  {
                    step: "02",
                    title: "日程調整",
                    desc: "ご希望の日時・場所をお伺いし、訪問日を決定します。",
                    icon: "calendar_month",
                  },
                  {
                    step: "03",
                    title: "訪問・施術",
                    desc: "担当スタッフがご自宅へお伺いし、丁寧に施術を行います（30〜60分）。",
                    icon: "home_health",
                  },
                  {
                    step: "04",
                    title: "お会計",
                    desc: "施術後に現地でお支払いいただきます。領収書を発行いたします。",
                    icon: "payments",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-white p-8 border-l-4 border-secondary shadow-sm"
                  >
                    <p className="text-xs font-black text-secondary tracking-widest mb-1">STEP {item.step}</p>
                    <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ===== はじめての方へ ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="max-w-2xl mx-auto bg-white p-10 border border-surface-container text-center space-y-4">
                <h3 className="text-2xl font-bold text-on-surface">はじめての方もお気軽にどうぞ</h3>
                <p className="text-on-surface-variant leading-loose">
                  いきなり予約しなくても大丈夫です。<br />
                  「こんな状態でも大丈夫？」「どんなことをするの？」<br />
                  そんな疑問だけでも、まずはご相談ください。
                </p>
                <p className="font-bold text-on-surface">
                  ご本人・ご家族どちらからのご連絡も歓迎しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ご家族向け説明 ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">ご家族の方へ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white p-8 shadow-sm border border-surface-container">
                  <h3 className="font-bold text-xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined fill-icon">family_restroom</span>
                    立ち会いについて
                  </h3>
                  <p className="text-on-surface-variant leading-loose">
                    立ち会いは任意です。ご本人の意思確認ができれば、ご家族の立ち会いがなくても<br />
                    施術を行います。初回は立ち会っていただくと安心です。
                  </p>
                </div>
                <div className="bg-white p-8 shadow-sm border border-surface-container">
                  <h3 className="font-bold text-xl text-primary mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined fill-icon">phone_in_talk</span>
                    代わりに申し込みできますか？
                  </h3>
                  <p className="text-on-surface-variant leading-loose">
                    はい、ご家族からのお申し込みも承っております。<br />
                    「親の爪が心配で…」といったご相談もお気軽にどうぞ。
                  </p>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-lg group"
                  href="/faq"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                    quiz
                  </span>
                  よくある質問をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ===== 料金の目安 ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">料金案内</h2>
                <div className="section-heading-bar mb-4"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white p-10 md:p-16 shadow-sm border border-surface-container">
                  <div className="flex-1 space-y-8 w-full">
                    <div className="flex justify-between items-end pb-8 border-b border-surface-container">
                      <div>
                        <h4 className="text-2xl font-bold text-on-surface">個人宅訪問ケア</h4>
                        <p className="text-on-surface-variant mt-2">爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-primary">
                          ¥12,000{" "}
                          <span className="text-base font-normal text-on-surface-variant">(税込)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-lg group"
                  href="/service"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                    payments
                  </span>
                  料金プランを詳しく見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 末尾CTA ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-12 space-y-4">
                <h2 className="section-heading">お問い合わせ・お申し込み</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-2xl mx-auto bg-white p-10 border border-surface-container text-center space-y-4 mb-12">
                <h3 className="text-2xl font-bold text-on-surface">はじめての方もお気軽にどうぞ</h3>
                <p className="text-on-surface-variant leading-loose">
                  いきなり予約しなくても大丈夫です。<br />
                  「こんな状態でも大丈夫？」「どんなことをするの？」<br />
                  そんな疑問だけでも、まずはご相談ください。
                </p>
                <p className="font-bold text-on-surface">
                  ご本人・ご家族どちらからのご連絡も歓迎しています。
                </p>
              </div>
              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k text-base px-10 py-4 justify-center w-64"
                  >
                    フォームで相談する（無料）
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k text-base px-10 py-4 justify-center w-64"
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
