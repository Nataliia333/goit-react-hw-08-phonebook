import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.Container}>
    <img src={avatar} alt="" width="32" className={styles.Avatar} />
    <span className={styles.Name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
