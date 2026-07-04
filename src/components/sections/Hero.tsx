import doctorImg from "../../assets/doctor.png";
import { Stat } from "../common/Stat";
import { SPECIALTIES } from "../../data/specialties";

export function Hero() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16">
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-end">
          {/* Portrait */}
          <div className="relative animate-slide-in-right">
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
            <div className="absolute -bottom-5 -left-2 lg:left-6 bg-cream shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] p-4 pr-6 max-w-[260px] hidden sm:block">
              <div className="text-[oklch(0.72_0.08_70)] tracking-widest">★★★★★</div>
              <p className="mt-2 text-[13px] leading-snug text-ink/90">
                "Genuinely the most thoughtful dermatologist I've met."
              </p>
              <div className="mt-2 text-[10px] tracking-[0.24em] text-ink/55">
                — VERIFIED PATIENT
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="pb-10 lg:pb-16">
            <div className="font-script text-3xl text-ink-soft animate-fade-in-up">welcome</div>
            <h1
              className="font-display text-[40px] sm:text-6xl lg:text-7xl leading-[1.02] text-ink mt-2 tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Advanced Skin, Hair
              <br className="hidden sm:block" /> &amp; Laser Care
            </h1>
            <div
              className="font-script text-3xl sm:text-4xl text-ink-soft/90 mt-3 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              for every stage of life.
            </div>
            <p
              className="mt-6 max-w-xl text-ink/70 text-[15px] leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Expert dermatology, trichology, cosmetic and laser treatments — delivered with
              precision, care and the trust of thousands of patients across Hyderabad.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
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
            </div>
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

      {/* Specialty marquee */}
      <div className="bg-rose/30 border-y border-ink/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 overflow-hidden">
          <div className="flex items-center gap-8 sm:gap-12 text-ink font-display text-lg sm:text-xl whitespace-nowrap animate-[marquee_28s_linear_infinite]">
            {[...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
              <span key={i} className="flex items-center gap-8 sm:gap-12">
                <span className="italic">{s}</span>
                <span className="text-ink/30">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes marquee {from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
