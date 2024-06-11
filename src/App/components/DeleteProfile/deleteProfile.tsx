/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import { deleteDeviceApi } from "../../services/deleteDevice";
import ButtonComp from "../ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./deleteProfile.module.css";

type Props = {
  show: any;
  onClose: any;
  deleteValues: any;
  getAllDeviceFunction: any;
};

// eslint-disable-next-line react/function-component-definition
const DeleteModal: React.FC<Props> = ({
  show,
  onClose,
  deleteValues,
  getAllDeviceFunction,
}) => {
  const [deleteDeviceId, setDeleteDeviceId] = useState<any>();

  const deleteFunction = async (values: any) => {
    const Obj = {
      deviceId: values,
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
              x
            </div>
          </div>
          <div className={`${styles["delete-img-circle-div-container"]}`}>
            {/* <div className={`${styles["delete-img-circle"]}`}>1</div> */}
          </div>
          <div className={`${styles["delete-container"]}`}>
            <h4>Delete Device</h4>
            <div>You are going to delete the device.</div>
            <div>Are You Sure ?</div>

            <div className={`${styles["delete-buttons"]}`}>
              <ButtonComp
                label="No keep it"
                className={`${styles["delete-buttons-one"]}`}
                onClick={onClose}
              />
              <ButtonComp
                label="Yes Delete!"
                variant="secondary"
                onClick={() => deleteFunction(deleteValues?.DeviceId)}
              />
            </div>
            {/* ); */}
            {/* })} */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteModal;
