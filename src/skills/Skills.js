import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'
import Skill from './skill/Skill';

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsConteiner}`} >
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills} >
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua Ut enim"} />
                    <Skill title={"CSS"} description={" consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
