import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.Link}
      activeclassname={styles.ActiveLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
