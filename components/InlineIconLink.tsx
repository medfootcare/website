import Link from "next/link";
import type { ReactNode } from "react";

interface InlineIconLinkProps {
  href: string;
  icon: string;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
}

export default function InlineIconLink({
  href,
  icon,
  children,
  className = "text-link-inline group",
  iconClassName = "text-2xl transition-transform group-hover:translate-x-0.5",
}: InlineIconLinkProps) {
  return (
    <Link className={className} href={href}>
      <span className={`material-symbols-outlined ${iconClassName}`}>{icon}</span>
      {children}
    </Link>
  );
}
