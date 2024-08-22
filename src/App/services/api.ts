/* eslint-disable import/no-unresolved */
import { RegisterDetailsT, verifyEmailOTP } from "types/register";

import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

type GenericResponseT = { success: boolean; data: any; message?: string };

export const registerUser = (registerDetails: RegisterDetailsT) =>
  axios
    .post<{ data: any; success: boolean }>("/register", {
      ...registerDetails,
    })
    .then((res) => res.data);

export const verifyEmailOtp = (verifyEmailOtpDetails: verifyEmailOTP) =>
  axios
    .post<{ data: any; success: boolean }>("/verifyemailOtp", {
      ...verifyEmailOtpDetails,
    })
    .then((res) => res.data);

export const addPhoneNumber = ({
  email,
  phoneNumber,
  countryCode,
}: {
  email: string;
  phoneNumber: string;
  countryCode: string;
}) =>
  axios
    .post<GenericResponseT>("/addphonenumber", {
      email,
      phoneNumber,
      countryCode,
    })
    .then((res) => res.data);

export const verifyOTP = (
  countryCode: string,
  phoneNumber: string,
  otp: string
) =>
  axios
    .post<GenericResponseT>("/verifyotp", {
      countryCode,
      phoneNumber,
      otp,
    })
    .then((res) => res.data)
    .then((data) => {
      const { message } = data.data;
      if (data.success) {
        return { message, success: true };
      }
      return { message };
    });

export const resendOTP = (countryCode: string, phoneNumber: string) =>
  axios
    .post<GenericResponseT>("/resendotp", {
      countryCode,
      phoneNumber,
    })
    .then((res) => res.data);

export const verifyEmail = (emailVerificationId: string) =>
  axios
    .post<GenericResponseT>("/verifyemail", { emailVerificationId })
    .then((res) => res.data)
    .then((data) => {
      const { message, error } = data.data;
      if (data.success) {
        return { message };
      }
      return { error: error || message };
    });

export const login = (email: string, password: string, router: any) =>
  axios
    .post<GenericResponseT>("/login", { email, password })
    .then((res) => res.data)
    .then((data) => {
      const { message, token, firstName, lastName, error } = data.data;
      if (data.success) {
        if (data?.data?.emailVerified) {
          return { token, firstName, lastName };
        } else router.push(`/register/${email}`);
      }
      return { error: error || message };
    });

export const forgotPassword = (email: string) =>
  axios
    .post<GenericResponseT>("/forgotpassword", { email })
    .then((res) => res.data);

export const changePassword = (newPassword: string, forgotPasswordId: string) =>
  axios
    .post<GenericResponseT>("/changepassword", {
      newPassword,
      forgotPasswordId,
    })
    .then((res) => res.data);

export const CreateProfilePostApi = async (createData: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("/profile/update", createData, {
      headers: headers,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const updateProfileName = async (payload: {
  profileId: string;
  profileName: string;
}) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };

  const res = await axios.put("/profile/updateProfileName", payload, {
    headers: headers,
  });
  return res;
};

export const getProfileByDevice = async (deviceUid: any) => {
  try {
    const res = await axios.get(`profile?deviceUid=${deviceUid}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getProfileByName = async (deviceUid: any) => {
  try {
    const res = await axios.get(`profile?uniqueName=${deviceUid}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
