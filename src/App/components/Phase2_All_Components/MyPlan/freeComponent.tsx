import Image from "next/image";
import { Col } from "react-bootstrap";

import Free from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/free-badge-icon.png";
import styles from "./plan.module.css";

function FreeComponent() {
  return (
    <div className={styles.FreeProDiv}>
      <div className={styles.free_plan}>
        <div className={styles.free_plan_header}>
          <Image src={Free} className={styles.free_plan_img} alt="bubbl" />
          <h2>Bubbl FREE</h2>
        </div>
      </div>
      <div className={styles.free_plan_details}>
        <Col xl={8} md={11} className={styles.free_plan_bg}>
          <h3>
            <span>Bubbl Free</span> comes with single unique URL which can be
            linked to only 1 card
          </h3>
          <div className={styles.line_resp}>
            {/* <Image src={line} alt="bubbl" /> */}
          </div>

          <div className={styles.bubble_free}>
            <h4>Plan Validity :</h4>
            <p>Lifetime</p>
          </div>
        </Col>
      </div>
    </div>
  );
}
export default FreeComponent;
