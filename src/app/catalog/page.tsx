import type { Metadata } from 'next';
import CatalogView from '@/components/CatalogView';

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог ветеринарних препаратів, кормів, амуніції та іграшок.',
};

export default function CatalogPage() {
  return (
    <section>
      <h1>Каталог</h1>
      <CatalogView />
    </section>
  );
}
