'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/contacts', label: 'Контакти' },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo">
          <span aria-hidden="true">🐾</span> Ветаптека Вітамінка
        </Link>
        <nav aria-label="Основна навігація">
          <ul className="nav">
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? 'nav__link nav__link--active' : 'nav__link'}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/cart" className="cart-link">
                Кошик
                <span className="badge" aria-label={`Товарів у кошику: ${count}`}>
                  {count}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
