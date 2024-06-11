/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";

import Footer from "../../footer/footer";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMedia03 from "../commonComponents/SocialMedia03/socialMedia03";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogowhite.svg";
import Header from "./components/header";
import styles from "./TemplateThree.module.css";

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

function TemplateThreeBlack({
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
  plantId,
  primaryColor,
  secondaryColor,
  logoUrl,
  qrImageUrl,
  companyName,
  linkVal,
}: Props) {
  const black = true;
  const value: any[] = [];
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
          style={{ backgroundColor: backColor || "black" }}
        >
          <div className={styles.logo_brand}>
            <div style={{ maxWidth: "70px", maxHeight: "70px" }}>
              {!logoUrl ? (
                <Image src={logo} alt="account" />
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
          <Header
            firstName={firstName}
            lastName={lastName}
            black={black}
            designation={designation}
            shortDesc={shortDescription}
            profileImg={profileImg}
            accentColor={accentColor}
            primaryColor={primaryColor}
          />

          <div className={styles.saveBtn_div}>
            <SaveContactNew
              black
              saveTextBorderColor={primaryColor || "#155FB7"}
              saveTextFieldColor={primaryColor || "#155FB7"}
              saveTextBackColor="black"
              saveIconBorderColor={primaryColor || "#155FB7"}
              saveIconBackgroundColor={primaryColor || "#155FB7"}
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

          <div className={styles.contact_info}>
            <ContactInformation
              headColor="white"
              headFontSize="20px"
              headFontWeight="700"
              black
              phoneNumber={phoneNumber}
              emailId={emailId}
              website={website}
              accentColor={primaryColor || "#2C5F9A"}
              backColor={backColor}
              textColor="#090909"
              mobileEnable={mobileEnable}
              emailEnable={emailEnable}
              websiteEnable={websiteEnable}
              contacts={contacts}
              fontWeight="500"
              fontSize="14px"
              secondaryColor={secondaryColor || "#E2EFFF"}
              contactMiddleColor="#F6F6F6"
              contactIconColor="#FAFAFA"
              conatctArrowColor={secondaryColor || "#E2EFFF"}
              deviceId={deviceId}
            />
          </div>

          {modeId === 1 ? (
            <div style={{ paddingBottom: "80px" }} />
          ) : (
            <>
              {socialMediaEnable ? (
                <SocialMedia03
                  headColor="white"
                  color="white"
                  accentColor={accentColor || "white"}
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
        {plantId === 1 ? <Footer /> : null}
        <FooterBg />
      </section>
    </>
  );
}
export default TemplateThreeBlack;
