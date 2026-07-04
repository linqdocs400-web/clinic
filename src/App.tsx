import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import logoImg from "./assets/logo.png";
import doctorImg from "./assets/doctor.png";
import acneImg from "./assets/acne.png";
import alopeciaAreataImg from "./assets/ANDROGENETIC ALOPECIA.png";
import psoriasisImg from "./assets/Palmar Psoriasis.jpeg";
import hairlossImg from "./assets/hairloss.png";
import melasmaImg from "./assets/melasma.png";

import result1Img from "./assets/result1.png";
import result2Img from "./assets/result2.png";
import result3Img from "./assets/result3.png";
import result4Img from "./assets/result4.png";
import result5Img from "./assets/result5.png";

import beforeImg from "./assets/before.png";
import afterImg from "./assets/after.png";

/* ------------------------------ Data ------------------------------ */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Conditions", href: "#conditions" },
  { label: "Treatments", href: "#treatments" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const SPECIALTIES = [
  "Dermatology",
  "Trichology",
  "Laser",
  "Aesthetics",
  "Dermatosurgery",
  "Pediatric Skin",
  "STD Care",
];

const REASONS = [
  { t: "Experienced Dermatologists", i: "stethoscope" },
  { t: "Advanced Laser Technology", i: "sparkle" },
  { t: "Personalized Treatment Plans", i: "heart" },
  { t: "Proven Clinical Results", i: "award" },
  { t: "Skin & Hair Specialists", i: "leaf" },
  { t: "Affordable Consultation", i: "gem" },
  { t: "Hygienic Environment", i: "shield" },
  { t: "Trusted Patient Care", i: "users" },
  { t: "Modern Equipment", i: "microscope" },
  { t: "Long-Term Follow-Up", i: "clock" },
];

const CONDITIONS = [
  {
    name: "Acne",
    blurb: "Pimples, blackheads, whiteheads, cysts.",
    img: acneImg,
  },
  {
    name: "Acne Scars",
    blurb: "Pitted or raised scars, uneven texture.",
    img: acneImg,
  },
  {
    name: "Hair Fall",
    blurb: "Daily shedding, thinning, widening parting.",
    img: hairlossImg,
  },
  {
    name: "Alopecia Areata",
    blurb: "Patchy hair loss on scalp or beard.",
    img: alopeciaAreataImg,
  },
  {
    name: "Hair Regrowth",
    blurb: "Receding hairline, crown thinning.",
    img: hairlossImg,
  },
  {
    name: "Pigmentation",
    blurb: "Melasma, sun spots, uneven tone.",
    img: melasmaImg,
  },
  {
    name: "Psoriasis",
    blurb: "Scaly, red, inflamed patches.",
    img: psoriasisImg,
  },
];

const TREATMENT_GROUPS = [
  {
    title: "Medical Dermatology",
    icon: "stethoscope",
    items: [
      "Acne Treatment",
      "Acne Scar Treatment",
      "Hair Fall Treatment",
      "Scalp Disorders",
      "Psoriasis Treatment",
      "Eczema Treatment",
      "Vitiligo Treatment",
      "Allergy Treatment",
      "Fungal Infection",
      "Viral Infection",
      "Pigmentation",
      "Dark Circles",
      "Nail Disorders",
      "Pediatric Dermatology",
      "Autoimmune Skin",
    ],
  },
  {
    title: "Hair Treatments",
    icon: "sparkle",
    items: [
      "PRP Therapy",
      "GFC Therapy",
      "Hair Regrowth Solutions",
      "Hair Restoration",
      "Mesotherapy",
      "Scalp Boosters",
    ],
  },
  {
    title: "Laser Treatments",
    icon: "flask",
    items: [
      "Laser Hair Reduction",
      "Laser Scar Reduction",
      "Pigmentation Removal",
      "Tattoo Removal",
      "Skin Rejuvenation",
      "Vascular Laser",
    ],
  },
  {
    title: "Cosmetic & Aesthetics",
    icon: "gem",
    items: [
      "Chemical Peels",
      "Skin Boosters",
      "Anti-Aging Treatments",
      "Skin Glow Procedures",
      "Hydrafacial",
      "Microneedling RF",
    ],
  },
];

const RESULTS = [
  {
    label: "Hair Transplant",
    meta: "1 SESSION",
    sub: "Receded hairline",
    img: result1Img,
  },
  {
    label: "Pigmentation Removal",
    meta: "6 SESSIONS",
    sub: "Sun-induced melasma",
    img: result2Img,
  },
  {
    label: "Psoriasis Care",
    meta: "3 MONTHS",
    sub: "Scalp psoriasis",
    img: result3Img,
  },
  {
    label: "Alopecia Recovery",
    meta: "5 SESSIONS",
    sub: "Patchy hair loss",
    img: result4Img,
  },
  {
    label: "Acne Clearance",
    meta: "4 SESSIONS",
    sub: "Inflamed acne",
    img: result5Img,
  },
];

const TESTIMONIALS = [
  {
    q: "After years of trying everything, my skin finally feels like my own again. The team is meticulous.",
    name: "Priya R.",
    tag: "Acne Scar Treatment",
  },
  {
    q: "Six sessions in and friends are noticing. Honest, no overselling — just real results.",
    name: "Arjun M.",
    tag: "Hair Regrowth (GFC)",
  },
  {
    q: "Calm, beautiful clinic. Dr. Koushik takes time to explain everything. Loved the experience.",
    name: "Sneha K.",
    tag: "Pigmentation",
  },
  {
    q: "Painless, quick, and incredibly clean facility. Highly recommend.",
    name: "Rahul T.",
    tag: "Laser Hair Reduction",
  },
  {
    q: "My skin glows after every visit. Their plans actually work.",
    name: "Ananya P.",
    tag: "Anti-Aging Peels",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=700&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=70&auto=format&fit=crop",
];

/* ------------------------------ Icons ------------------------------ */

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const props = {
    className,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "stethoscope":
      return (
        <svg {...props}>
          <path d="M6 3v6a4 4 0 0 0 8 0V3" />
          <circle cx="18" cy="14" r="2" />
          <path d="M10 13v3a5 5 0 0 0 8 0" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="6" />
          <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16z" />
          <path d="M2 22l9-9" />
        </svg>
      );
    case "gem":
      return (
        <svg {...props}>
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M2 9h20M12 21V9" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "microscope":
      return (
        <svg {...props}>
          <path d="M6 18h8M9 2h3v6H9zM10 8v8M5 22h14M7 18a4 4 0 0 1 8 0" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "flask":
      return (
        <svg {...props}>
          <path d="M9 3h6M10 3v6L4 20a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 20l-6-11V3" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...props}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...props}>
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------ Page ------------------------------ */

function App() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Conditions />
      <Treatments />
      <Results />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <Visit />
      <Footer />
      <FloatingChat />
    </div>
  );
}

/* ------------------------------ Sections ------------------------------ */

function TopBar() {
  return (
    <div className="bg-ink text-white text-[10px] sm:text-xs tracking-[0.18em] uppercase">
      <div className="mx-auto max-w-7xl px-4 py-2.5 text-center">
        Inaugural Consultation · ₹300 only · Dilsukhnagar, Hyderabad
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3">
      <img
        src={logoImg}
        alt="SK Clinic Logo"
        className="h-12 w-12 object-contain rounded-full border border-ink/20 bg-cream"
      />
      <div className="leading-tight">
        <div className="font-display italic text-lg text-ink">Siri &amp; Koushik's</div>
        <div className="text-[10px] tracking-[0.32em] text-ink/70">SKIN · HAIR · LASER</div>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Logo />
        <nav className="hidden lg:flex items-center justify-center gap-8 text-sm text-ink/85">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-ink transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-cream text-xs tracking-[0.22em] uppercase px-6 py-3.5 hover:bg-ink-soft transition"
          >
            Book Appointment
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded border border-ink/15 text-ink"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-cream">
          <div className="px-4 py-4 flex flex-col gap-1 text-sm">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/85"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-ink text-cream text-xs tracking-[0.22em] uppercase px-6 py-3.5"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.2 }),
  ]);

  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-end">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -top-6 -left-2 lg:-left-6 w-40 h-44 border border-ink/15 hidden sm:block" />
            <div className="relative overflow-hidden bg-panel">
              <img
                src={doctorImg}
                alt="Dr. Koushik, Dermatologist"
                className="w-full h-[460px] sm:h-[560px] lg:h-[640px] object-cover object-top"
                width={1024}
                height={1536}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -left-2 lg:left-6 bg-cream shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] p-4 pr-6 max-w-[260px] hidden sm:block"
            >
              <div className="text-[oklch(0.72_0.08_70)] tracking-widest">★★★★★</div>
              <p className="mt-2 text-[13px] leading-snug text-ink/90">
                "Genuinely the most thoughtful dermatologist I've met."
              </p>
              <div className="mt-2 text-[10px] tracking-[0.24em] text-ink/55">
                — VERIFIED PATIENT
              </div>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div className="pb-10 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-script text-3xl text-ink-soft"
            >
              welcome
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] text-ink mt-2 tracking-tight"
            >
              Advanced Skin, Hair
              <br className="hidden sm:block" /> &amp; Laser Care
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-script text-3xl sm:text-4xl text-ink-soft/90 mt-3"
            >
              for every stage of life.
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-xl text-ink/70 text-[15px] leading-relaxed"
            >
              Expert dermatology, trichology, cosmetic and laser treatments — delivered with
              precision, care and the trust of thousands of patients across Hyderabad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-cream text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink-soft transition"
              >
                Book Appointment
              </a>
              <a
                href="#treatments"
                className="border border-ink/40 text-ink text-xs tracking-[0.22em] uppercase px-7 py-4 hover:bg-ink hover:text-cream transition"
              >
                Explore Treatments
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rose stat band */}
      <div className="bg-rose mt-12 lg:-mt-32 lg:pt-40 lg:pb-12 py-10 lg:relative lg:z-[-1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 lg:pl-[42%]">
          <div className="flex flex-wrap gap-8 sm:gap-14 text-cream">
            <Stat n="7k+" l="Patients" />
            <Stat n="15+" l="Years" />
            <Stat n="50+" l="Conditions" />
          </div>
        </div>
      </div>

      {/* Specialty marquee with Embla + Framer */}
      <div className="bg-rose/30 border-y border-ink/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
            <div className="flex items-center gap-8 sm:gap-12 text-ink font-display text-lg sm:text-xl whitespace-nowrap min-w-max">
              {[...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
                <span key={i} className="flex items-center gap-8 sm:gap-12 pl-8 sm:pl-12">
                  <span className="italic">{s}</span>
                  <span className="text-ink/30">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(n.replace(/\D/g, ""));
  const suffix = n.replace(/[\d]/g, "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="font-display text-4xl sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-[10px] tracking-[0.3em] uppercase opacity-80">{l}</div>
    </motion.div>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-script text-2xl text-ink-soft">Hi, I'm</div>
          <h2 className="font-display text-5xl lg:text-6xl text-ink mt-2">Dr. Koushik</h2>
          <div className="mt-3 text-[11px] tracking-[0.28em] text-ink/60 uppercase">
            MBBS · MD Dermatology · Dermatosurgeon
          </div>
          <div className="mt-6 h-px w-16 bg-ink/30" />
          <p className="mt-6 text-ink/75 leading-relaxed max-w-md">
            I built Siri &amp; Koushik's as a calm, considered space where modern dermatology meets
            genuine listening. Every plan we design is shaped to your skin, your story and your
            goals — never a generic protocol.
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed max-w-md">
            From advanced laser and dermatosurgery to gentle pediatric care, our clinic brings
            evidence-based medicine together with the warmth of a personal practice.
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-ink/80">
            {[
              ["award", "Trained at premier institutes"],
              ["heart", "Board-certified specialist"],
              ["microscope", "USFDA-approved lasers"],
              ["users", "Patient-first philosophy"],
            ].map(([i, t]) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-ink/30 text-ink">
                  <Icon name={i} className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="relative grid grid-cols-6 grid-rows-6 gap-3 min-h-[380px] lg:min-h-[520px]">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={doctorImg}
            alt="Dr. Koushik in clinic"
            className="col-span-4 row-span-6 col-start-2 row-start-1 object-cover w-full h-full"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=70&auto=format&fit=crop"
            alt="Treatment result"
            className="col-span-2 row-span-2 col-start-5 row-start-1 object-cover w-full h-full shadow-lg"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=600&q=70&auto=format&fit=crop"
            alt="Hair restoration"
            className="col-span-2 row-span-2 col-start-1 row-start-5 object-cover w-full h-full shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-6 text-ink/70">
      <span className="h-px w-16 sm:w-28 bg-ink/30" />
      <span className="font-script text-2xl">{children}</span>
      <span className="h-px w-16 sm:w-28 bg-ink/30" />
    </div>
  );
}

function WhyUs() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true, breakpoints: { "(min-width: 1024px)": { active: false } } },
    [
      AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.2 }),
      WheelGesturesPlugin(),
    ],
  );

  const scroll = (dir: 1 | -1) => {
    if (!emblaApi) return;
    if (dir === -1) emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="why">
      <SectionLabel>why us ?</SectionLabel>
      <div className="bg-sage mt-10 py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink"
          >
            A higher standard of <br /> dermatology.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-ink/70 max-w-xl mx-auto text-sm"
          >
            Ten reasons patients across Hyderabad trust us with their skin and hair.
          </motion.p>
          <div
            className="mt-12 overflow-hidden lg:overflow-visible mx-auto block max-w-6xl"
            ref={emblaRef}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex lg:grid lg:grid-cols-5 gap-4 cursor-grab active:cursor-grabbing lg:cursor-auto"
            >
              {REASONS.map((r) => (
                <motion.div
                  key={r.t}
                  variants={itemVariants}
                  className="bg-cream p-6 sm:p-8 flex flex-col items-center text-center gap-4 min-h-[180px] justify-center w-[160px] sm:w-[200px] lg:w-full shrink-0 lg:shadow-sm lg:border lg:border-ink/10 group cursor-default"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 group-hover:scale-110">
                    <Icon name={r.i} className="w-6 h-6" />
                  </span>
                  <div className="font-display text-lg text-ink leading-tight">{r.t}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HorizontalRail({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false }, [
    WheelGesturesPlugin(),
  ]);

  const scroll = (dir: 1 | -1) => {
    if (!emblaApi) return;
    if (dir === -1) emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section id={id} className="py-20 lg:py-28 bg-panel/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="font-script text-2xl text-ink-soft">{label}</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
              {title}
            </h2>
          </motion.div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div ref={emblaRef} className="mt-10 overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Conditions() {
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <HorizontalRail id="conditions" label="conditions" title="Diseases we treat.">
      {CONDITIONS.map((c) => (
        <motion.article
          variants={itemVariants}
          key={c.name}
          className="shrink-0 w-[78%] sm:w-[50%] lg:w-[32%] group/card hover:scale-[1.03] transition-transform duration-500"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-ink/10 group rounded-[4px] shadow-sm group-hover/card:shadow-md transition-shadow">
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition duration-500" />
            <h3 className="absolute bottom-4 left-5 font-display text-2xl text-cream transform translate-y-2 group-hover:translate-y-0 transition duration-500">
              {c.name}
            </h3>
          </div>
          <p className="mt-4 text-sm text-ink/65 pl-1">{c.blurb}</p>
          <a
            href="#contact"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink hover:text-ink-soft pl-1 transition-colors"
          >
            Learn more ›
          </a>
        </motion.article>
      ))}
    </HorizontalRail>
  );
}

function Treatments() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false }, [
    WheelGesturesPlugin(),
  ]);

  const scroll = (dir: 1 | -1) => {
    if (!emblaApi) return;
    if (dir === -1) emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="font-script text-2xl text-ink-soft">treatments</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
              Treatments crafted around you.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {TREATMENT_GROUPS.map((g) => (
              <motion.div
                key={g.title}
                variants={itemVariants}
                className="bg-cream border border-ink/8 p-7 shadow-[0_1px_0_rgba(0,0,0,0.03)] w-[280px] sm:w-[320px] shrink-0 group hover:shadow-lg transition-shadow duration-500"
              >
                <span className="inline-block transition-transform duration-500 group-hover:scale-110">
                  <Icon name={g.icon} className="w-6 h-6 text-ink" />
                </span>
                <h3 className="font-display text-xl text-ink mt-5">{g.title}</h3>
                <div className="mt-2 h-px w-10 bg-ink/30 transition-all duration-500 group-hover:w-full group-hover:bg-ink/15" />
                <ul className="mt-5 space-y-2.5 text-sm text-ink/75">
                  {g.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-ink/40 transition-colors duration-300 group-hover:text-ink/80">
                        •
                      </span>{" "}
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <HorizontalRail id="results" label="real results" title="Real results. Real confidence.">
      {RESULTS.map((r) => (
        <motion.article
          variants={itemVariants}
          key={r.label}
          className="shrink-0 w-[85%] sm:w-[55%] lg:w-[40%] group"
        >
          <div className="aspect-[4/3] overflow-hidden bg-ink/10 rounded-[4px]">
            <img
              src={r.img}
              alt={r.label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
            />
          </div>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ink/55 pl-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {r.meta}
          </div>
          <h3 className="font-display text-xl text-ink mt-1 pl-1 transition-transform duration-500 group-hover:translate-x-1">
            {r.label}
          </h3>
          <p className="text-sm text-ink/60 pl-1">{r.sub}</p>
        </motion.article>
      ))}
    </HorizontalRail>
  );
}

const BEFORE_AFTER_DATA = {
  hair: { before: beforeImg, after: afterImg, label: "Hair Restoration" },
  acne: { before: acneImg, after: result5Img, label: "Acne Clearance" },
  allergy: { before: psoriasisImg, after: result3Img, label: "Allergy Treatment" },
};

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [activeTab, setActiveTab] = useState<keyof typeof BEFORE_AFTER_DATA>("hair");
  const wrapRef = useRef<HTMLDivElement>(null);
  const currentData = BEFORE_AFTER_DATA[activeTab];
  const drag = (e: React.PointerEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const move = (clientX: number) => {
      const r = el.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.max(2, Math.min(98, p)));
    };
    move(e.clientX);
    const onMove = (ev: PointerEvent) => move(ev.clientX);
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };
  return (
    <section className="bg-sage py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="font-script text-2xl text-ink-soft">before &amp; after</div>
        <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
          Drag the line. See the difference.
        </h2>
        <div
          ref={wrapRef}
          className="relative mt-10 mx-auto max-w-3xl aspect-[16/10] overflow-hidden bg-ink/20 select-none"
          style={{ touchAction: "none" }}
        >
          <img
            src={currentData.after}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={currentData.before}
              alt="Before"
              className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
              style={{ width: `${100 / (pos / 100)}%` }}
              draggable={false}
            />
          </div>
          <div className="absolute top-4 left-4 bg-ink text-cream text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-cream text-ink text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
            After
          </div>
          <div className="absolute top-0 bottom-0 w-px bg-cream" style={{ left: `${pos}%` }} />
          <button
            onPointerDown={drag}
            aria-label="Drag to compare"
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full bg-cream shadow-lg cursor-ew-resize touch-none"
            style={{ left: `${pos}%` }}
          >
            <span className="flex items-center gap-1 text-ink">
              <Icon name="arrow-left" className="w-3 h-3" />
              <Icon name="arrow-right" className="w-3 h-3" />
            </span>
          </button>
        </div>
        <div className="mt-5 text-sm text-ink/70">{currentData.label}</div>
        <div className="mt-8 flex justify-center gap-3">
          {(["hair", "acne", "allergy"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-colors ${
                activeTab === tab ? "bg-ink text-cream" : "bg-ink/10 text-ink hover:bg-ink/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true, speed: 1.5 }),
    WheelGesturesPlugin(),
  ]);

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <div className="font-script text-2xl text-ink-soft">testimonials</div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
            Loved by our patients.
          </h2>
        </motion.div>
        <div className="mt-12" ref={emblaRef}>
          <div className="flex gap-5 cursor-grab active:cursor-grabbing">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="bg-cream border border-ink/10 p-6 flex flex-col w-[280px] sm:w-[320px] shrink-0 pl-5"
              >
                <div className="text-[oklch(0.55_0.05_150)] tracking-widest text-sm">★★★★★</div>
                <blockquote className="mt-4 text-[13px] leading-relaxed text-ink/85 flex-1">
                  "{t.q}"
                </blockquote>
                <div className="mt-5 h-px bg-ink/15" />
                <figcaption className="mt-4">
                  <div className="font-display text-lg text-ink">{t.name}</div>
                  <div className="text-[10px] tracking-[0.24em] uppercase text-ink/55 mt-1">
                    {t.tag}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true }, [
    WheelGesturesPlugin(),
  ]);

  const scroll = (dir: 1 | -1) => {
    if (!emblaApi) return;
    if (dir === -1) emblaApi.scrollPrev();
    else emblaApi.scrollNext();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div className="text-left">
            <div className="font-script text-2xl text-ink-soft">our space</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">Inside the clinic.</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-left" className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="grid h-11 w-11 place-items-center border border-ink/30 text-ink hover:bg-ink hover:text-cream transition"
            >
              <Icon name="arrow-right" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {GALLERY.map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="overflow-hidden bg-ink/10 shrink-0 aspect-square lg:h-[300px] w-[200px] sm:w-[250px] lg:w-auto"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition duration-1000"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="contact" className="relative">
      <div className="bg-rose pt-20 pb-32 lg:pt-28 lg:pb-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="font-script text-2xl text-cream/90">visit</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-2">
            Find us in Dilsukhnagar.
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 -mt-24 lg:-mt-32 relative">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="bg-cream p-8 sm:p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] space-y-7">
            <a
              href="https://maps.google.com/?q=16-11-578/A, Opposite Red Cross Hospital, Near Raghavendra Hotel, Gaddiannaram Cross Road, Dilsukhnagar, Hyderabad – 500060"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <InfoRow icon="pin" title="Address">
                <span className="group-hover:text-ink-soft transition-colors">
                  16-11-578/A, Opposite Red Cross Hospital,
                  <br />
                  Near Raghavendra Hotel, Gaddiannaram Cross Road,
                  <br />
                  Dilsukhnagar, Hyderabad – 500060
                </span>
              </InfoRow>
            </a>
            <a href="tel:+918985504044" className="block group">
              <InfoRow icon="phone" title="Phone">
                <span className="group-hover:text-ink-soft transition-colors">+91 8985504044</span>
              </InfoRow>
            </a>
            <a
              href="https://instagram.com/hyderabadi.derma.docs"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <InfoRow icon="instagram" title="Instagram">
                <span className="group-hover:text-ink-soft transition-colors">
                  @hyderabadi.derma.docs
                </span>
              </InfoRow>
            </a>
            <InfoRow icon="clock" title="Hours">
              Mon – Sat · 6:30 PM – 9:30 PM
              <br />
              Sunday · 10:00 AM – 2:00 PM
              <br />
              <span className="text-ink/50 text-xs">Appointments only</span>
            </InfoRow>
          </div>
          <div className="bg-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] overflow-hidden min-h-[360px]">
            <iframe
              title="Clinic location"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Dilsukhnagar%20Hyderabad&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink/25 text-ink">
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.3em] uppercase text-ink/55">{title}</div>
        <div className="mt-1.5 text-sm text-ink/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.015_150)] text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="SK Clinic Logo"
              className="h-12 w-12 object-contain rounded-full bg-white p-1"
            />
            <div>
              <div className="font-display italic text-lg text-white">Siri &amp; Koushik's</div>
              <div className="text-[10px] tracking-[0.32em] text-white/60">SKIN · HAIR · LASER</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm text-white/80">
            Where skin meets confidence. A premium dermatology clinic offering medical, surgical and
            aesthetic care in Hyderabad.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://instagram.com/hyderabadi.derma.docs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="grid h-10 w-10 place-items-center border border-white/25 text-white/80 hover:bg-white hover:text-ink transition"
            >
              <Icon name="instagram" className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/918985504044"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="chat"
              className="grid h-10 w-10 place-items-center border border-white/25 text-white/80 hover:bg-white hover:text-ink transition"
            >
              <Icon name="chat" className="w-4 h-4" />
            </a>
            <a
              href="tel:+918985504044"
              aria-label="phone"
              className="grid h-10 w-10 place-items-center border border-white/25 text-white/80 hover:bg-white hover:text-ink transition"
            >
              <Icon name="phone" className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Quick Links</div>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-white transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Contact</div>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p>Dilsukhnagar, Hyderabad – 500060</p>
            <p>+91 8985504044</p>
            <p>Mon–Sat · 6:30–9:30 PM</p>
            <p>Sun · 10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Siri &amp; Koushik's Skin Hair STD Clinic. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingChat() {
  return (
    <a
      href="https://wa.me/918985504044?text=Hi,%20I%20am%20from%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat"
      className="fixed bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-xl hover:bg-ink-soft transition z-50"
    >
      <Icon name="chat" className="w-5 h-5" />
    </a>
  );
}

export default App;
