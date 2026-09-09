export const WHATSAPP_NUMBER = "2348031759528";
export const DEFAULT_MESSAGE =
  "Hi Elven Beauty Hub, I would like to book an appointment.";

export function waLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
  address: "Shop 27, Nipost Shopping Complex, Sabo Yaba, Lagos",
  phoneDisplay: "0803 175 9528",
  phoneHref: "tel:+2348031759528",
  instagram: "https://instagram.com/elvenbeautyhub",
  instagramHandle: "@elvenbeautyhub",
  tiktok: "https://tiktok.com/@elvenbeautyhub",
  tiktokHandle: "@elvenbeautyhub",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  details: string[];
  category: string;
};

export const SERVICES: Service[] = [
  {
    slug: "hair-styling",
    title: "Hair Styling & Wig Installation",
    short: "Silk presses, frontals, closures and custom styling.",
    description:
      "From glass-smooth silk presses to seamless frontal installs, our stylists tailor every look to your face, texture and lifestyle.",
    details: ["Silk press & blowout", "Frontal & closure install", "Wig revamp & customisation", "Bridal & event styling"],
    category: "Hair",
  },
  {
    slug: "braiding",
    title: "Braiding & Protective Styles",
    short: "Knotless, cornrows, twists and scalp-friendly protective work.",
    description:
      "Neat, tension-free braiding that protects your edges while lasting weeks. Every parting is measured, every braid is finished by hand.",
    details: ["Knotless & boho braids", "Cornrows & stitch braids", "Twists & locs styling", "Kids-safe tension care"],
    category: "Braids",
  },
  {
    slug: "barbering",
    title: "Barbering (Men & Boys)",
    short: "Precision fades, lineups, beard sculpting and grooming.",
    description:
      "A dedicated grooming corner for men and boys — sharp fades, crisp lineups and beard work finished with a hot towel.",
    details: ["Skin & taper fades", "Razor lineup", "Beard shaping & trim", "Hot towel finish"],
    category: "Barbering",
  },
  {
    slug: "kids",
    title: "Kids Hair Services",
    short: "Gentle, patient care for little ones.",
    description:
      "Calm, playful and gentle. We keep little heads comfortable with soft-hands styling, beads, cornrows and first haircuts.",
    details: ["Cornrows & beads", "First haircut", "Wash & detangle", "Back-to-school styles"],
    category: "Kids",
  },
  {
    slug: "nails",
    title: "Nails (Manicure & Pedicure)",
    short: "Sculpted gel, acrylic sets, classic mani & pedi.",
    description:
      "Hygienic, fully sanitised tools and an eye for shape. Choose a clean natural finish or a full sculpted set with art.",
    details: ["Gel & acrylic extensions", "Classic manicure", "Spa pedicure", "Nail art & chrome"],
    category: "Nails",
  },
  {
    slug: "lashes-brows",
    title: "Lashes & Brows",
    short: "Classic to volume lashes, brow shaping and tinting.",
    description:
      "Lash sets mapped to your eye shape and brows sculpted to your natural arch — for a wide-awake, effortless finish.",
    details: ["Classic & volume lashes", "Lash lift", "Brow shaping & tint", "Lash refills"],
    category: "Lashes",
  },
  {
    slug: "hair-treatment",
    title: "Hair Treatment",
    short: "Deep conditioning, scalp therapy and repair.",
    description:
      "Restore softness, strength and shine with steam treatments, protein therapy and targeted scalp care.",
    details: ["Deep conditioning & steam", "Protein & bond repair", "Scalp detox", "Trim & thermal care"],
    category: "Hair",
  },
  {
    slug: "products",
    title: "Sales of Beauty Products",
    short: "Curated hair and beauty essentials in-store.",
    description:
      "Take the salon home with our shelf of curated shampoos, oils, bonnets, edge control and styling tools.",
    details: ["Shampoos & conditioners", "Hair oils & serums", "Styling tools", "Accessories & bonnets"],
    category: "Products",
  },
];
