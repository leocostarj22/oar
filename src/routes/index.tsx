import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useScrollReveal, useScrollRevealGroup } from "@/hooks/use-scroll-reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import estacaoCarolinaHerrera from "@/assets/estacao/carolinaherrera.jpg";
import estacaoCalvinKlein from "@/assets/estacao/calvin-klein-ck25501s-001.webp";
import estacaoGuess from "@/assets/estacao/guess-gu2728-028.webp";
import estacaoTommyHilfiger from "@/assets/estacao/tommy-hilfiger-th-1543-r80.webp";
import estacaoOakley from "@/assets/estacao/oakley-oo9208-radar-ev-path-47.webp";
import modeloHero from "@/assets/modelos/619269080_1509163111211367_8408721306030104292_n.png";
import modelo1 from "@/assets/modelos/pexels-gustavo-fring-5621866.jpg";
import modelo2 from "@/assets/modelos/pexels-karola-g-5201997.jpg";
import modelo3 from "@/assets/modelos/pexels-olly-3790835.jpg";
import modelo4 from "@/assets/modelos/pexels-amrit-pal-singh-2613454-4191698.jpg";
import modelo5 from "@/assets/modelos/pexels-olly-837140.jpg";
import modelo6 from "@/assets/modelos/pexels-olly-3836817.jpg";
import modelo7 from "@/assets/modelos/pexels-edslan-silva-541516710-16753333.jpg";
import modelo8 from "@/assets/modelos/pexels-melissa-silva-184414134-11346006.jpg";
import oakleyLogo from "@/assets/logos/Oakley-Logo-1997-presente.png";
import gucciLogo from "@/assets/logos/gucci.png";
import guessLogo from "@/assets/logos/guess.png";
import emporioArmaniLogo from "@/assets/logos/png-transparent-emporio-armani.png";
import polaroidLogo from "@/assets/logos/polaroid-logo-png_seeklogo-356295.png";
import rayBanLogo from "@/assets/logos/ray-ban-logo.png";
import vogueLogo from "@/assets/logos/vogue-logo-png_seeklogo-174129.png";
import calvinLogo from "@/assets/logos/calvin.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OAR — Oculista da Avenida de Roma | Lisboa desde 1954" },
      {
        name: "description",
        content:
          "Curadoria de óculos de autor e exames de visão na Avenida de Roma, Lisboa. Marcas independentes e rigor clínico desde 1954.",
      },
      { property: "og:title", content: "OAR — Oculista da Avenida de Roma" },
      { property: "og:image", content: heroPortrait },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const heroSlides = [
  { img: modeloHero, alt: "Editorial OAR — curadoria do olhar" },
  { img: modelo1,    alt: "Editorial OAR — estilo e visão" },
  { img: modelo2,    alt: "Editorial OAR — óculos de autor" },
  { img: modelo3, alt: "Editorial OAR — óculos de autor" },
  { img: modelo4, alt: "Editorial OAR — mestria artesanal" },
  { img: modelo5, alt: "Editorial OAR — Avenida de Roma" },
  { img: modelo6, alt: "Editorial OAR — Lisboa desde 1954" },
  { img: modelo7, alt: "Editorial OAR — marcas independentes" },
  { img: modelo8, alt: "Editorial OAR — rigor clínico" },
];

