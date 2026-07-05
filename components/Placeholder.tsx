import Image from 'next/image';

const ratio: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

// Renders a real next/image when src exists, otherwise an elegant
// solid-tone placeholder block with a label (no stock photos).
export function Photo({
  src,
  alt,
  label,
  crop = 'landscape',
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src?: string;
  alt: string;
  label: string;
  crop?: 'portrait' | 'landscape' | 'square';
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative ${ratio[crop]} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`placeholder ${ratio[crop]} ${className}`} role="img" aria-label={alt}>
      <span className="relative z-10 m-4 font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
        {label}
      </span>
    </div>
  );
}
