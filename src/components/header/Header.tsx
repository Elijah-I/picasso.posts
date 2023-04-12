import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const home = import.meta.env.BASE_URL;

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <NavLink end to={home} className={styles.header__link}>
          home
        </NavLink>
        <NavLink to={`${home}/posts`} className={styles.header__link}>
          posts
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
