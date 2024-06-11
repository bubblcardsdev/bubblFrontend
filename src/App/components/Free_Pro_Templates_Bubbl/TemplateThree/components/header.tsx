/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import Image from "next/image";
import React from "react";

import backgroundImg from "../../commonComponents/TemplateImages/Template03/bg/bg_3x.png";
import user from "../../commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
import styles from "../TemplateThree.module.css";

type Props = {
  firstName: string;
  lastName: string;
  black: boolean;
  designation: string;
  shortDesc: string;
  profileImg: any;
  accentColor: any;
  primaryColor: any;
};
const Header: React.FC<Props> = ({
  firstName,
  lastName,
  black,
  shortDesc,
  designation,
  profileImg,
  accentColor,
  primaryColor,
}) => {
  const borderVal = primaryColor || "white";
  return (
    <div>
      <div className={styles.background_template}>
        <div className={styles.user_bg}>
          {black ? (
            <Image src={backgroundImg} alt="bubbl" />
          ) : (
            <Image src={backgroundImg} alt="bubbl" />
          )}
        </div>
        <div className={styles.user_div}>
          <div>
            {profileImg?.square !== null && profileImg?.square !== undefined ? (
              <div
                className={styles.profile_img}
                style={{ borderColor: primaryColor }}
              >
                <Image
                  alt="bubbl"
                  loader={({ src }) => src}
                  className={styles.live_img}
                  src={profileImg.square}
                  width={110}
                  height={116}
                />
              </div>
            ) : (
              <div
                style={{
                  border: `3px solid ${borderVal}`,
                  position: "relative",

                  borderRadius: "7px",
                  height: "81px",
                }}
              >
                <Image
                  className={styles.profile}
                  src={user}
                  alt="account"
                  width={80}
                  height={77}
                />
              </div>
            )}
          </div>

          <div className={styles.name_div}>
            <div className={styles.name}>{firstName || "Your Name"}</div>
            {/* <div className={styles.name}>{lastName || "Last Name"}</div> */}
            <div className={styles.designation}>
              {designation || "Designation"}
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.shortDes_div}
        style={{ color: black ? "white" : "#2A4E9F" }}
      >
        {shortDesc !== "" ? shortDesc : "Short Description"}
      </div>
    </div>
  );
};
export default Header;
