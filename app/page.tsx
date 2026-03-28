import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FORM_URL, LINE_URL } from "@/constants/links";

export default function Home() {
  return (
    <div className="bg-white text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ヒーローセクション ===== */}
        <section className="page-section">
          {/* 上段：テキストエリア＋画像 */}
          <div className="section-panel-hero max-content-width md:grid md:grid-cols-2 md:items-center md:gap-10">

            {/* テキストエリア */}
            <div className="space-y-4 py-5">
              {/* メインキャッチコピー */}
              <h1 className="text-[24px] font-medium leading-[1.75] text-on-surface">
                大切な足元に
                <br />
                やさしさと安心を
              </h1>

              {/* 区切り線：左揃え */}
              <div className="mx-auto h-px w-10 bg-primary" />

              {/* サービス名・サブテキスト */}
              <div className="space-y-3">
                <p className="text-base font-normal tracking-normal text-on-surface-variant">
                  医師・看護師による訪問フットケアサービス
                </p>
              </div>
            </div>

            {/* ヒーロー画像 */}
            <div className="py-5">
              <div className="w-full max-w-[480px] md:max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="看護師と医師のイメージ"
                  className="w-full h-full object-contain"
                  src="/medifootcare.web/images/hero-doctor.png"
                />
              </div>
            </div>
          </div>

          {/* 下段：CTAボタン */}
          <div className="max-content-width pt-6">
            <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-center">
              {/* 個人ユーザーが多数のため個人を左（先）に配置 */}
              <Link className="btn-primary-k min-w-[200px]" href="/personal">
                ご利用者様・ご家族様 ›
              </Link>
              <Link className="btn-outline-k min-w-[200px]" href="/facility">
                施設スタッフ様 ›
              </Link>
            </div>
          </div>
        </section>

        {/* ===== お悩みセクション（分岐の入口）===== */}
        <section className="page-section bg-[#f8fafa]" id="individual">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">こんなお悩みありませんか？</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
                {/* お悩み1 */}
                <div className="surface-card-soft">
                  <p className="text-base font-normal leading-loose text-on-surface">
                    爪が分厚くなって
                    <br />自分では切れない
                  </p>
                </div>

                {/* お悩み2 */}
                <div className="surface-card-soft">
                  <p className="text-base font-normal leading-loose text-on-surface">
                    歩くと爪があたって
                    <br />痛い
                  </p>
                </div>

                {/* お悩み3 */}
                <div className="surface-card-soft">
                  <p className="text-base font-normal leading-loose text-on-surface">
                    靴下や布団に
                    <br />爪が引っかかる
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== メディフットケアとは？セクション ===== */}
        <section className="page-section bg-white">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  メディフットケアとは？
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:max-w-[760px] mx-auto">
                <p className="text-base leading-loose text-on-surface-variant">
                  メディフットケアは、医師・看護師が直接ご自宅や施設へ伺い、<br />
                  足元のケアをお届けする訪問フットケアサービスです。<br />
                  爪のトラブルや足の痛みでお悩みの方に、専門的なケアを提供します。
                </p>
                <div className="pt-2">
                  <Link
                    className="text-link-inline group"
                    href="/about"
                  >
                    <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                      info
                    </span>
                    概要・企業情報・沿革を見る
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5つの特徴セクション ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  メディフットケアの5つの特徴
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              {/* 上段 3つ */}
              <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
                {/* 特徴1 */}
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">医師・看護師による<br />チームケア</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    医師の監修のもと、<br />
                    看護師資格を持つスタッフが施術を行います。安心・安全なケアをお届けします。
                  </p>
                </div>
                {/* 特徴2 */}
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">ベッド・車椅子でも<br />施術可能</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    外出が難しい方も安心。<br />
                    ベッドや車椅子に座ったままの状態で、<br />
                    ご自宅や施設でケアを受けられます。
                  </p>
                </div>
                {/* 特徴3 */}
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">毎回ケアごとに<br />報告書を作成</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    施術内容や爪の状態を毎回記録し、<br />
                    ご家族や施設スタッフへご報告。<br />
                    継続的なケアの質を維持します。
                  </p>
                </div>
              </div>
              {/* 下段 2つ */}
              <div className="space-y-4 pt-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                {/* 特徴4 */}
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">巻き爪・分厚い爪など、<br />幅広い爪トラブルに対応</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    巻き爪・肥厚爪・変形爪など、さまざまな爪のお悩みに対応。<br />
                    専門的な知識と技術で丁寧にケアします。
                  </p>
                </div>
                {/* 特徴5 */}
                <div className="surface-card space-y-4">
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">専用機器を使用した、<br />痛みの少ないケア</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant">
                    専用マシンや器具を使用し、振動や刺激を最小限に抑えた施術。<br />
                    痛みが怖い方でも安心してご利用いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ケース紹介セクション ===== */}
        <section className="page-section bg-white" id="cases">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  ケース紹介
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              {/* ===== ケースカードグリッド ===== */}
              <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">

                {/* --- 変形爪カード --- */}
                <div className="surface-card overflow-hidden">
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
                  <div className="pt-4">
                    <h3 className="mb-2 text-base font-medium tracking-wide text-on-surface">
                      変形爪のケア
                    </h3>
                    <p className="text-sm leading-loose text-on-surface-variant">
                      専用マシンを使用し、変形した爪を丁寧に整えました。
                    </p>
                  </div>
                </div>

                {/* --- 巻き爪カード --- */}
                <div className="surface-card overflow-hidden">
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
                  <div className="pt-4">
                    <h3 className="mb-2 text-base font-medium tracking-wide text-on-surface">
                      巻き爪のケア
                    </h3>
                    <p className="text-sm leading-loose text-on-surface-variant">
                      専用の器具を使用し、巻き爪を矯正しました。
                    </p>
                  </div>
                </div>

              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/cases">
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                    medical_information
                  </span>
                  ケース紹介をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 安心ポイント ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">安心してご利用いただけます</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
                {[
                  {
                    icon: "medical_information",
                    title: "看護師資格保有",
                    desc: <>担当スタッフは看護師資格を保有。<br />医学的根拠に基づいた安全なケアを提供します。</>,
                  },
                  {
                    icon: "sanitizer",
                    title: "感染対策の徹底",
                    desc: <>使用する器具はすべて消毒・滅菌処理済み。<br />グローブ着用など感染対策を徹底しています。</>,
                  },
                  {
                    icon: "support_agent",
                    title: "施術後のフォロー",
                    desc: <>気になることがあれば施術後も<br />メールやLINEでご相談いただけます。</>,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="surface-card-soft space-y-4"
                  >
                    <h3 className="text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="text-sm leading-loose text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 料金案内セクション ===== */}
        <section className="page-section bg-white" id="pricing">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  料金案内
                </h2>
                <div className="section-heading-bar mb-4"></div>
              </div>
              <div className="space-y-0 max-w-2xl mx-auto">
                <div className="price-card text-left">
                  <div className="space-y-0">
                    {/* 料金行1 */}
                    <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          ご施設ケア
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          爪ケア・角質ケア・保湿を含む、基本のフットケア
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">
                          ¥5,000
                        </div>
                        <span className="text-sm font-normal text-on-surface-variant">税込</span>
                      </div>
                    </div>
                    {/* 料金行2 */}
                    <div className="flex items-start justify-between gap-6 py-5 border-b border-[#e5eaea]">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          ご施設しっかりケア
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          巻き爪ケアを含む、より丁寧な個別ケア
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">
                          ¥10,000
                        </div>
                        <span className="text-sm font-normal text-on-surface-variant">税込</span>
                      </div>
                    </div>
                    {/* 料金行3 */}
                    <div className="flex items-start justify-between gap-6 py-5">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          個人宅訪問ケア
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          爪や足の状態に合わせて、ご自宅で丁寧に行うフットケア
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="text-[24px] font-medium text-primary whitespace-nowrap">
                          ¥12,000
                        </div>
                        <span className="text-sm font-normal text-on-surface-variant">税込</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/service">
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                    payments
                  </span>
                  料金プランを詳しく見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== よくある質問（抜粋）セクション ===== */}
        <section className="page-section bg-[#f8fafa]">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">よくある質問</h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4">
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
                  <div key={i} className="qa-card">
                    <p className="mb-2 flex items-start gap-3 text-base font-medium text-on-surface">
                      <span className="shrink-0 text-base font-medium text-primary">Q.</span>
                      {item.q}
                    </p>
                    <p className="pl-7 text-sm leading-loose text-on-surface-variant">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link className="text-link-inline group" href="/faq">
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-0.5">
                    quiz
                  </span>
                  よくある質問をもっと見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 対応エリアセクション ===== */}
        <section className="page-section bg-white" id="area">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="space-y-4 py-5">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined fill-icon text-[24px] text-primary">
                    location_on
                  </span>
                  <h2 className="text-[24px] font-medium text-on-surface">
                    訪問対応エリア
                  </h2>
                </div>
                <p className="text-base text-on-surface-variant">
                  千葉県佐倉市を中心に以下の地域へお伺いしております。
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                  {["八千代市", "佐倉市", "四街道市", "印西市"].map((city) => (
                    <span
                      key={city}
                      className="text-base font-medium text-primary py-2"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[24px]">
                    info
                  </span>
                  <p className="text-sm">
                    上記以外のエリア（近隣市区町村）もお気軽にご相談ください。
                  </p>
                </div>
              </div>
              <div className="py-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/area-map.png"
                  alt="訪問対応エリアマップ"
                  className="h-auto w-full max-w-[360px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== お問い合わせセクション ===== */}
        <section className="page-section bg-[#f8fafa]" id="facility">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">
                  お問い合わせ・お申し込み
                </h2>
                <div className="section-heading-bar"></div>
              </div>
              <div className="space-y-4 py-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-k"
                  >
                    フォームで相談する（無料）
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k"
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
