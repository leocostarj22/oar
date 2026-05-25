import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto — OAR Oculista da Avenida de Roma" },
      {
        name: "description",
        content:
          "Marque a sua consulta ou contacte a equipa OAR na Avenida de Roma, Lisboa.",
      },
      { property: "og:title", content: "Contacto — OAR" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function useIsOpen() {
  return useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = domingo, 6 = sábado
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;
    const open = 9 * 60 + 30;   // 09:30
    const closeWeek = 19 * 60 + 30; // 19:30
    const closeSat = 13 * 60;       // 13:00

    if (day === 0) return false; // domingo
    if (day === 6) return time >= open && time < closeSat;
    return time >= open && time < closeWeek;
  }, []);
}

function ContactoPage() {
  const [sent, setSent] = useState(false);
  const isOpen = useIsOpen();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <header className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          Visite-nos
        </span>
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-6 max-w-3xl text-balance">
          À sua espera na <span className="italic font-light">Avenida de Roma</span>.
        </h1>
      </header>

      <section className="px-6 pb-16 max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        {/* Info column */}
        <div className="md:col-span-5 space-y-10">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Morada
            </h4>
            <p className="font-display text-2xl leading-snug">
              Av. de Roma, 35A
              <br />
              1700-342 Lisboa
            </p>
            <a
              href="https://maps.google.com/?q=Av.+de+Roma+35A,+1700-342+Lisboa"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[10px] font-mono uppercase tracking-widest text-accent hover:text-accent/70 transition-colors"
            >
              Ver no Google Maps →
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Metro: Roma-Areeiro (linha Amarela) · 5 min a pé
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Telefone &amp; WhatsApp
            </h4>
            <a href="tel:+351218485152" className="font-display text-2xl block hover:text-accent transition-colors">
              +351 218 485 152
            </a>
            <a
              href="https://wa.me/351218485152"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[10px] font-mono uppercase tracking-widest text-accent hover:text-accent/70 transition-colors"
            >
              Enviar mensagem WhatsApp →
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Email
            </h4>
            <a href="mailto:geral@oar.pt" className="font-display text-2xl hover:text-accent transition-colors">
              geral@oar.pt
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Horário
            </h4>
            <div className="text-sm space-y-1 max-w-xs">
              <div className="flex justify-between gap-8">
                <span>Seg — Sex</span>
                <span className="font-mono text-xs">09:30 – 19:30</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>Sábado</span>
                <span className="font-mono text-xs">09:30 – 13:00</span>
              </div>
              <div className="flex justify-between gap-8 text-muted-foreground">
                <span>Domingo</span>
                <span className="font-mono text-xs">Fechado</span>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-muted-foreground"}`}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {isOpen ? "Aberto agora" : "Fechado agora"}
              </span>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl italic">Agendar consulta</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Nome" name="nome" required />
              <Field label="Telefone" name="telefone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Data preferida" name="data" type="date" />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                type="submit"
                className="px-8 py-4 bg-foreground text-background text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:bg-accent transition-colors"
              >
                {sent ? "Pedido enviado ✓" : "Enviar pedido"}
              </button>
              <a
                href="https://wa.me/351218485152?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+na+OAR."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-border text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                Via WhatsApp →
              </a>
            </div>
            {sent && (
              <p className="text-sm text-muted-foreground">
                Obrigado. Entraremos em contacto durante o próximo dia útil.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="w-full h-80 rounded-sm overflow-hidden border border-border">
          <iframe
            title="OAR — Localização"
            src="https://maps.google.com/maps?q=Av.+de+Roma+35A,+1700-342+Lisboa&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm transition-colors"
      />
    </div>
  );
}
