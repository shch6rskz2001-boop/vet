import type { Metadata } from 'next';
import RegisterForm from '@/components/RegisterForm';

export const metadata: Metadata = {
  title: 'Реєстрація',
};

export default function RegisterPage() {
  return (
    <section>
      <h1>Реєстрація</h1>
      <RegisterForm />
    </section>
  );
}
