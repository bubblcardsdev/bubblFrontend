/* eslint-disable prettier/prettier */
import Image from "next/image";
import { Col } from "react-bootstrap";

import networking from "../../../../images/Bubble-website_assets/future_of-networking/evolves_mockup_3x.png";
import styles from "./CreateProfile.module.css";

export default function Networking() {
  return (
    <section className={styles.networking}>
      <div className="container">
        <Col xl={12} md={12} className={styles.future}>
          <Col xl={6} lg={6} md={12} className={styles.networkingImage}>
            <Image src={networking} alt="bubbl" />
          </Col>
          <Col xl={5} lg={5} md={12} className={styles.futureNet}>
            <h2>Evolves, with You.</h2>
            <p>
              Your bubbl profile is fully customizable and always editable, so a
              change in your contact information doesn’t leave your card
              redundant.
            </p>
            <h4>
              Choose to share your contact information, phone number, watsApp
              Information{" "}
            </h4>
            <div className={styles.netgrid}>
              <div className={styles.netgrid_container}>
                <div className={styles.netgrid_item}>
                  <p>01</p>
                  <h5 className={styles.netgrid_cont}>E-Mail</h5>
                </div>
                <div className={styles.netgrid_item}>
                  <p>02</p>
                  <h5 className={styles.netgrid_cont}>Whatsapp</h5>
                </div>
                <div className={styles.netgrid_item}>
                  <p>03</p>
                  <h5 className={styles.netgrid_cont}>LinkedIn</h5>
                </div>
                <div className={styles.netgrid_item}>
                  <p>04</p>
                  <h5 className={styles.netgrid_cont}>Social Media</h5>
                </div>
                <div className={styles.netgrid_item}>
                  <p>05</p>
                  <h5 className={styles.netgrid_cont}>Contact Number</h5>
                </div>
                <div className={styles.netgrid_item}>
                  <p>06</p>
                  <h5 className={styles.netgrid_cont}>Website</h5>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </div>
    </section>
  );
}
