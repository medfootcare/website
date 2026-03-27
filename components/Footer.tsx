import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-surface-container">
      <div className="max-content-width px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* ブランド */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/medifootcare.web/images/logo.png"
                alt="メディフットケア"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-on-surface tracking-tight">
                メディフットケア
              </span>
            </Link>
            <p className="text-on-surface-variant leading-loose max-w-sm">
              爪の変形や足のお悩みに対して、
              <br />
              医師・看護師のみで構成されたチームで、
              <br />
              確かな技術と安心をお届けします。
            </p>
          </div>

          {/* リンク */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-on-surface tracking-wider">メニュー</h4>
              <nav className="flex flex-col gap-4 font-medium text-on-surface-variant">
                <Link className="hover:text-primary" href="/personal">
                  個人向けご案内
                </Link>
                <Link className="hover:text-primary" href="/facility">
                  施設向けご案内
                </Link>
                <Link className="hover:text-primary" href="/service">
                  料金
                </Link>
                <Link className="hover:text-primary" href="/cases">
                  症例・お悩み
                </Link>
                <Link className="hover:text-primary" href="/faq">
                  よくある質問
                </Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-on-surface tracking-wider">サポート</h4>
              <nav className="flex flex-col gap-4 font-medium text-on-surface-variant">
                <Link className="hover:text-primary" href="/privacy">
                  個人情報保護方針
                </Link>
                <a
                  className="hover:text-primary"
                  href="#"
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
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-surface-container gap-6">
          <p className="text-on-surface-variant text-sm">
            © 2026 メディフットケア. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
