/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-html-link-for-pages */
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import SignUp from "src/App/components/buttons/signup";
import CreateProfileSection from "src/App/components/home/CreateProfile";
import Testimonial from "src/App/components/home/testimonial";
import BubblCustomSlider from "src/App/components/homeslider/bubblCustomSlide";
import CardComponent from "src/App/components/homeslider/CardComponent";
import HomeSlider from "src/App/components/homeslider/Homeslider";
import LoaderScreen from "src/App/components/lottie/lottie";
import ShopComponent from "src/App/components/Phase2_All_Components/Phase_2_ShopPage/SubShopPage/shopPage";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import ResponsiveNavbar from "src/App/components/websiteComponent/titleBar_responsive";
import { DeviceT, getShop } from "src/App/services/shop";
import { getCartItems } from "src/App/services/shopPage/shopServices";

import bannershop from "../../images/Bubble-website_assets/bubbl_pro/b3x.png";
import cartIcon from "../../images/Bubble-website_assets/bubbl-banner/add_to_cart.svg";
import breadcrumbs from "../../images/Bubble-website_assets/shop_page/breadcrumbs.svg";
import element from "../../images/Bubble-website_assets/shop_page/element.svg";
import styles from "../index.module.css";

export default function Shop() {
  const router = useRouter();
  const [devices, setDevices] = useState<Record<
    DeviceT["type"],
    DeviceT
  > | null>(null);
  const [newsLetterEmail, setNewLetterEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [count, setCount] = useState(0);

  // Bubbl Individual
  const individuals = devices
    ? [devices.Card, devices.Socket, devices.Tile]
    : [];

  // Bubbl Custom
  const bubblcustom = devices ? [devices.Card, devices.Socket] : [];

  // bubbl customize
  const nameCustom = devices
    ? [devices["Full Custom"], devices["Name Custom"]]
    : [];

  // Bubbl Bundle
  const bundle = devices ? devices["Bundle Devices"] : null;

  const getShopDetails = async () => {
    const shopItems = await getShop();
    setDevices(shopItems);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getShopDetails();
  }, []);

  const handleShipDetailChange = (e: any) => {
    const { value } = e.target;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid Email Address");
    } else {
      setNewLetterEmail(value);
      setEmailError("");
    }
  };
  return (
    <LoaderScreen>
      <div className={styles.container}>
        <ToastContainer />
        <Head>
          <title>
            Shop for Smart Business Card | Contactless Digital Visiting Card
            Online
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Shop for Smart Business Card | Contactless Digital Visiting Card Online"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.wholepage}>
          <section className={styles.navbar}>
            <div className="container">
              <ResponsiveNavbar />
            </div>
          </section>
          <section
            className={styles.userprofile_landingtwo}
            style={{
              backgroundImage: `url(${bannershop.src})`,
            }}
          >
            <div className="container">
              <Row>
                <Col>
                  <a href="/">
                    <span className={styles.breadcrumbs}>Home &nbsp;</span>
                  </a>

                  <span className={styles.sub_breadcrumbs}>
                    <Image src={breadcrumbs} alt="bubbl" /> &nbsp;Shop
                  </span>

                  <p className={styles.letscard}>Let&rsquo;s Bubbl</p>
                  <h1 className={styles.exploretwo}>
                    Explore the Future of Networking
                  </h1>
                </Col>
              </Row>
            </div>
          </section>
          <div className="container">
            <div className={styles.dots}>
              <Image src={element} alt="bubbl" />
            </div>
          </div>
          {/* <NavBar count={cartLength} /> */}
          <NavBar />

          {/* Desktop 3 Bubble individual and Responsive Slider 3 Bubble individual */}
          <section>
            <div className="container">
              <h2 className={styles.bubblInd}>Bubbl Basics</h2>
              <p className={styles.individual}>
                Pick from our line of Bubbl Basics - Affordable, Eco-friendly
                and perfect for first time users who just want to get the feel
                of futuristic networking.
              </p>
            </div>
            <HomeSlider
              shopDetails={individuals}
              // getCartLength={getCartLength}
            />
            <div className={styles.line} />
          </section>

          {/* ------------------------------------------------------------------------------------------- */}
          {/* Bubble Custom  - Name and Full custom section */}
          <section className={styles.bundlesandcustoms}>
            <div className="container">
              <h2 className={styles.bubblInd}>Bubbl Custom</h2>
              <p className={styles.individual}>
                {" "}
                Bubbl aims to replace paper business cards with sustainable
                options. We offer custom branding and bulk orders for corporate
                clients. Join us today!
              </p>
              <Col xl={8}>
                <BubblCustomSlider shopDetails={nameCustom} />
              </Col>
            </div>
            <div className={styles.line} />
          </section>
          {/* ------------------------------------------------------------------------ */}
          {/* Bubble Bundles */}
          <section className={`${styles.bubblBundle} container`}>
            <h2 className={styles.bubblInd}>Bubbl Bundles</h2>
            <p className={styles.individual}>
              If you want to get more than just one bubbl, don’t worry, we have
              fan favourite bundles at great deals. Making new connections has
              never been easier!
            </p>
            <Col xl={4}>
              {bundle && (
                <CardComponent
                  price={bundle.price}
                  title={bundle.type}
                  description={bundle.description}
                  images={bundle.images}
                  // getCartLength={undefined}
                />
              )}
            </Col>
          </section>

          <CreateProfileSection />
          <section className={styles.test}>
            <div className="container">
              <h2 className={styles.testimonialsheading}>Bubbl Testimonials</h2>
              <div className={styles.testcont}>
                <h3 className={styles.testimonialstext}>
                  Join the growing army of paper savers! The modern day
                  networkers.
                </h3>
              </div>
              <Testimonial />
            </div>
          </section>
          <section className={styles.newslettersection}>
            <div className="container">
              <Col className={styles.newsblock}>
                <Col>
                  <p className={styles.signup}>Sign up for newsletter</p>
                  <p className={styles.newsletter}>Bubbl Newsletter</p>
                </Col>
                <Col>
                  <Form className={styles.newsletter_form} autoComplete="nope">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        autoComplete="nope"
                        type="email"
                        placeholder="Enter your mail id"
                        className={styles.email_newsletter}
                        onChange={handleShipDetailChange}
                        //need to write validation
                      />
                    </Form.Group>
                    {emailError && (
                      <span
                        className="text-danger"
                        role="alert"
                        style={{ fontSize: "12px" }}
                      >
                        {emailError}
                      </span>
                    )}
                  </Form>
                  <SignUp emailId={newsLetterEmail} emailError={emailError} />
                </Col>
              </Col>
            </div>
          </section>
          <Footer />
        </div>
        <Button
          onClick={() => {
            // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
          }}
        >
          {/* Top */}
          <Image src={cartIcon} />
        </Button>
      </div>
    </LoaderScreen>
  );
}
Shop.defaultProps = { colors: [] };
