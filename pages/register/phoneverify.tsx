/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PhoneInput, { CountryData } from "react-phone-input-2";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import {
  getEmail,
  removeEmail,
  setcountryCode,
  setphoneNumber,
} from "src/App/helpers/local-storage";
import { addPhoneNumber } from "src/App/services/api";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import styles from "./register.module.css";

export default function PhoneVerify() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const email = getEmail();

    if (email) {
      setIsSubmitting(true);
      addPhoneNumber({ email, phoneNumber, countryCode }).then((data) => {
        if (data.success) {
          setcountryCode(countryCode);
          setphoneNumber(phoneNumber);
          removeEmail();
          router.push("/register/enterotp");
          return;
        }
        setErrorMessage(data.message || "");

        setIsSubmitting(false);
      });
    }
  };

  const assignNumber = (value: string, country: CountryData): void => {
    const { dialCode } = country;
    if (dialCode) {
      const countryCode = `+${dialCode}`;
      const mobileNumber = value.replace(dialCode, "").replaceAll(/[^\d]/g, "");
      setPhoneNumber(mobileNumber);
      setCountryCode(countryCode);
    }
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
                <p className={styles.verify_phnNum}>Verify Phone Number</p>
                <Form onSubmit={submitHandler} autoComplete="nope">
                  <Form.Group className={styles.confirmPass}>
                    <p className={styles.inputHead}>Phone Number</p>

                    <div className={styles.mobile_flag}>
                      <PhoneInput
                        country="in"
                        placeholder="Enter your mobile number"
                        countryCodeEditable={false}
                        enableSearch
                        onChange={(value, country) => {
                          assignNumber(value, country as CountryData);
                          setErrorMessage("");
                        }}
                        inputProps={{
                          required: true,
                          autoFocus: true,
                        }}
                      />
                    </div>
                    {errorMessage && (
                      <p
                        style={{
                          color: "red",
                          marginTop: "-8px",
                          fontSize: "12px",
                        }}
                      >
                        {errorMessage}
                      </p>
                    )}
                  </Form.Group>
                  <div className={styles.button}>
                    <Button
                      className={styles.nextBtn}
                      variant="primary"
                      type="submit"
                      disabled={phoneNumber.length !== 10 || isSubmitting}
                    >
                      {!isSubmitting && "Get OTP"}
                      {isSubmitting && (
                        <Spinner animation="grow" role="status" size="sm">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      )}
                    </Button>
                  </div>
                </Form>
                <div className={styles.cancelbutton}>
                  <Link href="/register">
                    <button className={styles.cancel}>Cancel</button>
                  </Link>
                </div>
                <p className={styles.alreadyacct}>
                  Already have an account?
                  <Link href="/login">
                    <span className={styles.signup}> Log in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
