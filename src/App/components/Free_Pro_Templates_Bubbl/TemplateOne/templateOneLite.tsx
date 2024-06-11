/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Col } from "react-bootstrap";

import Footer from "../../footer/footer";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMediaInformation from "../commonComponents/SocialMediaBox/socialMedia";
import bubble from "../commonComponents/TemplateImages/Template01/banner/bg_3x_crop.jpg";
import curve from "../commonComponents/TemplateImages/Template01/curve/bg3xP_curve.png";
import user from "../commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
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
  qrImageUrl: any;
  companyName: any;
  linkVal: any;
}

export default function TemplateOneLite({
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
          <Image src={bubble} alt="bubbl" />
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
                    borderColor: primaryColor,
                    zIndex: "1000",
                    position: "relative",
                  }}
                >
                  <Image
                    alt="bubbl"
                    loader={({ src }) => src}
                    src={profileImg.square}
                    width={120}
                    height={120}
                    className={styles.live_img}
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
                    className={styles.logo_brand}
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image src={logo} alt="logo" className={styles.logo_brand} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.mobile_template}
          style={{ backgroundColor: "white" }}
        >
          <div className={styles.bubble_container}>
            <Col xl={12} sm={12} className={styles.header_details}>
              <Col className={styles.header_name}>
                <h2 style={{ color: primaryColor || "#DE5D2E" }}>
                  {firstName !== "" ? firstName : "Your Name"}
                </h2>
                <p style={{ color: "#090909" }}>
                  {designation !== "" ? designation : "Designation"}
                </p>
              </Col>
            </Col>
            <p
              className={styles.contact_paragraph}
              style={{ color: "#090909" }}
            >
              {shortDescription !== "" ? shortDescription : "Short Description"}
            </p>
            {/* Save Contact  */}
            <div className={styles.contact_div}>
              <SaveContactNew
                black={false}
                saveTextBorderColor={primaryColor || "#DE5D2E"}
                saveTextFieldColor={primaryColor || "#DE5D2E"}
                saveTextBackColor="white"
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
                linkVal={linkVal}
                qrImageUrl={qrImageUrl}
                mediaArray={mediaArray}
                profileImg={profileImg}
                companyName={companyName}
                designation={designation}
              />
            </div>
            {/* Contact Information Component */}
            <div className={styles.contact_info}>
              <ContactInformation
                headColor="#090909"
                headFontSize="20px"
                headFontWeight="700"
                black={false}
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
                fontWeight="500"
                fontSize="14px"
                secondaryColor={secondaryColor || "#FFEBE3"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#FFEBE3"}
                deviceId={deviceId}
              />
            </div>
            {/* if mode id is 1 means , it shows only contact information */}
            {modeId === 1 ? null : (
              <>
                {socialMediaEnable ? (
                  <div className={styles.socialDiv}>
                    <h1
                      className={styles.social_headings}
                      style={{
                        color: "#090909",
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
                      black={false}
                      mediaArray={mediaArray}
                      accentColor={primaryColor || "#DE5D2E"}
                      mediaIconColor="#FAFAFA"
                      mediaTextColor="#F6F6F6"
                      mediaArrowColor={secondaryColor || "#FFEBE3"}
                      backColor={backColor}
                      textColor="#090909"
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
                {/* Payments  */}
                <div className={styles.contact_info_payment}>
                  {digitalEnable ? (
                    <>
                      <h1
                        className={styles.payment_color}
                        style={{
                          color: "#090909",
                          fontSize: "20px",
                          fontWeight: "700",
                          marginBottom: "18px",
                        }}
                      >
                        Digital Payments
                      </h1>
                      <Payment payments={paymentArray} deviceId={deviceId} />
                      {/* QR Code */}
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
