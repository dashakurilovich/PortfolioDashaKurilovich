import React from 'react';
import styles from './FreeWork.module.scss';
import Title from '../common/styles/components/title/Title';
import Button from '../common/styles/components/button/Button';
import Fade from 'react-reveal/Fade';


function FreeWork() {
  return (
    <div className={styles.mainWrapWork}>
      <Fade bottom>
        <div className={styles.container}>
          <Title text={"I am avaiable for freelance"} />
          <Button text="Нанять меня"></Button>
        </div>
      </Fade>
    </div>
  );
}

export default FreeWork;