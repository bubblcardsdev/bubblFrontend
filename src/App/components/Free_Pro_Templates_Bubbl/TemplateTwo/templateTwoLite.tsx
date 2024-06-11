/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "src/App/components/footer/footer";

import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContact from "../commonComponents/SaveContact/saveContact";
import SocialMediaInformation from "../commonComponents/SocialMediaBox/socialMedia";
import background from "../commonComponents/TemplateImages/Template02/background/bg.png";
import user from "../commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
// import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/tn.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
import Header from "./components/header";
import styles from "./templateTwo.module.css";

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
export default function TemplateTwoLite({
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
  contacts,
  backColor,
  profileImg,
  mediaArray,
  paymentArray,
  deviceId,
  modeId,
  plantId,
  secondaryColor,
  primaryColor,
  logoUrl,
  qrImageUrl,
  companyName,
  linkVal,
}: Props) {
  const InstafilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 1
  );
  const linkedInFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 5
  );
  const twitterFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 3
  );
  const FbFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 2
  );
  const youtubeFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 4
  );

  const borderVal = primaryColor || "white";
  // function for replace the + for location
  const updateAddress = contacts?.address;
  let val2 = "";
  if (updateAddress) {
    const val = updateAddress.replace(/ /g, "+");
    val2 = val.replace(/,/g, "");
  }

  // function for save contact onCLick
  const title = "";
  const work = "";
  return (
    <>
      <Head>
        <title>Bubbl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.container}>
        <div
          className={styles.mobile_template}
          style={{ background: backColor }}
        >
          <div className={styles.background_bg_img}>
            <Image src={background} />
            <div className={styles.background_section}>
              <div className={styles.background_curve}>
                <div
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
                  }}
                >
                  {!logoUrl ? (
                    <Image
                      loader={({ src }) => src}
                      src={logo}
                      width={100}
                      height={100}
                      alt="bubbl"
                    />
                  ) : (
                    <Image
                      loader={({ src }) => src}
                      src={logoUrl}
                      width={100}
                      height={100}
                      alt="bubbl"
                    />
                  )}
                </div>
              </div>
              <div className={styles.user_temp}>
                {profileImg?.square !== null &&
                profileImg?.square !== undefined ? (
                  <div
                    className={styles.profile_img_profile}
                    style={{ borderColor: primaryColor }}
                  >
                    <Image
                      alt="bubbl"
                      loader={({ src }) => src}
                      src={profileImg.square}
                      width={150}
                      height={150}
                      className={styles.profileImg}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      border: `6px solid ${borderVal}`,
                      position: "relative",
                      zIndex: "1000",
                      borderRadius: "50%",
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={user}
                      alt="account"
                      width={120}
                      height={120}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* end */}
          <div className={styles.containerTwo}>
            <div className={styles.userInfo}>
              <Header
                firstName={firstName}
                lastName={lastName}
                shortDescription={shortDescription}
                designation={designation}
                textColor={primaryColor || "#ECB526"}
                paddingTop="24px"
              />
            </div>
            <div>
              <SaveContact
                black={false}
                saveTextBorderColor={primaryColor || "#ECB526"}
                saveTextFieldColor={primaryColor || "#ECB526"}
                saveTextBackColor="white"
                saveIconBorderColor={primaryColor || "#ECB526"}
                saveIconBackgroundColor={primaryColor || "#ECB526"}
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
            <div className={styles.contact_div}>
              <ContactInformation
                headColor="#090909"
                headFontSize="20px"
                headFontWeight="700"
                black={false}
                phoneNumber={phoneNumber}
                emailId={emailId}
                website={website}
                accentColor={primaryColor || "#ECB526"}
                backColor={backColor}
                textColor="#090909"
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                contacts={contacts}
                fontWeight="500"
                fontSize="14px"
                secondaryColor={secondaryColor || "#FFF7E2"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#FFF7E2"}
                deviceId={deviceId}
              />
            </div>
            {modeId === 1 ? (
              <div style={{ paddingBottom: "80px" }} />
            ) : (
              <>
                {/* Social Media  */}
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
                      headFontSize="20px"
                      headFontWeight="700"
                      black={false}
                      mediaArray={mediaArray}
                      accentColor={primaryColor || "#ECB526"}
                      mediaIconColor="#FAFAFA"
                      mediaTextColor="#F6F6F6"
                      mediaArrowColor={secondaryColor || "#FFF7E2"}
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

                {/* Digital Payments */}
                {digitalEnable ? (
                  <>
                    <h1
                      className={styles.payment_color}
                      style={{
                        color: "#090909",

                        fontWeight: "700",
                        marginBottom: "18px",
                        marginTop: "30px",
                        fontSize: "20px",
                        textTransform: "capitalize",
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
    </>
  );
}
