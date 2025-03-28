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
      if (req.method === "POST") {
        // Handle the POST request
        const orderId = req.body.orderNo;
        const encString = req.body.encResp;
        const response = await verifyPay(encString);
        console.log(response.data, "data");
        const isSuccess = response.success;

        if (isSuccess) {
          console.log(
            response.data.orderType,
            "__/_/_/_/_/_/_/_/_/__/_/_/_/_/_____________________"
          );

          switch (response.data.orderType) {
            case "0":
              res.writeHead(302, {
                Location: `/order_details?orderId=${orderId}`,
              });
              return res.end();

            case "2":
              res.writeHead(302, {
                Location: `/paymentResponse?orderId=${orderId}`,
              });
              return res.end();

            default:
              const token = response.data.jwtToken;
              const planObj = {
                planId: 2,
                planValidity: response.data.planType,
              };
              await setPlan(planObj, token);
              res.writeHead(302, { Location: "/myPlanPage" });
              return res.end();
          }
        } else {
          // 🛠 Ensure that `res.writeHead()` is called only once

          switch (response.orderType) {
            case "0":
              res.writeHead(302, { Location: `/checkout?isFailed=1` });
              return res.end(); // 🛠 Return after setting headers
            case "1":
              res.writeHead(302, { Location: `/myPlanPage` });
              return res.end();
            case "2":
              res.writeHead(302, { Location: `/checkout?isFailed=1` });
              return res.end(); // 🛠 Return after setting headers

            default:
              res.writeHead(302, { Location: "/myPlanPage" });
              return res.end(); // 🛠 Return after sending response
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
