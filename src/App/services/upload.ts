/* eslint-disable consistent-return */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const ProfileImagePostApi = async (profileUpload: {
  profileId: any;
  squareImage: Blob | File;
  rectangleImage: Blob | File;
}) => {
  const payload = new FormData();

  payload.set("profileId", profileUpload?.profileId);
  payload.set("squareImage", profileUpload.squareImage, "squareImage.jpg");
  payload.set(
    "rectangleImage",
    profileUpload.rectangleImage,
    "rectangleImage.jpg"
  );
  const headers = {
    authorization: getAccessToken(),
    "Content-Type": "multipart/form-data",
  };
  try {
    const res = await axios.post("upload/profileimage", payload, {
      headers: headers,
    });
    console.log(
      res.data.data.profileImageUrl,
      " res.data.data.profileImageUrl"
    );
    const profileImageUrl = res.data.data.profileImageUrl.reduce(
      (
        acc: { square?: string; rectangle?: string },
        item: { type: number; image: string }
      ) => {
        switch (item.type) {
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

    const data = { ...res.data, profileImageUrl };
    return { data };
  } catch (e) {
    console.log(e);
  }
};

export const BrandingLogoPostApi = async (brandingLogo: any) => {
  const headers = {
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post("upload/brandinglogo", brandingLogo, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const qrImageUploadApi = async (qrLogo: any) => {
  const headers = {
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.post("upload/qrcodeimage", qrLogo, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
