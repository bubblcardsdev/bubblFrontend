/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Accordion from "react-bootstrap/Accordion";

import styles from "./accordian.module.css";

export default function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className={styles.accordianhead}>
          What is Bubbl, and what service does it offer?
        </Accordion.Header>
        <Accordion.Body className={styles.accordianbody}>
          Bubbl represents the modern-day individual that loves networking and
          hustling! Incorporated in Chennai, India, with the sole purpose of
          revolutionizing the way people network, Bubbl offers an innovative
          alternative to the classic paper business card allowing users to
          choose from a variety of NFC enabled cards, phone tiles and pop
          sockets that come with a host of prebuilt features. Users can create
          and manage multiple Bubbl profiles that act as digital business cards
          as well as shortcuts to social handles, website URLs, portfolios,
          resumes etc. All it takes is a tap on any phone and they receive your
          Bubbl profile. Bubbl is fully customizable, easy to use and easy on
          the planet!
        </Accordion.Body>
      </Accordion.Item>
      <div className={styles.line} />
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Do I need to download any app to use this product?
        </Accordion.Header>
        <Accordion.Body>
          No! There is no app needed to get your Bubbl device up and running. In
          fact, the other person does not need an app as well! Share your
          contact info and your Bubbl profile without the middleman. Everything
          works through your phone’s browser, streamlining the time for setup
          and allowing you to share your contact seamlessly with any phone!
          Simply scan the QR code located on the back of the package to get your
          Bubbl set-up and get ready to connect with your network in style.
        </Accordion.Body>
      </Accordion.Item>
      <div className={styles.line} />
      <Accordion.Item eventKey="2">
        <Accordion.Header>Where do I place my Bubbl device?</Accordion.Header>
        <Accordion.Body>
          Every Bubbl is designed with multiple use cases in mind. Here's what
          we recommend:
          <li>
            Bubbl Card: Wherever you might store your credit cards, driver’s
            license, and so on
          </li>
          <li>Bubbl Tile: Designed to go underneath your phone case</li>
          <li>
            Bubbl Coin: Designed to go on-top of your phone case [or anywhere
            else you can stick it]
          </li>
          <li>
            Placing your Bubbl tile and coin on your respective smartphone is
            easy. Here's what we suggest
          </li>
          <li>
            iPhone: Place the Tile/Coin on the back and towards the bottom of
            your phone
          </li>
          <li>
            For an Android: Place the Tile/Coin on the back and at the top near
            the camera or down towards the bottom of the phone.
          </li>
          <li>
            {" "}
            The reason for these specific placements is due to where iPhones and
            Androids have their NFC scanning technologies installed. The
            iPhone's scanner is at the top of the phone near the camera, whereas
            the Android's scanner is in the middle of the phone. By adhering to
            our suggested placements for your Bubbl, you will ensure the best
            possible experience when connecting with others!
          </li>
        </Accordion.Body>
      </Accordion.Item>
      <div className={styles.line} />
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          What if I want to get cards for my entire team or company?
        </Accordion.Header>
        <Accordion.Body>
          Bubbl for teams is our primary differentiator. No matter if you are a
          startup with a team of 10 or an established company with 1000
          employees, Bubbl has a fully customizable plan for you. Simply reach
          out to our team here and we will get in touch!
        </Accordion.Body>
      </Accordion.Item>
      <div className={styles.line} />
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          What materials are the Bubbl devices made of?
        </Accordion.Header>
        <Accordion.Body>
          Our Bubbl Devices are all made in India out of eco-friendly materials
          with precision and pristine quality control checks. Here’s a list of
          the materials and printing options –
          <li>
            Bubbl PVC cards - a soft touch, matte finish polycarbonate card with
            a glossy spot UV logo.
          </li>
          <li>
            Bubbl Metal cards – Matt black or silver finish, stainless steel
            cards with laser etched design.
          </li>
          <li>
            Bubbl Tiles – NFC coin with raised dome of clear epoxy finish for
            durable shine.
          </li>
          <li>
            Bubbl Coins – NFC coins with a flat finish that is thin and
            flexible. only 3mm thin.{" "}
          </li>
        </Accordion.Body>
      </Accordion.Item>
      <div className={styles.line} />
    </Accordion>
  );
}
