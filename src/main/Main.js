import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Conteiner.module.css'

function MainBlock() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <span> I am Dasha <span> Kurilovich</span></span>
                    <h1>Frontend Developer.</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div >
    );
}

export default MainBlock;
