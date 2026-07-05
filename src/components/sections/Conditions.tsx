import { useRef } from "react";
import { Icon } from "../common/Icon";
import { CONDITIONS } from "../../data/conditions";

export function Conditions() {
  const railRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="conditions" className="py-20 lg:py-28 bg-panel/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-script text-2xl text-ink-soft">conditions</div>
            <h2 className="font-display text-4xl sm:text-5xl text-ink mt-2 max-w-xl leading-tight">
              Diseases we treat.
            </h2>
          </div>
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

        <div
          ref={railRef}
          className="mt-10 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
        >
          {CONDITIONS.map((c) => (
            <article key={c.name} className="shrink-0 w-[78%] sm:w-[50%] lg:w-[32%] group/card">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink/10 group rounded-[4px] shadow-sm">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl text-cream">
                  {c.name}
                </h3>
              </div>
              <p className="mt-4 text-sm text-ink/65 pl-1">{c.blurb}</p>
              
                href="#contact"
                className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink hover:text-ink-soft pl-1 transition-colors"
              >
                Learn more &rsaquo;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
