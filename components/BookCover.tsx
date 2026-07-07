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
  // Lift the closed cover straight up and off screen — clean, no skew.
  const y = useTransform(scrollYProgress, [0, 0.55], ['0%', '-105%']);
  const rotateX = useTransform(scrollYProgress, [0, 0.55], [0, -5]);
  const coverOpacity = useTransform(scrollYProgress, [0.35, 0.55], [1, 0]);
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
        <div className="relative flex min-h-[92vh] flex-col bg-cover text-paper">
          <span className="ribbon left-8 h-28" />
          <Jacket onOpen={openBook} />
        </div>
      </header>
    );
  }

  return (
    <header ref={ref} className="relative h-[140vh]">
      <div className="book-scene sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y, rotateX, opacity: coverOpacity, transformOrigin: 'top center' }}
          className="absolute inset-0 flex flex-col bg-cover text-paper shadow-cover [backface-visibility:hidden]"
        >
          <span className="ribbon left-12 h-40" />
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
    <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-6 py-10 sm:px-12 sm:py-12">
      <p className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/60">
        {hero.cover.kicker}
      </p>
      <div className="h-px w-16 bg-paper/40" />

      <div className="mt-8 grid grid-cols-1 items-center gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5rem)]">
            {hero.headline.map((l, i) => (
              <span key={i} className="block">
                {l}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-paper/75">{hero.intro}</p>

          <button
            type="button"
            onClick={onOpen}
            className="mt-8 inline-flex items-center gap-3 border border-paper/40 px-7 py-4 font-medium text-paper transition-colors hover:bg-paper hover:text-cover focus-visible:bg-paper focus-visible:text-cover"
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
            className="mx-auto w-full max-w-[20rem] shadow-cover md:max-w-none"
          />
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-3 border-y border-paper/25">
        {hero.specStrip.map((s, i) => (
          <div
            key={s.label}
            className={`py-4 ${i > 0 ? 'border-l border-paper/25 pl-5' : 'pr-5'}`}
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

      <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/50">
        {hero.cover.volume}
      </p>
    </div>
  );
}
