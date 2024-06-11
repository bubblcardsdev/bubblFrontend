/* eslint-disable simple-import-sort/imports */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInputs } from "types/register";
import { useRouter } from "next/router";
import { changePassword } from "src/App/services/api";
import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import eyeClose from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye_close_icon.svg";
import eyeOpen from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye-icon.svg";
import forgotpassoword from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import passwordimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/password_icon.svg";
import alert from "../../images/Bubbl-Post_Login_Asset/Sign_up/invalid_alert-icon.svg";

import styles from "../login/index.module.css";

export default function ForgotPasswordVerify() {
  const router = useRouter();

  const { forgotPasswordId } = router.query;
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<IFormInputs>({ mode: "onChange" });

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit: SubmitHandler<IFormInputs> = ({ password: newPassword }) => {
    changePassword(newPassword, forgotPasswordId as string).then((data) => {
      if (data.success) {
        router.push("/login");
      }
    });
  };

  const passwordValidationRules = {
    required: { value: true, message: "Password is required" },
    minLength: {
      value: 8,
      message: "Use 8 or more character with a mix of letter, number & symbols",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: "Use 8 or more character with a mix of letter, number & symbols",
    },
  };

  return (
    <section
      className={styles["login-page"]}
      style={{
        backgroundImage: `url(${forgotpassoword.src})`,
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
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("password", passwordValidationRules)}
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
                  {errors.password?.message && (
                    <p
                      role="alert"
                      className={styles.errorMessage}
                      style={{
                        backgroundImage: `url(${alert.src})`,
                        color: "red",
                      }}
                    >
                      {errors.password?.message}
                    </p>
                  )}
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
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
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
                  {errors.confirmPassword && (
                    <p
                      role="alert"
                      style={{
                        backgroundImage: `url(${alert.src})`,
                        color: "red",
                        position: "absolute",
                      }}
                      className={styles.errorMessage}
                    >
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </Form.Group>
              <div className={styles.space} />
              <Button
                className={styles.nextBtn}
                variant="primary"
                type="submit"
                disabled={!isValid}
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
