/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import close_Icon from "../../../../images/Phase_2_All_Assets/comman_assets/deleteIconnew.svg";
import success from "../../../../public/listing_profile_icons/activate_icon.svg";
import { activateApi } from "../../services/deActivateApi";
import ButtonComp from "../ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./activate.module.css";

type Props = {
  show: any;
  onClose: any;
  activateValues: any;
  getAllDeviceFunction: any;
};

// eslint-disable-next-line react/function-component-definition
const ActivateModal: React.FC<Props> = ({
  show,
  onClose,
  activateValues,
  getAllDeviceFunction,
}) => {
  const activateFunction = async () => {
    const Obj = {
      accountDeviceLinkId: activateValues?.DeviceLink?.AccountDeviceLinkId,
    };
    const res = await activateApi(Obj);
    getAllDeviceFunction();
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
                  // width="15px"
                  // height="15px"
                  alt="bubbl_closeIcon"
                />
              </div>
            </div>
            <div className={`${styles["delete-img-circle-div-container"]}`}>
              <div className={`${styles["delete-img-circle"]}`}>
                <Image src={success} width="50px" height="50px" alt="bubbl" />
              </div>
            </div>
            <div className={`${styles["delete-container"]}`}>
              <h4>Activate Device</h4>
              <h5>You’re going to activate your Device.</h5>
              <p>Are You Sure ?</p>

              <div className={`${styles["delete-buttons"]}`}>
                <ButtonComp
                  label="No, Keep It."
                  className={`${styles["delete-buttons-one"]}`}
                  onClick={onClose}
                  variant="none"
                />
                <ButtonComp
                  label="Yes, Activate!"
                  variant="none"
                  className={`${styles["delete-buttons-two"]}`}
                  onClick={() => activateFunction()}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ActivateModal;
