import { HorizontalRail } from "../common/HorizontalRail";
import { CONDITIONS } from "../../data/conditions";

export function Conditions() {
  return (
    <HorizontalRail id="conditions" label="conditions" title="Diseases we treat.">
      {CONDITIONS.map((c) => (
        <article key={c.name} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%]">
          <div className="relative aspect-[3/4] overflow-hidden bg-ink/10 group">
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <h3 className="absolute bottom-4 left-5 font-display text-2xl text-cream">{c.name}</h3>
          </div>
          <p className="mt-4 text-sm text-ink/65">{c.blurb}</p>
          <a
            href="#contact"
            className="mt-3 inline-block text-[11px] tracking-[0.28em] uppercase text-ink hover:text-ink-soft"
          >
            Learn more ›
          </a>
        </article>
      ))}
    </HorizontalRail>
  );
}
