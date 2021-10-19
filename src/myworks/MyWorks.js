import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'
import MyWork from './myWork/MyWork';



function MyWorks() {
    return (
        <div className={styles.mainWrap}>
            <div className={`${styleContainer.container} ${styles.myWorkConteiner}`} >
                <h2 className={styles.title}>Мои работы</h2>
                <div className={styles.myWorks} >
                    <MyWork
                        nameProject={"Social Networking"}
                        shortDescription={"About social networking"}
                    />
                    <MyWork
                        nameProject={"ToDoList"}
                        shortDescription={"About ToDoList"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
