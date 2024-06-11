/* eslint-disable no-unused-vars */
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import arrow from "../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import styles from "./checkoutPage.module.css";

type Props = {
  priceValue: number | undefined;
};

function SubTotalComponent({ priceValue }: Props) {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");

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
        <div className={styles.line} />
        <div className={styles.totalInr}>
          <p>
            TOTAL <br /> <span>(INR)</span>
          </p>
          {priceValue !== undefined ? <p>₹ {priceValue}</p> : null}
        </div>
        <div className={styles.applyButton}>
          <Button onClick={() => router.push("/shippingDetails")}>
            <p className={styles.checkOutImage}>Proceed to Checkout</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </Button>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
export default SubTotalComponent;
