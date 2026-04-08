import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import PageHeroTitle from "@/components/PageHeroTitle";

export const metadata: Metadata = {
  title: "症例・お悩み | メディフットケア",
  description: "肥厚爪・巻き爪・変形した爪・魚の目など、よくある症例とケア方法をご紹介します。",
  alternates: { canonical: "/cases" },
};

const cases = [
  {
    title: "肥厚爪（ひこうづめ）",
    care: "専用の電動マシンで安全に削り、最適な厚さに整えます。定期的なケアで再発を防ぎます。",
    icon: "layers",
    beforeImg: "/medifootcare.web/images/case_hikotsume_before.png",
    afterImg: "/medifootcare.web/images/case_hikotsume_after.png",
  },
  {
    title: "巻き爪",
    care: "安全な矯正方法で痛みの発生を予防していきます。",
    icon: "rotate_right",
    beforeImg: "/medifootcare.web/images/case_makizume_before.jpg",
    afterImg: "/medifootcare.web/images/case_makizume_after.jpg",
  },
  {
    title: "変形した爪",
    care: "それぞれの足に合わせた最適な形に切り揃えます。",
    icon: "transform",
    beforeImg: "/medifootcare.web/images/case_henkei_before.png",
    afterImg: "/medifootcare.web/images/case_henkei_after.png",
  },
  {
    title: "魚の目（鶏眼）",
    care: "痛みの原因となっている角質を除去して速やかに痛みを軽減します。",
    icon: "gps_fixed",
    beforeImg: "/medifootcare.web/images/case_uonome_before.png",
    afterImg: "/medifootcare.web/images/case_uonome_after.png",
  },
];

export default function CasesPage() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="page-section border-b border-[#CBD5E1] bg-[#F8FAFC]">
          <div className="max-content-width">
            <div className="py-10 flex justify-center">
              <PageHeroTitle lines="症例・お悩み" />
            </div>
          </div>
        </section>

        {/* ===== 症例一覧 ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="grid md:grid-cols-2 gap-6">
              {cases.map((item) => (
                <div
                  key={item.title}
                  className="surface-card overflow-hidden shadow-card"
                >
                  {/* Before/After 画像（ある場合のみ） */}
                  {"beforeImg" in item && item.beforeImg && item.afterImg && (
                    <div className="grid grid-cols-2 gap-0">
                      <div className="flex flex-col">
                        <span className="bg-[#64748B] px-3 py-1.5 text-center text-[15px] font-bold tracking-widest text-white md:text-[10px]">BEFORE</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt={`${item.title} 施術前`} className="w-full aspect-square object-cover" src={item.beforeImg} />
                      </div>
                      <div className="flex flex-col">
                        <span className="bg-[#0369A1] px-3 py-1.5 text-center text-[15px] font-bold tracking-widest text-white md:text-[10px]">AFTER</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt={`${item.title} 施術後`} className="w-full aspect-square object-cover" src={item.afterImg} />
                      </div>
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    {/* タイトル */}
                    <div>
                      <h3 className="text-base font-medium text-on-surface">{item.title}</h3>
                    </div>

                    {/* ケアの概要 */}
                    <div className="pt-4 border-t border-[#CBD5E1]">
                      <p className="mb-1 text-[15px] font-medium text-primary tracking-widest md:text-xs">ケアの概要</p>
                      <p className="copy-note text-on-surface-variant">{item.care}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
