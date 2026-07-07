'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { hero } from '@/content';
import { Photo } from './Placeholder';

// The book's front cover — a full jacket showing the house. Closed at first;
// as you scroll (or tap "Buka buku") it lifts straight up and off screen to
// reveal the first chapter spread. The lift is desktop-only and disabled for
// reduced-motion — mobile just shows the jacket as the first screen.
export function BookCover() {
  const reduce = useReducedMotion();
  const [enable3d, setEnable3d] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // Turn the cover like a page: it hinges up on its top edge and fades away,
  // revealing the first chapter spread beneath.
  const rotateX = useTransform(scrollYProgress, [0, 0.6], [0, -92]);
  const coverOpacity = useTransform(scrollYProgress, [0.42, 0.62], [1, 0]);
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
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    } else {
      document.getElementById('galeri')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mobile / reduced-motion: the jacket is simply the first screen.
  if (!enable3d) {
    return (
      <header className="relative">
        <div className="relative flex min-h-[92vh] flex-col overflow-hidden bg-cover text-paper">
          <span className="ribbon right-8 h-24" />
          <Jacket onOpen={openBook} />
        </div>
      </header>
    );
  }

  return (
    <header ref={ref} className="relative h-[175vh]">
      <div className="book-scene sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ rotateX, opacity: coverOpacity, transformOrigin: 'top center' }}
          className="absolute inset-0 flex flex-col bg-cover text-paper shadow-cover [backface-visibility:hidden] [will-change:transform,opacity]"
        >
          <span className="ribbon right-12 h-40" />
          <Jacket onOpen={openBook} />
          <motion.p
            aria-hidden
            style={{ opacity: hintOpacity }}
            className="pb-8 text-center font-mono text-[0.65rem] uppercase tracking-[0.3em] text-paper/50"
          >
            Gulir untuk membuka ↓
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}

// The printed jacket: title lockup + main photo + description + spec strip.
function Jacket({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 py-8 sm:px-12">
      <p className="mb-4 pr-14 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/60 sm:pr-0">
        {hero.cover.kicker}
      </p>
      <div className="h-px w-16 bg-paper/40" />

      <div className="mt-6 grid grid-cols-1 items-center gap-x-10 gap-y-7 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(2.25rem,6vw,4.5rem)]">
            {hero.headline.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/75">{hero.intro}</p>

          <button
            type="button"
            onClick={onOpen}
            className="mt-7 inline-flex items-center gap-3 border border-paper/40 px-6 py-3.5 font-medium text-paper transition-colors hover:bg-paper hover:text-cover focus-visible:bg-paper focus-visible:text-cover"
          >
            {hero.cover.open}
            <span aria-hidden className="font-mono">
              →
            </span>
          </button>
        </div>

        <div className="md:col-span-5">
          <Photo
            alt="Tampak muka rumah sewa"
            label="Foto utama"
            crop="portrait"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="mx-auto w-full max-w-[15rem] shadow-cover md:max-w-[16rem]"
          />
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-3 border-y border-paper/25">
        {hero.specStrip.map((s, i) => (
          <div
            key={s.label}
            className={`py-3 ${i > 0 ? 'border-l border-paper/25 pl-5' : 'pr-5'}`}
          >
            <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-paper/50">
              {s.label}
            </dt>
            <dd className="mt-1 font-display text-2xl text-paper sm:text-3xl">
              {s.value}
              <span className="ml-1 font-sans text-sm text-paper/55">{s.unit}</span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/50">
        {hero.cover.volume}
      </p>
    </div>
  );
}
