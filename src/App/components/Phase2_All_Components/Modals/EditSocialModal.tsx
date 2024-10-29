/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import styles from "./modals.module.css";

const emptySocialMediaLink = {
  id: null,
  profileId: null,
  profileSocialMediaId: null,
  socialMediaName: "",
  enableStatus: true,
  activeStatus: true,
  ProfileId: null,
};

const SOCIAL_SITE_MAP = {
  INSTAGRAM: 1,
  FACEBOOK: 2,
  TWITTER: 3,
  YOUTUBE: 4,
  LINKED_IN: 5,
  WHATSAPP: 6,
} as const;

type SocialMediaIdsT = typeof SOCIAL_SITE_MAP[keyof typeof SOCIAL_SITE_MAP];

type SocialMediaLinksT = Record<
  SocialMediaIdsT,
  IProfile["profileSocialMediaLinks"][number]
>;

function EditSocialModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const profileSocialMediaLinks =
    userProfile.data.profileSocialMediaLinks || [];
  const profileSocialMediaLinksMap = profileSocialMediaLinks.reduce(
    (acc, socialMediaLink) => ({
      ...acc,
      [socialMediaLink.profileSocialMediaId]: socialMediaLink,
    }),
    {} as SocialMediaLinksT
  );

  const initialSocialMediaLinks = Object.values(SOCIAL_SITE_MAP).reduce(
    (acc, profileSocialMediaId) => ({
      ...acc,
      [profileSocialMediaId]: profileSocialMediaLinksMap[
        profileSocialMediaId
      ] || { ...emptySocialMediaLink, profileSocialMediaId },
    }),
    {} as SocialMediaLinksT
  );

  const [socialMediaLinks, setSocialMediaLinks] = useState<{
    data: SocialMediaLinksT;
    errors: Record<number, string>;
  }>({
    data: initialSocialMediaLinks,
    errors: {},
  });

  const handleSocialMediaLinksChange = (
    value: string,
    socialMediaId: SocialMediaIdsT
  ) => {
    setSocialMediaLinks((prevSocialMediaLinks) => ({
      data: {
        ...prevSocialMediaLinks.data,
        [socialMediaId]: {
          ...prevSocialMediaLinks.data[socialMediaId],
          socialMediaName: value,
        },
      },
      errors: {
        ...prevSocialMediaLinks.errors,
      },
    }));
  };

  const handleSocialMediaLinkToggle = (socialMediaId: SocialMediaIdsT) => {
    setSocialMediaLinks((prevSocialMediaLinks) => ({
      data: {
        ...prevSocialMediaLinks.data,
        [socialMediaId]: {
          ...prevSocialMediaLinks.data[socialMediaId],
          activeStatus: !prevSocialMediaLinks.data[socialMediaId].activeStatus,
        },
      },
      errors: {
        ...prevSocialMediaLinks.errors,
      },
    }));
  };

  const handleSave = () => {
    const socialMediaLinksData = [
      SOCIAL_SITE_MAP.INSTAGRAM,
      SOCIAL_SITE_MAP.FACEBOOK,
      SOCIAL_SITE_MAP.TWITTER,
      SOCIAL_SITE_MAP.YOUTUBE,
      SOCIAL_SITE_MAP.LINKED_IN,
      SOCIAL_SITE_MAP.WHATSAPP,
    ].reduce<SocialMediaLinksT>((acc: SocialMediaLinksT, id) => {
      let link = socialMediaLinks.data[id].socialMediaName;
      let prefix = "";
      let identifier = "";
      switch (id) {
        case 1:
          prefix = "https://www.instagram.com/";
          identifier = "instagram";
          break;
        case 2:
          prefix = "https://www.facebook.com/";
          identifier = "facebook";
          break;
        case 3:
          prefix = "https://www.twitter.com/";
          identifier = "twitter";
          break;
        case 4:
          prefix = "https://www.youtube.com/";
          identifier = "youtube";
          break;
        case 5:
          prefix = "https://www.linkedin.com/in/";
          identifier = "linkedin";
          break;
        case 6:
          // NOTE: Using phone number as url
          break;
        default:
          break;
      }

      if (prefix && link && !link.includes(identifier)) {
        link = prefix + link;
      }
      return {
        ...acc,
        [id]: {
          ...socialMediaLinks.data[id],
          socialMediaName: link,
        },
      };
    }, {} as SocialMediaLinksT);

    const newProfileSocialMediaLinks = Object.values(socialMediaLinksData);
    userProfileDispatch({
      type: "update",
      payload: { profileSocialMediaLinks: newProfileSocialMediaLinks },
    });
    if (onHide) {
      onHide();
    }
  };

  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2Details}>
          <h2>Edit Social Media</h2>
          <div className={styles.line} />
          <div className={styles.SocailSec}>
            <Form>
              <Form.Group className={styles.SocialHead}>
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Instagram
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.INSTAGRAM]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.INSTAGRAM)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="https://www.instagram.com/username & username"
                    // disabled={
                    //   !socialMediaLinks.data[SOCIAL_SITE_MAP.INSTAGRAM]
                    //     .activeStatus
                    // }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.INSTAGRAM]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.INSTAGRAM
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Twitter
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.TWITTER]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.TWITTER)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="https://www.twitter.com/name or username"
                    // disabled={
                    //   !socialMediaLinks.data[SOCIAL_SITE_MAP.TWITTER]
                    //     .activeStatus
                    // }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.TWITTER]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.TWITTER
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Linkedin
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.LINKED_IN]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.LINKED_IN)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="https://www.linkedin.com/username or username"
                    // disabled={
                    //   !socialMediaLinks.data[SOCIAL_SITE_MAP.LINKED_IN]
                    //     .activeStatus
                    // }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.LINKED_IN]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.LINKED_IN
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Youtube
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.YOUTUBE]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.YOUTUBE)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="https://www.youtube.com/@username or @username"
                    // disabled={
                    //   !socialMediaLinks.data[SOCIAL_SITE_MAP.YOUTUBE]
                    //     .activeStatus
                    // }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.YOUTUBE]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.YOUTUBE
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Facebook
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.FACEBOOK]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.FACEBOOK)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="text"
                    placeholder="https://www.linkedin.com/in/username or username"
                    // disabled={
                    //   !socialMediaLinks.data[SOCIAL_SITE_MAP.FACEBOOK]
                    //     .activeStatus
                    // }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.FACEBOOK]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.FACEBOOK
                      )
                    }
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <div className={styles.SocialHeader}>
                  <div>
                    <Form.Label className={styles.placeholder_head_social}>
                      Whatsapp
                    </Form.Label>
                  </div>

                  <div style={{ display: "none" }}>
                    <Form.Check
                      type="switch"
                      label=""
                      checked={
                        socialMediaLinks.data[SOCIAL_SITE_MAP.WHATSAPP]
                          .activeStatus
                      }
                      onChange={() =>
                        handleSocialMediaLinkToggle(SOCIAL_SITE_MAP.WHATSAPP)
                      }
                      className={styles.checkToggle}
                    />
                  </div>
                </div>

                <div className={styles.placeholder_text}>
                  <Form.Control
                    type="number"
                    placeholder="Enter whats app number"
                    disabled={
                      !socialMediaLinks.data[SOCIAL_SITE_MAP.WHATSAPP]
                        .activeStatus
                    }
                    value={
                      socialMediaLinks.data[SOCIAL_SITE_MAP.WHATSAPP]
                        .socialMediaName
                    }
                    onChange={(e) =>
                      handleSocialMediaLinksChange(
                        e.target.value,
                        SOCIAL_SITE_MAP.WHATSAPP
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

export default EditSocialModal;
