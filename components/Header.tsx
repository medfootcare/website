import Link from "next/link";
import { FORM_URL } from "@/constants/links";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-surface-container">
      <div className="max-content-width px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/medifootcare.web/images/logo.png"
            alt="メディフットケア"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-on-surface tracking-tight">
            メディフットケア
          </span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-on-surface-variant">
          <Link className="nav-link hover:text-primary transition-colors" href="/">
            ホーム
          </Link>
          <Link className="nav-link hover:text-primary transition-colors" href="/personal">
            個人向け
          </Link>
          <Link className="nav-link hover:text-primary transition-colors" href="/facility">
            施設向け
          </Link>
        </nav>

        {/* CTAボタン */}
        <a
          className="btn-primary-k"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ ›
        </a>
      </div>
    </header>
  );
}
