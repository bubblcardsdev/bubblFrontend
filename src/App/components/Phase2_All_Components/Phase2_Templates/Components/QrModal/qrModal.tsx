/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import QrOutlined from "../../Free_Templates/Free_Template_2/Components/icons/qr";

import Qr from "../../Images/assets_for_profile_templates/Common/Qr.svg";
import QRCodeModal from "../Qr/qr";
import styles from "./qrModal.module.css";

function QrModal({
  saveIconBorderColor,
  saveIconBackgroundColor,
  qrComponent,
  qrImageUrl,
  linkVal,
}: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton={false} style={{ backgroundColor: "black" }}>
          <Modal.Title style={{ color: "#AB39D2" }} className={styles.QrText}>
            Qr Code
          </Modal.Title>
          <Button
            onClick={handleClose}
            style={{ background: "transparent", border: "0" }}
          >
            X
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <QRCodeModal
            // eslint-disable-next-line no-unneeded-ternary
            deviceIdQR={linkVal.deviceUid ? linkVal.deviceUid : linkVal}
            qrImageUrl={qrImageUrl}
          />
        </Modal.Body>
      </Modal>

      <div
        className={styles.buttons}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <p
          onClick={() => {
            handleShow();
          }}
          className={styles.contact_black_btntwo}
          style={{
            // border: `1px solid ${saveIconBorderColor}`,
            backgroundColor: "tranparent",
          }}
        >
          {qrComponent ? (
            qrComponent
          ) : (
            <Image src={Qr} alt="QrIcon" width={24} height={24} />
          )}
        </p>
      </div>
    </>
  );
}
export default QrModal;
