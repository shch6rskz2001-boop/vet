import type { Metadata } from 'next';
import AccountView from '@/components/AccountView';

export const metadata: Metadata = {
  title: 'Особистий кабінет',
};

export default function AccountPage() {
  return (
    <section>
      <h1>Особистий кабінет</h1>
      <AccountView />
    </section>
  );
}
