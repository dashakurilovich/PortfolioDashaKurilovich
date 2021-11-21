import React from 'react';
import styles from './MyWork.module.css';

function MyWork(props) {
    return (
        <div className={styles.myWork}>
            <div className={styles.image} style={props.style} >
                <a className={styles.viewBtn}>Смотреть</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.nameProject}>{props.title}</h3>
                <p className={styles.shortDescription}>{props.shortDescription}</p>
            </div>
        </div>
    );
}

export default MyWork;
