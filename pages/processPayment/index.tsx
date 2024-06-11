/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-danger */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getShipping, initialtePay } from "src/App/services/payments";

import {
  getAccessToken,
  getPriceValue,
  removeCheckLogin,
  removeShippingDetails,
} from "../../src/App/helpers/local-storage";

function InitatePay() {
  const [htmlContent, setHtmlContent] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState<any>();
  const router = useRouter();
  const countryData = router?.query?.country;

  function getPlanPrice(planType: any) {
    switch (planType) {
      case 0:
        return 199;
      case 1:
        return 1999;
      default:
        return 25000;
    }
  }

  const htmlString = async () => {
    const orderId = router.query?.orderId;
    const orderTypeReq: any = router.query?.orderType;
    const shippingCharge = shippingCost;
    const planType =
      router.query?.planType === undefined ? 0 : Number(router.query?.planType);
    const payObj = {
      orderId: Number(orderId),
      value:
        orderTypeReq === "0" ? Math.round(cartTotal) : getPlanPrice(planType),
      orderType: orderTypeReq, // set 0 for shop orders and 1 for plan upgrades
      planType: planType,
      shippingCost: shippingCharge,
      token: btoa(getAccessToken()!),
    };
    if (shippingCharge !== undefined) {
      const response = await initialtePay(payObj);
      setHtmlContent(response.data.formbody);
    } else if (shippingCharge === undefined && orderTypeReq === "1") {
      const response = await initialtePay(payObj);
      setHtmlContent(response.data.formbody);
    }
  };

  const getCart = async () => {
    // const cartParse: any = getCartValue();
    // const cart = JSON.parse(cartParse);
    // let Total = 0;
    // cart.map((cartItem: any) => {
    //   Total += cartItem.productPrice;
    //   return Total;
    // });
    const TotalVal: any = getPriceValue();
    const tax = Number(TotalVal);
    setCartTotal(tax);

    // const cart = await getCartItems();

    // const responseVal = cart?.response?.data?.cart;
    // let Total = 0;
    // responseVal?.Carts?.map((cartItem: any) => {

    //   Total += cartItem.productPrice;
    //   return Total;
    // });
    // const tax = Total * 0.18 + Total;

    // setCartTotal(tax);
  };

  const getShippingCharge = async () => {
    if (countryData !== undefined) {
      let countryVal = "";

      if (countryData === "India") {
        countryVal = "india";
      } else {
        countryVal = "others";
      }
      const CountryObj = {
        country: countryVal,
      };

      const cost = await getShipping(CountryObj);
      const shippingValue = cost?.data.shippingCharge;
      setShippingCost(shippingValue);
    }
  };

  async function findCartTotal() {
    await getCart();
    await getShippingCharge();
    await htmlString();
  }
  useEffect(() => {
    findCartTotal();
    removeCheckLogin();
    removeShippingDetails();
  }, [countryData, shippingCost, cartTotal]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default InitatePay;
