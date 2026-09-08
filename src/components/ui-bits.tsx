import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { waLink, CONTACT } from "@/lib/site";

export function WaButton({
  message,
  children = "Book Appointment",
  variant = "gold",
  className = "",
}: {
  message?: string;
  children?: ReactNode;
  variant?: "gold" | "ink" | "outline";
  className?: string;
}) {
  const styles =
    variant === "gold"
      ? "bg-gold-gradient text-noir hover:shadow-[var(--shadow-gold)]"
      : variant === "ink"
        ? "bg-ink text-cream hover:bg-gold-gradient hover:text-noir"
        : "border border-ink/25 text-ink hover:border-gold hover:text-gold-deep";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-noir pb-16 pt-40 sm:min-h-[70vh] sm:pb-24">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold">
            {eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`font-display mt-4 text-[2.1rem] leading-[1.1] sm:text-5xl ${
          tone === "light" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 text-base leading-relaxed ${
            tone === "light" ? "text-cream/60" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-noir py-24 sm:py-32">
      <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display mt-6 text-[2.3rem] leading-[1.08] text-cream sm:text-6xl">
            We create the look <span className="text-gold-gradient">you deserve.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60">
            Reserve your chair before opening week fills up. Walk-ins are welcome, but appointments
            get first pick of the calendar.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WaButton>Book on WhatsApp</WaButton>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              Visit the salon
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
