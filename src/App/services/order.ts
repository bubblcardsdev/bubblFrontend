/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getOrders = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const orderResponse = axios.get("order/all", {
      headers: headers,
    });
    return orderResponse;
  } catch (error) {
    console.log(error);
  }
};
