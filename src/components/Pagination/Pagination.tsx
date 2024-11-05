import styles from './Pagination.module.scss';
import arrowRigth from '../../images/Icons/arrow_right.svg';

export const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <a
        href=""
        className={styles['pagination__item--prev'] || styles.pagination__item}
      ></a>
      <ul className={styles.pagination__list}>
        <li></li>
        <li>
          <a href="" className={styles.pagination__item}>
            1
          </a>
        </li>
        <li>
          <a href="" className={styles.pagination__item}>
            2
          </a>
        </li>
        <li>
          <a href="" className={styles.pagination__item}>
            3
          </a>
        </li>
        <li></li>
      </ul>
      <a
        href=""
        className={styles['pagination__item--next'] || styles.pagination__item}
      >
        <img src={arrowRigth} alt="" />
      </a>
    </div>
  );
};
