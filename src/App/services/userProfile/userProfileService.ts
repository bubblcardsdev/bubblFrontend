/* eslint-disable consistent-return */
import axios from "../../helpers/axios";
import { getAccessToken } from "../../helpers/local-storage";

export const userProfile = () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.get("home/userprofile", {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updateUserProfile = (userObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("updateuser", userObj, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const resetPassword = (passObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("reset", passObj, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
