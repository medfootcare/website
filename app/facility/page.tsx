import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FORM_URL, LINE_URL } from "@/constants/links";
import PageHeroTitle from "@/components/PageHeroTitle";

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
              <div className="mx-auto max-w-2xl space-y-4 text-left">
                {[
                  { q: "何名から依頼できますか？", a: "3名以上から対応可能です。まずはご相談ください。" },
                  { q: "訪問頻度はどのくらいですか？", a: "月1回が標準です。利用者数や状態に応じて週1回対応も可能です。" },
                  { q: "施術後の報告はありますか？", a: "施術記録を毎回提供します。施設のフォーマットへの転記にも対応します。" },
                  { q: "スタッフの立ち会いは必要ですか？", a: "初回のみ推奨しています。慣れてきたら不要になる場合もあります。" },
                  { q: "同意書はどうなりますか？", a: "施設のルールに合わせて対応します。書類の雛形もご提供できます。" },
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

        {/* ===== 料金について ===== */}
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
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">payments</span>
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
                  <h3 className="break-keep text-lg font-medium text-on-surface md:text-[20px]">無料体験会も実施できます。</h3>
                  <p className="copy-note break-keep text-on-surface-variant">
                    体験会では実際の施術を<br />
                    数名の利用者様にご体験いただきながら、<br />
                    導入の流れや費用感をご説明します。
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
