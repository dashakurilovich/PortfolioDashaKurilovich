import React from 'react';
import Title from '../common/styles/components/title/Title';
import styles from './Contacts.module.scss';
import Fade from 'react-reveal/Fade';



function Contacts() {
  return (
    <div id="contacts" className={styles.wrapContacts}>
      <Fade bottom>
        <div className={styles.container}>
          <Title text={"Contacts"} />
          <form className={styles.form}>
            <input type="text" className={styles.formArea} placeholder="Name" />
            <input type="text" className={styles.formArea} placeholder="E-mail" />
            <textarea className={styles.messageArea} placeholder="Message" />
            <button type="submit">Send message</button>
          </form>
        </div>
      </Fade>
    </div>
  );
}

export default Contacts;