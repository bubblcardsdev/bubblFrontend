/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEventHandler, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import { forgotPassword } from "src/App/services/api";
import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import forgotPass from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import emailimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/mail_icon.svg";
import styles from "./index.module.css";

// Reference: https://www.w3.org/TR/2012/WD-html-markup-20120329/input.email.html
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    forgotPassword(email).then((data) => {
      if (data.success) {
        router.push("/login/checkMail");
        return;
      }
      const { message } = data.data;
      setErrorMessage(message);
    });
  };
  return (
    <section
      className={styles["login-page"]}
      style={{
        backgroundImage: `url(${forgotPass.src})`,
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
            <h1 className={styles.forgotheading}>Forgot Password</h1>
            <p className={styles.forgotpasw}>
              Enter the email id associated with your account
            </p>
            <Form onSubmit={onSubmitHandler} autoComplete="nope">
              <Form.Group className={styles.email}>
                <p className={styles.inputHead}>Email ID</p>
                <input
                  autoComplete="nope"
                  type="email"
                  className={styles.emailBar}
                  style={{
                    backgroundImage: `url(${emailimg.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "14px 8px",
                  }}
                  placeholder="Enter your registered email ID"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMessage("");
                  }}
                />
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
              </Form.Group>
              <div className={styles.space} />
              <Button
                className={styles.nextBtn}
                variant="primary"
                type="submit"
                disabled={!EMAIL_REGEX.test(email)}
              >
                Request Reset Link
              </Button>
              <Link href="/login">
                <p className={styles.cancel}>Cancel</p>
              </Link>
              <div className={styles.gap} />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
