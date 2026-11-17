import type { Metadata } from 'next';
import CartView from '@/components/CartView';

export const metadata: Metadata = {
  title: 'Кошик',
};

export default function CartPage() {
  return (
    <section>
      <h1>Кошик</h1>
      <CartView />
    </section>
  );
}
