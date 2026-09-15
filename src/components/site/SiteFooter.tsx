import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-sm border border-primary font-display text-base italic text-primary">
              G
            </span>
            <span className="font-display text-lg font-medium">Gapify</span>
          </div>
          <p className="mt-4 max-w-sm font-display text-lg italic text-muted-foreground">
            Páginas desenhadas linha por linha para transformar visita em cliente.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition-colors hover:text-foreground">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="transition-colors hover:text-foreground">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-foreground">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:contato@gapify.com.br"
                className="transition-colors hover:text-foreground"
              >
                contato@gapify.com.br
              </a>
            </li>
            <li>
              <a href="tel:+5511999999999" className="transition-colors hover:text-foreground">
                (11) 99999-9999
              </a>
            </li>
            <li>São Paulo — SP</li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gapify. Todos os direitos reservados.</p>
        <p>CNPJ 00.000.000/0001-00</p>
      </div>
    </footer>
  );
}
