import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setTheme } from '../../redux/slices/themeSlice';
import styles from './ThemeSwitch.module.scss';
import React, { useEffect } from 'react';

interface Props {
  className?: string;
}

export const ThemeSwitch: React.FC<Props> = className => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${styles.switch} ${className}`}>
      <input
        className={styles.switch__input}
        type="checkbox"
        checked={theme === 'light' ? true : false}
        onChange={toggleTheme}
      />
      <span className={styles.switch__slider}></span>
    </label>
  );
};
