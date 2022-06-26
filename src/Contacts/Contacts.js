import React from 'react';
import Title from '../common/styles/components/title/Title';
import styleContainer from '../common/styles/Conteiner.module.css'
import styles from './Contacts.module.scss';


function Contacts() {
    return (
        <div className={styles.wrapContacts}>
            <div className={`${styleContainer.container} ${styles.myContactsConteiner}`}>
               <Title text={"Contacts"} />
                <form className={styles.form}>
                    <input type="text" />
                    <input type="text"  />
                    <textarea  />
                    <button type="submit" className={styles.submitBtn}> Отправить </button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;