/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";

import close_Icon from "../../../../public/listing_profile_icons/close_icon.svg";
import delete_Icon from "../../../../public/listing_profile_icons/delete_icon.svg";
import { deleteDeviceApi } from "../../services/deleteDevice";
import ButtonComp from "../ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./deleteDevice.module.css";

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
  const deactivateFunction = async (values: any) => {
    const Obj = {
      deviceId: values.DeviceId,
    };
    const res = await deleteDeviceApi(Obj);
    getAllDeviceFunction();
    onClose();
  };

  return (
    <div className={`${styles["delete-main-container"]}`}>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Body>
          <div className={`${styles["delete-close-img-circle-div-container"]}`}>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
              onClick={onClose}
              className={`${styles["delete-close-img-circle"]}`}
            >
              <Image src={close_Icon} width="15px" height="15px" alt="bubbl" />
            </div>
          </div>
          <div className={`${styles["delete-img-circle-div-container"]}`}>
            <div className={`${styles["delete-img-circle"]}`}>
              <Image src={delete_Icon} width="50px" height="50px" alt="bubbl" />
            </div>
          </div>
          <div className={`${styles["delete-container"]}`}>
            <h4>Delete Device</h4>
            <h5>You’re going to delete the device.</h5>
            <p>Are You Sure ?</p>

            <div className={`${styles["delete-buttons"]}`}>
              <ButtonComp
                label="No, Keep It."
                className={`${styles["delete-buttons-one"]}`}
                onClick={onClose}
                variant="none"
              />
              <ButtonComp
                label="Yes, Delete!"
                variant="none"
                className={`${styles["delete-buttons-two"]}`}
                onClick={() => deactivateFunction(deactiveValues)}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeActivateModal;
