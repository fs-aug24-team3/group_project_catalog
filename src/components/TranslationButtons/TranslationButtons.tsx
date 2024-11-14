/* eslint-disable import/no-extraneous-dependencies */
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './TranslationButtons.module.scss';

export const TranslationButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.buttons}>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={cn(styles.buttons__button, {
          [styles['buttons__button--active']]: i18n.language === 'en',
        })}
      >
        EN
      </button>
      <span style={{ color: `var(--secondary-color)` }}>|</span>
      <button
        type="button"
        onClick={() => changeLanguage('ua')}
        className={cn(styles.buttons__button, {
          [styles['buttons__button--active']]: i18n.language === 'ua',
        })}
      >
        UA
      </button>
    </div>
  );
};
