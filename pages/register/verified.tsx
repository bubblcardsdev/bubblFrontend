import Image from "next/image";
import LoginLeft from "src/App/components/ui/Login/Login_left";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import verified from "../../images/Bubbl-Post_Login_Asset/Sign_up/verifeid_successfully-icon.svg";
import styles from "./register.module.css";

export default function verfied() {
  return (
    <div
      className={styles.login_page}
      style={{
        backgroundImage: `url(${bubblepattern.src})`,
      }}
    >
      <div className={styles.loginPageBubbl}>
        <div className="container">
          <div className={styles.signUp_page}>
            <LoginLeft />
            <div>
              <div className={styles.logo}>
                <Image src={BubblLogo} alt="bubbl" />
              </div>
              <div className={styles.login_right}>
                <h1 className={styles.right_heading}>Sign Up</h1>
                <div className={styles.verify}>
                  <Image src={verified} alt="bubbl" />
                </div>
                <h4 className={styles.loginrt_msg}>
                  A verification email has been sent
                </h4>

                <h6 className={styles.linkotp}>
                  to continue Sign up <br />
                  click on the link sent to your email address
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
