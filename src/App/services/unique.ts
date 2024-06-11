import axiosInstance from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

type MsgResponse = { success: boolean; message: string };

type UniqueNameResponse =
  | { success: false; message: string }
  | {
      success: true;
      message: string;
      name: { deviceLinkId: number; uniqueName: string };
    };

export const updateUniqueName = async (postObj: {
  uniqueName: string;
  deviceLinkId: number | null;
  profileId: number | any;
}): Promise<MsgResponse> => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  const res = await axiosInstance.put("/unique/name", postObj, {
    headers: headers,
  });
  return res.data;
};

export const getUniqueName = async (postObj: {
  deviceLinkId: string | number | null;
}): Promise<UniqueNameResponse> => {
  // const headers = {
  //   "Content-Type": "application/json",
  //   authorization: getAccessToken(),
  // };
  const res = await axiosInstance.post("/unique/getName", postObj);
  return res.data;
};
