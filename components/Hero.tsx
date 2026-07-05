'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { hero } from '@/content';
import { Photo } from './Placeholder';

export function Hero() {
  const reduce = useReducedMotion();

  // Text lines mask up; container staggers children.
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const line: Variants = {
    hidden: reduce ? { opacity: 0 } : { y: '110%' },
    show: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const fade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <header className="mx-auto w-full max-w-page px-5 pt-8 sm:px-8 sm:pt-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 items-end gap-x-8 gap-y-10 md:grid-cols-12"
      >
        {/* Typographic lockup */}
        <div className="md:col-span-7 md:pb-6">
          <motion.p
            variants={fade}
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="font-display font-semibold leading-[0.92] tracking-[-0.02em]">
            {hero.headline.map((l, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={line}
                  className="block text-[clamp(2.5rem,12vw,8rem)]"
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fade}
            className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-ink/70"
          >
            {hero.intro}
          </motion.p>
        </div>

        {/* Portrait photo, offset & overlapping the text column on desktop */}
        <motion.div
          variants={fade}
          className="md:col-span-5 md:-ml-16 md:-mb-10 lg:-ml-24"
        >
          <Photo
            alt="Tampak muka rumah sewa"
            label="Foto utama"
            crop="portrait"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="w-full shadow-[0_30px_60px_-40px_rgba(43,35,32,0.5)]"
          />
        </motion.div>
      </motion.div>

      {/* Spec strip — technical-drawing legend */}
      <motion.dl
        variants={fade}
        initial="hidden"
        animate="show"
        transition={{ delay: reduce ? 0 : 0.6 }}
        className="mt-12 grid grid-cols-3 border-y border-hairline/60"
      >
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
      </motion.dl>
    </header>
  );
}
