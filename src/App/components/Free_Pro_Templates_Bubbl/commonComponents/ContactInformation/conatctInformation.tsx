/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { PostTapDetails } from "src/App/services/tapApi";

import TemplateSVG from "../TemplateIcons/arrow_svg";
import LocationSVG from "../TemplateIcons/location_svg";
import MailSVG from "../TemplateIcons/mail_svg";
import PhoneSVG from "../TemplateIcons/phone_svg";
import WebSVG from "../TemplateIcons/web_svg";
import styles from "./conatctInformation.module.css";

function ContactInformation({
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
  deviceId,
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

  // click func for click event
  const handleClick = async (clickId: number) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };
  return (
    <div className={styles.contact_sec}>
      <h1
        className={styles.conatct_heading}
        style={{
          color: headColor,
          fontFamily: conatctHeadFamily,
          fontWeight: headFontWeight,
          fontSize: headFontSize,
        }}
      >
        Contact Information
      </h1>
      {mobileEnable ? (
        <div className={styles.inputfieldssection}>
          {phoneNumber?.length === 0 ? (
            <div
              className={styles.inputfields}
              style={{
                backgroundColor: black ? "#181818" : contactMiddleColor,
              }}
            >
              <div
                className={styles.icons}
                style={{
                  backgroundColor: black ? "#232323" : contactIconColor,
                }}
              >
                <PhoneSVG color={accentColor} />
              </div>
              <div className={styles.inputfield}>
                <a
                  style={{
                    color: black ? "white" : textColor,
                    fontStyle: fontStyle,
                    fontFamily: fontPhoneFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                  }}
                >
                  Your Phone Number
                </a>
              </div>
              <div
                className={styles.arrow}
                style={{
                  backgroundColor: black ? "#232323" : conatctArrowColor,
                }}
              >
                <TemplateSVG color={accentColor} />
              </div>
            </div>
          ) : (
            <>
              {phoneNumber?.map((phone: any) => (
                <>
                  {phone?.activeStatus === false ? null : (
                    <a href={`tel:${phone.phoneNumber}`}>
                      <div
                        className={styles.inputfields}
                        style={{
                          backgroundColor: black
                            ? "#181818"
                            : contactMiddleColor,
                        }}
                        onClick={() => handleClick(4)}
                      >
                        <div
                          className={styles.icons}
                          style={{
                            backgroundColor: black
                              ? "#232323"
                              : contactIconColor,
                          }}
                        >
                          <PhoneSVG color={accentColor} />
                        </div>
                        <div className={styles.inputfield}>
                          <a
                            style={{
                              color: black ? "white" : textColor,
                              fontStyle: fontStyle,
                              fontFamily: fontPhoneFamily,
                              fontSize: fontSize,
                              fontWeight: fontWeight,
                            }}
                          >
                            {phone.phoneNumber === ""
                              ? "Your phone number"
                              : phone.phoneNumber}
                          </a>
                        </div>
                        <div
                          className={styles.arrow}
                          style={{
                            backgroundColor: black
                              ? "#232323"
                              : conatctArrowColor,
                          }}
                        >
                          <TemplateSVG color={accentColor} />
                        </div>
                      </div>
                    </a>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      ) : null}
      {emailEnable ? (
        <div className={styles.inputfieldssection}>
          {emailId?.length === 0 ? (
            <div
              className={styles.inputfields}
              style={{
                backgroundColor: black ? "#181818" : contactMiddleColor,
              }}
            >
              <div
                className={styles.icons}
                style={{
                  backgroundColor: black ? "#232323" : contactIconColor,
                }}
              >
                <MailSVG color={accentColor} />
              </div>
              <div className={styles.inputfield}>
                <a
                  style={{
                    color: black ? "white" : textColor,
                    fontStyle: fontStyle,
                    fontFamily: fontPhoneFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                  }}
                >
                  Your Email ID
                </a>
              </div>
              <div
                className={styles.arrow}
                style={{
                  backgroundColor: black ? "#232323" : conatctArrowColor,
                }}
              >
                <TemplateSVG color={accentColor} />
              </div>
            </div>
          ) : (
            <>
              {emailId?.map((email: any) => (
                <a href={`mailto:${email.emailId}`}>
                  <div
                    className={styles.inputfields}
                    style={{
                      backgroundColor: black ? "#181818" : contactMiddleColor,
                    }}
                    onClick={() => handleClick(5)}
                  >
                    <div
                      className={styles.icons}
                      style={{
                        backgroundColor: black ? "#232323" : contactIconColor,
                      }}
                    >
                      <MailSVG color={accentColor} />
                    </div>
                    <div className={styles.inputfield}>
                      <a
                        style={{
                          color: black ? "white" : textColor,
                          fontStyle: fontStyle,
                          fontFamily: fontPhoneFamily,
                          fontSize: fontSize,
                          fontWeight: fontWeight,
                        }}
                      >
                        {email.emailId === "" ? "Your Mail Id" : email.emailId}
                      </a>
                    </div>
                    <div
                      className={styles.arrow}
                      style={{
                        backgroundColor: black ? "#232323" : conatctArrowColor,
                      }}
                    >
                      <TemplateSVG color={accentColor} />
                    </div>
                  </div>
                </a>
              ))}
            </>
          )}
        </div>
      ) : null}
      {websiteEnable ? (
        <div className={styles.inputfieldssection}>
          {website?.length === 0 ? (
            <div
              className={styles.inputfields}
              style={{
                backgroundColor: black ? "#181818" : contactMiddleColor,
              }}
            >
              <div
                className={styles.icons}
                style={{
                  backgroundColor: black ? "#232323" : contactIconColor,
                  cursor: "pointer",
                }}
              >
                <WebSVG color={accentColor} />
              </div>
              <div className={styles.inputfield}>
                <a
                  style={{
                    color: black ? "white" : textColor,
                    fontStyle: fontStyle,
                    fontFamily: fontPhoneFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                  }}
                >
                  Your Website
                </a>
              </div>
              <div
                className={styles.arrow}
                style={{
                  backgroundColor: black ? "#232323" : conatctArrowColor,
                }}
              >
                <TemplateSVG color={accentColor} />
              </div>
            </div>
          ) : (
            <>
              {website?.map((webs: any) => (
                <div
                  className={styles.inputfields}
                  onClick={() => {
                    websiteOpen(webs);
                    handleClick(6);
                  }}
                  style={{
                    backgroundColor: black ? "#181818" : contactMiddleColor,
                    cursor: "pointer",
                  }}
                >
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : contactIconColor,
                    }}
                  >
                    <WebSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield}>
                    <a
                      style={{
                        color: black ? "white" : textColor,
                        fontStyle: fontStyle,
                        fontFamily: fontPhoneFamily,
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                      }}
                    >
                      {webs.website === "" ? "Your Website" : webs.website}
                    </a>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : conatctArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ) : null}
      {/* location  */}
      <a
        target="_blank"
        href={`https://www.google.com/maps/search/?api=1&query=${val2 || ""}+${
          contacts?.state
        }+${contacts?.country}`}
        rel="noreferrer"
      >
        <div>
          <div
            className={styles.inputfields}
            style={{ backgroundColor: black ? "#181818" : contactMiddleColor }}
            onClick={() => handleClick(7)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : contactIconColor }}
            >
              <LocationSVG color={accentColor} />
            </div>
            <div className={styles.inputfield}>
              {contacts === null ? (
                <p>Your City</p>
              ) : (
                <p
                  style={{
                    color: black ? "white" : textColor,
                    fontStyle: fontStyle,
                    fontFamily: fontPhoneFamily,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                  }}
                >
                  {contacts?.city === "" ? "Your City" : contacts?.city},
                  {contacts?.state === "" ? "Your State" : contacts?.state}
                </p>
              )}
            </div>

            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : conatctArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default ContactInformation;
