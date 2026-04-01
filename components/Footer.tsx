import Link from "next/link";
import { FORM_URL } from "@/constants/links";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5eaea] pt-16 pb-12">
      <div className="max-content-width px-4 md:px-12">
        <div className="mb-10 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start md:gap-16">
          {/* ブランド */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/medifootcare.web/images/logo.png"
                alt="メディフットケア"
                className="h-10 w-auto"
              />
              <span className="text-base font-medium tracking-tight text-on-surface">
                メディフットケア
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-loose text-on-surface-variant">
              爪の変形や足のお悩みに対して、
              <br />
              医師・看護師のみで構成されたチームで、
              <br />
              確かな技術と安心をお届けします。
            </p>
          </div>

          {/* リンク */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="space-y-4">
              <h4 className="text-sm font-medium tracking-wider text-on-surface">メニュー</h4>
              <nav className="flex flex-col gap-3">
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/personal">
                  ご利用者様・ご家族様へ
                </Link>
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/facility">
                  施設スタッフ様へ
                </Link>
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/service">
                  料金
                </Link>
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/cases">
                  症例・お悩み
                </Link>
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/faq">
                  よくある質問
                </Link>
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">
                  メディフットケアとは？
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium tracking-wider text-on-surface">サポート</h4>
              <nav className="flex flex-col gap-3">
                <Link className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors" href="/privacy">
                  個人情報保護方針
                </Link>
                <a
                  className="nav-link text-sm text-on-surface-variant hover:text-primary transition-colors"
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせフォーム
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-[#e5eaea] pt-6">
          <p className="text-sm text-on-surface-variant">
            © 2026 メディフットケア. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
