import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  LayoutTemplate,
  Building2,
  Gauge,
  TrendingUp,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços Gapify | Landing pages, sites e otimização" },
      {
        name: "description",
        content:
          "Landing pages de conversão, sites institucionais, lojas online, performance, SEO e suporte contínuo com a Gapify.",
      },
      { property: "og:title", content: "Serviços Gapify | Landing pages, sites e otimização" },
      {
        property: "og:description",
        content: "Landing pages, sites institucionais, lojas online, performance, SEO e suporte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing pages de conversão",
    text: "Páginas com mensagem direta, prova social e chamada para ação clara, feitas para transformar visita em contato.",
  },
  {
    icon: Building2,
    title: "Sites institucionais",
    text: "Estrutura profissional para apresentar sua empresa, diferenciais e serviços com autoridade.",
  },
  {
    icon: ShoppingBag,
    title: "Lojas e catálogos online",
    text: "Vitrine organizada dos seus produtos, com fluxo simples até o pedido ou o WhatsApp.",
  },
  {
    icon: Gauge,
    title: "Performance e experiência",
    text: "Sites leves, estáveis e agradáveis de usar em celular, tablet e computador.",
  },
  {
    icon: TrendingUp,
    title: "SEO e posicionamento",
    text: "Estrutura e conteúdo otimizados para sua marca aparecer quando o cliente procura.",
  },
  {
    icon: Wrench,
    title: "Manutenção e evolução",
    text: "Ajustes, novas seções e melhorias contínuas depois do lançamento, sem dor de cabeça.",
  },
];

const faqs = [
  {
    q: "Quanto tempo leva para o meu site ficar pronto?",
    a: "Landing pages costumam ficar prontas em cerca de 7 dias e sites completos em até 14 dias, contando as aprovações.",
  },
  {
    q: "Eu preciso ter o conteúdo pronto?",
    a: "Não. Ajudamos a organizar textos, imagens e a mensagem principal a partir de uma conversa inicial.",
  },
  {
    q: "O site funciona bem no celular?",
    a: "Sim. Todos os projetos são construídos para se adaptar a qualquer tamanho de tela.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você conta sobre o projeto no formulário de contato e devolvemos uma proposta com escopo e prazo.",
  },
];

function Servicos() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Serviços"
        title="Soluções digitais que sustentam o crescimento do seu negócio."
        subtitle="Do primeiro site à otimização contínua, cada serviço é pensado para transformar sua comunicação em uma experiência clara, moderna e eficiente."
      />

      <section className="py-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface-panel hover-lift rounded-2xl p-7">
              <div className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-24">
        <div className="container-page">
          <h2 className="text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-2xl border border-border p-6">
                <h3 className="text-base font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Vamos montar o seu projeto?</h2>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contato">
              Solicitar orçamento <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
