import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

import flow from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/01.svg";
import flowOne from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/02.svg";
import flowTwo from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/03.svg";
import flowThree from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/04.svg";
import styles from "./header.module.css";

function WorkFlow() {
  const numbers = [
    { id: "01", letter: "Start by creating a profile" },
    { id: "02", letter: "Purchase and link your Bubbl device" },
    { id: "03", letter: "Choose your template" },
    { id: "04", letter: "Customize and start using your Bubbl device" },
  ];

  return (
    <div className="container">
      <h3 className={styles.create_profile_header}>How it Works</h3>
      <div className={styles.workflow_responsive_section}>
        <div className={styles.workflow_responsive} />
        <div className={styles.Wflow_responsive}>
          <div>
            <Image src={flow} alt="bubbl" />
          </div>
          <div>
            <Image src={flowOne} alt="bubbl" />
          </div>
          <div>
            <Image src={flowTwo} alt="bubbl" />
          </div>
          <div>
            <Image src={flowThree} alt="bubbl" />
          </div>
        </div>

        <Row className={styles.number_section}>
          {numbers.map((val: any) => (
            <Col key={val.id}>
              <div>
                <div className={styles.number_div}>
                  <div className={styles.worknumber_align}>{val.id}</div>
                </div>
                <div className={styles.workingword_align}>{val.letter}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className={styles.workflow}>
        <div className={styles.Wflow}>
          <div>
            <Image src={flow} alt="bubbl" />
          </div>
          <div>
            <Image src={flowOne} alt="bubbl" />
          </div>
          <div>
            <Image src={flowTwo} alt="bubbl" />
          </div>
          <div>
            <Image src={flowThree} alt="bubbl" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkFlow;
