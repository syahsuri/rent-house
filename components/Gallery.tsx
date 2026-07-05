import { gallery } from '@/content';
import { Photo } from './Placeholder';
import { Reveal } from './Reveal';

export function Gallery() {
  return (
    <section id="galeri" className="mx-auto w-full max-w-page px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mb-10 flex items-end justify-between gap-6">
        <h2 className="font-display text-3xl sm:text-4xl">Lihat isinya.</h2>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/45">
          {String(gallery.length).padStart(2, '0')} foto
        </span>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        {gallery.map((g, i) => (
          <Reveal
            key={g.label}
            as="figure"
            delay={(i % 3) * 0.06}
            className={g.span}
          >
            <Photo
              src={g.src}
              alt={g.alt}
              label={g.label}
              crop={g.crop}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
