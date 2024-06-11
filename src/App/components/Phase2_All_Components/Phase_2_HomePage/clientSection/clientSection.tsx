import Image from "next/image";

import companyIcon7 from "../../../../../../images/Phase_2_All_Assets/home_page/ag.png";
import companyIcon5 from "../../../../../../images/Phase_2_All_Assets/home_page/aroma.png";
import companyIcon10 from "../../../../../../images/Phase_2_All_Assets/home_page/bridgemen.png";
import companyIcon from "../../../../../../images/Phase_2_All_Assets/home_page/companyIcon.svg";
import companyIcon2 from "../../../../../../images/Phase_2_All_Assets/home_page/companyIcon2.svg";
import companyIcon3 from "../../../../../../images/Phase_2_All_Assets/home_page/companyIcon3.svg";
import companyIcon4 from "../../../../../../images/Phase_2_All_Assets/home_page/companyIcon4.svg";
import companyIcon8 from "../../../../../../images/Phase_2_All_Assets/home_page/ENVIE.png";
import companyIcon9 from "../../../../../../images/Phase_2_All_Assets/home_page/komter.png";
import companyIcon6 from "../../../../../../images/Phase_2_All_Assets/home_page/ndc.png";
import styles from "./clientSection.module.css";

function ClientSection() {
  return (
    <div className={styles.clientContainer}>
      <h1>Our Clients</h1>
      <div className={styles.imageGap}>
        <div className={styles.imageDiv}>
          <Image src={companyIcon} alt="Company" />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon2} alt="Company" />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon3} alt="Company" />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon4} alt="Company" />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon5} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon6} alt="Company" width={200} height={70} />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon7} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon8} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon9} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDiv}>
          <Image src={companyIcon10} alt="Company" width={200} height={80} />
        </div>
      </div>

      {/* RESPONSIVE */}

      <div className={styles.imageGapResponsive}>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon} alt="Company" />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon2} alt="Company" />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon3} alt="Company" />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon4} alt="Company" />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon5} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon6} alt="Company" width={200} height={70} />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon7} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon8} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon9} alt="Company" width={200} height={60} />
        </div>
        <div className={styles.imageDivLast}>
          <Image src={companyIcon10} alt="Company" width={200} height={80} />
        </div>
      </div>
      {/* <div className={styles.imageDivLastDiv}></div> */}
    </div>
  );
}
export default ClientSection;
