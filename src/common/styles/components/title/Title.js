import React from 'react';
import styles from './Title.module.css';



function Title(props) {
    return (
        <div className={styles.title}>
            <h3 >{props.text}</h3>
        </div>
    );
}

export default Title;
