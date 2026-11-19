import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { contacts } from '@/lib/contacts';

export const metadata: Metadata = {
  title: 'Контакти',
};

export default function ContactsPage() {
  return (
    <section>
      <h1>Контакти</h1>
      <div className="contacts">
        <address className="contacts__info">
          <p><strong>Адреса:</strong> {contacts.address}</p>
          <p><strong>Телефон:</strong> <a href={`tel:${contacts.phone}`}>{contacts.phoneLabel}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
          <p><strong>Графік:</strong> {contacts.hours}</p>
        </address>
        <ContactForm />
      </div>
    </section>
  );
}
