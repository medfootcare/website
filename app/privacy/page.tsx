import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PageHeroTitle from "@/components/PageHeroTitle";

export const metadata: Metadata = {
  title: "プライバシーポリシー | メディフットケア",
  description: "メディフットケアの個人情報保護方針・プライバシーポリシーです。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="プライバシーポリシー" />
            </div>
          </div>
        </section>

        {/* ===== 本文 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="space-y-4">
                <p className="copy-note text-on-surface-variant">
                  メディフットケア（以下「当サービス」）は、利用者様の個人情報の保護を重要な責務と認識し、
                  以下の方針に基づき適切に取り扱います。
                </p>
              </div>

              {[
                {
                  title: "1. 事業者情報",
                  body: "事業者名：メディフットケア\n代表者：小西 克哉\n所在地：千葉県八千代市",
                },
                {
                  title: "2. 収集する情報",
                  body: "当サービスでは、お問い合わせ・ご予約の際に氏名、電話番号、メールアドレス、ご住所（市区町村）、ご相談内容などの個人情報をお預かりします。",
                },
                {
                  title: "3. 利用目的",
                  body: "収集した個人情報は、以下の目的で使用します。\n・予約・施術の調整\n・ご連絡・ご案内の送付\n・サービス向上のための分析",
                },
                {
                  title: "4. 第三者提供について",
                  body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。ただし、以下の外部サービスを利用しており、各サービスの利用規約・プライバシーポリシーに基づき情報が取り扱われます。",
                },
                {
                  title: "5. 外部サービスの利用について",
                  body: "当サービスでは以下の外部サービスを利用しています。送信された情報は各社のサーバーに保存され、各社のプライバシーポリシーに従って管理されます。\n・Googleフォーム（お問い合わせフォーム）\n・LINE（お問い合わせ・ご予約連絡）\n・Stripe（クレジットカード等の決済処理）\n・kintone（顧客情報・予約管理）\n・じぶんページ（施術記録・カルテ管理）\n各サービスのプライバシーポリシーについては、各社のウェブサイトをご確認ください。",
                },
                {
                  title: "6. 個人情報の保存期間",
                  body: "お預かりした個人情報は、利用目的の達成に必要な期間保存し、不要となった場合は速やかに削除いたします。",
                },
                {
                  title: "7. 安全管理",
                  body: "個人情報への不正アクセス・紛失・漏洩を防ぐため、適切な安全管理措置を講じます。",
                },
                {
                  title: "8. 個人情報の開示・訂正・削除",
                  body: "ご本人からの個人情報の開示・訂正・削除のご要望には、合理的な範囲で対応いたします。下記のお問い合わせ先よりご連絡ください。",
                },
                {
                  title: "9. プライバシーポリシーの改定",
                  body: "当プライバシーポリシーは必要に応じて改定することがあります。改定後はこのページに掲載します。",
                },
                {
                  title: "10. お問い合わせ",
                  body: "プライバシーポリシーに関するお問い合わせは、以下よりご連絡ください。\nメール：medifootcare.customer@gmail.com\n電話：080-2486-9649（受付時間 9:00〜17:00）\nまたは当サイトのお問い合わせフォーム・LINEでも承ります。",
                },
              ].map((section) => (
                <div key={section.title} className="space-y-3">
                  <h2 className="text-base font-medium text-on-surface">{section.title}</h2>
                  <p className="copy-note text-on-surface-variant" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                    {section.body.split("\n").map((line, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}

              <p className="copy-note text-on-surface-variant">制定日：2026年3月</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
