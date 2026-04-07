import type { Metadata } from "next";
import { personalFaqItems, facilityFaqItems } from "@/data/faqs";

export const metadata: Metadata = {
  title: "よくある質問 | メディフットケア",
  description:
    "メディフットケアのサービスに関するよくある質問と回答をまとめています。ご利用者様・ご家族様向け、施設スタッフ様向けのFAQをご覧いただけます。",
  alternates: { canonical: "/faq" },
};

// 個人向け・施設向けFAQを統合してJSON-LDを生成
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...personalFaqItems, ...facilityFaqItems].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
