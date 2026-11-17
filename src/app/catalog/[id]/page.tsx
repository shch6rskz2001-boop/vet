import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import {
  formatPrice,
  getCategory,
  getProductById,
  products,
} from '@/lib/products';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductById(params.id);
  if (!product) return { title: 'Товар не знайдено' };
  return { title: product.name, description: product.description };
}

export default function ProductPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const category = getCategory(product.category);

  return (
    <article className="product">
      <p>
        <Link href="/catalog">← Назад до каталогу</Link>
      </p>
      <div className="product__layout">
        <div className="product__media" aria-hidden="true">
          {product.emoji}
        </div>
        <div>
          <p className="card__brand">{product.brand}</p>
          <h1>{product.name}</h1>
          {category && <p className="tag">{category.label}</p>}
          <p>{product.description}</p>
          <p>
            <strong>Для кого:</strong> {product.animals}
          </p>
          {product.prescription && (
            <p className="notice notice--warn">
              Препарат застосовується за рекомендацією ветеринарного лікаря.
            </p>
          )}
          <p className="product__price">{formatPrice(product.price)}</p>
          <AddToCartButton productId={product.id} label="Додати в кошик" />
        </div>
      </div>
    </article>
  );
}
