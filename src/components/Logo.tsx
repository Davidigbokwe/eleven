import logoImg from "@/assets/logo.jpg";

export function LogoMark({
  className = "h-12 w-12",
  tone = "auto",
}: {
  className?: string;
  tone?: "auto" | "dark" | "light";
}) {
  const ring =
    tone === "dark"
      ? "ring-1 ring-ink/10"
      : tone === "light"
        ? "ring-1 ring-cream/20"
        : "ring-1 ring-ink/5";
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-cream/5 shadow-soft ${ring}`}
    >
      <img
        src={logoImg}
        alt="Elven Beauty Hub"
        loading="eager"
        className={`${className} object-contain`}
      />
    </div>
  );
}

export function Logo({ tone = "auto" }: { tone?: "auto" | "dark" | "light" }) {
  const isDark = tone === "dark";
  const titleColor = isDark ? "text-ink" : "text-cream";
  const taglineColor = isDark ? "text-gold-deep" : "text-gold";

  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-12 w-12 shrink-0" tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] tracking-[0.18em] ${titleColor} transition-colors duration-500`}
        >
          ELVEN
        </span>
        <span
          className={`mt-1 text-[0.58rem] font-semibold tracking-[0.34em] ${taglineColor} transition-colors duration-500`}
        >
          BEAUTY HUB
        </span>
      </span>
    </span>
  );
}
