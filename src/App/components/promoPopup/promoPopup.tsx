import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./promoPopup.module.css";

interface Props {
  visible: boolean;
  onHide: Function;
}

const PromoPopup = (props: any) => {
  const { visible, onHide } = props;
  const router = useRouter();
  const onPromoClick = () => {
    router.push("/shopPage");
    onHide();
  };
  return (
    visible && (
      <div className={styles.popupBg}>
        <div className={styles.popupContainer}>
          <span className={styles.popupClose} onClick={() => onHide()}>
            <Image src="/close.png" alt="/close.png" width={96} height={96} />
          </span>
          <span className={styles.popupImg} onClick={() => onPromoClick()}>
            <Image
              src="/independenceDayPoster.jpg"
              alt="/independenceDayPoster.jpg"
              width={500}
              height={500}
            />
          </span>
        </div>
      </div>
    )
  );
};

export default PromoPopup;
