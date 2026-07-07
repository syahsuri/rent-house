import { specSheet } from '@/content';

// Content of the Spesifikasi spread — architect-style data sheet, two groups.
export function SpecSheet() {
  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
      {specSheet.map((group) => (
        <div key={group.group}>
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
        </div>
      ))}
    </div>
  );
}
