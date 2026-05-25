import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logooar from "@/assets/logooar.png";

const links = [
  { to: "/colecoes", label: "Coleções" },
  { to: "/exames", label: "Exames" },
  { to: "/historia", label: "História" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logooar} alt="OAR" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contacto"
            className="hidden md:inline-block px-4 py-2 border border-foreground/10 rounded-full text-[10px] font-medium uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Marcar Consulta
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-foreground transition-transform duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-20 px-6 flex flex-col gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-4xl italic leading-none text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "font-display text-4xl italic leading-none text-foreground" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-4 self-start px-6 py-3 bg-foreground text-background text-[10px] font-medium uppercase tracking-widest rounded-full"
          >
            Marcar Consulta
          </Link>
          <span className="gold-bar mt-auto mb-8" />
        </div>
      )}
    </>
  );
}
