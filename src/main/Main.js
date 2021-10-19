import React from 'react';
import styles from './Main.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'

function MainBlock() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Dasha Kurilovich</h1>
                    <p>A front-end developer</p>
                </div>
                <div className={styles.photo}></div>
            </div >
        </div >
    );
}

export default MainBlock;
