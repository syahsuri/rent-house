import { specSheet } from '@/content';
import { Reveal } from './Reveal';

export function SpecSheet() {
  return (
    <section id="spesifikasi" className="border-y border-hairline/50 bg-[#EFE9DD]">
      <div className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-xs text-accent">01</span>
          <h2 className="font-display text-3xl sm:text-4xl">Spesifikasi</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
          {specSheet.map((group) => (
            <Reveal key={group.group} as="div">
              <h3 className="mb-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink/45">
                {group.group}
              </h3>
              <dl>
                {group.rows.map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between border-t border-hairline/60 py-3"
                  >
                    <dt className="text-sm text-ink/70">{row.k}</dt>
                    <dd className="font-mono text-sm tabular-nums">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
