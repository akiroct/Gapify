import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Sparkles, Rocket, Handshake, Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImage from "@/assets/hero-gapify.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gapify | Sites e páginas de vendas de alto padrão" },
      {
        name: "description",
        content:
          "A Gapify cria sites e páginas de vendas rápidos, modernos e feitos para converter. Solicite um orçamento sem compromisso.",
      },
      { property: "og:title", content: "Gapify | Sites e páginas de vendas de alto padrão" },
      {
        property: "og:description",
        content:
          "Sites e páginas de vendas rápidos, modernos e feitos para converter. Solicite um orçamento sem compromisso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const differentiators = [
  {
    icon: Zap,
    title: "Entrega rápida",
    text: "Processo enxuto e organizado para o seu site sair do papel em semanas, não em meses.",
  },
  {
    icon: Sparkles,
    title: "Design moderno",
    text: "Layouts sofisticados e identidade clara para transmitir autoridade desde o primeiro segundo.",
  },
  {
    icon: Rocket,
    title: "Alta performance",
    text: "Páginas leves que carregam rápido e funcionam perfeitamente em qualquer aparelho.",
  },
  {
    icon: Handshake,
    title: "Suporte dedicado",
    text: "Acompanhamento próximo em cada etapa, com ajustes e evolução contínua do projeto.",
  },
];

const steps = [
  { n: "01", title: "Diagnóstico", text: "Entendemos seu negócio, público e objetivos de venda." },
  { n: "02", title: "Estratégia e design", text: "Definimos mensagem, estrutura e visual da página." },
  { n: "03", title: "Desenvolvimento", text: "Construímos tudo com foco em velocidade e conversão." },
  { n: "04", title: "Lançamento", text: "Publicamos, medimos resultados e otimizamos com você." },
];

const plans = [
  {
    name: "Essencial",
    price: "Sob consulta",
    description: "Para quem precisa de uma presença profissional rápido.",
    features: [
      "Landing page institucional",
      "Design moderno e responsivo",
      "Seções de apresentação e contato",
      "Formulário de contato",
    ],
    featured: false,
  },
  {
    name: "Profissional",
    price: "Sob consulta",
    description: "O mais escolhido por quem quer vender mais.",
    features: [
      "Site completo com 5+ seções",
      "Estratégia visual personalizada",
      "SEO básico e otimização",
      "Integração com WhatsApp",
      "Suporte prioritário",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "Sob consulta",
    description: "Projeto sob medida com funcionalidades avançadas.",
    features: [
      "Experiência premium customizada",
      "Funcionalidades avançadas",
      "Fluxo de conversão otimizado",
      "Gestão de conteúdo inicial",
      "Atendimento exclusivo",
    ],
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "A página nova deixou nossa marca muito mais profissional e os pedidos pelo WhatsApp aumentaram bastante.",
    author: "Marina L.",
    role: "Loja de decoração",
  },
  {
    quote:
      "Entrega no prazo, comunicação clara e um resultado visual muito acima do que esperávamos.",
    author: "Rafael S.",
    role: "Clínica odontológica",
  },
  {
    quote: "Finalmente temos um site que carrega rápido e explica nosso serviço de forma simples.",
    author: "Camila T.",
    role: "Consultoria financeira",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Composição abstrata em tons escuros com linhas douradas de luz"
          width={1536}
          height={1024}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-background/70"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <div className="animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Presença digital premium
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.06] md:text-6xl">
              Sites de alto padrão que <span className="text-gradient-gold">vendem</span> todos os
              dias
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              A Gapify cria experiências digitais sob medida para marcas que querem se destacar,
              vender melhor e crescer com confiança.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contato">
                  Solicitar orçamento <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#pacotes">Ver pacotes</a>
              </Button>
            </div>

          </div>

          <div className="relative w-full max-w-2xl min-h-[28rem] animate-rise md:min-h-[32rem] md:justify-self-end">
            <div className="surface-panel absolute inset-x-0 top-8 rounded-[2rem] p-7 sm:p-8 md:inset-x-4 md:top-12 md:p-10">
              <div className="flex items-center gap-3 font-display text-xl font-semibold">
                <span className="grid size-8 place-items-center rounded-full bg-primary/15" aria-hidden="true">
                  <span className="size-3 rounded-full bg-primary" />
                </span>
                Performance
              </div>
              <div className="mt-12 flex items-baseline gap-4">
                <p className="font-display text-6xl font-bold tracking-tight sm:text-7xl">98%</p>
                <p className="text-base text-muted-foreground sm:text-lg">score de velocidade</p>
              </div>
              <div className="mt-12 flex h-32 items-end gap-3 sm:h-36 sm:gap-4" aria-hidden="true">
                {[42, 57, 72, 84, 100].map((height) => (
                  <span
                    key={height}
                    style={{ height: `${height}%` }}
                    className="flex-1 rounded-t-2xl bg-primary"
                  />
                ))}
              </div>
            </div>

            <div className="surface-panel absolute -right-2 top-0 rounded-[2rem] p-6 sm:-right-4 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Crescimento
              </p>
              <p className="mt-5 font-display text-4xl font-bold">+240%</p>
              <p className="mt-3 text-sm text-muted-foreground">engajamento em 3 meses</p>
            </div>

            <div className="surface-panel absolute -bottom-2 -left-2 rounded-[2rem] p-6 sm:-left-4 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Entrega
              </p>
              <p className="mt-5 font-display text-4xl font-bold">14 dias</p>
              <p className="mt-3 text-sm text-muted-foreground">média de lançamento</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Diferenciais
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Estratégia, rapidez e qualidade em cada detalhe.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map(({ icon: Icon, title, text }) => (
              <article key={title} className="surface-panel hover-lift rounded-2xl p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Como funciona
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Um processo simples, do primeiro contato ao lançamento.
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-2xl border border-border p-6">
                <span className="font-display text-sm font-bold text-primary">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pacotes" className="border-y border-border bg-surface/30 py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Pacotes
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Escolha o nível ideal para sua presença digital.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-7 ${
                  plan.featured
                    ? "surface-panel border-primary/40 shadow-[var(--shadow-glow)]"
                    : "border border-border"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Mais popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                <p className="mt-5 font-display text-2xl font-bold text-primary">{plan.price}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <Link to="/contato">Escolher {plan.name}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Depoimentos
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Marcas que já cresceram com a Gapify.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="surface-panel rounded-2xl p-6">
                <div className="flex gap-1 text-primary" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {t.author}
                  <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="surface-panel relative overflow-hidden rounded-3xl px-8 py-14 text-center">
            <div className="pointer-events-none absolute inset-0 glow-top" aria-hidden="true" />
            <h2 className="relative text-3xl font-bold md:text-4xl">
              Pronto para transformar sua ideia em vendas?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
              Conte sobre seu projeto e receba uma proposta alinhada aos seus objetivos, prazo e
              público.
            </p>
            <Button asChild size="lg" className="relative mt-8">
              <Link to="/contato">
                Falar com a Gapify <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
