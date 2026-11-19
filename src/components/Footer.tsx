import Link from 'next/link';
import { contacts } from '@/lib/contacts';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Ветаптека Вітамінка — ветеринарна аптека та зоомагазин</p>
        <address className="footer__contacts">
          <a href={`tel:${contacts.phone}`}>{contacts.phoneLabel}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          <span>{contacts.address}</span>
          <span>{contacts.hours}</span>
          <Link href="/contacts">Усі контакти</Link>
        </address>
        <p>Інформація на сайті не замінює консультацію ветеринарного лікаря.</p>
      </div>
    </footer>
  );
}
