'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/context/AuthContext';

const schema = Yup.object({
  email: Yup.string().email('Некоректний email').required('Вкажіть email'),
  password: Yup.string().min(6, 'Мінімум 6 символів').required('Введіть пароль'),
});

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await login(values.email, values.password);
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
          <h2>Вхід</h2>

          <div className="field">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="email" autoComplete="email" {...getFieldProps('email')} />
            {touched.email && errors.email && (
              <p className="error" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="login-password">Пароль</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              {...getFieldProps('password')}
            />
            {touched.password && errors.password && (
              <p className="error" role="alert">{errors.password}</p>
            )}
          </div>

          {error && <p className="error" role="alert">{error}</p>}

          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            Увійти
          </button>
          <p>
            Немає акаунта? <Link href="/register">Зареєструватись</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