function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 10000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, i) => (
        <img
          key={slide.img}
          src={slide.img}
          alt={slide.alt}
          width={1920}
          height={1280}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Indicadores — linhas subtis no canto inferior direito */}
      <div className="absolute bottom-8 right-8 z-50 flex gap-2 items-center">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imagem ${i + 1}`}
            className={`block h-px transition-all duration-700 ${
              i === current
                ? "w-8 bg-white"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const featured = [
  {
    img: estacaoCarolinaHerrera,
    name: "Carolina Herrera Her 0143/G/S",
    desc: "Gafas solar feminino",
    price: "151,46€",
    tag: "Solar",
  },
  {
    img: estacaoCalvinKlein,
    name: "Calvin Klein CK25501S 001",
    desc: "Solar clássico atemporal",
    price: "164,68€",
    tag: "Solar",
  },
  {
    img: estacaoGuess,
    name: "Guess GU2728 028",
    desc: "Design contemporâneo",
    price: "65,80€",
    tag: "Solar",
  },
  {
    img: estacaoTommyHilfiger,
    name: "Tommy Hilfiger TH 1543 R80",
    desc: "Estilo preppy americano",
    price: "100,09€",
    tag: "Ótica",
  },
  {
    img: estacaoOakley,
    name: "Oakley Radar EV Path OO9208",
    desc: "Performance e proteção desportiva",
    price: "125,77€",
    tag: "Solar Desporto",
  },
];

const stats = [
  { value: "70", label: "Anos de história" },
  { value: "+12k", label: "Clientes servidos" },
  { value: "3", label: "Gerações de família" },
  { value: "4.9★", label: "Avaliação Google" },
];

const brands = [
  { name: "Oakley", img: oakleyLogo },
  { name: "Gucci", img: gucciLogo },
  { name: "Guess", img: guessLogo },
  { name: "Emporio Armani", img: emporioArmaniLogo },
  { name: "Polaroid", img: polaroidLogo },
  { name: "Ray-Ban", img: rayBanLogo },
  { name: "Vogue", img: vogueLogo },
  { name: "Calvin", img: calvinLogo },
];

const testimonials = [
  {
    quote: "A OAR é a minha ótica há 28 anos. Conhecem o meu historial, os meus gostos, e nunca me defraudaram. Uma referência em Lisboa.",
    author: "Ana S.",
    location: "Alvalade",
  },
  {
    quote: "Fui à procura de óculos diferentes e encontrei a OAR. O serviço é impecável e as marcas que têm são únicas em Portugal.",
    author: "Ricardo M.",
    location: "Cascais",
  },
  {
    quote: "Trago os meus filhos desde pequenos. A equipa é especialista, o espaço é elegante e sinto sempre que estou em boas mãos.",
    author: "Margarida T.",
    location: "Areeiro",
  },
];

function FeaturedCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <section className="py-20 bg-[#F9FAFB] text-[#050B18]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 px-6 md:px-12">
          <h2 className="font-display text-4xl italic">Destaques de Estação</h2>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-[#050B18]/50">
            01 / 05 Selected Works
          </span>
        </div>

        <Carousel opts={{ align: "start", loop: false }} setApi={setApi} className="w-full">
          <CarouselContent className="px-6 md:px-12">
            {featured.map((f) => (
              <CarouselItem key={f.name} className="pl-4 md:pl-6 basis-[82%] sm:basis-[48%] md:basis-1/3">
                <article className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-sm mb-5 bg-white/5">
                    <img
                      src={f.img}
                      alt={f.name}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#050B18]/40 mb-1">
                        {f.tag}
                      </p>
                      <h3 className="text-sm font-medium font-sans">{f.name}</h3>
                      <p className="text-xs text-[#050B18]/40 mt-1 uppercase tracking-tighter">
                        {f.desc}
                      </p>
                    </div>
                    <span className="text-xs font-mono shrink-0 ml-4">{f.price}</span>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-between px-6 md:px-12 mt-10">
          <Link
            to="/colecoes"
            className="text-[11px] uppercase tracking-[0.2em] text-[#050B18]/70 hover:text-[#050B18] border-b border-[#050B18]/30 pb-1 transition-colors"
          >
            Ver toda a coleção →
          </Link>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`block h-px transition-all duration-500 ${
                    i === current ? "w-8 bg-[#050B18]" : "w-4 bg-[#050B18]/30 hover:bg-[#050B18]/60"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={current === 0}
                aria-label="Anterior"
                className="w-8 h-8 rounded-full border border-[#050B18]/30 flex items-center justify-center text-sm hover:border-[#050B18] transition-colors disabled:opacity-25"
              >
                ←
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={current === count - 1}
                aria-label="Próximo"
                className="w-8 h-8 rounded-full border border-[#050B18]/30 flex items-center justify-center text-sm hover:border-[#050B18] transition-colors disabled:opacity-25"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const statsRef = useScrollRevealGroup<HTMLDivElement>();
  const brandsRef = useScrollReveal<HTMLElement>();
  const testimonialsRef = useScrollRevealGroup<HTMLElement>();
  const manifestoRef = useScrollReveal<HTMLElement>();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent">
      <SiteNav />

      {/* Hero — full-bleed; 100vh minus nav height (~4rem = py-4 + h-8) */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        {/* Imagens em fundo */}
        <HeroSlideshow />

        {/* Gradient overlay:
            mobile  — bottom-to-top para proteger texto em baixo
            desktop — left-to-right para proteger texto à esquerda */}
        <div className="absolute inset-0 z-10 pointer-events-none
          bg-gradient-to-t from-black/80 via-black/40 to-black/10
          md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-black/10" />

        {/* Conteúdo */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-28 animate-fade-up">
            <span className="gold-bar mb-6" />
            <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-balance mb-8 text-white">
              A curadoria do olhar{" "}
              <span className="italic font-light">na Avenida de Roma.</span>
            </h1>
            <p className="max-w-md text-base md:text-lg text-white/65 leading-relaxed font-light mb-10">
              Desde 1954, definimos a ótica de Lisboa através de uma seleção
              rigorosa de marcas independentes e mestria técnica artesanal.
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <Link
                to="/colecoes"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:bg-accent hover:text-white transition-colors"
              >
                Ver Coleção
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                to="/exames"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/75 border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors"
              >
                Exames de visão
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div ref={statsRef} className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-d${i + 1} px-6 first:pl-0 last:pr-0 text-center md:text-left`}
            >
              <p className="font-display text-4xl md:text-5xl text-accent">{s.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collection */}
      <FeaturedCarousel />

      {/* Brands */}
      <section ref={brandsRef} className="reveal py-20 bg-[#f0f0f0]">
        <div className="px-6 max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-10">
            Marcas que representamos
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-background px-6 py-8 flex items-center justify-center group"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  loading="lazy"
                  className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section
        ref={manifestoRef}
        className="reveal px-6 py-32 max-w-5xl mx-auto text-center"
      >
        <span className="gold-bar mx-auto mb-8" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-6">
          Manifesto
        </span>
        <p className="font-display text-3xl md:text-5xl leading-tight italic mt-2 text-balance">
          "Ver bem é um gesto de cuidado. Ser visto, um gesto de estilo.
          Há sete décadas que cuidamos de ambos, da mesma esquina de Lisboa."
        </p>
        <p className="mt-10 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          — OAR, est. 1954
        </p>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="px-6 py-20 bg-[#F0F0F0]"
      >
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-12">
            O que dizem os nossos clientes
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <figure
                key={t.author}
                className={`reveal reveal-d${i + 1} bg-background border border-border p-8 rounded-sm`}
              >
                <span className="gold-bar mb-6" />
                <blockquote className="font-display text-xl italic leading-snug text-balance mb-6">
                  "{t.quote}"
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.author} — {t.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
