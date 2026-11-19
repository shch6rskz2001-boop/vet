'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

const links = [
  { href: '/', label: 'Головна' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/contacts', label: 'Контакти' },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const { user, ready } = useAuth();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const authHref = user ? '/account' : '/login';
  const authLabel = ready && user ? 'Кабінет' : 'Вхід';

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo">
          <span aria-hidden="true">🐾</span> Ветаптека Вітамінка
        </Link>
        <nav aria-label="Основна навігація">
          <ul className="nav">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href) ? 'nav__link nav__link--active' : 'nav__link'
                  }
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={authHref}
                className={
                  pathname.startsWith(authHref) ? 'nav__link nav__link--active' : 'nav__link'
                }
              >
                {authLabel}
              </Link>
            </li>
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
