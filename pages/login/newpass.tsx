/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormInputs } from "types/register";
import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import eyeClose from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye_close_icon.svg";
import pattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import eyeOpen from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye-icon.svg";
import passwordimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/password_icon.svg";

import styles from "./index.module.css";

export default function Login() {
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);

  const { watch } = useForm<IFormInputs>({ mode: "onChange" });

  const password = useRef({});

  password.current = watch("password", "");

  return (
    <section
      className={styles["login-page"]}
      style={{
        backgroundImage: `url(${pattern.src})`,
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
            <h1 className={styles.forgotheading}>Create New Password</h1>
            <div className={styles.frgtpas}>
              <p className={styles.newpasw}>
                Your new password must be different from previous used
                passwords.
              </p>
            </div>
            <Form autoComplete="nope">
              <Form.Group
                className={styles.confirmPassword}
                controlId="confirm-password"
              >
                <p className={styles.inputHead}>Password</p>
                <div className="position-relative">
                  <input
                    autoComplete="nope"
                    type={revealPassword ? "text" : "password"}
                    className={styles.passwordBar}
                    style={{
                      backgroundImage: `url(${passwordimg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "14px 8px",
                    }}
                    placeholder="Enter Password"
                  />

                  <span className={styles["eye-icon"]}>
                    <Image
                      alt="bubbl"
                      src={revealPassword ? eyeOpen : eyeClose}
                      onClick={() => {
                        setRevealPassword((isReveal) => !isReveal);
                      }}
                    />
                  </span>
                </div>
              </Form.Group>
              <Form.Group
                className={styles.confirmPassword}
                controlId="confirm-password"
              >
                <p className={styles.inputHead}>Confirm Password</p>
                <div className="position-relative">
                  <input
                    autoComplete="nope"
                    type={revealConfirmPassword ? "text" : "password"}
                    className={styles.passwordBar}
                    style={{
                      backgroundImage: `url(${passwordimg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "14px 8px",
                    }}
                    placeholder="Confirm Password"
                  />

                  <span className={styles["eye-icon"]}>
                    <Image
                      alt="bubbl"
                      src={revealConfirmPassword ? eyeOpen : eyeClose}
                      onClick={() => {
                        setRevealConfirmPassword((isReveal) => !isReveal);
                      }}
                    />
                  </span>
                </div>
              </Form.Group>
              <div className={styles.space} />
              <Button
                className={styles.nextBtn}
                variant="primary"
                type="submit"
              >
                Reset Password
              </Button>

              <div className={styles.gaptwo} />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
