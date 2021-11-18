import React from 'react';
import styles from './MyWork.module.css';

function MyWork(props) {
    return (
        <div className={styles.myWork}>
            <div className={styles.settphoto}>
                <a className={styles.button} href="">Смотреть
                    <img className={styles.icon} src="https://image.freepik.com/free-photo/close-up-portrait-photo-short-hair-cat-wearing-sunglasses_35818-111.jpg" />
                </a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.nameProject}>{props.title}</h3>
                <p className={styles.shortDescription}>{props.shortDescription}</p>
            </div>
        </div>
    );
}

export default MyWork;
