/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import {
  AddFullyCustomApi,
  getPriceFunc,
} from "src/App/services/fullyCustom/fullyCustomCards";

import card from "/images/fully.png";
import info from "/images/vector.svg";

import fully6 from "../../images/fully_custom/Maskgroup.png";
import fully1 from "../../images/fully_custom/Maskgroup-1.png";
import fully2 from "../../images/fully_custom/Maskgroup-2.png";
import fully4 from "../../images/fully_custom/Maskgroup-4.png";
import fully5 from "../../images/fully_custom/Maskgroup-5.png";
import styles from "./fully_customization.module.css";

function FullyCustomization() {
  const router = useRouter();

  const [itemCount, setItemCount] = useState(1); // item quantity
  const [pirceVal, setPrice] = useState<any>();
  const [image, setImage] = useState("");

  // func for increment the quantity
  const incrementCountFunc = () => {
    const count = itemCount + 1;
    setItemCount(itemCount + 1);
  };

  const priceValFunc = async () => {
    const getPrice = await getPriceFunc();
    setPrice(getPrice?.fullCustomPrice);
    setImage(getPrice?.fullyCustomImage);
  };

  useEffect(() => {
    priceValFunc();
  }, []);

  // func for decrement the quantity
  const decrementCountFunc = () => {
    if (itemCount > 1) {
      const count = itemCount - 1;
      setItemCount(itemCount - 1);
    }
  };
  //   api call func for add Cart Item
  const addCartFunction = async () => {
    const itemObj = {
      quantity: itemCount,
      price: pirceVal?.price * itemCount,
      deviceColor: pirceVal?.deviceColor,
      deviceType: pirceVal?.deviceType,
    };
    const addCartItem = await AddFullyCustomApi(itemObj); // api call
    router.push("/checkout");
  };

  return (
    <div className={styles.fullyCustomization_section}>
      <NavBar />
      <div className="container">
        <div className={styles.fullyCustomization}>
          {/* Breadcrumbs */}
          <div className={styles.breadcrumbs}>
            <a onClick={() => router.push("/bubblProfiles")}>
              <span className={styles.home_color_head}>Home {" / "}</span>
            </a>
            <a onClick={() => router.push("/shopPage")}>
              <span className={styles.home_color_head}>&nbsp;Shop {" / "}</span>
            </a>
            <span className={styles.linkDevice_color_head}>
              &nbsp;Bubbl - Fully Customization Card
            </span>
          </div>
          {/* Responsive section */}
          <div className={styles.right_section_responsive}>
            <div className={styles.right_heading}>
              <h2>Bubbl - Fully Customizable Card</h2>
              <p>Order a fully custom Bubbl cards for you and your teams</p>
            </div>
          </div>
          {/* Responsive */}
          <Col className={styles.fullyCustomDetails}>
            <Col
              className={`${styles.customization_details} col-xl-4 col-md-12 col-sm-12`}
            >
              <Carousel fade indicators={false} interval={2000} pause={false}>
                <Carousel.Item>
                  <Image loader={({ src }) => src} src={fully1} alt="bubbl" />
                </Carousel.Item>

                <Carousel.Item>
                  <Image loader={({ src }) => src} src={fully4} alt="bubbl" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image loader={({ src }) => src} src={fully5} alt="bubbl" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image loader={({ src }) => src} src={fully6} alt="bubbl" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image loader={({ src }) => src} src={fully2} alt="bubbl" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col
              className={`${styles.customization_details} col-xl-5 col-md-12 col-sm-12`}
            >
              <div className={styles.right_section}>
                <div className={styles.right_heading}>
                  <h2>Bubbl - Fully Customizable Card</h2>
                  <p>Order a fully custom Bubbl cards for you and your teams</p>
                </div>
              </div>

              <Col className={`${styles.details} col-xl-9`}>
                <div className={styles.quantity}>
                  <h3>Quantity</h3>
                  <div className={styles.number}>
                    <span
                      role="button"
                      tabIndex={0}
                      className={styles.minus}
                      onClick={decrementCountFunc}
                    >
                      -
                    </span>
                    <input
                      autoComplete="nope"
                      type="text"
                      value={itemCount}
                      className={styles.input}
                      style={{ outline: "none", backgroundColor: "#f5f5f7" }}
                      disabled
                    />
                    <span
                      role="button"
                      tabIndex={0}
                      className={styles.plus}
                      onClick={incrementCountFunc}
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className={styles.price}>
                  <h3>Price</h3>
                  {/* Update same function for responsive its down */}
                  <h4>
                    Rs.&nbsp; {pirceVal?.price}
                    <span> Per Card</span>
                  </h4>
                </div>
              </Col>
              <hr className={styles.line} />
              <Col className={`${styles.info} col-xl-12`}>
                <div className={styles.detailInfo}>
                  <div className={styles.icon}>
                    <Image src={info} alt="bubbl" />
                  </div>
                  <div>
                    <p>
                      After placing your order and completing the payment, you
                      will receive an email from the Bubbl team containing
                      instructions on how to proceed with your request.
                    </p>
                    <p>
                      You can provide instructions for the total No.of.Cards,
                      Color of each Cards, Your Logo, Name and Designation in
                      each card. Our Bubbl Representative will help you
                      throughout the journey{" "}
                    </p>
                  </div>
                </div>
              </Col>
              {/* Update same function for responsive its down */}
              <Button
                type="submit"
                className={styles.cartButton}
                onClick={addCartFunction}
              >
                ADD TO CART
              </Button>
            </Col>
          </Col>
        </div>
      </div>
      {/* Static Button for responsive */}
      <div className={styles.static_btn}>
        <div className={styles.price_resp}>
          <p>Rs : {pirceVal?.price}</p>
        </div>
        <Button
          type="button"
          variant="none"
          className={styles.checkOutBtn_fixed}
          onClick={addCartFunction}
        >
          Add to Cart
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default FullyCustomization;
