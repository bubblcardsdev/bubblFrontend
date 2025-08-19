/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import RespCarousel from "react-multi-carousel";
import { toast, ToastContainer } from "react-toastify";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import { getCartValue, setCartValue } from "src/App/helpers/local-storage";
import {
  AddCartApi,
  getAllThumbnailImages,
  getCardImage,
  getPatternImages,
} from "src/App/services/nameCustom/nameCustom";

import left from "/images/left_arrow_icon.svg";
import right from "/images/right_arrow_icon.svg";
import back from "/images/test.png";
import card from "/images/test1.png";
import front from "/images/test3.png";

import ParallaxBackground from "../backgroundimageswithgradient/background";
import NameCustomizationColor from "./color";
import NameCustomizationDetails from "./customDetail";
import styles from "./name_customization.module.css";
import NameCustomizationPattern from "./pattern";

const baseStyle = {
  outline: "2px solid transparent",
  borderRadius: "5px",
  lineHeight: "0",
  padding: "0px",
  height: "75px",
  display: "flex",
  alignItems: "center",
};

const materialStyle = {
  outline: "2px solid black",
};

function CustomLeftArrow({ onClick }: any) {
  return (
    <div className="custom-carousel-left-arrow" onClick={onClick}>
      <span className="custom-arrow-icon">
        {" "}
        <Image src={left} width={34} height={34} alt="bubbl" />
      </span>
    </div>
  );
}

function CustomRightArrow({ onClick }: any) {
  return (
    <div className="custom-carousel-right-arrow" onClick={onClick}>
      <span className="custom-arrow-icon">
        {" "}
        <Image src={right} width={34} height={34} alt="bubbl" />
      </span>
    </div>
  );
}

