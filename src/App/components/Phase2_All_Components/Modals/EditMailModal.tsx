/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import Delete from "../Phase2_Templates/Images/assets_for_profile_templates/Common/delete-icon.svg";
import styles from "./modals.module.css";

const emptyEmail = {
  activeStatus: true,
  checkBoxStatus: true,
  emailId: "",
  emailType: "Personal",
  id: null,
  profileId: null,
  ProfileId: null,
};

function EditEmailIdModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const initialEmails = (userProfile.data.profileEmails || []).slice(0, 2);

  const isValidEmail = (email: string) => {
    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  for (let i = initialEmails.length; i < 2; i += 1) {
    initialEmails.push({ ...emptyEmail });
  }

  const [emails, setEmails] = useState<{
    data: IProfile["profileEmails"];
    errors: Record<number, string>;
  }>({
    data: initialEmails,
    errors: {},
  });
  const [isEnabled, setEnabled] = useState(userProfile.data.emailEnable);

  const isValid = () => {
    const hasErrors = Object.values(emails.errors).some(
      (error) => error !== ""
    );
    return !hasErrors; // Only checking for errors now
  };
  const handleEmailChange = (value: string, index: number) => {
    setEmails((prevEmails) => ({
      data: (prevEmails.data || []).map((email, idx) => {
        if (idx === index) {
          return { ...email, emailId: value };
        }
        return email;
      }),
      errors: {
        ...prevEmails.errors,
        [index]:
          value.trim() === "" || isValidEmail(value)
            ? ""
            : "Please enter a valid email address",
      },
    }));
  };
  const handleDeleteEmail = (idx: any) => {
    const updatedEmails = [...emails.data];
    updatedEmails[idx].emailId = ""; // Clear the email at index 'idx'
    setEmails({ data: updatedEmails, errors: [] }); // Update the emails array
  };
  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Edit Email</h2>
          <div className={styles.line_View} />
          <Form>
            <div className={styles.checked_box} style={{ display: "none" }}>
              <h3>Disable Email</h3>
              <Form.Check
                type="switch"
                label=""
                onChange={() => setEnabled((enable) => !enable)}
                checked={isEnabled}
                className={styles.checkToggle}
              />
            </div>
            {(emails.data || []).map((email, idx) => (
              <Form.Group key={idx} className={styles.SocialHead}>
                <div className={styles.placeholder_head}>
                  <Form.Label>Edit MailId {idx + 1}</Form.Label>
                  <div className={styles.deleteBtn}>
                    <Image
                      src={Delete}
                      alt="delete"
                      onClick={() => handleDeleteEmail(idx)}
                    />
                  </div>
                </div>
                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    value={email.emailId}
                    // disabled={!isEnabled}
                    maxLength={50}
                    onChange={(e) => {
                      handleEmailChange(e.target.value, idx);
                    }}
                  />
                  {emails.errors[idx] && (
                    <div className={styles.error}>{emails.errors[idx]}</div>
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
                    profileEmails: emails.data,
                    emailEnable: isEnabled,
                  },
                });
                if (onHide) {
                  onHide();
                }
              }}
              className={styles.ModalSave}
              disabled={!isValid()}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditEmailIdModal;
