import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../common/styles/Conteiner.module.css'
import Skill from './skill/Skill';
import Title from '../common/styles/components/title/Title';
import jsImage from '../assets/images/jsss.jpg';
import reactImage from '../assets/images/reactt.jpg';
import htmlImage from '../assets/images/html.jpg';

function Skills() {

    const js = {
        backgroundImage: `url(${jsImage})`,
    };
    const react = {
        backgroundImage: `url(${reactImage})`,
    };
    const html = {
        backgroundImage: `url(${htmlImage})`,
    };

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsConteiner}`} >
                <Title text={"Skills"} />
                <div className={styles.skills} >
                    <Skill
                        style={js}
                        title={"JS"}
                        description={"Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua Ut enim"}
                    />
                    <Skill
                        style={html}
                        title={"CSS"}
                        description={" consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        style={react}
                        title={"REACT"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        style={react}
                        title={"HTML"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                    <Skill
                        style={react}
                        title={"TYPESCRIPT"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
