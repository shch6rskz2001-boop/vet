import Link from 'next/link';
import { formatPrice, Product } from '@/lib/products';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <Link href={`/catalog/${product.id}`} className="card__media">
        <span className="card__emoji" aria-hidden="true">
          {product.emoji}
        </span>
        {product.prescription && (
          <span className="tag tag--warn">За рекомендацією лікаря</span>
        )}
      </Link>
      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__title">
          <Link href={`/catalog/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="card__animals">{product.animals}</p>
        <div className="card__footer">
          <p className="card__price">{formatPrice(product.price)}</p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </article>
  );
}
