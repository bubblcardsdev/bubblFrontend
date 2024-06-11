/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getAccessToken } from "src/App/helpers/local-storage";
import { initiatePayment } from "src/App/services/myPlan/myPlanServices";

import arrow from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/btnArrow.svg";
import closeIcon from "../../../../../public/listing_profile_icons/close_icon.svg";
import styles from "./subscribeModal.module.css";

type Props = {
  show: any;
  onClose: any;
};
const PlanSubscribeModal: React.FC<Props> = ({ show, onClose }) => {
  const router = useRouter();
  const [yearlyPlanActive, setMonthlyPlanActive] = useState<any>(false);

  const updatePlans = async (planIdVal: number) => {
    let trueOrFalse = "";
    const token = getAccessToken()!;

    if (token === null || token === undefined) {
      router.replace("/login");
    }
    if (yearlyPlanActive === true) {
      trueOrFalse = "annually";
    } else {
      trueOrFalse = "monthly";
    }
    const planObj = {
      planId: planIdVal,
    };
    const initiatePay = await initiatePayment(planObj);
    if (initiatePay?.data?.success) {
      localStorage.setItem("failurePath", "myPlanPage");
      router.push({
        pathname: "/processPayment",
        query: {
          orderId: initiatePay?.data?.createOrder?.id,
          value: trueOrFalse === "monthly" ? 199 : 1999,
          orderType: 1,
          planType: trueOrFalse === "monthly" ? 0 : 1,
        },
      });
    }
  };

  return (
    <div className={`${styles["delete-main-container"]}`}>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Body>
          <div className={styles.step2DetailsTemplate}>
            <div
              className={`${styles["delete-close-img-circle-div-container"]}`}
            >
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div
                onClick={onClose}
                className={`${styles["delete-close-img-circle"]}`}
              >
                <Image src={closeIcon} width="15px" height="15px" alt="bubbl" />
              </div>
            </div>

            <div className={`${styles["delete-container"]}`}>
              <h4>Buy Your Plan</h4>
            </div>

            <Form.Group className={styles.check}>
              <Form.Check
                checked={!yearlyPlanActive}
                onClick={() => setMonthlyPlanActive(false)}
                value="design"
                type="radio"
                aria-label="radio 1"
                label="Monthly
                    INR 199/Month"
                className={styles.radio}
              />
              <Form.Check
                checked={yearlyPlanActive}
                onClick={() => setMonthlyPlanActive(true)}
                value="food"
                type="radio"
                aria-label="radio 2"
                label="Annually
                    INR 1999/Year"
                className={styles.radio}
              />
            </Form.Group>
            <div className={`${styles.buyPlan}`}>
              <Button
                className={styles.purchaseBtnTwo}
                onClick={() => updatePlans(2)}
              >
                SUBSCRIBE
                <Image src={arrow} className={styles.arrowBtn} alt="bubbl" />
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PlanSubscribeModal;
