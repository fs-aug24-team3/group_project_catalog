import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './SignupPage.module.scss';
import { useSelector } from 'react-redux';
import { clearError, signupUser } from '../../redux/slices/authSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from '../../images/Icons/arrow_left.svg';
import { useTranslation } from 'react-i18next';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, error } = useSelector((state: RootState) => state.auth);

  const { t } = useTranslation();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t('auth_pages.invalid_name'))
      .required(t('auth_pages.required_name')),
    email: Yup.string()
      .email(t('auth_pages.invalid_email'))
      .required(t('auth_pages.required_email')),
    password: Yup.string()
      .min(6, t('auth_pages.invalid_password'))
      .required(t('auth_pages.required_password')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('auth_pages.password_must_match'))
      .required(t('auth_pages.required_confirm')),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    const { name, email, password } = values;

    dispatch(signupUser({ name, email, password }));

    setTimeout(() => window.location.reload(), 2000);
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={styles.signupPage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className={styles['signup-form']}>
            <Link to="/home" className={styles['back-link']}>
              <div className={styles['back-link__icon']}>
                <img src={arrowLeft} alt="back arrow" />
              </div>
              <p className={styles['back-link__text']}>
                {t('auth_pages.back_link')}
              </p>
            </Link>
            <h1>{t('auth_pages.register')}</h1>
            <div className={styles['signup-form__input']}>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={t('auth_pages.enter_name')}
                className={styles['signup-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles['signup-form__error']}
              />
            </div>

            <div className={styles['signup-form__input']}>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={t('auth_pages.enter_email')}
                className={styles['signup-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles['signup-form__error']}
              />
            </div>

            <div className={styles['signup-form__input']}>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder={t('auth_pages.enter_password')}
                className={styles['signup-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles['signup-form__error']}
              />
            </div>

            <div className={styles['signup-form__input']}>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder={t('auth_pages.confirm_password')}
                className={styles['signup-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={styles['signup-form__error']}
              />
            </div>

            {error && (
              <div className={styles['signup-form__error']}>{error}</div>
            )}

            <button type="submit" className={styles['signup-form__submit']}>
              {t('auth_pages.signup')}
            </button>

            <Link className={styles['signup-form__redirect']} to="../login">
              {t('auth_pages.registered')}
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
