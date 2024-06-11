/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import LoaderScreen from "src/App/components/lottie/lottie";
import TitleBar from "src/App/components/websiteComponent/titleBar";
import ResponsiveNavbar from "src/App/components/websiteComponent/titleBar_responsive";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import Free from "src/App/view/my_plan/freeComponent";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import bubblepro from "../../../../../images/Bubble-website_assets/bubbl_pro/bubbl_pro3x.png";
import cartIcon from "../../../../../images/Bubble-website_assets/bubbl-banner/add_to_cart.svg";
import breadcrumbs from "../../../../../images/Bubble-website_assets/shop_page/breadcrumbs.svg";
import Right from "../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import HomePageNavigation from "../Phase_2_HomePage/navigationHome/homeNavigation";
import ShopPageNavigation from "../Phase_2_ShopPage/SubShopPage/shopPage";
import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
import styles from "./plan.module.css";
import PlanTableComp from "./planTableComp";
import ProComponent from "./proComponent";
// import ResponsiveTableComp from "./ResponsiveTable/responsiveTable";

export default function MyPlanComponent() {
  const router = useRouter();
  const [plan, setPlan] = useState<any>();

  const getPlanDetails = async () => {
    const planResp = await getUserPlan();
    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };
  useEffect(() => {
    getPlanDetails();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
  const topPositions = [10, 3, 4];
  const sizes = [200, 320, 95];
  const rightPositions = [0, 10, 0];
  const leftPosition = [0, 10, 70];
  const showGradients = [false, true, false];
  return (
    <LoaderScreen>
      <div className={styles.container}>
        <Head>
          <title>QR Enabled Custom NFC Business Cards for your Business</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Own your data and your network with Bubbl Pro's new and revolutionary technology, which is an empowering tool for the next generation of entrepreneurs. Get digitally customized NFC business contact cards for your business today."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className={styles.planSection}>
          <div className={styles.planPage}>
            <div className={styles.navigation}>
              <Navigation />
            </div>
            <div className={styles.background}>
              <ParallaxBackground
                scrollPosition={scrollPosition / 10}
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

            <div className={styles.breadCrumbs}>
              {/* Breadcrumb links */}
              <div className={styles.link1}>
                <Link href="/bubblProfiles">Home</Link>
              </div>
              <Image src={Right} alt="right" />
              <div className={styles.link2}>
                <Link href="/">My Plan</Link>
              </div>
            </div>
            {/* End with Breadcrumb links */}
            <h1 className={styles.planHeading}>My Plan</h1>
            {/* <Free /> */}
            {/* FREE PLAN CONTAINER */}
            {plan?.getPlans?.planId === 1 || plan === undefined ? (
              <Free />
            ) : (
              <ProComponent
                planId={plan?.getPlans?.planId}
                planValidity={plan?.getPlans?.planValidity}
                planStartDate={plan?.getPlans?.planStartDate}
                planEndDate={plan?.getPlans?.planEndDate}
              />
            )}

            <div className={styles.planDiv}>
              <p className={styles.chooseHead}>Choose your Plan</p>
              <p className={styles.currentPlan}>
                Current Plan:{" "}
                <span>
                  {plan?.getPlans?.planId === 1 || plan === undefined
                    ? "Bubbl Free"
                    : "Bubbl PRO"}
                </span>
              </p>
            </div>

            {/* TABLE COMPARISON */}
            <div>
              <PlanTableComp />
            </div>
          </div>
          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>

          <div className={styles.web}>
            <div className={styles.userprofile_sec}>
              {/* <HomePageNavigation /> */}
            </div>

            {/* 
            <section className={styles.features}>
              <TableComp />
            </section> */}
          </div>
        </section>
      </div>
    </LoaderScreen>
  );
}
