import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import { IconArrow, IconMail, IconPhone, IconPin } from "./Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello Shyam — from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:shyambansal18@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-[68px] border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden border border-border bg-canvas">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[360px] p-8 sm:p-12">
              <img
                src="/images/terminal-bg.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-canvas via-canvas/85 to-amber-700/10" />
              <div className="relative flex h-full flex-col justify-between">
                <Reveal>
                  <p className="section-label-amber">05 — CONTACT</p>
                  <h2 className="mt-4 font-sans text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
                    Let's talk gateways, patches, and <span className="text-amber-700">quiet production</span>
                  </h2>
                  <p className="mt-5 max-w-md text-text-muted">
                    Available for Layer7 administration, certificate operations, and infrastructure
                    consulting — remote from Shivpuri, Madhya Pradesh.
                  </p>
                </Reveal>

                <div className="relative mt-10 space-y-3">
                  <a
                    href="mailto:shyambansal18@gmail.com"
                    className="flex items-center gap-4 border border-border bg-canvas/80 p-4 backdrop-blur transition hover:border-amber-700"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-amber-700/30 bg-amber-700/8 text-amber-700">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted">EMAIL</span>
                      <span className="font-sans text-charcoal">shyambansal18@gmail.com</span>
                    </span>
                  </a>
                  <a
                    href="tel:+917582946883"
                    className="flex items-center gap-4 border border-border bg-canvas/80 p-4 backdrop-blur transition hover:border-amber-700"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-amber-700/30 bg-amber-700/8 text-amber-700">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted">PHONE</span>
                      <span className="font-sans text-charcoal">+91 75829 46883</span>
                    </span>
                  </a>
                  <div className="flex items-center gap-4 border border-border bg-canvas/80 p-4 backdrop-blur">
                    <span className="grid h-10 w-10 shrink-0 place-items-center border border-amber-700/30 bg-amber-700/8 text-amber-700">
                      <IconPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-text-muted">LOCATION</span>
                      <span className="font-sans text-charcoal">Shivpuri, MP 473551 · Remote</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <Reveal>
                <h3 className="font-sans text-2xl font-bold text-charcoal">Send a note</h3>
                <p className="mt-2 text-sm text-text-muted">
                  The form opens your email client with the message already drafted.
                </p>
              </Reveal>

              {sent ? (
                <div className="mt-10 border border-amber-700/30 bg-amber-700/8 p-8">
                  <p className="font-sans text-2xl font-bold text-charcoal">Message ready.</p>
                  <p className="mt-2 text-text-muted">
                    If your mail app didn't open, write directly to shyambansal18@gmail.com.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-mono uppercase tracking-[0.1em] text-amber-700 underline-offset-4 hover:underline"
                  >
                    Write another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <label className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">NAME</span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field mt-2"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">EMAIL</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field mt-2"
                      placeholder="you@company.com"
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">MESSAGE</span>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field mt-2 resize-none"
                      placeholder="A role, a project, or a question about Layer7…"
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    SEND MESSAGE
                    <IconArrow className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
