/* eslint-disable prettier/prettier */
import Image from "next/image";
import { useRouter } from "next/router";

import footermobile from "../../../../public/template/icons/SVG/template_footer.svg";
import styles from "./footer.module.css";

export default function Footer() {
  const router = useRouter();
  const subscribeBtn = () => {
    router.push("/bubblpro");
  };
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer}>
        <div className={styles.footer_img}>
          <Image
            className={styles.mobile_image}
            src={footermobile}
            alt="account"
          />
        </div>
        <div className={styles.mobile_content}>
          <h2>Subscribe to</h2>
          <p>Bubbl<span> PRO</span></p>
          <button
            type="button"
            className={styles.subscribe_btn}
            onClick={subscribeBtn}
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}
