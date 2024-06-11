/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import FileSaver from "file-saver";
import Head from "next/head";
import Image from "next/image";
import { Col } from "react-bootstrap";

import Footer from "../../footer/footer";
import ContactInformationIcon from "../commonComponents/ContactInformationIcon04/conatctInformationIcon";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMedia04 from "../commonComponents/SocialMedia04/socialMedia04";
import curve from "../commonComponents/TemplateImages/Template01/curve/bubbl_template_black.png";
import banner from "../commonComponents/TemplateImages/Template04/banner/04profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogowhite.svg";
import tick from "../commonComponents/TemplateImages/TemplateCommanAsstes/tick/tick.svg";
import styles from "./templateFour.module.css";

interface Props {
  firstName: any;
  lastName: any;
  phoneNumber: any;
  emailId: any;
  website: any;
  shortDescription: any;
  designation: any;
  mobileEnable: any;
  emailEnable: any;
  websiteEnable: any;
  digitalEnable: any;
  socialMediaEnable: any;
  backColor: any;
  profileImg: { square: string; rectangle: string } | null;
  contacts: any;
  mediaArray: any;
  paymentArray: any;
  modeId: any;
  deviceId: any;
  logoUrl: any;
  plantId: any;
  primaryColor: any;
  secondaryColor: any;
  accentColor: any;
  qrImageUrl: any;
  companyName: any;
  linkVal: any;
}

export default function TemplateFourBlack({
  firstName,
  lastName,
  phoneNumber,
  emailId,
  website,
  shortDescription,
  designation,
  mobileEnable,
  emailEnable,
  websiteEnable,
  digitalEnable,
  socialMediaEnable,
  backColor,
  accentColor,
  profileImg,
  contacts,
  mediaArray,
  paymentArray,
  modeId,
  deviceId,
  logoUrl,
  plantId,
  primaryColor,
  secondaryColor,
  qrImageUrl,
  companyName,
  linkVal,
}: Props) {
  const title = "";
  const work = "";

  return (
    <section className={styles.container}>
      <Head>
        <title>Bubbl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.mobile_template}
        style={{ backgroundColor: "black" }}
      >
        <div className={styles.banner_details}>
          {profileImg?.rectangle !== null &&
          profileImg?.rectangle !== undefined ? (
            <div className={styles.long_banner}>
              <Image
                loader={({ src }) => src}
                src={profileImg.rectangle}
                width="480px"
                height={800}
                alt="bubbl"
              />
            </div>
          ) : (
            <Image src={banner} alt="banner" />
          )}

          <div className={styles.background_curve}>
            <Image src={curve} alt="account" />
          </div>
          <div className={styles.header_image}>
            <div>
              <div style={{ maxWidth: "70px", maxHeight: "70px" }}>
                {logoUrl ? (
                  <Image
                    loader={({ src }) => src}
                    src={logoUrl}
                    alt="bubbl"
                    width={100}
                    height={100}
                    className={styles.logo_brand}
                  />
                ) : (
                  <Image src={logo} alt="logo" className={styles.logo_brand} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bubble_container}>
          <Col xl={12} sm={12} className={styles.header_details}>
            <Col className={styles.header_name}>
              <div className={styles.title}>
                <h2 style={{ color: primaryColor || "#FB6574" }}>
                  {firstName !== "" ? firstName : "Your Name"}
                </h2>
                &nbsp;
                <div className={styles.tick}>
                  <Image src={tick} alt="bubbl"/>
                </div>
              </div>

              <p style={{ color: "white" }}>
                {designation !== "" ? designation : "Designation"}
              </p>
            </Col>
          </Col>
          <p className={styles.contact_paragraph} style={{ color: "white" }}>
            {shortDescription !== "" ? shortDescription : "short Description"}
          </p>

          {/* Save Contact  */}
          <div className={styles.contact_div}>
            <SaveContactNew
              black
              saveTextBorderColor={primaryColor || "#FB6574"}
              saveTextFieldColor={primaryColor || "#FB6574"}
              saveTextBackColor="black"
              saveIconBorderColor={primaryColor || "#FB6574"}
              saveIconBackgroundColor={primaryColor || "#FB6574"}
              saveIconColor="white"
              fontSize="16px"
              fontWeight="700"
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
              emailId={emailId}
              website={website}
              contacts={contacts}
              deviceId={deviceId}
              qrImageUrl={qrImageUrl}
              companyName={companyName}
              designation={designation}
              mediaArray={mediaArray}
              linkVal={linkVal}
              profileImg={profileImg}
            />
          </div>

          {/* Contact Information Component */}
          <div className={styles.contact_info}>
            <ContactInformationIcon
              headColor="white"
              headFontSize="20px"
              headFontWeight="700"
              black
              phoneNumber={phoneNumber}
              emailId={emailId}
              website={website}
              mobileEnable={mobileEnable}
              emailEnable={emailEnable}
              websiteEnable={websiteEnable}
              contacts={contacts}
              deviceId={deviceId}
            />
          </div>
          {/* if mode id is 1 means , it shows only contact information */}
          {modeId === 1 ? (
            <div style={{ paddingBottom: "80px" }} />
          ) : (
            <>
              {socialMediaEnable ? (
                <SocialMedia04
                  headColor="white"
                  mediaArray={mediaArray}
                  deviceId={deviceId}
                />
              ) : null}
              {digitalEnable ? (
                <>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "700",
                      marginBottom: "18px",
                    }}
                  >
                    Digital Payments
                  </h1>

                  <Payment payments={paymentArray} deviceId={deviceId} />
                </>
              ) : null}

              <div>
                <p style={{ visibility: "hidden", height: "50px" }}>l</p>
              </div>
            </>
          )}
        </div>
      </div>
      {plantId === 1 ? <Footer /> : null}
      <FooterBg />
    </section>
  );
}
