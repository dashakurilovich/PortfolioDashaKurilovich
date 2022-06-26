import React from 'react';
import Title from '../common/styles/components/title/Title';
import styleContainer from '../common/styles/Conteiner.module.css'
import styles from './Footer.module.scss';


function Footer() {
    return (
        <div className={styles.wrapFooter}>
            <div className={`${styleContainer.container} ${styles.myFooterConteiner}`}>
               <Title text={"Darya Kurilovich"} />                
                <div className={styles.cells}>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                </div>
                <span className={styles.copyright}>@2022 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;