/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable array-callback-return */
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import styles from "./order_details.module.css";

function OrderPrice({ orderDetails }: any) {
  const [Total, setTotal] = useState<any>(0);
  const GetSubTotalPrice = () => {
    let totalPrice = 0;
    if (orderDetails?.Carts?.length > 0) {
      orderDetails?.Carts.forEach((cartItem: any) => {
        const { quantity, productPrice } = cartItem;
        totalPrice += productPrice;
      });
    }
    return totalPrice;
  };
  useEffect(() => {
    setTotal(GetSubTotalPrice());
  }, [orderDetails]);

  const shippingCharge = orderDetails?.Payments[0]?.shippingCharge || 0;
  const tax = Math.round(Total * 0.18);
  const grandTotal = Math.round(Total + 0 + shippingCharge);

  return (
    <Col className={styles.order_price} xs="11">
      <div className={styles.orderTitle}>
        <h5>Order ID #{orderDetails?.id}</h5>
        <span className={styles.line} />
        <h2>
          Ordered on &nbsp;
          {moment(orderDetails?.Carts[0]?.updatedAt).format("MMMM Do, YYYY")}
        </h2>
      </div>
      <div className={styles.orderTitle_responsive}>
        <h1>Order ID #{orderDetails?.id}</h1>
      </div>

      <div className={styles.orderLine} />

      <div className={styles.shipping}>
        <Col className={styles.shipping_details} lg="4">
          <h4>Shipping Address</h4>
          <h2>{orderDetails?.Shippings[0]?.firstName ?? "test"}</h2>
          <p>
            {orderDetails?.Shippings[0]?.flatNumber ?? "flatNumber"},<br />
            {orderDetails?.Shippings[0]?.address ?? "addr1"},<br />
            {orderDetails?.Shippings[0]?.city ?? "city"},<br />
            {orderDetails?.Shippings[0]?.state ?? "state"},<br />
            {orderDetails?.Shippings[0]?.country ?? "country"},<br />
            {orderDetails?.Shippings[0]?.zipcode ?? "zipcode"}
          </p>
          <h3>
            Landmark: <span>{orderDetails?.Shippings[0]?.landmark}</span>
          </h3>
        </Col>
        <Col xl={3} lg={4} md={5} xs={12}>
          <h4>Order Summary</h4>
          <div className={styles.shipping_summary}>
            <div>
              <p>Item(s) Subtotal :</p>
              <p>Shipping :</p>
              <p>Total :</p>
              {/* <p>Tax :</p> */}
              <h5>Grand Total :</h5>
            </div>
            <div>
              <p>₹ {Total}</p>
              <p>₹ {shippingCharge}</p>
              <p>
                ₹&nbsp;
                {Total + shippingCharge}
              </p>
              {/* <p>₹&nbsp;{tax}</p> */}
              <h5>
                ₹&nbsp;
                {Math.round(grandTotal)}/-
              </h5>
            </div>
          </div>
        </Col>
      </div>
    </Col>
  );
}

export default OrderPrice;
