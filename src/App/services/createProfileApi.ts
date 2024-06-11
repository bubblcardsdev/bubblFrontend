/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export interface IProfile {
  Mode: {
    id: number;
    mode: string;
    activeStatus: boolean;
  };
  ModeId: number;
  modeId: number;
  Template: {
    id: number;
  };
  TemplateId: number;
  id: number;
  deviceLinkId?: number;
  templateId?: number;
  profileImage: string;
  profileName: string;
  firstName: string;
  lastName: string;
  designation: string;
  companyName: string;
  companyAddress: string;
  shortDescription: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  phoneNumberEnable: boolean;
  emailEnable: boolean;
  websiteEnable: boolean;
  socialMediaEnable: boolean;
  digitalMediaEnable: boolean;
  emailIds?: {
    emailIdNumber: null;
    emailId: string;
    emailType: string;
    checkBoxStatus: boolean;
    activeStatus: boolean;
  }[];
  websites?: {
    websiteId: number;
    website: string;
    websiteType: string;
    checkBoxStatus: boolean;
    activeStatus: boolean;
  }[];
  socialMediaNames?: {
    profileSocialMediaLinkId: number | null;
    profileSocialMediaId: number;
    socialMediaName: string;
    enableStatus: boolean;
    activeStatus: boolean;
  }[];
  digitalPaymentLinks?: {
    profileDigitalPaymentLinkId: number | null;
    profileDigitalPaymentsId: number;
    digitalPaymentLink: string;
    enableStatus: boolean;
    activeStatus: boolean;
  }[];
  userId: number;
  brandingLogo: string;
  brandingLogoUrl: string;
  brandingFont: string;
  qrCodeImage: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  DeviceLink: null | {
    id: number;
  };
  profilePhoneNumbers: {
    id: number | null;
    profileId: number | null;
    phoneNumberType: string;
    countryCode: string;
    phoneNumber: string;
    checkBoxStatus: boolean;
    activeStatus: boolean;
    ProfileId: number | null;
  }[];
  profileEmails: {
    id: number | null;
    profileId: number | null;
    emailId: string;
    emailType: string;
    checkBoxStatus: boolean;
    activeStatus: boolean;
    ProfileId: number | null;
  }[];
  profileWebsites: {
    id: number | null;
    profileId: number | null;
    website: string;
    websiteType: string;
    checkBoxStatus: boolean;
    activeStatus: boolean;
    ProfileId: number | null;
  }[];
  profileSocialMediaLinks: {
    id: number;
    profileId: number;
    profileSocialMediaId: number;
    socialMediaName: string;
    enableStatus: boolean;
    activeStatus: boolean;
    ProfileId: number;
  }[];
  profileDigitalPaymentLinks: {
    id: number;
    profileId: number;
    profileDigitalPaymentsId: number;
    digitalPaymentLink: string;
    enableStatus: boolean;
    activeStatus: boolean;
    ProfileId: number;
  }[];
}

export interface IDeviceUId {
  id: number;
  deviceUid: string;
  deviceType: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDeviceBranding {
  id: number;
  deviceLinkId: number;
  profileId: number;
  templateId: number;
  darkMode: boolean;
  brandingFontColor: string;
  brandingBackGroundColor: string;
  brandingAccentColor: string;
  createdAt: string;
  updatedAt: string;
  DeviceLinkId: number;
}

export const validateProfileName = async (name: string) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post(
      "/profile/checkProfileName",
      {
        profileName: name,
      },
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (e) {
    return null;
  }
};

export const getAllDevice = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.get("/profile/prof", {
      headers: headers,
    });
    return res.data.data;
  } catch (e) {
    return null;
  }
};

export const listingData = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.get("/profile/all", { headers: headers });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const PostLinkDevice = async (postObj: {
  profileName: string;
  accountDeviceLinkId: number | null;
}) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post("/profile/create", postObj, {
      headers: headers,
    });
    const { message, token } = res.data;

    return { res };
  } catch (e) {
    console.log(e);
    return null;
  }
};

// eslint-disable-next-line consistent-return
export const LinkDeviceApi = async (deviceId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("device/update", deviceId, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const DeviceLinkAccountApi = async (deviceAcc: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post("device/link", deviceAcc, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getProfileId = async (payload: { profileId: string }) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post("profile/find", payload, {
      headers: headers,
    });
    const profileData = res.data.data;
    // console.log("Profile Data:", profileData);
    const DataLength = profileData.profileImgs.length;

    const profileImgs = profileData.profileImgs.reduce(
      (
        acc: { square?: string; rectangle?: string },
        item: { type: number; image: string }
      ) => {
        switch (Number(item.type)) {
          case 0:
            return { ...acc, square: item.image };
          case 1:
            return { ...acc, rectangle: item.image };
          default:
            return acc;
        }
      },
      {}
    );

    const returnVal: any = { data: { data: { ...profileData, profileImgs } } };
    return returnVal;
  } catch (e) {
    console.log(e);
  }
};

export const mobileDelete = async () => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("profile/deletesocial", {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteBrandingImage = async (obj: any) => {
  try {
    const res = await axios.put("profile/deletebradingimage", obj);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteQRImage = async (obj: any) => {
  try {
    const res = await axios.put("profile/deleteQrImage", obj);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteProfileImage = async (obj: any) => {
  try {
    const res = await axios.put("profile/deleteProfileImage", obj);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
