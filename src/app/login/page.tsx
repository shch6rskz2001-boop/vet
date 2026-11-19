import type { Metadata } from 'next';
import LoginForm from '@/components/LoginForm';

export const metadata: Metadata = {
  title: 'Вхід',
};

export default function LoginPage() {
  return (
    <section>
      <h1>Вхід в акаунт</h1>
      <LoginForm />
    </section>
  );
}
