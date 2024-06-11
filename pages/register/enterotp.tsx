/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable consistent-return */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEventHandler, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import OtpInputGroup from "src/App/components/ui/otp/OtpInput";
import {
  getcountryCode,
  getEmail,
  getphoneNumber,
  removecountryCode,
  removephoneNumber,
} from "src/App/helpers/local-storage";
import { resendOTP, verifyOTP } from "src/App/services/api";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import styles from "./register.module.css";

export default function EnterOtp() {
  const MINUTE = 1;
  const SECONDS = 30;
  const [otp, setOtp] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [minutes, setMinutes] = useState(MINUTE);
  const [seconds, setSeconds] = useState(SECONDS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resendOTPHandler = () => {
    resendOTP(countryCode, phoneNumber).then((data) => {
      if (data.success) {
        setMinutes(MINUTE);
        setSeconds(SECONDS);
      }
    });
  };

  const router = useRouter();

  useEffect(() => {
    const CountryCodeValue: any = getcountryCode();
    const PhoneNumberValue: any = getphoneNumber();
    if (!CountryCodeValue && !PhoneNumberValue) {
      router.replace("/");
    }
    setCountryCode(CountryCodeValue);
    setPhoneNumber(PhoneNumberValue);
  }, [router]);

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

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    if (countryCode && phoneNumber && otp) {
      verifyOTP(countryCode, phoneNumber, otp)
        .then((data) => {
          if (data.success) {
            router.replace("./verified");
            return;
          }
          setErrorMessage(data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onChange = (value: string) => {
    setOtp(value);
    setErrorMessage("");
  };
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
                <h4 className={styles.loginrt_otp}>Check your Phone</h4>
                <p className={styles.loginrt_para}>
                  We've sent a 4-digit confirmation code to your Phone Number.
                  Make sure you enter the correct code.
                </p>
                <Form onSubmit={submitHandler} autoComplete="nope">
                  <OtpInputGroup onChange={onChange} />
                  <div className={styles.countdownText}>
                    <p style={{ textAlign: "right" }}>
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  </div>
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                  <Button
                    className={styles.nextBtn}
                    variant="primary"
                    type="submit"
                    disabled={otp.length !== 4 || isSubmitting}
                  >
                    {!isSubmitting && "Verify"}
                    {isSubmitting && (
                      <Spinner animation="grow" role="status" size="sm">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                  </Button>
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

                  <br />
                  <p className={styles.alreadyacct}>
                    Already have an account?{" "}
                    <Link href="/login">
                      <span className={styles.signup}>Log in</span>
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
