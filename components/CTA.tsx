import { cta } from '@/content';
import { waLink } from '@/lib/wa';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section id="kontak" className="bg-accent text-paper">
      <div className="mx-auto w-full max-w-page px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
            {cta.heading}
          </h2>
          <p className="mt-6 max-w-md text-paper/85">{cta.body}</p>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-paper px-7 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
          >
            {cta.button}
            <span aria-hidden className="font-mono">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
