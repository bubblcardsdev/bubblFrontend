/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import { Col } from "react-bootstrap";

import Footer from "../../footer/footer";
import ContactInformation from "../commonComponents/ContactInformation/conatctInformation";
import FooterBg from "../commonComponents/Footer/footer";
import Payment from "../commonComponents/payments/payment";
import SaveContactNew from "../commonComponents/SaveContact/saveContact";
import SocialMedia08 from "../commonComponents/SocialMedia08/socialMedia08";
import background from "../commonComponents/TemplateImages/Template08/background/background.png";
import user from "../commonComponents/TemplateImages/Template08/profile/08profile_icon_3x.png";
import logo from "../commonComponents/TemplateImages/TemplateCommanAsstes/logo/Bubbllogocolor.svg";
import tick from "../commonComponents/TemplateImages/TemplateCommanAsstes/tick/tick.svg";
import styles from "./templateEight.module.css";

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

function TemplateEightLite({
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
  logoUrl,
  plantId,
  primaryColor,
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
        <div className={styles.mobile_template}>
          <div className={styles.background_temp}>
            <div className={styles.bg_img}>
              <div className={styles.bg_image}>
                <Image src={background} alt="bubbl"/>
              </div>
              <div className={styles.imageCss}>
                <div>
                  {profileImg?.rectangle !== null &&
                  profileImg?.rectangle !== undefined ? (
                    <Image
                      loader={({ src }) => src}
                      src={profileImg.rectangle}
                      height={405}
                      width={243}
                      alt="bubbl"
                    />
                  ) : (
                    <Image src={user} height={340} width={243} alt="bubbl"/>
                  )}
                  <div className={styles.logo_shadow}>
                    <div
                      style={{
                        maxWidth: "80px",
                        maxHeight: "80px",
                      }}
                    >
                      {!logoUrl ? (
                        <Image src={logo} alt="bubbl"/>
                      ) : (
                        <Image
                          loader={({ src }) => src}
                          src={logoUrl}
                          alt="bubbl"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.totalContainer}>
            <div className={styles.header_details}>
              <div className={styles.header_name}>
                <div className={styles.yourname}>
                  <div>
                    <h2 style={{ color: primaryColor || "#19A985" }}>
                      {firstName !== "" ? firstName : "Your Name"}
                    </h2>
                  </div>
                  <div className={styles.tick} style={{ marginTop: "3px" }}>
                    &nbsp;
                    <Image src={tick} alt="bubbl"/>
                  </div>
                </div>

                <p style={{ color: "#000000" }}>
                  {designation !== "" ? designation : "Designation"}
                </p>
              </div>
            </div>
            <p
              className={styles.contact_paragraph}
              style={{ color: "#000000" }}
            >
              {shortDescription !== "" ? shortDescription : "Short Description"}
            </p>
            {/* Save Contact  */}
            <div className={styles.saveContactDiv}>
              <SaveContactNew
                black={false}
                saveTextBorderColor={primaryColor || "#19A985"}
                saveTextFieldColor={primaryColor || "#19A985"}
                saveTextBackColor="white"
                saveIconBorderColor={primaryColor || "#19A985"}
                saveIconBackgroundColor={primaryColor || "#19A985"}
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
                conatctHeadFamily="Source Sans Pro"
                headColor="#090909"
                headFontSize="20px"
                headFontWeight="700"
                black={false}
                phoneNumber={phoneNumber}
                emailId={emailId}
                website={website}
                accentColor={primaryColor || "#7757A3"}
                textColor="#090909"
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                contacts={contacts}
                fontPhoneFamily="Source Sans Pro"
                fontWeight="400"
                fontSize="14px"
                secondaryColor={secondaryColor || "#EEE2FF"}
                contactMiddleColor="#F6F6F6"
                contactIconColor="#FAFAFA"
                conatctArrowColor={secondaryColor || "#EEE2FF"}
                deviceId={deviceId}
              />
            </div>
            {modeId === 1 ? (
              <div />
            ) : (
              <>
                {/* Social Media  */}
                {socialMediaEnable ? (
                  <SocialMedia08
                    headColor="#090909"
                    color="#503F4A"
                    accentColor={accentColor || "#503F4A"}
                    mediaArray={mediaArray}
                    deviceId={deviceId}
                  />
                ) : null}

                {/* Digital Payments */}
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
export default TemplateEightLite;
