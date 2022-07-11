import React, { useState } from 'react';
import styles from './BurgerNav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function BurgerNav() {

  const [menuIsOpen, setBurgerMenu] = useState(false)


  let onBurgerBtnClick = () => {
    setBurgerMenu(!menuIsOpen);
    console.log(menuIsOpen);
  }

  return (
    <div className={styles.burgerNav}>
      <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
        <Link
          activeClass={styles.active}
          to="main"
          spy={true}
          smooth={true}
          offset={1}
          duration={600}
        >Main</Link>
        <Link
          activeClass={styles.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={1}
          duration={600}
        >Skills</Link>
        <Link
          activeClass={styles.active}
          to="myWorks"
          spy={true}
          smooth={true}
          offset={1}
          duration={600}
        >Projects</Link>
        <Link
          activeClass={styles.active}
          to="contacts"
          spy={true}
          smooth={true}
          offset={1}
          duration={600}
        >Contacts</Link>
      </div>
      <div onClick={onBurgerBtnClick} className={styles.burgerBtn}></div>
    </div>
  );
}

export default BurgerNav;
