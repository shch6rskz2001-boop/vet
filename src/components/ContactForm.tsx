'use client';

import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface ContactValues {
  name: string;
  email: string;
  message: string;
}

const schema = Yup.object({
  name: Yup.string().trim().min(2, 'Мінімум 2 символи').required('Вкажіть ім’я'),
  email: Yup.string().email('Некоректний email').required('Вкажіть email'),
  message: Yup.string()
    .trim()
    .min(10, 'Мінімум 10 символів')
    .max(500, 'Максимум 500 символів')
    .required('Напишіть повідомлення'),
});

const initialValues: ContactValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (
    _values: ContactValues,
    helpers: FormikHelpers<ContactValues>
  ) => {
    helpers.resetForm();
    setSent(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, getFieldProps, isSubmitting }) => (
        <Form className="form" noValidate>
          <h2>Напишіть нам</h2>

          <div className="field">
            <label htmlFor="contact-name">Ім’я</label>
            <input id="contact-name" type="text" {...getFieldProps('name')} />
            {touched.name && errors.name && (
              <p className="error" role="alert">{errors.name}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" {...getFieldProps('email')} />
            {touched.email && errors.email && (
              <p className="error" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="contact-message">Повідомлення</label>
            <textarea id="contact-message" rows={5} {...getFieldProps('message')} />
            {touched.message && errors.message && (
              <p className="error" role="alert">{errors.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            Надіслати
          </button>

          {sent && (
            <p className="success" role="status">
              Дякуємо! Ми зв’яжемось з вами найближчим часом.
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
