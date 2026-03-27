import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "料金 | メディフットケア",
  description: "メディフットケアの料金一覧のご案内。足爪ケア・角質ケア・巻き爪ケアなど。",
};

export default function ServicePage() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="py-20 px-6 bg-surface-container-low border-b border-surface-container">
          <div className="max-content-width">
            <div className="bg-white border border-surface-container shadow-sm p-10 md:p-16 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-thin text-on-surface leading-[1.2] tracking-tight">
                料金
              </h1>
              <div className="h-0.5 w-full bg-primary" />
            </div>
          </div>
        </section>

        {/* ===== 料金一覧 ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">料金一覧</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    name: "ご施設ケア",
                    desc: "爪ケア・角質ケア・保湿を含む、基本のフットケア",
                    duration: "約30分",
                    price: "¥5,000",
                    note: "(税込)",
                  },
                  {
                    name: "ご施設しっかりケア",
                    desc: "巻き爪ケアを含む、より丁寧な個別ケア",
                    duration: "約60分",
                    price: "¥10,000",
                    note: "(税込)",
                  },
                  {
                    name: "個人宅訪問ケア",
                    desc: "爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア",
                    duration: "約60分",
                    price: "¥12,000",
                    note: "(税込)",
                  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-white p-8 shadow-sm border border-surface-container flex flex-col md:flex-row md:items-center gap-6"
                  >
                    <div className="flex-1">
                      <div className="mb-1">
                        <h3 className="text-xl font-bold text-on-surface">{item.name}</h3>
                      </div>
                      <p className="text-on-surface-variant">{item.desc}</p>
                      <p className="text-sm text-on-surface-variant mt-1">目安：{item.duration}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-3xl font-bold text-primary">{item.price}</p>
                      <p className="text-sm text-on-surface-variant">{item.note}</p>
                    </div>
                  </div>
                ))}
              <div className="mt-8 space-y-2 text-sm text-on-surface-variant">
                <p>※ご施設ケア・ご施設しっかりケアは、複数名のご依頼があるご施設様向けの料金です。</p>
                <p>※巻き爪ケアは、ご施設しっかりケア・個人宅訪問ケアで対応します。1本まで料金内、2本目からは+6,000円（税込）です。</p>
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
