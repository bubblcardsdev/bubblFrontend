/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import arrow from "../../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import heroImage from "../../../../../../images/Bubble-website_assets/mesmerising_profile/networking.png";
import tickIcon from "../../../../../../images/Phase_2_All_Assets/home_page/tickIcon.svg";
import styles from "./createProfile.module.css";

export default function ProfileCreateSection() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topPositions = [10, 350, 420];
  const sizes = [200, 320, 95];
  const rightPositions = [0, -500, 0];
  const leftPosition = [-400, 0, -70];
  const showGradients = [false, true, false];

  return (
    <>
      <ParallaxBackground
        scrollPosition={scrollPosition / 10}
        topPositions={topPositions}
        sizes={sizes}
        rightPositions={rightPositions}
        leftPositions={leftPosition}
        showImage1={false}
        showImage2={false}
        showImage3={true}
        showGradients={showGradients}
      />
      <section className={styles.mesmerizing}>
        <div>
          <Col xl={12} lg={12} md={12} className={styles.mesmer}>
            <Col xl={3} lg={3} md={3} className={styles.workan}>
              {/* <p className={styles.createProfileHead}>Create a Profile</p> */}
              <p className={styles.profileSubContent}>
                To Say Who You Are <br /> And What You Do
              </p>

              <div className={styles.dashLine} />

              <p className={styles.customizeProf}>Customize your profile</p>
              <div className={styles.contentProfile}>
                To Share All Your Important information, Social Links, Payment
                Links and Much More
              </div>

              <p className={styles.Mes_para}>
                Create a unique profile, and share it any way you’d like.
              </p>
            </Col>
            <Col xl={5} lg={5} md={6} className={styles.mes_image}>
              <Image src={heroImage} alt="bubbl" />
            </Col>
            <Col xl={2} lg={2} md={2} className={styles.align}>
              <p className={styles.createProfileRightDiv}>
                Leave a lasting first impression, stand out from the crowd and
                Become unforgettable.
              </p>
              <div className={styles.profileList}>
                <div className={styles.tickPlusSection}>
                  <div className={styles.tickplusContent}>
                    <div>
                      <Image
                        src={tickIcon}
                        className={styles.tickIconStyle}
                        width={18}
                        height={18}
                      />
                    </div>

                    <span className={styles.listContent}>
                      Empowering Entrepreneurs, and businesses with an
                      all-in-one networking tool.
                    </span>
                  </div>

                  <div className={styles.tickplusContent}>
                    <div>
                      <Image
                        src={tickIcon}
                        className={styles.tickIconStyle}
                        width={18}
                        height={18}
                      />
                    </div>

                    <span className={styles.listContent}>
                      Ready for scale. Whether you are a start-up or fortune 500
                      company, Bubbl is perfect for you!
                    </span>
                  </div>
                  <div className={styles.tickplusContent}>
                    <div>
                      <Image
                        src={tickIcon}
                        className={styles.tickIconStyle}
                        width={19}
                        height={19}
                      />
                    </div>

                    <span className={styles.listContent}>
                      Stay Ahead, Stay Successful, Stay Connected.
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className={styles.buttonShop}
                  onClick={() => router.push("/login")}
                >
                  <p>GET STARTED</p>
                  <Image src={arrow} className={styles.arw} alt="bubbl" />
                </Button>
              </div>

              {/* <GetStarted /> */}
            </Col>
          </Col>
          {/* Responsive */}

          <div className={styles.profileResponsive}>
            <h2> To Say Who You Are And What You Do</h2>
            {/* <p className={styles.profileResponsiveContent}>
              To Say Who You Are And What You Do
            </p> */}
            <div className={styles.dashLineDiv}>
              <div className={styles.dashLineRes} />
            </div>
            <p className={styles.profileRespHeader}>Customize your profile</p>
            <p className={styles.profileResponsiveContent}>
              (To Share All Your Important information, Social Links, Payment
              Links and Much More)
            </p>
            <div className={styles.imageCenter}>
              <div className={styles.imageDivRes}>
                <Image src={heroImage} alt="bubbl" />
              </div>
            </div>
            <div className={styles.listDiv}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Image src={tickIcon} className={styles.tickIcon} />
                  <span>
                    {" "}
                    Leave a lasting first impression, stand out from the crowd
                    and Become unforgettable.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <Image src={tickIcon} className={styles.tickIcon} />
                  <span>
                    Ready for scale. Whether you are a start-up or fortune 500
                    company, Bubbl is perfect for you!
                  </span>
                </li>
                <li className={styles.listItem}>
                  <Image src={tickIcon} className={styles.tickIcon} />
                  <span>Stay Ahead, Stay Successful, Stay Connected. </span>
                </li>
              </ul>
            </div>
            <div>
              <Button
                className={styles.buttonShop}
                onClick={() => router.push("/login")}
              >
                <p>GET STARTED</p>
                <Image src={arrow} className={styles.arw} alt="bubbl" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
