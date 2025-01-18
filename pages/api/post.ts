/* eslint-disable import/extensions */
import { NextApiRequest, NextApiResponse } from "next";
import { setPlan } from "src/App/services/myPlan/myPlanServices";
import { verifyPay } from "src/App/services/payments";

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      // Handle the POST request
      const orderId = req.body.orderNo;
      const encString = req.body.encResp;
      const response = await verifyPay(encString);
      const isSuccess = response.success;
      if (isSuccess) {
        switch (response.data.orderType) {
          case "0": {
            // removeCartValue();
            // removePriceValue();
            res.writeHead(302, {
              Location: `/order_details?orderId=${orderId}`,
            });
            res.end();
            break;
          }
          case "2": {
            // removeCartValue();
            // removePriceValue();
            res.writeHead(302, {
              Location: `/paymentResponse?orderId=${orderId}`,
            });
            res.end();
            break;
          }
          default: {
            const token = response.data.jwtToken;
            const planObj = {
              planId: 2,
              planValidity: response.data.planType,
            };
            await setPlan(planObj, token);
            res.writeHead(302, { Location: "/myPlanPage" });
            res.end();
            break;
          }
        }
      } else {
        // To be disccused with Mithun --- handled cancel
        if (!response.data?.message?.generatedMessage) {
          res.writeHead(302, {
            Location: `/checkout?isFailed=1`,
          });
          res.end();
        }
        switch (response.orderType) {
          case "0": {
            res.writeHead(302, {
              Location: `/checkout?isFailed=1`,
            });
            res.end();
            break;
          }
          case "2": {
            res.writeHead(302, {
              Location: `/checkout?isFailed=1`,
            });
            res.end();
            break;
          }
          default: {
            res.writeHead(302, { Location: "/myPlanPage" });
            res.end();
            break;
          }
        }
      }
    } else {
      // Handle other HTTP methods
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.log(e);
  }
}

export default Handler;
