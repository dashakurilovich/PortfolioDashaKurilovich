import React from 'react';
import styles from './Nav.module.scss';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <a className={styles.main}>Main</a>
        <a className={styles.main}>Skills</a>
        <a className={styles.main}>Projects</a>
        <a className={styles.main}>Contacts</a>
      </div>
    </div>
  );
}

export default Nav;
