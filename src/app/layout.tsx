import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ветаптека Вітамінка — ветеринарна аптека та зоомагазин',
    template: '%s | Ветаптека Вітамінка',
  },
  description:
    'Ветеринарні препарати, амуніція, корми, іграшки, засоби гігієни та шампуні для собак, котів, гризунів і папуг.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <CartProvider>
          <Header />
          <main className="container main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
