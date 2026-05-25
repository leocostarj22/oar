import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useScrollReveal, useScrollRevealGroup } from "@/hooks/use-scroll-reveal";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/historia")({
  component: HistoriaPage,
  head: () => ({
    meta: [
      { title: "História — OAR desde 1954" },
      {
        name: "description",
        content:
          "Sete décadas de óptica de autor na Avenida de Roma, em Lisboa. Conheça a história da OAR.",
      },
      { property: "og:title", content: "História — OAR" },
      { property: "og:image", content: storeInterior },
    ],
    links: [{ rel: "canonical", href: "/historia" }],
  }),
});

const timeline = [
  {
    y: "1954",
    t: "Abertura da loja original na Avenida de Roma.",
    detail: "Uma pequena ótica de bairro fundada para servir as famílias da Avenida. O começo de tudo.",
  },
  {
    y: "1978",
    t: "Primeira parceria com a Zeiss para lentes oftálmicas premium.",
    detail: "A OAR torna-se um dos primeiros revendedores Zeiss em Portugal, marcando o compromisso com a excelência técnica.",
  },
  {
    y: "1996",
    t: "Expansão do atelier e curadoria de marcas independentes.",
    detail: "Início da curadoria internacional de marcas de autor — uma viragem na identidade da loja.",
  },
  {
    y: "2014",
    t: "Renovação completa do espaço com design de estúdio português.",
    detail: "O atelier é reimaginado por um estúdio de design lisboeta, mantendo a alma do espaço original.",
  },
  {
    y: "2024",
    t: "Lançamento da nova identidade arquivística.",
    detail: "Celebrando 70 anos, a OAR apresenta uma identidade renovada e prepara o e-commerce.",
  },
];

function HistoriaPage() {
  const introRef = useScrollReveal<HTMLElement>();
  const timelineRef = useScrollRevealGroup<HTMLElement>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Arquivo / 1954 — Hoje
        </span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 max-w-3xl text-balance">
          Setenta anos a olhar para <span className="italic font-light">Lisboa</span>.
        </h1>
      </header>

      {/* Full-bleed image */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-sm">
          <img
            src={storeInterior}
            alt="Interior do atelier OAR na Avenida de Roma"
            width={1400}
            height={900}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover"
          />
          <div className="absolute inset-0 bg-foreground/10" />
          <div className="absolute bottom-8 left-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-2">
              Atelier OAR
            </span>
            <p className="font-display text-2xl md:text-3xl italic text-white">
              Av. de Roma, 35A — Lisboa
            </p>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section
        ref={introRef}
        className="reveal px-6 py-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
      >
        <p className="font-display text-2xl md:text-3xl leading-snug italic text-balance">
          Começámos como uma pequena loja de bairro, ao serviço das famílias
          da Avenida de Roma.
        </p>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Sete décadas depois, mantemos a mesma esquina, a mesma exigência
            clínica e o mesmo cuidado pessoal — mas com uma curadoria que
            ultrapassou fronteiras.
          </p>
          <p>
            Hoje recebemos clientes de toda a cidade e do mundo, em busca de
            marcas independentes que dificilmente encontram noutro lugar em
            Portugal.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="border-t border-border">
          {timeline.map((e, i) => (
            <div
              key={e.y}
              className={`reveal reveal-d${(i % 3) + 1} grid grid-cols-12 gap-6 py-10 border-b border-border group hover:bg-muted/30 transition-colors -mx-6 px-6`}
            >
              <div className="col-span-3 md:col-span-2">
                <span className="font-mono text-sm text-accent block">{e.y}</span>
              </div>
              <div className="col-span-9 md:col-span-10 grid md:grid-cols-2 gap-4">
                <h3 className="font-display text-xl md:text-2xl leading-snug">
                  {e.t}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {e.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
