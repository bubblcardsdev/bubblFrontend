/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { getAccessToken } from "src/App/helpers/local-storage";
import { initiatePayment } from "src/App/services/myPlan/myPlanServices";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import arrow from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/btnArrow.svg";
import crossV from "../../../../../images/Bubble-website_assets/bubbl_pro/crossV.svg";
import free from "../../../../../images/Bubble-website_assets/bubbl_pro/free-badge-icon.svg";
import orange from "../../../../../images/Bubble-website_assets/bubbl_pro/orange.svg";
import pro from "../../../../../images/Bubble-website_assets/bubbl_pro/pro-badge-icon.svg";
import violet from "../../../../../images/Bubble-website_assets/bubbl_pro/vilolet.svg";
import featureImage from "../../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_Feature.svg";
import respFeatureImage from "../../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_FeatureResp1.svg";
import respFeatureImageTwo from "../../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_FeatureResp2.svg";
import ProIcon from "../../../../../images/Phase_2_All_Assets/home_page/proIcon.png";
import styles from "./tableComponent.module.css";

export default function TableCompPage() {
  const router = useRouter();
  const [yearlyPlanActive, setMonthlyPlanActive] = useState<any>(false);

  const updatePlans = async (planIdVal: number) => {
    let trueOrFalse = "";
    const token = getAccessToken()!;

    if (token === null || token === undefined) {
      router.replace("/login");
    }
    if (yearlyPlanActive === true) {
      trueOrFalse = "annually";
    } else {
      trueOrFalse = "monthly";
    }
    const planObj = {
      planId: planIdVal,
    };
    const initiatePay = await initiatePayment(planObj);
    if (initiatePay?.data?.success) {
      router.push({
        pathname: "/processPayment",
        query: {
          orderId: initiatePay?.data?.createOrder?.id,
          value: trueOrFalse === "monthly" ? 199 : 1999,
          orderType: 1,
          planType: trueOrFalse === "monthly" ? 0 : 1,
        },
      });
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topPositions = [10, 40, 30];
  const sizes = [65, 45, 45];
  const rightPositions = [0, -47, -27];
  const leftPosition = [-15, 0, 0];
  const showGradients = [false, true, true];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={featureImage} alt="featureImage" />
          <div className={styles.contactButtonContainer}>
            <Button
              className={styles.contactButton}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className={styles.backgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1
            showImage2={false}
            showImage3
            showGradients={showGradients}
          />
        </div>
      </div>

      {/* responsive */}

      <div className={styles.containerResp}>
        <div className={styles.imageRespContainer}>
          <Image
            src={respFeatureImage}
            alt="respImage"
            className={styles.featureImageOne}
          />
          <div className={styles.backgroundContainer}>
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
          <Image
            src={respFeatureImageTwo}
            alt="respFeatureImage"
            className={styles.featureImageTwo}
          />
          <div className={styles.contactButtonContainerResp}>
            <Button
              className={styles.contactButtonResp}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className={styles.backgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1
            showImage2
            showImage3={false}
            showGradients={showGradients}
          />
        </div>
      </div>
    </>
  );
}
