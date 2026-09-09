import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ClosingCta, PageHero, WaButton } from "@/components/ui-bits";
import { CONTACT, SERVICES, waLink, setPageMeta } from "@/lib/site";
import salon from "@/assets/salon.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const HIGHLIGHTS = [
  { title: "Free WiFi", copy: "Stay connected while you sit — stream, work or scroll stress-free." },
  {
    title: "Clean & Serene",
    copy: "Fresh linen, sanitised tools and a calm space designed for real downtime.",
  },
  {
    title: "Walk-ins Welcome",
    copy: "Pop in whenever you're ready. Appointments get priority time slots though.",
  },
  {
    title: "Unisex & Family",
    copy: "Men, women and kids — one booking, one place, one afternoon.",
  },
];

export default function Contact() {
  useEffect(() => {
    setPageMeta({
      title: "Contact & Book | Elven Beauty Hub, Sabo Yaba Lagos",
      description:
        "Visit Elven Beauty Hub at Nipost Shopping Complex, Sabo Yaba. Book appointments on WhatsApp 0803 175 9528 or use our quick contact form.",
      pathname: "/contact",
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone so we can reach you.");
      return;
    }
    setSubmitting(true);
    const prefilled =
      `Hi Elven Beauty Hub, my name is ${form.name}.` +
      (form.phone ? ` You can reach me on ${form.phone}.` : "") +
      (form.service ? ` I'm interested in: ${form.service}.` : "") +
      (form.message ? ` ${form.message}` : "");
    window.location.href = waLink(prefilled);
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <>
      <PageHero
        eyebrow="Walk-ins Welcome · Appointments Preferred"
        title="Visit us. Or book from anywhere."
        subtitle="Nipost Shopping Complex, Sabo Yaba. Tap the big WhatsApp button below — we reply within minutes, every day."
        image={salon}
        alt="Elven Beauty Hub salon interior"
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="eyebrow">Find us</p>
                <h2 className="font-display mt-4 text-[2rem] leading-[1.1] text-ink sm:text-5xl">
                  Come say hello.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                  Shop 27, Nipost Shopping Complex, right in the heart of Sabo Yaba. Look for the
                  gold door, walk in, and we'll take it from there.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-whatsapp text-white transition-colors group-hover:bg-whatsapp/90">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5.5 w-5.5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.84 9.84 0 0 0 4.69 1.19c5.43 0 9.85-4.42 9.85-9.86A9.79 9.79 0 0 0 12.04 2zm5.43 12.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    WhatsApp · Instant reply
                  </h3>
                  <p className="font-display mt-2 text-lg text-ink">{CONTACT.phoneDisplay}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tap, say hi, and we'll confirm your slot in minutes.
                  </p>
                </a>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-cream">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    Call us
                  </h3>
                  <a
                    href={CONTACT.phoneHref}
                    className="font-display mt-2 block text-lg text-ink transition-colors hover:text-gold-deep"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Salon line — pickups, directions and last-minute slots.
                  </p>
                </div>

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-noir transition-transform group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.81s-.01 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.56 2.2 15.19 2.2 12s.01-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7C3.45 8.86 3.44 9.2 3.44 12s.01 3.14.07 4.38c.4.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.58.07-4.38s-.01-3.14-.07-4.38c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31C15.5 4.01 15.14 4 12 4zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.1-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    Instagram
                  </h3>
                  <p className="font-display mt-2 text-lg text-ink">{CONTACT.instagramHandle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fresh looks, opening week news and behind-the-chair clips.
                  </p>
                </a>

                <a
                  href={CONTACT.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient text-noir transition-transform group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    TikTok
                  </h3>
                  <p className="font-display mt-2 text-lg text-ink">{CONTACT.tiktokHandle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Quick videos, trending styles and salon moments.
                  </p>
                </a>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/10 bg-beige text-ink">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-7-6.22-7-11.5A7 7 0 0 1 12 3a7 7 0 0 1 7 6.5C19 14.78 12 21 12 21z"
                      />
                      <circle
                        cx="12"
                        cy="9.5"
                        r="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                    Address
                  </h3>
                  <p className="font-display mt-2 text-lg leading-snug text-ink">
                    {CONTACT.address}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Sabo Yaba, Lagos · Shop 27</p>
                </div>
              </div>

              <Reveal className="mt-4">
                <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
                  <iframe
                    title="Elven Beauty Hub location map"
                    src="https://maps.google.com/maps?q=Nipost%20Shopping%20Complex%20Sabo%20Yaba%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-72 w-full bg-beige sm:h-80"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-10">
              <p className="eyebrow">Quick enquiry</p>
              <h2 className="font-display mt-4 text-[1.8rem] leading-[1.1] text-ink sm:text-4xl">
                Send us a message.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Fill in your details and tap send — we'll route it straight through to WhatsApp so
                you get a reply right away.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[0.7rem] uppercase tracking-[0.18em] text-charcoal"
                    >
                      Full name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="e.g. Amaka Chukwu"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-12 rounded-2xl border-border bg-beige/40 px-4 placeholder:text-muted-foreground/60 focus-visible:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-[0.7rem] uppercase tracking-[0.18em] text-charcoal"
                    >
                      Phone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="e.g. 0803 123 4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-12 rounded-2xl border-border bg-beige/40 px-4 placeholder:text-muted-foreground/60 focus-visible:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-[0.7rem] uppercase tracking-[0.18em] text-charcoal"
                  >
                    Service interested in
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm({ ...form, service: v })}
                  >
                    <SelectTrigger
                      id="service"
                      className="h-12 rounded-2xl border-border bg-beige/40 px-4 focus-visible:ring-gold"
                    >
                      <SelectValue placeholder="Choose a service (optional)" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-border bg-card shadow-lift">
                      {SERVICES.map((s) => (
                        <SelectItem key={s.slug} value={s.title} className="rounded-xl py-2">
                          {s.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[0.7rem] uppercase tracking-[0.18em] text-charcoal"
                  >
                    Your message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us the date, time or look you have in mind…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-none rounded-2xl border-border bg-beige/40 px-4 py-3 placeholder:text-muted-foreground/60 focus-visible:ring-gold"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 h-14 w-full rounded-full bg-gold-gradient text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-noir transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)] disabled:opacity-70"
                >
                  {submitting ? "Opening WhatsApp…" : "Send via WhatsApp"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Walk-ins Welcome · Appointments Preferred · We reply within minutes
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Why your visit will feel like a treat</p>
            <h2 className="font-display mt-4 text-[2rem] leading-[1.1] text-ink sm:text-5xl">
              Little touches, big difference.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="hairline w-14" />
                <h3 className="font-display mt-5 text-lg text-ink">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-noir px-8 py-16 text-center sm:px-14 sm:py-20">
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold">
                  Opening September 13
                </p>
                <h3 className="font-display mx-auto mt-6 max-w-2xl text-[2rem] leading-[1.1] text-cream sm:text-5xl">
                  Ready when you are.{" "}
                  <span className="text-gold-gradient italic">Tap to book.</span>
                </h3>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <WaButton>Book via WhatsApp</WaButton>
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    Follow {CONTACT.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
