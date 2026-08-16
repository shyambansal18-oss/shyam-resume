import Reveal from "./Reveal";
import { IconArrow, IconMail, IconPhone, IconPin, IconTerminal } from "./Icons";

const stats = [
  { value: "4+", label: "YEARS PRODUCTION" },
  { value: "36", label: "SERVERS ADMIN" },
  { value: "MBA", label: "FINANCE & MKT" },
  { value: "2023—", label: "CURRENT ROLE" },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[68px]">
      <div className="absolute inset-0 system-grid" />
      
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-amber-700 bg-amber-700/10 px-3 py-1.5">
              <span className="status-dot h-2 w-2 rounded-full" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber-800">
                OPEN TO INFRASTRUCTURE ROLES
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="mt-8 section-label-amber">SOFTWARE CONSULTANT · SHIVPURI, MP</p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-4 font-sans text-5xl font-bold leading-tight tracking-tight text-charcoal sm:text-7xl lg:text-8xl">
              SHYAM SUNDER
              <span className="block text-amber-700">BANSAL</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
              Four years keeping Broadcom CA Layer7 API Gateway healthy across a 36-server
              Dev/Prod estate — patches, certificates, policy, and calm escalation when
              production cannot wait.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm terminal-text text-charcoal">
              <a href="tel:+917582946883" className="inline-flex items-center gap-2 transition hover:text-amber-700">
                <IconPhone className="h-4 w-4 text-amber-700" />
                +91 75829 46883
              </a>
              <a href="mailto:shyambansal18@gmail.com" className="inline-flex items-center gap-2 transition hover:text-amber-700">
                <IconMail className="h-4 w-4 text-amber-700" />
                shyambansal18@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <IconPin className="h-4 w-4 text-olive-700" />
                Shivpuri, MP 473551
              </span>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#experience"
                className="btn-primary"
              >
                VIEW WORK HISTORY
                <IconArrow className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-outline"
              >
                START CONVERSATION
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={4}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-canvas px-5 py-5 sm:px-6">
                <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">{stat.label}</dt>
                <dd className="mt-2 font-sans text-3xl font-bold text-charcoal sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-16 flex items-center gap-3 border-t border-border pt-6">
            <IconTerminal className="h-5 w-5 text-amber-700" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              SYSTEM STATUS: OPERATIONAL
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
