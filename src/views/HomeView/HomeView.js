import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.Container}>
    <h1 className={styles.Title}>
      Приветственная страница нашего сервиса{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
