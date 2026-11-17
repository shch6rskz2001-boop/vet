'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

interface Props {
  productId: string;
  label?: string;
}

export default function AddToCartButton({
  productId,
  label = 'У кошик',
}: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <button
      type="button"
      className="btn btn--primary"
      onClick={() => {
        add(productId);
        setAdded(true);
      }}
    >
      {added ? 'Додано ✓' : label}
    </button>
  );
}
