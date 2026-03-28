"use client";

import Link from "next/link";
import { useState } from "react";
import { FORM_URL } from "@/constants/links";

const NAV_LINKS = [
  { href: "/personal", label: "ご利用者様・ご家族様へ" },
  { href: "/facility", label: "施設スタッフ様へ" },
  { href: "/service",  label: "料金" },
  { href: "/cases",    label: "症例" },
  { href: "/faq",      label: "よくある質問" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full glass-header">
      <div className="max-content-width flex items-center justify-between gap-8 px-12 py-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
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

        {/* ハンバーガーボタン */}
        <button
          className="ml-auto p-2 text-on-surface hover:opacity-70 transition-opacity"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "閉じる" : "メニュー"}</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ドロップダウンメニュー */}
      {open && (
        <nav className="glass-header border-t border-gray-200/30">
          <div className="max-content-width px-12 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link py-3 border-b border-gray-200/20 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                className="btn-primary-k w-full text-center block"
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
