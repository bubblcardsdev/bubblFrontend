/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { getAccessToken } from "src/App/helpers/local-storage";

import axios from "../../helpers/axios";

export const AddFullyCustomApi = async (postObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const addCartItem = await axios.post("/fullCustom/fullyCustom", postObj, {
      headers: headers,
    });
    return addCartItem.data;
  } catch (error) {
    console.log(error);
  }
};

// get api for price from device
export const getPriceFunc = async () => {
  // const headers = {
  //   "Content-Type": "application/json",
  // };
  try {
    const getPriceValue = await axios.get("/fullCustom/getPrice");
    return getPriceValue?.data;
  } catch (error) {
    console.log(error);
  }
};
