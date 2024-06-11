/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import axios from "../../helpers/axios";
import { getAccessToken } from "../../helpers/local-storage";

export const getClaimLink = (claimLinkName: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.post("claim/getname", claimLinkName);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updateClaimLink = async (claimName: any) => {
  try {
    const res = await axios.put("claim/name", claimName);
    return res;
  } catch (e) {
    console.log(e);
  }
};
