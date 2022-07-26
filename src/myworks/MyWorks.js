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
  const todolist = {
    backgroundImage: `url(${todoImage})`,
  };

  return (
    <div id="myWorks" className={styles.mainWrap}>
      <Fade bottom>
        <div className={styles.container} >
          <Title text={"Projects"} />
          <div className={styles.myWorks} >
            <MyWork
              style={weather}
              title={"Weather forecast"}
              shortDescription={"An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work."}
            />
            <MyWork
              link={"https://github.com/dashakurilovich/MYTODO"}
              style={todolist}
              title={"Todo List"}
              shortDescription={"Todoist is a web service and a collection of task management software. Tasks can also contain notes with files of any type. Tasks can be placed in projects, sorted by filters, labeled, edited and exported."}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MyWorks;
