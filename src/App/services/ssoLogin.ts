/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";

export const GoogleLoginApi = async (id: any) => {
  try {
    const googleResp = axios.post("/verifygoogleuser", id);
    return googleResp;
  } catch (error) {
    console.log(error);
  }
};

export const FacebookLoginApi = async (id: any) => {
  try {
    const faceBookResp = axios.post("/verifyfacebookuser", id);
    return faceBookResp;
  } catch (error) {
    console.log(error);
  }
};

export const LinkedInLoginApi = async (id: any) => {
  try {
    const linkResp = axios.post("/verifylinkedinuser", id);
    return linkResp;
  } catch (error) {
    console.log(error);
  }
};
