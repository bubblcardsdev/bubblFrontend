/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable array-callback-return */
/* eslint-disable operator-assignment */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  getAccessToken,
  getCartValue,
  getExperationTime,
  getPriceValue,
  getRouteValue,
  getShippingDetails,
  removeRouteVal,
  setCheckLogin,
  setShippingDetails,
} from "src/App/helpers/local-storage";
import {
  AddFullyCustomApi,
  AddFullyCustomNonUserApi,
} from "src/App/services/fullyCustom/fullyCustomCards";
import {
  AddCartApi,
  AddCartNonUserApi,
} from "src/App/services/nameCustom/nameCustom";
import { getShipping } from "src/App/services/payments";
import {
  shippingDetails,
  shippingDetailsNonUser,
} from "src/App/services/shippingDetails";
import {
  addCartItem,
  addNonUserCartItem,
  clearCartItems,
  getCartItems,
  getNonUserCartItems,
} from "src/App/services/shopPage/shopServices";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Right from "../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import group from "../../../../../images/Phase_2_All_Assets/group.svg";
import arrow from "../../../../../public/order_page/checkout-arrow.svg";
import circle from "../../../../../public/order_page/circle.svg";
import ShippingForm from "../../ui/Forms/shippingform";
import HomePageNavigation from "../Phase_2_HomePage/navigationHome/homeNavigation";
import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
import styles from "./shippingDetails.module.css";

