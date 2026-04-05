import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FORM_URL, LINE_URL } from "@/constants/links";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] text-[#020617]">
      {/* スキップリンク：キーボードナビ用 */}
      <a href="#main-content" className="skip-link">
        メインコンテンツへスキップ
      </a>

      <Header />

      <main id="main-content" className="pt-24">

        {/* ===== ヒーローセクション ===== */}
        {/* ドットグリッド背景 */}
        <section
          className="page-section !py-0 bg-white"
          aria-labelledby="hero-heading"
        >
          <div className="section-panel-hero max-content-width pt-12 pb-16 md:pt-16 md:pb-20 xl:grid xl:grid-cols-2 xl:items-center xl:gap-12">

            {/* テキストエリア */}
            <div className="animate-fade-in-up">

              {/* ブランドラベル */}
              <p className="mb-6 font-mono text-[15px] tracking-[0.12em] text-[#9CA3AF] uppercase select-none md:text-[11px] md:tracking-[0.18em]">
                MEDIFOOTCARE
              </p>

              {/* メイン見出し：超大・ボールド */}
              <h1
                id="hero-heading"
                className="text-[38px] font-bold leading-[1.25] tracking-[-0.01em] text-[#111827] mb-6 break-keep mobile-mini:text-[32px] md:text-[46px] xl:text-[60px]"
                style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
              >
                大切な足元に
                <br />
                やさしさと安心を
              </h1>

              {/* サブテキスト */}
              <p className="text-[17px] text-[#6B7280] mb-8 break-keep mobile:text-[12px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                医師・看護師による
                <br className="hidden mobile-narrow:block" />
                訪問フットケアサービス
              </p>

              {/* CTAボタン */}
              <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center xl:justify-start">
                <Link
                  className="btn-primary-k w-full whitespace-nowrap md:w-auto"
                  href="/personal"
                  aria-label="個人でのご依頼について詳しく見る"
                >
                  個人でのご依頼を検討中の方 ›
                </Link>
                <Link
                  className="btn-outline-k w-full whitespace-nowrap md:w-auto"
                  href="/facility"
                  aria-label="施設でのご依頼について詳しく見る"
                >
                  施設への導入を検討中の方 ›
                </Link>
              </div>
            </div>

            {/* ヒーロー画像 */}
            <div className="w-full overflow-hidden mt-10 xl:mt-0 stagger-3">
              <div className="w-full max-w-[480px] mx-auto xl:max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="利用者と医療・介護スタッフが笑顔で手をつなぐイメージ"
                  className="w-full h-full object-contain"
                  src="/medifootcare.web/images/hero-care-team.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== お悩みセクション ===== */}
        <section className="page-section bg-[#F8FAFC]" id="individual" aria-labelledby="worries-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="worries-heading" className="section-heading">こんなお悩みありませんか？</h2>
              </div>
              <div className="flex flex-col items-center gap-6">
                <ul className="w-full max-w-lg space-y-3 text-left" aria-label="よくあるお悩みの例">
                  {[
                    "歩くと爪が痛い",
                    "靴下や布団が爪に引っかかる",
                    "足を少しでも綺麗にしたい",
                    "爪が分厚くなって、自分では切れない",
                  ].map((text, i) => (
                    <li
                      key={text}
                      className={`flex items-center gap-3 bg-white border-2 border-[#CBD5E1] px-5 py-4 stagger-${i + 1}`}
                    >
                      <span
                        className="flex shrink-0 items-center justify-center w-6 h-6 bg-[#0369A1] rounded-sm"
                        aria-hidden="true"
                      >
                        <span className="material-symbols-outlined text-[14px] text-white" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>
                          check
                        </span>
                      </span>
                      <span className="text-[15px] font-normal text-[#020617] break-keep md:text-[17px] md:font-medium" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="w-full max-w-72 overflow-hidden" style={{ height: "200px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/medifootcare.web/images/nayami-illustration.png"
                    alt="足元のお悩みを抱えている方のイラスト"
                    className="w-full"
                    style={{ marginTop: "-12%", marginBottom: "-20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== メディフットケアとは？ ===== */}
        <section className="page-section bg-white" aria-labelledby="about-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 id="about-heading" className="section-heading">メディフットケアとは？</h2>
              </div>
              <div className="md:max-w-[720px] mx-auto">
                <p className="copy-body text-[#334155] break-keep md:text-[17px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                  メディフットケアは、
                  <br className="md:hidden" />
                  医師・看護師が直接ご自宅や施設へ伺い、
                  <br className="md:hidden" />
                  <br className="hidden md:block xl:hidden" />
                  <br className="hidden xl:block" />
                  足元のケアをお届けする
                  <br className="md:hidden" />
                  訪問フットケアサービスです。
                  <br className="md:hidden" />
                  <br className="hidden md:block xl:hidden" />
                  <br className="md:hidden" />
                  <br className="hidden xl:block" />
                  爪のトラブルや足の痛みでお悩みの方に、
                  <br className="md:hidden" />
                  専門的なケアを提供します。
                </p>
                <div className="mt-5">
                  <Link className="text-link-inline group" href="/about">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">info</span>
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5つの特徴 ===== */}
        <section className="page-section bg-[#F8FAFC]" aria-labelledby="features-heading">
          <div className="mx-auto max-w-[1240px]">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="features-heading" className="section-heading">
                  メディフットケアの
                  <br className="md:hidden" />
                  5つの特徴
                </h2>
              </div>
              {/* スマホ・タブレット：2 / 2 / 1 */}
              <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 xl:hidden">
                {[
                  {
                    num: 1,
                    icons: [
                      { src: "/medifootcare.web/images/icons/doctor.png", alt: "医師のアイコン" },
                      { src: "/medifootcare.web/images/icons/nurse.png", alt: "看護師のアイコン" },
                    ],
                    title: (
                      <>
                        医師・看護師による
                        <br className="hidden mobile-narrow:block" />
                        チームケア
                      </>
                    ),
                    desc: (
                      <>
                        医師の監修のもと、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        看護師資格を持つスタッフが
                        <br className="hidden mobile-narrow:block" />
                        <br className="hidden md:block xl:hidden" />
                        施術を行います。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        安心・安全なケアをお届けします。
                      </>
                    ),
                  },
                  {
                    num: 2,
                    icons: [{ src: "/medifootcare.web/images/icons/wheelchair.png", alt: "" }],
                    title: "ベッド・車椅子でも施術可能",
                    desc: (
                      <>
                        外出が難しい方も安心。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        ベッドや車椅子に座ったままの状態で、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        ご自宅や施設でケアを受けられます。
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div key={item.num} className={`surface-card stagger-${i + 1} h-full text-center`}>
                    <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                      {item.icons.map((icon) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={icon.src} src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
                      ))}
                    </div>
                    <h3 className="text-[18px] font-bold text-[#020617] mb-3 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                      {item.title}
                    </h3>
                    <p className="copy-body text-[#334155] break-keep mobile-narrow:text-[13px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
                {[
                  {
                    num: 4,
                    icons: [{ src: "/medifootcare.web/images/icons/nail-trouble.png", alt: "" }],
                    title: (
                      <>
                        <span className="whitespace-nowrap">巻き爪・分厚い爪など</span>
                        <br />
                        幅広い爪トラブルに対応
                      </>
                    ),
                    desc: (
                      <>
                        巻き爪・肥厚爪・変形爪など、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        さまざまな爪のお悩みに対応。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        専門的な知識と技術で丁寧にケアします。
                      </>
                    ),
                  },
                  {
                    num: 3,
                    icons: [{ src: "/medifootcare.web/images/icons/report.png", alt: "" }],
                    title: "毎回ケアごとに報告書を作成",
                    desc: (
                      <>
                        施術内容や爪の状態を毎回記録し、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        ご家族や施設スタッフへご報告。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        継続的なケアの質を維持します。
                      </>
                    ),
                  },
                ].map((item) => (
                  <div key={item.num} className="surface-card h-full text-center">
                    <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                      {item.icons.map((icon) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={icon.src} src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
                      ))}
                    </div>
                    <h3 className="text-[18px] font-bold text-[#020617] mb-3 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                      {item.title}
                    </h3>
                    <p className="copy-body text-[#334155] break-keep mobile-narrow:text-[13px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
                <div className="md:col-span-2 md:flex md:justify-center">
                  {[
                    {
                      num: 5,
                      icons: [{ src: "/medifootcare.web/images/icons/equipment.png", alt: "" }],
                      title: (
                        <>
                          専用機器を使用した
                          <br className="hidden mobile:block" />
                          <br className="hidden md:block lg:hidden" />
                          痛みの少ないケア
                        </>
                      ),
                      desc: (
                        <>
                          専用マシンや器具を使用し、
                          <br className="md:hidden" />
                          <br className="hidden md:block xl:hidden" />
                          振動や刺激を最小限に抑えた施術。
                          <br className="md:hidden" />
                          <br className="hidden md:block xl:hidden" />
                          痛みが怖い方でも安心して
                          <br className="hidden md:block xl:hidden" />
                          <br className="hidden mobile:block" />
                          ご利用いただけます。
                        </>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.num} className="surface-card h-full text-center md:w-[calc(50%-0.5rem)]">
                      <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                        {item.icons.map((icon) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={icon.src} src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
                        ))}
                      </div>
                      <h3 className="text-[18px] font-bold text-[#020617] mb-3 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.title}
                      </h3>
                      <p className="copy-body text-[#334155] break-keep mobile-narrow:text-[13px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PC：3 / 2 */}
              <div className="hidden xl:block">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      num: 1,
                      icons: [
                        { src: "/medifootcare.web/images/icons/doctor.png", alt: "医師のアイコン" },
                        { src: "/medifootcare.web/images/icons/nurse.png", alt: "看護師のアイコン" },
                      ],
                      title: "医師・看護師によるチームケア",
                      desc: (
                        <>
                          医師の監修のもと、
                          <br />
                          看護師資格を持つスタッフが施術を行います。
                          <br />
                          安心・安全なケアをお届けします。
                        </>
                      ),
                    },
                    {
                      num: 2,
                      icons: [{ src: "/medifootcare.web/images/icons/wheelchair.png", alt: "" }],
                      title: "ベッド・車椅子でも施術可能",
                      desc: (
                        <>
                          外出が難しい方も安心。
                          <br />
                          ベッドや車椅子に座ったままの状態で、
                          <br />
                          ご自宅や施設でケアを受けられます。
                        </>
                      ),
                    },
                    {
                      num: 4,
                      icons: [{ src: "/medifootcare.web/images/icons/nail-trouble.png", alt: "" }],
                    title: (
                      <>
                        <span className="whitespace-nowrap">巻き爪・分厚い爪など</span>
                        <br />
                        幅広い爪トラブルに対応
                      </>
                    ),
                      desc: (
                        <>
                          巻き爪・肥厚爪・変形爪など、
                          <br />
                          さまざまな爪のお悩みに対応。
                          <br />
                          専門的な知識と技術で
                          丁寧にケアします。
                        </>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={item.num} className={`surface-card stagger-${i + 1} text-center`}>
                      <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                        {item.icons.map((icon) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={icon.src} src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
                        ))}
                      </div>
                      <h3 className="text-[18px] font-bold text-[#020617] mb-3 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.title}
                      </h3>
                      <p className="copy-body text-[#334155] break-keep mobile-narrow:text-[13px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 mx-auto grid max-w-[calc(68%-0.5rem)] grid-cols-2 gap-4">
                  {[
                    {
                      num: 3,
                      icons: [{ src: "/medifootcare.web/images/icons/report.png", alt: "" }],
                      title: "毎回ケアごとに報告書を作成",
                      desc: (
                        <>
                          施術内容や爪の状態を毎回記録し、
                          <br />
                          ご家族や施設スタッフへご報告。
                          <br />
                          継続的なケアの質を維持します。
                        </>
                      ),
                    },
                    {
                      num: 5,
                      icons: [{ src: "/medifootcare.web/images/icons/equipment.png", alt: "" }],
                      title: (
                        <>
                          専用機器を使用した
                          <br className="md:hidden" />
                          痛みの少ないケア
                        </>
                      ),
                      desc: (
                        <>
                          専用マシンや器具を使用し、
                          <br />
                          振動や刺激を最小限に抑えた施術。
                          <br />
                          痛みが怖い方でも安心して
                          <br />
                          ご利用いただけます。
                        </>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={item.num} className={`surface-card stagger-${i + 4} text-center`}>
                      <div className="flex justify-center gap-2 mb-4" aria-hidden="true">
                        {item.icons.map((icon) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={icon.src} src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
                        ))}
                      </div>
                      <h3 className="text-[18px] font-bold text-[#020617] mb-3 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.title}
                      </h3>
                      <p className="copy-body text-[#334155] break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ケース紹介 ===== */}
        <section className="page-section bg-white" id="cases" aria-labelledby="cases-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="cases-heading" className="section-heading">ケース紹介</h2>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                {[
                  {
                    beforeSrc: "/medifootcare.web/images/case_henkei_before.png",
                    afterSrc: "/medifootcare.web/images/case_henkei_after.png",
                    beforeAlt: "変形爪 施術前の写真",
                    afterAlt: "変形爪 施術後の写真",
                    title: "変形爪のケア",
                  },
                  {
                    beforeSrc: "/medifootcare.web/images/case_makizume_before.jpg",
                    afterSrc: "/medifootcare.web/images/case_makizume_after.jpg",
                    beforeAlt: "巻き爪 施術前の写真",
                    afterAlt: "巻き爪 施術後の写真",
                    title: "巻き爪のケア",
                  },
                ].map((c) => (
                  <div key={c.title} className="bg-white border-2 border-[#CBD5E1] overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col">
                        <span className="bg-[#64748B] px-3 py-1.5 text-center text-[15px] font-bold tracking-widest text-white md:text-[11px]">
                          BEFORE
                        </span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt={c.beforeAlt} className="w-full aspect-[4/3] object-cover object-top" src={c.beforeSrc} />
                      </div>
                      <div className="flex flex-col">
                        <span className="bg-[#0369A1] px-3 py-1.5 text-center text-[15px] font-bold tracking-widest text-white md:text-[11px]">
                          AFTER
                        </span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt={c.afterAlt} className="w-full aspect-[4/3] object-cover" src={c.afterSrc} />
                      </div>
                    </div>
                    <div className="px-4 py-3 border-t-2 border-[#CBD5E1]">
                      <h3 className="text-[17px] font-bold text-[#020617]">{c.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/cases">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">medical_information</span>
                  ケース紹介をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 安心ポイント：ダークネイビー帯 ===== */}
        <section className="page-section bg-[#0C4A6E]" aria-labelledby="safety-heading">
          <div className="mx-auto max-w-[1240px]">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="safety-heading" className="section-heading-white">安心してご利用いただけます</h2>
              </div>
              <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 xl:grid-cols-3 xl:gap-4">
                {[
                  {
                    icon: "medical_information",
                    title: "医師・看護師のみで構成",
                    desc: (
                      <>
                        担当スタッフは医師免許、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        もしくは看護師免許を保有。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        医学的根拠に基づく安全なケアを
                        <br className="hidden mobile:block md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        提供します。
                      </>
                    ),
                  },
                  {
                    icon: "sanitizer",
                    title: "衛生対策の徹底",
                    desc: (
                      <>
                        使用する器具はすべて消毒済み。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        グローブ着用など衛生対策を徹底。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        施術時の粉塵対策も実施しています。
                      </>
                    ),
                  },
                  {
                    icon: "security",
                    title: "賠償責任保険加入",
                    desc: (
                      <>
                        万が一の際も安心。
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        賠償責任保険に加入しており、
                        <br className="md:hidden" />
                        <br className="hidden md:block xl:hidden" />
                        <br className="hidden xl:block" />
                        安全な施術環境を整えています。
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`bg-white/10 border-2 border-white/20 p-6 text-center stagger-${i + 1} ${
                      i === 2 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)] xl:col-span-1 xl:mx-0 xl:w-auto" : ""
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-center gap-3">
                      <span className="flex shrink-0 items-center justify-center w-10 h-10 bg-white/20">
                        <span className="material-symbols-outlined fill-icon text-[22px] text-white" aria-hidden="true">
                          {item.icon}
                        </span>
                      </span>
                      <h3 className="text-[17px] font-bold text-white break-keep mobile-narrow:text-[15px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>{item.title}</h3>
                    </div>
                    <p className="copy-body text-center text-white/80 break-keep mobile-narrow:text-[12px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/nurse-illustration.png"
                  alt="看護師のイラスト"
                  className="w-full max-w-40 opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 料金案内 ===== */}
        <section className="page-section bg-[#F8FAFC]" id="pricing" aria-labelledby="pricing-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="pricing-heading" className="section-heading">料金案内</h2>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="price-card" role="table" aria-label="料金一覧">
                  {[
                    {
                      name: "ご施設ケア",
                      desc: (
                        <>
                          爪ケア・角質ケア・保湿を含む、
                          <br className="md:hidden" />
                          基本のフットケア
                        </>
                      ),
                      price: "¥5,000",
                      border: true,
                    },
                    {
                      name: "ご施設しっかりケア",
                      desc: (
                        <>
                          巻き爪ケアを含む、
                          <br className="md:hidden" />
                          より丁寧な個別ケア
                        </>
                      ),
                      price: "¥10,000",
                      border: true,
                    },
                    {
                      name: "個人宅訪問ケア",
                      desc: (
                        <>
                          爪や足の状態に合わせて、
                          <br className="md:hidden" />
                          ご自宅で丁寧に行うフットケア
                        </>
                      ),
                      price: "¥12,000",
                      border: false,
                    },
                  ].map((row) => (
                    <div
                      key={row.name}
                      role="row"
                      className={`flex flex-col items-center gap-4 py-6 text-center md:flex-row md:items-start md:justify-between md:gap-6 md:text-left ${
                        row.border ? "border-b-2 border-[#CBD5E1]" : ""
                      }`}
                    >
                      <div className="space-y-1">
                        <h4 className="text-[18px] font-bold text-[#020617] break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                          {row.name}
                        </h4>
                        <p className="copy-body-lg text-[#334155] break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                          {row.desc}
                        </p>
                      </div>
                      <div className="shrink-0 text-center md:text-right">
                        <div className="flex items-end justify-center gap-2 md:block">
                          <div className="text-[28px] font-bold text-[#0369A1] whitespace-nowrap font-headline">
                            {row.price}
                          </div>
                          <span className="copy-body-lg mb-1 text-[#334155] md:mb-0">税込</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link className="text-link-inline" href="/service">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">payments</span>
                  料金プランを詳しく見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== よくある質問 ===== */}
        <section className="page-section bg-white" aria-labelledby="faq-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-10">
                <h2 id="faq-heading" className="section-heading">よくある質問</h2>
              </div>
              <div className="mx-auto max-w-2xl space-y-3 text-left">
                {[
                  {
                    q: "どんな方が対象ですか？",
                    a: "高齢者・自分で爪切りが難しくなってきた方・家族が心配な方など、どなたでもご相談ください。",
                  },
                  {
                    q: "自宅にも来てもらえますか？",
                    a: "対応エリア内（佐倉市・八千代市・四街道市・印西市・千葉市ほか近隣）であれば、ご自宅への訪問が可能です。",
                  },
                  {
                    q: "1回だけでも依頼できますか？",
                    a: "もちろんです。1回からお気軽にご依頼いただけます。継続利用も歓迎しております。",
                  },
                ].map((item, i) => (
                  <div key={i} className={`qa-card stagger-${i + 1}`}>
                    <p className="mb-3 flex items-start gap-3 font-bold text-[#020617]">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0369A1] text-[15px] font-bold text-white font-headline md:text-[13px]"
                        aria-label="質問"
                      >Q</span>
                      <span className="flex-1 min-w-0 break-normal text-[17px] md:break-keep" style={{ wordBreak: "normal", overflowWrap: "break-word" }}>{item.q}</span>
                    </p>
                    <p className="copy-body-lg flex items-start gap-3 text-[#334155]">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[#0369A1] text-[15px] font-bold text-[#0369A1] font-headline md:text-[13px]"
                        aria-label="回答"
                      >A</span>
                      <span className="flex-1 min-w-0 break-normal md:break-keep" style={{ wordBreak: "normal", overflowWrap: "break-word" }}>{item.a}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link className="text-link-inline" href="/faq">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">quiz</span>
                  よくある質問をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 対応エリア ===== */}
        <section className="page-section bg-[#F8FAFC]" id="area" aria-labelledby="area-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mx-auto flex max-w-3xl flex-col gap-8 xl:flex-row xl:items-center xl:gap-12">
                <div className="flex-1 space-y-4 text-center xl:text-left">
                  <div className="flex items-center justify-center gap-3 xl:justify-start">
                    <span className="material-symbols-outlined fill-icon text-[24px] text-[#0369A1]" aria-hidden="true">location_on</span>
                    <h2 id="area-heading" className="text-[24px] font-bold text-[#020617]">訪問対応エリア</h2>
                  </div>
                  <p className="copy-body text-[#334155] break-keep md:text-[17px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                    千葉県佐倉市を中心に以下の地域へ
                    <br className="md:hidden" />
                    お伺いしております。
                  </p>
                  <div
                    className="grid grid-cols-6 gap-x-3 gap-y-2 pt-2 text-center md:flex md:flex-nowrap md:justify-center md:gap-6 xl:justify-between xl:gap-3 xl:text-left"
                    role="list"
                    aria-label="対応エリア一覧"
                  >
                    {[
                      { city: "八千代市", className: "col-span-2" },
                      { city: "佐倉市", className: "col-span-2" },
                      { city: "四街道市", className: "col-span-2" },
                      { city: "印西市", className: "col-span-2 col-start-2" },
                      { city: "千葉市", className: "col-span-2 col-start-4" },
                    ].map((item) => (
                      <span
                        key={item.city}
                        role="listitem"
                        className={`${item.className} border-2 border-[#CBD5E1] bg-white py-2.5 text-[16px] font-bold text-[#020617] md:whitespace-nowrap md:border-0 md:bg-transparent`}
                      >
                        {item.city}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-4 text-[#334155] xl:justify-start">
                    <span className="material-symbols-outlined shrink-0 text-[22px]" aria-hidden="true">info</span>
                    <p className="copy-body-lg text-left break-keep xl:whitespace-nowrap" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                      上記以外のエリア（近隣市区町村）も
                      <br className="md:hidden" />
                      お気軽にご相談ください。
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 justify-center xl:flex xl:justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/medifootcare.web/images/area-map.png"
                    alt="訪問対応エリアのマップ。佐倉市を中心に千葉県内5市を示している。"
                    className="h-auto w-full max-w-[300px] rounded-[40px] border-2 border-[#CBD5E1]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== お問い合わせ ===== */}
        <section className="page-section bg-[#0369A1]" id="facility" aria-labelledby="contact-heading">
          <div className="max-content-width">
            <div className="section-panel">
              <h2 id="contact-heading" className="text-[26px] font-bold text-white mb-3 md:text-[28px]">
                お問い合わせ
              </h2>
              <p className="text-[16px] text-white/90 mb-8 break-keep" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>
                ご不明点・ご相談はお気軽にどうぞ。
                <br className="md:hidden" />
                無料でご相談いただけます。
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="フォームで相談する（新しいタブで開きます）"
                  className="inline-flex items-center justify-center min-h-[52px] whitespace-nowrap px-10 font-bold text-[16px] tracking-wide border-3 border-white bg-white text-[#0369A1] hover:bg-transparent hover:text-white transition-colors duration-150 cursor-pointer w-full md:min-w-[260px] md:w-auto border-[3px] rounded-sm"
                >
                  フォームで相談する
                </a>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINEで相談する（新しいタブで開きます）"
                  className="inline-flex items-center justify-center min-h-[52px] whitespace-nowrap px-10 font-bold text-[16px] tracking-wide border-[3px] border-white text-white hover:bg-white hover:text-[#0369A1] transition-colors duration-150 cursor-pointer w-full md:min-w-[260px] md:w-auto rounded-sm"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
