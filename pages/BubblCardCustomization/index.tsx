/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { toast, ToastContainer } from "react-toastify";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { getCartValue, setCartValue } from "src/App/helpers/local-storage";
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
import ParallaxBackground from "../backgroundimageswithgradient/background";
import styles from "./fully_customization.module.css";

function FullyCustomization() {
  const router = useRouter();

  const [itemCount, setItemCount] = useState(1); // item quantity
  const [pirceVal, setPrice] = useState<any>();
  const [image, setImage] = useState("");
  const [nextId, setNextId] = useState(1);
  const [cartArray, setCartArray] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);

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

  const getCartVal = () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    if (cartCount !== null) {
      setCartArray(cartCount);
    }
  };

  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    priceValFunc();
    getCartVal();
    const token =
      window.localStorage.getItem("accesstoken") !== null
        ? setIsTokenPresent(true)
        : setIsTokenPresent(false);
  }, [isTokenPresent]);

  // func for decrement the quantity
  const decrementCountFunc = () => {
    if (itemCount > 1) {
      const count = itemCount - 1;
      setItemCount(itemCount - 1);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // State to manage whether navigation needs to be refreshed
  const [refreshNavigation, setRefreshNavigation] = useState<boolean>(false);

  // Function to handle the refresh button click
  const handleRefreshClick = () => {
    setRefreshNavigation(true);
  };

  // Function to handle the completion of navigation refresh
  const handleNavigationRefreshed = () => {
    setRefreshNavigation(false);
  };

  const getCartLength = async () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    setCartArray(cartCount);
  };

  //   api call func for add Cart Item
  const addCartFunction = async () => {
    const fullyCustomImage = image;

    handleRefreshClick();
    if (cartArray.length === 0) {
      const newCartArray = [
        ...cartItems,
        {
          id: nextId,
          quantity: itemCount,
          itemPrice: pirceVal?.price,
          price: pirceVal?.price * itemCount,
          deviceColor: pirceVal?.deviceColor,
          deviceType: pirceVal?.deviceType,
          productImage: fullyCustomImage,
        },
      ];
      setCartItems(newCartArray);
      setCartValue(newCartArray); // set the cart value in local storage
      setCartArray(newCartArray);
      setNextId(nextId + 1);
    } else {
      const existingProduct = cartArray.find(
        (cartItem: any) => cartItem?.deviceType === "Full Custom"
      );
      const newId = cartArray?.length;

      if (existingProduct === undefined) {
        const newCartInExisting = [
          ...cartArray,
          {
            id: newId + 1,
            quantity: itemCount,
            price: pirceVal?.price * itemCount,
            deviceColor: pirceVal?.deviceColor,
            deviceType: pirceVal?.deviceType,
            // productPrice: pirceVal?.price * itemCount,
            // productColor: pirceVal?.deviceColor,
            // productType: pirceVal?.deviceType,
            itemPrice: pirceVal?.price,
            productImage: fullyCustomImage,
          },
        ];
        setCartItems(newCartInExisting);
        setCartValue(newCartInExisting); // set the cart value in local storage
        setCartArray(newCartInExisting);
        setNextId(newId + 1);
        // router.push("/checkout");
      } else {
        const updatedArray = [...cartArray];
        const newUpdated = updatedArray.map((cartVAlues: any) => {
          if (cartVAlues.deviceType === "Full Custom") {
            return { ...cartVAlues, quantity: cartVAlues.quantity + itemCount };
          }
          return cartVAlues;
        });
        setCartItems(newUpdated);
        setCartValue(newUpdated); // set the cart value in local storage
        setCartArray(newUpdated);
      }
    }

    toast.success("Cart added Successfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    getCartLength();
  };

  // buy now click
  const buyNow = async () => {
    const fullyCustomImage = image;

    handleRefreshClick();
    if (cartArray.length === 0) {
      const newCartArray = [
        ...cartItems,
        {
          id: nextId,
          quantity: itemCount,
          itemPrice: pirceVal?.price,
          price: pirceVal?.price * itemCount,
          deviceColor: pirceVal?.deviceColor,
          deviceType: pirceVal?.deviceType,
          productImage: fullyCustomImage,
        },
      ];
      setCartItems(newCartArray);
      setCartValue(newCartArray); // set the cart value in local storage
      setCartArray(newCartArray);
      setNextId(nextId + 1);
    } else {
      const existingProduct = cartArray.find(
        (cartItem: any) => cartItem?.deviceType === "Full Custom"
      );
      const newId = cartArray?.length;

      if (existingProduct === undefined) {
        const newCartInExisting = [
          ...cartArray,
          {
            id: newId + 1,
            quantity: itemCount,
            price: pirceVal?.price * itemCount,
            deviceColor: pirceVal?.deviceColor,
            deviceType: pirceVal?.deviceType,
            // productPrice: pirceVal?.price * itemCount,
            // productColor: pirceVal?.deviceColor,
            // productType: pirceVal?.deviceType,
            itemPrice: pirceVal?.price,
            productImage: fullyCustomImage,
          },
        ];
        setCartItems(newCartInExisting);
        setCartValue(newCartInExisting); // set the cart value in local storage
        setCartArray(newCartInExisting);
        setNextId(newId + 1);
        router.push("/checkout");
      } else {
        router.push("/checkout");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topPositions = [10, 40, 30];
  const sizes = [200, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];

  return (
    <div className={styles.container}>
      <div className={styles.fullyCustomization_section}>
        <ToastContainer />

        <div className={styles.fullyCustomization}>
          <div className={styles.backgroundContainer}>
            <ParallaxBackground
              scrollPosition={0}
              topPositions={topPositions}
              rightPositions={rightPositions}
              sizes={sizes}
              leftPositions={leftPosition}
              showImage1={false}
              showImage2
              showImage3={false}
              showGradients={showGradients}
            />
          </div>
          <div className={styles.navBarSection}>
            {isTokenPresent ? (
              <Navigation
                refresh={refreshNavigation}
                onRefresh={handleNavigationRefreshed}
              />
            ) : (
              <HomePageNavigation
                refresh={refreshNavigation}
                onRefresh={handleNavigationRefreshed}
              />
            )}
          </div>

          {/* Breadcrumbs */}
          <div className={styles.breadcrumbs}>
            {/* <a onClick={() => router.push("/bubblProfiles")}>
              <span className={styles.home_color_head}>Home {" > "}</span>
            </a> */}
            <a onClick={() => router.push("/shopPage")}>
              <span className={styles.home_color_head}>&nbsp;Shop {" > "}</span>
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
                      style={{
                        outline: "none",
                        backgroundColor: "transparent",
                      }}
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
                {/* full name custom */}
                <div className={styles.price}>
                  <h3>Price</h3>
                  {/* Update same function for responsive its down */}
                  {/* <div className={styles.discountContainer}>
                    <p className={styles.slashedPrice}>INR 1299</p>
                    <span className={styles.discountText}>20.02% off</span>
                  </div> */}
                  <h4>
                    ₹&nbsp; {pirceVal?.price}
                    <span>&nbsp; Per Card</span>
                  </h4>
                </div>
              </Col>

              <hr className={styles.line} />
              <Col className={`${styles.detailsButtons} col-xl-9`}>
                <div className={styles.cartBtnDiv}>
                  <Button
                    type="button"
                    variant="none"
                    className={styles.cartButton}
                    onClick={() => {
                      addCartFunction();
                    }}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    type="button"
                    variant="none"
                    className={styles.cartButtonBuyNow}
                    onClick={() => {
                      // buyNowFunction();
                      buyNow();
                    }}
                  >
                    BUY NOW
                  </Button>
                </div>
              </Col>
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
              {/* <Button
                type="submit"
                className={styles.cartButton}
                onClick={addCartFunction}
              >
                ADD TO CART
              </Button> */}
            </Col>
          </Col>
        </div>

        {/* Static Button for responsive */}
        {/* <div className={styles.static_btn}>
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
        </div> */}
        <section className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FullyCustomization;
