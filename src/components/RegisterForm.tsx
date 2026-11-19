'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/context/AuthContext';

const schema = Yup.object({
  name: Yup.string().trim().min(2, 'Мінімум 2 символи').max(50, 'Максимум 50 символів').required('Вкажіть ім’я'),
  email: Yup.string().email('Некоректний email').required('Вкажіть email'),
  phone: Yup.string().matches(/^(\+380\d{9})?$/, 'Формат: +380XXXXXXXXX'),
  password: Yup.string().min(6, 'Мінімум 6 символів').required('Придумайте пароль'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі не збігаються')
    .required('Повторіть пароль'),
});

export default function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', password: '', confirm: '' }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await register({
          name: values.name,
          email: values.email,
          phone: values.phone,
          password: values.password,
        });
        if (result) {
          setError(result);
          setSubmitting(false);
          return;
        }
        router.push('/account');
      }}
    >
      {({ errors, touched, getFieldProps, isSubmitting }) => (
        <Form className="form form--narrow" noValidate>
          <h2>Реєстрація</h2>

          <div className="field">
            <label htmlFor="reg-name">Ім’я</label>
            <input id="reg-name" type="text" autoComplete="name" {...getFieldProps('name')} />
            {touched.name && errors.name && (
              <p className="error" role="alert">{errors.name}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="reg-email">Email</label>
            <input id="reg-email" type="email" autoComplete="email" {...getFieldProps('email')} />
            {touched.email && errors.email && (
              <p className="error" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="reg-phone">Телефон (необов’язково)</label>
            <input
              id="reg-phone"
              type="tel"
              placeholder="+380XXXXXXXXX"
              autoComplete="tel"
              {...getFieldProps('phone')}
            />
            {touched.phone && errors.phone && (
              <p className="error" role="alert">{errors.phone}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="reg-password">Пароль</label>
            <input
              id="reg-password"
              type="password"
              autoComplete="new-password"
              {...getFieldProps('password')}
            />
            {touched.password && errors.password && (
              <p className="error" role="alert">{errors.password}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="reg-confirm">Повторіть пароль</label>
            <input
              id="reg-confirm"
              type="password"
              autoComplete="new-password"
              {...getFieldProps('confirm')}
            />
            {touched.confirm && errors.confirm && (
              <p className="error" role="alert">{errors.confirm}</p>
            )}
          </div>

          {error && <p className="error" role="alert">{error}</p>}

          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            Створити акаунт
          </button>
          <p>
            Уже є акаунт? <Link href="/login">Увійти</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
