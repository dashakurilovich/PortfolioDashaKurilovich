import React from 'react';
import styles from './MyWork.module.css';

function MyWork(props) {
    return (
        <div className={styles.myWork}>
            <a className={styles.button} href="">Смотреть
                <div className={styles.settphoto}>
                    <img className={styles.icon} src="https://image.freepik.com/free-photo/close-up-portrait-photo-short-hair-cat-wearing-sunglasses_35818-111.jpg" />
                </div>
                {/* <a className={styles.button} href="">Смотреть */}
            </a>
            <div className={styles.description}>
                <span className={styles.nameProject}>{props.nameProject}</span>
                <span className={styles.shortDescription}>{props.shortDescription}</span>
            </div>
        </div>
    );
}

export default MyWork;
