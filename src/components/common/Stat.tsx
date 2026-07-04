import { useCounter } from "../../hooks/useCounter";

export function Stat({ n, l }: { n: string; l: string }) {
  const target = parseInt(n.replace(/\D/g, ""));
  const suffix = n.replace(/[\d]/g, "");
  const count = useCounter(target);

  return (
    <div>
      <div className="font-display text-4xl sm:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-[10px] tracking-[0.3em] uppercase opacity-80">{l}</div>
    </div>
  );
}
