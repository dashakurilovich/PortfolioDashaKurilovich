import React from 'react';
import styles from './MyWork.module.scss';

function MyWork(props) {
    return (
        <div className={styles.myWork}>
            <div className={styles.image} style={props.style} >
                <a href="" className={styles.viewBtn}>Смотреть</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.shortDescription}>{props.shortDescription}</span>
            </div>
        </div>
    );
}

export default MyWork;
