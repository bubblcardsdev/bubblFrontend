/* eslint-disable consistent-return */
import { AxiosResponse } from "axios";

import axios from "../../helpers/axios";
import { getAccessToken } from "../../helpers/local-storage";

export interface IPlanDetail {
  id: number;
  userId: number;
  planId: number;
  subscriptionType: string;
  planValidity: null;
  planStartDate: null;
  planEndDate: null;
  isValid: boolean;
  createdAt: string;
  updatedAt: string;
  UserId: number;
  PlanId: number;
}

export const getUserPlan = async (): Promise<
  AxiosResponse<any, { getPlans: IPlanDetail }>
> => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = await axios.get("plan/find", {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const setPlan = (planObj: any, token: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: token,
  };
  try {
    const res = axios.put("plan/update", planObj, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
export const cancelPlan = () => {
  const headers = {
    authorization: getAccessToken(),
  };
  try {
    const res = axios.put("plan/cancel", null, {
      headers: headers,
    });
    window.location.reload();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const initiatePayment = (planId: any) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: getAccessToken(),
  };
  try {
    const res = axios.post("plan/initiate", planId, {
      headers: headers,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
