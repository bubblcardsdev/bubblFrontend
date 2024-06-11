/* eslint-disable no-unused-vars */
import Image from "next/image";
import { Col } from "react-bootstrap";

import lifetime from "../../../../../images/Bubble-website_assets/bubbl-banner/lifetime.svg";
import showoff from "../../../../../images/Bubble-website_assets/bubbl-banner/profile.svg";
import upgrade from "../../../../../images/Bubble-website_assets/bubbl-banner/upgrade-icon.svg";
import network from "../../../../../images/Bubble-website_assets/mobile_cards/1assets3x.png";
import unique from "../../../../../images/Bubble-website_assets/mobile_cards/2assets3x.png";
import design from "../../../../../images/Bubble-website_assets/mobile_cards/3bassets3x.png";
import styles from "./cards.module.css";

export default function CardHome() {
  return (
    <div className="container">
      <div className={styles.Homecards}>
        <div>
          <Image src={upgrade} width={61} height={61} alt="bubbl" />
          <h3 className={styles.cardhead}>Better Networking </h3>
          <p className={styles.cardCont}>
            In a world where first impressions matter, connect in style with
            bubbl.
          </p>
          <div className={styles.line} />
        </div>
        <div>
          <Image src={showoff} width={61} height={61} alt="bubbl" />
          <h3 className={styles.cardhead}>
            Uniquely <br /> You
          </h3>
          <p className={styles.cardCont}>
            Personalize your profile to your taste, or streamline to your brand
            guidelines.
          </p>
          <div className={styles.line} />
        </div>
        <div>
          <Image src={lifetime} width={61} height={61} alt="bubbl" />
          <h3 className={styles.cardhead}>Thoughtful Design</h3>
          <p className={styles.cardCont}>
            One bubbl card will last you a lifetime, and save countless trees.
          </p>
          <div className={styles.line} />
        </div>
      </div>

      {/* Responisve */}
      <div className={styles.homecard_resp}>
        <Col xs={12} className={styles.cards_respon}>
          <Col xs={6} className={styles.left}>
            <Image src={upgrade} width={61} height={61} alt="bubbl" />
            <h3 className={styles.cardhead}>Better Networking </h3>
            <p className={styles.cardCont}>
              In a world where first impressions matter, connect in style with
              bubbl.
            </p>
            <div className={styles.line} />
          </Col>
          <Col xs={4} className={styles.resp_img}>
            <Image src={network} alt="bubbl" />
          </Col>
        </Col>
        <Col xs={12} className={styles.cards_respon}>
          <Col xs={4} className={styles.resp_img}>
            <Image src={unique} alt="bubbl" />
          </Col>
          <Col xs={6} className={styles.right}>
            <Image src={showoff} width={61} height={61} alt="bubbl" />
            <h3 className={styles.cardhead}>
              Uniquely <br /> You
            </h3>
            <p className={styles.cardCont}>
              Personalize your profile to your taste, or streamline to your
              brand guidelines
            </p>
            <div className={styles.line} />
          </Col>
        </Col>
        <Col xs={12} className={styles.cards_respon}>
          <Col xs={5} className={styles.left}>
            <Image src={lifetime} width={61} height={61} alt="bubbl" />
            <h3 className={styles.cardhead}>Thoughtful Design</h3>
            <p className={styles.cardCont}>
              One Bubbl card will last you a lifetime, and save countless trees.
            </p>
            <div className={styles.line} />
          </Col>
          <Col xs={7} className={styles.resp_img}>
            <Image src={design} alt="bubbl" />
          </Col>
        </Col>
      </div>
    </div>
  );
}
