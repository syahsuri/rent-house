'use client';

import { useEffect, useState } from 'react';
import { chapters } from '@/content';

// Slim table-of-contents that slides in once the reader passes the cover,
// and tracks which chapter is on screen. Anchors reuse the section ids.
export function BookNav() {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(chapters[0].id);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 1.1);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    for (const c of chapters) {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Daftar isi"
      className={`fixed left-1/2 top-4 z-40 -translate-x-1/2 transition-all duration-500 ${
        shown ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
      }`}
    >
      <ul className="flex items-center gap-1 rounded-full border border-hairline/50 bg-page/90 px-2 py-1.5 shadow-page backdrop-blur">
        <li className="hidden px-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/40 sm:block">
          Isi
        </li>
        {chapters.map((c) => {
          const on = active === c.id;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                aria-current={on ? 'true' : undefined}
                className={`flex items-baseline gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
                  on ? 'bg-ribbon text-paper' : 'text-ink/70 hover:text-accent'
                }`}
              >
                <span className={`font-mono text-[0.6rem] ${on ? 'text-paper/70' : 'text-ink/40'}`}>
                  {c.no}
                </span>
                <span className="hidden sm:inline">{c.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