function CarouselMulti({ images, onSelect }: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 575 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div>
      <RespCarousel
        itemClass="px-2"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {images?.map((cardImg: any, index: any) => (
          <div>
            {cardImg?.NameCustomImages?.map((val: any) => {
              if (val.cardView === true) {
                const id = (index + 1).toString();
                return (
                  <div key={id} className={styles.select_pattern_img}>
                    <span>
                      <img
                        src={val?.imageUrl}
                        width={70}
                        height={70}
                        id={cardImg?.id}
                        onClick={() => onSelect(cardImg)}
                      />
                    </span>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </RespCarousel>
    </div>
  );
}

function Breadcrumb() {
  const router = useRouter();
  return (
    <div className={styles.breadcrumbs}>
      {/* <a onClick={() => router.push("/bubblProfiles")}>
        <span className={styles.home_color_head}>Home {" > "}</span>
      </a> */}
      <a onClick={() => router.push("/shopPage")}>
        <span className={styles.home_color_head}>&nbsp;Shop {" > "}</span>
      </a>
      <span className={styles.linkDevice_color_head}>
        &nbsp;Bubbl - Name Customization Card
      </span>
    </div>
  );
}

function NameCustomization() {
  const router = useRouter();

  const [choosePattern, setChoosePattern] = useState("NC-Pattern");
  const [itemCount, setItemCount] = useState(1); // item quantity
  const [nextId, setNextId] = useState(1);
  const [cartArray, setCartArray] = useState<any>([]);
  const [cartItems, setCartItems] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [fontStyle, setFontStyle] = useState("Amenti");
  const [cardPattern, setCardPattern] = useState("1");
  const [priceValue, setPriceValue] = useState<any>();
  const [selectCardImages, setSelectCardImages] = useState<any>([]);
  const [frontCard, setFrontCard] = useState<any>();
  const [backCard, setBackCard] = useState<any>();
  const [deviceImgId, setDeviceImageId] = useState<any>(1);
  const [patternImages, setPatternImages] = useState<any>([]);
  const [metalCards, setMetalCards] = useState<any>([]);
  const [thumbnailImages, setThumbnailImages] = useState<any[]>([]);
  const [nameError, setNameError] = useState("");
  const [deviceColor, setDeviceColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [materialCards, setMaterialCards] = useState<any>([
    {
      imgSrc: card,
      type: "NC-Pattern",
    },
    {
      imgSrc: card,
      type: "NC-Metal",
    },
    {
      imgSrc: card,
      type: "NC-Bamboo",
    },
  ]);

  const setCardMaterialIMages = async (imageData: any) => {
    const updatedCards = [
      {
        imgSrc: imageData[0].NameCustomImages[1].imageUrl,
        type: "NC-Pattern",
        displayName: imageData[0].displayName,
      },
      {
        imgSrc: imageData[1].NameCustomImages[1].imageUrl,
        type: "NC-Metal",
        displayName: imageData[1].displayName,
      },
      {
        imgSrc: imageData[2].NameCustomImages[1].imageUrl,
        type: "NC-Bamboo",
        displayName: imageData[2].displayName,
      },
    ];
    setMaterialCards(updatedCards);
  };

  const getOneOfEachForTitleImages = async (imagesData: any) => {
    const CardMaterialImages: any[] = [];
    const types = ["NC-Pattern", "NC-Metal", "NC-Bamboo"];

    for (const type of types) {
      const imgObj = {
        cardType: type,
      };
      const getImage = await getPatternImages(imgObj);
      const randomNumber = Math.floor(Math.random() * getImage.length);
      CardMaterialImages.push(getImage[randomNumber]);
    }
    setCardMaterialIMages(CardMaterialImages);
  };

  const getAllThumbnailImagesFunc = async () => {
    const imgObj = {
      cardType: choosePattern,
    };
    const getImage = await getPatternImages(imgObj);
    setDeviceColor(getImage[0]?.deviceColor);
    setBackCard(getImage[0]?.NameCustomImages[1]?.imageUrl);
    setFrontCard(getImage[0]?.NameCustomImages[0]?.imageUrl);
    if (choosePattern === "NC-Pattern") {
      const patternImg = getImage?.filter((image: any) => {
        return image.deviceType === "NC-Pattern";
      });
      patternImg?.map((val: any) => {
        setPriceValue(val?.price);
      });
    }

    setThumbnailImages(getImage);

    getOneOfEachForTitleImages(getImage);
  };
  const getCartVal = () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    if (cartCount !== null) {
      setCartArray(cartCount);
    }
  };

  useEffect(() => {
    getAllThumbnailImagesFunc();
    getCartVal();
  }, []);

  const patternClick = async (value: string) => {
    setChoosePattern(value);
    setCardPattern("");

    const imgObj = {
      cardType: value,
    };
    const getImage = await getPatternImages(imgObj);
    setBackCard(getImage[0]?.NameCustomImages[1]?.imageUrl);
    setFrontCard(getImage[0]?.NameCustomImages[0]?.imageUrl);
    setThumbnailImages(getImage);
    setDeviceImageId(getImage[0]?.id);

    const CardImages = getImage;
    if (value === "NC-Pattern") {
      setFontColor(CardImages[0].fontColor);
      const patternImg = CardImages?.filter((image: any) => {
        return image.deviceType === "NC-Pattern";
      });
      patternImg?.map((val: any) => {
        setPriceValue(val?.price);
      });
      setDeviceColor("darkGrey");
    }
    if (value === "NC-Metal") {
      setFontColor(CardImages[0].fontColor);
      const patternImg = CardImages?.filter((image: any) => {
        return image.deviceType === "NC-Metal";
      });
      patternImg?.map((val: any) => {
        setPriceValue(val?.price);
      });
      setDeviceColor("darkGrey");
    }
    if (value === "NC-Bamboo") {
      setFontColor(CardImages[0].fontColor);
      // setDeviceImageId(11);
      const patternImg = CardImages?.filter((image: any) => {
        return image.deviceType === "NC-Bamboo";
      });
      patternImg?.map((val: any) => {
        setPriceValue(val?.price);
      });
      setDeviceColor("darkGrey");
    }
  };

  // onChange func for name
  const userNameOnChange = (e: any) => {
    setNameError("");
    setUserName(e.target.value);
  };

  // func for increment the quantity
  const incrementCountFunc = () => {
    const count = itemCount + 1;
    setItemCount(itemCount + 1);
  };

  // func for decrement the quantity
  const decrementCountFunc = () => {
    if (itemCount > 1) {
      const count = itemCount - 1;
      setItemCount(itemCount - 1);
    }
  };

  // onChange func for name
  const fontOnChange = (e: any) => {
    setFontStyle(e.target.value);
  };

  // onClick func for choose pattern
  const handlePatternChange = async (cardImg: any) => {
    setCardPattern(cardImg.elId.toString());
    cardImg?.NameCustomImages?.map((val: any) => {
      if (val.cardView) {
        setFrontCard(val.imageUrl);
      } else {
        setBackCard(val.imageUrl);
      }
    });
    setSelectCardImages(cardImg?.NameCustomImages);
    setDeviceImageId(cardImg?.id);
    setDeviceColor(cardImg.deviceColor);
    setFontColor(cardImg?.fontColor);
  };
  const getCartLength = async () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    setCartArray(cartCount);
  };

  // };

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

  //   api call func for add Cart Item
  const addCartFunction = async () => {
    let productImage;
    // if (choosePattern === "NC-Pattern") {
    //   productImage = thumbnailImages[0]?.NameCustomImages[1]?.imageUrl;
    // }
    // else if(choosePattern ==="NC-Metal")
    if (userName === "") {
      setNameError("Name Can not be empty");
    } else {
      setNameError("");
      if (cartArray.length === 0) {
        const newCartArray = [
          ...cartItems,
          {
            name: userName,
            id: nextId,
            quantity: itemCount,
            fontStyle: fontStyle,
            fontColor: fontColor,
            deviceInventorId: deviceImgId,
            price: priceValue * itemCount,
            deviceColor: deviceColor,
            deviceType: choosePattern,
            itemPrice: priceValue,
            productImage: backCard,
          },
        ];
        setCartItems(newCartArray);
        setCartValue(newCartArray); // set the cart value in local storage
        setCartArray(newCartArray);
        setNextId(nextId + 1);
        // router.push("/checkout");
      } else {
        const newId = cartArray?.length;

        // if (existingProduct === undefined) {
        const newCartInExisting = [
          ...cartArray,
          {
            name: userName,
            id: newId + 1,
            quantity: itemCount,
            fontStyle: fontStyle,
            fontColor: fontColor,
            deviceInventorId: deviceImgId,
            price: priceValue * itemCount,
            deviceColor: deviceColor,
            deviceType: choosePattern,
            itemPrice: priceValue,
            productImage: backCard,
          },
        ];
        setCartItems(newCartInExisting);
        setCartValue(newCartInExisting); // set the cart value in local storage
        setCartArray(newCartInExisting);
        setNextId(newId + 1);
        // router.push("/checkout");
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
    }
  };

  const buyNowFunction = async () => {
    if (userName === "") {
      setNameError("Name Can not be empty");
    } else {
      setNameError("");
      if (cartArray.length === 0) {
        const newCartArray = [
          ...cartItems,
          {
            name: userName,
            id: nextId,
            quantity: itemCount,
            fontStyle: fontStyle,
            fontColor: fontColor,
            deviceInventorId: deviceImgId,
            price: priceValue * itemCount,
            deviceColor: deviceColor,
            deviceType: choosePattern,
            itemPrice: priceValue,
            productImage: backCard,
          },
        ];
        setCartItems(newCartArray);
        setCartValue(newCartArray); // set the cart value in local storage
        setCartArray(newCartArray);
        setNextId(nextId + 1);
        router.push("/checkout");
      } else {
        // const newId = cartArray?.length;

        // // if (existingProduct === undefined) {
        // const newCartInExisting = [
        //   ...cartArray,
        //   {
        //     name: userName,
        //     id: newId + 1,
        //     quantity: itemCount,
        //     fontStyle: fontStyle,
        //     fontColor: fontColor,
        //     deviceInventorId: deviceImgId,
        //     price: priceValue * itemCount,
        //     deviceColor: deviceColor,
        //     deviceType: choosePattern,
        //     itemPrice: priceValue,
        //     productImage: backCard,
        //   },
        // ];
        // setCartItems(newCartInExisting);
        // setCartValue(newCartInExisting); // set the cart value in local storage
        // setCartArray(newCartInExisting);
        // setNextId(newId + 1);
        router.push("/checkout");
      }

      handleRefreshClick();

      getCartLength();
    }
  };

  const [isTokenPresent, setIsTokenPresent] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const token =
      window.localStorage.getItem("accesstoken") !== null
        ? setIsTokenPresent(true)
        : setIsTokenPresent(false);

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
      <ToastContainer />
      <div className={styles.nameContainer}>
        <div className={styles.navigationContainer}>
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
        <div className={styles.backGroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            rightPositions={rightPositions}
            sizes={sizes}
            leftPositions={leftPosition}
            showImage1={false}
            showImage2
            showImage3
            showGradients={showGradients}
          />
        </div>
        <Container as="section" className={styles["mt-130"]}>
          <Row className={styles.responsive_nameCustom}>
            <Breadcrumb />
          </Row>
          <Row>
            {/* Card Preview */}
            <Col xl={5} lg={12} className={styles.leftCrd}>
              <div className={styles.right_heading_responsive}>
                <h2>Bubbl - Name Customization Card</h2>
                <p>
                  Personalize your Bubbl Card with your name and choose from
                  available patterns & colors
                </p>
              </div>
              {/* -----Responsive for selecting cards starting */}

              <div className={styles.responsive_materials}>
                {materialCards.map((cardItem: any) => (
                  <Button
                    variant="link"
                    key={cardItem.type}
                    onClick={() => patternClick(cardItem.type)}
                    className={
                      choosePattern === cardItem.type ? styles.active : ""
                    }
                  >
                    {cardItem.displayName}
                  </Button>
                ))}
              </div>

              <Carousel
                interval={null}
                className={`${styles["top-15"]} ${styles["mb-50"]} position-sticky`}
                prevIcon={<CustomLeftArrow />}
                nextIcon={<CustomRightArrow />}
              >
                {/* Back View */}
                <Carousel.Item className="px-3">
                  {selectCardImages ? (
                    <img
                      src={frontCard}
                      height="100%"
                      width="100%"
                      className={styles.cardsImage}
                    />
                  ) : (
                    <img
                      src={thumbnailImages[0]?.NameCustomImages[0]?.imageUrl}
                      height="100%"
                      width="100%"
                    />
                  )}
                  {choosePattern !== "NC-Metal" ? (
                    <Carousel.Caption className={styles.dynamic_section}>
                      <h3
                        className={styles.dynamic_name}
                        style={{ color: fontColor, fontFamily: fontStyle }}
                      >
                        {userName || "User Name"}
                      </h3>
                    </Carousel.Caption>
                  ) : (
                    <Carousel.Caption className={styles.dynamic_section_metal}>
                      <h3
                        className={styles.dynamic_name}
                        style={{ color: fontColor, fontFamily: fontStyle }}
                      >
                        {userName || "User Name"}
                      </h3>
                    </Carousel.Caption>
                  )}

                  <h3 className={styles.dynamic_name_details}>(Back View)</h3>
                </Carousel.Item>

                {/* Front View */}
                <Carousel.Item className="px-3">
                  <img
                    src={backCard}
                    height="100%"
                    width="100%"
                    className={styles.cardsImage}
                  />
                  <Carousel.Caption className={styles.dynamic_section}>
                    <h3
                      className={styles.dynamic_name}
                      style={{
                        visibility: "hidden",
                        color: fontColor,
                        fontStyle: fontStyle,
                      }}
                    >
                      {userName || "User Name"}
                    </h3>
                  </Carousel.Caption>
                  <h3 className={styles.dynamic_name_details}>(Front View)</h3>
                </Carousel.Item>
              </Carousel>
            </Col>
            {/* Card Details */}
            <Col className="m-auto" xl={5} lg={12}>
              <div className={styles.right_heading}>
                <h2>Bubbl - Name Customization Card</h2>
                <p>
                  Personalize your Bubbl Card with your name and choose from
                  available patterns & colors
                </p>
              </div>

              {/* ----------------------------------- */}
              <div className={styles.materials}>
                <h3 className={styles.head_resp}>Card Material :</h3>
                <div className={styles.material_list}>
                  {materialCards.map((cardItem: any) => (
                    <div
                      key={cardItem.type}
                      className={styles.material_individual}
                      onClick={() => patternClick(cardItem.type)}
                    >
                      <div
                        style={
                          choosePattern === cardItem.type
                            ? { ...baseStyle, ...materialStyle }
                            : baseStyle
                        }
                      >
                        <img
                          src={cardItem.imgSrc}
                          width={120}
                          height={120}
                          style={{ borderRadius: "5px" }}
                        />
                      </div>
                      <p>{cardItem.displayName}</p>
                    </div>
                  ))}
                </div>

                <div className={styles.select_pattern_section}>
                  {/* Select Pattern */}
                  {choosePattern === "NC-Pattern" && (
                    <NameCustomizationPattern
                      patternId={cardPattern}
                      onSelect={handlePatternChange}
                      thumbnailImages={thumbnailImages}
                      patternImages={patternImages}
                    />
                  )}

                  {/* Select Color */}
                  {choosePattern === "NC-Metal" && (
                    <NameCustomizationPattern
                      patternId={cardPattern}
                      onSelect={handlePatternChange}
                      thumbnailImages={thumbnailImages}
                      patternImages={patternImages}
                    />
                  )}

                  {/* Select Color */}
                  {choosePattern === "NC-Bamboo" && (
                    <NameCustomizationPattern
                      patternId={cardPattern}
                      onSelect={handlePatternChange}
                      thumbnailImages={thumbnailImages}
                      patternImages={patternImages}
                    />
                  )}

                  {/* Custom Details */}
                  <NameCustomizationDetails
                    // originalPrice={originalPrices[choosePattern]}
                    userNameOnChange={userNameOnChange}
                    userName={userName}
                    nameError={nameError}
                    fontOnChange={fontOnChange}
                    incrementCountFunc={incrementCountFunc}
                    decrementCountFunc={decrementCountFunc}
                    fontStyle={fontStyle}
                    itemCount={itemCount}
                    addCartFunction={addCartFunction}
                    buyNowFunction={buyNowFunction}
                    priceValue={priceValue}
                    choosePattern={choosePattern}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NameCustomization;
