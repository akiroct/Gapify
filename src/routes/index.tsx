import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, Sparkles, Rocket, Handshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gapify — páginas construídas para vender" },
      {
        name: "description",
        content:
          "A Gapify projeta e constrói sites e páginas de vendas sob medida, feitos para carregar rápido e converter visita em cliente.",
      },
      { property: "og:title", content: "Gapify — páginas construídas para vender" },
      {
        property: "og:description",
        content: "Sites e páginas de vendas sob medida, feitos para converter.",
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
    title: "Entrega em semanas",
    text: "Processo enxuto, com escopo fechado logo no início — sem meses de idas e vindas.",
  },
  {
    icon: Sparkles,
    title: "Identidade própria",
    text: "Cada projeto sai com uma cara única, desenhada para a sua marca, não para um template.",
  },
  {
    icon: Rocket,
    title: "Carregamento instantâneo",
    text: "Código enxuto e imagens otimizadas: nada de site pesado que perde cliente no carregamento.",
  },
  {
    icon: Handshake,
    title: "Alguém sempre responde",
    text: "Um contato direto com quem construiu o site, para ajustes e dúvidas depois do lançamento.",
  },
];

const steps = [
  { n: "1", title: "Diagnóstico", text: "Entendemos seu negócio, público e o que precisa vender." },
  {
    n: "2",
    title: "Estratégia e design",
    text: "Definimos mensagem, estrutura e identidade visual.",
  },
  { n: "3", title: "Construção", text: "Desenvolvemos com foco em velocidade e conversão real." },
  { n: "4", title: "Lançamento", text: "Publicamos, medimos os resultados e ajustamos com você." },
];

const plans = [
  {
    name: "Essencial",
    description: "Presença profissional rápida, para quem está começando.",
    features: [
      "Landing page institucional",
      "Design responsivo sob medida",
      "Seções de apresentação e contato",
      "Formulário de contato",
    ],
    featured: false,
  },
  {
    name: "Profissional",
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
      "Trocamos um site de 2019 por algo que parece feito por uma agência grande. Os pedidos pelo WhatsApp praticamente dobraram no primeiro mês.",
    author: "Marina L.",
    role: "Loja de decoração",
  },
  {
    quote:
      "Combinamos o escopo numa conversa, recebemos uma data e foi essa a data. Não precisei cobrar nada.",
    author: "Rafael S.",
    role: "Clínica odontológica",
  },
  {
    quote:
      "O antigo demorava uns bons segundos para abrir no celular. O novo abre na hora — e isso já mudou como as pessoas nos veem.",
    author: "Camila T.",
    role: "Consultoria financeira",
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-field absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="animate-line-in text-4xl leading-[1.05] font-semibold md:text-6xl">
              Sites que fazem seu cliente parar de rolar a tela.
            </h1>
            <p className="animate-line-in mt-6 max-w-md text-lg text-muted-foreground [animation-delay:100ms]">
              A Gapify projeta e constrói páginas sob medida para marcas que querem vender mais e
              parecer o tamanho que merecem parecer.
            </p>
            <div className="animate-line-in mt-9 flex flex-wrap items-center gap-4 [animation-delay:180ms]">
              <Button asChild variant="stamp" size="lg">
                <Link to="/contato">Pedir orçamento</Link>
              </Button>
              <a
                href="#pacotes"
                className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                Ver pacotes e valores
              </a>
            </div>
            <p className="animate-line-in mt-10 text-sm text-muted-foreground [animation-delay:240ms]">
              Mais de 80 páginas lançadas para lojas, clínicas e consultorias em todo o país.
            </p>
          </div>

          <div className="animate-panel-in justify-self-center md:justify-self-end [animation-delay:200ms]">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
            O que muda quando é a Gapify que constrói.
          </h2>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {differentiators.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="row-hover grid gap-2 px-1 py-7 sm:grid-cols-[1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-4 text-primary" />
                  <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <p className="text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-20">
        <div className="container-page">
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Do primeiro contato ao lançamento.
          </h2>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <div
              className="absolute top-5 right-0 left-0 hidden h-px bg-border md:block"
              aria-hidden="true"
            />
            {steps.map((step) => (
              <li key={step.n} className="relative">
                <span className="relative z-10 grid size-10 place-items-center rounded-full border border-primary bg-background font-display text-sm text-primary">
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pacotes" className="py-20">
        <div className="container-page">
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Escolha o nível ideal para o seu momento.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? "flex flex-col rounded-lg bg-paper p-8 text-paper-foreground lg:-my-4 lg:py-12"
                    : "flex flex-col rounded-lg border border-border p-8"
                }
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={
                    plan.featured
                      ? "mt-1 text-sm text-paper-foreground/70"
                      : "mt-1 text-sm text-muted-foreground"
                  }
                >
                  {plan.description}
                </p>
                <p className="mt-5 text-sm font-medium">Valor sob consulta</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span
                        className={
                          plan.featured ? "text-paper-foreground/80" : "text-muted-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.featured ? "stamp" : "outline"} className="mt-8">
                  <Link to="/contato">Escolher {plan.name}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="container-page">
          <h2 className="max-w-xl text-3xl font-semibold md:text-4xl">
            Marcas que já mudaram de página.
          </h2>
          <div className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-paper-foreground">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold md:text-4xl">
            Pronto para transformar sua ideia em vendas?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-paper-foreground/70">
            Conte sobre seu projeto e receba uma proposta alinhada ao seu objetivo, prazo e
            orçamento.
          </p>
          <Button asChild variant="stamp" size="lg" className="mt-8">
            <Link to="/contato">Falar com a Gapify</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
