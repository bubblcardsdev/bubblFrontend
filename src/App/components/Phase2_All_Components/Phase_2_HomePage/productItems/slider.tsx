/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { SetStateAction, useMemo } from "react";
import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { DeviceT } from "src/App/services/shop";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import One from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/business.png";
import Two from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/events.png";
import Three from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/individuals.png";
import Four from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/retail.png";
import Five from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/univertise.png";
import AllProducts from "./allProducts";
// import CardComponent from "./CardComponent";
import styles from "./productItems.module.css";

const ShopSlider = ({
  shopDetails,
}: // getCartLength,
{
  shopDetails: DeviceT[];
  // getCartLength: any;
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  const value: any = [];
  const colorCodes: any = useMemo(
    () => ({
      "Citroen green": "#3E764E",
      "Ruby red": "#931418",
      "Pitch black": "#0D0D0D",
      "Deep purple": "#6C4B9C",
      "Flame orange": "#EC7622",
      "Chalk white": "#C8C8C8",
      Yellow: "#FBBF20",
      "Sapphire blue": "#2E5F95",
    }),
    []
  );

  return (
    <div>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={50}
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={3}
          effect="coverflow"
          grabCursor
          navigation
          centeredSlides
          modules={[Navigation, EffectCoverflow, Pagination]}
          className={styles.imageContainer}
        >
          <SwiperSlide>
            <Image src={One} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Two} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Three} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Four} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Five} />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Carousel
        responsive={responsive}
        draggable={false}
        swipeable={false}
        className={styles.resp_carousel}
      >
        {shopDetails?.map((item: any, index) => (
          <AllProducts
            selectedColor="yellow"
            images={item?.images}
            setColor={undefined}
            title={item?.type}
          />
        ))}
      </Carousel> */}

      {/* <div className={styles.line} /> */}
    </div>
  );
};
export default ShopSlider;
