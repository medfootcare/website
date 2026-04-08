import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";
import type { Metadata } from "next";
import FaqSwitch from "./FaqSwitch";

export const metadata: Metadata = {
  title: "よくある質問 | メディフットケア",
  description: "メディフットケアに関するよくある質問ページは現在準備中です。",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="よくある質問" />
            </div>
          </div>
        </section>

        <FaqSwitch />
      </main>

      <Footer />
    </div>
  );
}
