import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'
import MyWork from './myWork/MyWork';
import Title from '../common/styles/components/title/Title';



function MyWorks() {
    return (
        <div className={styles.mainWrap}>
            <div className={`${styleContainer.container} ${styles.myWorkConteiner}`} >
               <Title text={"Projects"} />
                <div className={styles.myWorks} >
                    <MyWork
                        title={"Social Networking"}
                        shortDescription={"About social networking"}
                    />
                    <MyWork
                        title={"ToDoList"}
                        shortDescription={"About ToDoList"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
