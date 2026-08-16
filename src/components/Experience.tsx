import Reveal from "./Reveal";

const roles = [
  {
    title: "Software Consultant",
    company: "Next Generation Technocom Pvt Ltd",
    place: "Shivpuri, Madhya Pradesh · Remote",
    dates: "JANUARY 2023 — CURRENT",
    current: true,
    image: "/images/terminal-bg.jpg",
    points: [
      "Apply Broadcom-supplied patches to the CA Layer7 API Gateway across a 36-server Dev/Prod environment, verifying system health post-patch and coordinating rollback and vendor escalation when issues arise.",
      "Support the shift from quarterly to monthly patch cycles, tightening the window of unpatched exposure and strengthening overall security posture.",
      "Monitor gateway performance and system logs via CA API Gateway Policy Manager and manual Linux server checks to catch issues proactively.",
      "Renew and manage TLS/SSL certificates within CA Layer7 Gateway to keep integrations secure and uninterrupted.",
      "Configure routing policies and apply standard security assertions within an established Policy Manager framework, building toward independent policy design.",
    ],
  },
  {
    title: "Infrastructure Consultant",
    company: "ZetaOptIndia Inc.",
    place: "Shivpuri, Madhya Pradesh · Remote",
    dates: "APRIL 2022 — NOVEMBER 2022",
    current: false,
    image: "/images/server-rack-warm.jpg",
    points: [
      "Gained early hands-on exposure to enterprise infrastructure tools, supporting a small team through a WSO2 API Manager upgrade (v3.0 to v4.0) and a Qlik Replicate setup across multiple database platforms (Oracle, MS SQL, Snowflake, IBM i Access, SAP HANA).",
      "Assisted with TLS/SSL certificate renewal across Datadog and CA Layer7 Gateway.",
      "Supported daily infrastructure checks using AWS CloudWatch, Qlik monitoring tools, and manual Linux server review.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-[68px] border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="section-label-amber">03 — WORK HISTORY</p>
          <h2 className="mt-3 max-w-2xl font-sans text-4xl font-bold text-charcoal sm:text-5xl">
            Production work, <span className="text-amber-700">not lab work</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 space-y-10">
          <div className="absolute left-[9px] top-3 hidden h-[calc(100%-24px)] w-px bg-border md:block" />

          {roles.map((role, index) => (
            <Reveal key={role.company} delay={index === 0 ? 0 : 1}>
              <article className="relative grid overflow-hidden border border-border bg-canvas md:grid-cols-12">
                <div className="absolute left-2 top-8 hidden h-2.5 w-2.5 rounded-none border-2 border-canvas bg-amber-700 md:block" />
                <div className="relative min-h-[200px] md:col-span-4">
                  <img src={role.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8">
                    {role.current && (
                      <span className="mb-3 inline-flex items-center gap-2 border border-amber-700 bg-amber-700/10 px-3 py-1">
                        <span className="status-dot h-1.5 w-1.5 rounded-full" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-amber-800">
                          CURRENT
                        </span>
                      </span>
                    )}
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber-700">{role.dates}</p>
                  </div>
                </div>

                <div className="md:col-span-8 p-7 sm:p-10">
                  <h3 className="font-sans text-2xl font-bold text-charcoal">{role.title}</h3>
                  <p className="mt-2 text-charcoal">
                    {role.company}
                    <span className="text-text-muted"> · {role.place}</span>
                  </p>
                  <ul className="mt-7 space-y-4">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-none bg-amber-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
