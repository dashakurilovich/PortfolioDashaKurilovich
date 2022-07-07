import React from 'react';
import styles from './MyWorks.module.scss';
import MyWork from './myWork/MyWork';
import Title from '../common/styles/components/title/Title';
import todoImage from './../assets/images/todolists.jpg'
import socialnetworkImage from './../assets/images/socialnetwork.jpg'


function MyWorks() {

    const social = {
        backgroundImage: `url(${socialnetworkImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={styles.mainWrap}>
            <div className={styles.container} >
                <Title text={"Projects"} />
                <div className={styles.myWorks} >
                    <MyWork
                        style={social}
                        title={"Social Networking"}
                        shortDescription={"An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work."}
                    />
                    <MyWork
                        style={todolist}
                        title={"Todo List"}
                        shortDescription={"Todoist is a web service and a collection of task management software. Tasks can also contain notes with files of any type. Tasks can be placed in projects, sorted by filters, labeled, edited and exported."}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
