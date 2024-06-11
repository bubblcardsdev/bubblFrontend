/* eslint-disable consistent-return */
import { getAccessToken } from "src/App/helpers/local-storage";

import axios from "../../helpers/axios";

export const AddCartApi = async (postObj: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const addCartItem = await axios.post("/custom/nameCustom", postObj, {
      headers: headers,
    });
    return addCartItem.data;
  } catch (error) {
    console.log(error);
  }
};

// func for get all thumbnail Iages
export const getAllThumbnailImages = async () => {
  try {
    const getImages = await axios.get("/custom/getThumbnailImages");
    return getImages.data?.devices;
  } catch (error) {
    console.log(error);
  }
};

// func for get card images by id
export const getCardImage = async (id: any) => {
  try {
    const getImages = await axios.put("/custom/getCardImageById", id);
    return getImages.data;
  } catch (error) {
    console.log(error);
  }
};

// func for get card images by Type
export const getPatternImages = async (id: any) => {
  try {
    const getImages = await axios.put("/custom/patternImages", id);
    return getImages.data?.getCardTypeDevice;
  } catch (error) {
    console.log(error);
  }
};
