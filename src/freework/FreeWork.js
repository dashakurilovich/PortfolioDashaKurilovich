import React from 'react';
import styles from './FreeWork.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'


function FreeWork() {
    return (
        <div className={styles.mainWrapWork}>
            <div className={`${styleContainer.container} ${styles.freeWork}`}>
                <span className={styles.title}>Рассматриваю варианты удаленной работы</span>
                <button>Нанять меня </button>
            </div>
        </div>
    );
}

export default FreeWork;