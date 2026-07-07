'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { hero } from '@/content';
import { Photo } from './Placeholder';

// The book's front cover. Closed at first; as you scroll (or tap "Buka buku")
// the hard cover swings up on its top hinge to reveal the title page beneath.
// 3D is desktop-only and disabled for reduced-motion — mobile just shows the
// title page directly.
export function BookCover() {
  const reduce = useReducedMotion();
  const [enable3d, setEnable3d] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Lift the closed cover straight up and off screen — clean, no skew.
  const y = useTransform(scrollYProgress, [0, 0.6], ['0%', '-105%']);
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [0, -6]);
  const coverOpacity = useTransform(scrollYProgress, [0.35, 0.6], [1, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setEnable3d(mq.matches && !reduce);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduce]);

  const openBook = () => {
    if (enable3d) {
      window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
    } else {
      document.getElementById('galeri')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titlePage = (
    <div className="mx-auto flex h-full w-full max-w-page flex-col justify-center px-5 py-16 sm:px-8">
      <div className="grid grid-cols-1 items-end gap-x-8 gap-y-10 md:grid-cols-12">
        <div className="md:col-span-7 md:pb-6">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {hero.eyebrow}
          </p>
          <p className="font-display text-2xl leading-snug text-ink/80 sm:text-3xl">
            Halaman judul
          </p>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ink/70">{hero.intro}</p>
        </div>

        <div className="md:col-span-5 md:-ml-16 md:-mb-10 lg:-ml-24">
          <Photo
            alt="Tampak muka rumah sewa"
            label="Foto utama"
            crop="portrait"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="w-full shadow-page"
          />
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-3 border-y border-hairline/60">
        {hero.specStrip.map((s, i) => (
          <div
            key={s.label}
            className={`py-4 ${i > 0 ? 'border-l border-hairline/60 pl-5' : 'pr-5'} sm:py-5`}
          >
            <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/45">
              {s.label}
            </dt>
            <dd className="mt-1 font-display text-2xl sm:text-3xl">
              {s.value}
              <span className="ml-1 font-sans text-sm text-ink/50">{s.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );

  // Mobile / reduced-motion: no cover leaf, just the title page in normal flow.
  if (!enable3d) {
    return (
      <header className="relative">
        <StaticCover onOpen={openBook} />
        {titlePage}
      </header>
    );
  }

  return (
    <header ref={ref} className="relative h-[190vh]">
      <div className="book-scene sticky top-0 h-screen overflow-hidden">
        {titlePage}

        <motion.div
          aria-hidden
          style={{ y, rotateX, opacity: coverOpacity, transformOrigin: 'top center' }}
          className="absolute inset-0 flex flex-col bg-cover text-paper shadow-cover [backface-visibility:hidden]"
        >
          <span className="ribbon left-12 h-40" />
          <CoverFace onOpen={openBook} />
          <motion.p
            style={{ opacity: hintOpacity }}
            className="pb-10 text-center font-mono text-[0.65rem] uppercase tracking-[0.3em] text-paper/50"
          >
            Gulir untuk membuka ↓
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}

// The printed face of the closed cover — shared framing for both variants.
function CoverFace({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-8 sm:px-16">
      <p className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/60">
        {hero.cover.kicker}
      </p>
      <div className="h-px w-16 bg-paper/40" />
      <h1 className="mt-8 font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,10vw,7rem)]">
        {hero.headline.map((l, i) => (
          <span key={i} className="block">
            {l}
          </span>
        ))}
      </h1>
      <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/60">
        {hero.cover.volume}
      </p>
      <div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-10 inline-flex items-center gap-3 border border-paper/40 px-7 py-4 font-medium text-paper transition-colors hover:bg-paper hover:text-cover focus-visible:bg-paper focus-visible:text-cover"
        >
          {hero.cover.open}
          <span aria-hidden className="font-mono">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

// Non-3D cover: a full-height title-page band shown above content on mobile.
function StaticCover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex min-h-[85vh] flex-col bg-cover text-paper">
      <span className="ribbon left-8 h-28" />
      <CoverFace onOpen={onOpen} />
    </div>
  );
}
