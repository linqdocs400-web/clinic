import { useState, useRef } from "react";
import { Icon } from "../common/Icon";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
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
        >
          <img
            src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?w=1400&q=75&auto=format&fit=crop"
            alt="After hair restoration"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&q=75&auto=format&fit=crop"
              alt="Before hair restoration"
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
        <div className="mt-5 text-sm text-ink/70">Hair Restoration</div>
      </div>
    </section>
  );
}
