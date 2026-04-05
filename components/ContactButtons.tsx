import { FORM_URL, LINE_URL } from "@/constants/links";

interface ContactButtonsProps {
  variant?: "light" | "dark";
  widthClassName?: string;
}

export default function ContactButtons({
  variant = "light",
  widthClassName = "md:w-[220px]",
}: ContactButtonsProps) {
  const formClassName =
    variant === "dark"
      ? "inline-flex items-center justify-center min-h-[52px] whitespace-nowrap px-10 font-bold text-[16px] tracking-wide border-[3px] border-white bg-white text-[#0369A1] transition-colors duration-150 cursor-pointer w-full md:min-w-[260px] md:w-auto rounded-sm hover:bg-transparent hover:text-white"
      : `btn-primary-k w-full whitespace-nowrap ${widthClassName}`;

  const lineClassName =
    variant === "dark"
      ? "inline-flex items-center justify-center min-h-[52px] whitespace-nowrap px-10 font-bold text-[16px] tracking-wide border-[3px] border-white text-white transition-colors duration-150 cursor-pointer w-full md:min-w-[260px] md:w-auto rounded-sm hover:bg-white hover:text-[#0369A1]"
      : `btn-line-k w-full whitespace-nowrap ${widthClassName}`;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-center">
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="フォームで相談する（新しいタブで開きます）"
        className={formClassName}
      >
        <span>フォームで相談する</span>
      </a>
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINEで相談する（新しいタブで開きます）"
        className={lineClassName}
      >
        LINEで相談する
      </a>
    </div>
  );
}
