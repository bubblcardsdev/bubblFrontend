import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import arrow from "../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import styles from "./checkoutPage.module.css";

type Props = {
  priceValue: number | undefined;
  quantity?: number;
};

function SubTotalComponent({ priceValue, quantity }: Props) {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [priceData, setPriceData] = useState({
    totalPrice: 0,
    discount: 0,
  });

  // DISCOUNT LOGIC
  useEffect(() => {
    let totalPrice = Number(priceValue || 0);

    if (quantity === 1) {
      totalPrice = totalPrice * 0.6; // 40% Discount
    } else if (quantity === 2) {
      totalPrice = totalPrice * 0.5; // 50% Discount
    } else {
      totalPrice = totalPrice * 0.4; // 60% Discount
    }

    const newPriceData = {
      totalPrice: Math.round(totalPrice),
      discount: Math.round((priceValue ?? 0) - totalPrice),
    };
    setPriceData(newPriceData);
  }, [quantity, priceValue]);

  const handleApplyPromo = () => {
    const isValid = promoCode === "VALID";

    if (!isValid) {
      toast.error("Invalid promo code!");
    }
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
          <Button onClick={() => router.push("/shippingDetails")}>
            <p className={styles.checkOutImage}>Proceed to Checkout</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default React.memo(SubTotalComponent);
