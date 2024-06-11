/* eslint-disable consistent-return */
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export interface IAccountLinkedDevice {
  id: number;
  Device: {
    deviceUid: string;
    deviceType: string;
  };
}

export const LinkDeviceApi = async (deviceUid: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.put("device/update", deviceUid, {
      headers: headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const linkDeviceStatus = async (): Promise<{
  success: boolean;
  message: string;
  unlinkedDevices: IAccountLinkedDevice[];
}> => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  const res = await axios.get("device/status", {
    headers,
  });
  return res.data;
};

export const linkDeviceWithAccount = async (
  deviceUid: string
): Promise<{
  success: boolean;
  message: string;
  createAccountLink: {
    id: number;
    deviceId: number;
    userId: number;
  };
}> => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  const res = await axios.post(
    "device/link",
    {
      deviceUid,
    },
    {
      headers,
    }
  );
  return res.data;
};
