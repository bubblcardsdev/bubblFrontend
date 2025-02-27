import React from 'react';
import styles from './RefundPolicy.module.css'; // Using the CSS module styles

const TermsCondition = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.termsTitle}>Terms And Conditions</h1>
      <p className={styles.termsParagraph}>
        These Terms of Use (“Agreement”) are entered into between XPULSAR
        TECHNOLOGY (OPC) PRIVATE LIMITED (“We/Us/Company”), a company
        incorporated under the provisions of Companies Act, 2013 having
        its registered address at 6/9, MV Enclave, 3rd cross street CIT
        Colony, Mylapore, Chennai, Tamil Nadu, 600004 and who are willing
        to avail our Product(s) and Services (as defined below)
        (“You/Your/ Users”) offered through our website
        https://bubbl.cards/ (“Website”).
      </p>
      <p className={styles.termsParagraph}>
        This Agreement is an electronic record that forms an electronic
        contract under the Information Technology Act, 2000 and the rules
        made thereunder and as amended from time to time. This Agreement
        does not require any physical, electronic, or digital signature.
        By clicking on the I AGREE button, you agree to the terms and
        conditions of this Agreement.
      </p>

      <h3 className={styles.termsSubtitle}>1. INTRODUCTION</h3>
      <p className={styles.termsParagraph}>
        1.1 Bubbl cards provides Near Field Communication (NFC)
        Contactless Business Cards (“Product(s)”) that share your profile
        information with just a tap or a scan by a mobile device. Upon
        purchase, you can use the Company’s associated services by creating a
        profile of your own including name, email ID, contact number,
        social media links, etc. (“Services”) on the Website and integrate
        the Product purchased with such information. These Terms of Use
        contain important information about your legal rights, your use of
        the Website, Products, Purchases, and Services.
      </p>

      <p className={styles.termsParagraph}>
        1.2 For the Purpose of this Agreement, Applicable Law shall mean
        all laws, ordinances, statutes, rules, orders, decrees,
        injunctions, licenses, permits, approvals, authorizations,
        consents, waivers, privileges, by-laws, notifications, guidelines,
        policies, directions, directives, circulars of the Republic of India
        and regulations of any governmental authority of the Republic of India
        as such are in effect as of the date hereof or as may be amended,
        modified, re-enacted or revoked from time to time hereinafter;
      </p>

      <h3 className={styles.termsSubtitle}>2. APPLICABILITY OF THIS AGREEMENT</h3>
      <p className={styles.termsParagraph}>
        2.1 This Agreement is a legally binding document between you and
        the Company. By using the website, purchasing the products, and
        using its services, you are acknowledging, without limitation or
        qualification, to be bound by this agreement, whether you have
        read the same or not.
      </p>

      <p className={styles.termsParagraph}>
        2.2 This Agreement includes these Terms of Use and Privacy Policy
        and Return and Cancellation Policy which are incorporated here by
        way of reference, and you are requested to carefully read both
        these documents.
      </p>

      <p className={styles.termsParagraph}>
        2.3 This Agreement is subject to revision by the Company at any
        time without any prior notice. The revised Agreement shall be made
        available on the Website. You are requested to regularly visit the
        Website to view the most current terms contained in the Agreement.
        Your continued use of the Website, following such changes, will
        constitute your acceptance of those changes.
      </p>

      {/* Add more content here */}
      
      <h3 className={styles.termsSubtitle}>For the Company:</h3>
      <p className={styles.termsCompanyDetails}>
        Name: <strong>XPULSAR TECHNOLOGY (OPC) PRIVATE LIMITED</strong>
      </p>
      <p className={styles.termsCompanyDetails}>
        Address: 6/9, MV Enclave, 3rd cross street CIT Colony, Mylapore,
        Chennai, Tamil Nadu, 600004
      </p>
      <p className={styles.termsCompanyDetails}>Email ID: <a href="mailto:Sahilreddy21@gmail.com">Sahilreddy21@gmail.com</a></p>

      <h3 className={styles.termsSubtitle}>For You:</h3>
      <p className={styles.termsParagraph}>
        The contact details given by you at the time of the creation of
        your account on the website.
      </p>
    </div>
  );
};

export default TermsCondition;
