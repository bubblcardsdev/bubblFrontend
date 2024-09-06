/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import Delete from "../Phase2_Templates/Images/assets_for_profile_templates/Common/delete-icon.svg";
import styles from "./modals.module.css";

const emptyWebsite = {
  id: null,
  profileId: null,
  website: "",
  websiteType: "Work",
  checkBoxStatus: true,
  activeStatus: true,
  ProfileId: null,
};

function EditWebsiteModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const initialWebsite = (userProfile.data.profileWebsites || []).slice(0, 2);

  for (let i = initialWebsite.length; i < 2; i += 1) {
    initialWebsite.push({ ...emptyWebsite });
  }

  const [websites, setWebsites] = useState<{
    data: IProfile["profileWebsites"];
    errors: Record<number, string>;
  }>({
    data: initialWebsite,
    errors: {},
  });
  console.log(userProfile, "profile");
  const [isEnabled, setEnabled] = useState(userProfile.data.websiteEnable);

  const handleEmailChange = (value: string, index: number) => {
    setWebsites((prevWebsite) => ({
      data: (prevWebsite.data || []).map((websiteLink, idx) => {
        if (idx === index) {
          return { ...websiteLink, website: value };
        }
        return websiteLink;
      }),
      errors: {
        ...prevWebsite.errors,
      },
    }));
  };

  const isAnyWebsiteFilled = () => {
    const hasErrors = Object.values(websites.errors).some(
      (error) => error !== ""
    );
    return !hasErrors; // Only checking for errors now
  };
  const handleDeleteWebsite = (idx: any) => {
    const updatedWebsites = [...websites.data];
    updatedWebsites[idx].website = ""; // Clear the website link at index 'idx'
    setWebsites({ data: updatedWebsites, errors: [] }); // Update the websites array
  };
  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Edit Website</h2>
          <div className={styles.line_View} />
          <Form>
            <div className={styles.checked_box} style={{ display: "none" }}>
              <h3>Disable Website</h3>
              <Form.Check
                type="switch"
                label=""
                onChange={() => setEnabled((enable) => !enable)}
                checked={isEnabled}
                className={styles.checkToggle}
              />
            </div>
            {(websites.data || []).map((websiteLink, idx) => (
              <Form.Group key={idx} className={styles.SocialHead}>
                <div className={styles.placeholder_head}>
                  <Form.Label>Edit Website {idx + 1}</Form.Label>
                  <div className={styles.deleteBtn}>
                    <Image
                      src={Delete}
                      alt="delete"
                      onClick={() => handleDeleteWebsite(idx)}
                    />
                  </div>
                </div>
                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="email"
                    placeholder="https://website.com/"
                    value={websiteLink.website}
                    // disabled={!isEnabled}
                    maxLength={50}
                    onChange={(e) => {
                      handleEmailChange(e.target.value, idx);
                    }}
                  />
                  {websites.errors[idx] && (
                    <div className={styles.error}>{websites.errors[idx]}</div>
                  )}
                </div>
              </Form.Group>
            ))}
          </Form>
          <div className={styles.ActionModal_Social}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                userProfileDispatch({
                  type: "update",
                  payload: {
                    profileWebsites: websites.data,
                    websiteEnable: isEnabled,
                  },
                });
                if (onHide) {
                  onHide();
                }
              }}
              className={styles.ModalSave}
              disabled={!isAnyWebsiteFilled}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditWebsiteModal;
