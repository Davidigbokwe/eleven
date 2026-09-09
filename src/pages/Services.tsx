import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { ClosingCta, PageHero } from "@/components/ui-bits";
import { SERVICES, setPageMeta } from "@/lib/site";
import salon from "@/assets/salon.jpg";
import gWig from "@/assets/g-wig.jpg";
import gBraids from "@/assets/g-braids.jpg";
import gBarber from "@/assets/g-barber.jpg";
import gKids from "@/assets/g-kids.jpg";
import gNails from "@/assets/g-nails.jpg";
import gLashes from "@/assets/g-lashes.jpg";
import gTreatment from "@/assets/g-treatment.jpg";
import gProducts from "@/assets/g-products.jpg";

const IMAGES: Record<string, string> = {
  "hair-styling": gWig,
  braiding: gBraids,
  barbering: gBarber,
  kids: gKids,
  nails: gNails,
  "lashes-brows": gLashes,
  "hair-treatment": gTreatment,
  products: gProducts,
};

export default function Services() {
  useEffect(() => {
    setPageMeta({
      title: "Our Services | Elven Beauty Hub, Sabo Yaba Lagos",
      description:
        "Hair styling & wig installation, braiding, barbering, kids hair, nails, lashes & brows, hair treatments and beauty products at Elven Beauty Hub, Lagos.",
      pathname: "/services",
    });
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Beauty • Grooming • Relaxation"
        title="Our Services"
        subtitle="Hair styling, braiding, barbering, nails and more — all in one serene space in Sabo Yaba."
        image={salon}
        alt="Elven Beauty Hub salon interior"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-5 sm:gap-28 lg:px-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <figure className="group relative overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src={IMAGES[s.slug]}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-[4/5]"
                  />
                  <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-noir/70 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cream/85 backdrop-blur-md">
                    {s.category}
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="eyebrow">{s.category}</p>
                <h2 className="font-display mt-4 text-[2rem] leading-[1.1] text-ink sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-charcoal shadow-soft"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${s.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-deep"
                >
                  Explore
                  <span>→</span>
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-beige py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/40 bg-card px-8 py-12 text-center shadow-soft">
              <p className="eyebrow">Grand opening</p>
              <h2 className="font-display text-[2rem] leading-tight text-ink sm:text-5xl">
                Coming Soon — <span className="text-gold-gradient">September 13</span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Opening week is September 13. Walk-ins welcome, appointments preferred — find all
                booking details on the Contact page.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
