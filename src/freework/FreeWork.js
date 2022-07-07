import React from 'react';
import styles from './FreeWork.module.scss';
import styleContainer from '../common/styles/Conteiner.module.css'
import Title from '../common/styles/components/title/Title';
import Button from '../common/styles/components/button/Button';


function FreeWork() {
    return (
        <div className={styles.mainWrapWork}>
            <div className={styles.container}>
                <Title text={"I am avaiable for freelance"} />
                <Button text="Нанять меня"></Button>
            </div>
        </div>
    );
}

export default FreeWork;