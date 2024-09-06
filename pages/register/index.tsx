/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FacebookLogin from "react-facebook-login";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import LoginLeft from "src/App/components/ui/Login/Login_left";
import {
  getclaimName,
  setAccessToken,
  setEmail,
  setfirstName,
  setlastName,
} from "src/App/helpers/local-storage";
import { registerUser } from "src/App/services/api";
import { updateClaimLink } from "src/App/services/claimLink/claimLink";
import {
  FacebookLoginApi,
  GoogleLoginApi,
  LinkedInLoginApi,
} from "src/App/services/ssoLogin";
import { IFormInputs } from "types/register";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import bubblepattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import eyeClose from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye_close_icon.svg";
import eyeOpen from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye-icon.svg";
import facebook from "../../images/Bubbl-Post_Login_Asset/Sign_up/facebook-logo.svg";
import google from "../../images/Bubbl-Post_Login_Asset/Sign_up/google-logo.svg";
import alert from "../../images/Bubbl-Post_Login_Asset/Sign_up/invalid_alert-icon.svg";
import linkdin from "../../images/Bubbl-Post_Login_Asset/Sign_up/linkdin-logo.svg";
import emailimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/mail_icon.svg";
import passwordimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/password_icon.svg";
import styles from "./register.module.css";

const formConfig = [
  {
    field: "firstName",
    labels: "First Name",
    className: styles.first_name,
    placeholder: "Enter your first name",
    validationRules: {
      required: {
        string: /^(?!\s*$)[a-zA-Z\s]+$/,
        value: true,
        message: "First Name is required",
      },
    },
  },
  {
    field: "lastName",
    labels: "Last Name",
    className: styles.last_name,
    placeholder: "Enter your last name",
    validationRules: {
      required: {
        string: /^(?!\s*$)[a-zA-Z\s]+$/,
        value: true,
        message: "Last Name is required",
      },
    },
  },
  {
    field: "email",
    labels: "Email ID",
    className: styles.email,
    placeholder: "Enter your mail id",
    validationRules: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Invalid email address",
      },
    },
  },
  {
    field: "password",
    labels: "Password",
    className: styles.password,
    placeholder: "Enter password",
    type: "password",
    validationRules: {
      required: { value: true, message: "Password is required" },
      minLength: {
        value: 8,
        message:
          "Use 8 or more character with a mix of letter, number & symbols",
      },
      pattern: {
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        message:
          "Use 8 or more character with a mix of letter, number & symbols",
      },
    },
  },
];

