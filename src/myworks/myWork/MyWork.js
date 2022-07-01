import React from 'react';
import Button from '../../common/styles/components/button/Button';
import styles from './MyWork.module.scss';

function MyWork(props) {
    return (
        <div className={styles.myWork}>
            <div className={styles.image} style={props.style} >
                <Button text="Cмотреть"></Button>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.shortDescription}>{props.shortDescription}</span>
            </div>
        </div>
    );
}

export default MyWork;
