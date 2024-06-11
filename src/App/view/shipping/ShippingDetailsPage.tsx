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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Footer from "src/App/components/ui/Footer/footer";
import ShippingForm from "src/App/components/ui/Forms/shippingform";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import {
  getAccessToken,
  getCartValue,
  getPriceValue,
  getRouteValue,
  removeRouteVal,
  setRouteValue,
  setShippingDetails,
} from "src/App/helpers/local-storage";
import { getShipping } from "src/App/services/payments";
import { shippingDetails } from "src/App/services/shippingDetails";
import {
  addCartItem,
  getCartItems,
} from "src/App/services/shopPage/shopServices";

import arrow from "../../../../public/order_page/checkout-arrow.svg";
import circle from "../../../../public/order_page/circle.svg";
import styles from "./ShippingDetailsPage.module.css";

function ShippingDetails() {
  const [cartState, setCartState] = useState<any>();
  const [cartTotal, setCartTotal] = useState(0);
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
      shipErrorsData.phoneNumber = "In Valid PhoneNumber";
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
    // const cart = await getCartItems();
    // const responseVal = cart?.response?.data?.cart;
    // let Total = 0;
    // responseVal?.Carts?.map((cartItem: any) => {
    //   Total = Total + cartItem.productPrice;
    // });
    // setCartState(responseVal);
    // setCartTotal(Total);
    // // const tax = Total * 0.18;
    // const tax = Math.round(Total * 0.18);
    // setTaxTotal(tax);
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
      const cart = await getCartItems();
      const orderId = cart?.response.data.cart.Carts[0].OrderId;
      setOrderId(cart?.response.data.cart.Carts[0].OrderId);
      if (orderId) {
        const details = await shippingDetails(shipObj, orderId, country);
        const response = details?.data.success;
        if (response) {
          proceedPayment(orderId);
        }
      }
    }
  };

  const checkIfFormValid = () => {
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

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className={styles.navigation}>
          <a href="/">
            <span className={styles.home_color_head}>Home {" > "}</span>
          </a>
          <a href="/shopPage">
            <span className={styles.home_color_head}>Shop {" > "}</span>
          </a>
          <a href="/checkout">
            <span className={styles.home_color_head}>Your Cart {" > "}</span>
          </a>

          <span className={styles.linkDevice_color_head}>Shipping Details</span>
        </div>
        <h1 className={styles.shippingHeading}>Shipping Details</h1>
        <Col xl={7} className={styles.shipping}>
          <Image src={circle} alt="bubbl" />
          <div>
            <h1>Shipping Information</h1>
          </div>
        </Col>

        <div className={styles.paymentSummary}>
          <ShippingForm
            handleShippingDetails={getShipObj}
            handleFormValidation={validateForm}
            shipErrorsParent={shipObjErrors}
            isSubmitClicked={false}
          />
          {/* Summary Details */}
          <Col xl={4} lg={12} md={12} xs={12} id="down">
            <div className={styles.Summary}>
              <h3>Order Summary</h3>

              <div className={styles.subtotal}>
                <p>Subtotal :</p>
                <p>₹ {cartTotal}</p>
              </div>
              <div className={styles.subtotal}>
                <p>Shipping :</p>
                <p>₹ {shippingCost === undefined ? 0 : shippingCost}</p>
              </div>

              <div className={styles.subtotal}>
                <p>Promotion Applied :</p>
                <p>₹ 00.00</p>
              </div>
              {/* <div className={styles.subtotal}>
                <p>Tax:</p>
                <p>₹ {taxTotal}</p>
              </div> */}
              <div className={styles.line} />
              <p className={styles.bankingChargesNote}>
                (* <span>Note : </span>This total doesn't include the bank
                charges)
              </p>

              <div className={styles.totalInr}>
                <p>
                  TOTAL <br /> (INR)
                </p>
                {/* {shippingTotal === undefined ? (
                  <p>Rs: {cartTotal + 0 + 0 + taxTotal}/-</p>
                ) : (
                  <p>Rs: {cartTotal + shippingTotal + 0 + taxTotal}/-</p>
                )} */}
                {shippingTotal === undefined ? (
                  <p>
                    Rs:
                    {Math.round(Number(cartTotal) + 0 + 0 + 0)}/-
                  </p>
                ) : (
                  <p>
                    Rs: {Math.round(Number(cartTotal) + shippingTotal + 0 + 0)}
                    /-
                  </p>
                )}
              </div>
            </div>
            <p className={styles.offer}>
              <span>Note:</span> The offer card will be delivered to you at the
              time of delivery.
            </p>
            {/* in destop view */}
            <Button
              type="button"
              variant="none"
              onClick={checkIfFormValid}
              className={styles.checkoutbtn}
            >
              PROCEED TO PAYMENT
              <span>
                <Image width={16} height={20} src={arrow} alt="bubbl" />
              </span>
            </Button>
          </Col>
        </div>
      </div>

      {/* button used in resp  */}
      <div className={styles.static_btn}>
        <div className={styles.price}>
          <p>
            {shippingTotal === undefined ? (
              <p>
                Rs: {Math.round(Number(cartTotal) + 0 + 0 + Number(taxTotal))}/-
              </p>
            ) : (
              <p>
                Rs:{" "}
                {Math.round(
                  Number(cartTotal) +
                    Number(shippingTotal) +
                    0 +
                    Number(taxTotal)
                )}
                /-
              </p>
            )}
          </p>
          <a href="#down">View Details</a>
        </div>
        {/* FOR RESPONSIVE */}
        <Button
          type="button"
          variant="none"
          className={styles.checkoutbtn_fixed}
          onClick={checkIfFormValid}
        >
          PROCEED TO PAYMENT
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default ShippingDetails;
