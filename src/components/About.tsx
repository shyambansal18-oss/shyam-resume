import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-[68px] border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-5">
          <div className="relative overflow-hidden border border-border bg-canvas">
            <img
              src="/images/hero-industrial.jpg"
              alt="Industrial control room console"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="section-label-amber">OPERATING MODEL</p>
              <p className="mt-2 font-sans text-2xl font-semibold text-charcoal">Gateway first. Business aware.</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 hidden max-w-[220px] border border-border bg-canvas p-5 sm:block lg:-right-6">
            <p className="section-label-olive">RECENTLY EXPANDING</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Layer7 Policy Manager — routing policies and security assertions, moving toward independent policy design.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="section-label-amber">01 — PROFILE</p>
            <h2 className="mt-3 font-sans text-4xl font-bold text-charcoal sm:text-5xl">
              Reliable infrastructure, <span className="text-amber-700">disciplined operations</span>
            </h2>
            <div className="divider mt-5 w-24" />
          </Reveal>

          <Reveal delay={1}>
            <p className="mt-8 text-base leading-8 text-text-muted">
              IT professional with 4+ years of hands-on production experience administering the
              Broadcom (CA) Layer7 API Gateway — applying vendor-supplied patches across a 36-server
              Dev/Prod environment, verifying post-patch system health, and managing rollback and
              escalation.
            </p>
            <p className="mt-5 text-base leading-8 text-text-muted">
              Recently expanding into policy configuration within Layer7 Policy Manager, working
              toward independent policy design. Brings a business-minded perspective from an MBA
              in Finance &amp; Marketing and a track record of reliable, disciplined infrastructure
              operations.
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                k: "PATCH CADENCE",
                v: "Helped move the estate from quarterly to monthly cycles, shrinking unpatched exposure.",
              },
              {
                k: "PRODUCTION POSTURE",
                v: "Health verification, log review, rollback paths, and vendor escalation when needed.",
              },
              {
                k: "TRUST LAYER",
                v: "TLS/SSL certificate lifecycle inside Layer7 so integrations stay secure and uninterrupted.",
              },
              {
                k: "DUAL LENS",
                v: "MBA in Finance & Marketing — infrastructure decisions framed with business impact.",
              },
            ].map((item) => (
              <article
                key={item.k}
                className="card-tech p-5"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber-700">{item.k}</h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">{item.v}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
