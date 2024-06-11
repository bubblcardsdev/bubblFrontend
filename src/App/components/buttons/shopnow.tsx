import Image from "next/image";
import { useRouter } from "next/router";

import arrow from "../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import styles from "./button.module.css";

export default function ShopButton() {
  const router = useRouter();
  const onClick = () => {
    router.push("/shop");
  };
  return (
    <button type="button" className={styles.buttonShopNow} onClick={onClick}>
      <p>BUY NOW</p>
      <Image src={arrow} className={styles.arw} alt="bubbl" />
    </button>
  );
}

ShopButton.defaultProps = { onClick: undefined };
