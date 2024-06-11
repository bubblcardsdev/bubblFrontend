/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { Col } from "react-bootstrap";

import img3 from "../../../../images/Bubble-website_assets/create_profile/android-and-ios-icon.svg";
import img1 from "../../../../images/Bubble-website_assets/create_profile/app-icon.svg";
import img4 from "../../../../images/Bubble-website_assets/create_profile/built-icon.svg";
import img2 from "../../../../images/Bubble-website_assets/create_profile/card-icon.svg";
import mockup from "../../../../images/Bubble-website_assets/create_profile/create_profile_mockup3x.png";
import img6 from "../../../../images/Bubble-website_assets/create_profile/editable-icon.svg";
import img5 from "../../../../images/Bubble-website_assets/create_profile/infinit-icon.svg";
import profile from "../../../../images/Bubble-website_assets/semicircle.png";
import styles from "./CreateProfile.module.css";

export default function CreateProfileSection() {
  return (
    <section
      className={styles.profile}
      style={{
        backgroundImage: `url(${profile.src})`,
      }}
    >
      <div className="container">
        <Col xl={12} className={styles.semicirclesection}>
          <Col xl={4} className={styles.workplay}>
            <p className={styles.heading}>Work.</p>
            <p className={styles.heading}>Play.</p>
            <p className={styles.heading}>Grow.</p>
            <p className={styles.everything}>
              Everything <br /> Gets Better Together
            </p>
          </Col>
          <Col xl={3} className={styles.work_image}>
            <Image src={mockup} alt="bubbl" />
          </Col>
          <Col xl={4} className={styles.grids}>
            <div className={styles.grid_container}>
              <div className={styles.grid_item}>
                <Image src={img1} alt="bubbl" />
                <p className={styles.grid_cont}>
                  App-Free
                  <br />
                  Experience
                </p>
              </div>
              <div className={styles.grid_item}>
                <Image src={img2} alt="bubbl" />
                <p className={styles.grid_cont}>
                  One Card does
                  <br />
                  Everything
                </p>
              </div>
              <div className={styles.grid_item}>
                <Image src={img3} alt="bubbl" />
                <p className={styles.grid_cont}>
                  Cross Platform
                  <br />
                  (Android & iOS)
                </p>
              </div>
              <div className={styles.grid_item}>
                <Image src={img4} alt="bubbl" />
                <p className={styles.grid_cont}>
                  Data Protected by
                  <br />
                  AWS Security
                </p>
              </div>
              <div className={styles.grid_item}>
                <Image src={img5} alt="bubbl" />
                <p className={styles.grid_cont}>Infinite Taps</p>
              </div>
              <div className={styles.together}>
                <div className={styles.grid_item}>
                  <Image src={img6} alt="bubbl" />
                  <p className={styles.grid_cont}>
                    Personalized <br />
                    Aesthetics
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </div>

      {/* Responsive */}
      <div className={styles.violet}>
        <p>Work. Play. Grow.</p>
      </div>
      <div className={styles.getsbetter}>
        <div className="container">
          <h4>
            Everything <br />
            Gets Better Together
          </h4>
          <div className={styles.together}>
            <div className={styles.grid_item}>
              <Image src={img1} alt="bubbl" />
              <p className={styles.grid_cont}>
                App-Free
                <br />
                Experience
              </p>
            </div>
            <div className={styles.grid_item}>
              <Image src={img2} alt="bubbl" />
              <p className={styles.grid_cont}>
                One Card does
                <br />
                Everything
              </p>
            </div>
            <div className={styles.grid_item}>
              <Image src={img3} alt="bubbl" />
              <p className={styles.grid_cont}>
                Cross Platform
                <br />
                (Android & iOS)
              </p>
            </div>
          </div>
          <div className={styles.together}>
            <div className={styles.grid_item}>
              <Image src={img4} alt="bubbl" />
              <p className={styles.grid_cont}>
                Data Protected <br />
                by
                <br />
                AWS Security
              </p>
            </div>
            <div className={styles.grid_item}>
              <Image src={img5} alt="bubbl" />
              <p className={styles.grid_cont}>Infinite Taps</p>
            </div>
            <div className={styles.grid_item}>
              <Image src={img6} alt="bubbl" />
              <p className={styles.grid_cont}>
                Personalized <br />
                Aesthetics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
