/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import Image from "next/image";
import React from "react";

import styles from "./order.module.css";

type Props = {
  itemName: any;
  itemQuantity: any;
  itemPrice: any;
  itemTotal: any;
  imageSrc: any;
};

const OrderPage_left_Content: React.FC<Props> = ({
  itemName,
  itemQuantity,
  itemPrice,
  itemTotal,
  imageSrc,
}) => (
  <div>
    {/* Desktop */}
    <div className={styles.cards}>
      <img src={imageSrc} width="100%" height="100%" />

      <div className={styles.order_details}>
        <h2>
          Bubbl
          <br />
          {itemName}
        </h2>
        <div className={styles.details}>
          <p>QTY: {itemQuantity}</p>
          <span>|</span>
          <h3>Rs.{itemPrice}</h3>
        </div>
      </div>
    </div>

    {/* Responsive */}
    <div className={styles.cards_responsive}>
      <img src={imageSrc} width="100%" height="100%" />
      <div className={styles.order_details}>
        <h2>
          Bubbl
          <br />
          {itemName}
        </h2>

        <div className={styles.details}>
          <p>QTY: {itemQuantity}</p>
          <span>|</span>
          <h3>Rs.{itemPrice}</h3>
        </div>
      </div>
    </div>
  </div>
);
export default OrderPage_left_Content;
