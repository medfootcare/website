import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FORM_URL, LINE_URL } from "@/constants/links";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ヒーローセクション ===== */}
        <section className="relative overflow-hidden bg-surface-container-low">
          {/* 上段：テキストカード＋画像 */}
          <div className="max-content-width px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10 py-8">

            {/* テキストエリア：白いカードで囲む */}
            <div className="bg-white  shadow-sm p-10 space-y-8 text-center">
              {/* メインキャッチコピー */}
              <h1 className="text-4xl md:text-5xl font-thin text-on-surface leading-[1.2] tracking-tight">
                大切な足元に
                <br />
                やさしさと安心を
              </h1>

              {/* 水色の一直線区切り線 */}
              <div className="h-0.5 w-full bg-primary" />

              {/* サービス名・サブテキスト */}
              <div className="space-y-3">
                <p className="text-base tracking-[0.2em] text-on-surface-variant font-medium">
                  医師・看護師による訪問フットケアサービス
                </p>
              </div>
            </div>

            {/* ヒーロー画像：ベージュ背景にそのまま配置 */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-md aspect-square flex items-center justify-center p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="看護師と医師のイメージ"
                  className="w-full h-full object-contain"
                  src="/medifootcare.web/images/hero-doctor.png"
                />
              </div>
            </div>
          </div>

          {/* 下段：ボタンを中央横並び */}
          <div className="bg-surface-container-low">
            <div className="max-content-width px-6 py-6 flex flex-col sm:flex-row justify-center gap-16 relative z-10">
              {/* 個人ユーザーが多数のため個人を左（先）に配置 */}
              <Link className="btn-primary-k text-base px-12 py-4 justify-center" href="/personal">
                個人向けご案内 ›
              </Link>
              <Link className="btn-primary-k text-base px-12 py-4 justify-center" href="/facility">
                施設向けご案内 ›
              </Link>
            </div>
          </div>
        </section>

        {/* ===== お悩みセクション（分岐の入口）===== */}
        <section className="py-24 px-6 bg-white" id="individual">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">こんなお悩みありませんか？</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* お悩み1 */}
                <div className="bg-white  p-8 border border-surface-container space-y-5 text-center">
                  <p className="text-on-surface font-medium text-lg leading-relaxed">
                    爪が分厚くなって
                    <br />自分では切れない
                  </p>
                </div>

                {/* お悩み2 */}
                <div className="bg-white  p-8 border border-surface-container space-y-5 text-center">
                  <p className="text-on-surface font-medium text-lg leading-relaxed">
                    歩くと爪があたって
                    <br />痛い
                  </p>
                </div>

                {/* お悩み3 */}
                <div className="bg-white  p-8 border border-surface-container space-y-5 text-center">
                  <p className="text-on-surface font-medium text-lg leading-relaxed">
                    靴下や布団に
                    <br />爪が引っかかる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5つの特徴セクション ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-24">
                <h2 className="section-heading">
                  メディフットケアの5つの特徴
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              {/* 上段 3つ */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* 特徴1 */}
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">医師・看護師による<br />チームケア</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    医師の監修のもと、看護師資格を持つスタッフが施術を行います。安心・安全なケアをお届けします。
                  </p>
                </div>
                {/* 特徴2 */}
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">ベッド・車椅子でも<br />施術可能</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    外出が難しい方も安心。ベッドや車椅子に座ったままの状態で、ご自宅や施設でケアを受けられます。
                  </p>
                </div>
                {/* 特徴3 */}
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">毎回ケアごとに<br />報告書を作成</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    施術内容や爪の状態を毎回記録し、ご家族や施設スタッフへご報告。継続的なケアの質を維持します。
                  </p>
                </div>
              </div>
              {/* 下段 2つ（中央寄せ） */}
              <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
                {/* 特徴4 */}
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">巻き爪・分厚い爪など、<br />幅広い爪トラブルに対応</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    巻き爪・肥厚爪・変形爪など、さまざまな爪のお悩みに対応。専門的な知識と技術で丁寧にケアします。
                  </p>
                </div>
                {/* 特徴5 */}
                <div className="bg-white p-8 flex flex-col gap-6 shadow">
                  <h3 className="text-primary break-keep text-center">
                    <span className="text-xl font-bold">専用機器を使用した、<br />痛みの少ないケア</span>
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-sm">
                    専用マシンや器具を使用し、振動や刺激を最小限に抑えた施術。痛みが怖い方でも安心してご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ケース紹介セクション ===== */}
        <section className="py-32 px-6 bg-white" id="cases">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16 space-y-4">
                <h2 className="section-heading">
                  ケース紹介
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              {/* ===== ケースカードグリッド ===== */}
              <div className="grid md:grid-cols-2 gap-8">

                {/* --- 変形爪カード --- */}
                <div className="bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                <div className="grid grid-cols-2">
                  {/* Before 写真 */}
                  <div className="relative">
                    <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
                      BEFORE
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="変形爪 施術前"
                      className="w-full aspect-[4/3] object-cover"
                      src="/medifootcare.web/images/case_henkei_before.png"
                    />
                  </div>
                  {/* After 写真 */}
                  <div className="relative">
                    <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
                      AFTER
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="変形爪 施術後"
                      className="w-full aspect-[4/3] object-cover"
                      src="/medifootcare.web/images/case_henkei_after.png"
                    />
                  </div>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <h3 className="font-semibold text-[15px] tracking-wide text-on-surface mb-2">
                    変形爪のケア
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-[13px] font-light">
                    専用マシンを使用し、変形した爪を丁寧に整えました。
                  </p>
                </div>
              </div>

                {/* --- 巻き爪カード --- */}
                <div className="bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
                <div className="grid grid-cols-2">
                  {/* Before 写真 */}
                  <div className="relative">
                    {/* バッジを下部に配置（爪が上部にあるため被りを回避） */}
                    <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
                      BEFORE
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="巻き爪 施術前"
                      className="w-full aspect-[4/3] object-cover object-top"
                      src="/medifootcare.web/images/case_makizume_before.jpg"
                    />
                  </div>
                  {/* After 写真 */}
                  <div className="relative">
                    <span className="absolute bottom-3 left-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
                      AFTER
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="巻き爪 施術後"
                      className="w-full aspect-[4/3] object-cover"
                      src="/medifootcare.web/images/case_makizume_after.jpg"
                    />
                  </div>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <h3 className="font-semibold text-[15px] tracking-wide text-on-surface mb-2">
                    巻き爪のケア
                  </h3>
                  <p className="text-on-surface-variant leading-loose text-[13px] font-light">
                    専用の器具を使用し、巻き爪を矯正しました。
                  </p>
                </div>
              </div>

              </div>
              <div className="text-center mt-16">
                <Link
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-lg group"
                  href="/cases"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                    medical_information
                  </span>
                  ケース紹介をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 安心ポイント ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">安心してご利用いただけます</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "medical_information",
                    title: "看護師資格保有",
                    desc: "担当スタッフは看護師資格を保有。医学的根拠に基づいた安全なケアを提供します。",
                  },
                  {
                    icon: "sanitizer",
                    title: "感染対策の徹底",
                    desc: "使用する器具はすべて消毒・滅菌処理済み。グローブ着用など感染対策を徹底しています。",
                  },
                  {
                    icon: "support_agent",
                    title: "施術後のフォロー",
                    desc: "気になることがあれば施術後もLINEや電話でご相談いただけます。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white p-8 border border-surface-container text-center space-y-4"
                  >
                    <h3 className="font-bold text-xl text-on-surface">{item.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 料金案内セクション ===== */}
        <section className="py-32 px-6 bg-white" id="pricing">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">
                  料金案内
                </h2>
                <div className="section-heading-bar mb-4"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white  p-10 md:p-16 shadow-sm border border-surface-container">
                <div className="flex-1 space-y-8 w-full">
                  <div className="flex justify-between items-end pb-8 border-b border-surface-container">
                    <div>
                      <h4 className="text-2xl font-bold text-on-surface">
                        ご施設ケア
                      </h4>
                      <p className="text-on-surface-variant mt-2">
                        爪ケア・角質ケア・保湿を含む、基本のフットケア
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">
                        ¥5,000{" "}
                        <span className="text-base font-normal text-on-surface-variant">
                          (税込)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end pb-8 border-b border-surface-container">
                    <div>
                      <h4 className="text-2xl font-bold text-on-surface">
                        ご施設しっかりケア
                      </h4>
                      <p className="text-on-surface-variant mt-2">
                        巻き爪ケアを含む、より丁寧な個別ケア
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">
                        ¥10,000{" "}
                        <span className="text-base font-normal text-on-surface-variant">
                          (税込)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end pb-8 border-b border-surface-container">
                    <div>
                      <h4 className="text-2xl font-bold text-on-surface">
                        個人宅訪問ケア
                      </h4>
                      <p className="text-on-surface-variant mt-2">
                        爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">
                        ¥12,000{" "}
                        <span className="text-base font-normal text-on-surface-variant">
                          (税込)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-lg group"
                  href="/service"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                    payments
                  </span>
                  料金プランを詳しく見る
                </Link>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== よくある質問（抜粋）セクション ===== */}
        <section className="py-32 px-6 bg-white">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-16">
                <h2 className="section-heading">よくある質問</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "どんな方が対象ですか？",
                    a: "高齢者・自分で爪切りが難しくなってきた方・家族が心配な方など、どなたでもご相談ください。",
                  },
                  {
                    q: "自宅にも来てもらえますか？",
                    a: "対応エリア内（佐倉市・八千代市・四街道市・印西市ほか近隣）であれば、ご自宅への訪問が可能です。",
                  },
                  {
                    q: "1回だけでも依頼できますか？",
                    a: "もちろんです。1回からお気軽にご依頼いただけます。継続利用も歓迎しております。",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white  p-8 border border-surface-container">
                    <p className="font-bold text-on-surface mb-3 flex items-start gap-3">
                      <span className="text-primary font-black text-lg shrink-0">Q.</span>
                      {item.q}
                    </p>
                    <p className="text-on-surface-variant leading-relaxed pl-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-lg group"
                  href="/faq"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">
                    quiz
                  </span>
                  よくある質問をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 対応エリアセクション ===== */}
        <section className="py-32 px-6 bg-white" id="area">
          <div className="max-content-width">
            <div className="bg-surface-container-low  p-12 md:p-20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-16 border border-surface-container">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-4xl fill-icon">
                    location_on
                  </span>
                  <h2 className="text-4xl font-bold text-on-surface">
                    訪問対応エリア
                  </h2>
                </div>
                <p className="text-xl text-on-surface-variant">
                  千葉県佐倉市を中心に以下の地域へお伺いしております。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["八千代市", "佐倉市", "四街道市", "印西市"].map((city) => (
                    <span
                      key={city}
                      className="bg-white py-4 text-center text-primary font-bold shadow-sm border border-primary/10"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant pt-4">
                  <span className="material-symbols-outlined text-xl">
                    info
                  </span>
                  <p className="font-normal">
                    上記以外のエリア（近隣市区町村）もお気軽にご相談ください。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/area-map.png"
                  alt="訪問対応エリアマップ"
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== お問い合わせセクション ===== */}
        <section className="py-32 px-6 bg-white" id="facility">
          <div className="max-content-width">
            <div className="bg-surface-container-low border border-surface-container shadow-sm p-10 md:p-16">
              <div className="text-center mb-20 space-y-4">
                <h2 className="section-heading">
                  お問い合わせ・お申し込み
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="text-center space-y-6">

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k text-base px-10 py-4 justify-center w-64"
                  >
                    フォームで相談する（無料）
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k text-base px-10 py-4 justify-center w-64"
                  >
                    LINEで相談する
                  </a>
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
