/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import { DeviceT } from "src/App/services/shop";

import CardComponent from "./CardComponent";
import styles from "./slider.module.css";

const HomeSlider = ({ shopDetails }: { shopDetails: DeviceT[] }) => {
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

  return (
    <div className="container">
      <div className={styles.slider_cards}>
        <Carousel
          responsive={responsive}
          draggable={false}
          swipeable={false}
          className={styles.resp_carousel}
        >
          {shopDetails?.map((item, index) => (
            <CardComponent
              price={item?.price}
              title={item?.type}
              description={item?.description}
              images={item?.images}
            />
          ))}
        </Carousel>
      </div>

      <div className={styles.line} />
    </div>
  );
};
export default HomeSlider;
