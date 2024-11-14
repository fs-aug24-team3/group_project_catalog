/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './SearchInput.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  query: string;
};

export const SearchInput: FC<Props> = ({ query }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    setSearchParams(params || null);
  }

  const clearInput = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('query');
    setSearchParams(params || null);
  };

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder={t('page.search')}
        value={query}
        onChange={handleQueryChange}
        className={styles['searchInput-search']}
      />
      {query && (
        <button
          onClick={clearInput}
          className={styles['searchInput-clearButton']}
        >
          ✕
        </button>
      )}
    </div>
  );
};
