import React from 'react';
import Title from '../common/styles/components/title/Title';
import styles from './Footer.module.scss';
import telegramIcon from '../assets/images/telegram.jpg';
import linkedinIcon from '../assets/images/linkedin.jpg';
import instagramIcon from '../assets/images/instagram.jpg';
import vkIcon from '../assets/images/vk.jpg';


function Footer() {

    return (
        <div className={styles.wrapFooter}>
            <div className={styles.container}>
                <Title text={"Darya Kurilovich"} />
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={telegramIcon} alt="" />
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={linkedinIcon} alt="" />
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={instagramIcon} alt="" />
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={vkIcon} alt="" />
                        </a>
                    </div>

                </div>
                <span className={styles.copyright}>@2022 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;