import React from 'react';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import FreeWork from './freework/FreeWork';
import Header from './header/Header'
import MainBlock from './main/Main';
import MyWorks from './myworks/MyWorks';
import Skills from './skills/Skills';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainBlock />
      <Skills />
      <MyWorks />
      <FreeWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
