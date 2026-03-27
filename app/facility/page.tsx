import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { FORM_URL, LINE_URL } from "@/constants/links";

export const metadata: Metadata = {
  title: "施設向けご案内 | メディフットケア",
  description: "有料老人ホーム・特養・サ高住への訪問フットケアサービス。体験会から始められます。",
};

/** フォーム・LINEのCTAブロック */
function FacilityCTA({ label }: { label: string }) {
  return (
    <div className="text-center space-y-6">
      <p className="text-on-surface-variant font-medium">{label}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-k text-base px-10 py-4 justify-center w-64"
        >
          フォームで相談する（無料）
        </a>
        <a
          href={LINE_URL}
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

export default function FacilityPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="py-20 px-6 bg-surface-container-low border-b border-surface-container">
          <div className="max-content-width">
            <div className="bg-white border border-surface-container shadow-sm p-10 md:p-16 text-center space-y-4">
<h1 className="text-4xl md:text-5xl font-thin text-on-surface leading-[1.2] tracking-tight">
                施設への
                <br />
                訪問フットケアサービス
              </h1>
              <div className="h-0.5 w-full bg-primary" />
              <p className="text-base text-on-surface-variant font-normal leading-relaxed">
                有料老人ホーム・特養・サ高住など、施設への定期訪問に対応しています。
                <br />
                まずは体験会からお気軽にどうぞ。
              </p>
              {/* 施設担当者が最初に確認する最低人数条件を明示 */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-6 py-3 text-primary font-bold">
                <span className="material-symbols-outlined text-xl">group</span>
                5名以上の施設から受け付けています
              </div>
            </div>
          </div>
        </section>

        {/* ===== 導入メリット ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">施設への導入メリット</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">利用者様の満足度向上</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm text-center">
                    足元のケアは生活の質（QOL）に直結します。<br />歩行が楽になることで活動量が増え、<br />施設全体の雰囲気も明るくなります。
                  </p>
                </div>
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">スタッフの負担軽減</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm text-center">
                    爪切りはスタッフにとっても難易度が高い業務。<br />専門家に委託することでスタッフが本来のケアに集中できます。
                  </p>
                </div>
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">安全・安心の記録提供</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm text-center">
                    施術後に記録をご提供します。<br />施設のフォーマットへの対応も可能です。
                  </p>
                </div>
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">定期訪問で継続ケア</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm text-center">
                    月1回など、ご希望の頻度で定期訪問します。<br />曜日・時間帯は施設のスケジュールに合わせて調整できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 体験会のご案内（前面強調）===== */}
        {/* ===== 導入の流れ ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">導入の流れ</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-2xl mx-auto space-y-6">
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
                    className="bg-white p-8 border-l-4 border-secondary shadow-sm"
                  >
                    <p className="text-xs font-black text-secondary tracking-widest mb-1">STEP {item.step}</p>
                    <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed whitespace-pre-line">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 継続訪問について ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">継続訪問について</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  { q: "何名から依頼できますか？", a: "5名以上から対応可能です。まずはご相談ください。" },
                  { q: "訪問頻度はどのくらいですか？", a: "月1回が標準です。利用者数や状態に応じて週1回対応も可能です。" },
                  { q: "施術後の報告はありますか？", a: "施術記録を毎回提供します。施設のフォーマットへの転記にも対応します。" },
                  { q: "スタッフの立ち会いは必要ですか？", a: "初回のみ推奨しています。慣れてきたら不要になる場合もあります。" },
                  { q: "同意書はどうなりますか？", a: "施設のルールに合わせて対応します。書類の雛形もご提供できます。" },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 border border-surface-container">
                    <p className="font-bold text-on-surface mb-3 flex items-start gap-3">
                      <span className="text-primary font-black text-lg shrink-0">Q.</span>
                      {item.q}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed pl-7">{item.a}</p>
                  </div>
                ))}
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

        {/* ===== 料金について ===== */}
        <section className="py-24 px-6 bg-white">
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
                        <h4 className="text-2xl font-bold text-on-surface">ご施設ケア</h4>
                        <p className="text-on-surface-variant mt-2">爪ケア・角質ケア・保湿を含む、基本のフットケア</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-primary">
                          ¥5,000{" "}
                          <span className="text-base font-normal text-on-surface-variant">(税込)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end pb-8 border-b border-surface-container">
                      <div>
                        <h4 className="text-2xl font-bold text-on-surface">ご施設しっかりケア</h4>
                        <p className="text-on-surface-variant mt-2">巻き爪ケアを含む、より丁寧な個別ケア</p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-primary">
                          ¥10,000{" "}
                          <span className="text-base font-normal text-on-surface-variant">(税込)</span>
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
                    <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">payments</span>
                    料金プランを詳しく見る
                  </Link>
                </div>
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
              <div className="max-w-2xl mx-auto text-center mb-12 space-y-4 bg-white p-10 border border-surface-container">
                <h3 className="text-2xl font-bold text-on-surface">まずは無料体験会をご検討ください</h3>
                <p className="text-on-surface-variant leading-loose">
                  いきなり契約は不要です。<br />
                  体験会では実際の施術を数名の利用者様にご体験いただきながら、<br />
                  導入の流れや費用感をご説明します。
                </p>
                <p className="font-bold text-on-surface">
                  担当者・利用者様・ご家族にご確認いただける機会として活用ください。
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
