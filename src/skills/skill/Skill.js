import React from 'react';
import styles from './Skill.module.scss';

function Skill(props) {
    return (

        <div className={styles.skill}>
            <div className={styles.container}>
                <div className={styles.icon} style={props.style}>
                </div>
                <h3>{props.title}</h3>
                <span className={styles.description} >
                    {props.description}
                </span>
            </div>
        </div>
    );
}

export default Skill;
