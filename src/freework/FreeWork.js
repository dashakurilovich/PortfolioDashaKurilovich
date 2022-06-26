import React from 'react';
import styles from './FreeWork.module.scss';
import styleContainer from '../common/styles/Conteiner.module.css'
import Title from '../common/styles/components/title/Title';


function FreeWork() {
    return (
        <div className={styles.mainWrapWork}>
            <div className={`${styleContainer.container} ${styles.freeWork}`}>
                <Title text={"I am avaiable for freelance"} />
                <a href="" className={styles.freeWorkBtn}>Нанять меня </a>
            </div>
        </div>
    );
}

export default FreeWork;