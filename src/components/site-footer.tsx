import { Link } from "@tanstack/react-router";

const WHATSAPP = "https://wa.me/351218485152";
const MAPS = "https://maps.google.com/?q=Av.+de+Roma+35A,+1700-342+Lisboa";

export function SiteFooter() {
  return (
    <>
      {/* CTA */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <p className="font-display text-3xl md:text-4xl italic max-w-2xl mx-auto text-balance">
          Marque a sua consulta diretamente connosco.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-foreground text-background text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:bg-accent transition-colors"
          >
            Agendar consulta
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 border border-border text-[11px] font-medium uppercase tracking-[0.2em] rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            WhatsApp →
          </a>
        </div>
      </section>

      <footer className="bg-[#050B18] text-background">
      {/* Main footer */}
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-6">
              Visite-nos
            </h4>
            <address className="font-display text-3xl leading-snug not-italic">
              Av. de Roma, 35A
              <br />
              1700-342 Lisboa
              <br />
              Portugal
            </address>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent hover:text-accent/70 transition-colors"
            >
              Ver no Google Maps →
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-6">
              Horário
            </h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between gap-4">
                <span>Seg — Sex</span>
                <span className="font-mono text-xs">09:30 – 19:30</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="font-mono text-xs">09:30 – 13:00</span>
              </div>
              <div className="flex justify-between gap-4 text-background/40">
                <span>Domingo</span>
                <span className="font-mono text-xs">Fechado</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-background/60 mb-6">
              Contacto
            </h4>
            <div className="text-sm space-y-3">
              <a
                href="tel:+351218485152"
                className="block hover:text-accent transition-colors"
              >
                +351 218 485 152
              </a>
              <a
                href="mailto:geral@oar.pt"
                className="block hover:text-accent transition-colors"
              >
                geral@oar.pt
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-background/50">
          <p>© {new Date().getFullYear()} Oculista da Avenida de Roma</p>
          <p>Lisboa, Portugal — est. 1954</p>
        </div>
      </div>
    </footer>
    </>
  );
}
