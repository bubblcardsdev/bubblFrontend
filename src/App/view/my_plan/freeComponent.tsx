/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-children-prop */
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import free from "../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/free-badge-icon.png";
import arrow from "../../../../public/order_page/checkout-arrow.svg";
import styles from "./myPlanPage.module.css";
import PlanSubscribeModal from "./SubScribeModal/subscribeModal";

function Free() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.list_plan}>
      {/* Free Plan */}
      <div>
        <div className={styles.free_plan}>
          <div className={styles.free_plan_header}>
            <Image src={free} className={styles.free_plan_img} alt="bubbl" />
            <h2>Bubbl FREE</h2>
          </div>
          <div className={styles.free_plan_hamburger}>{/* Removed */}</div>
        </div>
        <div className={styles.free_plan_details}>
          <Col xl={8} md={11} className={styles.free_plan_bg}>
            <h3>
              <span>Bubbl Free</span> comes with single unique URL which can be
              linked to only 1 card
            </h3>
            <div className={styles.line_resp}>
              {/* <Image src={line} alt="bubbl"/> */}
            </div>

            <div className={styles.bubble_free}>
              <h4>Plan Validity :</h4>
              <p>Lifetime</p>
            </div>
          </Col>

          <div className={styles.freeBtnDiv}>
            <Button
              type="button"
              variant="none"
              className={styles.freeBtn}
              onClick={() => setShowModal(true)}
            >
              BUY PLAN
              <span>
                <Image width={16} height={20} src={arrow} alt="bubbl" />
              </span>
            </Button>
          </div>
        </div>
        {showModal === true && (
          <PlanSubscribeModal show={showModal} onClose={handleClose} />
        )}
      </div>
    </div>
  );
}

export default Free;
