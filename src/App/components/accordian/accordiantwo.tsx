/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "./accordian.module.css";

export default function BasicExample() {
  return (
    <Accordion defaultActiveKey={["0"]}>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={styles.accordianhead}>
          <h2>Claim Your</h2>
          <p>Personalised Link Now!</p>
        </Accordion.Header>
        <Accordion.Body className={styles.accordianbody}>
          Perfect for startups, entreprenuers, businesses, restuarants,
          corporations even creators, everyone should have a bubbl, connections
          make the world run, don’t be shy share who you are with bubbl. Give
          people instant access to social links, contact info etc.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
