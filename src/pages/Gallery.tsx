import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ClosingCta, PageHero } from "@/components/ui-bits";
import { setPageMeta, CONTACT } from "@/lib/site";
import salon from "@/assets/salon.jpg";

type GalleryItem = {
  src: string;
  alt: string;
};

const GALLERY: GalleryItem[] = [
  { src: "/Gallery/0Q5A8287.webp", alt: "Silk press styling finished with a glossy shine" },
  { src: "/Gallery/0Q5A8301(1).webp", alt: "Frontal wig install with baby hairs laid smooth" },
  { src: "/Gallery/0Q5A8304.webp", alt: "Knotless braids with a natural hairline finish" },
  { src: "/Gallery/0Q5A8308(1).webp", alt: "Precision skin fade with a crisp lineup" },
  { src: "/Gallery/0Q5A8308.webp", alt: "Client relaxing in the salon chair during treatment" },
  { src: "/Gallery/0Q5A8311.webp", alt: "Sculpted gel manicure in a neutral tone" },
  { src: "/Gallery/0Q5A8316.webp", alt: "Volume lash extensions mapped to the eye shape" },
  { src: "/Gallery/0Q5A8320.webp", alt: "Brow shaping and tint for a defined arch" },
  { src: "/Gallery/0Q5A8323.webp", alt: "Kids first haircut with a playful balloon" },
  { src: "/Gallery/0Q5A8328.webp", alt: "Salon interior with gold accents and seating" },
  {
    src: "/Gallery/avn1gpt80n4zzaqjupar.webp",
    alt: "Close-up of a silk press with mirror shine",
  },
  {
    src: "/Gallery/bertjedyvvbrxdadugcv.webp",
    alt: "Boho knotless braids styled in a high pony",
  },
  {
    src: "/Gallery/cazmucgrc9rwbajmvhv8.webp",
    alt: "Beard shaping and hot towel finish",
  },
  {
    src: "/Gallery/cszsqiqn4vwx2h0daiwt.webp",
    alt: "Edge control brushed down for a sleek look",
  },
  {
    src: "/Gallery/dfdhp74seldq7p31kz73.webp",
    alt: "French tip gel manicure with chrome detail",
  },
  {
    src: "/Gallery/e6nkmrmhlhbv3r02bs1z.webp",
    alt: "Classic lash set with a natural flutter",
  },
  {
    src: "/Gallery/e8js1hqhudh8fcm6hlia.webp",
    alt: "Microblading stencil work in progress",
  },
  {
    src: "/Gallery/emenrncclrrmkllscgrb.webp",
    alt: "Kids braids with colorful beads",
  },
  {
    src: "/Gallery/fh4mgxiwmgl2kmpjdr75.webp",
    alt: "Salon reception desk with product shelf",
  },
  {
    src: "/Gallery/flr47jyaoageurvnjxoe.webp",
    alt: "Deep conditioning treatment with steam cap",
  },
  {
    src: "/Gallery/g5svzbsdf7ib36gro6pj.webp",
    alt: "Stitch braids with a neat finish",
  },
  {
    src: "/Gallery/g6myvknfmjowbxsimewr.webp",
    alt: "Taper fade with textured crop on top",
  },
  {
    src: "/Gallery/gl9ksaelhojz6mt4vpef.webp",
    alt: "Edge up and lineup detail shot",
  },
  {
    src: "/Gallery/gswsdbpva97bz2g0d6ok.webp",
    alt: "Acrylic nail extensions with gold foil",
  },
  {
    src: "/Gallery/gt0gggmts1jckynvsf88.webp",
    alt: "Lash refill session with tweezers",
  },
  {
    src: "/Gallery/gtdqbgh9xyguy60ipaa2.webp",
    alt: "Before and after silk press transformation",
  },
  {
    src: "/Gallery/hxxjcopaknmykis6kmjm.webp",
    alt: "Children's cornrows with ribbon detail",
  },
  {
    src: "/Gallery/igfxc0j68fxmfdm3ubmw.webp",
    alt: "Spa pedicure in a warm foot bath",
  },
  {
    src: "/Gallery/iqraq8s8ipsayq6hnujb.webp",
    alt: "Salon chair and tool setup ready for service",
  },
  {
    src: "/Gallery/jll4oojinrf4wjx3ebvw.webp",
    alt: "Brow lamination for a brushed-up arch",
  },
  {
    src: "/Gallery/jsn24yvyf9spwtatm2gv.webp",
    alt: "Box braids styled over the shoulder",
  },
  {
    src: "/Gallery/jxi6c2ai0lvprd98aqgk.webp",
    alt: "Hot towel straightening with a ceramic plate",
  },
  {
    src: "/Gallery/jyw23i7f0jlcc7wafxkn.webp",
    alt: "French manicure on short square nails",
  },
  {
    src: "/Gallery/k70wi7fmk7133mwbdaxh.webp",
    alt: "Lash lift and tint for a wide-awake look",
  },
  {
    src: "/Gallery/kucyixpdu66id2rmwdej.webp",
    alt: "Scalp massage during a deep conditioning",
  },
  {
    src: "/Gallery/lzavnksukinwz4oetm5l.webp",
    alt: "Salon waiting area with gold decor",
  },
  {
    src: "/Gallery/me0nliv7cbxdss1yqsp2.webp",
    alt: "Boho braids wrapped into a low bun",
  },
  {
    src: "/Gallery/mggh2mqjt2jexqagacqz.webp",
    alt: "Beard trim with scissors over comb",
  },
  {
    src: "/Gallery/mpp4jg7akjtxe6gacvwt.webp",
    alt: "Chrome nail art with holographic finish",
  },
  {
    src: "/Gallery/mxfbsdkibqu4k5kt7rcb.webp",
    alt: "Silk press on natural black hair",
  },
  {
    src: "/Gallery/mzfg6o1xqakmvzbt4tvj.webp",
    alt: "Kids haircut with a small cape",
  },
  {
    src: "/Gallery/obfdwpqvjj6a1thb4ulj.webp",
    alt: "Lash extensions applying to lower lash line",
  },
  {
    src: "/Gallery/pvu0z1bhfmkcxpc5wpbg.webp",
    alt: "Pedicure with rose petals in the basin",
  },
  {
    src: "/Gallery/rbzxtxo1ngwips2bzg3m.webp",
    alt: "Cornrows with a middle part design",
  },
  {
    src: "/Gallery/rvllqcdyqgiuqrxvgbvh.webp",
    alt: "Salon product shelf with branded bottles",
  },
  {
    src: "/Gallery/sew8g8usz7dovojb3hyf.webp",
    alt: "Brow tint application with a fine brush",
  },
  {
    src: "/Gallery/sfvoeihqd2k3hmkdrkwk.webp",
    alt: "Beard oil finish with a warm towel",
  },
  {
    src: "/Gallery/slrpslknrmhrcarivdxr.webp",
    alt: "Manicure kit and tools laid out",
  },
  {
    src: "/Gallery/sqng9vzorixdhkrg6anu.webp",
    alt: "Silk press with volume at the roots",
  },
  {
    src: "/Gallery/trq8ahw5ijen2f6unsgg.webp",
    alt: "Children enjoying their haircut in the chair",
  },
  {
    src: "/Gallery/trqmxavl8cxxuoswqcqd.webp",
    alt: "Twist updo from knotless braids",
  },
  {
    src: "/Gallery/ttc4vbzx0zbckswodtk3.webp",
    alt: "Hair treatment mask being applied",
  },
  {
    src: "/Gallery/vvymsi7l8x64opzmwoub.webp",
    alt: "Gel polish in a rich burgundy shade",
  },
  {
    src: "/Gallery/x1zihfjudaqw860m5pjg.webp",
    alt: "Lash extensions close-up on a model",
  },
  {
    src: "/Gallery/x2s6tsqx1whlw228ju1w.webp",
    alt: "Salon bathroom with gold fixtures",
  },
  {
    src: "/Gallery/xj2ahq7tziiizsu80ogu.webp",
    alt: "Edge up detailing on a taper fade",
  },
  {
    src: "/Gallery/ywek9lllqok1bl63vzjx.webp",
    alt: "Brow lamination and light tint result",
  },
  {
    src: "/Gallery/zjmw1y9gtv1ynia6z90l.webp",
    alt: "Kids twist hairstyle with a bow",
  },
  {
    src: "/Gallery/zwasfu361pbqm0oopg6c.webp",
    alt: "Nail art with gold leaf accent",
  },
  {
    src: "/Gallery/zx7sa4b4xnmz35rffhrs.webp",
    alt: "Full salon chair station with tools",
  },
];

