import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Plus,
  LayoutTemplate,
  Building2,
  Gauge,
  TrendingUp,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    teaser: "Uma página, um objetivo: transformar visita em contato.",
    text: "Mensagem direta, prova social e uma chamada para ação que não deixa dúvida sobre o próximo passo — feita para campanhas e lançamentos.",
  },
  {
    icon: Building2,
    title: "Sites institucionais",
    teaser: "A apresentação completa da sua empresa, com autoridade.",
    text: "Estrutura profissional para mostrar quem você é, o que oferece e por que confiar em você — organizada para quem está pesquisando antes de decidir.",
  },
  {
    icon: ShoppingBag,
    title: "Lojas e catálogos online",
    teaser: "Seus produtos organizados, do clique ao pedido.",
    text: "Vitrine clara dos seus produtos, com um caminho simples até a compra ou o WhatsApp, sem etapas desnecessárias no meio do caminho.",
  },
  {
    icon: Gauge,
    title: "Performance e experiência",
    teaser: "Um site que abre rápido em qualquer aparelho.",
    text: "Ajustes técnicos de carregamento e navegação para que a experiência seja igualmente boa no celular, no tablet e no computador.",
  },
  {
    icon: TrendingUp,
    title: "SEO e posicionamento",
    teaser: "Para aparecer quando o cliente já está procurando.",
    text: "Estrutura de conteúdo e metadados pensada para os buscadores entenderem do que se trata o seu negócio.",
  },
  {
    icon: Wrench,
    title: "Manutenção e evolução",
    teaser: "Ajustes e novas seções, sem dor de cabeça.",
    text: "Depois do lançamento, seguimos disponíveis para pequenos ajustes, novas seções e melhorias contínuas do site.",
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHero
        title="Soluções digitais que sustentam o crescimento do seu negócio."
        subtitle="Do primeiro site à otimização contínua, cada serviço é pensado para transformar sua comunicação em uma experiência clara, moderna e eficiente."
      />

      <section className="py-20">
        <div className="container-page">
          <div className="border-t border-border">
            {services.map(({ icon: Icon, title, teaser, text }, i) => {
              const open = openIndex === i;
              return (
                <div key={title} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    data-open={open}
                    className="row-hover flex w-full items-center gap-5 px-1 py-6 text-left"
                  >
                    <Icon className="size-5 shrink-0 text-primary" />
                    <span className="flex-1">
                      <span className="block text-lg font-medium">{title}</span>
                      <span className="block text-sm text-muted-foreground">{teaser}</span>
                    </span>
                    <Plus
                      className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl px-1 pb-6 pl-10 text-muted-foreground">{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/50 py-20">
        <div className="container-page">
          <h2 className="text-3xl font-semibold md:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8 max-w-2xl">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Vamos montar o seu projeto?</h2>
          <Button asChild variant="stamp" size="lg" className="mt-8">
            <Link to="/contato">Solicitar orçamento</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
