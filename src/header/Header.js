import React from 'react';
import BurgerNav from './burgerNav/BurgerNav';
import styles from './Header.module.scss';
import Nav from './nav/Nav';

function Header() {
    return (
        <div className={styles.header}>
            <Nav />
            <BurgerNav />
        </div>
    );
}

export default Header;
