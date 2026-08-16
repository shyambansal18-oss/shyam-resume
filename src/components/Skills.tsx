import Reveal from "./Reveal";
import {
  IconBolt,
  IconChat,
  IconClock,
  IconLinux,
  IconLock,
  IconPolicy,
  IconPressure,
  IconRefresh,
  IconServer,
  IconShield,
  IconUsers,
} from "./Icons";

const technical = [
  {
    icon: IconServer,
    title: "Broadcom CA Layer7 API Gateway",
    detail: "Patch management & administration across a 36-server Dev/Prod estate.",
  },
  {
    icon: IconPolicy,
    title: "Layer7 Policy Manager",
    detail: "Routing policies & security assertions, currently framework-guided.",
  },
  {
    icon: IconLinux,
    title: "Linux Server Operations",
    detail: "Health verification, log monitoring, and methodical troubleshooting.",
  },
  {
    icon: IconLock,
    title: "TLS/SSL Certificate Lifecycle",
    detail: "Renewal and management inside Layer7 to keep integrations uninterrupted.",
  },
  {
    icon: IconRefresh,
    title: "Vendor Patch Coordination",
    detail: "Rollback planning and escalation procedures when vendor patches misbehave.",
  },
  {
    icon: IconShield,
    title: "Security Posture",
    detail: "Tighter patch windows, certificate hygiene, and standard security assertions.",
  },
];

const professional = [
  { icon: IconBolt, title: "Fast Learning & Adaptability" },
  { icon: IconChat, title: "Effective Communication" },
  { icon: IconUsers, title: "Cross-functional Collaboration" },
  { icon: IconClock, title: "Time & Task Management" },
  { icon: IconPressure, title: "Reliability Under Operational Pressure" },
];

const stack = [
  "CA Layer7",
  "Policy Manager",
  "Linux",
  "TLS/SSL",
  "WSO2 API Manager",
  "Qlik Replicate",
  "AWS CloudWatch",
  "Datadog",
  "Oracle",
  "MS SQL",
  "Snowflake",
  "IBM i Access",
  "SAP HANA",
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-[68px] border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label-amber">02 — CAPABILITIES</p>
          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-xl font-sans text-4xl font-bold text-charcoal sm:text-5xl">
              The toolkit behind <span className="text-amber-700">calm production nights</span>
            </h2>
            <p className="max-w-md text-text-muted">
              Technical depth on the gateway, plus the professional habits that keep a 36-server
              environment moving without drama.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {technical.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="card-tech group h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center border border-amber-700/30 bg-amber-700/8 text-amber-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-charcoal">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-muted">{skill.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 overflow-hidden border border-border bg-canvas">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <img src="/images/server-rack-warm.jpg" alt="Server rack with warm lighting" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-canvas/40 to-canvas/80" />
            </div>
            <div className="p-8 sm:p-10">
              <p className="section-label-olive">PROFESSIONAL</p>
              <h3 className="mt-2 font-sans text-3xl font-bold text-charcoal">How the work actually gets done</h3>
              <ul className="mt-8 space-y-4">
                {professional.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title} className="flex items-center gap-4 text-charcoal">
                      <span className="grid h-9 w-9 shrink-0 place-items-center border border-border text-amber-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="section-label">ALSO WORKED WITH</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="badge"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
