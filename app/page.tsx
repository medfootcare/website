import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroTitle from "@/components/PageHeroTitle";
import { FORM_URL, LINE_URL } from "@/constants/links";

export default function Home() {
  return (
    <div className="bg-[#e8f5f4] text-on-surface">
      <Header />

      <main className="pt-24">
        {/* ===== ヒーローセクション ===== */}
        <section className="page-section !py-0 relative overflow-hidden bg-[#e8f5f4]">
          {/* 上段：テキストエリア＋画像 */}
          <div className="section-panel-hero max-content-width pt-8 md:grid md:grid-cols-2 md:items-center md:gap-10 md:pt-12">

            {/* テキストエリア */}
            <div className="py-10 md:py-12">
              <div className="hero-cloud-card inline-block space-y-4 px-5 py-6 text-left sm:px-6 sm:py-7 md:max-w-[32rem] md:px-8 md:py-8 animate-fade-in-up">
                {/* メインキャッチコピー */}
                <PageHeroTitle lines={["大切な足元に", "やさしさと安心を"]} textSize="text-[28px] md:text-[36px]" />

                {/* サービス名・サブテキスト */}
                <div className="space-y-3">
                  <p className="text-base font-normal tracking-normal text-on-surface-variant text-center md:text-lg">
                    医師・看護師による<br className="md:hidden" />訪問フットケアサービス
                  </p>
                </div>
              </div>
            </div>

            {/* ヒーロー画像 */}
            <div className="w-full overflow-hidden">
              <div className="w-full max-w-[480px] mx-auto md:max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="利用者と医療・介護スタッフが手をつなぐイメージ"
                  className="w-full h-full object-contain"
                  src="/medifootcare.web/images/hero-care-team.png"
                />
              </div>
            </div>
          </div>

          {/* 下段：CTAボタン */}
          <div className="max-content-width">
            <div className="flex flex-col gap-4 pb-28 md:pb-32 sm:flex-row sm:justify-center">
              {/* 個人ユーザーが多数のため個人を左（先）に配置 */}
              <Link className="btn-primary-k w-full sm:min-w-[200px] sm:w-auto" href="/personal">
                ご利用者様・ご家族様 ›
              </Link>
              <Link className="btn-outline-k w-full sm:min-w-[200px] sm:w-auto" href="/facility">
                施設スタッフ様 ›
              </Link>
            </div>
          </div>
          {/* 底部の波形：次セクション（白）へのなめらかな接続 */}
          <div className="absolute bottom-0 left-0 w-full leading-none">
            <svg
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="block w-full"
              style={{ height: "120px" }}
              aria-hidden="true"
            >
              <path
                d="M0,60 C240,0 480,110 720,50 C960,0 1200,100 1440,45 L1440,120 L0,120 Z"
                fill="#f8fafa"
              />
            </svg>
          </div>
        </section>

        {/* ===== お悩みセクション（分岐の入口）===== */}
        <section className="page-section !pt-10 bg-[#f8fafa]" id="individual">
          <div className="max-content-width">
            <div className="section-panel">
              <div className="mb-8">
                <h2 className="section-heading">こんなお悩みありませんか？</h2>
                <div className="section-heading-bar"></div>
              </div>

              {/* チェックリスト + イラスト */}
              <div className="flex flex-col items-center gap-4">
                {/* チェックリスト */}
                <ul className="space-y-4 text-left">
                  {[
                    "爪が分厚くなって自分では切れない",
                    "歩くと爪があたって痛い",
                    "靴下や布団に爪が引っかかる",
                  ].map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <span
                        className="flex shrink-0 items-center justify-center w-6 h-6 border-2 border-on-surface bg-white rounded-sm"
                        aria-hidden="true"
                      >
                        <span className="material-symbols-outlined text-[18px] text-on-surface" style={{ fontVariationSettings: "'FILL' 0, 'wght' 600" }}>
                          check
                        </span>
                      </span>
                      <span
                        className="text-base font-medium text-on-surface md:text-[18px]"
                        style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}
                      >
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* イラスト：PNG内の上下余白をクリップ */}
                <div className="w-full max-w-80 overflow-hidden" style={{ height: "220px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/medifootcare.web/images/nayami-illustration.png"
                    alt="お悩みのある方のイラスト"
                    className="w-full"
                    style={{ marginTop: "-12%", marginBottom: "-20%" }}
                  />
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
                <p className="text-base leading-loose text-on-surface-variant break-keep">
                  メディフットケアは、医師・看護師が直接ご自宅や施設へ伺い、足元のケアをお届けする訪問フットケアサービスです。爪のトラブルや足の痛みでお悩みの方に、専門的なケアを提供します。
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
        <section className="page-section bg-gradient-to-b from-[#f0f9f8] to-[#f8fafa]">
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
                  {/* アイコン2個 */}
                  <div className="flex justify-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/medifootcare.web/images/icons/doctor.png" alt="医師" className="w-20 h-20 object-contain" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/medifootcare.web/images/icons/nurse.png" alt="看護師" className="w-20 h-20 object-contain" />
                  </div>
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">医師・看護師による<br />チームケア</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant break-keep">
                    医師の監修のもと、看護師資格を持つスタッフが施術を行います。安心・安全なケアをお届けします。
                  </p>
                </div>
                {/* 特徴2 */}
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/wheelchair.png" alt="" className="mx-auto w-20 h-20 object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">ベッド・車椅子でも<br />施術可能</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant break-keep">
                    外出が難しい方も安心。<br />
                    ベッドや車椅子に座ったままの状態で、<br />
                    ご自宅や施設でケアを受けられます。
                  </p>
                </div>
                {/* 特徴3 */}
                <div className="surface-card space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/report.png" alt="" className="mx-auto w-20 h-20 object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">毎回ケアごとに<br />報告書を作成</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant break-keep">
                    施術内容や爪の状態を毎回記録し、<br />
                    ご家族や施設スタッフへご報告。<br />
                    継続的なケアの質を維持します。
                  </p>
                </div>
              </div>
              {/* 下段 2つ - 上段の間に中央揃えで配置 */}
              <div className="space-y-4 pt-4 md:flex md:justify-center md:gap-6 md:space-y-0">
                {/* 特徴4 */}
                <div className="surface-card space-y-4 md:w-1/3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/nail-trouble.png" alt="" className="mx-auto w-20 h-20 object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">巻き爪・分厚い爪など、<br />幅広い爪トラブルに対応</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant break-keep">
                    巻き爪・肥厚爪・変形爪など、さまざまな爪のお悩みに対応。<br />
                    専門的な知識と技術で丁寧にケアします。
                  </p>
                </div>
                {/* 特徴5 */}
                <div className="surface-card space-y-4 md:w-1/3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/medifootcare.web/images/icons/equipment.png" alt="" className="mx-auto w-20 h-20 object-contain" aria-hidden="true" />
                  <h3 className="break-keep text-primary">
                    <span className="text-[24px] font-medium">専用機器を使用した、<br />痛みの少ないケア</span>
                  </h3>
                  <p className="text-sm leading-loose text-on-surface-variant break-keep">
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
                      <span className="absolute left-3 top-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
                        BEFORE
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="変形爪 施術前"
                        className="w-full aspect-[4/3] object-cover object-top"
                        src="/medifootcare.web/images/case_henkei_before.png"
                      />
                    </div>
                    {/* After 写真 */}
                    <div className="relative">
                      <span className="absolute left-3 top-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
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
                      <span className="absolute left-3 top-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
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
                      <span className="absolute left-3 top-3 z-10 border border-white/80 text-white text-[10px] tracking-widest px-2 py-0.5 bg-black/25 font-light">
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
                    desc: <>担当スタッフは看護師資格を保有。<br />医学的根拠に基づく安全なケアを提供。</>,
                  },
                  {
                    icon: "sanitizer",
                    title: "衛生対策の徹底",
                    desc: <>使用する器具はすべて消毒・滅菌処理済み。<br />グローブ着用など衛生対策を徹底しています。<br />施術時に発生する粉塵対策として、<br />専用集塵機を使用しています。</>,
                  },
                  {
                    icon: "security",
                    title: "賠償責任保険加入",
                    desc: <>万が一の際も安心。<br />賠償責任保険に加入しており、<br />安全な施術環境を整えています。</>,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="surface-card space-y-4"
                  >
                    <h3 className="text-base font-medium text-on-surface">{item.title}</h3>
                    <p className="text-sm leading-loose text-on-surface-variant break-keep">{item.desc}</p>
                  </div>
                ))}
              </div>
              {/* イラスト */}
              <div className="mt-8 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/medifootcare.web/images/nurse-illustration.png"
                  alt="看護師のイラスト"
                  className="w-full max-w-48"
                />
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
                    <div className="flex flex-col gap-3 py-5 border-b border-[#e5eaea] sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          ご施設ケア
                        </h4>
                        <p className="text-sm text-on-surface-variant break-keep">
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
                    <div className="flex flex-col gap-3 py-5 border-b border-[#e5eaea] sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          ご施設しっかりケア
                        </h4>
                        <p className="text-sm text-on-surface-variant break-keep">
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
                    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="space-y-1">
                        <h4 className="text-base font-medium text-on-surface">
                          個人宅訪問ケア
                        </h4>
                        <p className="text-sm text-on-surface-variant break-keep">
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
              <div className="mx-auto max-w-2xl space-y-4 text-left">
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
                  <div key={i} className="qa-card">
                    <p className="mb-2 flex items-start gap-3 text-sm font-medium text-on-surface">
                      <span className="shrink-0 text-sm font-medium text-primary">Q.</span>
                      <span className="flex-1 min-w-0">{item.q}</span>
                    </p>
                    <p className="flex items-start gap-3 text-base leading-relaxed text-on-surface-variant">
                      <span className="shrink-0 text-base font-medium text-on-surface-variant">A.</span>
                      <span className="flex-1 min-w-0">{item.a}</span>
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
              <div className="mx-auto max-w-3xl flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                {/* 左：テキスト */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined fill-icon text-[24px] text-primary">
                      location_on
                    </span>
                    <h2 className="text-[24px] font-medium text-on-surface">
                      訪問対応エリア
                    </h2>
                  </div>
                  <p className="text-base text-on-surface-variant text-left break-keep">
                    千葉県佐倉市を中心に以下の地域へお伺いしております。
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                    {["八千代市", "佐倉市", "四街道市", "印西市", "千葉市"].map((city) => (
                      <span
                        key={city}
                        className="text-base font-medium text-primary py-2"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-6 text-on-surface-variant">
                    <span className="material-symbols-outlined shrink-0 text-[24px]">
                      info
                    </span>
                    <p className="whitespace-nowrap text-[13px] sm:text-sm">
                      上記以外のエリア（近隣市区町村）もお気軽にご相談ください。
                    </p>
                  </div>
                </div>
                {/* 右：地図 */}
                <div className="flex shrink-0 justify-center md:justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/medifootcare.web/images/area-map.png"
                    alt="訪問対応エリアマップ"
                    className="h-auto w-full max-w-[320px]"
                  />
                </div>
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
                    className="btn-primary-k w-full sm:w-[200px] flex-col leading-tight"
                  >
                    <span>フォームで相談する</span>
                  </a>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-line-k w-full sm:w-[200px] flex-col leading-tight"
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
