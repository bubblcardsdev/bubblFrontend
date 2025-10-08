/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import LoaderScreen from "src/App/components/lottie/lottie";
import FrequentlyQuestions from "src/App/components/Phase2_All_Components/Phase_2_Frequently/frequently";
import CalculateTree from "src/App/components/Phase2_All_Components/Phase_2_HomePage/calculateTree/calculateTree";
import ClientSection from "src/App/components/Phase2_All_Components/Phase_2_HomePage/clientSection/clientSection";
import ProfileCreateSection from "src/App/components/Phase2_All_Components/Phase_2_HomePage/createProfileSection/createProfile";
import CustomizeSection from "src/App/components/Phase2_All_Components/Phase_2_HomePage/customizeSection/customizeSection";
import FunctionSection from "src/App/components/Phase2_All_Components/Phase_2_HomePage/functionSection/functionSection";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import NetworkingSection from "src/App/components/Phase2_All_Components/Phase_2_HomePage/networkingSection/networking";
import ProductItems from "src/App/components/Phase2_All_Components/Phase_2_HomePage/productItems/productItems";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { removeCheckLogin } from "src/App/helpers/local-storage";
import styles from "@/pages/index.module.css";
import Marquee from "src/App/components/marquee/marquee";
import TestimonialComponent from "../src/App/components/Phase2_All_Components/Phase_2_HomePage/testimonialSection/testimonial";
import UpArrow from "../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/up_white.png";
import ParallaxBackground from "./backgroundimageswithgradient/background";

const ConnectSectionLazy = React.lazy(
  () =>
    import(
      "src/App/components/Phase2_All_Components/Phase_2_HomePage/connectSection/connectSection"
    )
);

const FlowSectionLazy = React.lazy(
  () =>
    import(
      "src/App/components/Phase2_All_Components/Phase_2_HomePage/flowSection/flowSection"
    )
);

const ParallaxWrapper = ({ children }: any) => (
  <Parallax speed={1}>{children}</Parallax>
);

export default function Home() {
  // let token = "";

  useEffect(() => {
    removeCheckLogin();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    window.localStorage.getItem("accesstoken") !== null
      ? setIsTokenPresent(true)
      : setIsTokenPresent(false);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [isTokenPresent]);

  const topPositions = [10, 3, 10];
  const sizes = [20, 45, 45];
  const rightPositions = [0, -33, 0];
  const leftPosition = [-7, 0, -3];
  const showGradients = [true, true, false];

  return (
    <LoaderScreen>
      <div className={styles.container}>
        <Head>
          <title>
            Bubbl - Premium Business Digital Card|NFC Custom Business Cards
            Online
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Upgrade your networking game with our exclusive NFC business cards. Elevate your online presence with contactless convenience. Design your own today!"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://bubbl.cards/" />
        </Head>

        <section
          className={`${styles.homePageSection} ${styles.parallaxBackground}`}
        >
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

          <div className={styles.homePage}>
            <div className={styles.navigationContainer}>
              {isTokenPresent ? <Navigation /> : <HomePageNavigation />}
            </div>
            {/* <Marquee /> */}
            {/* Connect Section */}
            <section className={styles.connectSectionSec}>
              <Suspense fallback={<div>Loading...</div>}>
                <ConnectSectionLazy />
              </Suspense>
            </section>

            {/* Flow Section */}
            <section className={styles.flowContent}>
              <Suspense fallback={<div>Loading...</div>}>
                <FlowSectionLazy />
              </Suspense>
            </section>

            {/* {client section} */}

            <section className={styles.clientSection}>
              <ClientSection />
            </section>

            {/* Product Section */}

            <section className={styles.productSection}>
              <ParallaxWrapper>
                <ProductItems />
              </ParallaxWrapper>
            </section>

            {/* Customize Section */}
            <section className={styles.customizeContainer}>
              <CustomizeSection />
            </section>
          </div>

          {/* Function Section */}
          <section className={styles.functionSection}>
            <div className={styles.gradientEffect}>
              <FunctionSection />
            </div>
          </section>

          <div className={styles.homePage}>
            {/* Profile Section */}
            <section className={styles.profileSection}>
              <ProfileCreateSection />
            </section>

            {/* Networking Section */}
            <section className={styles.networkSection}>
              <NetworkingSection />
            </section>

            {/* Calculate Tree Section */}
            <section className={styles.treeSection}>
              <CalculateTree />
            </section>
            {/* {testimonials} */}
            <section className={styles.testimonial}>
              <TestimonialComponent />
            </section>
            {/* Frequently Asked Questions Section */}
            <section className={styles.frequentSection}>
              <FrequentlyQuestions />
            </section>
          </div>
          {/* Footer */}
          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>
        </section>
      </div>
      {/* Up Arrow */}
      {scrollPosition > 100 && (
        <button className={styles.upArrowButton} onClick={scrollToTop}>
          <Image
            src={UpArrow}
            alt="Up Arrow"
            className={styles.upArrowIcon}
            width={20}
            height={20}
          />
        </button>
      )}
      {/* Up Arrow */}
    </LoaderScreen>
  );
}
