import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | メディフットケア",
  description: "メディフットケアの個人情報保護方針・プライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="py-20 px-6 bg-surface-container-low border-b border-surface-container">
          <div className="max-content-width text-center space-y-4">
            <p className="text-xs tracking-[0.3em] text-on-surface-variant font-medium">
              PRIVACY POLICY
            </p>
            <h1 className="text-4xl font-thin text-on-surface">プライバシーポリシー</h1>
            <div className="section-heading-bar"></div>
          </div>
        </section>

        {/* ===== 本文 ===== */}
        <section className="py-24 px-6 bg-white">
          <div className="max-content-width max-w-3xl space-y-12">
            <div className="space-y-4">
              <p className="text-on-surface-variant leading-loose">
                メディフットケア（以下「当サービス」）は、利用者様の個人情報の保護を重要な責務と認識し、
                以下の方針に基づき適切に取り扱います。
              </p>
            </div>

            {[
              {
                title: "1. 収集する情報",
                body: "当サービスでは、お問い合わせ・ご予約の際に氏名、電話番号、メールアドレス、ご住所（市区町村）、ご相談内容などの個人情報をお預かりします。",
              },
              {
                title: "2. 利用目的",
                body: "収集した個人情報は、予約・施術の調整、ご連絡・ご案内の送付、サービス向上のための分析に使用します。法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。",
              },
              {
                title: "3. Googleフォームの利用について",
                body: "当サービスのお問い合わせフォームにはGoogleフォームを使用しています。送信された情報はGoogleのサーバーに保存されます。GoogleのプライバシーポリシーについてはGoogle社のウェブサイトをご確認ください。",
              },
              {
                title: "4. LINEでのお問い合わせについて",
                body: "LINEでのお問い合わせを受け付けています。LINEを通じてお送りいただいたメッセージは予約調整・ご案内のみに使用します。LINE社のプライバシーポリシーについてはLINE社のウェブサイトをご確認ください。",
              },
              {
                title: "5. 安全管理",
                body: "個人情報への不正アクセス・紛失・漏洩を防ぐため、適切な安全管理措置を講じます。",
              },
              {
                title: "6. 個人情報の開示・訂正・削除",
                body: "ご本人からの個人情報の開示・訂正・削除のご要望には、合理的な範囲で対応いたします。お問い合わせフォームまたはLINEよりご連絡ください。",
              },
              {
                title: "7. プライバシーポリシーの改定",
                body: "当プライバシーポリシーは必要に応じて改定することがあります。改定後はこのページに掲載します。",
              },
              {
                title: "8. お問い合わせ",
                body: "プライバシーポリシーに関するお問い合わせはこちらのサイトのお問い合わせフォームまたはLINEよりご連絡ください。",
              },
            ].map((section) => (
              <div key={section.title} className="space-y-3">
                <h2 className="text-xl font-bold text-on-surface">{section.title}</h2>
                <p className="text-on-surface-variant leading-loose">{section.body}</p>
              </div>
            ))}

            <p className="text-sm text-on-surface-variant">制定日：2026年3月</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
