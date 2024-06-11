/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";

import closeIcon from "../../../../images/Phase_2_All_Assets/comman_assets/deleteIconnew.svg";
import deactive_Icon from "../../../../public/listing_profile_icons/deactivate_icon.svg";
import { activateApi, deActivateApi } from "../../services/deActivateApi";
import ButtonComp from "../ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./deactivate.module.css";

type Props = {
  show: any;
  onClose: any;
  deactiveValues: any;
  getAllDeviceFunction: any;
};

// eslint-disable-next-line react/function-component-definition
const DeActivateModal: React.FC<Props> = ({
  show,
  onClose,
  deactiveValues,
  getAllDeviceFunction,
}) => {
  const deactivateFunction = async () => {
    const Obj = {
      accountDeviceLinkId: deactiveValues?.DeviceLink?.AccountDeviceLinkId,
    };
    const res = await deActivateApi(Obj);
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
                <Image src={closeIcon} alt="bubbl" />
              </div>
            </div>
            <div className={`${styles["delete-img-circle-div-container"]}`}>
              <div className={`${styles["delete-img-circle"]}`}>
                <Image
                  src={deactive_Icon}
                  width="50px"
                  height="50px"
                  alt="bubbl"
                />
              </div>
            </div>
            <div className={`${styles["delete-container"]}`}>
              <h4>Deactivate Device</h4>
              <h5>You are going to deactive the device.</h5>
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

export default DeActivateModal;
