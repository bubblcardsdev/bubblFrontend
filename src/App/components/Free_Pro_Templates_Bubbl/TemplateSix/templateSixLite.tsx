/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";

import Footer from "../../footer/footer";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContact from "../commonComponents/SaveContact/saveContact";
import SocialMediaInformation from "../commonComponents/SocialMediaBox/socialMedia";
import background from "../commonComponents/TemplateImages/Template06/banner/06profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
import Header from "./components/header";
import styles from "./templateSix.module.css";

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

function TemplateSixLite({
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
  profileImg,
  contacts,
  mediaArray,
  paymentArray,
  modeId,
  deviceId,
  plantId,
  primaryColor,
  logoUrl,
  secondaryColor,
  qrImageUrl,
  companyName,
  linkVal,
}: Props) {
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
          style={{ backgroundColor: "white" }}
        >
          <div className={styles.background_bg_img}>
            <div className={styles.user_temp}>
              {profileImg?.rectangle !== null &&
              profileImg?.rectangle !== undefined ? (
                <Image
                  alt="bubbl"
                  loader={({ src }) => src}
                  src={profileImg.rectangle}
                  width="480px"
                  height={800}
                />
              ) : (
                <div>
                  <Image src={background} alt="bubbl" />
                </div>
              )}
            </div>
            {/* <div className={styles.background_logo_curve}>
              <div
                style={{
                  maxWidth: "70px",
                  maxHeight: "70px",
                  paddingTop: "20px",
                }}
              >
                {!logoUrl ? (
                  <Image src={logo} />
                ) : (
                  <Image
                    loader={({ src }) => src}
                    src={logoUrl}
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </div> */}
          </div>

          <div
            className={styles.containerSix}
            style={{ backgroundColor: "white" }}
          >
            <div
              className={styles.background_logo_curve}
              style={{ top: "-80px" }}
            >
              <div
                style={{
                  maxWidth: "70px",
                  maxHeight: "70px",
                  // paddingTop: "20px",
                }}
              >
                {!logoUrl ? (
                  <Image src={logo} alt="bubbl" />
                ) : (
                  <Image
                    alt="bubbl"
                    loader={({ src }) => src}
                    src={logoUrl}
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </div>
            <div className={styles.userInfo}>
              <Header
                firstName={firstName}
                lastName={lastName}
                shortDescription={shortDescription}
                designation={designation}
                primaryColor={primaryColor || "#7349B7"}
                black={false}
              />
            </div>
            <div className={styles.saveContact_div}>
              <SaveContact
                black={false}
                saveTextBorderColor={primaryColor || "#7349B7"}
                saveTextFieldColor={primaryColor || "#7349B7"}
                saveTextBackColor="white"
                saveIconBorderColor={primaryColor || "#7349B7"}
                saveIconBackgroundColor={primaryColor || "#7349B7"}
                saveIconColor="white"
                deviceId={deviceId}
                fontSize="16px"
                fontWeight="700"
                firstName={firstName}
                lastName={lastName}
                phoneNumber={phoneNumber}
                emailId={emailId}
                website={website}
                contacts={contacts}
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
                accentColor={primaryColor || "#7349B7"}
                textColor="#090909"
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                contacts={contacts}
                fontWeight="400"
                fontSize="14px"
                secondaryColor={secondaryColor || "#EDE2FF"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#EDE2FF"}
                deviceId={deviceId}
              />
            </div>
            {modeId === 1 ? (
              <div />
            ) : (
              <>
                {socialMediaEnable ? (
                  <div className={styles.socialMedia_div}>
                    <h1
                      className={styles.social_headings}
                      style={{
                        color: "#090909",
                        fontSize: "20px",
                        fontWeight: "700",
                        margin: "0px 0px 30px 0px",
                      }}
                    >
                      Social Media
                    </h1>
                    <SocialMediaInformation
                      headFontSize="20px"
                      headFontWeight="700"
                      black={false}
                      mediaArray={mediaArray}
                      accentColor={primaryColor || "#7349B7"}
                      mediaIconColor="#FAFAFA"
                      mediaTextColor="#F6F6F6"
                      mediaArrowColor={secondaryColor || "#EDE2FF"}
                      textColor="#090909"
                      mobileEnable={mobileEnable}
                      emailEnable={emailEnable}
                      websiteEnable={websiteEnable}
                      contacts={contacts}
                      mediaHeadFontWeight="700"
                      mediaHeadFontSize="14px"
                      mediaLinkFontWeight="300"
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
                        marginBottom: "25px",
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
export default TemplateSixLite;
