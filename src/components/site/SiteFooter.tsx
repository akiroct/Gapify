import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
              G
            </span>
            <span className="font-display text-lg font-bold tracking-[0.18em]">GAPIFY</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Sites e páginas de vendas de alto padrão, criados para dar clareza, autoridade e
            crescimento à sua marca.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition-colors hover:text-primary">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="transition-colors hover:text-primary">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:contato@gapify.com.br" className="transition-colors hover:text-primary">
                contato@gapify.com.br
              </a>
            </li>
            <li>
              <a href="tel:+5511999999999" className="transition-colors hover:text-primary">
                (11) 99999-9999
              </a>
            </li>
            <li>São Paulo — SP</li>
          </ul>
        </div>
      </div>

      <div className="container-page border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gapify. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
