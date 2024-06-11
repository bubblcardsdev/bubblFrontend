/* eslint-disable consistent-return */

import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const shippingDetails = async (
  shipObj: any,
  orderId: any,
  country: any
) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
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

    const res = await axios.post("order/checkout", shipObjApi, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updatePayment = async (orderId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("order/pay", orderId, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const initialePayment = async (payObj: any) => {
  try {
    const res = await axios.post("pay/initialePay", payObj);
    return res;
  } catch (e) {
    console.log(e);
  }
};
