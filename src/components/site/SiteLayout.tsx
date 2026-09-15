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

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-field absolute inset-0" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="animate-line-in text-4xl leading-[1.08] font-semibold md:text-5xl">
            {title}
          </h1>
          <p className="animate-line-in mt-5 text-lg text-muted-foreground [animation-delay:120ms]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
