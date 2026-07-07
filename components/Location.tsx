import { location } from '@/content';
import { Photo } from './Placeholder';

// Content of the Lokasi spread — map plate + address & proximity list.
export function Location() {
  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
      <div className="md:col-span-7">
        {location.mapImage ? (
          <Photo src={location.mapImage} alt="Peta lokasi rumah" label="Peta" crop="landscape" />
        ) : (
          <div className="placeholder aspect-[4/3] w-full" role="img" aria-label="Peta lokasi rumah">
            <span className="relative z-10 m-4 font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
              Peta lokasi
            </span>
          </div>
        )}
      </div>

      <div className="md:col-span-5">
        <p className="max-w-xs text-[0.98rem] leading-relaxed text-ink/70">{location.address}</p>

        <ul className="mt-8">
          {location.proximity.map((p) => (
            <li
              key={p.place}
              className="flex items-baseline justify-between border-t border-hairline/60 py-3"
            >
              <span className="text-sm text-ink/80">{p.place}</span>
              <span className="font-mono text-sm tabular-nums text-ink/60">{p.time}</span>
            </li>
          ))}
        </ul>

        <a
          href={location.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border-b border-accent pb-0.5 font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
        >
          Buka di Google Maps →
        </a>
      </div>
    </div>
  );
}
