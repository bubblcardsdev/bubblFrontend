/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Calculate from "src/App/components/home/calculate";
import CreateProfileSection from "src/App/components/home/CreateProfile";
import Networking from "src/App/components/home/FutureNetworking";
import Mesmerizing from "src/App/components/home/mesmerizing";
import Setup from "src/App/components/home/setup";
import Testimonial from "src/App/components/home/testimonial";
import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import CardHome from "src/App/components/ui/Card/homecard";
import ProductCards from "src/App/components/ui/Card/product";
import TitleBar from "src/App/components/websiteComponent/titleBar";
import ResponsiveNavbar from "src/App/components/websiteComponent/titleBar_responsive";
import {
  getAccessToken,
  getEmail,
  getExperationTime,
  setclaimName,
} from "src/App/helpers/local-storage";
import {
  getClaimLink,
  updateClaimLink,
} from "src/App/services/claimLink/claimLink";
import { listingData } from "src/App/services/createProfileApi";
import { DeviceT, getShop } from "src/App/services/shop";

import styles from "@/pages/test.module.css";

import cartIcon from "../images/Bubble-website_assets/bubbl-banner/add_to_cart.svg";
import banner_image from "../images/Bubble-website_assets/bubbl-banner/bannar_card.svg";
import element from "../images/Bubble-website_assets/bubbl-banner/elements.svg";
import cardComp from "../images/Bubble-website_assets/bubbl-banner/mobile_card_mockup3x.png";
import elementwhite from "../images/Bubble-website_assets/mobile_cards/element_white.svg";
import Accordian from "../src/App/components/accordian/accordian";
import Getstarted from "../src/App/components/buttons/getstarted";
import ButtonShop from "../src/App/components/buttons/shopBtn";
import UpgradePlan from "../src/App/components/ui/Header/upgradPlan";

