import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato Gapify | Solicite seu orçamento" },
      {
        name: "description",
        content:
          "Fale com a Gapify e receba uma proposta sob medida para o seu site ou página de vendas, com prazo e escopo claros.",
      },
      { property: "og:title", content: "Contato Gapify | Solicite seu orçamento" },
      {
        property: "og:description",
        content: "Receba uma proposta sob medida para o seu site ou página de vendas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

const benefits = [
  "Proposta sob medida para o seu objetivo",
  "Prazo realista e transparente",
  "Time focado em performance e conversão",
];

const projectTypes = ["Landing page", "Site institucional", "Loja online", "Outro"];

function Contato() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    toast.success("Pedido enviado! Respondemos em até 1 dia útil.");
  }

  return (
    <SiteLayout>
      <PageHero
        title="Conte sobre o seu projeto e receba uma proposta."
        subtitle="Preencha o formulário com alguns detalhes do seu negócio. Respondemos normalmente em até 1 dia útil."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-semibold">Fale direto com a gente</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <a href="mailto:contato@gapify.com.br" className="hover:text-primary">
                  contato@gapify.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" />
                São Paulo — SP
              </li>
            </ul>

            <ul className="mt-10 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-lg border border-border bg-surface p-7">
            <div
              className="absolute inset-x-0 top-0 h-0 border-t border-dashed border-border"
              aria-hidden="true"
            />
            <p className="text-xs tracking-wide text-muted-foreground">Briefing do projeto</p>
            {sent ? (
              <div className="py-14 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full border border-primary text-primary">
                  <Check className="size-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">Recebemos seu pedido!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Em breve entramos em contato com uma proposta para o seu projeto.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Enviar outro pedido
                </Button>
              </div>
            ) : (
              <form className="mt-5 grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome" required />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tipo">Tipo de projeto</Label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    defaultValue=""
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    placeholder="Conte um pouco sobre sua empresa, objetivos e prazo..."
                    required
                  />
                </div>

                <Button type="submit" variant="stamp" size="lg">
                  Solicitar orçamento
                </Button>
                <p className="text-xs text-muted-foreground">
                  Seus dados são usados apenas para responder ao seu pedido.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
