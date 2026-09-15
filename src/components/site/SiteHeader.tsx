import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Gapify — início">
          <span className="grid size-8 place-items-center rounded-sm border border-primary font-display text-base italic text-primary">
            G
          </span>
          <span className="font-display text-lg font-medium">Gapify</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:after:absolute [&.active]:after:inset-x-3 [&.active]:after:bottom-1 [&.active]:after:h-px [&.active]:after:bg-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="stamp" size="sm">
            <Link to="/contato">Pedir orçamento</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center rounded-sm border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Navegação móvel" className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="stamp" className="mt-3">
              <Link to="/contato" onClick={() => setOpen(false)}>
                Pedir orçamento
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
