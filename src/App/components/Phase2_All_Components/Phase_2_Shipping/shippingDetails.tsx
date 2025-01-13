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
  removeRouteVal,
  setCheckLogin,
  setShippingDetails,
} from "src/App/helpers/local-storage";
import { AddFullyCustomApi } from "src/App/services/fullyCustom/fullyCustomCards";
import { AddCartApi } from "src/App/services/nameCustom/nameCustom";
import { getShipping } from "src/App/services/payments";
import { shippingDetails } from "src/App/services/shippingDetails";
import {
  addCartItem,
  clearCartItems,
  getCartItems,
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
  const [total,setTotal]=useState(0)
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

  function validateForm(shipDetail: any, shipErrorsData: any) {
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
    if (isSuccess) {
      const checkToken = await getAccessToken();
      if (checkToken === null) {
        setCheckLogin(true);
        const shipObjApi = {
          orderId: orderId,
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
        Router.push({
          pathname: "/login",
          query: { orderType: 0, country: country },
        });
      } else {
        const getCartItem: any = getCartValue();
        const allItems = JSON.parse(getCartItem);
        for (let i = 0; i < allItems.length; i++) {
          if (allItems[i]?.deviceType?.includes("NC-")) {
            const itemObj = {
              deviceColor: allItems[i].deviceColor,
              deviceInventorId: allItems[i]?.deviceInventorId,
              deviceType: allItems[i].deviceType,
              fontColor: allItems[i].fontColor,
              fontStyle: allItems[i].fontStyle,
              name: allItems[i].name,
              price: allItems[i].price,
              quanitiy: allItems[i].quantity || allItems[i]?.quanitiy,
            };

            const response = await AddCartApi(itemObj);
          } else if (allItems[i]?.deviceType?.includes("Full Custom")) {
            const fullItemObj = {
              quantity: allItems[i].quantity || allItems[i]?.quanitiy,
              price: allItems[i].price,
              deviceColor: allItems[i]?.deviceColor,
              deviceType: allItems[i]?.deviceType,
            };
            const addCartItem = await AddFullyCustomApi(fullItemObj); // api call
          } else {
            const cartObj = {
              productType: allItems[i].productType || allItems[i]?.deviceType,
              quantity: allItems[i].quantity || allItems[i]?.quanitiy,
              productColor: allItems[i].productColor,
              productPrice: allItems[i].productPrice,
              productStatus: true, // to be removed one API updated
            };
            const cartItemObj = {
              cartItem: cartObj,
            };
            const response = await addCartItem(cartItemObj);
          }
        }
        const cart = await getCartItems();
        const orderId = cart?.response?.data?.cart?.Carts[0]?.OrderId;
        setOrderId(cart?.response?.data?.cart?.Carts[0]?.OrderId);
        if (orderId) {
          const details = await shippingDetails(shipObj, orderId, country);
          const response = details?.data.success;
          if (response) {
            localStorage.removeItem("cart");
            localStorage.removeItem("AddData");
            proceedPayment(orderId);
          }
        }
      }
    }
  };

  const checkIfFormValid = () => {
    setIsSubmitClicked(true);
    const isError = validateForm(shipObj, shipObjErrors);
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

  const getDiscount=()=>{
    let items=localStorage.getItem("cart") as string

   const cartItems:any[]=JSON.parse(items);

    const totalQuantity=cartItems.reduce((a,b)=>a+b.quantity,0);
    const totalPrice=cartItems.reduce((a,b)=>a+(b.itemPrice*b.quantity),0);

    let tempTotal=0;

    if(totalQuantity===1){
      tempTotal=totalPrice*0.6;//40% DISCOUNT
    }else if(totalQuantity===2){  
      tempTotal=totalPrice*0.5;//50% DISCOUNT
    }else{
      tempTotal=totalPrice*0.4;//60% DISCOUNT
    }

    setTotal(totalPrice)
    setCartTotal(Math.round(tempTotal))
    setDiscount(Math.round((totalPrice ?? 0) - tempTotal))

  }

  useEffect(() => {
    getCart();
    getDiscount();
  }, [isSubmitClicked]);

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
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
