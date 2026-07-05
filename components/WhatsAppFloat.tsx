import { waLink } from '@/lib/wa';

// Small, quiet floating button — mobile only. No bouncing green blob.
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 border border-ink/10 bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-[0_10px_30px_-12px_rgba(43,35,32,0.6)] transition-transform hover:-translate-y-0.5 focus-visible:-translate-y-0.5 md:hidden"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="currentColor"
        className="text-accent"
      >
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7a11.4 11.4 0 0 1-4.7-4.1c-.4-.6-.9-1.5-.9-2.4 0-.9.5-1.3.7-1.5.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .6.5l.7 1.8c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.6-.1l1.7.8c.3.1.4.2.5.3 0 .2 0 .7-.2 1.3Z" />
      </svg>
      Chat
    </a>
  );
}
