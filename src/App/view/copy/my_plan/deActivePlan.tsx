/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";
import { cancelPlan } from "src/App/services/myPlan/myPlanServices";

import close_Icon from "../../../../../public/listing_profile_icons/close_icon.svg";
import deactive_Icon from "../../../../../public/listing_profile_icons/deactivate_icon.svg";
import ButtonComp from "../../../components/ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./deActivePlan.module.css";

type Props = {
  show: any;
  onClose: any;
};

// eslint-disable-next-line react/function-component-definition
const DeActivatePlanModal: React.FC<Props> = ({ show, onClose }) => {
  const deactivateFunction = async () => {
    const res = await cancelPlan();
    onClose();
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
                <Image
                  src={close_Icon}
                  width="15px"
                  height="15px"
                  alt="bubbl"
                />
              </div>
            </div>

            <div className={`${styles["delete-container"]}`}>
              <h4>Deactivate Plan</h4>
              <h5>You are going to deactive the plan.</h5>
              <p>Are You Sure ?</p>

              <div className={`${styles["delete-buttons"]}`}>
                <ButtonComp
                  label="No, Keep It."
                  className={`${styles["delete-buttons-one"]}`}
                  onClick={onClose}
                  variant="none"
                />
                <ButtonComp
                  label="Yes, Deactivate!"
                  variant="none"
                  className={`${styles["delete-buttons-two"]}`}
                  onClick={() => deactivateFunction()}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeActivatePlanModal;
