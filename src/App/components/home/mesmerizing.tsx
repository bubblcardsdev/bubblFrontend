/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";

import Mes from "../../../../images/Bubble-website_assets/mesmerising_profile/mesmerising_profile3x.png";
import Getstarted from "../buttons/getstarted";
import styles from "./CreateProfile.module.css";

export default function Mesmerizing() {
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
    <section className={styles.mesmerizing}>
      <div className="container ">
        <Col xl={12} lg={12} md={12} className={styles.mesmer}>
          <Col xl={3} lg={3} md={3} className={styles.workan}>
            <p className={styles.Mes_profile}>
              Expressive,
              <br /> Like You.
            </p>
            <p className={styles.Mes_para}>
              Create a unique profile, and share it any way you’d like.
            </p>
            <p className={styles.Mes_profile}>
              Empowering Entrepreneurs Everywhere.
            </p>
            <p className={styles.Mes_paraOne}>
              The new age Link-in-bio meets the modern-day business card. An
              All-in-one networking tool like Bubbl, lets you expand your
              network and your horizons in an instant.
            </p>
          </Col>
          <Col xl={7} lg={5} md={6} className={styles.mes_image}>
            <Image src={Mes} alt="bubbl" />
          </Col>
          <Col xl={2} lg={2} md={2} className={styles.align}>
            <p className={styles.Mes_profile}>Ready For Scale</p>
            <p className={styles.Mes_paraTwo}>
              Whether you’re a creator, run a startup, or are leading the next
              Fortune 500 company, bubbl is perfect for your networking needs.
            </p>
            <Getstarted />
          </Col>
        </Col>
        {/* Responsive */}
        <div className={styles.carousel}>
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
            <div className={styles.slide_mesmer}>
              <p className={styles.slidehead}>
                {" "}
                Expressive,
                <br /> Like You.
              </p>
              <p className={styles.pickplan}>
                {" "}
                Create a unique profile, and share it any way you’d like.
              </p>
            </div>
            <div className={styles.slide_mesmer}>
              <p className={styles.slidehead}>
                Empowering Entrepreneurs Everywhere.
              </p>
              <p className={styles.pickplan}>
                {" "}
                The new age Link-in-bio meets the modern-day business card. An
                All-in-one networking tool like Bubbl, lets you expand your
                network and your horizons in an instant.
              </p>
            </div>
            <div className={styles.slide_mesmer}>
              <p className={styles.slidehead}>Ready For Scale</p>
              <p className={styles.pickplan}>
                {" "}
                Whether you’re a creator, run a startup, or are leading the next
                Fortune 500 company, bubbl is perfect for your networking needs.
              </p>
            </div>
          </Carousel>
          <div className={styles.buttonup}>
            <Getstarted />
          </div>
        </div>
      </div>
    </section>
  );
}
