/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { getCartValue, setCartValue } from "src/App/helpers/local-storage";
import { DeviceT, getShop } from "src/App/services/shop";

import BlackCard from "../../../images/cardassets/blackCard.png";
import BlueCard from "../../../images/cardassets/blueCard.png";
import GreenCard from "../../../images/cardassets/greenCard.png";
import OrangeCard from "../../../images/cardassets/orangeCard.png";
import PurpleCard from "../../../images/cardassets/purpleCard.png";
import RedCard from "../../../images/cardassets/redCard.png";
import WhiteCard from "../../../images/cardassets/whiteCard.png";
import YellowCard from "../../../images/cardassets/yellowCard.png";
import NavBar from "../../../src/App/components/ui/NavBar/_navbar";
import styles from "./card.module.css";

function ProductList() {
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const [selectColor, setSelectColor] = useState<any>();
  const [colorCode, setColorCode] = useState<any>();
  const [chooseColor, setChooseColor] = useState(false);

  const [cartArray, setCartArray] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [cartTotal, setCartTotal] = useState();
  const [nextId, setNextId] = useState(1);

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
      setSelectColor(value[0]);
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
    getShopDetails();
    getCartVal();
  }, []);
  const individuals = devices ? [devices.Card] : [];

  let colors: any;
  if (individuals.length !== 0) {
    colors = Object.keys(individuals[0].images);
  }

  function handleColorChange(color: any) {
    setChooseColor(true);

    setSelectColor(color);
    setItemCount(1);

    switch (color.trim()) {
      case "Citroen green":
        return setColorCode("#3E764E");
      case "Ruby red":
        return setColorCode("#931418");
      case "Pitch black":
        return setColorCode("#0D0D0D");
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
    if (cartArray.length === 0) {
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
          if (cartVAlues.productColor === selectColor) {
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

  const buyNowFunction = () => {
    const getParseVal: any = getCartValue();
    const getAllCart = JSON.parse(getParseVal);
    if (getAllCart.length === 0) {
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

  return (
    <div className={styles.responsiveContainer}>
      <NavBar cartTotal={cartTotal} />
      <ToastContainer />

      <div>
        <Container>
          <Row
            style={{ marginTop: "120px" }}
            className={styles.responsive_nameCustom}
          >
            <div className={styles.productListHomeTag}>
              <a onClick={() => router.push("/landing1")}>
                <span className={styles.home_color_head}>Home {" / "}</span>
              </a>
              <a onClick={() => router.push("/shopPage")}>
                <span className={styles.home_color_head}>
                  &nbsp;Shop {" / "}
                </span>
              </a>
              {/* <span className={styles.linkDevice_color_head}>
                &nbsp;Bubbl - Basic Card
              </span> */}
            </div>
            {/* RESPONSIVE FOR BASIC CARD CONTENT */}
            <div className={styles.leftSideContent_responsive}>
              <h2>Bubbl- Basic Card</h2>
              <p>
                Made with Recyclable PVC in a Matte finish with Spot UV
                coating,Stylish and Sleek. Comes in 8 bubbly colours
              </p>
              {/* <p>Stylish and Sleek. Comes in 8 bubbly colours</p> */}
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
                <span className={styles.colorHead}>Select your Color </span>
                <span
                  className={styles.colorText}
                  style={{
                    color: colorCode === undefined ? "#3E764E" : colorCode,
                  }}
                >
                  {selectColor}
                </span>
              </div>
              {/* Image Section */}
              <div className={styles.imageSection}>
                <Image
                  src={GreenCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[0])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={RedCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[1])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={BlackCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[2])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={BlueCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[3])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={OrangeCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[4])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={PurpleCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[5])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={WhiteCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[6])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
                <Image
                  src={YellowCard}
                  width={100}
                  height={50}
                  onClick={() => handleColorChange(colors[7])}
                  style={{ cursor: "pointer" }}
                  alt="bubbl"
                />
              </div>
              <div className={styles.hrTagDiv}>
                <hr className={styles.hrTagResponsive} />
              </div>

              {/* Quantity and Price Div */}
              <Row className={styles.quantityPriceDiv}>
                <Col xl={8} xs={12}>
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
                </Col>
                <Col className={styles.customization_details_right}>
                  <h3 className={styles.quantityText_price}>Price</h3>
                  <h4>
                    Rs.{devices?.Card.price}
                    <span> Per Card</span>
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
                  className={styles.cartButton}
                  onClick={() => {
                    buyNowFunction();
                  }}
                >
                  BUY NOW
                </Button>
              </div>
              {/* RESPONSIVE FOR PRICE AND CART BUTTON */}
              <div className={styles.priceBtnDiv}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span className={styles.priceValue}>
                      Rs.{devices?.Card.price} &nbsp;
                    </span>
                    <span className={styles.perCard}>per card</span>
                  </div>
                  <div className={styles.cartBtnDiv_responsive}>
                    <Button
                      type="button"
                      variant="none"
                      className={styles.cartButtonResponsive}
                      onClick={() => {
                        addCartFunction();
                      }}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
                <div className={styles.buyNowBtnResponsive}>
                  <Button
                    type="button"
                    variant="none"
                    className={styles.buyNowButtonResponsive}
                    onClick={() => {
                      buyNowFunction();
                    }}
                  >
                    BUY NOW
                  </Button>
                </div>
              </div>

              <hr className={styles.hrTagResponsive} />

              <div className={styles.aboutItemDiv}>
                <h2>About this item</h2>
                <p style={{ marginTop: "25px" }}>
                  Introducing the Bubbl Card – a cutting-edge NFC-based digital
                  networking solution designed to redefine how professionals
                  connect. This sleek, credit card-sized device seamlessly
                  merges the physical and digital worlds, allowing users to
                  effortlessly share contact information, social media profiles,
                  and more with just a tap. With a user-friendly mobile app for
                  easy customization, the Bubbl Card enhances networking
                  experiences by providing a modern and eco-friendly alternative
                  to traditional paper business cards. Elevate your networking
                  game and make lasting connections with the Bubbl Card – where
                  innovation meets simplicity.
                </p>
                {/* <p>Stylish and Seek, Comes in 8 bubbly colours</p> */}
              </div>

              <hr className={styles.hrTag} />

              <h2 className={styles.productDetails}>Product details</h2>
              <div className={styles.contentDiv}>
                {dummyText.map((value) => (
                  <Row style={{ marginBottom: "9px", alignItems: "center" }}>
                    <Col
                      // md={5}
                      // xs={6}
                      style={{ wordWrap: "break-word" }}
                      // style={{ marginRight: "34px" }}
                      className={styles.mainValue}
                    >
                      - &nbsp;{value.main}
                    </Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default ProductList;
