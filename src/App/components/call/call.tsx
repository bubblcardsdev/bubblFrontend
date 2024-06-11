import Image from "next/image";

import arrow from "../../../../public/profile/contact_information_icon/arrow.svg";
import call from "../../../../public/profile/contact_information_icon/call.svg";
import styles from "./call.module.css";

type contactInfo = {
  phoneNumber: string;
};
export default function CallApi({ phoneNumber }: contactInfo) {
  return (
    <div className={styles.form}>
      <form className={styles.formWhole}>
        <Image src={call} alt="call icon" width={16} height={16} />
        <p>{phoneNumber}</p>
        <Image src={arrow} alt="arrow" width={23} height={11} />
      </form>
      <div className={styles.input_border} />
    </div>
  );
}
