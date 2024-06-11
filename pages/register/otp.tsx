/* eslint-disable no-unused-vars */
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import styles from "./register.module.css";

export default function otp() {
  return (
    <div
      className={styles.login_page}
      style={{
        backgroundImage: `url(${bubblepattern.src})`,
      }}
    >
      {/* removed check in git */}
    </div>
  );
}
