/* eslint-disable import/no-unresolved */
import Image from "next/image";

import insta from "../../../../public/profile/Social Media_icon/insta.svg";
import twitter from "../../../../public/profile/Social Media_icon/twitter.svg";
import youtube from "../../../../public/profile/Social Media_icon/youtube.svg";
import fb from "../../../../public/profile/Social_Media_icon/fb.svg";
import Linkdin from "../../../../public/profile/Social_Media_icon/in.svg";
import styles from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <div className="container">
      <div className={styles.socialMedia}>
        <Image src={fb} alt="Facebook" />
        <Image src={insta} alt="instagram" />
        <Image src={Linkdin} alt="linkdin" />
        <Image src={twitter} alt="twitter" />
        <Image src={youtube} alt="youtube" />
      </div>
    </div>
  );
}
