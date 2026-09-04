import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 glow-top" aria-hidden="true" />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
