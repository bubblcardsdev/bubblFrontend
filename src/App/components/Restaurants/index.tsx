import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BlackOrchid from './icon/resimg.png';
import BlackOrchid_Logo from './icon/resLogo.png';
import ResTwitter from './icon/twitter_icon';
import Insta from './icon/insta_icon';
import Facebook from './icon/facebook_icon';
import styles from './css/Restaurants.module.css';
import ResMenu from './icon/Restaurantmenu.png';

const Restaurants = () => {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState('home');

  const navigation = (path:any) => {
    setRestaurants(path);
  };

  return (
    <div className={styles['restaurants-parent-container']}>
      {restaurants === 'home' && (
        <div className={styles['restaurants-child-container']}>
          <div className={styles['restaurants-image-container']}>
            <img
              src={BlackOrchid.src}
              alt="backgroundimg"
              className={styles['restaurants-image-banner']}
            />
            <div className={styles['restaurants-image-child-container']}>
              <img src={BlackOrchid_Logo.src} alt="logo" />
            </div>
          </div>
          <div className={styles['restaurants-button-container-parent']}>
            <div className={styles['restaurants-button-child-container']}>
              <p className={styles['restaurants-text']}>
                Happy hours: 5:30 - 7 pm everyday
              </p>
              <button className={styles['restaurants-button']}>Reservation</button>
              <button
                className={styles['restaurants-button']}
                onClick={() => navigation('menu')}
              >
                Menu
              </button>
              <button className={styles['restaurants-button']}>Write a review</button>
              <button className={styles['restaurants-button']}>Locations</button>
            </div>
          </div>
          <div className={styles['restaurants-icons']}>
            <p>
              <Insta />
            </p>
            <p>
              <Facebook />
            </p>
            <p>
              <ResTwitter />
            </p>
          </div>
        </div>
      )}
      {restaurants === 'menu' && (
        <div className={styles['restaurants-child-container']}>
          <div
            onClick={() => navigation('home')}
            style={{ position: 'absolute', top: '20px', left: '20px', color: 'white', zIndex: '5' }}
          >
            back
          </div>
          <img src={ResMenu.src} className={styles['restaurants-menu-img']} />
        </div>
      )}
    </div>
  );
};

export default Restaurants;