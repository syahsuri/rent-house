'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// One leaf of the book. Wraps a section's content in a paper page with a
// centre gutter, chapter header and printed page number. As it enters view
// the page turns down on its top hinge (desktop). On mobile / reduced-motion
// it simply fades and rises — no 3D.
export function Spread({
  id,
  chapter,
  title,
  pageNo,
  lead,
  meta,
  children,
}: {
  id: string;
  chapter: string;
  title: string;
  pageNo: string;
  lead?: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const [turn, setTurn] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setTurn(mq.matches && !reduce);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduce]);

  const initial = turn ? { rotateX: -82, opacity: 0 } : { opacity: 0, y: 28 };
  const whileInView = turn ? { rotateX: 0, opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section id={id} className="book-scene mx-auto w-full max-w-page scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10">
      <motion.article
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, margin: '-12% 0px' }}
        transition={{ duration: turn ? 0.95 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top center', willChange: 'transform, opacity' }}
        className="page-leaf relative overflow-hidden px-5 py-12 sm:px-10 sm:py-16"
      >
        <span className="gutter hidden md:block" />

        {/* Chapter header — printed like a running head. */}
        <header className="relative mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-accent">{chapter}</span>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
              {lead && <p className="mt-2 max-w-md text-sm text-ink/55">{lead}</p>}
            </div>
          </div>
          {meta && (
            <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-widest text-ink/45">
              {meta}
            </span>
          )}
        </header>

        <div className="relative">{children}</div>

        {/* Printed page number in the outer corner. */}
        <span className="pointer-events-none absolute bottom-4 right-6 font-mono text-[0.65rem] tracking-widest text-ink/35">
          — {pageNo} —
        </span>
      </motion.article>
    </section>
  );
}
