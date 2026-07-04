import { HorizontalRail } from "../common/HorizontalRail";
import { RESULTS } from "../../data/results";

export function Results() {
  return (
    <HorizontalRail id="results" label="real results" title="Real results. Real confidence.">
      {RESULTS.map((r) => (
        <article key={r.label} className="snap-start shrink-0 w-[78%] sm:w-[44%] lg:w-[26%]">
          <div className="aspect-[4/3] overflow-hidden bg-ink/10">
            <img src={r.img} alt={r.label} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ink/55">{r.meta}</div>
          <h3 className="font-display text-xl text-ink mt-1">{r.label}</h3>
          <p className="text-sm text-ink/60">{r.sub}</p>
        </article>
      ))}
    </HorizontalRail>
  );
}
