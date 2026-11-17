'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice, getProductById, Product } from '@/lib/products';
import CheckoutForm from './CheckoutForm';

interface Line {
  product: Product;
  qty: number;
}

export default function CartView() {
  const { items, setQty, remove, clear } = useCart();
  const [done, setDone] = useState(false);

  const lines: Line[] = items.flatMap((item) => {
    const product = getProductById(item.id);
    return product ? [{ product, qty: item.qty }] : [];
  });

  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  if (done) {
    return (
      <div className="notice">
        <h2>Дякуємо за замовлення! 🎉</h2>
        <p>Наш менеджер зателефонує вам для підтвердження.</p>
        <Link href="/catalog" className="btn btn--primary">
          Повернутись до каталогу
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="notice">
        <h2>Кошик порожній</h2>
        <p>Додайте товари з каталогу.</p>
        <Link href="/catalog" className="btn btn--primary">
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <ul className="cart__list">
        {lines.map(({ product, qty }) => (
          <li key={product.id} className="cart__item">
            <span className="cart__emoji" aria-hidden="true">
              {product.emoji}
            </span>
            <div className="cart__info">
              <Link href={`/catalog/${product.id}`}>{product.name}</Link>
              <p>{formatPrice(product.price)}</p>
            </div>
            <div className="qty">
              <button
                type="button"
                aria-label="Зменшити кількість"
                onClick={() => setQty(product.id, qty - 1)}
              >
                −
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                aria-label="Збільшити кількість"
                onClick={() => setQty(product.id, qty + 1)}
              >
                +
              </button>
            </div>
            <p className="cart__sum">{formatPrice(product.price * qty)}</p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => remove(product.id)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <div className="cart__total">
        <p>
          Разом: <strong>{formatPrice(total)}</strong>
        </p>
        <button type="button" className="btn btn--ghost" onClick={clear}>
          Очистити кошик
        </button>
      </div>

      <CheckoutForm
        onSubmitted={() => {
          clear();
          setDone(true);
        }}
      />
    </div>
  );
}
