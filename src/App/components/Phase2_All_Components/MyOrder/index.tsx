/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getOrders } from "src/App/services/order";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
// import Footer from "../../src/App/components/ui/Footer/footer";
// import NavBar from "../../src/App/components/ui/NavBar/_navbar";
import OrderPageList from "./bubble_list";
import styles from "./order.module.css";

function OrderComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const router = useRouter();
  const [Order, setOrder] = useState<any>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isPyamentCheck, setIsPaymentCheck] = useState<boolean>(false);
  const [orderImages, setOrderImages] = useState<any[]>([]);
  const [productNames, setProductNames] = useState<any[]>([]);
  const [combineArray, setCombineArray] = useState<any[]>([]);

  const topPositions = [10, 40, 500];
  const sizes = [200, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const checkValidOrders = (orderData: any) => {
    const validorders = orderData?.map((data: any) =>
      data.Payments.map(
        (paymentsData: any) => paymentsData.paymentStatus === true
      )
    );
    const finalarray: any = [];
    for (let i = 0; i < validorders?.length; i++) {
      if (validorders[i][0] === true) {
        finalarray.push([true]);
      }
    }
    return finalarray;
  };
  const getOrderDetails = async () => {
    const getOrderResponse = await getOrders();
    const orderArray = getOrderResponse?.data.orders;
    const orderImageArray = getOrderResponse?.data.orderImages;
    const displayNames = getOrderResponse?.data.displayNames;
    const finalOrder = checkValidOrders(getOrderResponse?.data.orders);
    setOrder(finalOrder);
    setOrderImages(getOrderResponse?.data.orderImages);

    const item: any = [];
    for (let i = 0; i < orderArray?.length; i++) {
      const orderItem = orderArray[i];
      const orderImg = orderImageArray[i];
      const deviceName = displayNames[i];
      item.push({ ...orderItem, ...orderImg, deviceName });
    }
    setCombineArray(item);
  };

  const checkNoOrdersPresent = () => {
    let boolIsEmpty = false;
    Order?.map((value: any) => {
      if (value.cancelledOrder !== true) {
        boolIsEmpty = true;
      }
    });
    setIsEmpty(boolIsEmpty);
  };

  const checkPayment = () => {
    let boolIsEmpty = false;
    Order?.map((value: any) => {
      <div>
        {value?.Payments?.map((val: any) => {
          if (val.paymentStatus !== true) {
            boolIsEmpty = true;
          }
        })}
      </div>;
      if (value.cancelledOrder !== true) {
        boolIsEmpty = true;
      }
    });
    setIsPaymentCheck(boolIsEmpty);
  };

  useEffect(() => {
    checkNoOrdersPresent();
    checkPayment();
    getOrderDetails();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.orderPageContainer}>
        <div className={styles.orderPageNavBarContainer}>
          <Navigation />
        </div>
        {/* Paralax */}
        <div className={styles.parallaxBackgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1={false}
            showImage2
            showImage3
            showGradients={showGradients}
          />
        </div>

        {/* ORDER CONTENT */}
        <div className={styles.orderContainer}>
          <div className="container">
            {/* FIRST PART */}
            <div className={styles.orderHeaderDiv}>
              <div className={styles.orderHeaderLeft}>
                {/* <a href="/">
                  <span className={styles.home_color_head}>Home {" > "}</span>
                </a>
                <span className={styles.linkDevice_color_head}>My Orders</span> */}
                <div className={styles.orderHeading}>My Orders</div>
                <div className={styles.orderHeadingContent}>
                  Presenting a compilation of orders
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className={styles.orderSubHeading}>
              {/* <h1>My Order</h1> */}

              {Order.length === 0 ? (
                <div className={styles.noItemsOrder}>
                  <p>No order placed</p>
                </div>
              ) : (
                <>
                  <div className={styles.parallaxBackgroundContainer}>
                    <ParallaxBackground
                      scrollPosition={scrollPosition}
                      topPositions={topPositions}
                      sizes={sizes}
                      rightPositions={rightPositions}
                      leftPositions={leftPosition}
                      showImage1={false}
                      showImage2
                      showImage3
                      showGradients={showGradients}
                    />
                  </div>
                  {combineArray?.map((val: any, index: any) => {
                    return (
                      <div className={styles.orderBoxes}>
                        {val?.Payments[0]?.paymentStatus === true ? (
                          <OrderPageList orders={val} />
                        ) : val?.Payments[0]?.paymentStatus === false &&
                          Order.length === 0 ? (
                          <div className={styles.noItemsOrder}>
                            <p>No order placed</p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div className={styles.parallaxBackgroundContainer}>
              <ParallaxBackground
                scrollPosition={scrollPosition}
                topPositions={topPositions}
                sizes={sizes}
                rightPositions={rightPositions}
                leftPositions={leftPosition}
                showImage1={false}
                showImage2
                showImage3={false}
                showGradients={showGradients}
              />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.footerSection}>
        <div className={styles.footerSectionInside}>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default OrderComponent;
