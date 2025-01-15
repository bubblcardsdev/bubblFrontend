/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getAccessToken,
  getCartValue,
  removeCartValue,
  removeCheckLogin,
  removePriceValue,
} from "src/App/helpers/local-storage";
import {
  getOrdersDetails,
  getOrdersDetailsNonUser,
} from "src/App/services/orderDetails";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
import MultipleOrder from "./bubble_multiple_list";
import styles from "./order_details.module.css";

function OrderDetailsPage() {
  const router = useRouter();

  const [OrderDetail, setOrderDetails] = useState<any>([]);
  const [image, setImage] = useState<any>([]);
  const [deviceNames, setDeviceName] = useState<any>([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const topPositions = [10, 40, 500];
  const sizes = [200, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const OrderDetailsFunc = async () => {
    const orderIdVal = router.query?.orderId;
    removeCheckLogin();

    const orderValue = orderIdVal !== undefined ? orderIdVal : null;
    const OrederObj = {
      orderId: orderValue,
    };
    const token = getAccessToken();
    const getOrderResponse: any = token
      ? await getOrdersDetails(OrederObj)
      : await getOrdersDetailsNonUser(OrederObj);
    console.log(getOrderResponse);
    setOrderDetails(getOrderResponse?.data?.order);
    setImage(getOrderResponse?.data?.deviceImages);
    setDeviceName(getOrderResponse?.data?.displayNames);
    getCartValue();
    removeCartValue();
    removePriceValue();
  };

  // State to manage whether navigation needs to be refreshed
  const [refreshNavigation, setRefreshNavigation] = useState<boolean>(false);

  // Function to handle the refresh button click
  const handleRefreshClick = () => {
    setRefreshNavigation(true);
  };

  // Function to handle the completion of navigation refresh
  const handleNavigationRefreshed = () => {
    setRefreshNavigation(false);
  };

  useEffect(() => {
    if (router?.query?.orderId) {
      OrderDetailsFunc();
    }
  }, [router]);

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
          <Navigation
            refresh={refreshNavigation}
            onRefresh={handleNavigationRefreshed}
          />
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
                <div className={styles.breadCrumbs}>
                  {/* <a href="/">
                    <span className={styles.home_color_head}>Home {" > "}</span>
                  </a> */}
                  <span
                    className={styles.home_color_head}
                    onClick={() => router.push("/order")}
                  >
                    My Orders {" > "}
                  </span>

                  <span className={styles.linkDevice_color_head}>
                    Order Detail
                  </span>
                </div>
                <div className={styles.orderHeading}>Order Details</div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className={styles.orderSubHeading}>
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
              {OrderDetail && (
                <MultipleOrder
                  orderDetails={OrderDetail[0]}
                  imageSrc={image}
                  deviceNames={deviceNames}
                />
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
          <div className={styles.myProfileFooter}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
