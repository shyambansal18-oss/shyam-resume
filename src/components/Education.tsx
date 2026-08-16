import Reveal from "./Reveal";
import { IconFilm, IconGrad, IconLang, IconShuttle } from "./Icons";

const schools = [
  {
    degree: "MBA in Finance and Marketing",
    date: "JUNE 2024",
    school: "Jiwaji University, Shivpuri, Madhya Pradesh",
  },
  {
    degree: "B.Com",
    date: "MARCH 2022",
    school: "Jiwaji University, Shivpuri, Madhya Pradesh",
  },
  {
    degree: "12th",
    date: "APRIL 2017",
    school: "St. Charles Higher Secondary School, Shivpuri, Madhya Pradesh",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-[68px] border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden border border-border bg-canvas">
              <img
                src="/images/hero-industrial.jpg"
                alt="Industrial facility"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/50 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <p className="section-label-amber">04 — FORMATION</p>
                <h2 className="mt-2 font-sans text-3xl font-bold text-charcoal sm:text-4xl">
                  Commerce roots, <span className="text-amber-700">operations craft</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-xl text-base leading-8 text-text-muted">
                Formal training in finance and marketing sits beside day-to-day gateway operations —
                useful when patch windows, risk, and business continuity have to be explained in the
                same sentence.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {schools.map((item, i) => (
                <Reveal key={item.degree} delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}>
                  <article className="flex gap-5 border border-border bg-canvas p-5 sm:p-6">
                    <div className="grid h-11 w-11 shrink-0 place-items-center border border-amber-700/30 bg-amber-700/8 text-amber-700">
                      <IconGrad className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <h3 className="font-sans text-lg font-semibold text-charcoal">{item.degree}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber-700">
                          {item.date}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-text-muted">{item.school}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Reveal delay={2}>
                <article className="h-full border border-border bg-canvas p-6">
                  <div className="flex items-center gap-3 text-amber-700">
                    <IconLang className="h-5 w-5" />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.15em]">LANGUAGES</h3>
                  </div>
                  <p className="mt-4 font-sans text-3xl font-bold text-charcoal">ENGLISH · HINDI</p>
                </article>
              </Reveal>
              <Reveal delay={3}>
                <article className="h-full border border-border bg-canvas p-6">
                  <div className="flex items-center gap-3 text-olive-700">
                    <IconShuttle className="h-5 w-5" />
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.15em]">AWAY FROM THE RACKS</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-sm text-charcoal">
                      <IconShuttle className="h-4 w-4 text-olive-700" />
                      Badminton
                    </span>
                    <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-sm text-charcoal">
                      <IconFilm className="h-4 w-4 text-amber-700" />
                      Movies &amp; shows
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
