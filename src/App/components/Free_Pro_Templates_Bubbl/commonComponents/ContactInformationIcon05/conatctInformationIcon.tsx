/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import Image from "next/image";
import React from "react";

import styles from "./conatctInformationIcon.module.css";
import Call from "./Icons/call.svg";
import Email from "./Icons/email.svg";
import Location from "./Icons/location.svg";
import Web from "./Icons/web.svg";

function ContactInformationIcon({
  headColor,
  black,
  phoneNumber,
  emailId,
  website,
  accentColor,
  contacts,
  websiteEnable,
  emailEnable,
  textColor,
  mobileEnable,
  fontPhoneFamily,
  fontStyle,
  fontWeight,
  headFontSize,
  headFontWeight,
  fontSize,
  contactMiddleColor,
  contactIconColor,
  conatctArrowColor,
  conatctHeadFamily,
}: any) {
  const websiteOpen = (webs: any) => {
    if (webs.website) {
      if (
        webs.website.includes("https://") ||
        webs.website.includes("http://")
      ) {
        window.open(webs.website, "_blank", "noreferrer");
      } else {
        window.open(`https://${webs.website}`, "_blank", "noreferrer");
      }
    }
  };

  // function for replace the + for location
  const updateAddress = contacts?.address;
  let val2 = "";
  if (updateAddress) {
    const val = updateAddress.replace(/ /g, "+");
    val2 = val.replace(/,/g, "");
  }
  return (
    <div className={styles.contact_sec}>
      <h1
        className={styles.conatct_heading}
        style={{
          color: headColor,
          fontFamily: conatctHeadFamily,
          fontWeight: headFontWeight,
          fontSize: headFontSize,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Contact Information
      </h1>
      <div
        className={styles.contact_icons}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          {mobileEnable ? (
            <div className={styles.inputfieldssection}>
              {/* Phone */}
              {phoneNumber?.length === 0 ? (
                <Image src={Call} alt="bubbl"/>
              ) : (
                <>
                  {phoneNumber?.map((phone: any) => (
                    <>
                      {phone?.activeStatus === false ? null : (
                        <a href={`tel:${phone.phoneNumber}`}>
                          <Image src={Call} alt="bubbl" />
                        </a>
                      )}
                    </>
                  ))}
                </>
              )}
            </div>
          ) : null}
        </div>
        {/* Email */}
        <div>
          {emailEnable ? (
            <div className={styles.inputfieldssection}>
              {emailId?.length === 0 ? (
                <Image src={Email} alt="bubbl"/>
              ) : (
                <>
                  {emailId?.map((email: any) => (
                    <a href={`mailto:${email.emailId}`}>
                      <Image src={Email} alt="bubbl"/>
                    </a>
                  ))}
                </>
              )}
            </div>
          ) : null}
        </div>
        {/* location  */}
        <div>
          <a
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${
              val2 || ""
            }+${contacts?.state}+${contacts?.country}`}
            rel="noreferrer"
          >
            <Image src={Location} alt="bubbl"/>
          </a>
        </div>
        {/* Website */}
        <div>
          {websiteEnable ? (
            <div className={styles.inputfieldssection}>
              {website?.length === 0 ? (
                <Image src={Web} alt="bubbl"/>
              ) : (
                <>
                  {website?.map((webs: any) => (
                    <div
                      className={styles.inputfields}
                      onClick={() => websiteOpen(webs)}
                      style={{
                        backgroundColor: black ? "#181818" : contactMiddleColor,
                        cursor: "pointer",
                      }}
                    >
                      <Image src={Web} alt="bubbl"/>
                    </div>
                  ))}
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ContactInformationIcon;
