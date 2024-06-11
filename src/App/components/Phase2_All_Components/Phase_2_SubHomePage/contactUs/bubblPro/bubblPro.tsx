/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import LoaderScreen from "src/App/components/lottie/lottie";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import TableComp from "src/App/components/Table/table";
import {
  removeAccessToken,
  removeCheckLogin,
} from "src/App/helpers/local-storage";

import breadcrumbs from "../../../../../../../images/Bubble-website_assets/shop_page/breadcrumbs.svg";
import bubblepro from "../../../../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubblProHeroImage.png";
import Footer from "../../../Phase2_Footer/footer";
import styles from "./bubblPro.module.css";

export default function BubblPro() {
  const router = useRouter();
  useEffect(() => {
    removeCheckLogin();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <LoaderScreen>
      <div className={styles.container}>
        <Head>
          <title>QR Enabled Custom NFC Business Cards for your Business</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Own your data and your network with Bubbl Pro's new and revolutionary technology, which is an empowering tool for the next generation of entrepreneurs. Get digitally customized NFC business contact cards for your business today."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={styles.shopPageSection}>
          <div className={styles.web}>
            <div className={styles.navigationProPageBackground}>
              <div className={styles.userprofile_sec}>
                <HomePageNavigation />
              </div>
            </div>
            <section className={styles.userprofile_landingthree}>
              <Row className={styles.proBanner}>
                <Col className={styles.bubblProHead}>
                  {/* <a href="/">
                    <p className={styles.breadcrumbs}>
                      HOME
                      <span className={styles.sub_breadcrumbs}>
                        <Image src={breadcrumbs} alt="bubbl" /> Bubbl Pro
                      </span>
                    </p>
                  </a> */}
                  <p className={styles.letscard}>Bubbl PRO</p>
                  <h1 className={styles.explore}>
                    Explore the Future of Networking with Different Modes
                  </h1>
                </Col>
                <Col className={styles.heroImgStyle}>
                  <Image src={bubblepro} alt="Bubbl_proHeroImg" />
                </Col>
              </Row>
            </section>
            <div className={styles.proContentHead}>
              <div className={styles.proContentFirst}>
                <span>Own your data own your network,</span> Empowering tool for
                the next gen of entrepreneurs
              </div>
              <div className={styles.proContentSecond}>
                Get Access To Advanced Features And Network Like A Pro
              </div>
            </div>

            <section className={styles.features}>
              <TableComp />
            </section>
          </div>
        </section>
        <section className={styles.footerSection}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </section>
      </div>
    </LoaderScreen>
  );
}
