import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PageHeroTitle from "@/components/PageHeroTitle";

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
              <div className="price-card text-left">
                <div className="space-y-0">
                  <div className="flex flex-col items-center gap-5 py-5 border-b border-[#CBD5E1] text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-medium text-on-surface md:text-base">ご施設ケア</h3>
                      <p className="copy-note text-on-surface-variant break-keep">
                        爪ケア・角質ケア・保湿を含む、
                        <br className="xl:hidden" />
                        基本のフットケア
                      </p>
                      <p className="copy-note inline-block border-b border-[#CBD5E1] pb-0.5 text-on-surface-variant">目安：約30分</p>
                    </div>
                    <div className="shrink-0 text-center md:text-right">
                      <div className="flex items-end justify-center gap-2 md:block">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥5,000</div>
                        <span className="copy-note mb-1 font-normal text-on-surface-variant md:mb-0">税込</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-5 py-5 border-b border-[#CBD5E1] text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-medium text-on-surface md:text-base">ご施設しっかりケア</h3>
                      <p className="copy-note text-on-surface-variant break-keep">
                        巻き爪ケアを含む、
                        <br className="xl:hidden" />
                        より丁寧な個別ケア
                      </p>
                      <p className="copy-note inline-block border-b border-[#CBD5E1] pb-0.5 text-on-surface-variant">目安：約60分</p>
                    </div>
                    <div className="shrink-0 text-center md:text-right">
                      <div className="flex items-end justify-center gap-2 md:block">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥10,000</div>
                        <span className="copy-note mb-1 font-normal text-on-surface-variant md:mb-0">税込</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-5 py-5 text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-medium text-on-surface md:text-base">個人宅訪問ケア</h3>
                      <p className="copy-note text-on-surface-variant break-keep">
                        爪や足の状態に合わせて、
                        <br className="xl:hidden" />
                        ご自宅で丁寧に行うフットケア
                      </p>
                      <p className="copy-note inline-block border-b border-[#CBD5E1] pb-0.5 text-on-surface-variant">目安：約60分</p>
                    </div>
                    <div className="shrink-0 text-center md:text-right">
                      <div className="flex items-end justify-center gap-2 md:block">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">¥12,000</div>
                        <span className="copy-note mb-1 font-normal text-on-surface-variant md:mb-0">税込</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
