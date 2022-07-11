import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

import styles from './Main.module.scss';
import particlesSpace from '../assets/particles/space.json';

function MainBlock() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div id="main" className={styles.mainBlock}>
      <Particles init={particlesInit} options={particlesSpace} className={styles.particles} />
      <Fade bottom>
        <div className={styles.container}>
          <div className={styles.text}>
            <span>Hi There</span>
            <span> I am  <span>Dasha Kurilovich</span></span>
            <ReactTypingEffect
              text={["Frontend  Developer"]} className={styles.typeEffect}
            />
          </div>
          <Tilt className="Tilt" options={{ max: 25 }} >
            <div className={styles.photo}>
              <div className={styles.image}></div>
            </div>
          </Tilt>
        </div>
      </Fade>
    </div >
  );
}

export default MainBlock;
