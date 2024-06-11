/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getImageUrl = async (profileId: any) => {
  // const headers = {
  //   "Content-Type": "application/json",
  //   authorization: getAccessToken(),
  // };
  try {
    const res = await axios.put("/profile/getBase64Image", profileId);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
