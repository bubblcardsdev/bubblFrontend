/* eslint-disable prettier/prettier */
import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";
import { ProfileStateT } from "types/profile";

import styles from "./modals.module.css";

function ViewAddressModal({
  onHide,
  userProfile,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
}) {
  const firstAddress: any = userProfile?.data ? userProfile.data : userProfile;
  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Address</h2>

          {firstAddress && (
            <>
              <div className={styles.CommonSecViewLocation}>
                {firstAddress.address && (
                  <>
                    <h3>Address:</h3>
                    <p>{firstAddress.address}</p>
                  </>
                )}
                {firstAddress.city && (
                  <>
                    <h3>City:</h3>
                    <p>{firstAddress.city}</p>
                  </>
                )}
                {firstAddress.state && (
                  <>
                    <h3>State:</h3>
                    <p>{firstAddress.state}</p>
                  </>
                )}
                {firstAddress.zipCode && (
                  <>
                    <h3>ZipCode:</h3>
                    <p>{firstAddress.zipCode}</p>
                  </>
                )}
                {firstAddress.country && (
                  <>
                    <h3>Country:</h3>
                    <p>{firstAddress.country}</p>
                  </>
                )}
              </div>
              <div className={styles.line_View} />
            </>
          )}

          <div className={styles.ActionModal_Social}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ViewAddressModal;
