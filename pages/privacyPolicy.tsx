import React from "react";
import styles from "./policy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.privacyTitle}>Privacy Policy</h1>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>INTRODUCTION</h3>
        <p className={styles.sectionText}>
          We value the trust you have placed in us. That is the reason we take utmost care for the protection of your data...
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>SCOPE</h3>
        <p className={styles.sectionText}>
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser...
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>COLLECTION OF DATA</h3>
        <ul className={styles.dataList}>
          <li className={styles.dataItem}>Password</li>
          <li className={styles.dataItem}>Financial information such as bank account or credit card details</li>
          <li className={styles.dataItem}>Geographic location</li>
          <li className={styles.dataItem}>Telecom or internet service provider details</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>USAGE OF COOKIES</h3>
        <p className={styles.sectionText}>
          In some instances, we and our service providers use cookies and other technologies to collect certain kinds of information...
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>DISCLOSURE OF INFORMATION TO THIRD PARTIES</h3>
        <p className={styles.sectionText}>
          Your personal data may be disclosed by us to third parties for various purposes...
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>CHANGES</h3>
        <p className={styles.sectionText}>
          We may update this privacy policy from time to time...
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>CONTACT</h3>
        <p className={styles.sectionText}>
          For more information, please contact us at <span className={styles.email}>bubbl@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;