/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PostTapDetails } from "src/App/services/tapApi";

import Qr from "../../../../../images/qr_template.svg";
import SaveVCFContact from "../../../helpers/saveContactHelper";
import QRCodeModal from "../../CreateProfile/CreateTemplate/QRCode/qrCode";
import Footer from "../../footer/footer";
import ContactInformationIcon from "../commonComponents/ContactInformationIcon05/conatctInformationIcon";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SocialMedia05 from "../commonComponents/SocialMedia05/socialMedia05";
import banner from "../commonComponents/TemplateImages/Template05/banner/05profile_icon_3x.png";
import curve from "../commonComponents/TemplateImages/Template05/banner/mithun.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
import UserInfo from "./components/header";
import styles from "./templateFive.module.css";

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

function TemplateFiveLite({
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
  const title = "";
  const work = "";

  function getSocialMediaType(profileSocialMediaId: any) {
    if (profileSocialMediaId?.socialMediaName !== "") {
      switch (profileSocialMediaId?.profileSocialMediaId) {
        case 1:
          return "Instagram";
        case 2:
          return "Facebook";
        case 3:
          return "Twitter";
        case 4:
          return "Youtube";
        case 5:
          return "LinkedIn";
        default:
          return null;
      }
    }
  }

  function getSocialMediaName(profileSocialMediaId: any) {
    if (profileSocialMediaId?.profileSocialMediaId) {
      if (
        profileSocialMediaId?.socialMediaName.includes("https://") ||
        profileSocialMediaId?.socialMediaName.includes("http://")
      ) {
        switch (profileSocialMediaId.profileSocialMediaId) {
          case 1:
            return profileSocialMediaId?.socialMediaName;
          case 2:
            return profileSocialMediaId?.socialMediaName;
          case 3:
            return profileSocialMediaId?.socialMediaName;
          case 4:
            return profileSocialMediaId?.socialMediaName;
          case 5:
            return profileSocialMediaId?.socialMediaName;
          default:
            return null;
        }
      } else {
        switch (profileSocialMediaId.profileSocialMediaId) {
          case 1:
            return `https://instagram.com/${profileSocialMediaId?.socialMediaName}`;
          case 2:
            return `https://www.facebook.com/${profileSocialMediaId?.socialMediaName}`;

          case 3:
            return `https://twitter.com/${profileSocialMediaId?.socialMediaName}`;
          case 4:
            return `https://youtube.com/@${profileSocialMediaId?.socialMediaName}`;
          case 5:
            return `https://linkedin.com/in/${profileSocialMediaId?.socialMediaName}`;
          default:
            return null;
        }
      }
    }
  }
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async (e: any) => {
    const vcfdata = await SaveVCFContact(
      firstName,
      lastName,
      companyName,
      designation,
      phoneNumber,
      profileImg,
      contacts,
      mediaArray,
      website,
      emailId,
      deviceId,
      contacts.state,
      contacts.city,
      contacts?.address,
      contacts.country,
      "1"
    );

    const file = new Blob([vcfdata], { type: "text/vcard" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "contact.vcf");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  const handleClickEvent = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton={false} style={{ backgroundColor: "black" }}>
          <Modal.Title style={{ color: "white" }}>Qr Code</Modal.Title>
          <Button
            className="custom-close-button"
            onClick={handleClose}
            style={{ background: "transparent", border: "0" }}
          >
            X
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <QRCodeModal deviceIdQR={linkVal} qrImageUrl={qrImageUrl} />
        </Modal.Body>
      </Modal>
      <Head>
        <title>Bubbl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        <div
          className={styles.mobile_template}
          style={{ backgroundColor: backColor }}
        >
          <div className={styles.background_temp}>
            <div>
              {profileImg?.rectangle !== null &&
              profileImg?.rectangle !== undefined ? (
                <div className={styles.long_banner}>
                  <Image
                    loader={({ src }) => src}
                    src={profileImg.rectangle}
                    alt="account"
                    width="480px"
                    height={800}
                  />
                </div>
              ) : (
                <Image src={banner} width="480px" height={856} alt="bubbl" />
              )}
            </div>
            <div className={styles.userInfo_seven}>
              <UserInfo
                firstName={firstName}
                lastName={lastName}
                emailId={emailId}
                phoneNumber={phoneNumber}
                contacts={contacts}
                designation={designation}
                black={false}
                primaryColor={primaryColor || "#BC5B9C"}
                secondaryColor={secondaryColor || "#FFE2F5"}
                shortDescription={shortDescription}
              />
            </div>
            <div className={styles.curve}>
              <Image src={curve} alt="bubbl" />
              <div
                style={{ maxWidth: "70px", maxHeight: "70px" }}
                className={styles.logo}
              >
                {logoUrl ? (
                  <Image
                    loader={({ src }) => src}
                    src={logoUrl}
                    width={100}
                    alt="bubbl"
                    height={100}
                    className={styles.logo_brand}
                  />
                ) : (
                  <Image src={logo} alt="logo" className={styles.logo_brand} />
                )}
              </div>
            </div>
          </div>

          <div className={styles.containerSeven}>
            <div className={styles.totalContainer}>
              <div className={styles.contact_btns}>
                <div className={styles.saveContact}>
                  <Button
                    className={styles.saveConBtn}
                    onClick={(e: any) => {
                      handleClick(e);
                      handleClickEvent(3);
                    }}
                    style={{
                      backgroundColor: primaryColor || "#BC5B9C",
                      color: "white",
                    }}
                  >
                    Save Contact
                  </Button>
                  <Button
                    onClick={(e: any) => {
                      handleShow();
                      handleClickEvent(3);
                    }}
                    type="button"
                    className={styles.savePhoneBtn}
                    style={{
                      backgroundColor: primaryColor || "#BC5B9C",
                    }}
                  >
                    <Image
                      src={Qr}
                      alt="bubbl"
                      width={25}
                      height={25}
                      className={styles.qr}
                    />
                  </Button>
                </div>
              </div>
              <div className={styles.contact_info}>
                <ContactInformationIcon
                  headColor="#090909"
                  headFontSize="20px"
                  headFontWeight="700"
                  black={false}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  backColor={backColor}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  contacts={contacts}
                />
              </div>
              {modeId === 1 ? (
                <div style={{ paddingBottom: "80px" }} />
              ) : (
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {socialMediaEnable ? (
                      <SocialMedia05
                        headColor="#090909"
                        mediaArray={mediaArray}
                        deviceId={deviceId}
                      />
                    ) : null}
                  </div>
                  <div>
                    {digitalEnable ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div>
                          <h1
                            style={{
                              color: "#090909",
                              fontSize: "20px",
                              fontWeight: "700",
                              marginBottom: "18px",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            Digital Payments
                          </h1>

                          <Payment
                            payments={paymentArray}
                            deviceId={deviceId}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <p style={{ visibility: "hidden", height: "50px" }}>l</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {plantId === 1 ? <Footer /> : null}
        <FooterBg />
      </section>
    </>
  );
}
export default TemplateFiveLite;
