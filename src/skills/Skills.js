import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Conteiner.module.css'
import Skill from './skill/Skill';
import Title from '../common/styles/components/title/Title';


function Skills() {

    return (
        <div className={styles.skillsBlock}>
            <div className={styles.container} >
                <Title text={"Skills"} />
                <div className={styles.skills} >
                    <Skill
                        title={"JS"}
                        description={"Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua Ut enim"}
                    />
                    <Skill
                        title={"CSS"}
                        description={" consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        title={"REACT"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        title={"HTML"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        title={"TYPESCRIPT"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
