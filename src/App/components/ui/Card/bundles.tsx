/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import styles from "./bundle.module.css";

export default function BundleCards({
  price,
  // originalPrice,
  selectedColor,
  // colors = [],
  images,
  // setColors,
  title,
  showDiscount,
}: {
  price?: number;
  // originalPrice: number;
  // colors?: string[];
  selectedColor: string;
  images: Record<string, string>;
  // setColors: Dispatch<SetStateAction<string>>;
  title: string;
  showDiscount?: boolean;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const value = Object.values(images);
  const colors = useMemo(() => Object.keys(images), [images]);
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

  let finalPrice: number = 100;

  if (title === "Name Custom") {
    finalPrice = 0;
  }
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const card = event.target;
    const rect = card.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Mouse position relative to the card
    const mouseY = event.clientY - rect.top; // Mouse position relative to the card

    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    const tiltX = (cardHeight / 2 - mouseY) / (cardHeight / 2);
    const tiltY = (mouseX - cardWidth / 2) / (cardWidth / 2);

    const maxTiltAngle = 10; // Adjust as needed

    const newTiltAngleX = tiltX * maxTiltAngle;
    const newTiltAngleY = tiltY * maxTiltAngle;

    setTiltAngle({ x: newTiltAngleX, y: newTiltAngleY });
  };

  const handleMouseLeave = () => {
    setTiltAngle({ x: 0, y: 0 });
  };

  return (
    <div className={styles.cardDiv}>
      <Col
        className={`${styles.cardOnes} ${styles.tiltedCard}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.titleColorDiv}>
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
          <div>
            {title === "" ? (
              <p className={styles.cardName}>Customization Card</p>
            ) : (
              <p className={styles.cardName}>{title}</p>
            )}
          </div>
        </div>

        {value.length === 1 ? (
          <div className={styles.cards_prod}>
            <div className={styles.cards_prod_img}>
              <img src={images[color]} alt="cards" />
            </div>

            {showDiscount && price && price > 0 && (
              <div className={styles.discountContainer}>
                <p className={styles.slashedPrice}>INR 999</p>
                <span className={styles.discountText}>40% off</span>
              </div>
            )}

            {price && price > 0 ? (
              <div className={styles.rateDiv}>
                <p className={styles.rate}>
                  INR <span>{price > 0 && price.toLocaleString("en-IN")}</span>
                </p>
              </div>
            ) : null}
          </div>
        ) : (
          <div className={styles.cards_prod}>
            {/* <Carousel
              responsive={responsive}
              autoPlay
              autoPlaySpeed={4000}
              infinite
              className={`${styles.carouselValue} ${styles.hideArrows}`}
            > */}
            <div className={styles.cards_prod_img}>
              <img src={images[color]} alt="cards" />
            </div>

            {/* {value.map((img) => (
              <div className={styles.cards_prod_img}>
                <img src={images[color]} alt="cards" />
              </div>
            ))} */}
            {/* </Carousel> */}

            {showDiscount && price && price > 0 && (
              <div className={styles.discountContainer}>
                <p className={styles.slashedPrice}>INR 599</p>
                <span className={styles.discountText}>43% off</span>
              </div>
            )}

            {price && price > 0 ? (
              <div className={styles.rateDiv}>
                <p className={styles.rate}>
                  INR <span>{price > 0 && price.toLocaleString("en-IN")}</span>
                </p>
              </div>
            ) : null}
          </div>
        )}
      </Col>
    </div>
  );
}

BundleCards.defaultProps = { price: undefined };
