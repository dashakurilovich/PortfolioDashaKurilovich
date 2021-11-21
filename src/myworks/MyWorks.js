import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Conteiner.module.css'
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
            <div className={`${styleContainer.container} ${styles.myWorkConteiner}`} >
                <Title text={"Projects"} />
                <div className={styles.myWorks} >
                    <MyWork
                        style={social}
                        title={"Social Networking"}
                        shortDescription={"About social networking"}
                    />
                    <MyWork
                        style={todolist}
                        title={"Todo List"}
                        shortDescription={"About Todo List"}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
