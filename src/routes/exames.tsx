import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useScrollRevealGroup } from "@/hooks/use-scroll-reveal";
import imgAcuidade from "@/assets/exames/pexels-pavel-danilyuk-5996744.jpg";
import imgForoptero from "@/assets/exames/pexels-kseniachernaya-5752309.jpg";
import imgInfantil from "@/assets/exames/pexels-ai25studioai-6749763.jpg";

export const Route = createFileRoute("/exames")({
  component: ExamesPage,
  head: () => ({
    meta: [
      { title: "Exames de Visão — OAR" },
      {
        name: "description",
        content:
          "Exames de visão completos com tecnologia Zeiss na Avenida de Roma. Marque a sua consulta com a equipa OAR.",
      },
      { property: "og:title", content: "Exames — OAR" },
    ],
    links: [{ rel: "canonical", href: "/exames" }],
  }),
});

const services = [
  {
    n: "01",
    title: "Exame de visão completo",
    desc: "Avaliação refractiva, binocular e da saúde ocular com equipamento Zeiss de última geração.",
    duration: "45 min",
    detail: "Inclui medição de acuidade visual, pressão ocular e fundo do olho.",
  },
  {
    n: "02",
    title: "Adaptação de lentes de contacto",
    desc: "Topografia corneal, ensaio personalizado e acompanhamento contínuo.",
    duration: "60 min",
    detail: "Avaliação da curvatura corneal e escolha da lente ideal para o seu estilo de vida.",
  },
  {
    n: "03",
    title: "Lentes progressivas premium",
    desc: "Centragem digital com tecnologia Zeiss i.Scription para máxima nitidez.",
    duration: "30 min",
    detail: "Medição biométrica personalizada com compensação da aberração ocular individual.",
  },
  {
    n: "04",
    title: "Óptica infantil",
    desc: "Cuidado especializado para crianças e jovens, com armações resistentes e exames lúdicos.",
    duration: "40 min",
    detail: "Rastreio de miopia, estrabismo e ambliopia adaptado à idade da criança.",
  },
];

function ExamesPage() {
  const servicesRef = useScrollRevealGroup<HTMLElement>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-6 py-20 md:py-28 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Cuidado / Clínica
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 text-balance">
            Ver bem é o ponto de <span className="italic font-light">partida.</span>
          </h1>
        </div>
        <p className="md:col-span-4 text-muted-foreground leading-relaxed">
          Combinamos sete décadas de experiência clínica com a tecnologia
          óptica mais avançada disponível em Portugal.
        </p>
      </header>

      {/* Imagem editorial — tabela de acuidade */}
      <div className="px-6 max-w-7xl mx-auto mb-4">
        <div className="overflow-hidden rounded-sm">
          <img
            src={imgAcuidade}
            alt="Tabela de acuidade visual com óculos"
            width={1400}
            height={600}
            loading="eager"
            className="w-full aspect-[21/8] object-cover object-center"
          />
        </div>
      </div>

      {/* Services */}
      <section ref={servicesRef} className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="border-t border-border">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`reveal reveal-d${(i % 3) + 1} group grid grid-cols-12 gap-6 py-10 border-b border-border hover:bg-muted/30 -mx-6 px-6 transition-colors`}
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-accent self-start pt-1">
                {s.n}
              </span>
              <div className="col-span-10 md:col-span-11 grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2 block">
                    {s.duration}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <p className="text-xs text-muted-foreground/60 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.detail}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <Link
                    to="/contacto"
                    className="inline-block text-[10px] font-mono uppercase tracking-widest border-b border-transparent hover:border-accent hover:text-accent transition-colors pb-px"
                  >
                    Marcar →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zeiss — two-column com foróptero */}
      <section className="bg-muted/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={imgForoptero}
              alt="Foróptero — equipamento de medição visual Zeiss"
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
            />
          </div>
          <div className="px-8 md:px-16 py-16 md:py-0 flex flex-col justify-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Parceiro oficial
            </span>
            <p className="font-display text-3xl md:text-4xl italic leading-snug">
              Tecnologia Zeiss desde 1978
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A OAR é um dos primeiros revendedores Zeiss em Portugal. Todos os
              exames e lentes beneficiam de décadas de parceria e formação contínua.
            </p>
          </div>
        </div>
      </section>

      {/* Óptica infantil — imagem com texto sobreposto */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-sm">
          <img
            src={imgInfantil}
            alt="Exame de visão infantil na OAR"
            width={1400}
            height={700}
            loading="lazy"
            className="w-full aspect-[16/7] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 block mb-3">
                Óptica infantil
              </span>
              <p className="font-display text-2xl md:text-3xl italic text-white leading-snug">
                Cuidados especializados desde a primeira consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
