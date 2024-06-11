/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";

import MailView from "../Phase2_Templates/Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/mail_View.svg";
import styles from "./modals.module.css";

function ViewMailModal({
  onHide,
  userProfile,
  getAllProfile,
}: {
  onHide: ModalProps["onHide"];
  userProfile: any;
  getAllProfile: any;
}) {
  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Email</h2>

          {(getAllProfile && getAllProfile?.profileEmails.length) > 0 ? (
            <>
              {(getAllProfile?.profileEmails || [])
                .slice(0, 2)
                .filter((email: any) => email?.emailId !== "")
                .map((email: any, idx: any) => (
                  <React.Fragment key={`email_${idx}`}>
                    <a
                      className={styles.CommonSecView}
                      href={`mailto:${email.emailId}`}
                    >
                      <h3>{email.emailId}</h3>
                      <div className={styles.IconsCall}>
                        <Image src={MailView} alt="Call" />
                      </div>
                    </a>
                    <div className={styles.line_View} />
                  </React.Fragment>
                ))}
            </>
          ) : (
            <>
              {((userProfile && userProfile.data.profileEmails) || [])
                .slice(0, 2)
                .filter((email: any) => email.emailId !== "")
                .map((email: any, idx: any) => (
                  <React.Fragment key={`email_${idx}`}>
                    <a
                      className={styles.CommonSecView}
                      href={`mailto:${email.emailId}`}
                    >
                      <h3>{email.emailId}</h3>
                      <div className={styles.IconsCall}>
                        <Image src={MailView} alt="Call" />
                      </div>
                    </a>
                    <div className={styles.line_View} />
                  </React.Fragment>
                ))}
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

export default ViewMailModal;
