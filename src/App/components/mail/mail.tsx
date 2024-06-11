import Image from "next/image";

import arrow from "../../../../public/profile/contact_information_icon/arrow.svg";
import mail from "../../../../public/profile/contact_information_icon/mail.svg";
import styles from "./mail.module.css";

type mailInfo = {
  emailId: string;
};
export default function MailApi({ emailId }: mailInfo) {
  return (
    <div className={styles.form}>
      <form className={styles.formWhole}>
        <Image src={mail} alt="call icon" width={16} height={12} />
        <p>{emailId}</p>
        <Image src={arrow} alt="arrow" width={23} height={11} />
      </form>
      <div className={styles.input_border} />
    </div>
  );
}
