'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/context/AuthContext';
import { formatPrice } from '@/lib/products';

const schema = Yup.object({
  name: Yup.string().trim().min(2, 'Мінімум 2 символи').max(50, 'Максимум 50 символів').required('Вкажіть ім’я'),
  phone: Yup.string().matches(/^(\+380\d{9})?$/, 'Формат: +380XXXXXXXXX'),
  city: Yup.string().trim().max(60, 'Максимум 60 символів'),
});

export default function AccountView() {
  const { user, orders, ready, logout, updateProfile } = useAuth();
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (ready && !user) {
      router.replace('/login');
    }
  }, [ready, user, router]);

  if (!ready || !user) {
    return <p>Завантаження...</p>;
  }

  return (
    <div className="account">
      <div className="account__head">
        <p>
          Ви увійшли як <strong>{user.email}</strong>
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            logout();
            router.push('/');
          }}
        >
          Вийти
        </button>
      </div>

      <Formik
        initialValues={{ name: user.name, phone: user.phone, city: user.city }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          updateProfile({
            name: values.name.trim(),
            phone: values.phone,
            city: values.city.trim(),
          });
          setSaved(true);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, getFieldProps, isSubmitting }) => (
          <Form className="form" noValidate onChange={() => setSaved(false)}>
            <h2>Мої дані</h2>

            <div className="field">
              <label htmlFor="acc-name">Ім’я</label>
              <input id="acc-name" type="text" {...getFieldProps('name')} />
              {touched.name && errors.name && (
                <p className="error" role="alert">{errors.name}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="acc-phone">Телефон</label>
              <input id="acc-phone" type="tel" placeholder="+380XXXXXXXXX" {...getFieldProps('phone')} />
              {touched.phone && errors.phone && (
                <p className="error" role="alert">{errors.phone}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="acc-city">Місто</label>
              <input id="acc-city" type="text" {...getFieldProps('city')} />
              {touched.city && errors.city && (
                <p className="error" role="alert">{errors.city}</p>
              )}
            </div>

            <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
              Зберегти
            </button>
            {saved && (
              <p className="success" role="status">Дані збережено.</p>
            )}
          </Form>
        )}
      </Formik>

      <section aria-labelledby="orders-title">
        <h2 id="orders-title">Мої замовлення</h2>
        {orders.length === 0 ? (
          <div className="notice">
            <p>Замовлень поки немає.</p>
            <Link href="/catalog" className="btn btn--primary">
              Перейти до каталогу
            </Link>
          </div>
        ) : (
          <ul className="orders">
            {orders.map((order) => (
              <li key={order.id} className="order">
                <div className="order__head">
                  <strong>Замовлення № {order.id}</strong>
                  <span>{new Date(order.date).toLocaleString('uk-UA')}</span>
                </div>
                <ul className="order__lines">
                  {order.lines.map((line) => (
                    <li key={line.id}>
                      {line.name} × {line.qty} — {formatPrice(line.price * line.qty)}
                    </li>
                  ))}
                </ul>
                <p>Доставка: {order.delivery}</p>
                <p>
                  Разом: <strong>{formatPrice(order.total)}</strong>
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
