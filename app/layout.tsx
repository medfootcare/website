import type { Metadata } from "next";
import { Figtree, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medifootcare.jp"),
  icons: {
    icon: "/medifootcare.web/images/logo.png",
  },
  title: "メディフットケア",
  description:
    "メディフットケアは、施設・ご自宅に伺う高齢者専門のフットケアサービスです。巻き爪・肥厚爪・角質ケアをプロのスタッフが丁寧にケアします。",
  openGraph: {
    title: "メディフットケア",
    description:
      "大切な家族の足を、プロが丁寧にケアします。施設・ご自宅どちらにも訪問。高齢者専門のフットケアサービスです。",
    type: "website",
    url: "https://medifootcare.jp",
    siteName: "メディフットケア",
    images: [
      {
        url: "https://medifootcare.jp/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "メディフットケア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "メディフットケア",
    description:
      "大切な家族の足を、プロが丁寧にケアします。施設・ご自宅どちらにも訪問。高齢者専門のフットケアサービスです。",
    images: ["https://medifootcare.jp/images/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${figtree.variable} ${notoSansJP.variable}`}>
      <head>
        {/* Material Symbols フォント */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "メディフットケア",
              description:
                "施設・ご自宅に伺う高齢者専門のフットケアサービス。巻き爪・肥厚爪・角質ケアをプロのスタッフが丁寧にケアします。",
              url: "https://medifootcare.jp",
              telephone: "080-2486-9649",
              email: "medifootcare.customer@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "千葉県",
                addressLocality: "八千代市",
                addressCountry: "JP",
              },
              founder: {
                "@type": "Person",
                name: "小西 克哉",
              },
              areaServed: [
                { "@type": "City", name: "佐倉市" },
                { "@type": "City", name: "八千代市" },
                { "@type": "City", name: "四街道市" },
                { "@type": "City", name: "印西市" },
                { "@type": "City", name: "千葉市" },
              ],
              openingHours: "Mo-Su 09:00-17:00",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
