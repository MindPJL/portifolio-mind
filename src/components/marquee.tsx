const items = [
  "CLEAR NAMES",
  "SMALL PARTS",
  "HONEST ERRORS",
  "PLAIN FILES",
  "A WAY OUT",
  "EMPTY, WRONG, WAITING",
];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#fa3457] via-[#f3675d] to-[#b683ed] py-4 text-[#240e24] [transform:rotate(-1.4deg)_scale(1.02)]">
      <div className="marquee-track flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-10 pr-10 font-display text-[28px] font-semibold tracking-tight uppercase sm:text-[30px]"
          >
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span aria-hidden="true">✳</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
