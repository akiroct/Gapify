import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Gapify | Agência de sites e páginas de vendas" },
      {
        name: "description",
        content:
          "Conheça a Gapify: propósito, jeito de trabalhar e o time que cria sites de alto padrão focados em resultado.",
      },
      { property: "og:title", content: "Sobre a Gapify | Agência de sites e páginas de vendas" },
      {
        property: "og:description",
        content: "Propósito, jeito de trabalhar e o time por trás dos sites da Gapify.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Dar a pequenos e grandes negócios uma presença digital que gera confiança e vendas — não só uma vitrine bonita.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser a referência em páginas de alto padrão criadas com rapidez, clareza e estratégia.",
  },
  {
    icon: Gem,
    title: "Valores",
    text: "Transparência no prazo, cuidado com o detalhe e obsessão por resultado real.",
  },
];

const stats = [
  ["+80", "projetos entregues"],
  ["14 dias", "prazo médio de lançamento"],
  ["98", "score médio de velocidade"],
  ["100%", "projetos responsivos"],
] as const;

function Sobre() {
  return (
    <SiteLayout>
      <PageHero
        title="Uma agência criada para tirar marcas do genérico."
        subtitle="A Gapify nasceu da percepção de que a maioria dos negócios perde vendas por causa de um site confuso, lento ou sem personalidade. Nosso trabalho é resolver exatamente isso."
      />

      <section className="py-20">
        <div className="container-page grid gap-10 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <article key={title} className={i === 0 ? "md:pr-8" : "pt-10 md:pt-0 md:px-8"}>
              <Icon className="size-5 text-primary" />
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-20">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Como trabalhamos</h2>
            <p className="mt-5 text-muted-foreground">
              Cada projeto começa com uma conversa honesta sobre objetivo, público e orçamento. A
              partir daí desenhamos a estrutura da página, escrevemos a mensagem central e
              construímos tudo com foco em velocidade e conversão.
            </p>
            <p className="mt-4 text-muted-foreground">
              Você acompanha o andamento em etapas curtas, aprova cada entrega e recebe suporte
              depois do lançamento para continuar evoluindo.
            </p>
            <Button asChild variant="stamp" className="mt-8">
              <Link to="/contato">Conversar com a gente</Link>
            </Button>
          </div>

          <dl className="grid grid-cols-2 divide-x divide-y divide-border border border-border self-start">
            {stats.map(([value, label]) => (
              <div key={label} className="p-6">
                <dt className="font-display text-3xl font-semibold text-primary">{value}</dt>
                <dd className="mt-2 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
