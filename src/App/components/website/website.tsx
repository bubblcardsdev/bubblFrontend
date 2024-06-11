import Image from "next/image";

import arrow from "../../../../public/profile/contact_information_icon/arrow.svg";
import styles from "./webiste.module.css";

type websiteInfo = {
  website: string;
};
export default function WebsiteApi({ website }: websiteInfo) {
  return (
    <div className={styles.form}>
      <form className={styles.formWhole}>
        <Image src={website} alt="call icon" width={14} height={14} />
        <p>{website}</p>
        <Image src={arrow} alt="arrow" width={23} height={11} />
      </form>
      <div className={styles.input_border} />
    </div>
  );
}
