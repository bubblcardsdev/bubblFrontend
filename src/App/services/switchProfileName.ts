/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getAllTemplate = () => {
  try {
    const res = axios.get("template/all");
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const switchProfileName = (profileName: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("profile/changeProfile", profileName, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