export default function Home() {
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const router = useRouter();

  let token = "";

  const [claimLinkName, setClaimLinkName] = useState();
  const [carouselIndex, setCarouselIndex] = useState<number | undefined>(
    undefined
  );
  const [devicesArray, setDeviceArray] = useState<any[]>([]);
  const [randomItem, setRandomItem] = useState<any[]>([]);

  // Bubbl Individual
  const individuals = devices ? [devices.Card] : [];

  // Bubbl Custom
  const bubblcustom = devices ? [devices.Card, devices.Socket] : [];

  // Bubbl Bundle
  const bundle = devices ? devices["Bundle Devices"] : null;

  const getShopDetails = async () => {
    const shopItems = await getShop();
    const newDeviceArray = Object.values(shopItems);
    const removeItem = ["NC-Pattern", "NC-Metal", "NC-Bamboo"];
    const filteredItems = newDeviceArray.filter(
      (item: any) => !removeItem.includes(item.type)
    );
    setDeviceArray(filteredItems);
    setDevices(shopItems);
  };
  const tokenSetRef = useRef(false);
  useEffect(() => {
    token = getAccessToken() ?? "";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getShopDetails();

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
        const checkDeviceIsActive = (devicesArray: any) => {
          let totalActiveDevices = 0;
          devicesArray?.map((device: any) =>
            device.isDeleted === false
              ? (totalActiveDevices += 1)
              : totalActiveDevices
          );
          return totalActiveDevices;
        };

        getProfiles().then((respDatas) => {
          const totalLength = checkDeviceIsActive(respDatas?.data?.devices);
          router.push("/createProfileStep1");

          // if (totalLength === 0) {
          //   router.replace("/landing");
          // } else {
          //   router.replace("/landing1");
          // }
        });
      }
    }
  }, [router]);

  const updateClaimName = async () => {
    const claimObj: any = {
      claimLinkName: claimLinkName,
      emailId: getEmail(),
    };
    const claimName = await updateClaimLink(claimObj);
  };

  const getClaimName = async () => {
    const claimLinkNameObj = {
      claimLinkName: claimLinkName,
    };
    const claimNameResp = await getClaimLink(claimLinkNameObj);

    if (claimNameResp?.data.success) {
      if (token) {
        updateClaimName;
      } else {
        router.push("/login");
      }
    }
  };

  const handleClaimName = async (val: any) => {
    const { value } = val.target;
    setClaimLinkName(value);
    setclaimName(value);
  };

  const getProfiles = async () => {
    const profResponse = await listingData();
    return profResponse;
  };

  return (
    <LoaderScreen>
      <div className={styles.container}>
        <Head>
          <title>
            Bubbl - Premium Business Digital Card | NFC Custom Business Cards
            Online
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Keep up with the latest of digital business cards and shop our exclusive NFC cards collection to increase your online presence with contactless business cards. Make your own custom NFC business card today."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <section className={styles.homePageSection}>
          <div className={styles.homePage}>
            <Navigation />
            <section className={styles.connectSectionSec}>
              <ConnectSection />
            </section>
            <section className={styles.flowSection}>
              <FlowSection />
            </section>
            <section className={styles.clientSection}>
              <ClientSection />
            </section>
            <section className={styles.productSection}>
              <ProductItems />
            </section>
            <section className={styles.customizeContainer}>
              <CustomizeSection />
            </section>
            <section className={styles.functionSection}>
              <FunctionSection />
            </section>
            <section className={styles.profileSection}>
              <ProfileCreateSection />
            </section>
            <section className={styles.networkSection}>
              <NetworkingSection />
            </section>
            <section className={styles.treeSection}>
              <CalculateTree />
            </section>
            <section className={styles.frequentSection}>
              <FrequentlyQuestions />
            </section>
            <section className={styles.footerSection}>
              <Footer />
            </section>
          </div>
        </section> */}

        <section className={styles.userprofile_sec}>
          <TitleBar />
        </section>
        <section className={styles.navbar}>
          <div className="container">
            <ResponsiveNavbar />
          </div>
        </section>
        <section className={styles.userprofile_landing}>
          <div className="container">
            <Carousel
              controls={false}
              slide={false}
              indicators={false}
              interval={null}
              className={styles.banner_indicator}
              pause={false}
            >
              <Carousel.Item>
                <div className={styles.banner_slider}>
                  <div className={styles.banner_text}>
                    <h1 className={styles.onecard}>One Card,</h1>
                    <h1 className={styles.lifetime}>Infinite Connections</h1>
                    <a href="/shop" className={styles.button_desktop}>
                      <ButtonShop />
                    </a>
                  </div>
                  <div>
                    <Image src={banner_image} alt="bubbl" />
                    <div className={styles.carousel_btn_resp}>
                      <ButtonShop />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="container">
            <div className={styles.resp__cards}>
              <CardHome />
              <a href="/shop" className={styles.button_resp}>
                <ButtonShop />
              </a>
              <div className={styles.element}>
                <Image src={elementwhite} alt="bubbl" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cards}>
          <CardHome />
        </section>

        <section className={styles.mockup__circle}>
          <div className={styles.semicircle} />
          <div className={styles.semicircles}>
            <Col xl={6} lg={7} className={styles.mockup}>
              <Image src={cardComp} alt="bubbl" />
            </Col>
          </div>
        </section>
        <section className={styles.element_svg}>
          <div className="container">
            <div className={styles.shopelmnt}>
              <Getstarted />
              <div className={styles.element}>
                <Image src={element} width="100%" alt="bubbl" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionclaim}>
          <div className="container">
            <Col className={styles.claim}>
              <Col
                xl={6}
                lg={5}
                md={12}
                xs={12}
                className={styles.claimheading}
              >
                <h3>Claim Your</h3>
                <p>Personalised Link Now!</p>
              </Col>
              <Col xl={6} lg={5} md={12} xs={12}>
                <div className={styles.input_field}>
                  <input
                    autoComplete="nope"
                    className={styles.validate}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="bubbl.cards/Username"
                    onChange={handleClaimName}
                  />
                  <div className={styles.claimLink}>
                    <button type="button" onClick={getClaimName}>
                      CLAIM LINK
                    </button>
                  </div>
                </div>
              </Col>
            </Col>
          </div>
        </section>
        <CreateProfileSection />
        <Networking />
        <Calculate />
        <div className={styles.upgradeplan}>
          <h2 className={styles.tapaway}>The Future is Just a ‘tap’ Away</h2>
          <p className={styles.conttap}>
            Say goodbye to boring old paper cards and embrace the power of
            bubbl. A hybrid, cost-effective, agile networking solution for
            Businesses and Entrepreneurs alike.
          </p>
        </div>

        <UpgradePlan />

        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.knowhwat}>
              <h2 className={styles.testimonialsheading}>Bubbl Testimonials</h2>
              <h3 className={styles.testimonialstext}>
                Know what our people says
              </h3>
            </div>
            <Testimonial />
          </div>
        </section>
        <Setup />
        <Mesmerizing />
        <section className={styles.products}>
          <div className="container">
            <h2 className={styles.bubblproducts}>Bubbl Products</h2>
            <p className={styles.experience}>
              Experience the future of networking
            </p>
            <Col className={styles.dropbutton}>
              <Form.Select
                onChange={(event) => {
                  setCarouselIndex(Number(event.target.value));
                }}
              >
                {devicesArray?.map((arr: any, index: any) => (
                  <option value={index}>{arr.type}</option>
                ))}
              </Form.Select>
            </Col>
            <ProductCards
              carouselItemIndex={carouselIndex}
              shopDetails={devicesArray}
            />
          </div>
        </section>

        <section className={styles.accordian}>
          <div className="container mt-5">
            <div className={styles.accord}>
              <Col className="col-6">
                <h2 className={styles.frequently}>
                  Frequently Asked Questions
                </h2>
                <p className={styles.faq}>Bubbl FAQ</p>
              </Col>
              <Col className="col-6">
                <Accordian />
              </Col>
            </div>
          </div>
        </section>
        <section className={styles.accordian_mobile}>
          <div className="container">
            {/* <h2 className={styles.faq}>Frequently Asked Questions</h2>
            <p className={styles.mob_faq}>Bubbl FAQ</p> */}
            <Accordian />
          </div>
        </section>
        <Footer />
        <Button
          onClick={() => {
            router.push("/checkout");
          }}
          style={{
            backgroundColor: "#af38d6",
            position: "fixed",
            padding: "15px 15px",
            borderRadius: "50%",
            bottom: "70px",
            right: "20px",
            textAlign: "center",
            outline: "none",
            border: "none",
            zIndex: "1000",
          }}
        >
          <Image src={cartIcon} />
        </Button>
      </div>
    </LoaderScreen>
  );
}
