import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PageHeroTitle from "@/components/PageHeroTitle";
import PricingTable from "@/components/PricingTable";
import { servicePricingItems } from "@/data/pricing";

export const metadata: Metadata = {
  title: "料金 | メディフットケア",
  description: "メディフットケアの料金一覧のご案内。足爪ケア・角質ケア・巻き爪ケアなど。",
  alternates: { canonical: "/service" },
};

export default function ServicePage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="料金" />
            </div>
          </div>
        </section>

        {/* ===== 料金一覧 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="mb-8">
              <h2 className="section-heading">料金一覧</h2>
              <div className="section-heading-bar"></div>
            </div>
            <div className="space-y-0 max-w-2xl mx-auto">
              <PricingTable items={servicePricingItems} />
              <div className="pt-10 space-y-3 text-[12px] text-on-surface-variant sm:text-[13px] md:text-sm">
                <p className="flex items-start gap-1 md:break-keep">
                  <span className="shrink-0">※</span>
                  <span className="min-w-0 flex-1">ご施設ケア・ご施設しっかりケアは、複数名のご依頼があるご施設様向けの料金です。</span>
                </p>
                <p className="flex items-start gap-1">
                  <span className="shrink-0">※</span>
                  <span className="min-w-0 flex-1">
                    巻き爪ケアは、ご施設しっかりケア・個人宅訪問ケアで対応します。
                    <br />
                    1趾まで料金内、2趾目からは+6,000円（税込）です。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
