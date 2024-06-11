/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-return-assign */
import "swiper/css";
import "react-multi-carousel/lib/styles.css";
import "swiper/css/navigation";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import {
  getAccessToken,
  getExperationTime,
} from "src/App/helpers/local-storage";
import { listingData } from "src/App/services/createProfileApi";
import { DeviceT, getShop } from "src/App/services/shop";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import LeftArrowIcon from "../../../../../../images/slider_left.svg";
import RightArrowIcon from "../../../../../../images/slider_right.svg";
import styles from "./allProducts.module.css";

function ProductItems() {
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const router = useRouter();

  const getShopDetails = async () => {
    const shopItems = await getShop();

    setDevices(shopItems);
  };
  const tokenSetRef = useRef(false);
  let token = "";

  const getProfiles = async () => {
    const profResponse = await listingData();
    return profResponse;
  };
  //   individuals
  const individuals = devices
    ? [
        devices.Card,
        devices.Socket,
        devices.Tile,
        devices["Full Custom"],
        devices["Name Custom"],
        devices["Bundle Devices"],
      ]
    : [];

  // bubbl customize
  // const nameCustom = devices
  //   ? [devices["Full Custom"], devices["Name Custom"]]
  //   : [];

  // const bundle = devices ? devices["Bundle Devices"] : null;

  // const imageData = [One, Two, Three, Four, Five];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const responsiveCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    token = getAccessToken() ?? "";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getShopDetails();

    // if (token) {
    //   // convert string to milliseconds
    //   const expirationTime = parseInt(getExperationTime()!, 10);

    //   // check experiation time from local storge
    //   const timeNow = Date.now();
    //   const timeNowInSeconds = Math.floor(timeNow / 1000);
    //   // if expired, logout user
    //   if (timeNowInSeconds > expirationTime) {
    //     localStorage.clear();
    //     router.replace("/login");
    //   } else if (!tokenSetRef.current) {
    //     tokenSetRef.current = true;
    //     const checkDeviceIsActive = (devicesArray: any) => {
    //       let totalActiveDevices = 0;
    //       devicesArray?.map((device: any) =>
    //         device.isDeleted === false
    //           ? (totalActiveDevices += 1)
    //           : totalActiveDevices
    //       );
    //       return totalActiveDevices;
    //     };

    //     getProfiles().then((respDatas) => {
    //       const totalLength = checkDeviceIsActive(respDatas?.data?.devices);
    //       router.replace("/bubblProfiles");

    //       // if (totalLength === 0) {
    //       //   router.replace("/landing");
    //       // } else {
    //       //   router.replace("/landing1");
    //       // }
    //     });
    //   }
    // }
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
  const topPositions = [15, -10, 50];
  const sizes = [65, 42, 42];
  const rightPositions = [0, -47, -17];
  const leftPosition = [-17, 0, 0];
  const showGradients = [true, false, false];

  return (
    <>
      <ParallaxBackground
        scrollPosition={scrollPosition / 10}
        topPositions={topPositions}
        sizes={sizes}
        rightPositions={rightPositions}
        leftPositions={leftPosition} // Typo corrected
        showImage1
        showImage2
        showImage3
        showGradients={showGradients}
      />
      <div className={styles.containerDiv}>
        <div className={styles.DesktopSlider}>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <p>Our Products</p>
            </div>
          </div>
          <Swiper
            centeredSlides
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            zoom
            slidesPerView={3}
            modules={[Navigation, EffectCoverflow, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={170}
            effect="coverflow"
            breakpoint={responsiveCard}
            initialSlide={2}
          >
            {individuals?.map(
              (imgVal: any) =>
                imgVal && (
                  <SwiperSlide
                    key={imgVal.id}
                    className={styles.cardProductItem}
                  >
                    <Col className={styles.cardOnes}>
                      <p className={styles.cardName}>
                        {imgVal?.type || "Customization Card"}
                      </p>
                      <div className={styles.cards_prod}>
                        {imgVal?.images &&
                        Object.values(imgVal?.images).length === 1 ? (
                          imgVal?.type === "Full Custom" ? (
                            <div className={styles.cards_prod_img}>
                              <img src={imgVal?.images?.red} alt="cards" />
                            </div>
                          ) : (
                            <div className={styles.cards_prod_img}>
                              <img src={imgVal?.images?.white} alt="cards" />
                            </div>
                          )
                        ) : (
                          <Carousel
                            responsive={responsive}
                            autoPlay
                            autoPlaySpeed={4000}
                            infinite
                            className={`${styles.carouselValue} ${styles.hideArrows}`}
                          >
                            {imgVal?.images &&
                              Object.values(imgVal?.images).map(
                                (img: any, index: number) => (
                                  <div
                                    key={index}
                                    className={styles.cards_prod_img}
                                  >
                                    <img src={img} alt="cards" />
                                  </div>
                                )
                              )}
                          </Carousel>
                        )}
                        {imgVal?.price && imgVal?.price > 0 && (
                          <div className={styles.rateDiv}>
                            <p className={styles.rate}>
                              INR{" "}
                              <span>
                                {imgVal.price.toLocaleString("en-IN")}
                              </span>
                            </p>
                            <div style={{ color: "red" }}>
                              <Button
                                className={styles.shopNowBtn}
                                onClick={() => router.push("/shopPage")}
                              >
                                SHOP NOW
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </SwiperSlide>
                )
            )}
          </Swiper>

          <div className="swiper-button-prev" style={{ marginTop: "30px" }}>
            <Image src={LeftArrowIcon} alt="Previous" height={40} />
          </div>

          <div className="swiper-button-next" style={{ marginTop: "30px" }}>
            <Image src={RightArrowIcon} alt="Next" height={40} />
          </div>
        </div>
        <div className={styles.MobileSlider}>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <p>Our Products</p>
            </div>
          </div>
          <Swiper
            // centeredSlides
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            zoom
            slidesPerView={1}
            modules={[Navigation, EffectCoverflow, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="coverflow"
            breakpoint={responsiveCard}
          >
            {individuals?.map(
              (imgVal: any) =>
                imgVal && (
                  <SwiperSlide
                    key={imgVal.id}
                    className={styles.cardProductItem}
                  >
                    <Col className={styles.cardOnes}>
                      <p className={styles.cardName}>
                        {imgVal?.type || "Customization Card"}
                      </p>
                      <div className={styles.cards_prod}>
                        {imgVal?.images &&
                        Object.values(imgVal?.images).length === 1 ? (
                          imgVal?.type === "Full Custom" ? (
                            <div className={styles.cards_prod_img}>
                              <img src={imgVal?.images?.red} alt="cards" />
                            </div>
                          ) : (
                            <div className={styles.cards_prod_img}>
                              <img src={imgVal?.images?.white} alt="cards" />
                            </div>
                          )
                        ) : (
                          <Carousel
                            responsive={responsive}
                            autoPlay
                            autoPlaySpeed={4000}
                            infinite
                            className={`${styles.carouselValue} ${styles.hideArrows}`}
                          >
                            {imgVal?.images &&
                              Object.values(imgVal?.images).map(
                                (img: any, index: number) => (
                                  <div
                                    key={index}
                                    className={styles.cards_prod_img}
                                  >
                                    <img src={img} alt="cards" />
                                  </div>
                                )
                              )}
                          </Carousel>
                        )}
                        {imgVal?.price && imgVal?.price > 0 && (
                          <div className={styles.rateDiv}>
                            <p className={styles.rate}>
                              INR{" "}
                              <span>
                                {imgVal.price.toLocaleString("en-IN")}
                              </span>
                            </p>
                            <div style={{ color: "red" }}>
                              <Button
                                className={styles.shopNowBtn}
                                onClick={() => router.push("/shopPage")}
                              >
                                SHOP NOW
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default ProductItems;
