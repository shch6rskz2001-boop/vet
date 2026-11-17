import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="notice">
      <h1>Сторінку не знайдено</h1>
      <p>Можливо, товар більше недоступний або адресу введено неправильно.</p>
      <Link href="/catalog" className="btn btn--primary">
        До каталогу
      </Link>
    </section>
  );
}
