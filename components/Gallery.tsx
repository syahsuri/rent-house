import { gallery } from '@/content';
import { Photo } from './Placeholder';

// Content of the Galeri spread — an irregular 12-col grid of plates.
export function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
      {gallery.map((g) => (
        <figure key={g.label} className={g.span}>
          <Photo
            src={g.src}
            alt={g.alt}
            label={g.label}
            crop={g.crop}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full"
          />
        </figure>
      ))}
    </div>
  );
}
