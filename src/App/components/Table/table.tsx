/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import classNames from "classnames";
import Image from "next/image";
import router from "next/router";
import { Button, Col, Row } from "react-bootstrap";

import crossV from "../../../../images/Bubble-website_assets/bubbl_pro/crossV.svg";
import free from "../../../../images/Bubble-website_assets/bubbl_pro/free-badge-icon.svg";
import orange from "../../../../images/Bubble-website_assets/bubbl_pro/orange.svg";
import pro from "../../../../images/Bubble-website_assets/bubbl_pro/pro-badge-icon.svg";
import violet from "../../../../images/Bubble-website_assets/bubbl_pro/vilolet.svg";
import featureImage from "../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_Feature.svg";
import respFeatureImage from "../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_FeatureResp1.svg";
import respFeatureImageTwo from "../../../../images/Phase_2_All_Assets/home_page/bubblPro/bubbl_Pro_FeatureResp2.svg";
import ProIcon from "../../../../images/Phase_2_All_Assets/home_page/proIcon.png";
import styles from "./table.module.css";

export default function TableComp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={featureImage} alt="featureImage" />
          <div className={styles.contactButtonContainer}>
            <Button
              className={styles.contactButton}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* responsive */}

      <div className={styles.containerResp}>
        <div className={styles.imageRespContainer}>
          <Image src={respFeatureImage} alt="respImage" />

          <Image
            src={respFeatureImageTwo}
            alt="respFeatureImage"
            className={styles.featureImageTwo}
          />
          <div className={styles.contactButtonContainerResp}>
            <Button
              className={styles.contactButtonResp}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
