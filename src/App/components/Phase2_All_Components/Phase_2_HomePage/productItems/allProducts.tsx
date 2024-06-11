/* eslint-disable @next/next/no-img-element */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import styles from "./allProducts.module.css";

export default function AllProducts({
  price,
  // originalPrice,
  selectedColor,
  colors = [],
  images,
  setColor,
  title,
}: {
  price?: number;
  // originalPrice: number;
  colors?: string[];
  selectedColor: string;
  images: Record<string, string>;
  setColor: Dispatch<SetStateAction<string>>;
  title: string;
}) {
  function handleColorChange(color: string) {
    setColor(color);
  }

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

  return (
    <div className={styles.cardDiv}>
      <Col className={styles.cardOnes}>
        {title === "" ? (
          <p className={styles.cardName}>Customization Card</p>
        ) : (
          <p className={styles.cardName}>{title}</p>
        )}
        {value.length === 1 ? (
          <div className={styles.cards_prod}>
            <div className={styles.cards_prod_img}>
              <img src={images[selectedColor]} alt="cards" />
            </div>
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
            <Carousel
              responsive={responsive}
              autoPlay
              autoPlaySpeed={4000}
              infinite
              className={`${styles.carouselValue} ${styles.hideArrows}`}
            >
              {value.map((img) => (
                <>
                  <div className={styles.cards_prod_img}>
                    <img src={img} alt="cards" />
                  </div>
                  {price && price > 0 ? (
                    <div className={styles.rateDiv}>
                      <p className={styles.rate}>
                        INR{" "}
                        <span>
                          {price > 0 && price.toLocaleString("en-IN")}
                        </span>
                      </p>
                    </div>
                  ) : null}
                </>
              ))}
            </Carousel>
          </div>
        )}
      </Col>
    </div>
  );
}

AllProducts.defaultProps = { price: undefined, colors: [] };
