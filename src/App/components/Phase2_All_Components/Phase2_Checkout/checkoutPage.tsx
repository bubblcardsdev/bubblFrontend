/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-plusplus */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getAccessToken,
  getAddDataFlag,
  getCartValue,
  getExperationTime,
  removeAddDataFlag,
  setAddDataFlag,
  setCartValue,
  setPriceValue,
} from "src/App/helpers/local-storage";
import {
  cancelCart,
  clearCartItems,
  getCartItem,
} from "src/App/services/shopPage/shopServices";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import DeleteIcon from "../../../../../images/Phase_2_All_Assets/comman_assets/deleteIcon.svg";
import Right from "../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import HomePageNavigation from "../Phase_2_HomePage/navigationHome/homeNavigation";
import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
import styles from "./checkoutPage.module.css";
import SubTotalComponent from "./subTotalComponent";

function CheckOutPageFunc() {
  const router: any = useRouter();
  const [allCart, setAllCart] = useState<any>();
  const [priceTotal, setPriceTotal] = useState<any>();
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

  // eslint-disable-next-line no-shadow
  async function checkCart(
    allCartData: any,
    ApiCartData: any,
    Images: any,
    price: any
  ) {
    const ArrayData: Array<{
      id: number;
      itemPrice: number;
      productColor: "";
      productImage: "";
      productPrice: number;
      productStatus: boolean;
      productType: "";
      quantity: number;
      orderId: any;
      cartId: any;
    }> = allCartData ? [...allCartData] : [];
    // eslint-disable-next-line no-restricted-syntax
    for (const Data of ApiCartData) {
      // eslint-disable-next-line no-shadow
      // console.log(allCartData, "aaaaa");
      // eslint-disable-next-line no-unused-vars

      // eslint-disable-next-line consistent-return
      ArrayData.forEach((item, index) => {
        if (
          item.productColor === Data.productColor &&
          item.productType === Data.productType
        ) {
          // eslint-disable-next-line no-return-assign
          return (ArrayData[index] = {
            ...item,
            quantity: item.quantity + Data.quantity,
            productPrice: item.productPrice + Data.productPrice * Data.quantity,
          });
        }
        if (
          item.productColor !== Data.productColor &&
          item.productType !== Data.productType
        ) {
          return ArrayData.push({
            itemPrice: price[index],
            productColor: Data.productColor,
            productImage: Images[index],
            productPrice: price[index] * Data.quantity,
            productType: Data.productType,
            quantity: Data.quantity,
            id: ArrayData.length + 1,
            productStatus: true,
            orderId: Data.orderId,
            cartId: Data.id,
          });
        }
      });
    }
    localStorage.setItem("cart", JSON.stringify(ArrayData));
    const getCartVal: any = getCartValue();
    const value = JSON.parse(getCartVal);
    setAddDataFlag(true);
    setAllCart(value);
    let totalPrice = 0;
    for (let i = 0; i < value?.length; i++) {
      const item = value[i];

      totalPrice += item.productPrice || item.price;
    }
    setPriceTotal(totalPrice);
    setPriceValue(totalPrice);
    // setAllCart(ArrayData);
  }
  async function UpdateCart(Apidata: any, Images: any, price: any) {
    const ArrayData: Array<{
      id: number;
      itemPrice: number;
      productColor: "";
      productImage: "";
      productPrice: number;
      productStatus: boolean;
      productType: "";
      quantity: number;
    }> = Apidata.map(
      (
        Data: {
          itemPrice: any;
          productPrice: number;
          productColor: any;
          productImage: any;
          quantity: any;
          productType: any;
          orderId: any;
          id: any;
        },
        index: number
      ) => ({
        id: index + 1,
        itemPrice: price[index],
        productColor: Data.productColor,
        productImage: Images[index],
        productPrice: price[index] * Data.quantity,
        productType: Data.productType,
        quantity: Data.quantity,
        productStatus: true,
        orderId: Data.orderId,
        cartId: Data.id,
      })
    );
    console.log(ArrayData, "aaaaa");

    localStorage.setItem("cart", JSON.stringify(ArrayData));
    const getCartVal: any = getCartValue();
    const value = JSON.parse(getCartVal);
    setAddDataFlag(true);
    setAllCart(value);
    let totalPrice = 0;
    for (let i = 0; i < value?.length; i++) {
      const item = value[i];

      totalPrice += item.productPrice || item.price;
    }
    setPriceTotal(totalPrice);
    setPriceValue(totalPrice);
    window.location.reload();
  }

  const getCartItems = async () => {
    const getCartVal: any = getCartValue();
    const value = JSON.parse(getCartVal);
    setAllCart(value);
    let totalPrice = 0;
    for (let i = 0; i < value?.length; i++) {
      const item = value[i];

      totalPrice += item.productPrice || item.price;
    }
    setPriceTotal(totalPrice);
    setPriceValue(totalPrice);
  };

  const updateCartItems = async () => {
    const addData = getAddDataFlag();

    const Apidata = await getCartItem(); // get cart items from table if its pending order

    const getCartVal: any = getCartValue();
    const value = JSON.parse(getCartVal);

    if (Apidata && value === null && addData === null) {
      UpdateCart(Apidata?.response, Apidata?.images, Apidata?.productPrice);
    }
    if (Apidata && value && addData === null) {
      checkCart(
        value,
        Apidata?.response,
        Apidata?.images,
        Apidata?.productPrice
      );
    } else {
      setAllCart(value);
      let totalPrice = 0;
      for (let i = 0; i < value?.length; i++) {
        const item = value[i];

        totalPrice += item.productPrice || item.price;
      }
      setPriceTotal(totalPrice);
      setPriceValue(totalPrice);
    }
  };
  // updateCartItems();
  const decrementCount = (productId: number) => {
    const getAllItems: any = getCartValue();
    const parseValue = JSON.parse(getAllItems);
    const updatedVal = parseValue.map((value: any) => {
      if (value.id === productId && value.quantity > 1) {
        return {
          ...value,
          quantity: value.quantity - 1,
          productPrice: (value.quantity - 1) * value.itemPrice,
        };
      }
      return value;
    });
    setCartValue(updatedVal);
    getCartItems();
    handleRefreshClick();
  };

  const incrementCount = (productId: number) => {
    const getAllItems: any = getCartValue();
    const parseValue = JSON.parse(getAllItems);
    const updatedVal = parseValue.map((value: any) => {
      if (value.id === productId) {
        return {
          ...value,
          quantity: value.quantity + 1,
          productPrice: (value.quantity + 1) * value.itemPrice,
        };
      }
      return value;
    });
    setCartValue(updatedVal);
    getCartItems();
    handleRefreshClick();
  };
  const deleteCartItems = (id: any) => {
    const token = getAccessToken() ?? "";
    if (token) {
      const updatedCart = allCart?.filter(
        (CartData: any) => CartData.id !== id
      );
      const data = allCart?.filter((CartData: any) => CartData.id === id);
      // eslint-disable-next-line no-shadow
      const deleteData = data[0];

      setCartValue(updatedCart);
      setAllCart(updatedCart);
      getCartItems();
      cancelCart(deleteData);
      removeAddDataFlag();
      handleRefreshClick();
    } else {
      const updatedCart = allCart?.filter(
        (CartData: any) => CartData.id !== id
      );
      setCartValue(updatedCart);
      setAllCart(updatedCart);
      getCartItems();
      removeAddDataFlag();
      handleRefreshClick();
    }
  };

  useEffect(() => {
    const token = getAccessToken() ?? "";
    if (token) {
      updateCartItems();
    } else {
      getCartItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const tokenSetRef = useRef(false);

  const [activeDevicesCount, setActiveDevicesCount] = useState(0);
  useEffect(() => {
    const token = getAccessToken() ?? "";

    if (token) {
      // convert string to milliseconds
      const expirationTime = parseInt(getExperationTime()!, 10);

      // check experiation time from local storge
      const timeNow = Date.now();
      const timeNowInSeconds = Math.floor(timeNow / 1000);
      // if expired, logout user
      if (timeNowInSeconds > expirationTime) {
        localStorage.clear();
        router.replace("/login");
      } else if (!tokenSetRef.current) {
        tokenSetRef.current = true;
        setActiveDevicesCount(1);
      }
    }
  }, [router]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const { isFailed } = router.query;
  useEffect(() => {
    const failurePathRead = localStorage.getItem("failurePath");
    if (isFailed === "1" && failurePathRead === "myPlanPage") {
      router.push("/myPlanPage");
      localStorage.setItem("failurePath", "");
    }
    if (isFailed === "1") {
      clearCartItems();
      localStorage.removeItem("cart");
      getCartItems();
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFailed, router]);

  const topPositions = [10, 40, 30];
  const sizes = [65, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];

  return (
    <section className={styles.checkOutPageSection}>
      <div className={styles.checkOutPageDiv}>
        <div className={styles.navigationContainer}>
          {activeDevicesCount === 0 ? (
            <HomePageNavigation
              refresh={refreshNavigation}
              onRefresh={handleNavigationRefreshed}
            />
          ) : (
            <Navigation
              refresh={refreshNavigation}
              onRefresh={handleNavigationRefreshed}
            />
          )}
        </div>
        <div className={styles.checkOutBackgroundContainer}>
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

        <div className={styles.checkoutBreadCrumbs}>
          <div className={styles.homeLink}>
            <Link href="/">Home</Link>
          </div>
          <Image src={Right} alt="right" />
          <div className={styles.cartLink}>
            <Link href="/">Your Cart</Link>
          </div>
        </div>
        <div className={styles.NoCartText}>
          {allCart === null || allCart?.length === 0 ? (
            <div className={styles.noItem}>
              <p>No products added to cart</p>
            </div>
          ) : (
            <>
              <h1 className={styles.cartHeading}>Your Cart</h1>
              <Row className={styles.rowDeviceList}>
                <Col xs={12} md={12} lg={12} xl={7}>
                  {allCart?.map((cartValues: any) => (
                    <Row className={styles.listDivSection}>
                      <Col className={styles.imageDiv} md={2}>
                        <div>
                          <img src={cartValues?.productImage} width="100px" />
                        </div>
                      </Col>

                      <Col className={styles.deviceTypeDiv} md={4}>
                        <p>
                          {cartValues?.productType || cartValues?.deviceType}
                        </p>
                        <div className={styles.priceDiv}>
                          <div className={styles.piceTag}>Price</div>
                          <div>₹ {cartValues?.itemPrice}</div>
                        </div>
                        <div className={styles.qunatityDiv}>
                          <div className={styles.piceTag}>Quantity</div>

                          <div className={styles.quantityNumber}>
                            <div>
                              {cartValues?.quantity === 1 ? (
                                <span
                                  role="button"
                                  tabIndex={0}
                                  className={styles.minusDisabled}
                                  onClick={() => decrementCount(cartValues?.id)}
                                  // onKeyDown={decrementCountKeyHandler}
                                >
                                  -
                                </span>
                              ) : (
                                <span
                                  role="button"
                                  tabIndex={0}
                                  className={styles.minus}
                                  onClick={() => decrementCount(cartValues?.id)}
                                  // onKeyDown={decrementCountKeyHandler}
                                >
                                  -
                                </span>
                              )}

                              <span className={styles.minus}>
                                {cartValues?.quantity || cartValues?.quanitiy}
                              </span>

                              <span
                                role="button"
                                tabIndex={0}
                                className={styles.plus}
                                onClick={() => incrementCount(cartValues?.id)}
                                // onKeyDown={incrementCountKeyHandler}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col className={styles.deviceTypeDiv2}>
                        <div className={styles.subTotal}>
                          Total&nbsp; &nbsp; &nbsp; &nbsp;
                          <span>
                            ₹ {cartValues?.productPrice || cartValues?.price}
                          </span>
                        </div>
                        <div className={styles.deleteIcon}>
                          <Image
                            src={DeleteIcon}
                            alt="Delete"
                            onClick={() => deleteCartItems(cartValues?.id)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </Col>
                    </Row>
                  ))}
                </Col>

                <Col
                  xs={12}
                  md={12}
                  lg={12}
                  xl={4}
                  className={styles.promoCodeSection}
                >
                  <SubTotalComponent priceValue={priceTotal} />
                </Col>
              </Row>
            </>
          )}
        </div>
        <div>
          {/* Responsive for Card */}
          {allCart?.map((value: any) => (
            <Row className={styles.responsiveRow}>
              <Col
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <div>
                  <img src={value?.productImage} width="120px" />
                </div>
              </Col>
              <Col
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "oxygen",
                }}
              >
                <p>{value?.productType}</p>
                <div className={styles.priceDiv}>
                  <div className={styles.piceTag}>Price</div>
                  <div>₹ {value?.itemPrice}</div>
                </div>

                <div className={styles.qunatityDiv}>
                  <div className={styles.piceTag}>Qunatity</div>
                  <div className={styles.quantityNumber}>
                    <div>
                      <span
                        role="button"
                        tabIndex={0}
                        className={styles.minus}
                        onClick={() => decrementCount(value?.id)}
                      >
                        -
                      </span>
                      <span className={styles.minus}>{value?.quantity}</span>

                      <span
                        role="button"
                        tabIndex={0}
                        className={styles.plus}
                        onClick={() => incrementCount(value?.id)}
                        // onKeyDown={incrementCountKeyHandler}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.priceDiv}>
                  <div className={styles.piceTag}>Total</div>
                  <div className={styles.totalTextResp}>
                    ₹ {value?.productPrice || value?.price}
                  </div>
                </div>
                <div className={styles.delIcon}>
                  <Image
                    src={DeleteIcon}
                    alt="Delete"
                    onClick={() => deleteCartItems(value?.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Col>
            </Row>
          ))}

          <Row className={styles.responseTotal}>
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={4}
              className={styles.promoCodeSection}
            >
              <SubTotalComponent priceValue={priceTotal} />
            </Col>
          </Row>
        </div>

        <div className={styles.checkOutBackgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1
            showImage2
            showImage3={false}
            showGradients={showGradients}
          />
        </div>
      </div>
      <section className={styles.footerSection}>
        <div className={styles.footerSectionInside}>
          <Footer />
        </div>
      </section>
    </section>
  );
}
export default CheckOutPageFunc;
