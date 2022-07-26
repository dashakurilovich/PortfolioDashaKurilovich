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
              description={" Classes/array methods/switch/while/ if else/ async await / EventLoop/promise"}
            />
            <Skill
              title={"HTML/CSS"}
              description={"SASS/ media requests/ grid / flexbox / typing-effect/ react-scroll/material ui/formik "} />
            <Skill
              title={"REACT"}
              description={" React.js / hooks /redux / redux toolkit / rest api / localStorage  / git / flux /formik / axios/ thunk"} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Skills;
