/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const replaceDeviceApi = async (deviceId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("device/replace", deviceId, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
