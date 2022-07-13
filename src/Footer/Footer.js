import React from 'react';
import Title from '../common/styles/components/title/Title';
import styles from './Footer.module.scss';
import telegramIcon from '../assets/images/telegram.jpg';
import linkedinIcon from '../assets/images/linkedin.jpg';
import instagramIcon from '../assets/images/instagram.jpg';
import vkIcon from '../assets/images/vk.jpg';
import Fade from 'react-reveal/Fade';



function Footer() {

  return (
    <div className={styles.wrapFooter}>
      <Fade bottom>
        <div className={styles.container}>
          <Title text={"Darya Kurilovich"} />
          <div className={styles.socialIcons}>
            <div className={styles.socialIcon}>
              <a href="https://t.me/kamazaf">
                <img src={telegramIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="">
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://www.instagram.com/dasha.kurilovich/">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a href="https://vk.com/djlsdsd">
                <img src={vkIcon} alt="" />
              </a>
            </div>

          </div>
          <span className={styles.copyright}>@2022 All Rights Reserved</span>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;