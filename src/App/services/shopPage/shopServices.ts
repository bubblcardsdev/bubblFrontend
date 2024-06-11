/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from "../../helpers/axios";
import { getAccessToken } from "../../helpers/local-storage";

export const addCartItem = async (cartObject: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/cart/addToCart", cartObject, {
      headers: headers,
    });
    const { message, token } = res.data;

    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getCartItems = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.get("cart/all", { headers: headers });
    const response = res?.data;

    return { response };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const cancelCart = async (cancelObject: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/cart/cancel", cancelObject, {
      headers: headers,
    });
    const { message, token } = res.data;

    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const newsLetter = async (emailObj: any) => {
  try {
    const res = await axios.post("/contact/newsletter", emailObj, {});
    const { message, token } = res.data;
    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const contactUs = async (contactObj: any) => {
  try {
    const res = await axios.post("/contact", contactObj, {});
    const { message, token } = res.data;

    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const clearCartItems = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.get("cart/clearItems", { headers: headers });
    const response = res?.data;

    return { response };
  } catch (e) {
    console.log(e);
    return null;
  }
};
