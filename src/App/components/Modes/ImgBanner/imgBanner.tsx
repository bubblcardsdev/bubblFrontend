/* eslint-disable no-unused-vars */
import Image from "next/image";

import user from "../../Free_Pro_Templates_Bubbl/commonComponents/TemplateImages/TemplateCommanAsstes/dummy_profile_pic/profile_icon_3x.png";
import styles from "./imgBanner.module.css";

interface Props {
  profileImg: { square: string; rectangle: string } | null;
  directValues: any;
  firstName: string;
  designation: string;
}

function ImgBanner({
  directValues,
  firstName,
  designation,
  profileImg,
}: Props) {
  const ProfileImg = profileImg?.square;

  return (
    <div>
      <div className={styles.imgContainer}>
        <div>
          {ProfileImg ? (
            <Image
              alt="bubbl"
              loader={({ src }) => src}
              src={ProfileImg}
              className={styles.img_div}
              width={130}
              height={130}
            />
          ) : (
            <Image
              src={user}
              alt="account"
              className={styles.profile}
              width={120}
              height={120}
            />
          )}
        </div>
        <div className={styles.nameDiv}>
          <div>
            <p className={styles.nameTag} style={{ color: "white" }}>
              {firstName || directValues?.Profile?.firstName}
            </p>
            <p className={styles.nameDesignation} style={{ color: "white" }}>
              {designation || directValues?.Profile?.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImgBanner;
