/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const deActivateApi = async (accountDevieLinkId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("device/deactivate", accountDevieLinkId, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const activateApi = async (accountDevieLinkId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("device/activate", accountDevieLinkId, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
