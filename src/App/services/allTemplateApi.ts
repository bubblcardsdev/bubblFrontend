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

export const switchTemplate = (template: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("template/change", template, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
