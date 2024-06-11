/* eslint-disable react/button-has-type */
import Image from "next/image";

import arrow from "../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import styles from "./button.module.css";

export default function ButtonShop() {
  return (
    <button className={styles.buttonShop}>
      <p>GET YOURS NOW</p>
      <Image src={arrow} className={styles.arw} alt="bubbl" />
    </button>
  );
}
