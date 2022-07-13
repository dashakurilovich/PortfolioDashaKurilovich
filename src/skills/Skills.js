import React from 'react';
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import Title from '../common/styles/components/title/Title';
import Fade from 'react-reveal/Fade';


function Skills() {

  return (
    <div id="skills" className={styles.skillsBlock}>
      <Fade bottom>
        <div className={styles.container} >
          <Title text={"Skills"} />
          <div className={styles.skills} >
            <Skill
              title={"JS/TypeScript"}
              description={""}
            />
            <Skill
              title={"HTML/CSS"}
              description={"SASS/ Media Requests/ "} />
            <Skill
              title={"REACT"}
              description={" React.js / Redux / Redux Toolkit"} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
