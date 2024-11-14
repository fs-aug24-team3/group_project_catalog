import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './LoginPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { clearError, loginUser } from '../../redux/slices/authSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import arrowLeft from '../../images/Icons/arrow_left.svg';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, error } = useSelector((state: RootState) => state.auth);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(loginUser(values));
    setTimeout(() => window.location.reload(), 1000);
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
    <div className={styles.LoginPage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className={styles['login-form']}>
            <Link to="/home" className={styles['back-link']}>
              <div className={styles['back-link__icon']}>
                <img src={arrowLeft} alt="back arrow" />
              </div>
              <p className={styles['back-link__text']}>Home</p>
            </Link>
            <h1>Login</h1>
            <div className={styles['login-form__input']}>
              <Field
                name="email"
                id="email"
                placeholder="Enter your email"
                className={styles['login-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles['login-form__error']}
              />
            </div>

            <div className={styles['login-form__input']}>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={styles['login-form__field']}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleClearError();
                  handleChange(e);
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles['login-form__error']}
              />
            </div>

            {error && (
              <div className={styles['signup-form__error']}>{error}</div>
            )}

            <button type="submit" className={styles['login-form__submit']}>
              Login
            </button>

            <Link className={styles['login-form__redirect']} to="../signup">
              Not registered yet ?{' '}
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
