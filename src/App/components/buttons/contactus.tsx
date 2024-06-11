/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter } from "next/router";

import arrows from "../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import styles from "./button.module.css";

export default function ContactUs() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/contact")}
      className={styles.buttonShopNow}
    >
      <p>CONTACT US</p>
      <Image src={arrows} className={styles.buttonShopNow} alt="bubbl" />
    </button>
  );
}
