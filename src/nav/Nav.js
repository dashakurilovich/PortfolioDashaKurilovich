import React from 'react';
import styles from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
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
    </div>
  );
}

export default Nav;
