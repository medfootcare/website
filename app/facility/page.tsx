import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FORM_URL, LINE_URL } from "@/constants/links";

export const metadata: Metadata = {
  title: "施設スタッフ様へ | メディフットケア",
  description: "有料老人ホーム・特養・サ高住への訪問フットケアサービス。体験会から始められます。",
};

/** フォーム・LINEのCTAブロック */
function FacilityCTA({ label }: { label: string }) {
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
          フォームで相談する
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

export default function FacilityPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#e5eaea] bg-gradient-to-b from-[#f0f9f8] to-white">
          <div className="max-content-width">
            <div className="section-panel-hero space-y-6 py-10 text-center">
              <h1 className="text-[28px] font-medium leading-[1.75] text-on-surface">
                施設への
                <br />
                訪問フットケアサービス
              </h1>
              <div className="mx-auto h-px w-10 bg-primary" />
              <p className="text-base leading-loose text-on-surface-variant">
                有料老人ホーム・特養・サ高住など、施設への定期訪問に対応しています。
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
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">利用者様の満足度向上</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    足元のケアは生活の質（QOL）に直結します。<br />歩行が楽になることで活動量が増え、<br />施設全体の雰囲気も明るくなります。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">スタッフの負担軽減</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    爪切りはスタッフにとっても難易度が高い業務。<br />専門家に委託することでスタッフが本来のケアに集中できます。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">安全・安心の記録提供</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    施術後に記録をご提供します。<br />施設のフォーマットへの対応も可能です。
                  </p>
                </div>
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">定期訪問で継続ケア</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    月1回など、ご希望の頻度で定期訪問します。<br />曜日・時間帯は施設のスケジュールに合わせて調整できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 導入の流れ ===== */}
        <section className="page-section bg-[#f8fafa]">
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
                    desc: "まず体験会でサービスをご確認ください。\n数名の利用者様にご体験いただき、効果・安全性をご確認いただけます。",
                    icon: "experiment",
                  },
                  {
                    step: "02",
                    title: "ご提案",
                    desc: "体験会後に訪問頻度・対象人数・料金などをご提案します。\n稟議書類としてご活用いただける資料もご用意します。",
                    icon: "description",
                  },
                  {
                    step: "03",
                    title: "契約",
                    desc: "ご提案内容にご納得いただけましたら、契約書を締結します。\n同意書の雛形もご提供します。",
                    icon: "contract",
                  },
                  {
                    step: "04",
                    title: "定期訪問開始",
                    desc: "ご希望のスケジュールで定期訪問を開始します。\n施術記録を毎回ご提供します。",
                    icon: "event_repeat",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="step-card border-l-2 border-primary pl-4"
                  >
                    <p className="mb-1 text-sm font-medium tracking-wide text-primary">STEP {item.step}</p>
                    <h3 className="mb-2 text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="text-sm leading-loose text-on-surface-variant whitespace-pre-line">{item.desc}</p>
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
                    <p className="mb-2 flex items-start gap-3 text-sm font-medium text-on-surface">
                      <span className="shrink-0 text-sm font-medium text-primary">Q.</span>
                      <span className="flex-1 min-w-0">{item.q}</span>
                    </p>
                    <p className="flex items-start gap-3 text-base leading-relaxed text-on-surface-variant">
                      <span className="shrink-0 text-base font-medium text-on-surface-variant">A.</span>
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
        <section className="page-section bg-[#f8fafa]">
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
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">お問い合わせ・お申し込み</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="mx-auto max-w-xl rounded-2xl bg-[#e8f5f3] px-8 py-8 text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-[20px] font-medium text-on-surface">無料体験会も実施することができます。</h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    体験会では実際の施術を数名の利用者様にご体験いただきながら、<br />
                    導入の流れや費用感をご説明します。
                  </p>
                  <p className="text-sm font-medium text-on-surface">
                    施設スタッフ様・利用者様・ご家族にご確認いただける機会として活用ください。
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k w-[200px] flex-col leading-tight"
                  >
                    <span>フォームで相談する</span>
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k w-[200px] flex-col leading-tight"
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
