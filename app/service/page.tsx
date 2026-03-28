import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金 | メディフットケア",
  description: "メディフットケアの料金一覧のご案内。足爪ケア・角質ケア・巻き爪ケアなど。",
};

export default function ServicePage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#e5eaea] bg-gradient-to-b from-[#f0f9f8] to-white">
          <div className="max-content-width">
            <div className="space-y-6 py-10 text-center">
              <h1 className="text-[28px] font-medium text-on-surface">
                料金
              </h1>
              <div className="mx-auto h-px w-10 bg-primary" />
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
              <div className="price-card text-left">
                <div className="space-y-0">
                  <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                    <div className="space-y-1">
                      <h3 className="text-base font-medium text-on-surface">ご施設ケア</h3>
                      <p className="text-sm text-on-surface-variant">爪ケア・角質ケア・保湿を含む、基本のフットケア</p>
                      <p className="text-sm text-on-surface-variant">目安：約30分</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥5,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                    <div className="space-y-1">
                      <h3 className="text-base font-medium text-on-surface">ご施設しっかりケア</h3>
                      <p className="text-sm text-on-surface-variant">巻き爪ケアを含む、より丁寧な個別ケア</p>
                      <p className="text-sm text-on-surface-variant">目安：約60分</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥10,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-6 py-5">
                    <div className="space-y-1">
                      <h3 className="text-base font-medium text-on-surface">個人宅訪問ケア</h3>
                      <p className="text-sm text-on-surface-variant">爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア</p>
                      <p className="text-sm text-on-surface-variant">目安：約60分</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥12,000</div>
                      <span className="text-sm font-normal text-on-surface-variant">税込</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10 space-y-2 text-sm text-on-surface-variant">
                <p>※ご施設ケア・ご施設しっかりケアは、複数名のご依頼があるご施設様向けの料金です。</p>
                <p>※巻き爪ケアは、ご施設しっかりケア・個人宅訪問ケアで対応します。<br />　1趾まで料金内、2趾目からは+6,000円（税込）です。</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
