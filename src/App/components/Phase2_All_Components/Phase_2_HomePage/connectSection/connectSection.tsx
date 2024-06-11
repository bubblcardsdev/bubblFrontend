/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

import arrow from "../../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import styles from "./connectSection.module.css";
// import VideoPlay from "./video/final.mp4";

function ConnectSection() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.connectContainer}>
        <div className={styles.connectTag}>
          <h1>Connect In Seconds,</h1>
          <p className={styles.businessCard}>With A Bubbl Business Card</p>
          <div className={styles.businessTag}>
            <p>
              Embrace the future of networking with our NFC digital business
              cards, Sharing your contact information is just a tap away
            </p>
          </div>
          <Button
            className={styles.buttonShop}
            onClick={() => router.push("/shopPage")}
          >
            <p>GET YOURS NOW</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </Button>
        </div>
        <div style={{ width: "100%", position: "relative", padding: "10px" }}>
          <video
            autoPlay
            muted
            loop
            className={styles.videoStyle}
            preload="auto"
            playsInline
            controls={false}
          >
            <source
              src="static/images/video/connectVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* RESPONSIVE */}
      <div className={styles.responsiveContainer}>
        <div className={styles.responsiveConnectSec}>
          <div className={styles.responsiveConnectContainer}>
            <h1>Connect In Seconds,</h1>
            <p>With A Bubbl Business Card</p>
          </div>
          {/* video part */}
        </div>
        <div className={styles.videoResDiv}>
          <video autoPlay muted className={styles.videoResponsive} playsInline>
            <source
              src="static/images/video/connectVideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className={styles.responsiveHead}>
          Embrace the future of networking with our NFC digital business cards,
          Sharing your contact information is just a tap away
        </p>
        <div className={styles.buttonResDiv}>
          <Button
            className={styles.buttonShopRes}
            onClick={() => router.push("/shopPage")}
          >
            <p>GET YOURS NOW</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ConnectSection;
