import React from 'react';
import styles from './MyWorks.module.scss';
import MyWork from './myWork/MyWork';
import Title from '../common/styles/components/title/Title';
import todoImage from './../assets/images/todolists.jpg';
import weatherImage from './../assets/images/weather.jpg';
import sneakersImage from './../assets/images/sneakers.jpg';
import Fade from 'react-reveal/Fade';


function MyWorks(props) {

  const weather = {
    backgroundImage: `url(${weatherImage})`,
  };
  const todolists = {
    backgroundImage: `url(${todoImage})`,
  };
  const sneakers = {
    backgroundImage: `url(${sneakersImage})`,
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
            <MyWork
              link={"https://dashakurilovich.github.io/onlineStore/"}
              style={sneakers}
              title={"Online store sneakers"}
              shortDescription={" Source: https://github.com/dashakurilovich/onlineStore        Status: completed"}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MyWorks;
