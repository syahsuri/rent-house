import { site } from '@/content';

export function waLink(message: string = site.waMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
