/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
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

function TemplateSevenLiteNew({
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
  accentColor,
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
        <div className={styles.mobile_template}>
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
                black={false}
              />
            </div>
            <div className={styles.saveContact_div}>
              <SaveContactNew
                black={false}
                saveTextBorderColor={primaryColor || "#287365"}
                saveTextFieldColor={primaryColor || "#287365"}
                saveTextBackColor="white"
                saveIconBorderColor={primaryColor || "#287365"}
                saveIconBackgroundColor={primaryColor || "#287365"}
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
                    headColor="#090909"
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
                        color: "#090909",
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
    </>
  );
}
export default TemplateSevenLiteNew;
