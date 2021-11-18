import React from 'react';
import Title from '../common/styles/components/title/Title';
import styleContainer from '../common/styles/Conteiner.module.css'
import styles from './Contacts.module.css';


function Contacts() {
    return (
        <div className={styles.wrapContacts}>
            <div className={`${styleContainer.container} ${styles.myContactsConteiner}`}>
               <Title text={"Contacts"} />
                <form className={styles.form}>
                    <input className={styles.input} />
                    <input className={styles.input} />
                    <textarea className={styles.textarea} />
                    <button className={styles.button}> Отправить </button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;