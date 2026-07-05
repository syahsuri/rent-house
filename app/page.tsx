import { Hero } from '@/components/Hero';
import { Gallery } from '@/components/Gallery';
import { SpecSheet } from '@/components/SpecSheet';
import { Location } from '@/components/Location';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Page() {
  return (
    <main>
      <Hero />
      <Gallery />
      <SpecSheet />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
