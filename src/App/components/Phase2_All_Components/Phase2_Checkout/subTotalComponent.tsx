import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

import arrow from "../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import styles from "./checkoutPage.module.css";

type Props = {
  priceValue: number | undefined;
  quantity?: number;
  cartItems?: any;
};

function SubTotalComponent({ priceValue, quantity }: Props) {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [priceData, setPriceData] = useState({
    totalPrice: 0,
    discount: 0,
  });
  const [outofStock, setOutofStock] = useState(false);

  const discountedTypes = ["Card", "Socket", "Tile", "Bundle Devices"];

  // DISCOUNT LOGIC
  useEffect(() => {
    let totalPrice = 0;
    let discount = 0;

    const carts = localStorage?.getItem("cart") || "";
    const cartItems = carts ? JSON.parse(carts) : [];
    // console.log("Cart Items:", cartItems);
    const outOfStock =
      Array.isArray(cartItems) &&
      cartItems.length > 0 &&
      cartItems.some((item: any) => item.deviceType == "NC-Metal");

    setOutofStock(outOfStock);
    if (Array.isArray(cartItems) && cartItems.length > 0) {
      const discountedItems = cartItems.filter(
        (item) =>
          item.deviceType !== "Full Custom" &&
          item.deviceType !== "NC-Pattern" &&
          (discountedTypes.includes(item.deviceType) ||
            discountedTypes.includes(item.productType))
      );
      const totalQuantity = discountedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      let discountRate = 0.4;
      if (totalQuantity === 1) discountRate = 0.4;
      else if (totalQuantity === 2) discountRate = 0.5;
      else if (totalQuantity >= 3) discountRate = 0.6;

      cartItems.forEach((item) => {
        let itemTotalPrice = item.itemPrice * item.quantity;
        // if (discountedItems.some((dItem) => dItem.id === item.id)) {
        //   let discountedItemTotal = itemTotalPrice * (1 - discountRate);
        //   discount += itemTotalPrice - discountedItemTotal;
        //   itemTotalPrice = discountedItemTotal;
        // }
        totalPrice += itemTotalPrice;
      });
    }

    // console.log("Final Price:", totalPrice, "Total Discount:", discount);
    setPriceData({
      totalPrice: Math.round(totalPrice),
      discount: Math.round(discount),
    });
  }, [quantity, priceValue]);

  const handleApplyPromo = () => {
    const isValid = promoCode === "VALID";

    if (!isValid) {
      toast.error("Invalid promo code!");
    }
  };

  const checkout = () => {
    if (outofStock) toast.error("Out of stock");
    else router.push("/shippingDetails");
  };

  return (
    <>
      <div className={styles.promoSection}>
        <h1 className={styles.promoTag}>Have a promo code?</h1>
        <div className={styles.inputButtonDiv}>
          <input
            className={styles.inputDiv}
            placeholder="Enter your promo code "
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <ButtonComp
            label="Apply"
            className={styles.buttonComp}
            onClick={handleApplyPromo}
          />
        </div>
        <div className={styles.subtotal}>
          <p>Subtotal :</p>
          {priceValue !== undefined ? (
            <p className={styles.totalValue}>₹ {priceValue}</p>
          ) : null}
        </div>
        <div className={styles.shipping}>
          <p>Shipping :</p>
          <p className={styles.totalValue}>Free</p>
        </div>
        <div className={styles.shipping}>
          <p>Discount :</p>
          <p className={styles.totalValue}>- ₹ {priceData.discount}</p>
        </div>
        <div className={styles.line} />
        <div className={styles.totalInr}>
          <p>
            TOTAL <br /> <span>(INR)</span>
          </p>
          {priceData ? <p>₹ {priceData.totalPrice}</p> : null}
        </div>
        <div className={styles.applyButton}>
          <Button onClick={() => checkout()}>
            <p className={styles.checkOutImage}>Proceed to Checkout</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </Button>
        </div>
      </div>
    </>
  );
}

export default React.memo(SubTotalComponent);
