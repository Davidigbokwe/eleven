import { NavLink, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Logo } from "./Logo";
import { waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
];

export default function SiteHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = open || scrollY > 40;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkInactive = useMemo(
    () =>
      solid
        ? "text-charcoal hover:text-ink"
        : "text-cream/70 hover:text-cream",
    [solid],
  );
  const linkActive = solid ? "text-ink" : "text-cream";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid
          ? "border-b border-border/70 bg-cream/92 backdrop-blur-xl shadow-soft"
          : "border-b border-cream/15 bg-gradient-to-b from-noir/60 via-noir/20 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="min-w-0">
          <Logo tone={solid ? "dark" : "light"} />
        </Link>

        <div className="flex items-center gap-2 lg:gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.exact}
                className={({ isActive }) =>
                  `group relative text-[0.8rem] font-medium tracking-[0.14em] uppercase transition-colors duration-500 ${
                    isActive ? linkActive : linkInactive
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold-gradient transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:inline-block ${
              solid
                ? "bg-ink text-cream hover:bg-gold-gradient hover:text-noir"
                : "border border-cream/30 bg-cream/5 text-cream hover:border-gold hover:bg-gold-gradient hover:text-noir"
            }`}
          >
            Book Now
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border backdrop-blur-md lg:hidden ${
              solid
                ? "border-border bg-card/70"
                : "border-cream/25 bg-noir/30"
            }`}
          >
            {(() => {
              const bars = solid ? "bg-ink" : "bg-cream";
              return (
                <>
                  <span
                    className={`block h-px w-5 ${bars} transition-transform duration-300 ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-5 ${bars} transition-opacity ${open ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-px w-5 ${bars} transition-transform duration-300 ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </>
              );
            })()}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-cream/98 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-7 pt-2">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-display border-b border-border/60 py-4 text-2xl ${
                  isActive ? "text-gold-deep" : "text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 rounded-full bg-gold-gradient px-6 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-noir"
          >
            Book via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
