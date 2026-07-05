import { site } from '@/content';
import { waLink } from '@/lib/wa';

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-page px-5 py-8 sm:px-8">
      <div className="rule mb-6" />
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-widest text-ink/50">
        <span>{site.ownerName}</span>
        <span aria-hidden>·</span>
        <a href={waLink()} className="transition-colors hover:text-accent">
          WhatsApp
        </a>
        <span aria-hidden>·</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
