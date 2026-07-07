import Image from 'next/image';

const ratio: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
};

// ── Book-plate line drawings ────────────────────────────────────
// Simple single-weight illustrations, drawn like engravings in an old
// property catalogue. Chosen by keyword in the photo label so each room
// gets a fitting sketch until a real photo is dropped in.
type Kind = 'house' | 'sofa' | 'bed' | 'kitchen' | 'bath' | 'car' | 'map';

function kindFor(label: string): Kind {
  const l = label.toLowerCase();
  if (l.includes('dapur')) return 'kitchen';
  if (l.includes('mandi')) return 'bath';
  if (l.includes('carport') || l.includes('mobil') || l.includes('halaman')) return 'car';
  if (l.includes('kamar')) return 'bed';
  if (l.includes('tamu') || l.includes('ruang')) return 'sofa';
  if (l.includes('peta') || l.includes('lokasi') || l.includes('map')) return 'map';
  return 'house';
}

const art: Record<Kind, JSX.Element> = {
  house: (
    <>
      <path d="M18 46 L50 22 L82 46" />
      <path d="M26 44 V80 H74 V44" />
      <path d="M44 80 V60 H56 V80" />
      <rect x="32" y="52" width="10" height="10" />
      <rect x="58" y="52" width="10" height="10" />
      <path d="M50 22 V14" />
    </>
  ),
  sofa: (
    <>
      <path d="M20 44 V40 a6 6 0 0 1 6-6 h48 a6 6 0 0 1 6 6 V44" />
      <path d="M16 44 a6 6 0 0 1 6 6 v14 h56 V50 a6 6 0 0 1 6-6" />
      <path d="M22 64 V72 M78 64 V72" />
      <path d="M34 44 h32" />
    </>
  ),
  bed: (
    <>
      <path d="M16 42 V70 M84 54 V70 M16 70 H84" />
      <path d="M16 54 H84" />
      <path d="M22 54 V46 a4 4 0 0 1 4-4 h20 a4 4 0 0 1 4 4 V54" />
      <path d="M50 54 V48 a4 4 0 0 1 4-4 h22 a4 4 0 0 1 4 4 v6" />
    </>
  ),
  kitchen: (
    <>
      <path d="M18 46 H82 M18 46 V74 H82 V46" />
      <path d="M18 58 H82" />
      <path d="M30 46 V58 M52 46 V74 M70 46 V74" />
      <circle cx="24" cy="52" r="1.6" />
      <circle cx="40" cy="52" r="1.6" />
      <path d="M60 64 h4 M76 64 h4" />
    </>
  ),
  bath: (
    <>
      <path d="M22 44 V54 M22 54 H80 a4 4 0 0 1 0 0 v6 a12 12 0 0 1-12 12 H40 a12 12 0 0 1-12-12 V54" />
      <path d="M22 48 a4 4 0 0 1 8 0 v6" />
      <path d="M74 44 V50 M70 47 H78" />
      <path d="M40 74 v4 M64 74 v4" />
    </>
  ),
  car: (
    <>
      <path d="M18 62 h64 M22 62 l6-16 a4 4 0 0 1 4-3 h30 a4 4 0 0 1 4 3 l6 16" />
      <path d="M34 46 h20" />
      <circle cx="34" cy="64" r="6" />
      <circle cx="66" cy="64" r="6" />
      <path d="M14 40 h72 M20 40 v-6 M80 40 v-6" />
    </>
  ),
  map: (
    <>
      <path d="M22 30 L42 38 L60 30 L80 38 V70 L60 62 L42 70 L22 62 Z" />
      <path d="M42 38 V70 M60 30 V62" />
      <circle cx="52" cy="48" r="6" />
      <path d="M52 54 V60" />
    </>
  ),
};

function Plate({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 100 92"
      className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 text-ink/35"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {art[kindFor(label)]}
    </svg>
  );
}

// Renders a real next/image when src exists, otherwise a book-plate
// illustration with a mono caption (no stock photos).
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
      <Plate label={label} />
      <span className="relative z-10 m-4 font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
        {label}
      </span>
    </div>
  );
}
