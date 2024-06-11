/* eslint-disable import/prefer-default-export */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const chooseTemplate = async (payload: {
  deviceId?: number;
  templateNameId: string;
  profileId: number;
}) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  const res = await axios.put("template/select", payload, {
    headers: headers,
  });
  return res.data;
};
