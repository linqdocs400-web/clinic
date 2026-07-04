import { Icon } from "../common/Icon";
import { NAV } from "../../data/navigation";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.015_150)] text-cream/80 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-cream/30">
              <span className="font-display italic text-[oklch(0.78_0.1_70)]">SK</span>
            </div>
            <div>
              <div className="font-display italic text-lg text-cream">Siri &amp; Koushik's</div>
              <div className="text-[10px] tracking-[0.32em] text-cream/60">SKIN · HAIR · LASER</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed max-w-sm">
            Where skin meets confidence. A premium dermatology clinic offering medical, surgical and
            aesthetic care in Hyderabad.
          </p>
          <div className="mt-5 flex gap-2">
            {["instagram", "chat", "phone"].map((i) => (
              <a
                key={i}
                href="#contact"
                aria-label={i}
                className="grid h-10 w-10 place-items-center border border-cream/25 hover:bg-cream hover:text-ink transition"
              >
                <Icon name={i} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-cream/60">Quick Links</div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-cream/60">Contact</div>
          <div className="mt-5 space-y-2 text-sm">
            <p>Dilsukhnagar, Hyderabad – 500060</p>
            <p>+91 8985504044</p>
            <p>Mon–Sat · 6:30–9:30 PM</p>
            <p>Sun · 10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 text-center text-xs text-cream/55">
          © {new Date().getFullYear()} Siri &amp; Koushik's Skin Hair STD Clinic. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
