/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-shadow */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-duplicates */
import "react-multi-carousel/lib/styles.css";

import { useState, useRef, useMemo } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import ShopButton from "../../../../buttons/shopnow";
import styles from "./product.module.css";

/* 6 cards */
function Card({
  amount,
  title,
  imgSrc,
}: {
  amount: number;
  title: string;
  imgSrc: any;
}) {
  const colors = useMemo(() => Object.keys(imgSrc), [imgSrc]);
  const [color, setColor] = useState(colors[0] || "");

  // Mapping color names to color codes
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

  function clickHandler(index: any) {
    setColor(index);
  }
  let finalPrice: number = amount;

  if (title === "Name Custom") {
    finalPrice = 0;
  }
  return (
    <div className={styles.cardTwo}>
      {finalPrice > 0 && amount ? (
        <div className={styles.pricetag}>
          <p className={styles.rate}>
            INR <span>{finalPrice}/-</span>
          </p>
        </div>
      ) : null}

      <p className={styles.cardHeading}>Bubbl {title}</p>
      <div className={styles.cards_prodsocket}>
        <div className={styles.cards_prod_img}>
          <img src={imgSrc[color]} alt="cards" />
        </div>
      </div>
      <div className={styles.choosesocket}>
        {colors.length > 1 &&
          colors?.map((color: any) => (
            <div className={styles.colors}>
              <Button
                variant="none"
                className={styles.colors_blue}
                style={{ backgroundColor: colorCodes[color] }}
                onClick={() => clickHandler(color)}
              />
            </div>
          ))}
      </div>
      <div className={styles.button}>
        <ShopButton />
      </div>
    </div>
  );
}

export default function ProductCards({
  carouselItemIndex,
  shopDetails,
}: {
  carouselItemIndex: number | undefined;
  shopDetails: any;
}) {
  const carouselRef = useRef<Carousel>(null);
  const responsives = {
    desktop: {
      breakpoint: { max: 1024, min: 991 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 600 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  // useEffect(() => {
  //   if (carouselRef.current && carouselItemIndex !== undefined) {
  //     carouselRef.current.goToSlide(carouselItemIndex);
  //   }
  // }, [carouselRef, carouselItemIndex]);

  return (
    <div>
      {/* Home page 6 products */}
      <Col className={styles.productBig}>
        {shopDetails?.map((shop: any) => (
          <Card title={shop?.type} amount={shop?.price} imgSrc={shop?.images} />
        ))}
      </Col>

      {/* Responsive Carousel */}
      {/* <div className={styles.home_shop_responsive}>
        <Carousel
          ref={carouselRef}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsives}
          ssr
          autoPlaySpeed={1000}
          keyBoardControl
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {shopDetails?.map((shop: any) => (
            <Row style={{ display: "flex" }}>
              <div className={styles.cardOne_responsive}>
                <Card
                  title={shop?.type}
                  amount={shop?.price}
                  imgSrc={shop?.images}
                />
              </div>
            </Row>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
}
