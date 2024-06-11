/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getAccessToken } from "src/App/helpers/local-storage";

import Insta from "../../../../../images/Bubble-website_assets/contact_us/insta.svg";
import Link from "../../../../../images/Bubble-website_assets/contact_us/link.svg";
import nfc from "../../../../../images/nfc-img.png";
import Logo from "../Logo/logo";
import styles from "./footer.module.css";

export default function Footer() {
  const [lgShow, setLgShow] = useState(false);
  const [lgShows, setLgShowsTerms] = useState(false);
  const [lgShowsRefund, setLgShowsRefund] = useState(false);
  const [tokenNull, setTokenNull] = useState();
  const shopPageLink = async () => {
    const token = await getAccessToken();
    if (token === null) {
      window.location.href = "/shop";
    } else {
      window.location.href = "/shopPage";
    }
  };

  const findToken = async () => {
    const token: any = await getAccessToken();
    setTokenNull(token);
  };
  useEffect(() => {
    findToken();
  }, []);


  return (
    <section
      className={styles.footer_lynx}
      style={{
        backgroundImage: `url(${nfc.src})`,
      }}
    >
      {/* Refund Policy */}
      <Modal
        size="lg"
        show={lgShowsRefund}
        onHide={() => setLgShowsRefund(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Returns & Refunds Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.privacy}>
            <p>
              You are entitled to return your order within 3 days only if it is
              delivered damaged.
            </p>
            <p>
              The deadline for returning an order is 3 days from the date you
              received the order.
            </p>
            <p>
              In order to return the order, you must inform us of your decision
              by emailing us on<span> support@bubbl.cards</span>
            </p>
            <p>
              We will reimburse you no later than 30 days from the day on which
              we receive the returned goods. We will use the same means of
              payment as you used for the order, and you will not incur any fees
              for such reimbursement.
            </p>
            <h3>Conditions for returns:</h3>
            <p>
              In order for the goods to be eligible for a return, please make
              sure that:
            </p>
            <p>The goods were purchased in the last 3 days </p>
            <p>The goods are in the original packaging</p>
            <h3>Returning Goods</h3>
            <p>
              We will be initiating the return process by sharing the shipment
              instructions with you over your registered email address.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about our Returns and Refunds Policy,
              please contact us by<span> support@bubbl.cards</span> or call
              <span> +91 7845861552</span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
      {/* Privacy */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            PRIVACY POLICY
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          .
          <div className={styles.privacy}>
            <div>
              <h3>INTRODUCTION</h3>
              <p>
                We value the trust you have placed in us. That is the reason we
                take utmost care for the protection of your data. This Privacy
                Policy describes how your personal information is collected,
                used, and shared when you visit or make a purchase from
                https://bubbl.cards/ (the “Site”). Please read the following
                statement to learn about our information gathering and
                dissemination practices.
              </p>
            </div>
            <div>
              <h3>SCOPE</h3>
              <p>
                When you visit the Site, we automatically collect certain
                information about your device, including information about your
                web browser, IP address, time zone, and some of the cookies that
                are installed on your device. Additionally, as you browse the
                Site, we collect information about the individual web pages or
                products that you view, what websites or search terms referred
                you to the Site, and information about how you interact with the
                Site. We refer to this automatically collected information as
                “Device Information”.
              </p>
            </div>
            <div>
              <h3>COLLECTION OF DATA</h3>
              <p>
                Usually, we collect Personal Data which includes but is not
                limited to:
              </p>
              <p>a. password;</p>
              <p>
                b. financial information such as Bank account or credit card or
                debit card or other payment instrument details;
              </p>
              <p>c. Your geographic location;</p>
              <p>
                d. details of Your telecom service provider or internet service
                provider;
              </p>
              <p>
                e. the type of browser (Internet Explorer, Firefox, Opera,
                Google Chrome, etc.);
              </p>
              <p>
                f. the operating system of Your system, device, and the Website
                You last visited before visiting the Platform;
              </p>
              <p>
                g. The duration of Your stay on the Platform is also stored in
                the session along with the date and time of Your access, general
                information is collected through the use of cookies. The
                platform may store temporary or permanent, cookies on Your
                computer. You can erase or choose to block these cookies from
                Your computer. You can configure Your computer’s browser to
                alert You when we attempt to send You a cookie with an option to
                accept or refuse the cookie. If You have turned cookies off, You
                may be prevented from using certain features of the Platform;
              </p>
              <p>
                h. any detail relating to the above clauses as provided to body
                corporate for providing service;{" "}
              </p>
              <p>
                i. any of the information received under the above clauses by
                body corporate for processing, stored or processed under lawful
                contract or otherwise
              </p>
              <p>
                j. Platform may use third-party service providers to post
                advertisements on various Websites across the internet and
                advertisements by third parties can be posted on Our Platform.
                They may collect general information about Your visits to the
                Platform, and Your interaction with our Services on the
                Platform. Please do note that Sensitive Personal Data and other
                Personal Data may be treated differently as per this Privacy
                Policy. However, We do not store any information related to
                credit card/ debit card, CVV Number, expiry date or 3D secure
                password, online banking username, or password. All the
                card/online banking-related details are collected by a
                third-party payment gateway. We receive and store limited
                information including the transaction ID, time, name, and other
                details entered by You on the Platform of the payment gateway
                necessary to identify and verify the payment made by You.
                Whatever your chosen online mode of payment, You can be assured
                that (insert name of the third party payment gateway), the
                Platform’s trusted gateway partner uses secure encryption
                technology in order to keep Your transactional details
                confidential at all times. These gateways are managed by leading
                Banks who use the 3D secure password service, created by You, to
                provide an additional layer of security to Your online
                transactions. While availing any of the payment method(s)
                available on the Platform, the Platform will not assume
                liability, monetary or consequential, for any loss caused to
                Users due to payment issues arising out of the transactions or
                of usage of data provided to gateway partner.
              </p>
            </div>

            <h3>USAGE OF COLLECTED INFORMATION</h3>
            <p>We collect information for the following purposes:</p>
            <div>
              <h3>a. To provide Services:</h3>
              <p>
                We use data about You to offer assistance to You, incorporating
                to process exchanges with You, verify You when You sign in, give
                client service, and work and keep up the Services. Our Services
                additionally incorporate customized highlights that customize
                Your experience, upgrade your profitability, and improve Your
                capacity to work together adequately with others via naturally
                breaking down the exercises of Your group/team to give
                perceptions and proposals that are important for You and Your
                group/team. We may utilize Your email space to gather Your
                connection with a specific association or industry to customize
                the substance and experience You get on Our Platform and to send
                marketing information. Where You utilize different Services, We
                consolidate data about You and Your exercises to give a
                coordinated encounter, for example, to help You to discover data
                from one Service while looking from another or to introduce
                significant item data as You traverse Our Platform.
              </p>

              <h3>b. To improve and optimize the Services:</h3>
              <p>
                We use the information we collect to improve the execution of
                each procedure, provide observations and recommendations, and to
                assist You in optimizing Your work processes.
              </p>

              <h3>c. For research and development:</h3>
              <p>
                We are continually searching for approaches to make our Services
                more brilliant, quicker, secure, coordinated, and helpful to
                You.
              </p>

              <h3>d. To communicate with You about the Services:</h3>
              <p>
                We use your contact information to send transactional
                communications via email and within the Services, including
                confirming Your purchases, reminding You of subscription
                expirations, responding to Your comments, questions, and
                requests, providing customer support, and sending You technical
                notices, updates, security alerts, and administrative messages.
                We also send you communications as You onboard to a particular
                Service to help You become more proficient in using that
                Service. These communications are part of the Services and in
                most cases, you cannot opt out of them.
              </p>

              <h3> e. For Customer support:</h3>
              <p>
                We use your information to resolve technical issues You
                encounter, to respond to your requests for assistance, to
                analyze crash information, and to repair and improve the
                Services.
              </p>

              <h3>f. For safety and security:</h3>
              <p>
                We use information about you and your Service use to verify
                accounts and activity, to monitor suspicious or fraudulent
                activity and to identify violations of Service policies. In
                addition to the above points, we use Your information for other
                lawful purposes related to our business and in furtherance to
                fulfilment of lawful contract.
              </p>

              <h3>USAGE OF COOKIES</h3>
              <p>
                In some instances, Our Service Providers and we use cookies and
                other technologies to collect certain kinds of information
                whenever You visit Our Platform and through emails that are
                exchanged between us. A cookie is a small piece of text file
                stored by the Platform on a User’s computer hard disk, when the
                Platform is opened. The Platform uses cookies to store a unique
                identifier for online customers to enhance user’s experience. If
                You chose to disable the cookies, You might not be able to fully
                experience the interactive features of the Platform.
              </p>
              <p>
                Other third-party tools and widgets may be used on our
                individual web pages to provide additional functionality. Use of
                these tools or widgets may place a cookie on Your device to make
                their services easier to use, and ensure Your interaction is
                displayed on our web pages properly.
              </p>
              <p>
                Cookies by themselves do not tell Us Your email address or
                otherwise identify You personally. In our analytical reports, We
                may obtain other identifiers including IP addresses, but this is
                for the purpose of identifying the number of unique visitors to
                our Platform and geographic origin of visitor trends, and not to
                identify individual visitors.
              </p>

              <p>
                BY NAVIGATING ON OUR PLATFORM OR ENTERING YOUR LOGIN CREDENTIALS
                TO ACCESS OUR PLATFORM YOU AGREE THAT WE CAN PLACE THESE COOKIES
                ON YOUR COMPUTER OR INTERNET ENABLED DEVICE.
              </p>

              <h3>OPT OUT OF DATA COLLECTION</h3>
              <p>
                The Platform provides you the option to opt out of receiving
                non-essential communications (promotional/marketing-related)
                from the Platform or on behalf of any of their partners after
                setting up an Account. You can unregister/unsubscribe from the
                lists/newsletters/and promotional mails by pressing the
                “unsubscribe” button provided in the promotional communications
                sent to You. We store data for as long as it is needed, in order
                to provide you with Services including those described above.
                Information associated with your account will be kept until Your
                account is deleted, and until we no longer need the data to
                provide you the Services. You also have the option of
                deregistering for Our Services or deleting Your account. When
                you delete your account, We delete the information that You
                provided to Us.
              </p>

              <h3>DISCLOSURE OF INFORMATION TO THIRD PARTY</h3>
              <p>
                Your personal data may be disclosed by Us to third parties. This
                disclosure may be required for us to provide you access to our
                Services, to comply with our legal obligations, to enforce our
                Terms of Use to facilitate our marketing and advertising
                activities, or to prevent, detect, mitigate, and investigate
                fraudulent or illegal activities related to our Services. We do
                not disclose Your personal data to third parties for their
                marketing and advertising purposes without Your explicit
                consent. We may disclose personal data if required to do so by
                law or in the good faith belief that such disclosure is
                reasonably necessary to respond to subpoenas, court orders, or
                other legal processes.
              </p>

              <h3>STORAGE AND TRANSFER OF DATA</h3>
              <p>
                We may collect and store your Personal Data in India and with
                our affiliates and third parties which are based in other
                countries. We shall make sure that the recipient of Your
                Personal Data incorporates and implements equivalent level of
                protection as implemented by Us.{" "}
              </p>

              <h3>UNAUTHORIZED USE OF YOUR DATA</h3>
              <p>
                The Organisation has stringent security measures in place to
                protect against the loss, misuse, and alteration of the
                information under Our control. Whenever you change or access
                your account information, We offer the use of a secure server.
                Once Your information is in Our possession, we adhere to strict
                security guidelines, protecting it against unauthorized access.
              </p>

              <h3>CHANGES</h3>
              <p>
                We may update this privacy policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal or regulatory reasons.
              </p>

              <h3>GRIEVANCES</h3>
              <p>
                For more information about our privacy practices, if you have
                questions, or if you would like to make a complaint, please
                contact us by email at<span> bubbl@gmail.com</span>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Terms and condition */}
      <Modal
        size="lg"
        show={lgShows}
        onHide={() => setLgShowsTerms(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>TERMS OF USE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.privacy}>
            <p>
              These Terms of Use (“Agreement”) are entered into between XPULSAR
              TECHNOLOGY (OPC) PRIVATE LIMITED (“We/Us/Company”), a company
              incorporated under the provisions of Companies Act, 2013 having
              its registered address at 6/9, MV Enclave, 3rd cross street CIT
              Colony, Mylapore, Chennai, Tamil Nadu, 600004 and who are willing
              to avail our Product(s) and Services (as defined below)
              (“You/Your/ Users”) offered through our website
              https://bubbl.cards/ (“Website”).
            </p>
            <p>
              This Agreement is an electronic record that forms an electronic
              contract under the Information Technology Act, 2000 and the rules
              made thereunder and as amended from time to time. This Agreement
              does not require any physical, electronic, or digital signature.
              By clicking on the I AGREE button, you agree to the terms and
              conditions of this Agreement.
            </p>

            <h3>1. INTRODUCTION</h3>
            <p>
              1.1 Bubbl cards provides Near Field Communication (NFC)
              Contactless Business Cards (“Product(s)”) that share your profile
              information with just a tap or a scan by a mobile device. Upon
              purchase, you can use Company’s associated services by creating a
              profile of your own including name, email ID, contact number,
              social media links, etc. (“Services”) on the Website and integrate
              the Product purchased with such information. These Terms of Use
              contain important information about your legal rights, your use of
              the Website, Products, Purchases, and Services.
            </p>

            <p>
              1.2 For the Purpose of this Agreement, Applicable Law shall mean
              all laws, ordinances, statutes, rules, orders, decrees,
              injunctions, licenses, permits, approvals, authorizations,
              consents, waivers, privileges, by-laws, notifications, guidelines,
              policies, directions, directives, circulars of Republic of India
              and regulations of any governmental authority of Republic of India
              as such are in effect as of the date hereof or as may be amended,
              modified, re-enacted or revoked from time to time hereinafter;
            </p>

            <h3>2. APPLICABILITY OF THIS AGREEMENT</h3>
            <p>
              2.1 This Agreement is a legally binding document between you and
              the Company. By using the website, purchasing the products, and
              using its services, you are acknowledging, without limitation or
              qualification, to be bound by this agreement, whether you have
              read the same or not.
            </p>

            <p>
              2.2 This Agreement includes these Terms of Use and Privacy Policy
              and Return and Cancellation Policy which are incorporated here by
              way of reference, and you are requested to carefully read both
              these documents.
            </p>

            <p>
              2.3 This Agreement is subject to revision by the Company at any
              time without any prior notice. The revised Agreement shall be made
              available on the Website. You are requested to regularly visit the
              Website to view the most current terms contained in the Agreement.
              Your continued use of the Website, following such changes, will
              constitute your acceptance of those changes.
            </p>

            <h3>3. ELIGIBILITY TO USE</h3>
            <p>
              The Website is available for usage only to those Persons who are
              competent to Contract as per the Applicable Law. All persons who
              are minors, un-discharged insolvents, or incompetent to contract
              as per the Applicable law are not eligible to use the Website. The
              Company reserves the right to refuse you access to the Website if
              it is brought to the notice of the Company or if it is discovered
              that you do not possess the capacity to enter into this Agreement.
              If you are representing a business entity, you represent that you
              are duly authorized by such business entity, that you have the
              capacity to enter into this Agreement and have the authority to
              bind the business entity with this Agreement.
            </p>

            <h3>4. ACCOUNT CREATION AND REGISTRATION OBLIGATIONS</h3>
            <p>
              4.1 In order to be able to purchase the Product and use the
              associated Services of the Company through the Website, you may be
              required to register and open an account with the Website. You may
              choose among the various service plans available.{" "}
            </p>
            <p>
              4.2 At the time of purchase and while using the Services on the
              Website, you agree to furnish all the requisite details and
              information that the Company may request from time to time. You
              shall be responsible for maintaining the confidentiality of all
              such information furnished to the Company including without
              limitation, login credentials, password, display name, etc. You
              further declare and affirm that all the details provided to the
              Company by you and uploaded on the Website are correct and true to
              the best of your knowledge and belief. If any information provided
              by you is incorrect, illegal, or against the provisions of any
              laws, the Company shall have the right to terminate this Agreement
              and deactivate your account on the Website without giving any
              refunds.
            </p>

            <p>
              4.3 You may request the closure of your account at any time by
              putting a request in the “Deactivate Your Account” section. Upon
              receipt of your request, your account will be permanently deleted.
              However, from the date of receipt of the request till the date
              when the account is deleted, you may cancel the request and
              continue to use our Services. Upon deactivation, all the Services
              that were availed using the Website shall cease to be available.
            </p>

            <p>
              4.4 Company may retain certain information after deactivation,
              including but not limited to your registered mobile no., email ID,
              GSTIN, etc. for audit purposes. At all times, this information
              will be handled in accordance with our Privacy Policy.
            </p>

            <h3>5. SCOPE OF WORK</h3>
            <p>
              5.1 You can place an order for our Products or Services from the
              Website. You are requested to read and check your order carefully
              before placing it;
            </p>

            <p>
              5.2 Once you place an order on the Website, we will acknowledge
              the order and share an invoice with you on the Email-ID that is
              used to create an account on the Website. The Company reserves the
              right to not accept any order from you for any reason whatsoever.
              Non-acceptance usually depends on various factors like
              non-availability of the Product or Services, no shipping or not
              deliverable at your location, etc;
            </p>

            <p>
              5.3 Upon purchase of the Product, you can use the Website to
              create your profile. This is the profile that you will share with
              people when the Product is scanned/tapped. You can change your
              profile details at any time by logging in;
            </p>

            <p>
              5.4 The Company provides you with various free as well as paid
              Service packages for you to choose from. These can be chosen at
              the time of making the purchase of the Product. You may at any
              time upgrade your package or avail a package that suits you best;
            </p>

            <p>
              5.5 Company will notify you well in advance on your registered
              Email ID about the expiration of a particular package. Upon
              expiration, you may either re-purchase any particular package or
              continue with our free package to avail minimum basic Services. To
              compare the packages, you can visit the website
              https://bubbl.cards/.
            </p>

            <h3>6. PAYMENTS</h3>
            <p>
              A. The Company provides multiple modes of payment. You can pay via
              Debit/Credit cards, UPI Payment, or net banking of all the popular
              banks;
            </p>

            <p>
              B. All fees that are charged to you are exclusive of applicable
              national, provincial, state, local, or other taxes (“Applicable
              Taxes”) unless explicitly stated otherwise. You shall be
              responsible for all Applicable Taxes, and we charge taxes in
              addition to the cost of the Product when required to do so;
            </p>

            <p>
              C. Company reserves the right to modify/change the amount charged
              for the Product(s); the amount of tax (in order to comply with the
              Applicable Law); or change any terms of this clause as it may
              think fit at any time without any prior notice to you. However,
              such modification/change shall be made applicable prospectively;
            </p>
            <p>
              D. You agree and understand that all payments shall only be made
              to bank accounts of the Company. Company or its agents,
              representatives, or employees shall never ask you to transfer
              money to any private account or to an account not held in the name
              of the Company. You agree that if you transfer any amount against
              any registration/placement of order or transaction to any bank
              account that is not legitimately held by the Company or to any
              personal account of any person, Company shall not be held liable
              for the same. You shall not hold any right to recover from the
              Company any amount which is transferred by you to any third party;
            </p>

            <p>
              E. You will not share your personal sensitive information like
              credit/debit card number, CVV, OTP, card expiry date, user IDs,
              passwords, etc. with any person including the agents, employees,
              or representatives of the Company. You shall immediately inform
              the Company if such details are demanded by any of its agents’
              employees or representatives. Company shall not be liable for any
              loss that you may incur for sharing the aforesaid details;
            </p>
            <p>
              F. You agree to provide correct and accurate financial
              information, such as credit/debit card details to the approved
              payment gateway for availing services on the Website. You shall
              not use the credit/debit card or pre-paid payment instrument which
              is not lawfully owned by you, i.e. in any transaction, you must
              use your own credit/debit card. The information provided by you
              under this clause shall be handled by the Company in accordance
              with its Privacy Policy.
            </p>

            <h3>7. INTELLECTUAL PROPERTY RIGHTS</h3>
            <p>
              7.1 The Website and the processes, and their selection and
              arrangement, including but not limited to all servers, text,
              graphics, user interfaces, visual interfaces, artwork, images,
              audio, videos, website templates and widgets, source code, object
              and computer code (collectively, the “Content”) on the Website is
              owned and/or controlled by the Company and the design, structure,
              selection, coordination, expression, look and feel and arrangement
              of such Content is protected by intellectual property rights.
              Through your use of the Website, by no means are any rights
              impliedly or expressly granted to you in respect of such Content.
              The company reserves the right to change or modify the Content
              from time to time at its sole discretion;
            </p>

            <p>
              7.2 The trademarks, logos, and service marks displayed on the
              Website (the “Marks”) are the property of the Company. You are not
              permitted to use the Marks without the prior consent of the
              Company;
            </p>

            <p>
              7.3 All the know-how, designs, and processes contained in the
              Product of the Company are either protected by Intellectual
              Property Rights or are applied for Intellectual Property Rights.
              Through the use of the Product, by no means any rights expressly
              or impliedly are granted to you in respect of such Intellectual
              Property and only a limited license is granted to you for the use
              of the Product;
            </p>

            <p>
              7.4 Except as expressly indicated to the contrary herein, the
              Company hereby grants you a non-exclusive, revocable, and
              non-transferable right to view the Content available on the
              Website, subject to the following conditions:
            </p>

            <p>
              A. You may access and use the Content solely for personal,
              informational, and internal purposes, in accordance with this
              Agreement;
            </p>

            <p>
              B. You may not modify or alter Content available on the Website;
            </p>
            <p>
              C. You may not distribute or sell, license, or otherwise make the
              Content available on the Website available to others; and
            </p>

            <p>
              D. The design, layout, or look and feel of the Website are
              protected by intellectual property rights and may not be copied or
              imitated in whole or in part.
            </p>

            <p>
              7.5 Except as expressly provided herein, you acknowledge and agree
              that you shall not copy, republish, post, display, translate,
              transmit, reproduce, or distribute any Content through any medium
              without obtaining the necessary authorization from the Company.
            </p>

            <p>
              7.6 Company may enable you to upload, display, store, and transmit
              certain information (like your contact details, social media
              profile links, etc.) for the purpose of providing Services to you
              (“Your Information”). You are the owner of your Information and
              fully retain all rights, title, and ownership thereof. The Company
              offers no express or implied warranty for the security of Your
              Information except as provided under Company’s Privacy Policy. At
              all times, you shall be responsible for displaying appropriate
              information on the Website as per the Applicable Law.
            </p>

            <p>
              7.7 Company shall not be liable for any misuse of Your Information
              by any third parties with whom you have shared Your Information
              using the Product.
            </p>

            <h3>8. YOUR COVENANTS</h3>
            <p>
              8.1 The Company grants you a non-exclusive, non-sub-licensable,
              non-transferable, revocable, and limited right to access and use
              this Website;
            </p>

            <p>
              8.2 You agree to use the Website only for purposes that are
              permitted by: (a) this Agreement(s); and (b) any Applicable Law;
            </p>

            <p>
              8.3 You agree not to access (or attempt to access) the Website by
              any means other than through the interfaces that are provided by
              the Company. You shall not use any deep link, robot, spider, or
              other automatic devices, program, algorithm or methodology, or any
              similar or equivalent manual process, to access, acquire, copy, or
              monitor any portion of the Website, or in any way reproduce or
              circumvent the navigational structure or presentation of the
              Website, to obtain or attempt to obtain any materials, documents
              or information through any means not specifically made available
              through the Website.
            </p>

            <p>
              8.4 You shall solely be responsible for maintaining the necessary
              computer/mobile equipment, internet connections, and other
              software and technologies that may be required to access, use and
              transact on the Website. You may incur access or data fees from
              third parties in connection with your purchases and Services. You
              are responsible for all such fees.
            </p>
            <p>
              8.5 You are advised to check the description of the Product
              carefully ordering on the Website.
            </p>
            <p>
              8.6 You shall not collect any names, or email addresses of any
              User(s) of the Website for the purpose of advertisement,
              solicitation, or Spam. You shall not send unsolicited emails, junk
              mail, spam, promotions, or advertisements of any kind whatsoever.
            </p>
            <p>
              8.7 You shall not indulge in any such activities that interfere
              with or disrupts access to the Website. You shall not upload any
              files that contain viruses, corrupted files, or any other similar
              software or programme that may damage the operation of the Website
              or another’s computer.
            </p>
            <p>
              8.8 You shall not attempt to gain unauthorized access to any
              portion or feature of the Website, any other systems or networks
              connected to the Website, to any Company server, or to any of the
              Services offered on or through the Website, by hacking, password
              mining or any other illegitimate means;
            </p>

            <p>
              8.9 You shall not probe, scan or test the vulnerability of the
              Website or any network connected to the Website, nor breach the
              security or authentication measures on the Website or any network
              connected to the Website;
            </p>
            <p>
              8.10 You shall not disrupt or interfere with the security of, or
              otherwise cause harm to, the Website, systems resources, accounts,
              passwords, servers, or networks connected to or accessible through
              the Websites or any affiliated or linked sites;
            </p>
            <p>
              8.11 You shall not use the Website for any purpose that is
              unlawful or prohibited by the Agreement, or to solicit the
              performance of any illegal activity or other activity which
              infringes the rights of the Company or other Third Parties;
            </p>

            <p>
              8.12 You shall not falsify or delete any author attributions,
              legal or other proper notices or proprietary designations, or
              labels of the origin or source of software or other material
              contained in a file that is uploaded;
            </p>
            <p>
              8.13 You shall not violate any applicable laws or regulations for
              the time being in force within or outside India or violate any
              terms of this Agreement;
            </p>
            <h3>9. LIMITATION OF LIABILITY</h3>
            <p>
              9.1 We do not guarantee, represent or warrant that your use of our
              service will be uninterrupted, timely, secure or error-free.
            </p>
            <p>
              9.2 We do not warrant that the results that may be obtained from
              the use of the service will be accurate or reliable.
            </p>
            <p>
              9.3 The Website, the Product, and the Services therein are
              provided by the Company on an “as is” basis without warranty of
              any kind, express, implied, statutory or otherwise;
            </p>

            <p>
              9.4 You expressly understand and agree that, to the maximum extent
              permitted by Applicable Law, Company will not be liable for any
              loss that you may incur as a consequence of unauthorized use of
              the Website, either with or without Your knowledge;
            </p>

            <p>
              9.5 The Company has endeavored to ensure that all the information
              on the Website, information relating to Products and Services is
              correct, and not offensive, harmful, inaccurate, or deceptive.
              However, the Company neither warrants nor makes any
              representations regarding the quality, accuracy, or completeness
              of any data or information.
            </p>

            <p>
              9.6 Company shall not be responsible for the delay or inability to
              use the Website or related functionalities, the provision of or
              failure to provide functionalities, or for any information,
              functionalities, and related graphics obtained through the
              Website, or otherwise arising out of the use of the Website,
              whether based on contract, tort, negligence, strict liability or
              otherwise. Further, the Company shall not be held responsible for
              the non-availability of the Website during periodic maintenance
              operations or any unplanned suspension of access to the Website
              that may occur due to technical reasons or for any reason beyond
              the Company’s control. Company accepts no liability for any errors
              or omissions, with respect to any information provided to you on
              the Website.
            </p>
            <p>
              9.7 You agree that from time to time we may remove the service for
              indefinite periods of time or cancel the service at any time,
              without notice to you.
            </p>

            <h3>10. TERM AND TERMINATION</h3>
            <p>
              10.1 You may terminate this Agreement by requesting to close your
              account at any time by putting a request in the “Deactivate Your
              Account” section on the Website. Upon receipt of your request,
              your account will be permanently deleted. However, from the date
              of receipt of the request till the date when the account is
              deleted, you may cancel the request and continue to use our
              Services. Upon deactivation, all the Services that were availed
              using the Website shall cease to be available.
            </p>

            <p>
              10.2 Upon termination, your account with the Website will be
              deactivated and all the Services provided to you till the date of
              termination shall cease to exist.
            </p>
            <h3>11. INDEMNIFICATION</h3>
            <p>
              11.1 You agree to indemnify, defend and hold harmless the Company,
              its subsidiaries, affiliates, contractors, agents, and their
              directors, officers, and employees (hereinafter individually and
              collectively referred to as “indemnified parties”) from and
              against any and all losses, liabilities, claims, suits,
              proceedings, penalties, interests, damages, demands, costs and
              expenses (including legal and other statutory fees and
              disbursements in connection therewith and interest chargeable
              thereon) asserted against or incurred by the indemnified parties
              that arise out of, or result from, in connection with your breach
              of the Agreement(s).
            </p>

            <h3>12. RELATIONSHIP OF PARTIES</h3>
            <p>
              The arrangements between the Parties under this Agreement have
              been entered into on a principal-to-principal basis and do not
              create any employee-employer relationship between the Parties.
              Nothing contained in this Agreement shall be deemed to create any
              partnership, or joint venture between the Parties or a merger of
              their assets or their fiscal or other liabilities or undertakings
              or create any employment or relationship of principal and agent
              between the Parties.
            </p>

            <h3>13. DISPUTE RESOLUTION</h3>
            <p>
              13.1 This Agreement and all transactions entered into on or
              through the Website and the relationship between you and the
              Company shall be governed in accordance with the laws of India;
            </p>
            <p>
              13.2 You agree that all claims, differences, and disputes arising
              under or in connection with or in relation to the Website, this
              Agreement, or any transactions entered on or through the Website
              or the relationship between you and the Company shall be subject
              to the exclusive jurisdiction of the courts at Chennai, Tamilnadu,
              India and you hereby accede to and accept the jurisdiction of such
              courts.
            </p>

            <h3>14. WAIVER</h3>
            <p>
              The failure, with or without intent, of any Party hereto to insist
              upon the performance by the other Party, of any term or
              stipulation of this Agreement, shall not be treated as, or be
              deemed to constitute, a modification of any terms or stipulations
              of this Agreement. Nor shall such failure or election be deemed to
              constitute a waiver of the right of such Party, at any time
              whatsoever thereafter, to insist upon performance by the other,
              strictly in accordance with any terms or provisions hereof.
            </p>

            <h3>15. ENTIRE AGREEMENT</h3>
            <p>
              The failure of us to exercise or enforce any right or provision of
              these Terms of Service shall not constitute a waiver of such right
              or provision. These Terms of Service and any policies or operating
              rules posted by us on this site or in respect to The Service
              constitutes the entire agreement and understanding between you and
              us and govern your use of the Service, superseding any prior or
              contemporaneous agreements, communications and proposals, whether
              oral or written, between you and us (including, but not limited
              to, any prior versions of the Terms of Service). Any ambiguities
              in the interpretation of these Terms of Service shall not be
              construed against the drafting party.
            </p>

            <h3>16. SEVERABILITY</h3>
            <p>
              If any term, condition, provision, covenant, or clause, etc., of
              this Agreement is held by a court of competent jurisdiction or by
              an amendment in the Applicable Law to be invalid, void, or
              unenforceable, the remainder of the terms, provisions, covenants,
              and restrictions of this Agreement shall remain in full force and
              effect and shall in no way be affected, impaired or invalidated.
            </p>

            <h3>17. COMMUNICATION AND NOTICES</h3>
            <p>
              All communications/requests or notices required to be given or
              made under this Agreement to the Parties shall be given in
              writing. Such communication/request or notice shall be deemed to
              have been duly given or made if the same is in writing and sent by
              i) e-mail; ii) by personal delivery; or iii) by registered post or
              by a recognized courier to the address of the relevant Party (if
              the same is not returned to the sender as undelivered, the
              communication/request or notice shall be deemed to have been
              given, seven days after the envelope containing it was so posted).
            </p>
            <p>
              The address and other details of the Parties for the purpose of
              communication, unless otherwise notified in writing to the other
              Parties shall be as follows:{" "}
            </p>

            <h3>For the Company:</h3>
            <p>
              Name: <span>TECHNOLOGY (OPC) PRIVATE LIMITED </span>
            </p>
            <p>
              Address: 6/9, MV Enclave, 3rd cross street CIT Colony, Mylapore,
              Chennai, Tamil Nadu, 600004
            </p>
            <p>Email ID: Sahilreddy21@gmail.com</p>

            <h3>For You:</h3>
            <p>
              The contact details given by you at the time of the creation of
              your account on the website.
            </p>

            <h3>18. CHANGES TO TERMS OF SERVICE</h3>
            <p>
              You can review the most current version of the Terms of Service at
              any time at this page. We reserve the right, at our sole
              discretion, to update, change or replace any part of these Terms
              of Service by posting updates and changes to our website. It is
              your responsibility to check our website periodically for changes.
              Your continued use of or access to our website or the Service
              following the posting of any changes to these Terms of Service
              constitutes acceptance of those changes.
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footer_logo}>
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className={styles.footerSub}>
            <div className={styles.customer_care}>
              <p>Customer Care</p>
              <div>
                <a href="tel:+917358108634" className={styles.customer_number}>
                  +91 7358108634&nbsp;&nbsp;
                </a>
                <a href="tel:+917845861552" className={styles.customer_number}>
                  +91 7845861552
                </a>
              </div>
            </div>
            <div className={styles.quick_links}>
              <p>Quick Links</p>
              <div className={styles.quickLink}>
                <a href="/">Home</a>
                {tokenNull ? (
                  <a href="/shopPage">Buy Device</a>
                ) : (
                  <a href="/shop">Buy Device</a>
                )}

                <a href="/analyticsPro">Analytics</a>
                <a href="/order">My Orders</a>
              </div>
            </div>
            <div className={styles.contact}>
              <p>Contact Information</p>
              <div className={styles.contact_info}>
                <a href="mailto:support@bubbl.cards">support@bubbl.cards</a>
                <p>
                  MV Enclave, 3rd Cross Street, CIT Colony, Mylapore Chennai,
                  Tamil Nadu, 600004
                </p>
                <div className={styles.footer_icon}>
                  <a
                    href="https://www.instagram.com/bubbl.cards/"
                    target="blank"
                  >
                    <Image src={Insta} alt="instagram" width={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bubbl-cards/"
                    target="blank"
                  >
                    <Image src={Link} alt="linkdin" width={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_twoo}>
            <a href="/">
              <div className={styles.footer_logotwo}>
                <Logo />
              </div>
            </a>
            <div className={styles.responsive_footer}>
              <div className={styles.customerCare}>
                <p>Customer Care</p>
                <a href="tel:+917358108634">
                  <p className={styles.number_res}>+91 7358108634</p>
                  <p className={styles.number_res}>+91 7845861552</p>
                </a>
                <p>Contact Information</p>

                <a href="mailto:bubbl@gmail.com" className={styles.number_res}>
                  support@bubbl.cards
                </a>

                <div>
                  MV Enclave, 3rd Cross Street, CIT Colony, Mylapore Chennai,
                  Tamil Nadu, 600004
                </div>
                <div className={styles.footer_icon}>
                  <a
                    href="https://www.instagram.com/bubbl.cards/"
                    target="blank"
                  >
                    <Image src={Insta} alt="instagram" width={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bubbl-cards/"
                    target="blank"
                  >
                    <Image src={Link} alt="linkdin" width={15} />
                  </a>
                </div>
              </div>
              <div className={styles.quic_res}>
                <h1 className={styles.footer_h}>Quick Links</h1>
                <a href="/" className={styles.number_restwo}>
                  Home
                </a>
                <a href="/myPlan" className={styles.number_restwo}>
                  My Plan
                </a>

                <p onClick={shopPageLink}>Buy Device</p>
                <a href="/contact" className={styles.number_restwo}>
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_line} />
        <div className={styles.footer_second}>
          <div className={styles.rights}>
            <p>Bubbl 2023. All rights reserved</p>
          </div>
          <div className={styles.rights}>
            <p>Powered By: XPULSAR TECHNOLOGIES PVT. LTD</p>
          </div>
          <div className={styles.terms}>
            <Button variant="none" onClick={() => setLgShowsRefund(true)}>
              Returns & Refunds Policy
            </Button>
            <Button variant="none" onClick={() => setLgShow(true)}>
              Privacy & Policy
            </Button>
            <Button variant="none" onClick={() => setLgShowsTerms(true)}>
              Terms & Conditions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
