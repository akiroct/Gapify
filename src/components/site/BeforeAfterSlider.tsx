import { useId, useState } from "react";

/**
 * The hero's one interactive centerpiece: drag to redraw a cluttered,
 * generic site into a Gapify-built one. It's a literal demonstration of
 * the service, not another stat card.
 */
export function BeforeAfterSlider() {
  const [value, setValue] = useState(50);
  const id = useId();

  return (
    <div className="w-full max-w-sm">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-[#0e0c09] select-none sm:aspect-[5/6]">
        {/* Browser chrome */}
        <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-1.5 border-b border-border bg-surface px-3">
          <span className="size-2 rounded-full bg-[#a89d89]/40" />
          <span className="size-2 rounded-full bg-[#a89d89]/40" />
          <span className="size-2 rounded-full bg-[#a89d89]/40" />
        </div>

        {/* AFTER — the Gapify rebuild, sits underneath */}
        <div className="absolute inset-x-0 bottom-0 top-8 p-4">
          <div className="flex h-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="h-2.5 w-14 rounded-sm bg-foreground/80" />
              <span className="h-5 w-14 rounded-sm bg-primary" />
            </div>
            <div className="mt-1 flex-1 rounded-md bg-gradient-to-br from-surface to-[#231d13] p-4">
              <span className="block h-3 w-2/3 rounded-sm bg-foreground/85" />
              <span className="mt-2 block h-3 w-1/3 rounded-sm bg-foreground/85" />
              <span className="mt-4 block h-2 w-4/5 rounded-sm bg-muted-foreground/50" />
              <span className="mt-1.5 block h-2 w-3/5 rounded-sm bg-muted-foreground/50" />
              <span className="mt-5 inline-block h-6 w-20 rounded-sm bg-flare" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-12 rounded-sm border border-border" />
              ))}
            </div>
          </div>
        </div>

        {/* BEFORE — clipped to the handle, sits on top */}
        <div
          className="absolute inset-x-0 bottom-0 top-8 overflow-hidden p-3"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <div className="flex h-full flex-col gap-2 bg-[#100e0a]">
            <div className="flex flex-wrap items-center gap-1.5">
              {["#e5484d", "#e8ac1e", "#2bb3a3", "#9b7bff"].map((c) => (
                <span
                  key={c}
                  className="h-4 rounded-sm"
                  style={{ width: 24 + (c.charCodeAt(3) % 20), backgroundColor: c, opacity: 0.85 }}
                />
              ))}
            </div>
            <div className="mt-1 h-24 w-full rounded-sm bg-[#2a251c]" />
            <span className="mt-1 block h-2 w-full rounded-sm bg-[#4a4331]" />
            <span className="block h-2 w-11/12 rounded-sm bg-[#4a4331]" />
            <span className="block h-2 w-full rounded-sm bg-[#4a4331]" />
            <span className="block h-2 w-4/5 rounded-sm bg-[#4a4331]" />
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 rounded-sm bg-[#241f16]" />
              ))}
            </div>
          </div>
        </div>

        {/* handle line */}
        <div
          className="pointer-events-none absolute inset-y-8 z-20 w-px bg-flare"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-flare bg-background text-flare">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M8 6 3 12l5 6M16 6l5 6-5 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute left-3 top-11 z-20 text-[0.68rem] font-medium tracking-wide text-muted-foreground">
          Antes
        </span>
        <span className="pointer-events-none absolute right-3 top-11 z-20 inline-flex items-center rounded-md bg-[#1f7bff] px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-white shadow-sm">
          Depois
        </span>

        <label htmlFor={id} className="sr-only">
          Arraste para comparar o site antes e depois da Gapify
        </label>
        <input
          id={id}
          type="range"
          min={4}
          max={96}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Arraste para ver a mesma marca, antes e depois da Gapify.
      </p>
    </div>
  );
}
