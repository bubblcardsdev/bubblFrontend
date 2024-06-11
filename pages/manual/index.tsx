/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

import insta from "../../images/Phase_2_All_Assets/comman_assets/insta.svg";
import linkdin from "../../images/Phase_2_All_Assets/comman_assets/linkdin.svg";
import slash from "../../images/Phase_2_All_Assets/comman_assets/slash.svg";
import one from "../../images/Phase_2_All_Assets/manual_assets/1.png";
import two from "../../images/Phase_2_All_Assets/manual_assets/2.png";
import three from "../../images/Phase_2_All_Assets/manual_assets/3.png";
import four from "../../images/Phase_2_All_Assets/manual_assets/4.png";
import five from "../../images/Phase_2_All_Assets/manual_assets/5.png";
import six from "../../images/Phase_2_All_Assets/manual_assets/6.png";
import one1 from "../../images/Phase_2_All_Assets/manual_assets/Asset 1@1000x.png";
import two2 from "../../images/Phase_2_All_Assets/manual_assets/Asset 2@1000x.png";
import three3 from "../../images/Phase_2_All_Assets/manual_assets/Asset 3@1000x.png";
import four4 from "../../images/Phase_2_All_Assets/manual_assets/Asset 4@1000x.png";
import five5 from "../../images/Phase_2_All_Assets/manual_assets/Asset 5@1000x.png";
import six6 from "../../images/Phase_2_All_Assets/manual_assets/Asset 6@1000x.png";
import ManualImg from "../../images/Phase_2_All_Assets/manual_assets/banner.png";
import logo from "../../images/Phase_2_All_Assets/manual_assets/logo.svg";
import styles from "./index.module.css";

function Manual() {
  return (
    <>
      {/* Desktop */}
      <section className={styles.manualDesk}>
        <div>
          <Image src={ManualImg} alt="Manual" className={styles.ManualImg} />
        </div>
        <div className={styles.footerManual}>
          <div className={styles.ManualImg}>
            <div>
              <Image src={insta} alt="insta" />
            </div>
            <div>
              <Image src={slash} alt="slash" />
            </div>
            <div>
              <Image src={linkdin} alt="linkdin" />
            </div>
            <div className={styles.DownLink}>
              <Link href="https://bubbl.cards/" target="_blank">
                - &nbsp;bubbl.cards
              </Link>
            </div>
          </div>
          <div className={styles.footer_style_text}>
            <p> powered by: xpulsar technologies pvt. ltd</p>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className={styles.manualMobile}>
        <div className={styles.Logo}>
          <Image src={logo} alt="logo" />
        </div>

        {/* 1 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={one}
                alt="1"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={two2} alt="2" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Login / Create Your Account</h1>
            <p>
              If you're new to our platform, begin by creating your account.
              Upon registration, you'll receive a verification email. Please
              verify your email address to activate your account and proceed
              with logging in.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={two}
                alt="2"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={five5} alt="5" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Create a New Profile</h1>
            <p>
              Click on the "New Profile" button below to initiate the profile
              creation process. You will be redirected to a page dedicated to
              setting up your new profile.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={three}
                alt="3"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={four4} alt="4" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Profile Setup</h1>
            <p>
              Provide the necessary details to complete your profile setup. This
              includes personal information such as your name, contact details,
              and any additional information required for customization.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={four}
                alt="4"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={three3} alt="3" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Link Your Device</h1>
            <p>
              If you're new to our platform, begin by creating your account.
              Upon registration, you'll receive a verification email. Please
              verify your email address to activate your account and proceed
              with logging in.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={five}
                alt="5"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={one1} alt="1" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Customize Profile Name</h1>
            <p>
              Choose a unique name for your profile. This name will identify
              your profile across various devices and platforms, facilitating
              easy switching and recognition.
            </p>
          </div>
        </div>
        {/* 6 */}
        <div className={styles.MobileSec}>
          <div className={styles.Man1}>
            <div>
              <Image
                src={six}
                alt="6"
                width={33}
                height={33}
                className={styles.numberText}
              />
            </div>
            <div className={styles.PhoneImg}>
              <Image src={six6} alt="6" />
            </div>
          </div>
          <div className={styles.textColors}>
            <h1>Profile Management</h1>
            <p>
              Enjoy the flexibility of editing and saving your profile
              information at any time. Update your details or preferences to
              reflect changes in your profile.
            </p>
          </div>
        </div>
        <div className={styles.footerManual}>
          <div className={styles.footer_style}>
            <div>
              <Link
                href="https://www.instagram.com/bubbl.cards?igsh=MW9lZTM4MWg1d25kNw=="
                target="_blank"
              >
                <Image src={insta} alt="insta" />
              </Link>
            </div>
            <div>
              <Image src={slash} alt="slash" />
            </div>
            <div>
              {/* <Link href="" target="_blank"> */}
              <Image src={linkdin} alt="linkdin" />
              {/* </Link> */}
            </div>

            <div className={styles.DownLink}>
              <Link href="https://bubbl.cards/" target="_blank">
                - &nbsp;bubbl.cards
              </Link>
            </div>
          </div>
          <div className={styles.footer_style_text}>
            <p> powered by: xpulsar technologies pvt. ltd</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Manual;
