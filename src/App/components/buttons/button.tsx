import Image from "next/image";

import call from "../../../../public/profile/call_icon.svg";
import styles from "./button.module.css";

export default function ButtonApi() {
  return (
    <div className="container">
      <div className={styles.buttonApi}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.button}>
          Save Contact
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className={styles.buttontwo}>
          <Image src={call} alt="bubbl" />
        </a>
      </div>
    </div>
  );
}
