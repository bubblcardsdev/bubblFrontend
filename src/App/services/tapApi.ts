/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const PostTapDetails = async (tapDetails: any) => {
  try {
    const res = await axios.post("/analytics/tapDetails", tapDetails);
    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getTapDetails = async (tapId: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getTapsData", tapId, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getModesDetails = async (tapData: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getModeUsage", tapData, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getSocialTaps = async (tapData: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getSocialTaps", tapData, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getPaymentTaps = async (tapData: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getPaymentTaps", tapData, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getContactTaps = async (tapData: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getContactTaps", tapData, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getLeadGenData = async (tapData: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getLeadGenData", tapData, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getUserDevice = async () => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.get("/analytics/getUserDevices", {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getDeviceTypes = async (obj: any) => {
  const tokenData = await getAccessToken();
  const headers = {
    "Content-Type": "application/json",
    authorization: tokenData,
  };
  try {
    const res = await axios.put("/analytics/getDeviceType", obj, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
