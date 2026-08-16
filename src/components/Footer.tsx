export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-sans text-lg font-bold text-charcoal">SHYAM SUNDER BANSAL</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            LAYER7 API GATEWAY · LINUX · TLS
          </p>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-text-muted">
          © {new Date().getFullYear()} · INDUSTRIAL SYSTEMS TERMINAL
        </p>
      </div>
    </footer>
  );
}
