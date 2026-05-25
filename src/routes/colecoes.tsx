import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useScrollRevealGroup } from "@/hooks/use-scroll-reveal";
import frameRoma from "@/assets/frame-roma.jpg";
import frameAvenida from "@/assets/frame-avenida.jpg";
import frameRossio from "@/assets/frame-rossio.jpg";

export const Route = createFileRoute("/colecoes")({
  component: ColecoesPage,
  head: () => ({
    meta: [
      { title: "Coleções — OAR Oculista da Avenida de Roma" },
      {
        name: "description",
        content:
          "Descubra a curadoria de óculos de autor da OAR: acetatos italianos, titânio japonês e edições limitadas.",
      },
      { property: "og:title", content: "Coleções — OAR" },
    ],
    links: [{ rel: "canonical", href: "/colecoes" }],
  }),
});

type Cat = "Todos" | "Ótica" | "Solar";

const products = [
  { img: frameRoma,    name: "OAR 018 — Roma",    desc: "Acetato Italiano, feito à mão",    price: "340€", cat: "Ótica" as Cat,  limited: false },
  { img: frameAvenida, name: "Avenida Gold",       desc: "Titânio banhado a ouro",           price: "485€", cat: "Ótica" as Cat,  limited: false },
  { img: frameRossio,  name: "Rossio Noir",        desc: "Edição limitada esculpida à mão",  price: "510€", cat: "Solar" as Cat,  limited: true  },
  { img: frameRoma,    name: "OAR 022 — Alvalade", desc: "Acetato bicolor, produção limitada", price: "295€", cat: "Ótica" as Cat, limited: false },
  { img: frameAvenida, name: "Tejo Light",         desc: "Titânio ultra-leve japonês",       price: "390€", cat: "Ótica" as Cat,  limited: false },
  { img: frameRossio,  name: "Príncipe Real",      desc: "Solar polarizada, edição especial", price: "420€", cat: "Solar" as Cat, limited: true  },
];

const filters: Cat[] = ["Todos", "Ótica", "Solar"];

function ColecoesPage() {
  const [active, setActive] = useState<Cat>("Todos");
  const gridRef = useScrollRevealGroup<HTMLDivElement>();

  const visible = active === "Todos" ? products : products.filter((p) => p.cat === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Arquivo / Coleções
        </span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 max-w-3xl text-balance">
          Uma seleção <span className="italic font-light">obstinada</span> de armações
          de autor.
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
          Em breve poderá adquirir online. Por agora, agende uma visita ao
          atelier para experimentar cada peça pessoalmente.
        </p>
      </header>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex items-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-colors ${
                active === f
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {visible.length} {visible.length === 1 ? "peça" : "peças"}
          </span>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {visible.map((p, i) => (
            <article key={p.name + i} className={`reveal reveal-d${(i % 3) + 1} group cursor-pointer`}>
              <div className="relative w-full aspect-square overflow-hidden rounded-sm mb-5 bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {p.limited && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-background text-[9px] font-mono uppercase tracking-widest rounded-full">
                    Edição Limitada
                  </span>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    {p.cat}
                  </p>
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono block">{p.price}</span>
                  <span className="text-[9px] font-mono text-muted-foreground">sob consulta</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
