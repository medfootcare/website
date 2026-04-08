import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PageHeroTitle from "@/components/PageHeroTitle";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | メディフットケア",
  description: "メディフットケアの特定商取引法に基づく表記です。",
  alternates: { canonical: "/commercial-transaction" },
};

const transactionItems = [
  { label: "販売業者", content: "メディフットケア" },
  { label: "代表責任者", content: "小西克哉" },
  {
    label: "所在地",
    content: "千葉県八千代市\n※請求があった場合に遅滞なく開示いたします",
  },
  {
    label: "電話番号",
    content: "080-2486-9649\n受付時間 9:00〜17:00",
  },
  { label: "メールアドレス", content: "medifootcare.customer@gmail.com" },
  { label: "サイトURL", content: "https://medifootcare.jp" },
  {
    label: "サービス料金",
    content: "料金ページに記載の金額（税込）",
  },
  {
    label: "サービス料金以外にかかる費用",
    content: "なし",
  },
  {
    label: "支払方法",
    content: "クレジットカード・銀行振込・PayPay・コンビニ決済・Link",
  },
  {
    label: "支払時期",
    content: "施術後に決済",
  },
  {
    label: "サービスの提供時期",
    content: "予約確定後、指定の日時に施術を行います。",
  },
  {
    label: "キャンセル・返金について",
    content: "施術前日までのキャンセルは無料。\n当日キャンセルは料金の50%をいただきます。",
  },
  {
    label: "返品・交換について",
    content: "サービスの性質上、施術完了後の返品・交換はお受けできません。",
  },
  {
    label: "申込みの有効期限",
    content: "特にありません。",
  },
];

export default function CommercialTransactionPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="特定商取引法に基づく表記" />
            </div>
          </div>
        </section>

        {/* ===== 本文 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="max-w-3xl mx-auto">
              <table className="w-full border-collapse table-fixed">
                <colgroup>
                  <col className="w-[100px] sm:w-[160px] md:w-[200px]" />
                  <col />
                </colgroup>
                <tbody>
                  {transactionItems.map((item) => (
                    <tr
                      key={item.label}
                      className="border-b border-[#CBD5E1]"
                    >
                      <th
                        className="border-l-4 border-l-[#0369A1] bg-[#F8FAFC] px-2 py-3 text-left align-top text-[11px] font-medium text-on-surface sm:px-4 sm:py-4 sm:text-xs md:px-6 md:text-sm"
                        style={{ overflowWrap: "break-word" }}
                      >
                        {item.label}
                      </th>
                      <td
                        className="px-2 py-3 text-[11px] text-on-surface-variant sm:px-4 sm:py-4 sm:text-xs md:px-6 md:text-sm"
                        style={{ overflowWrap: "break-word" }}
                      >
                        {item.content.split("\n").map((line, i) => (
                          <span key={i}>
                            {i > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
