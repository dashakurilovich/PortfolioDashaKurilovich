import React from 'react';
import styles from './FreeWork.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'
import Title from '../common/styles/components/title/Title';


function FreeWork() {
    return (
        <div className={styles.mainWrapWork}>
            <div className={`${styleContainer.container} ${styles.freeWork}`}>
                <Title text={"I avaiable freelance"} />
                <button>Нанять меня </button>
            </div>
        </div>
    );
}

export default FreeWork;