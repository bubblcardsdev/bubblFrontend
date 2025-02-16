import Image from "next/image";
import LoginLeft from "src/App/components/ui/Login/Login_left";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import verified from "../../images/Bubbl-Post_Login_Asset/Sign_up/verifeid_successfully-icon.svg";
import alert from "../../images/Bubbl-Post_Login_Asset/Sign_up/invalid_alert-icon.svg";
import styles from "./register.module.css";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { resendMailOTP, verifyEmailOtp } from "src/App/services/api";
import { useRouter } from "next/router";

export default function verfied() {
  const [otpInput, setOtpInput] = useState("");
  const router = useRouter();
  const { email }: any = router.query;
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MINUTE = 1;
  const SECONDS = 30;
  const [minutes, setMinutes] = useState(MINUTE);
  const [seconds, setSeconds] = useState(SECONDS);
  const validateOtpRegex = /^\d{6}$/;
  const onChange = (value: string) => {
    const input = value ? value.slice(0, 6) : "";
    setOtpInput(input);
    console.log(validateOtpRegex.test(input));
    if (!validateOtpRegex.test(input)) setError("Please enter a valid Otp");
    else setError("");
  };
  const onSubmit = () => {
    setIsSubmitting(true);
    verifyEmailOtp({ otp: otpInput, email: email }).then((data) => {
      if (data.success) {
        router.push("/register/emailverify");
        return;
      } else {
        setError(data?.data?.message || "Something Went Wrong!!!");
      }
      console.log(data);
      setIsSubmitting(false);
    });
  };

  const resendOTPHandler = () => {
    resendMailOTP(email).then((data) => {
      if (data.success) {
        setMinutes(MINUTE);
        setSeconds(SECONDS);
      }
    });
  };
  console.log(minutes, seconds);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

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
                <h1 className={styles.right_heading} style={{ paddingTop: 25 }}>
                  Sign Up
                </h1>
                <div className={styles.verify}>
                  <Image src={verified} alt="bubbl" />
                </div>
                <h4 className={styles.loginrt_msg}>
                  A verification code has been sent to your email
                </h4>
                <div className={styles.confirmPassword}>
                  <p className={styles.inputHead}>Enter OTP</p>
                  <div className="position-relative">
                    <input
                      autoComplete="off"
                      type="Please Enter your OTP"
                      className={styles.emailBar}
                      style={{ paddingLeft: 20 }}
                      value={otpInput}
                      onChange={(e: any) => onChange(e?.target?.value)}
                    />
                  </div>
                  {error && (
                    <p
                      role="alert"
                      style={{
                        backgroundImage: `url(${alert.src})`,
                        color: "red",
                        position: "absolute",
                        marginTop: 5,
                      }}
                      className={styles.errorMessage}
                    >
                      {error}
                    </p>
                  )}
                </div>
                <div className={styles.button} style={{ paddingBottom: 30 }}>
                  <Button
                    className={styles.nextBtn}
                    variant="primary"
                    disabled={!validateOtpRegex.test(otpInput)}
                    onClick={() => onSubmit()}
                  >
                    {!isSubmitting && "Submit"}
                    {isSubmitting && (
                      <Spinner animation="grow" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                  </Button>
                  {(seconds === SECONDS && minutes === MINUTE) ||
                  (seconds === 0 && minutes === 0) ? (
                    <div className={styles.resend_otp}>
                      <button
                        className={styles.resend}
                        disabled={seconds > 0 || minutes > 0}
                        style={{
                          color:
                            seconds > 0 || minutes > 0 ? "#DFE3E8" : "#af38d6",
                        }}
                        onClick={resendOTPHandler}
                      >
                        Resend OTP
                      </button>
                    </div>
                  ) : (
                    <div className={styles.resend_otp}>
                      <p style={{ textAlign: "center", color: "#af38d6" }}>
                        {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                      </p>
                    </div>
                  )}
                </div>
                {/* <h6 className={styles.linkotp}>
                  to continue Sign up <br />
                  click on the link sent to your email address
                </h6> */}
                <h6 className={styles.linkotp}>
                  to continue Sign up <br />
                  enter the OTP sent to your email address
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
