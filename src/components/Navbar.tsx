import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./Icons";

const links = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "nav-solid" : "bg-canvas"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border border-charcoal bg-canvas">
            <span className="font-mono text-xs font-bold text-charcoal">SSB</span>
          </div>
          <div className="leading-tight">
            <span className="block font-sans text-sm font-semibold tracking-tight text-charcoal">
              SHYAM SUNDER BANSAL
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700">
              Layer7 Specialist
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted transition hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-primary"
          >
            GET IN TOUCH
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-charcoal bg-canvas text-charcoal lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-canvas px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-none border-b border-border px-3 py-4 font-mono text-sm uppercase tracking-[0.15em] text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 btn-primary w-full"
            >
              GET IN TOUCH
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
