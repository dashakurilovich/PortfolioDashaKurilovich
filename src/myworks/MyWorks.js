import React from 'react';
import styles from './MyWorks.module.scss';
import MyWork from './myWork/MyWork';
import Title from '../common/styles/components/title/Title';
import todoImage from './../assets/images/todolists.jpg';
import weatherImage from './../assets/images/weather.jpg';
import Fade from 'react-reveal/Fade';


function MyWorks(props) {

  const weather = {
    backgroundImage: `url(${weatherImage})`,
  };
  const todolists = {
    backgroundImage: `url(${todoImage})`,
  };

  return (
    <div id="myWorks" className={styles.mainWrap}>
      <Fade bottom>
        <div className={styles.container} >
          <Title text={"Projects"} />
          <div className={styles.myWorks} >
            <MyWork
              link={"https://dashakurilovich.github.io/The-weather/"}
              style={weather}
              title={"Weather forecast"}
              shortDescription={"Source: https://github.com/dashakurilovich/The-weather      Status: in process"}
            />
            <MyWork
              link={"https://dashakurilovich.github.io/MYTODO/"}
              style={todolists}
              title={"Todo List"}
              shortDescription={" Source: https://github.com/dashakurilovich/MYTODO         Status: completed"}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MyWorks;
