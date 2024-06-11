/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";

import Footer from "../../footer/footer";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMedia07 from "../commonComponents/SocialMedia07/socialMedia07";
import background from "../commonComponents/TemplateImages/Template07/templete_8_bg_2x.png";
import user from "../commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
import Header from "./components/header";
import styles from "./templateSevenNew.module.css";

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
  textColor: any;
  accentColor: any;
  qrImageUrl: any;
  companyName: any;
  linkVal: any;
}

function TemplateSevenBlackNew({
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
  textColor,
  accentColor,
  profileImg,
  contacts,
  mediaArray,
  paymentArray,
  modeId,
  deviceId,
  plantId,
  logoUrl,
  primaryColor,
  secondaryColor,
  qrImageUrl,
  companyName,
  linkVal,
}: Props) {
  const arrowAccentColors = accentColor || "#FFFFFF"; // setting arrow color
  const textColors = textColor; // setting text color
  const socialTextColor = textColor || "#FFFFFF";

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
          style={{ backgroundColor: "black" }}
        >
          <div className={styles.background_bg_img}>
            <Image src={background} alt="bubbl" />
            <div className={styles.background_section}>
              <div className={styles.background_curve}>
                <div
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
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
              <div className={styles.user_temp}>
                {profileImg?.square !== null &&
                profileImg?.square !== undefined ? (
                  <div className={styles.profile_img_profile}>
                    <Image
                      alt="bubbl"
                      loader={({ src }) => src}
                      src={profileImg.square}
                      width={120}
                      height={120}
                      style={{ borderRadius: "10%" }}
                    />
                  </div>
                ) : (
                  <div>
                    <Image
                      alt="bubbl"
                      src={user}
                      width={180}
                      height={180}
                      style={{ borderRadius: "10%" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.containerSix}>
            <div className={styles.userInfo}>
              <Header
                firstName={firstName}
                lastName={lastName}
                shortDescription={shortDescription}
                designation={designation}
                textColor={textColor || "#287365"}
                black
              />
            </div>
            <div className={styles.saveContact_div}>
              <SaveContactNew
                black
                saveTextBorderColor={primaryColor || "#287365"}
                saveTextFieldColor={primaryColor || "#287365"}
                saveTextBackColor="black"
                saveIconBorderColor={primaryColor || "#287365"}
                saveIconBackgroundColor={primaryColor || "#287365"}
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
                headColor="white"
                headFontSize="20px"
                headFontWeight="700"
                black
                phoneNumber={phoneNumber}
                emailId={emailId}
                website={website}
                accentColor={primaryColor || "#287365"}
                textColor="#090909"
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                contacts={contacts}
                fontWeight="400"
                fontSize="14px"
                secondaryColor={secondaryColor || "#E2FFFA"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#E2FFFA"}
                deviceId={deviceId}
              />
            </div>

            {modeId === 1 ? (
              <div style={{ paddingBottom: "80px" }} />
            ) : (
              <>
                {socialMediaEnable ? (
                  <SocialMedia07
                    headColor="white"
                    color="#503F4A"
                    accentColor={accentColor || "#503F4A"}
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
          <div>
            <p style={{ visibility: "hidden", height: "50px" }}>l</p>
          </div>
        </div>
        {plantId === 1 ? <Footer /> : null}
        <FooterBg />
      </section>
    </>
  );
}
export default TemplateSevenBlackNew;
