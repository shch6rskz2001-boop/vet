'use client';

import { useMemo, useState } from 'react';
import { categories, CategorySlug, products } from '@/lib/products';
import ProductCard from './ProductCard';

type SortKey = 'default' | 'price-asc' | 'price-desc' | 'name';

export default function CatalogView() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategorySlug | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('default');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      const matchCategory = category === 'all' || p.category === category;
      const matchQuery =
        q === '' ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.animals.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });

    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'name':
        return [...list].sort((a, b) => a.name.localeCompare(b.name, 'uk'));
      default:
        return list;
    }
  }, [query, category, sort]);

  return (
    <div>
      <div className="toolbar">
        <div className="field">
          <label htmlFor="search">Пошук</label>
          <input
            id="search"
            type="search"
            placeholder="Назва, бренд або тварина"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="sort">Сортування</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
          >
            <option value="default">За замовчуванням</option>
            <option value="price-asc">Спочатку дешевші</option>
            <option value="price-desc">Спочатку дорожчі</option>
            <option value="name">За назвою</option>
          </select>
        </div>
      </div>

      <div className="chips" role="group" aria-label="Категорії">
        <button
          type="button"
          className={category === 'all' ? 'chip chip--active' : 'chip'}
          onClick={() => setCategory('all')}
        >
          Усі
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            className={category === c.slug ? 'chip chip--active' : 'chip'}
            onClick={() => setCategory(c.slug)}
          >
            <span aria-hidden="true">{c.emoji}</span> {c.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="empty">Нічого не знайдено. Спробуйте змінити запит.</p>
      ) : (
        <ul className="grid">
          {filtered.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
