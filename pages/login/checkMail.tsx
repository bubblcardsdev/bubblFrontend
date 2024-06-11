/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-unused-vars */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import checkMail from "../../images/Bubbl-Post_Login_Asset/Login/login_mail.svg";
import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import checkmailimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";

import styles from "./index.module.css";

export default function Login() {
  return (
    <section
      className={styles["login-page"]}
      style={{
        backgroundImage: `url(${checkmailimg.src})`,
      }}
    >
      <div className={`${styles["sign-up-page"]} container`}>
        <div className={styles.loginSpace}>
          <LoginLeft />
        </div>

        <div>
          <div className={styles.logo}>
            <Image src={BubblLogo} alt="bubbl" />
          </div>

          <div className={styles.login_right}>
            <div className={styles.mailImage}>
              <Image src={checkMail} alt="bubbl" />
            </div>
            <h1 className={styles.checkmail}>Check your Mail</h1>
            <p className={styles.mailcont}>
              We have sent a password recover instructions to your mail.
            </p>

            <div className={styles.returnWebsiteContainer}>
              <div className={styles.contentContainer}>
                <p className={styles.websiteContainer}>
                  Back to{" "}
                  <a href="/">
                    <span>Website </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
