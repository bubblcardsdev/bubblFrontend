/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import {
  getAccessToken,
  getCartValue,
  setCartValue,
} from "src/App/helpers/local-storage";
import { DeviceT, getShop } from "src/App/services/shop";
import {
  addCartItem,
  getCartItems,
} from "src/App/services/shopPage/shopServices";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import BlackCard from "../../../../../images/cardassets/blackCard.png";
import BlueCard from "../../../../../images/cardassets/blueCard.png";
import GreenCard from "../../../../../images/cardassets/greenCard.png";
import OrangeCard from "../../../../../images/cardassets/orangeCard.png";
import PurpleCard from "../../../../../images/cardassets/purpleCard.png";
import RedCard from "../../../../../images/cardassets/redCard.png";
import WhiteCard from "../../../../../images/cardassets/whiteCard.png";
import YellowCard from "../../../../../images/cardassets/yellowCard.png";
import HomePageNavigation from "../Phase_2_HomePage/navigationHome/homeNavigation";
import Footer from "../Phase2_Footer/footer";
// import NavBar from "../../../src/App/components/ui/NavBar/_navbar";
import styles from "./cardList.module.css";

function CardProductList() {
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const [selectColor, setSelectColor] = useState<any>();
  const [colorCode, setColorCode] = useState<any>("#3E764E");
  const [cartArray, setCartArray] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [cartTotal, setCartTotal] = useState();
  const [nextId, setNextId] = useState(1);

  // State to manage whether navigation needs to be refreshed
  const [refreshNavigation, setRefreshNavigation] = useState<boolean>(false);
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  // Function to handle the refresh button click
  const handleRefreshClick = () => {
    setRefreshNavigation(true);
  };

  // Function to handle the completion of navigation refresh
  const handleNavigationRefreshed = () => {
    setRefreshNavigation(false);
  };

  const dummyText = [
    {
      main: "Bubbl Card: NFC-based digital networking solution",
    },
    {
      main: "E-business card",
    },
    { main: "Share contact information" },
    { main: "⁠Share social media profiles effortlessly with a tap" },
    { main: "⁠Always editable and fully customizable templates" },

    { main: "User-friendly website accessible on web and phones" },

    { main: "Modern, eco-friendly alternative to paper business cards" },

    { main: "Elevate your networking game with innovation and simplicity" },
  ];
  // function for increment
  const incrementCountFunc = () => {
    setItemCount(itemCount + 1);
  };

  // func for decrement the quantity
  const decrementCountFunc = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };
  const getShopDetails = async () => {
    const shopItems = await getShop();
    const individual = shopItems ? [shopItems.Card] : [];

    if (individual.length !== 0) {
      const value = Object.keys(individual[0].images);
      // setSelectColor(value[0]);
    }
    setDevices(shopItems);
  };

  const getCartVal = () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    if (cartCount !== null) {
      setCartTotal(cartCount.length);
      setCartArray(cartCount);
    }
  };
  useEffect(() => {
    const token =
      window.localStorage.getItem("accesstoken") !== null
        ? setIsTokenPresent(true)
        : setIsTokenPresent(false);
    getShopDetails();
    getCartVal();
  }, []);

  const individuals: any = devices ? [devices.Card] : [];

  let colors: any = [];
  if (individuals?.length !== 0) {
    colors = Object.keys(individuals[0].images);
  }
  function handleColorChange(color: any) {
    setSelectColor(color);
    setItemCount(1);
    switch (color.trim()) {
      case "Citroen green":
        return setColorCode("#3E764E");
      case "Ruby red":
        return setColorCode("#931418");
      case "Pitch black":
        return setColorCode("#6D6D6D");
      case "Deep purple":
        return setColorCode("#6C4B9C");
      case "Flame orange":
        return setColorCode("#EC7622");
      case "Chalk white":
        return setColorCode("#C8C8C8");
      case "Yellow":
        return setColorCode("#FBBF20");
      case "Sapphire blue":
        return setColorCode("#2E5F95");

      default:
        return setColorCode("#0D0D0D");
    }
  }

  const getCartLength = async () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    setCartTotal(cartCount.length);
    setCartArray(cartCount);
  };

  const addCartFunction = () => {
    if (cartArray?.length === 0) {
      const newCartArray = [
        ...cartItems,
        {
          id: nextId, // Use current value and then increment
          productImage:
            individuals[0]?.images[selectColor] ||
            individuals[0]?.images[colors[0]],
          productType: individuals[0].type,
          quantity: itemCount,
          productColor: selectColor || colors[0],
          productPrice: individuals[0].price * itemCount,
          itemPrice: individuals[0].price,
          productStatus: true, // to be removed one API updated
        },
      ];
      setCartItems(newCartArray);
      setCartValue(newCartArray); // set the cart value in local storage
      setCartArray(newCartArray);
      setNextId(nextId + 1);
    } else {
      // const existingProduct = cartArray.find(
      //   (cartItem: any) => cartItem.productColor === selectColor
      // );
      const existingProduct = cartArray.find(
        (cartItem: any) =>
          cartItem.productColor === selectColor &&
          cartItem.productType === individuals[0].type
      );
      const newId = cartArray?.length;

      if (existingProduct === undefined) {
        const newCartInExisting = [
          ...cartArray,
          {
            id: newId + 1, // Use current value and then increment
            productImage:
              individuals[0]?.images[selectColor] ||
              individuals[0]?.images[colors[0]],
            productType: individuals[0].type,
            quantity: itemCount,
            productColor: selectColor || colors[0],
            productPrice: individuals[0].price * itemCount,
            itemPrice: individuals[0].price,
            productStatus: true, // to be removed one API updated
          },
        ];
        setCartItems(newCartInExisting);
        setCartValue(newCartInExisting); // set the cart value in local storage
        setCartArray(newCartInExisting);
        setNextId(newId + 1);
      } else {
        const updatedArray = [...cartArray];
        const newUpdated = updatedArray.map((cartVAlues: any) => {
          if (
            cartVAlues.productColor === selectColor &&
            cartVAlues.productType === "Card"
          ) {
            return {
              ...cartVAlues,
              quantity: cartVAlues.quantity + itemCount,
              productPrice:
                individuals[0].price * (cartVAlues.quantity + itemCount),
            };
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

    handleRefreshClick();

    getCartLength();
  };

  const buyNowFunction = () => {
    const getParseVal: any = getCartValue();
    const getAllCart = JSON.parse(getParseVal);
    if (getAllCart?.length === 0) {
      const newCartArray = [
        ...cartItems,
        {
          id: nextId, // Use current value and then increment
          productImage:
            individuals[0]?.images[selectColor] ||
            individuals[0]?.images[colors[0]],
          productType: individuals[0].type,
          quantity: itemCount,
          productColor: selectColor || colors[0],
          productPrice: individuals[0].price * itemCount,
          itemPrice: individuals[0].price,
          productStatus: true, // to be removed one API updated
        },
      ];
      setCartItems(newCartArray);
      setCartValue(newCartArray); // set the cart value in local storage
      setCartArray(newCartArray);
      setNextId(nextId + 1);
      router.push("/checkout");
    } else {
      const existingProduct = cartArray.find(
        (cartItem: any) => cartItem.productColor === selectColor
      );

      const newId = cartArray?.length;

      if (existingProduct === undefined) {
        const newCartInExisting = [
          ...cartArray,
          {
            id: newId + 1, // Use current value and then increment
            productImage:
              individuals[0]?.images[selectColor] ||
              individuals[0]?.images[colors[0]],
            productType: individuals[0].type,
            quantity: itemCount,
            productColor: selectColor || colors[0],
            itemPrice: individuals[0].price,
            productPrice: individuals[0].price * itemCount,
            productStatus: true, // to be removed one API updated
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setSelectColor("Citroen green");
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
    <section className={styles.responsiveContainer}>
      <div className={styles.bundlePage}>
        {/* <NavBar cartTotal={cartTotal} /> */}
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
        <div className={styles.CardListBackGroundConatainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
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
        <ToastContainer />

        <div>
          <Container>
            <Row
              style={{ marginTop: "40px" }}
              className={styles.responsive_nameCustom}
            >
              <div className={styles.productListHomeTag}>
                {/* <a onClick={() => router.push("/landing1")}>
                  <span className={styles.home_color_head}>Home {" > "}</span>
                </a> */}
                <a onClick={() => router.push("/shopPage")}>
                  <span className={styles.home_color_head}>
                    &nbsp;Shop {" > "}
                  </span>
                </a>
                <span className={styles.linkDevice_color_head}>
                  &nbsp;Bubbl - Basic Card
                </span>
              </div>
              {/* RESPONSIVE FOR BASIC CARD CONTENT */}
              <div className={styles.leftSideContent_responsive}>
                <h2>Bubbl- Basic Card</h2>
                <p>
                  Made with Recyclable PVC in a Matte finish with Spot UV
                  coating,Stylish and Sleek. Comes in 8 bubbly colours
                </p>
              </div>
            </Row>
            <Row className={styles.ImageRowDiv}>
              <Col className={styles.imageColResponsive}>
                <div className={styles.imageBackGround}>
                  {selectColor !== undefined ? (
                    <Image
                      src={individuals[0]?.images[selectColor]}
                      width={500}
                      height={500}
                      alt="bubbl"
                    />
                  ) : (
                    <Image
                      src={individuals[0]?.images[colors[0]]}
                      width={500}
                      height={500}
                      alt="bubbl"
                    />
                  )}
                </div>
              </Col>
              <Col>
                <div className={styles.colBack}>
                  <div className={styles.leftSideContent}>
                    <h2>Bubbl- Basic Card</h2>
                    <p>
                      Made with Recyclable PVC in a Matte finish with Spot UV
                      coating,
                    </p>
                    <p>Stylish and Sleek. Comes in 8 bubbly colours</p>
                  </div>
                  {/* Select Color Text */}
                  <div className={styles.ColorSection}>
                    <span className={styles.colorHead}>Selected Color</span>
                    <span
                      className={styles.colorText}
                      style={{
                        color: colorCode === undefined ? "#2E5F95" : colorCode,
                      }}
                    >
                      {/* {selectColor} */}
                      {selectColor === undefined ? colors[0] : selectColor}
                    </span>
                  </div>
                  {/* Image Section */}
                  <div className={styles.imageSection}>
                    <Image
                      src={GreenCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[0])}
                      className={
                        colorCode === "#3E764E"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={RedCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[1])}
                      className={
                        colorCode === "#931418"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={BlackCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[2])}
                      className={
                        colorCode === "#6D6D6D"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={BlueCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[3])}
                      className={
                        colorCode === "#2E5F95"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={OrangeCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[4])}
                      className={
                        colorCode === "#EC7622"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={PurpleCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[5])}
                      className={
                        colorCode === "#6C4B9C"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={WhiteCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[6])}
                      className={
                        colorCode === "#C8C8C8"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                    <Image
                      src={YellowCard}
                      width={100}
                      height={50}
                      onClick={() => handleColorChange(colors[7])}
                      className={
                        colorCode === "#FBBF20"
                          ? styles.colorCardsContainerActive
                          : styles.colorCardsContainer
                      }
                      alt="bubbl"
                    />
                  </div>
                  <div className={styles.hrTagDiv}>
                    <hr className={styles.hrTagResponsive} />
                  </div>

                  {/* Quantity and Price Div */}
                  <Row className={styles.quantityPriceDiv}>
                    <Col>
                      <h3 className={styles.quantityText}>Quantity</h3>
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
                    </Col>
                    <Col className={styles.customization_details_right}>
                      <h3 className={styles.quantityText_price}>Price</h3>
                      {/* <div className={styles.discountContainer}>
                        <p className={styles.slashedPrice}>INR 599</p>
                        <span className={styles.discountText}>40% off</span>
                      </div> */}
                      <h4>
                        Rs.{individuals[0]?.price} <span>Per card</span>
                      </h4>
                    </Col>
                  </Row>
                  {/* Add to Cart Button */}
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
                        buyNowFunction();
                      }}
                    >
                      BUY NOW
                    </Button>
                  </div>
                </div>
                <div className={styles.aboutItemDiv}>
                  <h2>About this item</h2>
                  <p style={{ marginTop: "25px" }}>
                    Introducing the Bubbl Card – a cutting-edge NFC-based
                    digital networking solution designed to redefine how
                    professionals connect. This sleek, credit card-sized device
                    seamlessly merges the physical and digital worlds, allowing
                    users to effortlessly share contact information, social
                    media profiles, and more with just a tap. With a
                    user-friendly mobile app for easy customization, the Bubbl
                    Card enhances networking experiences by providing a modern
                    and eco-friendly alternative to traditional paper business
                    cards. Elevate your networking game and make lasting
                    connections with the Bubbl Card – where innovation meets
                    simplicity.
                  </p>
                </div>

                <hr className={styles.hrTag} />

                <h2 className={styles.productDetails}>Product details</h2>
                <div className={styles.contentDiv}>
                  {dummyText.map((value) => (
                    <Row style={{ marginBottom: "9px", alignItems: "center" }}>
                      <Col
                        style={{ wordWrap: "break-word" }}
                        className={styles.mainValue}
                      >
                        <p> - &nbsp;{value.main}</p>
                      </Col>
                    </Row>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
          <div className={styles.CardListBackGroundConatainer}>
            <ParallaxBackground
              scrollPosition={scrollPosition}
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
          {/* <div className={styles.footerContainer}>
           
          </div> */}
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.myProfileFooter}>
          <div className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardProductList;
