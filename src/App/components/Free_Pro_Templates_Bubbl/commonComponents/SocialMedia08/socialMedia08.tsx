/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import { PostTapDetails } from "src/App/services/tapApi";

import FacebookSVG from "./newtemplateIcons/fb.svg";
import InstagramSVG from "./newtemplateIcons/insta.svg";
import LinkedInSVG from "./newtemplateIcons/linkedin.svg";
import TwitterSVG from "./newtemplateIcons/twitter.svg";
import Youtube from "./newtemplateIcons/youtube.svg";
import styles from "./socialMedia08.module.css";

function SocialMediaInfo({
  headColor,
  color,
  accentColor,
  mediaArray,
  fontFamily,
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
        switch (social.profileSocialMediaId) {
          case 1:
            window.open(
              `https://www.instagram.com/${social?.socialMediaName}`,
              "_blank",
              "noreferrer"
            );
            break;
          case 2:
            window.open(
              `https://www.facebook.com/${social?.socialMediaName}`,
              "_blank",
              "noreferrer"
            );
            break;
          case 3:
            window.open(
              `https://www.twitter.com/${social?.socialMediaName}`,
              "_blank",
              "noreferrer"
            );
            break;
          case 4:
            window.open(
              `https://www.youtube.com/@${social?.socialMediaName}`,
              "_blank",
              "noreferrer"
            );
            break;
          case 5:
            window.open(
              `https://www.linkedin.com/in/${social?.socialMediaName}`,
              "_blank",
              "noreferrer"
            );
            break;

          default:
            return null;
        }
      }
    }
  };
  const handleClick = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };
  return (
    <div>
      <h1
        style={{ color: headColor, fontSize: "20px", fontWeight: "700" }}
        className={styles.social_head}
      >
        Social Media
      </h1>
      <div className={styles.social_icons_div}>
        {InstafilterData?.length === 0 ||
        InstafilterData[0]?.activeStatus === true ? (
          <div
            onClick={() => {
              handleClick(8);
              socialMediaOpen(InstafilterData[0]);
            }}
          >
            <Image src={InstagramSVG} style={{ cursor: "pointer" }} alt="bubbl"/>
          </div>
        ) : null}

        {twitterFilterData?.length === 0 ||
        twitterFilterData[0]?.activeStatus === true ? (
          <div
            onClick={() => {
              handleClick(10);
              socialMediaOpen(twitterFilterData[0]);
            }}
          >
            <Image src={TwitterSVG} style={{ cursor: "pointer" }} alt="bubbl"/>
          </div>
        ) : null}

        {linkedInFilterData?.length === 0 ||
        linkedInFilterData[0]?.activeStatus === true ? (
          <div
            onClick={() => {
              handleClick(9);
              socialMediaOpen(linkedInFilterData[0]);
            }}
          >
            <Image src={LinkedInSVG} style={{ cursor: "pointer" }} alt="bubbl"/>
          </div>
        ) : null}

        {FbFilterData?.length === 0 ||
        FbFilterData[0]?.activeStatus === true ? (
          <div
            onClick={() => {
              handleClick(11);
              socialMediaOpen(FbFilterData[0]);
            }}
          >
            <Image src={FacebookSVG} style={{ cursor: "pointer" }} alt="bubbl"/>
          </div>
        ) : null}

        {youtubeFilterData?.length === 0 ||
        youtubeFilterData[0]?.activeStatus === true ? (
          <div
            onClick={() => {
              handleClick(12);
              socialMediaOpen(youtubeFilterData[0]);
            }}
          >
            <Image src={Youtube} style={{ cursor: "pointer" }} alt="bubbl"/>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default SocialMediaInfo;
