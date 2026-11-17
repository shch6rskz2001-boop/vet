import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { categories, products } from '@/lib/products';

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div>
          <h1>Все для здоров’я та щастя вашого улюбленця</h1>
          <p>
            Ветеринарні препарати, корми, амуніція, іграшки та засоби гігієни
            для собак, котів, гризунів і папуг — в одному місці.
          </p>
          <Link href="/catalog" className="btn btn--primary">
            Перейти до каталогу
          </Link>
        </div>
        <p className="hero__emoji" aria-hidden="true">
          🐶🐱🦜
        </p>
      </section>

      <section aria-labelledby="categories-title">
        <h2 id="categories-title">Категорії</h2>
        <ul className="categories">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href="/catalog" className="category">
                <span className="category__emoji" aria-hidden="true">
                  {c.emoji}
                </span>
                <span>{c.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-title">
        <h2 id="featured-title">Популярні товари</h2>
        <ul className="grid">
          {featured.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="advantages" aria-labelledby="adv-title">
        <h2 id="adv-title">Чому обирають нас</h2>
        <ul className="advantages__list">
          <li>
            <h3>🩺 Підтримка лікарів</h3>
            <p>Допоможемо з вибором препаратів та кормів.</p>
          </li>
          <li>
            <h3>🚚 Швидка доставка</h3>
            <p>Відправляємо замовлення по всій Україні.</p>
          </li>
          <li>
            <h3>✅ Якісні товари</h3>
            <p>Працюємо лише з перевіреними виробниками.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
