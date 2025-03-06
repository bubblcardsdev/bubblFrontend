/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  CountryDropdown,
  CountryRegionData,
  RegionDropdown,
} from "react-country-region-selector";
import {
  getAccessToken,
  getCartValue,
  setRouteValue,
  setShippingDetails,
} from "src/App/helpers/local-storage";
import { shippingDetails } from "src/App/services/shippingDetails";
import {
  addCartItem,
  getCartItems,
} from "src/App/services/shopPage/shopServices";

import InputComp from "../CommonButtons/commonInput";
import styles from "./shippingform.module.css";

type Props = {
  handleShippingDetails: any;
  handleFormValidation: any;
  shipErrorsParent: any;
  isSubmitClicked: boolean;
};

const ShippingForm: React.FC<Props> = ({
  handleShippingDetails,
  handleFormValidation,
  shipErrorsParent,
  isSubmitClicked,
}) => {
  const [country, setCountry] = useState("");
  const [orderId, setOrderId] = useState<any>();

  const [shipDetail, setShipDetails] = useState({
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
    isShipped: "",
  });
  const [shipErrors, setShipErrors] = useState({
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

  const Router = useRouter();
  // const orderId = Router.query?.orderId;

  const shipDetails = async () => {
    const shipObj = {
      orderId: Number(orderId),
      firstName: shipDetail.firstName,
      lastName: shipDetail.lastName,
      phoneNumber: shipDetail.phoneNumber,
      emailId: shipDetail.emailId,
      flatNumber: shipDetail.flatNumber,
      address: shipDetail.address,
      city: shipDetail.city,
      state: shipDetail.state,
      zipcode: Number(shipDetail.zipcode),
      country: country,
      landmark: shipDetail.landmark,
    };
  };

  const handleShipDetailChange = (e: any) => {
    const { name, value } = e.target;
    setShipDetails(() => ({ ...shipDetail, [name]: value }));
  };

  function validateFormFunction() {
    const errors = handleFormValidation(shipDetail, shipErrors);
    setShipErrors((prevState) => ({
      ...shipErrors,
      firstName: errors.firstName,
      lastName: errors.lastName,
      phoneNumbers: errors.phoneNumber,
      emailId: errors.emailId,
    }));
  }

  handleShippingDetails(shipDetail, orderId, country, shipErrors);

  const submitShippingDetails = async () => {
    setShipErrors(shipErrors);

    const isSuccess: boolean = onSubmitSave();
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
      setOrderId(cart?.response.data.cart.Carts[0].OrderId);
      const orderId = cart?.response.data.cart.Carts[0].OrderId;

      if (orderId) {
        const details = await shippingDetails(shipDetail, orderId, country);
        const response = details?.data.success;
        if (response) {
          proceedPayment(Number(orderId));
        }
      }
    }
  };

  const proceedPayment = async (orderId: any) => {
    Router.push({
      pathname: "/processPayment",

      query: { orderId: orderId, orderType: 0, country: country },
    });
  };

  function onSubmitSave() {
    let isInvalid = false;
    const errors = handleFormValidation(shipDetail, shipErrors);
    setShipErrors((prevState) => ({
      ...shipErrors,
      firstName: errors.firstName,
      lastName: errors.lastName,
      phoneNumbers: errors.phoneNumber,
      emailId: errors.emailId,
    }));

    if (
      shipErrors.firstName === "" &&
      shipErrors.lastName === "" &&
      shipErrors.phoneNumber === "" &&
      shipErrors.emailId === "" &&
      shipErrors.address === "" &&
      shipErrors.city === "" &&
      shipErrors.state === "" &&
      shipErrors.zipcode === "" &&
      shipErrors.country === "" &&
      shipErrors.landmark === ""
    ) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
    return isInvalid;
  }

  useEffect(() => {
    if (isSubmitClicked) {
      validateFormFunction();
    }
  }, [shipDetail]);

  return (
    <Col className={styles.shippingFormUi}>
      <Form autoComplete="nope">
        <Col className={styles.firstname}>
          <Col xl={6} lg={5} md={6} xs={10}>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <InputComp
                name="firstName"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />

              {shipErrors.firstName && (
                <span className="text-danger" role="alert">
                  {shipErrors.firstName}
                </span>
              )}
            </Form.Group>
          </Col>
          <Col xl={5} lg={5} md={5} xs={10} className={styles.space}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name*</Form.Label>
              <InputComp
                name="lastName"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.lastName && (
                <span className="text-danger" role="alert">
                  {shipErrors.lastName}
                </span>
              )}
            </Form.Group>
          </Col>
        </Col>

        <Col className={styles.firstname}>
          <Col xl={6} lg={5} md={6} xs={10} className={styles.colGap}>
            <Form.Group className="mb-3">
              <Form.Label>Phone*</Form.Label>
              <InputComp
                name="phoneNumber"
                className={styles.border}
                placeholder="Type here"
                type="text"
                onChange={handleShipDetailChange}
              />
              {shipErrors.phoneNumber && (
                <span className="text-danger" role="alert">
                  {shipErrors.phoneNumber}
                </span>
              )}
            </Form.Group>
          </Col>
          <Col xl={5} lg={5} md={5} xs={10} className={styles.space}>
            <Form.Group className="mb-3">
              <Form.Label>Email ID*</Form.Label>
              <InputComp
                name="emailId"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.emailId && (
                <span className="text-danger" role="alert">
                  {shipErrors.emailId}
                </span>
              )}
            </Form.Group>
          </Col>
        </Col>

        <Col className={styles.firstname}>
          <Col xl={6} lg={5} md={6} xs={10} className={styles.colGap}>
            <Form.Group className="mb-3">
              <Form.Label>Flat no, House no, Apartment*</Form.Label>
              <InputComp
                name="flatNumber"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.flatNumber && (
                <span className="text-danger" role="alert">
                  {shipErrors.flatNumber}
                </span>
              )}
            </Form.Group>
          </Col>
          <Col xl={5} lg={5} md={5} xs={10} className={styles.space}>
            <Form.Group className="mb-3">
              <Form.Label>Street Address*</Form.Label>
              <InputComp
                name="address"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.address && (
                <span className="text-danger" role="alert">
                  {shipErrors.address}
                </span>
              )}
            </Form.Group>
          </Col>
        </Col>

        <Col className={styles.firstname}>
          <Col xl={6} lg={5} md={6} xs={10} className={styles.colGap}>
            <Form.Group className="mb-3">
              <Form.Label>Landmark</Form.Label>
              <InputComp
                name="landmark"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
            </Form.Group>
          </Col>
          <Col xl={5} lg={5} md={5} xs={10} className={styles.space}>
            <Form.Group className="mb-3">
              <Form.Label>Pincode*</Form.Label>
              <InputComp
                name="zipcode"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.zipcode && (
                <span className="text-danger" role="alert">
                  {shipErrors.zipcode}
                </span>
              )}
            </Form.Group>
          </Col>
        </Col>

        <Col className={styles.firstname}>
          <Col xl={6} lg={5} md={6} xs={10} className={styles.colGap}>
            <Form.Group className="mb-3">
              <Form.Label>City*</Form.Label>
              <InputComp
                name="city"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.city && (
                <span className="text-danger" role="alert">
                  {shipErrors.city}
                </span>
              )}
            </Form.Group>
          </Col>
          <Col xl={5} lg={5} md={5} xs={10} className={styles.space}>
            <Form.Group className="mb-3">
              <Form.Label>State*</Form.Label>
              <InputComp
                name="state"
                className={styles.border}
                placeholder="Type here"
                type="string"
                onChange={handleShipDetailChange}
              />
              {shipErrors.state && (
                <span className="text-danger" role="alert">
                  {shipErrors.state}
                </span>
              )}
            </Form.Group>
          </Col>
        </Col>
        <Col className={styles.firstname}>
          <Col xl={8} lg={5} md={6} xs={10} className={styles.colGap}>
            <Form.Group className="mb-3">
              <Form.Label>Country or Region*</Form.Label>
              <Col className={styles.countryCode}>
                <CountryDropdown
                  value={country}
                  onChange={(val: any) => {
                    setCountry(val);
                    setShipDetails(() => ({ ...shipDetail, ["country"]: val }))
                  }}
                  whitelist={["IN"]}
                />
                {
                  shipErrors.country && (
                    <span className="text-danger" role="alert">
                      {shipErrors.country}
                    </span>
                  )
                }
              </Col>
            </Form.Group>
          </Col>
        </Col>
        {/* <Button
          variant="none "
          className={styles.payment_btn}
          onClick={submitShippingDetails}
        >
          PROCEED TO PAYMENT
        </Button> */}
      </Form>
    </Col>
  );
};

export default ShippingForm;
function handleShippingDetails(
  orderId: string | string[] | undefined,
  shipObj: {
    orderId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailId: string;
    flatNumber: string;
    address: string;
    city: string;
    state: string;
    zipcode: number;
    country: string;
    landmark: string;
  }
) {
  throw new Error("Function not implemented.");
}
