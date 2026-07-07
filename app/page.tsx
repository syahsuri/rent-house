import { chapters, gallery } from '@/content';
import { BookNav } from '@/components/BookNav';
import { BookCover } from '@/components/BookCover';
import { Spread } from '@/components/Spread';
import { Gallery } from '@/components/Gallery';
import { SpecSheet } from '@/components/SpecSheet';
import { Location } from '@/components/Location';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const [galeri, spesifikasi, lokasi] = chapters;

export default function Page() {
  return (
    <main>
      <BookNav />
      <BookCover />

      <Spread
        id={galeri.id}
        chapter={galeri.no}
        title={galeri.title}
        pageNo={galeri.pageNo}
        lead={galeri.lead}
        meta={`${String(gallery.length).padStart(2, '0')} foto`}
      >
        <Gallery />
      </Spread>

      <Spread
        id={spesifikasi.id}
        chapter={spesifikasi.no}
        title={spesifikasi.title}
        pageNo={spesifikasi.pageNo}
        lead={spesifikasi.lead}
      >
        <SpecSheet />
      </Spread>

      <Spread
        id={lokasi.id}
        chapter={lokasi.no}
        title={lokasi.title}
        pageNo={lokasi.pageNo}
        lead={lokasi.lead}
      >
        <Location />
      </Spread>

      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
