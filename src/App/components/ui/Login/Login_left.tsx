import Image from "next/image";

import bubblCard from "../../../../../images/Bubbl-Post_Login_Asset/Login/sign_up.svg";
// eslint-disable-next-line import/no-unresolved
import styles from "./Login_Left.module.css";

function LoginLeft() {
  return (
    <div className={styles.login_left}>
      <div className={styles.bubblCard}>
        <Image src={bubblCard} alt="bubbl card" />
      </div>

      <p className={styles.LoginHeading}>Create your</p>
      <p className={styles.LoginHeadingTwo}>Bubbl Account</p>
    </div>
  );
}

export default LoginLeft;
