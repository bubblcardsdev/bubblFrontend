import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import styles from "./modals.module.css";

const emptyDigitalModal = {
  id: null,
  profileId: null,
  profileDigitalPaymentsId: null,
  digitalPaymentLink: "",
  enableStatus: true,
  activeStatus: true,
  ProfileId: null,
};

const DIGITAL_SITE_MAP = {
  GOOGLE_PAY: 1,
  PHONEPE: 2,
  PAYTM: 3,
} as const;

type DigitalIdsT = typeof DIGITAL_SITE_MAP[keyof typeof DIGITAL_SITE_MAP];

type DigitalLinksT = Record<
  DigitalIdsT,
  IProfile["profileDigitalPaymentLinks"][number]
>;

function EditDigitalModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const profileDigitalPaymentLinks =
    userProfile.data.profileDigitalPaymentLinks || [];
  const profileSocialMediaLinksMap = profileDigitalPaymentLinks.reduce(
    (acc, digitalLink) => ({
      ...acc,
      [digitalLink.profileDigitalPaymentsId]: digitalLink,
    }),
    {} as DigitalLinksT
  );

  const initialDigitalLinks = Object.values(DIGITAL_SITE_MAP).reduce(
    (acc, profileDigitalPaymentsId) => ({
      ...acc,
      [profileDigitalPaymentsId]: profileSocialMediaLinksMap[
        profileDigitalPaymentsId
      ] || { ...emptyDigitalModal, profileDigitalPaymentsId },
    }),
    {} as DigitalLinksT
  );

  const [digitalLinks, setDigitalLinks] = useState<{
    data: DigitalLinksT;
    errors: Record<number, string>;
  }>({
    data: initialDigitalLinks,
    errors: {},
  });

  const handleDigitalLinksChange = (value: string, digitalId: DigitalIdsT) => {
    setDigitalLinks((prevDigitalLinks) => ({
      data: {
        ...prevDigitalLinks.data,
        [digitalId]: {
          ...prevDigitalLinks.data[digitalId],
          digitalPaymentLink: value,
        },
      },
      errors: {
        ...prevDigitalLinks.errors,
      },
    }));
  };

  const handleDigitalLinkToggle = (digitalId: DigitalIdsT) => {
    setDigitalLinks((prevDigitalLinks) => ({
      data: {
        ...prevDigitalLinks.data,
        [digitalId]: {
          ...prevDigitalLinks.data[digitalId],
          activeStatus: !prevDigitalLinks.data[digitalId].activeStatus,
        },
      },
      errors: {
        ...prevDigitalLinks.errors,
      },
    }));
  };

  const handleSave = () => {
    const newDigitalLinks = Object.values(digitalLinks.data);
    userProfileDispatch({
      type: "update",
      payload: { profileDigitalPaymentLinks: newDigitalLinks },
    });
    if (onHide) {
      onHide();
    }
  };

  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2Details}>
          <h2>Edit Digital Payments</h2>
          <div className={styles.line} />
          <div className={styles.SocailSec}>
            <Form>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                className={styles.SocialHead}
              >
                <div className={styles.DigitalHeader_DP}>
                  <div>
                    <Form.Label className={styles.placeholder_head}>
                      Gpay
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        digitalLinks.data[DIGITAL_SITE_MAP.GOOGLE_PAY]
                          .activeStatus
                      }
                      onChange={() =>
                        handleDigitalLinkToggle(DIGITAL_SITE_MAP.GOOGLE_PAY)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="dummy@gpay"
                    disabled={
                      !digitalLinks.data[DIGITAL_SITE_MAP.GOOGLE_PAY]
                        .activeStatus
                    }
                    value={
                      digitalLinks.data[DIGITAL_SITE_MAP.GOOGLE_PAY]
                        .digitalPaymentLink
                    }
                    onChange={(e) =>
                      handleDigitalLinksChange(
                        e.target.value,
                        DIGITAL_SITE_MAP.GOOGLE_PAY
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.DigitalHeader_DP}>
                  <div>
                    <Form.Label className={styles.placeholder_head}>
                      Phonepe
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        digitalLinks.data[DIGITAL_SITE_MAP.PHONEPE].activeStatus
                      }
                      onChange={() =>
                        handleDigitalLinkToggle(DIGITAL_SITE_MAP.PHONEPE)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="dummy@phonepe"
                    value={
                      digitalLinks.data[DIGITAL_SITE_MAP.PHONEPE]
                        .digitalPaymentLink
                    }
                    onChange={(e) =>
                      handleDigitalLinksChange(
                        e.target.value,
                        DIGITAL_SITE_MAP.PHONEPE
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.DigitalHeader_DP}>
                  <div>
                    <Form.Label className={styles.placeholder_head}>
                      Paytm
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        digitalLinks.data[DIGITAL_SITE_MAP.PAYTM].activeStatus
                      }
                      onChange={() =>
                        handleDigitalLinkToggle(DIGITAL_SITE_MAP.PAYTM)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="dummy@paytm"
                    value={
                      digitalLinks.data[DIGITAL_SITE_MAP.PAYTM]
                        .digitalPaymentLink
                    }
                    onChange={(e) =>
                      handleDigitalLinksChange(
                        e.target.value,
                        DIGITAL_SITE_MAP.PAYTM
                      )
                    }
                  />
                </div>
              </Form.Group>
            </Form>
          </div>
          <div className={styles.ActionModal_Social}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
            <Button onClick={handleSave} className={styles.ModalSave}>
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditDigitalModal;
