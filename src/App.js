import React from 'react';
import './App.css';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import FreeWork from './freework/FreeWork';
import Header from './header/Header'
import MainBlock from './main/Main';
import MyWorks from './myworks/MyWorks';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
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
