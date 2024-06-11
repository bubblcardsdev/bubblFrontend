import Image from "next/image";

import arrow from "../../../../public/profile/contact_information_icon/arrow.svg";
import location from "../../../../public/profile/contact_information_icon/location.svg";
import styles from "./location.module.css";

type locationInfo = {
  companyAddress: string;
};
export default function LocationApi({ companyAddress }: locationInfo) {
  return (
    <div className={styles.form}>
      <form className={styles.formWhole}>
        <Image src={location} alt="call icon" width={13} height={18} />
        <p>{companyAddress}</p>
        <Image src={arrow} alt="arrow" width={23} height={11} />
      </form>
      <div className={styles.input_border} />
    </div>
  );
}
