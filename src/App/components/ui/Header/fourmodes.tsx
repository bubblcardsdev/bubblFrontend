/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import phoneTwo from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Four-Modes/02@3x.svg";
import phoneone from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Four-Modes/mobile1.svg";
import phoneThree from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Four-Modes/mobile3.svg";
import phoneFour from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Four-Modes/mobile4.svg";
import phoneFive from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Four-Modes/mobile5.svg";
import styles from "./header.module.css";

function Fourmodes() {
  const PlanBenefits = [
    { id: "1", plan: "3 Templates with 1 URL" },
    { id: "2", plan: "3 Variation (for each template)" },
    { id: "3", plan: "1 card with 1 Unique URL" },
    { id: "4", plan: "4 Modes" },
  ];
  const FreePlan = [
    { id: "1", plan: "3 Templates" },
    { id: "2", plan: "1  card with 1 Unique URL" },
  ];
  return (
    <div className="container">
      <h3 className={styles.upgrade}>Four Modes</h3>
      <div className={styles.current_plan}>
        <span>Modes you can experience with pro plan</span>
      </div>
      <div className={styles.fourModes}>
        <div className={styles.grid}>
          <Image src={phoneone} alt="bubbl" />
          <div className={styles.cardRight}>
            <h2 className={styles.cardHead}>Contact Card</h2>
            <p className={styles.cardContent}>
              Share your contact details and links to your website, all of your
              social channels.
            </p>
            {/* <div className={styles.vector}>
              <p className={styles.trymode}>TRY MODE</p>
              <Image src={vector} alt="bubbl"/>
            </div> */}
          </div>
        </div>
        <div className={styles.grid}>
          <Image src={phoneTwo} alt="bubbl" />
          <div className={styles.cardRight}>
            <h2 className={styles.cardHead}>Bubbl Profile</h2>
            <p className={styles.cardContent}>
              Your own personal profile page, customizable with the teams
              package add-on.
            </p>
            {/* <div className={styles.vector}>
              <p className={styles.trymode}>TRY MODE</p>
              <Image src={vector} alt="bubbl"/>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.fourModes}>
        <div className={styles.grid}>
          <Image src={phoneFive} alt="bubbl" />
          <div className={styles.cardRight}>
            <h2 className={styles.cardHead}>Direct URL</h2>
            <p className={styles.cardContent}>
              Send people straight to your website, download link, presentation
              or calendly.
            </p>
            {/* <div className={styles.vector}>
              <p className={styles.trymode}>TRY MODE</p>
              <Image src={vector} alt="bubbl"/>
            </div> */}
          </div>
        </div>
        <div className={styles.grid}>
          <Image src={phoneThree} alt="bubbl" />
          <div className={styles.cardRight}>
            <h2 className={styles.cardHead}>Lead Form</h2>
            <p className={styles.cardContent}>
              Send lead automatically to your CRM or any of the 3,000 connected
              apps.
            </p>
            {/* <div className={styles.vector}>
              <p className={styles.trymode}>TRY MODE</p>
              <Image src={vector} alt="bubbl"/>
            </div> */}
          </div>
        </div>
      </div>

      {/* Carousel Responsive */}

      <div className="carousel_responsive">
        <Carousel className={styles.carousel_bg} controls={false}>
          <Carousel.Item>
            <div className={styles.carousel_img}>
              <Image src={phoneone} alt="bubbl" />
            </div>

            <Carousel.Caption className={styles.carousel_content}>
              <h3>Contact Card</h3>
              <p>
                Share your contact details and links to your website, all of
                your social channels.
              </p>
              <button className={styles.try_now}>
                {/* TRY MODE <Image src={vector} alt="bubbl"/> */}
              </button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.carousel_img}>
              <Image src={phoneTwo} alt="bubbl" />
            </div>
            <Carousel.Caption className={styles.carousel_content}>
              <h3>Bubbl Profile</h3>
              <p>
                Your own personal profile page, customizable with the teams
                package add-on.
              </p>
              <button className={styles.try_now}>
                {/* TRY MODE <Image src={vector} /> */}
              </button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.carousel_img}>
              <Image src={phoneFive} alt="bubbl" />
            </div>
            <Carousel.Caption className={styles.carousel_content}>
              <h3>Direct URL</h3>
              <p>
                Send people straight to your website, download link,
                presentation or calendly.
              </p>
              <button className={styles.try_now}>
                {/* TRY MODE <Image src={vector} /> */}
              </button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.carousel_img}>
              <Image src={phoneThree} alt="bubbl" />
            </div>
            <Carousel.Caption className={styles.carousel_content}>
              <h3>Lead Form</h3>
              <p>
                Send lead automatically to your CRM or any of the 3,000
                connected apps.
              </p>
              <button className={styles.try_now}>
                {/* TRY MODE <Image src={vector} /> */}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Fourmodes;
