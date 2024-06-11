/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "react-bootstrap/Button";

import Left_Details from "./bubble_card";
import styles from "./order.module.css";

type Props = {
  orders: any;
};

const OrderPageList: React.FC<Props> = ({ orders }) => {
  const router = useRouter();
  return (
    <div className={styles.multiple_order_list}>
      {/* Desktop */}
      <div className={styles.order_list_section}>
        <div>
          {orders?.Carts?.map((val: any, index: any) => (
            <div className={styles.cards}>
              <img src={orders[index]} width="100%" height="100%" />

              <div className={styles.order_details}>
                <h2>Bubbl {orders?.deviceName[index]}</h2>

                <div className={styles.details}>
                  <p>QTY: {val.quantity}</p>
                  <span>|</span>
                  <h3>Rs. {val.productPrice}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* order id */}
        <div className={styles.order_number}>
          <h4>Order ID #{orders?.id}</h4>
        </div>
        {/* View order detail */}
        <div className={styles.order_number_view}>
          <Button
            onClick={() =>
              router.push({
                pathname: "./../order_details",
                query: { orderId: orders?.id },
              })
            }
            variant="none"
          >
            View Order Details
          </Button>
        </div>
      </div>
      {/* Responsive */}
      <div
        className={`${styles.order_list_section_copy} ${styles.order_list_section_responsive}`}
      >
        <div>
          {orders?.Carts?.map((val: any, index: any) => (
            <Left_Details
              itemName={val.productType}
              itemQuantity={val.quantity}
              itemPrice={val.productPrice}
              itemTotal={orders?.totalPrice}
              imageSrc={orders[index]}
            />
          ))}
        </div>
      </div>

      <hr className={styles.lineHr} />
      <div className={styles.responsive_order_details}>
        <div className={styles.order_number}>
          <h4>Order ID #{orders?.id}</h4>
        </div>
        <div>
          <Button
            className={styles.viewColor}
            onClick={() =>
              router.push({
                pathname: "./../order_details",
                query: { orderId: orders?.id },
              })
            }
            variant="none"
          >
            View Order Details
          </Button>
        </div>
      </div>
    </div>
  );
};
export default OrderPageList;
