import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { ClosingCta, SectionHeading, WaButton } from "@/components/ui-bits";
import { SERVICES, CONTACT } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import salon from "@/assets/salon.jpg";
import gBraids from "@/assets/g-braids.jpg";
import gNails from "@/assets/g-nails.jpg";
import gBarber from "@/assets/g-barber.jpg";
import gLashes from "@/assets/g-lashes.jpg";

const STATS = [
  { value: "6,955+", label: "Followers" },
  { value: "Unisex", label: "Men • Women • Kids" },
  { value: "Free", label: "WiFi in-salon" },
  { value: "Sept 13", label: "Opening day" },
];

const WHY = [
  {
    title: "Professional Beauty Experts",
    copy: "Trained stylists, barbers and nail techs who treat every head of hair as a signature piece.",
  },
  {
    title: "Clean & Serene Environment",
    copy: "Sanitised tools, fresh linen and a calm space designed so your appointment feels like downtime.",
  },
  {
    title: "Affordable Prices",
    copy: "Luxury standards without the luxury markup — transparent pricing, no surprises at the counter.",
  },
  {
    title: "Your Satisfaction, Our Priority",
    copy: "We consult before we start and we don't stop until the mirror gets a smile.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "My frontal has never looked this natural. They took their time on the install and the styling lasted three full weeks.",
    name: "Adaeze O.",
    role: "Wig install client",
  },
  {
    quote:
      "Took my son for a fade and stayed for a manicure. One place for the whole family is exactly what Yaba needed.",
    name: "Tolu A.",
    role: "Barbering & nails",
  },
  {
    quote:
      "Clean space, warm people, and my knotless braids gave zero tension. I've already booked my next appointment.",
    name: "Amaka N.",
    role: "Braiding client",
  },
];

function setMeta(title: string, description: string) {
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
}

export default function Home() {
  useEffect(() => {
    setMeta(
      "Elven Beauty Hub | Unisex Beauty Salon in Sabo Yaba, Lagos",
      "Premium unisex salon in Sabo Yaba, Lagos. Hair styling, wig installs, braids, barbering, nails, lashes & brows. Opening September 13 — book on WhatsApp.",
    );
  }, []);

  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-noir">
        <img
          src={hero}
          alt="Model with a glossy silk press at Elven Beauty Hub"
          width={1408}
          height={1760}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noir to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8">
          <Reveal delay={120}>
            <h1 className="font-display max-w-3xl text-[3rem] leading-[0.98] text-cream sm:text-7xl lg:text-[5.5rem]">
              Your Beauty.
              <br />
              <span className="text-gold-gradient italic">Our Passion.</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
              A unisex beauty destination in Sabo Yaba, Lagos. Hair, barbering, nails, lashes and
              everything in between — done properly, in a space that feels like a treat.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WaButton>Book Appointment</WaButton>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                View Services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="mt-12 text-[0.68rem] uppercase tracking-[0.34em] text-cream/40">
              Look Good • Feel Good • Be You
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-beige">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-12 lg:grid-cols-4 lg:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={salon}
                alt="Interior of Elven Beauty Hub salon"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-noir px-8 py-6 text-center shadow-lift sm:block lg:-right-8">
                <p className="font-display text-3xl text-gold-gradient">100%</p>
                <p className="mt-1 text-[0.6rem] uppercase tracking-[0.24em] text-cream/60">
                  Sanitised tools
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Elven"
              title="An all-in-one beauty destination in the heart of Yaba"
              copy="Elven Beauty Hub was built on one idea: everyone in the family should be able to look and feel their best in the same place, on the same afternoon. From frontals and knotless braids to sharp fades and sculpted nails, our chairs are open to men, women and kids alike."
            />
            <Reveal delay={120}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Unisex salon",
                  "Free WiFi",
                  "Walk-ins welcome",
                  "Appointments preferred",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9">
                <WaButton
                  variant="ink"
                  message="Hi Elven Beauty Hub, I'd love to know more about your salon."
                >
                  Talk to us
                </WaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Services crafted around you"
            copy="Eight signature service lines, each handled by a specialist who does it every single day."
            align="center"
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 90}>
                <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                  <span className="font-display block text-sm text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-5 text-xl leading-snug text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors group-hover:text-gold-deep"
                  >
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <p className="font-display text-xl italic text-charcoal">And more…</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <SectionHeading
            eyebrow="Why Elven"
            title="Reasons our chairs stay full"
            copy="We obsess over the small things — the parting, the edge, the shine, the welcome."
          />
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="hairline w-14" />
                <h3 className="font-display mt-5 text-lg text-ink">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Kind words" title="Loved by Lagos" align="center" tone="light" />
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <figure className="h-full rounded-3xl border border-cream/10 bg-cream/[0.04] p-8 transition-colors duration-500 hover:border-gold/40">
                  <div className="text-gold" aria-label="5 star rating">
                    ★★★★★
                  </div>
                  <blockquote className="font-display mt-6 text-lg leading-relaxed text-cream/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7">
                    <p className="text-sm font-semibold text-cream">{t.name}</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-cream/40">
                      {t.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="On the gram"
              title={CONTACT.instagramHandle}
              copy="Fresh transformations, behind-the-chair moments and opening-week news."
            />
            <Reveal delay={100}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
              >
                Follow us
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: gBraids, alt: "Knotless braids styling" },
              { src: gNails, alt: "Sculpted gel manicure" },
              { src: gBarber, alt: "Precision skin fade" },
              { src: gLashes, alt: "Volume lash extensions" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 80}>
                <div className="group overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
