/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import { Button, Modal, ModalProps } from "react-bootstrap";

import WebView from "../Phase2_Templates/Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/earth_view.svg";
import styles from "./modals.module.css";

function ViewWebsiteModal({
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
          <h2>Website</h2>
          {(getAllProfile && getAllProfile?.profileWebsites.length) > 0 ? (
            <>
              {console.log(getAllProfile.profileWebsites)}
              {(getAllProfile?.profileWebsites || [])
                .slice(0, 2)
                .filter((websiteLink: any) => websiteLink.website !== "")
                .map((websiteLink: any) => (
                  <div
                    onClick={() => {
                      let URL = "";
                      console.log(websiteLink?.website);
                      if (!websiteLink?.website.includes("https://")) {
                        URL = `https://${websiteLink?.website}`;
                      } else {
                        URL = websiteLink?.website;
                      }

                      window.open(URL);
                    }}
                  >
                    <p className={styles.CommonSecView}>
                      <h3>{websiteLink.website}</h3>
                      <div className={styles.IconsCall}>
                        <Image src={WebView} alt="Call" />
                      </div>
                    </p>
                    <div className={styles.line_View} />
                  </div>
                ))}
            </>
          ) : (
            ((userProfile && userProfile.data.profileWebsites) || [])
              .slice(0, 2)
              .filter((websiteLink: any) => websiteLink.website !== "")
              .map((websiteLink: any) => (
                <div
                  onClick={() => {
                    let URL = "";

                    if (!websiteLink?.website.includes("https://")) {
                      URL = `https://${websiteLink?.website}`;
                    } else {
                      URL = websiteLink?.website;
                    }

                    window.open(URL);
                  }}
                >
                  <p className={styles.CommonSecView}>
                    <h3>{websiteLink.website}</h3>
                    <div className={styles.IconsCall}>
                      <Image src={WebView} alt="Call" />
                    </div>
                  </p>
                  <div className={styles.line_View} />
                </div>
              ))
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

export default ViewWebsiteModal;
