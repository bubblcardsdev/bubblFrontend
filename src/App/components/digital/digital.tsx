import Image from "next/image";

import gpay from "../../../../public/profile/digitalpayments-icon/gpay.svg";
import paytm from "../../../../public/profile/digitalpayments-icon/paytm.svg";
import phonepe from "../../../../public/profile/digitalpayments-icon/phonepe.svg";
import styles from "./digital.module.css";

export default function DigitalPay() {
  return (
    <div className="container">
      <div className={styles.socialMedia}>
        <Image src={gpay} alt="Facebook" />
        <Image src={paytm} alt="instagram" />
        <Image src={phonepe} alt="linkdin" />
      </div>
    </div>
  );
}
