'use client';

import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

export interface CheckoutValues {
  name: string;
  phone: string;
  city: string;
  delivery: string;
  comment: string;
}

const schema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Мінімум 2 символи')
    .max(50, 'Максимум 50 символів')
    .required('Вкажіть ім’я'),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, 'Формат: +380XXXXXXXXX')
    .required('Вкажіть телефон'),
  city: Yup.string().trim().min(2, 'Мінімум 2 символи').required('Вкажіть місто'),
  delivery: Yup.string().required('Оберіть спосіб доставки'),
  comment: Yup.string().max(300, 'Максимум 300 символів'),
});

const initialValues: CheckoutValues = {
  name: '',
  phone: '+380',
  city: '',
  delivery: '',
  comment: '',
};

interface Props {
  onSubmitted: () => void;
}

export default function CheckoutForm({ onSubmitted }: Props) {
  const handleSubmit = (
    _values: CheckoutValues,
    helpers: FormikHelpers<CheckoutValues>
  ) => {
    helpers.resetForm();
    onSubmitted();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, getFieldProps, isSubmitting }) => (
        <Form className="form" noValidate>
          <h2>Оформлення замовлення</h2>

          <div className="field">
            <label htmlFor="name">Ім’я</label>
            <input id="name" type="text" {...getFieldProps('name')} />
            {touched.name && errors.name && (
              <p className="error" role="alert">{errors.name}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone">Телефон</label>
            <input id="phone" type="tel" {...getFieldProps('phone')} />
            {touched.phone && errors.phone && (
              <p className="error" role="alert">{errors.phone}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="city">Місто</label>
            <input id="city" type="text" {...getFieldProps('city')} />
            {touched.city && errors.city && (
              <p className="error" role="alert">{errors.city}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="delivery">Доставка</label>
            <select id="delivery" {...getFieldProps('delivery')}>
              <option value="">Оберіть спосіб</option>
              <option value="nova-poshta">Нова пошта (відділення)</option>
              <option value="courier">Кур’єр</option>
              <option value="pickup">Самовивіз</option>
            </select>
            {touched.delivery && errors.delivery && (
              <p className="error" role="alert">{errors.delivery}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="comment">Коментар</label>
            <textarea id="comment" rows={3} {...getFieldProps('comment')} />
            {touched.comment && errors.comment && (
              <p className="error" role="alert">{errors.comment}</p>
            )}
          </div>

          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            Підтвердити замовлення
          </button>
        </Form>
      )}
    </Formik>
  );
}
