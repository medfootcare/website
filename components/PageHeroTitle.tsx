function MarkerLine() {
  return (
    <div className="relative h-[14px] w-full" aria-hidden="true">
      {/* マーカー帯（水色、やや透過） */}
      <div className="absolute top-[2px] left-0 right-0 h-[8px] bg-[#93C5FD]/50 rounded-sm" />
      {/* 細いダーク線（マーカー帯の下端に重なる） */}
      <div className="absolute top-[8px] left-0 right-0 h-px bg-[#334155]" />
    </div>
  );
}

interface PageHeroTitleProps {
  /** 1行の場合は文字列、複数行の場合は配列で渡す */
  lines: string | string[];
  /** フォントサイズ（Tailwindクラス）。デフォルト: "text-[22px]" */
  textSize?: string;
}

/** ページヒーロー用タイトル：最終行テキスト幅に合わせたマーカーライン付き */
export default function PageHeroTitle({ lines, textSize = "text-[20px] md:text-[22px]" }: PageHeroTitleProps) {
  const lineArray = Array.isArray(lines) ? lines : [lines];
  const lastLine = lineArray[lineArray.length - 1];
  const precedingLines = lineArray.slice(0, -1);
  return (
    <h1 className="flex flex-col items-center gap-1">
      {precedingLines.map((line, i) => (
        <span key={i} className={`${textSize} font-bold text-[#020617] tracking-[0.04em] md:tracking-[0.02em] xl:tracking-widest text-center`}>
          {line}
        </span>
      ))}
      <span className="inline-flex flex-col gap-1">
        <span className={`${textSize} font-bold text-[#020617] tracking-[0.04em] md:tracking-[0.02em] xl:tracking-widest text-center`}>
          {lastLine}
        </span>
        <MarkerLine />
      </span>
    </h1>
  );
}
