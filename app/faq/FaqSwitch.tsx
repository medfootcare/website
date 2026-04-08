"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FaqContent from "./FaqContent";

function FaqSwitchInner() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.has("preview");

  if (isPreview) {
    return <FaqContent />;
  }

  return (
    <section className="page-section bg-white">
      <div className="max-content-width">
        <div className="max-w-3xl mx-auto py-20 text-center">
          <span className="material-symbols-outlined text-[48px] text-primary mb-4 block" aria-hidden="true">
            construction
          </span>
          <h2 className="text-xl font-bold text-on-surface mb-3">ページ準備中</h2>
          <p className="copy-body text-on-surface-variant">
            よくある質問ページは現在準備中です。<br />
            近日公開予定ですので、<br className="md:hidden" />もうしばらくお待ちください。
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FaqSwitch() {
  return (
    <Suspense>
      <FaqSwitchInner />
    </Suspense>
  );
}
