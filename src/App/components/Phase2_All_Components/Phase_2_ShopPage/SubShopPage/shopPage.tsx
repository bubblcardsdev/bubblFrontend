/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import {
  getAccessToken,
  getExperationTime,
} from "src/App/helpers/local-storage";
import { DeviceT, getShop } from "src/App/services/shop";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";
import Marquee from "src/App/components/marquee/marquee";
import Right from "../../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import BubblCustomSlider from "../../../homeslider/bubblCustomSlide";
import HomeSlider from "../../../homeslider/Homeslider";
import FlowSection from "../../Phase_2_HomePage/flowSection/flowSection";
import FunctionSection from "../../Phase_2_HomePage/functionSection/functionSection";
import HomePageNavigation from "../../Phase_2_HomePage/navigationHome/homeNavigation";
import TestimonialComponent from "../../Phase_2_HomePage/testimonialSection/testimonial";
import Footer from "../../Phase2_Footer/footer";
import BundleComponent from "../bundleCard/bundleComponent";
import styles from "./shopPage.module.css";

function ShopComponent() {
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number | undefined>(
    undefined
  );
  const router = useRouter();

  const getShopDetails = async () => {
    const shopItems = await getShop();

    setDevices(shopItems);
  };
  const tokenSetRef = useRef(false);
  let token = "";

  //   individuals
  const individuals = devices
    ? [devices.Card, devices.Socket, devices.Tile]
    : [];

  // bubbl customize
  const nameCustom = devices
    ? [devices["Full Custom"], devices["Name Custom"]]
    : [];

  const bundle = devices ? devices["Bundle Devices"] : null;
  const [activeDevicesCount, setActiveDevicesCount] = useState(0);

  useEffect(() => {
    token = getAccessToken() ?? "";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getShopDetails();

    if (token) {
      // convert string to milliseconds
      const expirationTime = parseInt(getExperationTime()!, 10);

      const timeNow = Date.now();
      const timeNowInSeconds = Math.floor(timeNow / 1000);
      // if expired, logout user
      if (timeNowInSeconds > expirationTime) {
        localStorage.clear();
        router.push("/login");
      } else if (!tokenSetRef.current) {
        tokenSetRef.current = true;
        setActiveDevicesCount(1);
      }
    }
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
  const topPositions = [10, 50, 40];
  const sizes = [65, 32, 45];
  const rightPositions = [0, -28, 0];
  const leftPosition = [-20, 0, 7];
  const showGradients = [true, true, false];
  return (
    <section className={styles.shopPageSection}>
      <div className={styles.container}>
        <div className={styles.web}>
          <div className={styles.background}>
            <ParallaxBackground
              scrollPosition={scrollPosition / 10}
              topPositions={topPositions}
              sizes={sizes}
              rightPositions={rightPositions}
              leftPositions={leftPosition}
              showImage1={false}
              showImage2={false}
              showImage3
              showGradients={showGradients}
            />
          </div>
          <div className={styles.shopPageBackSection}>
            <div className={styles.navigationBackContainer}>
              <div className={styles.navigateDiv}>
                {activeDevicesCount === 0 ? (
                  <HomePageNavigation />
                ) : (
                  <Navigation />
                )}
              </div>
            </div>

            <Marquee />

            <div className={styles.shopPageDiv}>
              {/* <div className={styles.shopBreadCrumbs}>
                <div className={styles.homeLink}>
                  {activeDevicesCount === 0 ? (
                    <Link href="/">Home</Link>
                  ) : (
                    <Link href="/bubblProfiles">Home</Link>
                  )}
                </div>
                <Image src={Right} alt="right" />
                <div className={styles.shopLink}>
                  <Link href="/shopPage">Shop</Link>
                </div>
              </div> */}
              <div className={styles.bubblHeading}>
                <p className={styles.bubblName}>Let's Bubbl</p>
                <p className={styles.bubblSubHead}>
                  Explore The Future Of Networking
                </p>
              </div>
            </div>
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
              showImage3={false}
              showGradients={showGradients}
            />
          </div>
          <div className={styles.cardWidthDiv}>
            {/* INDIVIDUAL */}
            <div className={styles.individualContainer}>
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Basics</span>
              </p>
              <p className={styles.individualContent}>
                Pick from our line of Bubbl- Basics - Affordable, Eco-friendly
                and perfect for first time users who just want to get the feel
                of futuristic networking.
              </p>
            </div>
            <HomeSlider shopDetails={individuals} />
            {/* <ProductCards
              carouselItemIndex={undefined}
              shopDetails={individuals}
            /> */}

            {/* Custom */}

            <div className={styles.individualContainer}>
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Custom</span>
              </p>
              <p className={styles.individualContent}>
                Bubbl aims to replace paper business cards with sustainable
                options. We offer custom branding and bulk orders for corporate
                clients. Join us today!
              </p>
              <div className={styles.customDiv}>
                <Col xl={8} sm={7} xs={6} className={styles.customCol}>
                  <BubblCustomSlider shopDetails={nameCustom} />
                </Col>
              </div>
              <div className={styles.line} />
            </div>

            {/* Bubbl Bundle */}
            <div className={styles.background}>
              <ParallaxBackground
                scrollPosition={scrollPosition / 10}
                topPositions={topPositions}
                sizes={sizes}
                rightPositions={rightPositions}
                leftPositions={leftPosition}
                showImage1
                showImage2={false}
                showImage3={false}
                showGradients={showGradients}
              />
            </div>
            <div className={styles.individualContainer}>
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Bundles</span>
              </p>
              <p className={styles.individualContent}>
                If you want to get a more than just one bubbl, don't worry, we
                have fan favourite bundles at great deals. Making new
                connections has never bees easier!
              </p>
              <div className={styles.bundleNone}>
                <div className={styles.bundleComp}>
                  <Col xl={4} sm={4} xs={11} style={{ width: "375px" }}>
                    {bundle && (
                      <BundleComponent
                        price={bundle.price}
                        title={bundle.type}
                        description={bundle.description}
                        images={bundle.images}
                      />
                    )}
                  </Col>
                </div>
              </div>
            </div>

            {/* Many functions */}
            <div className={styles.cardFunction}>
              <FunctionSection />
            </div>
            <div className={styles.testimonialSection}>
              {/* <TestimonialComponent /> */}
              <FlowSection />
            </div>
            {/* Testimonial Function */}

            {/* <div className={styles.background}>
              <ParallaxBackground
                scrollPosition={scrollPosition / 10}
                topPositions={topPositions}
                sizes={sizes}
                rightPositions={rightPositions}
                leftPositions={leftPosition}
                showImage1
                showImage2={false}
                showImage3={false}
                showGradients={showGradients}
              />
            </div> */}
          </div>
          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>
        </div>
        {/* RESPONSIVE */}
        <div className={styles.respContainer}>
          <div className={styles.shopPageResponsive}>
            <div className={styles.shopPageDiv}>
              <div className={styles.navigationBackContainer}>
                <div className={styles.navigateDiv}>
                  {activeDevicesCount === 0 ? (
                    <HomePageNavigation />
                  ) : (
                    <Navigation />
                  )}
                </div>
              </div>
              <Marquee />
            </div>
            <div className={styles.shopPageBackSection}>
              {/* <div className={styles.shopBreadCrumbs}>
              <div className={styles.homeLink}>
                <Link href="/">Home</Link>
              </div>
              <Image src={Right} alt="right" />
              <div className={styles.shopLink}>
                <Link href="/">Shop</Link>
              </div>
            </div> */}
              <div className={styles.bubblHeading}>
                <p className={styles.bubblName}>Let's Bubbl</p>
                <p className={styles.bubblSubHead}>
                  Explore The Future Of Networking
                </p>
              </div>
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
            {/* <div className={styles.cardContainer}> */}
            {/* INDIVIDUAL */}
            <div className={styles.individualContainer}>
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Basics</span>
              </p>
              <div className={styles.individualDiv}>
                <p className={styles.individualContent}>
                  Pick from our line of Bubbl- Basics - Affordable, Eco-friendly
                  and perfect for first time users who just want to get the feel
                  of futuristic networking.
                </p>
              </div>
            </div>
            <HomeSlider shopDetails={individuals} />

            {/* Custom */}

            <div className={styles.individualContainer}>
              <div className={styles.background}>
                <ParallaxBackground
                  scrollPosition={scrollPosition / 10}
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
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Custom</span>
              </p>
              <p className={styles.individualContent}>
                Bubbl aims to replace paper business cards with sustainable
                options. We offer custom branding and bulk orders for corporate
                clients. Join us today!
              </p>
              <BubblCustomSlider shopDetails={nameCustom} />
            </div>
            <div className={styles.line} />
            {/* Bubbl Bundle */}

            <div className={styles.individualContainer}>
              <p className={styles.individualHead}>
                Bubbl <span className={styles.individualSubHead}>Bundles</span>
              </p>
              <p className={styles.individualContent}>
                If you want to get a more than just one bubbl, don't worry, we
                have fan favourite bundles at great deals. Making new
                connections has never bees easier!
              </p>
              <div className={styles.bundleNone}>
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
                <div className={styles.bundleComp}>
                  <Col xl={4} sm={4} xs={10}>
                    {bundle && (
                      // <CardComponent
                      //   price={bundle.price}
                      //   title={bundle.type}
                      //   description={bundle.description}
                      //   images={bundle.images}
                      // />
                      <BundleComponent
                        price={bundle.price}
                        title={bundle.type}
                        description={bundle.description}
                        images={bundle.images}
                      />
                    )}
                    <div className={styles.background}>
                      <ParallaxBackground
                        scrollPosition={scrollPosition / 10}
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
                  </Col>
                </div>
              </div>
            </div>

            {/* Many functions */}
            <div className={styles.cardFunctionResp}>
              <FunctionSection />
            </div>

            <div className={styles.testimonialSectionResp}>
              {/* <TestimonialComponent /> */}
              <FlowSection />
            </div>
            <div className={styles.footerSectionResp}>
              <div className={styles.footerSection}>
                <div className={styles.footerSectionInside}>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ShopComponent;
