/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import Image from "next/image";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import DeleteIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/social_media_links/delete-icon.svg";
import SocialMediaIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/social_media_links/social_media-icon.svg";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../../ui/CommonButtons/commonInput";
import styles from "./socialMedia.module.css";
import SocialMediaDisable from "./socialMediaDisabel";

interface SocialMediaInput {
  instagram: "string";
}
type Props = {
  socialMediaFunction: any;
  socialMediaToggle: any;
  mediaArray: any;
  onSubmitSave: any;
  socialEnableFunc: any;
  socialMediaEnable: any;
  socialMediaDeleteFunc: any;
  inputRef: any;
  mediaValidation: string;
  fbErr: string;
  linkedInErr: string;
  twitterErr: string;
  youtubeErr: string;
  mediaError: string;
};
// eslint-disable-next-line react/prop-types, no-unused-vars, react/function-component-definition
const SocialMedia: React.FC<Props> = ({
  socialMediaFunction,
  socialMediaToggle,
  mediaArray,
  onSubmitSave,
  socialEnableFunc,
  socialMediaEnable,
  socialMediaDeleteFunc,
  inputRef,
  mediaValidation,
  fbErr,
  youtubeErr,
  twitterErr,
  linkedInErr,
  mediaError,
}) => {
  const { control, handleSubmit } = useForm<SocialMediaInput>();

  const onSubmit = () => {
    onSubmitSave();

    // socialEnable(socialToggle)
  };

  const InstafilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 1
  );
  const linkedInFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 5
  );
  const twitterFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 3
  );
  const FbFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 2
  );
  const youtubeFilterData = mediaArray?.filter(
    (id: any) => id.profileSocialMediaId === 4
  );

  return (
    <div id="SocailMediaSection">
      <div className={`${styles["media-heading-div"]}`}>
        <div className={`${styles["media-payment-icon"]}`}>
          <div className={`${styles["media-payment-icon-mediaHeading"]}`}>
            <div className={`${styles["media-payment-icon"]}`}>
              <Image
                src={SocialMediaIcon}
                width="30px"
                height="30px"
                alt="bubbl"
              />
            </div>
            <div className={`${styles["social-media-heading"]}`}>
              Social Media Links
            </div>
          </div>
        </div>
        <div>
          <div>
            <Form.Check
              type="switch"
              label=""
              onChange={socialEnableFunc}
              checked={socialMediaEnable}
            />
          </div>
        </div>
      </div>
      {socialMediaEnable === false ? (
        <SocialMediaDisable />
      ) : (
        <div className={styles.social_section}>
          <Form.Group>
            <Col className={`${styles["media-phone-toggle-div"]}`}>
              {InstafilterData !== null && (
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <Col className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        Instagram
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          id="1"
                          checked={
                            InstafilterData[0]?.activeStatus === undefined
                              ? true
                              : InstafilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => socialMediaToggle(e, 1)}
                        />
                      </div>
                    </Col>
                    <div
                      className={`${styles["social-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          InstafilterData[0]?.activeStatus === true ||
                          InstafilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          InstafilterData[0]?.activeStatus === true ||
                          InstafilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        id="1"
                        placeholder="UserName or https://www.instagram.com"
                        onChange={(e: any) => socialMediaFunction(e, 1)}
                        value={
                          InstafilterData.length === 0
                            ? ""
                            : InstafilterData[0]?.socialMediaName
                        }
                        className={styles.social_input}
                      />
                    </div>
                  </div>
                </Col>
              )}
            </Col>
            {mediaValidation && (
              <span className="text-danger" role="alert">
                {mediaValidation}
              </span>
            )}
          </Form.Group>

          <Form.Group>
            <div className={`${styles["media-phone-toggle-div"]}`}>
              {linkedInFilterData !== null && (
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        LinkedIn
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          id="5"
                          checked={
                            linkedInFilterData[0]?.activeStatus === undefined
                              ? true
                              : linkedInFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => socialMediaToggle(e, 5)}
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles["social-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          linkedInFilterData[0]?.activeStatus === true ||
                          linkedInFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          linkedInFilterData[0]?.activeStatus === true ||
                          linkedInFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        id="5"
                        placeholder="Username or https://www.linkedin.com"
                        onChange={(e: any) => socialMediaFunction(e, 5)}
                        value={
                          linkedInFilterData.length === 0
                            ? ""
                            : linkedInFilterData[0]?.socialMediaName
                        }
                        className={styles.social_input}
                      />
                    </div>
                  </div>
                </Col>
              )}
            </div>
          </Form.Group>

          <Form.Group>
            <div className={`${styles["media-phone-toggle-div"]}`}>
              {twitterFilterData !== null && (
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>Twitter</div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          id="3"
                          checked={
                            twitterFilterData[0]?.activeStatus === undefined
                              ? true
                              : twitterFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => socialMediaToggle(e, 3)}
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles["social-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          twitterFilterData[0]?.activeStatus === true ||
                          twitterFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          twitterFilterData[0]?.activeStatus === true ||
                          twitterFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        id="3"
                        placeholder="Username or https://www.twitter.com"
                        onChange={(e: any) => socialMediaFunction(e, 3)}
                        value={
                          twitterFilterData.length === 0
                            ? ""
                            : twitterFilterData[0]?.socialMediaName
                        }
                        className={styles.social_input}
                      />
                    </div>
                  </div>
                </Col>
              )}
            </div>
          </Form.Group>

          <Form.Group>
            <div className={`${styles["media-phone-toggle-div"]}`}>
              {FbFilterData !== null && (
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        Facebook
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          id="2"
                          checked={
                            FbFilterData[0]?.activeStatus === undefined
                              ? true
                              : FbFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => socialMediaToggle(e, 2)}
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles["social-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          FbFilterData[0]?.activeStatus === true ||
                          FbFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          FbFilterData[0]?.activeStatus === true ||
                          FbFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        id="2"
                        placeholder="Username or  https://www.facebook.com"
                        onChange={(e: any) => socialMediaFunction(e, 2)}
                        value={
                          FbFilterData.length === 0
                            ? ""
                            : FbFilterData[0]?.socialMediaName
                        }
                        className={styles.social_input}
                      />
                    </div>
                  </div>
                </Col>
              )}
            </div>
            {fbErr && (
              <span className="text-danger" role="alert">
                {fbErr}
              </span>
            )}
          </Form.Group>

          <Form.Group>
            <div className={`${styles["media-phone-toggle-div"]}`}>
              {youtubeFilterData !== null && (
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>YouTube</div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          id="4"
                          checked={
                            youtubeFilterData[0]?.activeStatus === undefined
                              ? true
                              : youtubeFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => socialMediaToggle(e, 4)}
                        />
                      </div>
                    </div>
                    <div
                      className={`${styles["social-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          youtubeFilterData[0]?.activeStatus === true ||
                          youtubeFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          youtubeFilterData[0]?.activeStatus === true ||
                          youtubeFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        id="4"
                        placeholder="Username or https://www.youtube.com"
                        onChange={(e: any) => socialMediaFunction(e, 4)}
                        value={
                          youtubeFilterData.length === 0
                            ? ""
                            : youtubeFilterData[0]?.socialMediaName
                        }
                        className={styles.social_input}
                      />
                    </div>
                  </div>
                </Col>
              )}
            </div>
            {youtubeErr && (
              <span className="text-danger" role="alert">
                {youtubeErr}
              </span>
            )}
          </Form.Group>

          {mediaError && (
            <span className="text-danger" role="alert">
              {mediaError}
            </span>
          )}

          <div className={`${styles["media-div-btn"]}`}>
            <ButtonComp
              label="Save"
              type="submit"
              onClick={onSubmit}
              className={`${styles["media-save-btn"]}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default SocialMedia;
