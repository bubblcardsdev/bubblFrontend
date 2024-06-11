/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import FileSaver from "file-saver";
import Head from "next/head";
import Image from "next/image";
import { Col } from "react-bootstrap";

import Footer from "../../footer/footer";
import Payment from "../commonComponents/payments/payment";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMediaInformation from "../commonComponents/SocialMediaBox/socialMedia";
import bubble from "../commonComponents/TemplateImages/Template01/banner/bg_3x_crop.jpg";
import curve from "../commonComponents/TemplateImages/Template01/curve/bubbl_template_black.png";
import user from "../commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogowhite.svg";
import styles from "./templateOne.module.css";

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
  primaryColor: any;
  backColor: any;
  accentColor: any;
  profileImg: { square: string; rectangle: string } | null;
  contacts: any;
  mediaArray: any;
  paymentArray: any;
  modeId: any;
  deviceId: any;
  logoUrl: any;
  plantId: any;
  secondaryColor: any;
  qrImageUrl: any;
  companyName: any;
  linkVal: any;
}

export default function TemplateOneBlack({
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
  primaryColor,
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
  secondaryColor,
  qrImageUrl,
  companyName,
  linkVal,
}: any) {
  const borderVal = primaryColor || "#DE5D2E";
  return (
    <section className={styles.container}>
      <Head>
        <title>Bubbl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.banner}>
        <div className={styles.banner_details}>
          <Image src={bubble} alt="bubbl" className={styles.bubble_bg} />
          <div className={styles.background_curve}>
            <Image src={curve} alt="account" />
          </div>
          <div className={styles.header_image}>
            <div>
              {profileImg?.square !== null &&
              profileImg?.square !== undefined ? (
                <div
                  className={styles.profile_img_profile}
                  style={{
                    borderColor: accentColor,
                    zIndex: "1000",
                    position: "relative",
                  }}
                >
                  <Image
                    loader={({ src }) => src}
                    src={profileImg.square}
                    width={120}
                    height={120}
                    className={styles.live_img}
                    alt="bubbl"
                  />
                </div>
              ) : (
                <div
                  style={{
                    border: `3px solid ${borderVal}`,
                    position: "relative",
                    zIndex: "1000",
                    borderRadius: "13px",
                    height: "126px",
                  }}
                >
                  <Image
                    src={user}
                    alt="account"
                    className={styles.profile}
                    width={120}
                    height={120}
                  />
                </div>
              )}
            </div>
            <div>
              <div style={{ maxWidth: "90px", maxHeight: "90px" }}>
                {logoUrl ? (
                  <Image
                    alt="bubbl"
                    loader={({ src }) => src}
                    src={logoUrl}
                    width={100}
                    height={100}
                    className={styles.logo_brand}
                  />
                ) : (
                  <Image
                    src={logo}
                    alt="account"
                    className={styles.logo_brand}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.mobile_template}
          style={{ backgroundColor: backColor || "black" }}
        >
          <div className={styles.bubble_container}>
            <Col xl={12} sm={12} className={styles.header_details}>
              <Col className={styles.header_name}>
                <h2 style={{ color: primaryColor || "#DE5D2E" }}>
                  {firstName !== "" ? firstName : "Your Name"}
                </h2>
                <p style={{ color: "white" }}>
                  {designation !== "" ? designation : "Designation"}
                </p>
              </Col>
            </Col>
            <p className={styles.contact_paragraph} style={{ color: "white" }}>
              {shortDescription !== "" ? shortDescription : "Short Description"}
            </p>

            {/* Save Contact */}
            <div className={styles.contact_div}>
              <SaveContactNew
                black
                saveTextBorderColor={primaryColor || "#DE5D2E"}
                saveTextFieldColor={primaryColor || "#DE5D2E"}
                saveTextBackColor="black"
                saveIconBorderColor={primaryColor || "#DE5D2E"}
                saveIconBackgroundColor={primaryColor || "#DE5D2E"}
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
                profileImg={profileImg}
                companyName={companyName}
                designation={designation}
                mediaArray={mediaArray}
                linkVal={linkVal}
              />
            </div>
            <div className={styles.contact_info}>
              <ContactInformation
                headColor="#FFFFFF"
                headFontSize="20px"
                headFontWeight="700"
                black
                phoneNumber={phoneNumber}
                emailId={emailId}
                website={website}
                accentColor={primaryColor || "#DE5D2E"}
                backColor={backColor}
                textColor="#090909"
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                contacts={contacts}
                deviceId={deviceId}
                fontWeight="400"
                fontSize="14px"
                secondaryColor={secondaryColor || "#FFEBE3"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#FFEBE3"}
              />
            </div>
            {modeId === 1 ? null : (
              <>
                {socialMediaEnable ? (
                  <div className={styles.socialDiv}>
                    <h1
                      className={styles.social_headings}
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Social Media
                    </h1>
                    <SocialMediaInformation
                      headColor="#090909"
                      headFontSize="18px"
                      headFontWeight="700"
                      black
                      mediaArray={mediaArray}
                      accentColor={primaryColor || "#DE5D2E"}
                      mediaIconColor="#FAFAFA"
                      mediaTextColor="#F6F6F6"
                      mediaArrowColor="pink"
                      backColor={backColor}
                      textColor="white"
                      mobileEnable={mobileEnable}
                      emailEnable={emailEnable}
                      websiteEnable={websiteEnable}
                      contacts={contacts}
                      mediaHeadFontWeight="700"
                      mediaHeadFontSize="14px"
                      mediaLinkFontWeight="400"
                      mediaLinkFontSize="12px"
                      deviceId={deviceId}
                    />
                  </div>
                ) : null}
                <div className={styles.contact_info_payment}>
                  {digitalEnable ? (
                    <>
                      <h1
                        className={styles.payment_color}
                        style={{
                          color: "white",
                          marginBottom: "18px",
                          fontSize: "20px",
                          fontWeight: "700",
                        }}
                      >
                        Digital Payments
                      </h1>
                      <Payment payments={paymentArray} deviceId={deviceId} />
                    </>
                  ) : null}
                </div>
                <div>
                  <p style={{ visibility: "hidden", height: "50px" }}>l</p>
                </div>
              </>
            )}
          </div>
        </div>
        {plantId === 1 ? <Footer /> : null}
        <FooterBg />
      </div>
    </section>
  );
}
