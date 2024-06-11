/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getOrdersDetails = async (orderId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const orderResponse = axios.post("order/one", orderId, {
      headers: headers,
    });
    return orderResponse;
  } catch (error) {
    console.log(error);
  }
};
