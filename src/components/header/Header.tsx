import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const home = import.meta.env.BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <NavLink end to={home} className={styles.header__link}>
          home
        </NavLink>
        <NavLink to={`${home}/posts`} className={styles.header__link}>
          posts
        </NavLink>
        {!!id && (
          <div
            onClick={() => navigate(-1)}
            className={`${styles.header__link} ${styles.header__close}`}
          >
            ×
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