export default function Gallery() {
  useEffect(() => {
    setPageMeta({
      title: "Gallery | Elven Beauty Hub, Sabo Yaba Lagos",
      description:
        "A look through our chairs — silk presses, braids, fades, manicures, lashes and more from our unisex salon in Sabo Yaba, Lagos.",
      pathname: "/gallery",
    });
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };
  const showPrev = () => setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1));
  const showNext = () => setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleClose = (e: MouseEvent) => {
      if (e.target === lightboxRef.current) closeLightbox();
    };
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, [lightboxOpen]);

  const current = GALLERY[lightboxIndex];

  return (
    <>
      <PageHero
        eyebrow="Fresh looks, real moments"
        title="Style Gallery"
        subtitle="A window into our chairs — silk presses, braids, fades, manicures, lashes and everything in between. Every shot from our unisex salon in Sabo Yaba."
        image={salon}
        alt="Elven Beauty Hub salon interior"
      />

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow mb-8 text-center">Showing {GALLERY.length} transformations</p>

          <div className="columns-2 gap-4 sm:columns-3 sm:gap-5 md:gap-6 [&>:not(:first-child)]:mt-4">
            {GALLERY.map((item, i) => (
              <Reveal key={item.src} delay={(i % 8) * 40} className="block">
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group relative mb-4 block w-full overflow-hidden rounded-2xl shadow-soft outline-none transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <div className="relative pb-[100%] sm:pb-[70%]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-top object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noir py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.81s-.01 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.56 2.2 15.19 2.2 12s.01-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7C3.45 8.86 3.44 9.2 3.44 12s.01 3.14.07 4.38c.4.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.58.07-4.38s-.01-3.14-.07-4.38c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31C15.5 4.01 15.14 4 12 4zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.1-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
              </svg>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold">
                instagram
              </p>
            </div>
            <div className="mt-2 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.62.07 4.81s-.01 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.56 2.2 15.19 2.2 12s.01-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.44 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.73.37-1.05.69-.32.32-.52.62-.69 1.05-.12.32-.27.8-.31 1.7C3.45 8.86 3.44 9.2 3.44 12s.01 3.14.07 4.38c.4.9.19 1.38.31 1.7.17.43.37.73.69 1.05.32.32.62.52 1.05.69.32.12.8.27 1.7.31 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.73-.37 1.05-.69.32-.32.52-.62.69-1.05.12-.32.27-.8.31-1.7.06-1.24.07-1.58.07-4.38s-.01-3.14-.07-4.38c-.04-.9-.19-1.38-.31-1.7a2.8 2.8 0 0 0-.69-1.05 2.8 2.8 0 0 0-1.05-.69c-.32-.12-.8-.27-1.7-.31C15.5 4.01 15.14 4 12 4zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.1-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
              </svg>
              <h2 className="font-display text-[2rem] leading-[1.1] text-cream sm:text-5xl">
                {CONTACT.instagramHandle}
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/60">
              Every transformation goes up on Instagram the moment it's done. Follow us for fresh
              looks, behind-the-chair moments and opening-week news.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-noir transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]"
              >
                Follow us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta />

      {current && (
        <div
          ref={lightboxRef}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 text-cream/95 ${
            lightboxOpen ? "lightbox-open" : "lightbox-closed"
          }`}
          aria-hidden={!lightboxOpen}
        >
          <div className="relative mx-auto max-w-6xl">
            <img
              src={current.src}
              alt={current.alt}
              className="h-auto max-h-[80vh] w-full rounded-3xl object-top object-contain shadow-lift"
            />
            <p className="mt-4 max-w-2xl text-center text-sm text-cream/70">{current.alt}</p>

            <button
              type="button"
              onClick={showPrev}
              className="absolute top-1/2 -translate-y-1/2 rounded-full border border-cream/20 bg-cream/5 p-3 text-cream hover:bg-gold-gradient hover:text-noir"
              aria-label="Previous image"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19L8.75 12l6.5-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-cream/20 bg-cream/5 p-3 text-cream hover:bg-gold-gradient hover:text-noir"
              aria-label="Next image"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 19l6.5-7-6.5-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-2 right-2 rounded-full border border-cream/20 bg-cream/5 p-2.5 text-cream hover:bg-gold-gradient hover:text-noir"
              aria-label="Close gallery"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
