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
      <body>{children}</body>
    </html>
  );
}
