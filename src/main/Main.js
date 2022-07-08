import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styles from './Main.module.scss';
import particlesSpace from '../assets/particles/space.json';

function MainBlock() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={styles.mainBlock}>
      <Particles init={particlesInit} options={particlesSpace} className={styles.particles} />
      <div className={styles.container}>
        <div className={styles.text}>
          <span>Hi There</span>
          <span> I am  <span>Dasha Kurilovich</span></span>
          <h1>Frontend Developer.</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}></div>
        </div>
      </div>
    </div >
  );
}

export default MainBlock;
