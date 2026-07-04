import { TESTIMONIALS } from "../../data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <div className="font-script text-2xl text-ink-soft">testimonials</div>
          <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2">
            Loved by our patients.
          </h2>
        </div>
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-5 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="bg-cream border border-ink/10 p-6 flex flex-col w-[280px] sm:w-[320px] shrink-0"
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
      <style>{`@keyframes scroll {from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </section>
  );
}
