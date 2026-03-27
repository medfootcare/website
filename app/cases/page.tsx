import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "症例・お悩み | メディフットケア",
  description: "肥厚爪・巻き爪・変形した爪・角質・タコ・魚の目など、よくある症例とケア方法をご紹介します。",
};

const cases = [
  {
    title: "肥厚爪（ひこうそう）",
    subtitle: "分厚くなった爪",
    cause: "加齢・血行不良・外圧による変形",
    state: "爪が異常に厚く、硬くなっている状態。自分では切れない・切ると痛いことが多い。",
    care: "専用の電動マシンで安全に削り、正常な厚さに整えます。定期的なケアで再発を防ぎます。",
    icon: "layers",
    beforeImg: "/medifootcare.web/images/case_hikotsume_before.png",
    afterImg: "/medifootcare.web/images/case_hikotsume_after.png",
  },
  {
    title: "巻き爪",
    subtitle: "内側に巻いた爪",
    cause: "不適切な爪切り・窮屈な靴・歩き方の癖など",
    state: "爪の端が皮膚に食い込み、歩くたびに痛みが生じる。炎症を起こすこともある。",
    care: "爪に負担をかけず巻きを緩和するケアを行います。重症の場合は医療機関をご案内します。",
    icon: "rotate_right",
    beforeImg: "/medifootcare.web/images/case_makizume_before.jpg",
    afterImg: "/medifootcare.web/images/case_makizume_after.jpg",
  },
  {
    title: "変形した爪",
    subtitle: "形が変わってしまった爪",
    cause: "外傷・長期間の圧迫・疾患の影響",
    state: "爪の形が本来の形から変形してしまっている状態。放置するとさらに悪化する場合がある。",
    care: "状態に合わせた整え方を行い、これ以上悪化しないよう定期的にケアします。",
    icon: "transform",
    beforeImg: "/medifootcare.web/images/case_henkei_before.png",
    afterImg: "/medifootcare.web/images/case_henkei_after.png",
  },
  {
    title: "魚の目（鶏眼）",
    subtitle: "芯のある痛い角質",
    cause: "特定の場所への持続的な圧迫",
    state: "タコと似ているが中心に「芯」があり、歩くたびに強い痛みを感じる。",
    care: "芯の部分に注意しながら丁寧に除去します。状態によっては皮膚科への受診を勧める場合もあります。",
    icon: "gps_fixed",
    beforeImg: "/medifootcare.web/images/case_uonome_before.png",
    afterImg: "/medifootcare.web/images/case_uonome_after.png",
  },
  {
    title: "タコ（胼胝）",
    subtitle: "圧力で厚くなった皮膚",
    cause: "繰り返しの摩擦・圧力",
    state: "特定の場所の皮膚が厚く硬くなった状態。痛みはないが、進行すると歩きにくくなる。",
    care: "表面の硬い角質を丁寧に削ります。靴の見直しなどのアドバイスも行います。",
    icon: "layers",
  },
  {
    title: "角質・かかとのひび割れ",
    subtitle: "硬くなった角質",
    cause: "乾燥・圧力・加齢",
    state: "足裏やかかとが硬くなり、歩くと痛みが生じる。ひび割れが深くなると出血することも。",
    care: "専用のツールで不要な角質を丁寧に除去。保湿ケアを行いやわらかい状態を保ちます。",
    icon: "healing",
  },
];

export default function CasesPage() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ページヘッダー ===== */}
        <section className="py-20 px-6 bg-surface-container-low border-b border-surface-container">
          <div className="max-content-width">
            <div className="bg-white border border-surface-container shadow-sm p-10 md:p-16 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-thin text-on-surface leading-[1.2] tracking-tight">
                症例・お悩み
              </h1>
              <div className="h-0.5 w-full bg-primary" />
              <p className="text-base text-on-surface-variant font-normal leading-relaxed">
                「これは自分のことだ」と感じたら、お気軽にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 症例一覧 ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="p-10 md:p-16">
              <div className="grid md:grid-cols-2 gap-16">
                {cases.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white overflow-hidden shadow-lg"
                  >
                    {/* Before/After 画像（ある場合のみ） */}
                    {"beforeImg" in item && item.beforeImg && item.afterImg && (
                      <div className="grid grid-cols-2 gap-0">
                        <div className="relative">
                          <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">BEFORE</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt={`${item.title} 施術前`} className="w-full aspect-square object-cover" src={item.beforeImg} />
                        </div>
                        <div className="relative">
                          <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">AFTER</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img alt={`${item.title} 施術後`} className="w-full aspect-square object-cover" src={item.afterImg} />
                        </div>
                      </div>
                    )}

                    <div className="p-8 space-y-5">
                      {/* タイトル */}
                      <div>
                        <h3 className="text-xl font-bold text-on-surface">{item.title}</h3>
                        <p className="text-sm text-on-surface-variant">{item.subtitle}</p>
                      </div>

                      {/* 原因・状態・ケア */}
                      <div className="divide-y divide-surface-container">
                        <div className="py-4">
                          <p className="text-xs font-bold text-primary tracking-widest mb-1">主な原因</p>
                          <p className="text-on-surface-variant text-sm">{item.cause}</p>
                        </div>
                        <div className="py-4">
                          <p className="text-xs font-bold text-primary tracking-widest mb-1">状態</p>
                          <p className="text-on-surface-variant text-sm">{item.state}</p>
                        </div>
                        <div className="py-4">
                          <p className="text-xs font-bold text-primary tracking-widest mb-1">ケアの概要</p>
                          <p className="text-on-surface-variant text-sm">{item.care}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
