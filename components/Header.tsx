import Link from "next/link";
import { FORM_URL } from "@/constants/links";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full glass-header">
      <div className="max-content-width flex items-center justify-between gap-8 px-12 py-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/medifootcare.web/images/logo.png"
            alt="メディフットケア"
            className="h-9 w-auto"
          />
          <span className="text-base font-medium tracking-tight text-on-surface">
            メディフットケア
          </span>
        </Link>

        {/* PCナビゲーション */}
        <nav className="hidden md:flex items-center gap-6">
          <Link className="nav-link" href="/personal">個人の方へ</Link>
          <Link className="nav-link" href="/facility">施設の方へ</Link>
          <Link className="nav-link" href="/service">料金</Link>
          <Link className="nav-link" href="/cases">症例</Link>
          <Link className="nav-link" href="/faq">よくある質問</Link>
        </nav>

        {/* CTAボタン */}
        <a
          className="btn-primary-k shrink-0"
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
