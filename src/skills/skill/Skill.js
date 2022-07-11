import React from 'react';
import styles from './Skill.module.scss';
import Fade from 'react-reveal/Fade';

function Skill(props) {
  return (

    <div className={styles.skill}>
      <Fade bottom>

        <div className={styles.container}>
          <div className={styles.icon} >
            <p className={styles.fasFaCode}></p>
          </div>
          <h3>{props.title}</h3>
          <span className={styles.description} >
            {props.description}
          </span>
        </div>
      </Fade>
    </div>
  );
}

export default Skill;
