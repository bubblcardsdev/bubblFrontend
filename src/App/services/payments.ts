/* eslint-disable consistent-return */
import axios from "../helpers/axios";

const initialtePay = async (payObj: any) => {
  try {
    const res = await axios.post("pay/initialePay", payObj);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const verifyPay = async (encString: any) => {
  const encObj = {
    data: encString,
  };

  try {
    const res = await axios.post("pay/verifyPayment", encObj);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getShipping = async (CountryObj: any) => {
  try {
    const shippingCost = axios.post("pay/shippingCharge", CountryObj);
    return shippingCost;
  } catch (e) {
    console.log(e);
  }
};

export { getShipping, initialtePay, verifyPay };
