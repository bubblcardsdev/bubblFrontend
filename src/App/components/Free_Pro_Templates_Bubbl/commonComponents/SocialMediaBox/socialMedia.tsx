/* eslint-disable no-unused-expressions */
/* eslint-disable no-constant-condition */
/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { PostTapDetails } from "src/App/services/tapApi";

import TemplateSVG from "../TemplateIcons/arrow_svg";
import FbSVG from "../TemplateIcons/fb_svg";
import InstaSVG from "../TemplateIcons/insta_svg";
import LinkedInSVG from "../TemplateIcons/linkedin_svg";
import LocationSVG from "../TemplateIcons/location_svg";
import MailSVG from "../TemplateIcons/mail_svg";
import TwitterSVG from "../TemplateIcons/twitter_svg";
import WebSVG from "../TemplateIcons/web_svg";
import YoutubeSVG from "../TemplateIcons/youtube_svg";
import styles from "./socialMedia.module.css";

function SocialMediaInformation({
  black,
  textColor,
  fontFamily,
  mediaArray,
  accentColor,
  fontPhoneFamily,
  mediaHeadFontWeight,
  mediaHeadFontSize,
  mediaLinkFontWeight,
  mediaLinkFontSize,
  mediaIconColor,
  mediaTextColor,
  mediaArrowColor,
  deviceId,
}: any) {
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

  const socialMediaOpen = (social: any) => {
    if (social?.socialMediaName) {
      if (
        social?.socialMediaName.includes("https://") ||
        social?.socialMediaName.includes("http://")
      ) {
        window.open(social?.socialMediaName, "_blank", "noreferrer");
      } else {
        switch (social?.profileSocialMediaId) {
          case 1:
            if (social?.socialMediaName === "www.instagram.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            if (social?.socialMediaName === "instagram.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            } else {
              window.open(
                `https://www.instagram.com/${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            break;
          case 2:
            if (social?.socialMediaName === "www.facebook.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            if (social?.socialMediaName === "facebook.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            } else {
              window.open(
                `https://www.facebook.com/${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            break;
          case 3:
            if (social?.socialMediaName === "www.twitter.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            if (social?.socialMediaName === "twitter.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            } else {
              window.open(
                `https://www.twitter.com/${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            break;
          case 4:
            if (social?.socialMediaName === "www.youtube.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            if (social?.socialMediaName === "youtube.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            } else {
              window.open(
                `https://www.youtube.com/@${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            break;
          case 5:
            if (social?.socialMediaName === "www.linkedin.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            if (social?.socialMediaName === "linkedin.com") {
              window.open(
                `https://${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            } else {
              window.open(
                `https://www.linkedin.com/in/${social?.socialMediaName}`,
                "_blank",
                "noreferrer"
              );
            }
            break;

          default:
            return null;
        }
      }
    }
  };

  // click func for click event
  const handleClick = async (clickId: number) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };
  return (
    <div>
      {mediaArray?.length === 0 ? (
        <>
          <div
            className={styles.inputfieldssocial}
            style={{
              backgroundColor: black ? "#181818" : mediaTextColor,
            }}
            onClick={() => handleClick(8)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : mediaIconColor }}
            >
              <InstaSVG color={accentColor} />
            </div>
            <div className={styles.inputfield_soc}>
              <p
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaHeadFontWeight,
                  fontSize: mediaHeadFontSize,
                }}
              >
                Instagram
              </p>
              <h3
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaLinkFontWeight,
                  fontSize: mediaLinkFontSize,
                }}
              >
                UserName
              </h3>
            </div>
            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : mediaArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
          <div
            className={styles.inputfieldssocial}
            style={{ backgroundColor: black ? "#181818" : mediaTextColor }}
            onClick={() => handleClick(10)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : mediaIconColor }}
            >
              <TwitterSVG color={accentColor} />
            </div>
            <div className={styles.inputfield_soc}>
              <p
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaHeadFontWeight,
                  fontSize: mediaHeadFontSize,
                }}
              >
                Twitter
              </p>
              <h3
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaLinkFontWeight,
                  fontSize: mediaLinkFontSize,
                }}
              >
                Username
              </h3>
            </div>
            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : mediaArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
          <div
            className={styles.inputfieldssocial}
            style={{ backgroundColor: black ? "#181818" : mediaTextColor }}
            onClick={() => handleClick(9)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : mediaIconColor }}
            >
              <LinkedInSVG color={accentColor} />
            </div>
            <div className={styles.inputfield_soc}>
              <p
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaHeadFontWeight,
                  fontSize: mediaHeadFontSize,
                }}
              >
                LinkedIn
              </p>
              <h3
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaLinkFontWeight,
                  fontSize: mediaLinkFontSize,
                }}
              >
                UserName
              </h3>
            </div>
            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : mediaArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
          <div
            className={styles.inputfieldssocial}
            style={{ backgroundColor: black ? "#181818" : mediaTextColor }}
            onClick={() => handleClick(12)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : mediaIconColor }}
            >
              <YoutubeSVG color={accentColor} />
            </div>
            <div className={styles.inputfield_soc}>
              <p
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaHeadFontWeight,
                  fontSize: mediaHeadFontSize,
                }}
              >
                Youtube
              </p>
              <h3
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaLinkFontWeight,
                  fontSize: mediaLinkFontSize,
                }}
              >
                Username
              </h3>
            </div>
            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : mediaArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
          <div
            className={styles.inputfieldssocial}
            style={{ backgroundColor: black ? "#181818" : mediaTextColor }}
            onClick={() => handleClick(11)}
          >
            <div
              className={styles.icons}
              style={{ backgroundColor: black ? "#232323" : mediaIconColor }}
            >
              <FbSVG color={accentColor} />
            </div>
            <div className={styles.inputfield_soc}>
              <p
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaHeadFontWeight,
                  fontSize: mediaHeadFontSize,
                }}
              >
                Facebook
              </p>
              <h3
                style={{
                  color: textColor,
                  fontFamily: fontPhoneFamily,
                  fontWeight: mediaLinkFontWeight,
                  fontSize: mediaLinkFontSize,
                }}
              >
                Username
              </h3>
            </div>
            <div
              className={styles.arrow}
              style={{ backgroundColor: black ? "#232323" : mediaArrowColor }}
            >
              <TemplateSVG color={accentColor} />
            </div>
          </div>
        </>
      ) : (
        <div>
          <div>
            <div
              className={styles.inputfieldssocial}
              style={{
                backgroundColor: black ? "#181818" : mediaTextColor,
                cursor: "pointer",
              }}
              onClick={() => {
                socialMediaOpen(InstafilterData[0]);
                handleClick(8);
              }}
            >
              {InstafilterData?.length === 0 ? (
                <>
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : mediaIconColor,
                    }}
                  >
                    <InstaSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield_soc}>
                    <p
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaHeadFontWeight,
                        fontSize: mediaHeadFontSize,
                      }}
                    >
                      Instagram
                    </p>
                    <h3
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaLinkFontWeight,
                        fontSize: mediaLinkFontSize,
                      }}
                    >
                      UserName
                    </h3>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : mediaArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </>
              ) : (
                <>
                  {InstafilterData[0]?.activeStatus === false ? null : (
                    <>
                      <div
                        className={styles.icons}
                        style={{
                          backgroundColor: black ? "#232323" : mediaIconColor,
                        }}
                      >
                        <InstaSVG color={accentColor} />
                      </div>
                      <div className={styles.inputfield_soc}>
                        <p
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaHeadFontWeight,
                            fontSize: mediaHeadFontSize,
                          }}
                        >
                          Instagram
                        </p>
                        <h3
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaLinkFontWeight,
                            fontSize: mediaLinkFontSize,
                          }}
                        >
                          {(() => {
                            if (
                              InstafilterData[0]?.socialMediaName?.includes(
                                "https://"
                              )
                            ) {
                              return InstafilterData[0]?.socialMediaName.split(
                                "/"
                              )[3];
                            }
                            if (InstafilterData[0]?.socialMediaName === "") {
                              return "UserName";
                            }
                            return InstafilterData[0]?.socialMediaName;
                          })()}
                        </h3>
                      </div>
                      <div
                        className={styles.arrow}
                        style={{
                          backgroundColor: black ? "#232323" : mediaArrowColor,
                        }}
                      >
                        <TemplateSVG color={accentColor} />
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            {/* Linked In part */}
            <div
              className={styles.inputfieldssocial}
              style={{
                backgroundColor: black ? "#181818" : mediaTextColor,
                cursor: "pointer",
              }}
              onClick={() => {
                socialMediaOpen(linkedInFilterData[0]);
                handleClick(9);
              }}
            >
              {linkedInFilterData?.length === 0 ? (
                <>
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : mediaIconColor,
                    }}
                  >
                    <LinkedInSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield_soc}>
                    <p
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaHeadFontWeight,
                        fontSize: mediaHeadFontSize,
                      }}
                    >
                      LinkedIn
                    </p>
                    <h3
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaLinkFontWeight,
                        fontSize: mediaLinkFontSize,
                      }}
                    >
                      Username
                    </h3>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : mediaArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </>
              ) : (
                <>
                  {linkedInFilterData[0]?.activeStatus === true ? (
                    <>
                      <div
                        className={styles.icons}
                        style={{
                          backgroundColor: black ? "#232323" : mediaIconColor,
                        }}
                      >
                        <LinkedInSVG color={accentColor} />
                      </div>
                      <div className={styles.inputfield_soc}>
                        <p
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaHeadFontWeight,
                            fontSize: mediaHeadFontSize,
                          }}
                        >
                          LinkedIn
                        </p>
                        <h3
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaLinkFontWeight,
                            fontSize: mediaLinkFontSize,
                          }}
                        >
                          {linkedInFilterData[0]?.socialMediaName !== ""
                            ? linkedInFilterData[0]?.socialMediaName
                            : "UserName"}
                        </h3>
                      </div>
                      <div
                        className={styles.arrow}
                        style={{
                          backgroundColor: black ? "#232323" : mediaArrowColor,
                        }}
                      >
                        <TemplateSVG color={accentColor} />
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </div>

            {/* twitter part */}
            <div
              className={styles.inputfieldssocial}
              style={{
                backgroundColor: black ? "#181818" : mediaTextColor,
                cursor: "pointer",
              }}
              onClick={() => {
                socialMediaOpen(twitterFilterData[0]);
                handleClick(10);
              }}
            >
              {twitterFilterData?.length === 0 ? (
                <>
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : mediaIconColor,
                    }}
                  >
                    <TwitterSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield_soc}>
                    <p
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaHeadFontWeight,
                        fontSize: mediaHeadFontSize,
                      }}
                    >
                      Twitter
                    </p>
                    <h3
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaLinkFontWeight,
                        fontSize: mediaLinkFontSize,
                      }}
                    >
                      Username
                    </h3>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : mediaArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </>
              ) : (
                <>
                  {twitterFilterData[0]?.activeStatus === false ? null : (
                    <>
                      <div
                        className={styles.icons}
                        style={{
                          backgroundColor: black ? "#232323" : mediaIconColor,
                        }}
                      >
                        <TwitterSVG color={accentColor} />
                      </div>
                      <div className={styles.inputfield_soc}>
                        <p
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaHeadFontWeight,
                            fontSize: mediaHeadFontSize,
                          }}
                        >
                          Twitter
                        </p>
                        <h3
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaLinkFontWeight,
                            fontSize: mediaLinkFontSize,
                          }}
                        >
                          {twitterFilterData[0]?.socialMediaName !== ""
                            ? twitterFilterData[0]?.socialMediaName
                            : "Username"}
                        </h3>
                      </div>
                      <div
                        className={styles.arrow}
                        style={{
                          backgroundColor: black ? "#232323" : mediaArrowColor,
                        }}
                      >
                        <TemplateSVG color={accentColor} />
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Face Book part */}
            <div
              className={styles.inputfieldssocial}
              style={{
                backgroundColor: black ? "#181818" : mediaTextColor,
                cursor: "pointer",
              }}
              onClick={() => {
                socialMediaOpen(FbFilterData[0]);
                handleClick(11);
              }}
            >
              {FbFilterData?.length === 0 ? (
                <>
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : mediaIconColor,
                    }}
                  >
                    <FbSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield_soc}>
                    <p
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaHeadFontWeight,
                        fontSize: mediaHeadFontSize,
                      }}
                    >
                      FaceBook
                    </p>
                    <h3
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaLinkFontWeight,
                        fontSize: mediaLinkFontSize,
                      }}
                    >
                      Username
                    </h3>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : mediaArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </>
              ) : (
                <>
                  {FbFilterData[0]?.activeStatus === true ? (
                    <>
                      <div
                        className={styles.icons}
                        style={{
                          backgroundColor: black ? "#232323" : mediaIconColor,
                        }}
                      >
                        <FbSVG color={accentColor} />
                      </div>
                      <div className={styles.inputfield_soc}>
                        <p
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaHeadFontWeight,
                            fontSize: mediaHeadFontSize,
                          }}
                        >
                          FaceBook
                        </p>
                        <h3
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaLinkFontWeight,
                            fontSize: mediaLinkFontSize,
                          }}
                        >
                          {FbFilterData[0]?.socialMediaName !== ""
                            ? FbFilterData[0]?.socialMediaName
                            : "Username"}
                        </h3>
                      </div>
                      <div
                        className={styles.arrow}
                        style={{
                          backgroundColor: black ? "#232323" : mediaArrowColor,
                        }}
                      >
                        <TemplateSVG color={accentColor} />
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </div>

            {/* You Tube Part */}
            <div
              className={styles.inputfieldssocial}
              style={{
                backgroundColor: black ? "#181818" : mediaTextColor,
                cursor: "pointer",
              }}
              onClick={() => {
                socialMediaOpen(youtubeFilterData[0]);
                handleClick(12);
              }}
            >
              {youtubeFilterData.length === 0 ? (
                <>
                  <div
                    className={styles.icons}
                    style={{
                      backgroundColor: black ? "#232323" : mediaIconColor,
                    }}
                  >
                    <YoutubeSVG color={accentColor} />
                  </div>
                  <div className={styles.inputfield_soc}>
                    <p
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaHeadFontWeight,
                        fontSize: mediaHeadFontSize,
                      }}
                    >
                      YouTube
                    </p>
                    <h3
                      style={{
                        color: textColor,
                        fontFamily: fontPhoneFamily,
                        fontWeight: mediaLinkFontWeight,
                        fontSize: mediaLinkFontSize,
                      }}
                    >
                      Username
                    </h3>
                  </div>
                  <div
                    className={styles.arrow}
                    style={{
                      backgroundColor: black ? "#232323" : mediaArrowColor,
                    }}
                  >
                    <TemplateSVG color={accentColor} />
                  </div>
                </>
              ) : (
                <>
                  {youtubeFilterData[0]?.activeStatus === false ? null : (
                    <>
                      <div
                        className={styles.icons}
                        style={{
                          backgroundColor: black ? "#232323" : mediaIconColor,
                        }}
                      >
                        <YoutubeSVG color={accentColor} />
                      </div>
                      <div className={styles.inputfield_soc}>
                        <p
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaHeadFontWeight,
                            fontSize: mediaHeadFontSize,
                          }}
                        >
                          YouTube
                        </p>
                        <h3
                          style={{
                            color: textColor,
                            fontFamily: fontPhoneFamily,
                            fontWeight: mediaLinkFontWeight,
                            fontSize: mediaLinkFontSize,
                          }}
                        >
                          {youtubeFilterData[0]?.socialMediaName !== ""
                            ? youtubeFilterData[0]?.socialMediaName
                            : "Username"}
                        </h3>
                      </div>
                      <div
                        className={styles.arrow}
                        style={{
                          backgroundColor: black ? "#232323" : mediaArrowColor,
                        }}
                      >
                        <TemplateSVG color={accentColor} />
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SocialMediaInformation;
