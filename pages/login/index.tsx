/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
import LoginLeft from "src/App/components/ui/Login/Login_left";
import {
  getAccessToken,
  getCartValue,
  getCheckLogin,
  getclaimName,
  getRefreshToken,
  getRouteValue,
  getShippingDetails,
  removeRouteVal,
  setAccessToken,
  setAddDataFlag,
  setclaimName,
  setExperimentTime,
  setfirstName,
  setlastName,
  setRefreshToken,
} from "src/App/helpers/local-storage";
import { login } from "src/App/services/api";
import { updateClaimLink } from "src/App/services/claimLink/claimLink";
import { listingData } from "src/App/services/createProfileApi";
import { AddFullyCustomApi } from "src/App/services/fullyCustom/fullyCustomCards";
import { AddCartApi } from "src/App/services/nameCustom/nameCustom";
import { shippingDetails } from "src/App/services/shippingDetails";
import {
  addCartItem,
  getCartItems,
} from "src/App/services/shopPage/shopServices";
import {
  FacebookLoginApi,
  GoogleLoginApi,
  LinkedInLoginApi,
} from "src/App/services/ssoLogin";
import { FormInputsT } from "types/login";
import { IFormInputs } from "types/register";

import BubblLogo from "../../images/Bubbl-Post_Login_Asset/Login/bubbl-logo.svg";
import pattern from "../../images/Bubbl-Post_Login_Asset/Sign_up/bubbl-patter-img.png";
import eyeClose from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye_close_icon.svg";
import eyeOpen from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye-icon.svg";
import alert from "../../images/Bubbl-Post_Login_Asset/Sign_up/invalid_alert-icon.svg";
import linkdin from "../../images/Bubbl-Post_Login_Asset/Sign_up/linkdin-logo.svg";
import emailimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/mail_icon.svg";
import passwordimg from "../../images/Bubbl-Post_Login_Asset/Sign_up/password_icon.svg";
import styles from "./index.module.css";

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const [allProfile, setAllProfile] = useState<any>([]);

  const { watch } = useForm<IFormInputs>({ mode: "onChange" });

  const password = useRef({});

  password.current = watch("password", "");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormInputsT>({ mode: "onBlur" });

  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState("");
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [isInsatagram, setIsInsatagram] = useState(false);

  const router = useRouter();
  let isExp = false;

  const getProfiles = async () => {
    const token = getAccessToken();
    if (!isExp) {
      isExp = true;
      if (token !== null) {
        const profResponse = await listingData();
        return profResponse;
      }
    }
  };

  const updateClaimName = async (email: any) => {
    const claimObj: any = {
      claimLinkName: getclaimName(),
      emailId: email,
    };
    const claimName = await updateClaimLink(claimObj);
  };

  const linkedVal =
    // "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78oczkl0lo3jqj&redirect_uri=http://localhost:3000/linkedin&scope=profile%20email%20openid";

    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78oczkl0lo3jqj&redirect_uri=https://bubbl.cards/linkedin&scope=profile%20email%20openid";

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      getProfiles().then((respDatas) => {
        if (respDatas?.success) {
          respDatas?.data?.devices?.length >= 1
            ? router.push("/bubblProfiles")
            : router.push("/createProfileStep1");
        }
      });
    }
    if (navigator?.userAgent.includes("Instagram")) {
      setIsInsatagram(true);
    }
  }, [router]);

  // eslint-disable-next-line no-shadow
  const onSubmit: SubmitHandler<FormInputsT> = async ({ email, password }) => {
    login(email, password).then(async (respData) => {
      const { token, firstName, lastName, error } = respData;

      if (token) {
        const timeNow = Date.now();
        const timeNowInSeconds = Math.floor(timeNow / 1000);
        const timeToExpire =
          timeNowInSeconds + (token.accessTokenExpiryInSeconds - 1000);

        setExperimentTime(timeToExpire.toString());

        const claim = getclaimName();
        if (claim !== null) {
          updateClaimName(email);
        }
        setfirstName(firstName);
        setlastName(lastName);
        setAccessToken(token.accessToken);
        const toeknVal = token.accessToken;
        if (toeknVal) {
          const checkLogin = await getCheckLogin();
          if (checkLogin === "true") {
            const checkLogin: any = await getCheckLogin();
            if (checkLogin === "true") {
              const getCartItem: any = getCartValue();
              const allItems = JSON.parse(getCartItem);
              // Parse the cart items

              console.log(allItems, "getCart");

              // Create an array of promises
              const promises = allItems.map(
                async (item: {
                  deviceType: string | string[];
                  deviceColor: any;
                  deviceInventorId: any;
                  fontColor: any;
                  fontStyle: any;
                  name: any;
                  price: any;
                  quanitiy: any;
                  productType: any;
                  quantity: any;
                  productColor: any;
                  productPrice: any;
                }) => {
                  if (item?.deviceType?.includes("NC-")) {
                    const itemObj = {
                      deviceColor: item.deviceColor,
                      deviceInventorId: item?.deviceInventorId,
                      deviceType: item.deviceType,
                      fontColor: item.fontColor,
                      fontStyle: item.fontStyle,
                      name: item.name,
                      price: item.price,
                      quanitiy: item.quantity || item.quanitiy,
                    };

                    // Return the promise from AddCartApi
                    return AddCartApi(itemObj);
                  }
                  if (item?.deviceType?.includes("Full Custom")) {
                    const fullItemObj = {
                      quantity: item.quantity || item.quanitiy,
                      price: item.price,
                      deviceColor: item?.deviceColor,
                      deviceType: item?.deviceType,
                    };

                    // Return the promise from AddFullyCustomApi
                    return AddFullyCustomApi(fullItemObj);
                  }
                  const cartObj = {
                    productType: item.productType || item?.deviceType,
                    quantity: item.quantity || item?.quanitiy,
                    productColor: item.productColor,
                    productPrice: item.productPrice,
                    productStatus: true, // to be removed once API updated
                  };
                  const cartItemObj = {
                    cartItem: cartObj,
                  };

                  // Return the promise from addCartItem
                  return addCartItem(cartItemObj);
                }
              );

              Promise.all(promises)
                .then(async (responses) => {
                  console.log("All items processed:", responses);

                  const cart = await getCartItems();
                  const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
                  if (orderId) {
                    const shippingDetail = getShippingDetails();
                    if (shippingDetail && shippingDetail.length > 0) {
                      const shipObj = JSON.parse(shippingDetail);
                      const details = await shippingDetails(
                        shipObj,
                        orderId,
                        router.query?.country
                      );
                    }
                    setAddDataFlag(true);

                    router.push({
                      pathname: "/processPayment",
                      query: {
                        orderId: orderId,
                        orderType: 0,
                        country: router.query?.country,
                      },
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error processing items:", error);
                });
            }
          } else {
            getProfiles().then((respDatas) => {
              if (respDatas?.success) {
                respDatas?.data?.devices?.length >= 1
                  ? router.push("/bubblProfiles")
                  : router.push("/createProfileStep1");
              }
            });
          }
        }

        return;
      }

      const message = typeof error === "string" ? error : "Invalid Credentials";
      setErrorMessage(message);
    });
  };
  // response msg for google
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
      const checkLogin = await getCheckLogin();
      if (checkLogin === "true") {
        const checkLogin: any = await getCheckLogin();

        if (checkLogin === "true") {
          const cart = await getCartItems();
          const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
          if (orderId) {
            const shippingDetail = getShippingDetails();
            if (shippingDetail && shippingDetail.length > 0) {
              const shipObj = JSON.parse(shippingDetail);
              const details = await shippingDetails(
                shipObj,
                orderId,
                router.query?.country
              );
            }
            setAddDataFlag(true);

            router.push({
              pathname: "/processPayment",
              query: {
                orderId: orderId,
                orderType: 0,
                country: router.query?.country,
              },
            });
          } else {
            const getCartItem: any = getCartValue();
            const allItems = JSON.parse(getCartItem);
            // Parse the cart items

            console.log(allItems, "getCart");

            // Create an array of promises
            const promises = allItems.map(
              async (item: {
                deviceType: string | string[];
                deviceColor: any;
                deviceInventorId: any;
                fontColor: any;
                fontStyle: any;
                name: any;
                price: any;
                quanitiy: any;
                productType: any;
                quantity: any;
                productColor: any;
                productPrice: any;
              }) => {
                if (item?.deviceType?.includes("NC-")) {
                  const itemObj = {
                    deviceColor: item.deviceColor,
                    deviceInventorId: item?.deviceInventorId,
                    deviceType: item.deviceType,
                    fontColor: item.fontColor,
                    fontStyle: item.fontStyle,
                    name: item.name,
                    price: item.price,
                    quanitiy: item.quantity || item.quanitiy,
                  };

                  // Return the promise from AddCartApi
                  return AddCartApi(itemObj);
                }
                if (item?.deviceType?.includes("Full Custom")) {
                  const fullItemObj = {
                    quantity: item.quantity || item.quanitiy,
                    price: item.price,
                    deviceColor: item?.deviceColor,
                    deviceType: item?.deviceType,
                  };

                  // Return the promise from AddFullyCustomApi
                  return AddFullyCustomApi(fullItemObj);
                }
                const cartObj = {
                  productType: item.productType || item?.deviceType,
                  quantity: item.quantity || item?.quanitiy,
                  productColor: item.productColor,
                  productPrice: item.productPrice,
                  productStatus: true, // to be removed once API updated
                };
                const cartItemObj = {
                  cartItem: cartObj,
                };

                // Return the promise from addCartItem
                return addCartItem(cartItemObj);
              }
            );

            Promise.all(promises)
              .then(async (responses) => {
                console.log("All items processed:", responses);

                const cart = await getCartItems();
                const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
                if (orderId) {
                  const shippingDetail = getShippingDetails();
                  if (shippingDetail && shippingDetail.length > 0) {
                    const shipObj = JSON.parse(shippingDetail);
                    const details = await shippingDetails(
                      shipObj,
                      orderId,
                      router.query?.country
                    );
                  }
                  setAddDataFlag(true);

                  router.push({
                    pathname: "/processPayment",
                    query: {
                      orderId: orderId,
                      orderType: 0,
                      country: router.query?.country,
                    },
                  });
                }
              })
              .catch((error) => {
                console.error("Error processing items:", error);
              });
          }
        }
      } else {
        getProfiles().then((respDatas) => {
          if (respDatas?.success) {
            respDatas?.data?.devices?.length ||
            respDatas?.data?.profiles?.length >= 1
              ? router.push("/bubblProfiles")
              : router.push("/createProfileStep1");
          }
        });
      }
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

    const checkLogin = await getCheckLogin();
    if (checkLogin === "true") {
      const checkLogin: any = await getCheckLogin();

      if (checkLogin === "true") {
        const cart = await getCartItems();
        const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
        if (orderId) {
          const shippingDetail = getShippingDetails();
          if (shippingDetail && shippingDetail.length > 0) {
            const shipObj = JSON.parse(shippingDetail);
            const details = await shippingDetails(
              shipObj,
              orderId,
              router.query?.country
            );
          }
          setAddDataFlag(true);

          router.push({
            pathname: "/processPayment",
            query: {
              orderId: orderId,
              orderType: 0,
              country: router.query?.country,
            },
          });
        } else {
          const getCartItem: any = getCartValue();
          const allItems = JSON.parse(getCartItem);
          // Parse the cart items

          console.log(allItems, "getCart");

          // Create an array of promises
          const promises = allItems.map(
            async (item: {
              deviceType: string | string[];
              deviceColor: any;
              deviceInventorId: any;
              fontColor: any;
              fontStyle: any;
              name: any;
              price: any;
              quanitiy: any;
              productType: any;
              quantity: any;
              productColor: any;
              productPrice: any;
            }) => {
              if (item?.deviceType?.includes("NC-")) {
                const itemObj = {
                  deviceColor: item.deviceColor,
                  deviceInventorId: item?.deviceInventorId,
                  deviceType: item.deviceType,
                  fontColor: item.fontColor,
                  fontStyle: item.fontStyle,
                  name: item.name,
                  price: item.price,
                  quanitiy: item.quanitiy || item.quantity,
                };

                // Return the promise from AddCartApi
                return AddCartApi(itemObj);
              }
              if (item?.deviceType?.includes("Full Custom")) {
                const fullItemObj = {
                  quantity: item.quanitiy || item.quantity,
                  price: item.price,
                  deviceColor: item?.deviceColor,
                  deviceType: item?.deviceType,
                };

                // Return the promise from AddFullyCustomApi
                return AddFullyCustomApi(fullItemObj);
              }
              const cartObj = {
                productType: item.productType || item?.deviceType,
                quantity: item.quantity || item?.quanitiy,
                productColor: item.productColor,
                productPrice: item.productPrice,
                productStatus: true, // to be removed once API updated
              };
              const cartItemObj = {
                cartItem: cartObj,
              };

              // Return the promise from addCartItem
              return addCartItem(cartItemObj);
            }
          );

          Promise.all(promises)
            .then(async (responses) => {
              console.log("All items processed:", responses);

              const cart = await getCartItems();
              const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
              if (orderId) {
                const shippingDetail = getShippingDetails();
                if (shippingDetail && shippingDetail.length > 0) {
                  const shipObj = JSON.parse(shippingDetail);
                  const details = await shippingDetails(
                    shipObj,
                    orderId,
                    router.query?.country
                  );
                }
                setAddDataFlag(true);

                router.push({
                  pathname: "/processPayment",
                  query: {
                    orderId: orderId,
                    orderType: 0,
                    country: router.query?.country,
                  },
                });
              }
            })
            .catch((error) => {
              console.error("Error processing items:", error);
            });
        }
      }
    } else {
      getProfiles().then((respDatas) => {
        if (respDatas?.success) {
          respDatas?.data?.devices?.length >= 1
            ? router.push("/bubblProfiles")
            : router.push("/createProfileStep1");
        }
      });
    }

    // if (token) {
    //   router.push("/createProfileStep1");
    // }
  };

  // linkedin function
  const LinkedInFunction = async (response: any) => {
    const responseObj = {
      authorizationCode: response?.authorizationCode,
    };
    const responseVal = await LinkedInLoginApi(responseObj);
    const toeknVal = responseVal?.data?.data?.token?.accessToken;
    setfirstName(responseVal?.data?.data?.firstName);
    setlastName(responseVal?.data?.data?.lastName);
    setAccessToken(responseVal?.data?.data?.token?.accessToken);

    if (toeknVal) {
      const checkLogin = await getCheckLogin();
      if (checkLogin === "true") {
        const checkLogin: any = await getCheckLogin();

        if (checkLogin === "true") {
          const cart = await getCartItems();
          const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
          if (orderId) {
            const shippingDetail = getShippingDetails();
            if (shippingDetail && shippingDetail.length > 0) {
              const shipObj = JSON.parse(shippingDetail);
              const details = await shippingDetails(
                shipObj,
                orderId,
                router.query?.country
              );
            }
            setAddDataFlag(true);

            router.push({
              pathname: "/processPayment",
              query: {
                orderId: orderId,
                orderType: 0,
                country: router.query?.country,
              },
            });
          } else {
            const getCartItem: any = getCartValue();
            const allItems = JSON.parse(getCartItem);
            // Parse the cart items

            console.log(allItems, "getCart");

            // Create an array of promises
            const promises = allItems.map(
              async (item: {
                deviceType: string | string[];
                deviceColor: any;
                deviceInventorId: any;
                fontColor: any;
                fontStyle: any;
                name: any;
                price: any;
                quanitiy: any;
                productType: any;
                quantity: any;
                productColor: any;
                productPrice: any;
              }) => {
                if (item?.deviceType?.includes("NC-")) {
                  const itemObj = {
                    deviceColor: item.deviceColor,
                    deviceInventorId: item?.deviceInventorId,
                    deviceType: item.deviceType,
                    fontColor: item.fontColor,
                    fontStyle: item.fontStyle,
                    name: item.name,
                    price: item.price,
                    quanitiy: item.quanitiy,
                  };

                  // Return the promise from AddCartApi
                  return AddCartApi(itemObj);
                }
                if (item?.deviceType?.includes("Full Custom")) {
                  const fullItemObj = {
                    quantity: item.quanitiy,
                    price: item.price,
                    deviceColor: item?.deviceColor,
                    deviceType: item?.deviceType,
                  };

                  // Return the promise from AddFullyCustomApi
                  return AddFullyCustomApi(fullItemObj);
                }
                const cartObj = {
                  productType: item.productType || item?.deviceType,
                  quantity: item.quantity || item?.quanitiy,
                  productColor: item.productColor,
                  productPrice: item.productPrice,
                  productStatus: true, // to be removed once API updated
                };
                const cartItemObj = {
                  cartItem: cartObj,
                };

                // Return the promise from addCartItem
                return addCartItem(cartItemObj);
              }
            );

            Promise.all(promises)
              .then(async (responses) => {
                console.log("All items processed:", responses);

                const cart = await getCartItems();
                const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
                if (orderId) {
                  const shippingDetail = getShippingDetails();
                  if (shippingDetail && shippingDetail.length > 0) {
                    const shipObj = JSON.parse(shippingDetail);
                    const details = await shippingDetails(
                      shipObj,
                      orderId,
                      router.query?.country
                    );
                  }
                  setAddDataFlag(true);

                  router.push({
                    pathname: "/processPayment",
                    query: {
                      orderId: orderId,
                      orderType: 0,
                      country: router.query?.country,
                    },
                  });
                }
              })
              .catch((error) => {
                console.error("Error processing items:", error);
              });
          }
        }
      } else {
        getProfiles().then((respDatas) => {
          if (respDatas?.success) {
            respDatas?.data?.devices?.length >= 1
              ? router.push("/bubblProfiles")
              : router.push("/createProfileStep1");
          }
        });
      }
    }
  };
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
            <h1 className={styles.right_heading}>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="nope">
              <Form.Group className={styles.email}>
                <p className={styles.inputHead}>Email ID</p>
                <div className={styles.input_container}>
                  <input
                    autoComplete="off"
                    type="email"
                    className={styles.emailBar}
                    placeholder="Enter your mail id"
                    style={{
                      backgroundImage: `url(${emailimg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "15px 8px",
                    }}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Your Mail ID is Invalid",
                      },
                      pattern: {
                        // eslint-disable-next-line no-useless-escape
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p
                    role="alert"
                    className={styles.errorMessage}
                    style={{
                      backgroundImage: `url(${alert.src})`,
                      color: "red",
                    }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </Form.Group>
              <p className={styles.inputHead}>Password</p>

              <div className="position-relative">
                <Form.Group
                  className={styles.password}
                  controlId="formBasicPassword"
                >
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
                    {...register("password", {
                      required: true,
                    })}
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
                  {errorMessage && (
                    <p role="alert" style={{ color: "red", fontSize: "12px" }}>
                      {errorMessage}
                    </p>
                  )}
                </Form.Group>
              </div>

              <div className={styles.message}>
                <div className={styles.remember}>
                  <input
                    type="checkbox"
                    autoComplete="nope"
                    checked={checkBoxState}
                    onClick={() => {
                      setCheckBoxState(!checkBoxState);
                    }}
                  />
                  <p
                    className={styles.check}
                    onClick={() => {
                      setCheckBoxState(!checkBoxState);
                    }}
                  >
                    Remember me
                  </p>
                </div>
                <div className={styles.forgotPsw}>
                  <a href="./login/forgotpass" className={styles.forgotPas}>
                    Forgot Password ?
                  </a>
                </div>
              </div>

              <Button
                className={styles.nextBtn}
                variant="primary"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                {!isSubmitting && "Login"}
                {isSubmitting && (
                  <Spinner animation="grow" role="status" size="sm">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Button>

              {!isInsatagram && (
                <>
                  <p className={styles.loginUsing}>or Login using</p>
                  <div className={styles.social}>
                    <div className={styles.google}>
                      <GoogleOAuthProvider clientId="381109639208-5a8i0egsdut082f395brann2n340lbpe.apps.googleusercontent.com">
                        <GoogleLogin onSuccess={responseMessage} useOneTap />
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
              <p className={styles.no_account}>
                Don&apos;t have an account yet?{" "}
                <Link href="/register">
                  <span className={styles.signup}>Sign up</span>
                </Link>
              </p>
            </Form>
          </div>
          <div className={styles.returnWebsiteContainer}>
            <div
              className={styles.contentContainer}
              onClick={() => router.push("/")}
            >
              <p className={styles.websiteContainer}>
                Back to <span>Website </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
