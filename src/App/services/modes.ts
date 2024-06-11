/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getAllModes = () => {
  try {
    const res = axios.get("modes/all");
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const switchMode = (modeObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("modes/switch", modeObj, { headers: headers });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const directUrlMode = (urlObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("modes/directurl", urlObj, { headers: headers });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getDirectUrlMode = (getUrl: any) => {
  try {
    const res = axios.post("modes/geturl", getUrl);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const LeadFormMode = (leadObj: any) => {
  // const headers = {
  //   "Content-Type": "application/json",
  //   authorization: getAccessToken(),
  // };
  try {
    const res = axios.post("modes/leadgen", leadObj);
    return res;
  } catch (e) {
    console.log(e);
  }
};
