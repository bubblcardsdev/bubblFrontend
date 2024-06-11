/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const MobileDeleteApi = async (id: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/profile/deletephone", id, {
      headers: headers,
    });
    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const EmailDeleteApi = async (id: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/profile/deleteemail", id, {
      headers: headers,
    });
    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const WebSiteDeleteApi = async (id: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/profile/deletewebsite", id, {
      headers: headers,
    });
    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};