export default function RegisterPage() {
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirmPassword, setRevealConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    clearErrors,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
    watch,
    setError,
  } = useForm<IFormInputs>({ mode: "onChange" });
  const [isInsatagram, setIsInsatagram] = useState(false);

  const email = getValues("email");

  const password = useRef({});

  const router = useRouter();

  password.current = watch("password", "");

  const updateClaimName = async (emailId: any) => {
    const claimObj: any = {
      claimLinkName: getclaimName(),
      emailId: emailId,
    };
    const claimName = await updateClaimLink(claimObj);
  };
  // To send deviceID to backend to add data to email
  const addDeviceId = (currentData: any) => {
    let deviceID: string = "";
    const tempData = localStorage.getItem("deviceNumber");
    if (tempData !== null) {
      deviceID = tempData;
    }
    const updatedData = { ...currentData };
    if (deviceID !== "") {
      updatedData.deviceID = deviceID;
    } else {
      updatedData.deviceID = " ";
    }
    return updatedData;
  };
  const onSubmit: SubmitHandler<IFormInputs> = ({
    confirmPassword,
    ...registerData
  }) => {
    const registerDataNew = addDeviceId(registerData);
    setIsSubmitting(true);
    registerUser(registerDataNew).then((data) => {
      if (data.success) {
        const email = registerData?.email?.toLocaleLowerCase();
        setEmail(email);
        updateClaimName(email);
        router.replace(`register/${email}`);
        return;
      }

      setError("email", {}, { shouldFocus: true });
      setError("serverEmail", {
        type: "unique",
        message: data.data.message,
      });
      setIsSubmitting(false);
    });
  };

  const responseMessage = async (response: any) => {
    const responseObj = {
      credential: response?.credential,
    };
    const responseVal = await GoogleLoginApi(responseObj);
    const toeknVal = responseVal?.data?.data?.token?.accessToken;
    setfirstName(responseVal?.data?.data?.firstName);
    setlastName(responseVal?.data?.data?.lastName);
    setAccessToken(responseVal?.data?.data?.token?.accessToken);

    if (toeknVal) {
      router.replace("/bubblProfiles");
    }
  };

  const responseFacebook = async (response: any) => {
    const responseObj = {
      accesstoken: response?.accessToken,
    };
    const responseVal = await FacebookLoginApi(responseObj);
    const token = responseVal?.data?.data?.token?.accessToken;
    setfirstName(responseVal?.data?.data?.firstName);
    setlastName(responseVal?.data?.data?.lastName);
    setAccessToken(responseVal?.data?.data?.token?.accessToken);

    if (token) {
      router.replace("/bubblProfiles");
    }
  };
  const linkedVal =
    // "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78oczkl0lo3jqj&redirect_uri=http://localhost:3000/linkedin&scope=profile%20email%20openid";

    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78oczkl0lo3jqj&redirect_uri=https://bubbl.cards/linkedin&scope=profile%20email%20openid";

  const LinkedInFunction = async (response: any) => {
    alert("edcwec");

    const responseObj = {
      authorizationCode: response?.authorizationCode,
    };
    const responseVal = await LinkedInLoginApi(responseObj);
    const toeknVal = responseVal?.data?.data?.token?.accessToken;
    setfirstName(responseVal?.data?.data?.firstName);
    setlastName(responseVal?.data?.data?.lastName);
    setAccessToken(responseVal?.data?.data?.token?.accessToken);

    if (toeknVal) {
      router.replace("/bubblProfiles");
    }
  };

  useEffect(() => {
    clearErrors("serverEmail");
    if (navigator?.userAgent.includes("Instagram")) {
      setIsInsatagram(true);
    }
  }, [clearErrors, email]);

  const [firstNameField, lastNameField] = formConfig
    .slice(0, 2)
    .map((fieldConfig) => {
      const { className, type, placeholder, validationRules, labels } =
        fieldConfig;
      const field = fieldConfig.field as keyof IFormInputs;

      return (
        <Form.Group key={fieldConfig.field} className={className}>
          <p className={styles.inputHead}>{labels}</p>
          <input
            autoComplete="nope"
            type={type || "text"}
            className={`${styles.fields} ${styles.fieldgap}`}
            placeholder={placeholder}
            {...register(field, validationRules)}
          />

          {errors[field]?.message && (
            <p
              role="alert"
              className={styles.errorMessage}
              style={{
                backgroundImage: `url(${alert.src})`,
                color: "red",
              }}
            >
              {errors[field]?.message}
            </p>
          )}
        </Form.Group>
      );
    });

  const emailConfig = formConfig[2];
  const emailField = (
    <Form.Group key={emailConfig.field} className={emailConfig.className}>
      <p className={styles.inputHead}>{emailConfig.labels}</p>

      <input
        autoComplete="off"
        type={emailConfig.type}
        className={styles.fields}
        placeholder={emailConfig.placeholder}
        style={{
          backgroundImage: `url(${emailimg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "14px 8px",
        }}
        {...register(
          emailConfig.field as keyof IFormInputs,
          emailConfig.validationRules
        )}
      />
      {errors[emailConfig.field as keyof IFormInputs]?.message && (
        <p
          role="alert"
          style={{
            backgroundImage: `url(${alert.src})`,
            color: "red",
          }}
          className={styles.errorMessage}
        >
          {errors[emailConfig.field as keyof IFormInputs]?.message}
        </p>
      )}
      {errors.serverEmail?.message && (
        <p
          role="alert"
          className={styles.errorMessage}
          style={{
            backgroundImage: `url(${alert.src})`,
            color: "red",
            position: "absolute",
            backgroundRepeat: "no-repeat",
          }}
        >
          {errors.serverEmail.message}
        </p>
      )}
    </Form.Group>
  );

  const passwordConfig = formConfig[3];
  const passwordField = (
    <Form.Group key={passwordConfig.field} className={passwordConfig.className}>
      <p className={styles.inputHead}>{passwordConfig.labels}</p>
      <div className="position-relative">
        <input
          autoComplete="off"
          onCopy={(e: any) => {
            e.preventDefault();
            return false;
          }}
          type={revealPassword ? "text" : "password"}
          className={styles.fields}
          placeholder={passwordConfig.placeholder}
          style={{
            backgroundImage: `url(${passwordimg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "14px 8px",
          }}
          {...register(
            passwordConfig.field as keyof IFormInputs,
            passwordConfig.validationRules
          )}
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
      {errors[passwordConfig.field as keyof IFormInputs]?.message && (
        <p
          role="alert"
          style={{
            backgroundImage: `url(${alert.src})`,
            color: "red",
          }}
          className={styles.errorMessage}
        >
          {errors[passwordConfig.field as keyof IFormInputs]?.message}
        </p>
      )}
    </Form.Group>
  );

  return (
    <div
      className={styles.login_page}
      style={{
        backgroundImage: `url(${bubblepattern.src})`,
      }}
    >
      <ToastContainer />
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

                <Form onSubmit={handleSubmit(onSubmit)} autoComplete="nope">
                  <div className={styles.signUp_fieldName}>
                    {firstNameField}
                    {lastNameField}
                  </div>
                  {emailField}
                  {passwordField}
                  <Form.Group
                    className={styles.confirmPassword}
                    controlId="confirm-password"
                  >
                    <p className={styles.inputHead}>Confirm Password</p>
                    <div className="position-relative">
                      <input
                        autoComplete="off"
                        type={revealConfirmPassword ? "text" : "password"}
                        className={styles.emailBar}
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
                    </div>

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
                  </Form.Group>
                  <div className={styles.button}>
                    <Button
                      className={styles.nextBtn}
                      variant="primary"
                      type="submit"
                      disabled={!isValid || isSubmitting}
                    >
                      {!isSubmitting && "Sign up"}
                      {isSubmitting && (
                        <Spinner animation="grow" role="status" size="sm">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      )}
                    </Button>
                  </div>

                  {!isInsatagram && (
                    <>
                      <p className={styles.loginUsing}>or sign up using</p>
                      <div className={styles.social}>
                        <div className={styles.google}>
                          <GoogleOAuthProvider clientId="381109639208-5a8i0egsdut082f395brann2n340lbpe.apps.googleusercontent.com">
                            <GoogleLogin
                              onSuccess={responseMessage}
                              useOneTap
                            />
                          </GoogleOAuthProvider>
                        </div>
                        <div className={styles.facebook}>
                          <FacebookLogin
                            appId="1173697296846078"
                            textButton=""
                            fields="id,name,email"
                            scope="public_profile,email"
                            responseType="token"
                            callback={responseFacebook}
                            icon="fa-facebook"
                          />
                        </div>
                        <a href={linkedVal}>
                          <Image src={linkdin} alt="bubbl" />
                        </a>
                      </div>
                    </>
                  )}
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
