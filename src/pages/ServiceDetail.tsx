import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { ClosingCta, WaButton } from "@/components/ui-bits";
import { SERVICES, type Service, setCanonical } from "@/lib/site";
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

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service: Service | undefined = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (!service) return;
    document.title = `${service.title} | Elven Beauty Hub, Sabo Yaba Lagos`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", service.description);
    }
    setCanonical(`/services/${service.slug}`);
  }, [service]);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-28">
        <div className="max-w-md text-center">
          <h1 className="font-display text-6xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Service not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The service you're looking for doesn't exist.
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate(-1)}
              className="mr-3 inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
            >
              Go back
            </button>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-7 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-noir transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const bookingMsg = `Hi Elven Beauty Hub, I'd like to book ${service.title}.`;

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-noir pb-16 pt-40 sm:min-h-[70vh] sm:pb-24">
        <img
          src={IMAGES[service.slug]}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cream/60 transition-colors hover:text-gold"
            >
              <span>←</span> All Services
            </Link>
            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold">
              {service.category}
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">
              {service.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WaButton message={bookingMsg}>Book this service</WaButton>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Visit salon
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={IMAGES[service.slug]}
                alt={service.title}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-[4/5]"
              />
              <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-noir/70 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-cream/85 backdrop-blur-md">
                {service.category}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">What's included</p>
            <h2 className="font-display mt-4 text-[2rem] leading-[1.1] text-ink sm:text-5xl">
              Signature {service.category.toLowerCase()} experience.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.details.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm text-charcoal shadow-soft"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl border border-gold/30 bg-beige/60 p-6 shadow-soft sm:p-8">
              <p className="eyebrow">Ready to book?</p>
              <p className="font-display mt-3 text-xl text-ink sm:text-2xl">
                Reserve your chair.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Walk-ins welcome, appointments get priority slots.
              </p>
              <div className="mt-5">
                <WaButton message={bookingMsg}>Book via WhatsApp</WaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <p className="eyebrow">More services</p>
              <h2 className="font-display mt-4 text-[2rem] leading-[1.1] text-ink sm:text-5xl">
                Explore the full menu.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/services"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-ink/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-deep"
              >
                View all
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                  <figure className="mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={IMAGES[s.slug]}
                      alt={s.title}
                      loading="lazy"
                      width={600}
                      height={750}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </figure>
                  <p className="eyebrow">{s.category}</p>
                  <h3 className="font-display mt-3 text-xl leading-snug text-ink">{s.title}</h3>
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
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
