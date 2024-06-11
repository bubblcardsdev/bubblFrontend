/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const cancelOrder = async (orderId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const orderResponse = axios.put("order/cancel", orderId, {
      headers: headers,
    });
    return orderResponse;
  } catch (error) {
    console.log(error);
  }
};
