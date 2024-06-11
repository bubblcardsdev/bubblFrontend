/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";

import CallView from "../Phase2_Templates/Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/call_View.svg";
import styles from "./modals.module.css";

function ViewMobileNumberModal({
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
          <h2>Phone Number</h2>

          {getAllProfile?.profilePhoneNumbers.length > 0 ? (
            <div style={{ color: "red" }}>
              {(getAllProfile?.profilePhoneNumbers || [])
                .slice(0, 2)
                .filter((phone: any) => phone.phoneNumber !== "")
                .map((phone: any, idx: any) => (
                  <React.Fragment key={`phone_${idx}`}>
                    <a
                      className={styles.CommonSecView}
                      href={`tel:${phone.countryCode}${phone.phoneNumber}`}
                    >
                      <h3>{`${phone.countryCode} ${phone.phoneNumber}`}</h3>
                      <div className={styles.IconsCall}>
                        <Image src={CallView} alt="Call" />
                      </div>
                    </a>
                    <div className={styles.line_View} />
                  </React.Fragment>
                ))}
            </div>
          ) : (
            <>
              {((userProfile && userProfile.data.profilePhoneNumbers) || [])
                .slice(0, 2)
                .filter((phone: any) => phone.phoneNumber !== "")
                .map((phone: any, idx: any) => (
                  <React.Fragment key={`phone_${idx}`}>
                    <a
                      className={styles.CommonSecView}
                      href={`tel:${phone.countryCode}${phone.phoneNumber}`}
                    >
                      <h3>{`${phone.countryCode} ${phone.phoneNumber}`}</h3>
                      <div className={styles.IconsCall}>
                        <Image src={CallView} alt="Call" />
                      </div>
                    </a>
                    <div className={styles.line_View} />
                  </React.Fragment>
                ))}
            </>
          )}

          {/* {(userProfile.data.profilePhoneNumbers || [])
            .slice(0, 2)
            .filter((phone: any) => phone.phoneNumber !== "")
            .map((phone: any, idx: any) => (
              <React.Fragment key={`phone_${idx}`}>
                <a
                  className={styles.CommonSecView}
                  href={`tel:${phone.countryCode}${phone.phoneNumber}`}
                >
                  <h3>{phone.phoneNumber}</h3>
                  <div className={styles.IconsCall}>
                    <Image src={CallView} alt="Call" />
                  </div>
                </a>
                <div className={styles.line_View} />
              </React.Fragment>
            ))} */}

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

export default ViewMobileNumberModal;
