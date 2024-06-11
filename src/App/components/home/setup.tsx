/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-boolean-value */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import Carousel from "react-multi-carousel";

import setup from "../../../../images/Bubble-website_assets/bubbl-setup/elements.svg";
import dot from "../../../../images/Bubble-website_assets/bubbl-setup/purple_dot.svg";
import element from "../../../../images/Bubble-website_assets/mobile_cards/setup.svg";
import styles from "./CreateProfile.module.css";

export default function Setup() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1024, min: 991 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 767 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section
      className={styles.setup}
      style={{
        backgroundImage: `url(${setup.src})`,
      }}
    >
      <div className="container">
        <h2 className={styles.setupheading}>How to setup your bubbl</h2>
        <p className={styles.setupcont}>Getting started with bubbl is easy.</p>

        <div className={styles.workflow}>
          <div className={styles.Wflow}>
            <div className={styles.dots}>
              <Image src={dot} alt="bubbl" />
              <p className={styles.numbers}>1</p>
            </div>
            <div>
              <Image src={dot} alt="bubbl" />
              <p className={styles.numbers}>2</p>
            </div>
            <div>
              <Image src={dot} alt="bubbl" />
              <p className={styles.numbers}>3</p>
            </div>
            <div>
              <Image src={dot} alt="bubbl" />
              <p className={styles.numbers}>4</p>
            </div>
          </div>
        </div>
        <div className={styles.setups}>
          <div className={styles.setupcont}>
            <h2>
              Buy a<br />
              Bubbl!
            </h2>
            <p>
              Choose from our wide range of products and buy your preferred one.
              You can even create a free Bubbl account and start sharing it
              before receiving your order!
            </p>
          </div>
          <div className={styles.setupcont}>
            <h2> Tap/scan to activate</h2>
            <p>
              When you get your Bubbl, simply tap it to the backof your phone or
              scan the QR code to open thesignup URL, login if you already
              created an account or sign up if its your first time. Your device
              will belinked to your profile and you're good to go!
            </p>
          </div>
          <div className={styles.setupcont}>
            <h2>Network like a Pro!</h2>
            <p>
              Get out and start enjoyingthe power of bubbl. Supercharge your
              networking game and impress everyone as you grow. Try Bubbl pro
              for an even better experience!
            </p>
          </div>
          <div className={styles.setupcont}>
            <h2>Start using Bubbl devices</h2>
            <p>
              Buy the plan & device in bubbl. then we’ll add your signup link in
              the card and ship it to you.
            </p>
          </div>
        </div>
        <div className={styles.carouselsetup}>
          <Carousel
            arrows={false}
            className={styles.carous_setup}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={false}
            autoPlaySpeed={500}
            keyBoardControl={true}
            centerMode={true}
            transitionDuration={300}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style-set"
          >
            <div className={styles.slide_setup}>
              <div className={styles.setup_card}>
                <p className={styles.numbers}>1</p>
                <Image src={element} alt="bubbl" />
              </div>

              <p className={styles.slidehead}>Buy a Bubbl!</p>
              <p className={styles.pickplan}>
                Choose from our wide range of products and buy your preferred
                one. You can even create a free Bubbl account and start sharing
                it before receiving your order!
              </p>
            </div>
            <div className={styles.slide_setup}>
              <div className={styles.setup_card}>
                <p className={styles.numbers}>2</p>
                <Image src={element} alt="bubbl" />
              </div>
              <p className={styles.slidehead}>Tap/scan to activate</p>
              <p className={styles.pickplan}>
                When you get your Bubbl, simply tap it to the backof your phone
                or scan the QR code to open thesignup URL, login if you already
                created an account or sign up if its your first time. Your
                device will belinked to your profile and you're good to go!
              </p>
            </div>
            <div className={styles.slide_setup}>
              <div className={styles.setup_card}>
                <p className={styles.numbers}>3</p>
                <Image src={element} alt="bubbl" />
              </div>
              <p className={styles.slidehead}> Network like a Pro!</p>
              <p className={styles.pickplan}>
                Get out and start enjoyingthe power of bubbl. Supercharge your
                networking game and impress everyone as you grow. Try Bubbl pro
                for an even better experience!
              </p>
            </div>
            <div className={styles.slide_setup}>
              <div className={styles.setup_card}>
                <p className={styles.numbers}>4</p>
                <Image src={element} alt="bubbl" />
              </div>
              <p className={styles.slidehead}>Start using Bubbl device</p>
              <p className={styles.pickplan}>
                Buy the plan & device in bubbl. then we’ll add your signup link
                in the card and ship it to you.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