function ShippingDetails() {
  const [cartState, setCartState] = useState<any>();
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipObj, setShipObj] = useState<any>();
  const [shippingCost, setShippingCost] = useState<any>();
  const [shippingTotal, setShippingTotal] = useState<any>();
  const [shipObjErrors, setShipObjErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
    flatNumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    landmark: "",
  });
  const [orderId, setOrderId] = useState<any>();
  const [country, setCountry] = useState<any>();
  const [taxTotal, setTaxTotal] = useState<any>();
  const Router = useRouter();
  const getShipObj = (
    childShipObj: any,
    orderId: any,
    country: any,
    childShipObjErrs: any
  ) => {
    setShipObj(childShipObj);
    setOrderId(orderId);
    setCountry(country);
    if (country) {
      getShippingCharge(country);
    }
    setShipObjErrors(childShipObjErrs);
  };

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  function validateForm(shipDetail: any, shipErrorsData: any , country: any) {
    const errors = {};
    // check name is null
    if (!shipDetail.firstName.trim()) {
      shipErrorsData.firstName = "First name is required";
    } else {
      shipErrorsData.firstName = "";
    }

    // check name contains special characters
    if (shipDetail.firstName.trim()) {
      const pattern = /^[a-zA-Z\s]+$/;

      if (!pattern.test(shipDetail.firstName)) {
        shipErrorsData.firstName = "First name is invalid";
      } else {
        shipErrorsData.firstName = "";
      }
    }

    // check name is null
    if (!shipDetail.lastName.trim()) {
      shipErrorsData.lastName = "Last name is required";
    } else {
      shipErrorsData.lastName = "";
    }

    // check name contains special characters
    if (shipDetail.lastName.trim()) {
      const pattern = /^[a-zA-Z\s]+$/;

      if (!pattern.test(shipDetail.lastName)) {
        shipErrorsData.lastName = "Last name is invalid";
      } else {
        shipErrorsData.lastName = "";
      }
    }
    // phone number
    if (!shipDetail.phoneNumber) {
      shipErrorsData.phoneNumber = "Phone number is required";
    } else if (!/^[0-9\b +]+$/.test(shipDetail.phoneNumber)) {
      shipErrorsData.phoneNumber = "Invalid phone number";
    } else if (shipDetail.phoneNumber.length !== 10) {
      shipErrorsData.phoneNumber = "Phone number must be 10 digits";
    } else {
      shipErrorsData.phoneNumber = "";
    }

    if (!shipDetail.emailId.trim()) {
      shipErrorsData.emailId = "EmailId is required";
    } else {
      shipErrorsData.emailId = "";
    }

    if (shipDetail.emailId.trim()) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(shipDetail.emailId)) {
        shipErrorsData.emailId = "Enter a valid email address";
      } else {
        shipErrorsData.emailId = "";
      }
    }

    if (!shipDetail.flatNumber.trim()) {
      shipErrorsData.flatNumber = "Enter your Flat Number, HouseNo, Apartment";
    } else {
      shipErrorsData.flatNumber = "";
    }

    if (!shipDetail.address.trim()) {
      shipErrorsData.address = "Enter your address";
    } else {
      shipErrorsData.address = "";
    }
    if (!shipDetail.zipcode.trim()) {
      shipErrorsData.zipcode = "Enter your zipcode";
    } else {
      shipErrorsData.zipcode = "";
    }
    if (shipDetail.zipcode.trim()) {
      const zipcodePattern = /^\d{6}$/;
      if (!zipcodePattern.test(shipDetail.zipcode)) {
        shipErrorsData.zipcode = "Invalid Zipcode";
      } else {
        shipErrorsData.zipcode = "";
      }
    }

    // check name is null
    if (!shipDetail.city.trim()) {
      shipErrorsData.city = "Enter your city here";
    } else {
      shipErrorsData.city = "";
    }

    // check name contains special characters
    if (shipDetail.city.trim()) {
      const pattern = /^[a-zA-Z\s]+$/;

      if (!pattern.test(shipDetail.city)) {
        shipErrorsData.city = "City is invalid";
      } else {
        shipErrorsData.city = "";
      }
    }

    // check name is null
    if (!shipDetail.state.trim()) {
      shipErrorsData.state = "Enter your state here";
    } else {
      shipErrorsData.state = "";
    }

    // check name contains special characters
    if (shipDetail.state.trim()) {
      const pattern = /^[a-zA-Z\s]+$/;

      if (!pattern.test(shipDetail.state)) {
        shipErrorsData.state = "state is invalid";
      } else {
        shipErrorsData.state = "";
      }
    }

    if (shipDetail.country === undefined || shipDetail.country.trim().length <= 0) {
      shipErrorsData.country = "Select your country";
    }else {
      shipErrorsData.country = "";
    }

    return shipErrorsData;
  }

  const getCart = async () => {
    const getRoute = getRouteValue();
    if (getRoute) {
      removeRouteVal();
    }
    const getTotal: any = getPriceValue();
    setCartTotal(getTotal);
    const tax = Math.round(getTotal * 0.18);
    setTaxTotal(tax);
  };

  const handleShippingDetails = async () => {
    const details = await shippingDetails(shipObj, orderId, country);
    const response = details?.data.success;
    if (response) {
      proceedPayment(orderId);
    }
  };
  const getShippingCharge = async (country: any) => {
    let countryVal = "";
    if (country === "India") {
      countryVal = "india";
    } else {
      countryVal = "others";
    }
    const CountryObj = {
      country: countryVal,
    };
    const cost = await getShipping(CountryObj);
    const shippingValue = cost?.data.shippingCharge;
    setShippingCost(shippingValue);
    setShippingTotal(shippingValue);
  };
  const proceedPayment = async (orderId: number) => {
    Router.push({
      pathname: "/processPayment",
      query: { orderId: orderId, orderType: 0, country: country },
    });
  };

  const getCartItemFunc = async () => {
    const cart = await getCartItems();
    setOrderId(cart?.response.data.cart.Carts[0].OrderId);
  };
  // add Cart function
  const addCartItemFunc = async () => {
    const getCartItem: any = getCartValue();
    const allItems = JSON.parse(getCartItem);
    for (let i = 0; i < allItems.length; i++) {
      const cartObj = {
        productType: allItems[i].productType,
        quantity: allItems[i].quantity,
        productColor: allItems[i].productColor,
        productPrice: allItems[i].productPrice,
        productStatus: true, // to be removed one API updated
      };
      const cartItemObj = {
        cartItem: cartObj,
      };
      const response = await addCartItem(cartItemObj);
    }
  };

  const submitPayment = async (isSuccess: boolean) => {
    try {
      if (isSuccess) {
        const checkToken = await getAccessToken();
        // if (checkToken === null) {
        // setCheckLogin(true);
        const shipObjApi = {
          firstName: shipObj.firstName,
          lastName: shipObj.lastName,
          phoneNumber: shipObj.phoneNumber,
          emailId: shipObj.emailId,
          flatNumber: shipObj.flatNumber,
          address: shipObj.address,
          city: shipObj.city,
          state: shipObj.state,
          zipcode: parseInt(shipObj.zipcode, 10),
          country: country,
          landmark: shipObj.landmark,
          isShipped: false,
        };

        setShippingDetails(shipObjApi);
        const getCartItem: any = getCartValue();
        const allItems = JSON.parse(getCartItem);
        // Parse the cart items
        const addCartData = allItems.map(
          (item: {
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
            return {
              productType: item?.productType || item?.deviceType,
              quantity: item?.quantity || item?.quanitiy,
              productColor: item?.productColor || item?.deviceColor,
              productPrice: item?.productPrice || item?.price,
              deviceInventorId: item?.deviceInventorId || null,
              fontColor: item?.fontColor || "",
              fontStyle: item?.fontStyle || "",
              name: item?.name || "",
            };
          }
        );
        console.log(addCartData, "addCartData");
        await addNonUserCartItem({
          cartData: addCartData,
          email: shipObj?.emailId,
        });
        const cart = await getNonUserCartItems(shipObj?.emailId);
        const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
        if (orderId) {
          const shippingDetail = getShippingDetails();
          console.log(shippingDetail, "shippingDetail");
          if (shippingDetail && shippingDetail?.length > 0) {
            const shipObj = JSON.parse(shippingDetail);

            await shippingDetailsNonUser(shipObj, orderId, country);
            router.push({
              pathname: "/processPayment",
              query: {
                orderId: orderId,
                orderType: 2,
                country: country,
              },
            });
          }
        }

        // Create an array of promises
        // const promises = allItems.map(
        //   async (item: {
        //     deviceType: string | string[];
        //     deviceColor: any;
        //     deviceInventorId: any;
        //     fontColor: any;
        //     fontStyle: any;
        //     name: any;
        //     price: any;
        //     quanitiy: any;
        //     productType: any;
        //     quantity: any;
        //     productColor: any;
        //     productPrice: any;
        //   }) => {
        //     if (item?.deviceType?.includes("NC-")) {
        //       const itemObj = {
        //         deviceColor: item.deviceColor,
        //         deviceInventorId: item?.deviceInventorId,
        //         deviceType: item.deviceType,
        //         fontColor: item.fontColor,
        //         fontStyle: item.fontStyle,
        //         name: item.name,
        //         price: item.price,
        //         quanitiy: item.quantity || item.quanitiy,
        //         email: shipObj.emailId,
        //       };

        //       // Return the promise from AddCartApi
        //       return AddCartNonUserApi(itemObj);
        //     }
        //     if (item?.deviceType?.includes("Full Custom")) {
        //       const fullItemObj = {
        //         quantity: item.quantity || item.quanitiy,
        //         price: item.price,
        //         deviceColor: item?.deviceColor,
        //         deviceType: item?.deviceType,
        //         email: shipObj.emailId,
        //       };

        //       // Return the promise from AddFullyCustomApi
        //       return AddFullyCustomNonUserApi(fullItemObj);
        //     }
        //     const cartObj = {
        //       productType: item.productType || item?.deviceType,
        //       quantity: item.quantity || item?.quanitiy,
        //       productColor: item.productColor,
        //       productPrice: item.productPrice,
        //       productStatus: true, // to be removed once API updated
        //     };
        //     const cartItemObj = {
        //       cartItem: cartObj,
        //       email: shipObj.emailId,
        //     };

        //     // Return the promise from addCartItem
        //     return addNonUserCartItem(cartItemObj);
        //   }
        // );

        // Promise.all(promises).then(async (responses) => {
        //   console.log("All items processed:", responses);

        //   const cart = await getNonUserCartItems(shipObj?.emailId);
        //   const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
        //   if (orderId) {
        //     const shippingDetail = getShippingDetails();
        //     console.log(shippingDetail, "shippingDetail");
        //     if (shippingDetail && shippingDetail?.length > 0) {
        //       const shipObj = JSON.parse(shippingDetail);
        //       console.log(router.query?.country);
        //       await shippingDetailsNonUser(
        //         shipObj,
        //         orderId,
        //         router.query?.country
        //       );
        //       router.push({
        //         pathname: "/processPayment",
        //         query: {
        //           orderId: orderId,
        //           orderType: 0,
        //           country: country,
        //         },
        //       });
        //     }

        //     // router.push({
        //     //   pathname: "/processPayment",
        //     //   query: {
        //     //     orderId: orderId,
        //     //     orderType: 0,
        //     //     country: country,
        //     //   },
        //     // });
        //   }
        // });
        // } else {
        //   const getCartItem: any = getCartValue();
        //   const allItems = JSON.parse(getCartItem);
        //   for (let i = 0; i < allItems.length; i++) {
        //     if (allItems[i]?.deviceType?.includes("NC-")) {
        //       const itemObj = {
        //         deviceColor: allItems[i].deviceColor,
        //         deviceInventorId: allItems[i]?.deviceInventorId,
        //         deviceType: allItems[i].deviceType,
        //         fontColor: allItems[i].fontColor,
        //         fontStyle: allItems[i].fontStyle,
        //         name: allItems[i].name,
        //         price: allItems[i].price,
        //         quanitiy: allItems[i].quantity || allItems[i]?.quanitiy,
        //       };

        //       const response = await AddCartApi(itemObj);
        //     } else if (allItems[i]?.deviceType?.includes("Full Custom")) {
        //       const fullItemObj = {
        //         quantity: allItems[i].quantity || allItems[i]?.quanitiy,
        //         price: allItems[i].price,
        //         deviceColor: allItems[i]?.deviceColor,
        //         deviceType: allItems[i]?.deviceType,
        //       };
        //       const addCartItem = await AddFullyCustomApi(fullItemObj); // api call
        //     } else {
        //       const cartObj = {
        //         productType: allItems[i].productType || allItems[i]?.deviceType,
        //         quantity: allItems[i].quantity || allItems[i]?.quanitiy,
        //         productColor: allItems[i].productColor,
        //         productPrice: allItems[i].productPrice,
        //         productStatus: true, // to be removed one API updated
        //       };
        //       const cartItemObj = {
        //         cartItem: cartObj,
        //       };
        //       const response = await addCartItem(cartItemObj);
        //     }
        //   }
        //   const cart = await getCartItems();
        //   const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
        //   setOrderId(cart?.response?.data?.cart?.Carts[0]?.OrderId);
        //   if (orderId) {
        //     const details = await shippingDetails(shipObj, orderId, country);
        //     const response = details?.data.success;
        //     if (response) {
        //       localStorage.removeItem("cart");
        //       localStorage.removeItem("AddData");
        //       proceedPayment(orderId);
        //     }
        //   }
        // }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfFormValid = () => {
    setIsSubmitClicked(true);
    const isError = validateForm(shipObj, shipObjErrors, country);
    let isInvalid = false;
    setShipObjErrors(isError);
    setShipObjErrors((prevState) => ({
      ...shipObjErrors,
      firstName: isError.firstName,
      lastName: isError.lastName,
      phoneNumbers: isError.phoneNumber,
      emailId: isError.emailId,
    }));

    if (
      isError.firstName === "" &&
      isError.lastName === "" &&
      isError.phoneNumber === "" &&
      isError.emailId === "" &&
      isError.address === "" &&
      isError.city === "" &&
      isError.state === "" &&
      isError.zipcode === "" &&
      isError.country === "" &&
      isError.landmark === ""
    ) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }

    submitPayment(isInvalid);
  };

  const getDiscount = () => {
    let items = localStorage.getItem("cart");
    const cartItems: any[] = items ? JSON.parse(items) : [];

    const discountedTypes = ["Card", "Socket", "Tile", "Bundle Devices"];

    // Filter items eligible for a discount
    const filterItems = cartItems.filter(
      (item) =>
        item.deviceType !== "Full Custom" &&
        item.deviceType !== "NC-Pattern" &&
        (discountedTypes.includes(item.deviceType) ||
          discountedTypes.includes(item.productType))
    );

    const totalQuantity = filterItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.itemPrice * item.quantity,
      0
    );

    let discountAmount = 0;

    const discountedTotal = cartItems.reduce((sum, item) => {
      let itemTotal = item.itemPrice * item.quantity;

      // Apply discount only if the item is eligible
      if (filterItems.some((dItem) => dItem.id === item.id)) {
        let discountRate = 0.4;
        if (totalQuantity === 1) discountRate = 0.4;
        else if (totalQuantity === 2) discountRate = 0.5;
        else if (totalQuantity >= 3) discountRate = 0.6;

        // const discountedItemTotal = itemTotal * (1 - discountRate);
        // discountAmount += itemTotal - discountedItemTotal;
        // itemTotal = discountedItemTotal;
      }

      return sum + itemTotal;
    }, 0);

    setTotal(Math.round(totalPrice));
    setCartTotal(Math.round(discountedTotal));
    setDiscount(Math.round(discountAmount));
  };

  useEffect(() => {
    getCart();
    getDiscount();
  }, [isSubmitClicked,shippingCost]);

  const tokenSetRef = useRef(false);

  const [activeDevicesCount, setActiveDevicesCount] = useState(0);
  useEffect(() => {
    const token = getAccessToken() ?? "";

    if (token) {
      // convert string to milliseconds
      const expirationTime = parseInt(getExperationTime()!, 10);

      // check experiation time from local storge
      const timeNow = Date.now();
      const timeNowInSeconds = Math.floor(timeNow / 1000);
      // if expired, logout user
      if (timeNowInSeconds > expirationTime) {
        localStorage.clear();
        router.replace("/login");
      } else if (!tokenSetRef.current) {
        tokenSetRef.current = true;
        setActiveDevicesCount(1);
      }
    }
  },[]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const topPositions = [10, 40, 30];
  const sizes = [65, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];
  return (
    <section className={styles.shippingContainer}>
      <div className={styles.shippingPage}>
        {activeDevicesCount === 0 ? <HomePageNavigation /> : <Navigation />}
        <div className={styles.analyticsBackgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1={false}
            showImage2
            showImage3
            showGradients={showGradients}
          />
        </div>

        <div className={styles.checkoutBreadCrumbs}>
          <div className={styles.homeLink}>
            <Link href="/">Home</Link>
          </div>
          <Image src={Right} alt="right" />
          <div className={styles.homeLink}>
            <Link href="/shopPage">Shop</Link>
          </div>
          <Image src={Right} alt="right" />
          <div className={styles.homeLink}>
            <Link href="/checkout">Your Cart</Link>
          </div>
          <Image src={Right} alt="right" />
          <div className={styles.cartLink}>
            <Link href="/">Shipping Details</Link>
          </div>
        </div>
        <h1 className={styles.shippingHeading}>Shipping Details</h1>

        <Row className={styles.rowDeviceList}>
          <Col xs={12} md={12} lg={12} xl={7}>
            <div className={styles.listDivSection}>
              <Col className={styles.shipping}>
                <Image src={group} alt="bubbl" />
                <div>
                  <h1>Shipping Information</h1>
                </div>
              </Col>
              <ShippingForm
                handleShippingDetails={getShipObj}
                handleFormValidation={validateForm}
                shipErrorsParent={shipObjErrors}
                isSubmitClicked={isSubmitClicked}
              />
            </div>
          </Col>

          <Col xs={12} md={12} lg={12} xl={4}>
            <div className={styles.promoCodeSection}>
              <Col id="down">
                <div className={styles.Summary}>
                  <h3>Order Summary</h3>

                  <div className={styles.subtotal}>
                    <p>Subtotal :</p>
                    <p className={styles.cartTotalValue}>₹ {total}</p>
                  </div>
                  <div className={styles.subtotal}>
                    <p>Shipping :</p>
                    <p className={styles.cartTotalValue}>
                      ₹ {shippingCost === undefined ? 0 : shippingCost}
                    </p>
                  </div>

                  <div className={styles.subtotal}>
                    <p>Promotion Applied :</p>
                    <p className={styles.cartTotalValue}>₹ 00.00</p>
                  </div>
                  <div className={styles.subtotal}>
                    <p>Discount :</p>
                    <p className={styles.cartTotalValue}>- ₹ {discount}</p>
                  </div>
                  {/* <div className={styles.subtotal}>
                    <p>Tax:</p>
                    <p className={styles.cartTotalValue}>₹ {taxTotal}</p>
                  </div> */}
                  <div className={styles.line} />
                  <p className={styles.bankingChargesNote}>
                    ( <span> * Note : </span>This total doesn't include the bank
                    charges)
                  </p>

                  <div className={styles.totalInr}>
                    <p>
                      TOTAL <span>(Tax Included)</span>
                    </p>
                    {shippingTotal === undefined ? (
                      <p>
                        ₹{Math.round(Number(cartTotal) + 0 + 0 + 0)}
                        /-
                      </p>
                    ) : (
                      <p>
                        ₹{" "}
                        {Math.round(Number(cartTotal) + shippingTotal + 0 + 0)}
                        /-
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.proceedBtn}>
                  <Button
                    type="button"
                    variant="none"
                    onClick={checkIfFormValid}
                    className={styles.checkoutbtn}
                  >
                    Proceed to Payment
                    <span>
                      <Image width={16} height={20} src={arrow} alt="bubbl" />
                    </span>
                  </Button>
                </div>
              </Col>
            </div>
          </Col>
        </Row>

        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
      <div className={styles.analyticsBackgroundContainer}>
        <ParallaxBackground
          scrollPosition={scrollPosition}
          topPositions={topPositions}
          sizes={sizes}
          rightPositions={rightPositions}
          leftPositions={leftPosition}
          showImage1
          showImage2={false}
          showImage3={false}
          showGradients={showGradients}
        />
      </div>
    </section>
  );
}
export default ShippingDetails;
