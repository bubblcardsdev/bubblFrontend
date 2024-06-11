/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { GoPerson } from "react-icons/go";
import ButtonComp from "src/App/components/ui/CommonButtons/_commonbuttons";
import InputComp from "src/App/components/ui/CommonButtons/commonInput";

import ProfileIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/profile_information/profile_information-icon.svg";
import CropSection from "./imageCropModal";
import styles from "./profileInformation.module.css";

type Props = {
  handleChange: any;
  profile: any;
  onSubmitSave: any;
  nameError: any;
  // handleFileUpload: any;
  profileImg: { square: string; rectangle: string } | null;
  getUpdateErrors: any;
  deleteProfileImageApi: any;
  handleSave: ({
    squareImgBlob,
    rectangleImgBlob,
  }: {
    squareImgBlob: Blob;
    rectangleImgBlob: Blob;
  }) => Promise<void>;
};

const ProfileInformation: React.FC<Props> = ({
  handleChange,
  profile,
  onSubmitSave,
  profileImg,
  getUpdateErrors,
  handleSave,
  nameError,
  deleteProfileImageApi,
}) => {
  const [show, setShow] = useState(false);
  const [errors, setError] = useState<any>(getUpdateErrors());

  const SubmitProfile = () => {
    setError(getUpdateErrors());
    onSubmitSave();
    // errors = getUpdateErrors();
    // setProfileErr(errors);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className={`${styles["profile-heading-div"]}`}>
        <div className={`${styles["profile-payment-icon"]}`}>
          <div className={`${styles["profile-payment-icon-mediaHeading"]}`}>
            <Image
              loader={({ src }) => src}
              src={ProfileIcon}
              width="30px"
              height="30px"
              alt="profile-pic"
            />
            <div className={`${styles["profile-heading"]}`}>
              Profile Information
            </div>
          </div>
        </div>
      </div>
      <h3 className={`${styles.upload_photo}`}>Upload your Photo</h3>

      <div className={`${styles["profile-form-full-div"]}`} id="ProfileSection">
        <div className={`${styles["avatar-wrapper"]}`}>
          {profileImg ? (
            <Image
              loader={({ src }) => src}
              src={profileImg.square}
              width="200px"
              height="200px"
              alt="profile-pic"
            />
          ) : (
            <GoPerson className={`${styles["upload-icon"]}`} />
          )}
          <div className={`${styles["upload-button"]}`}>
            <input
              autoComplete="nope"
              className={`${styles["file-upload"]}`}
              style={{
                opacity: "0",
                padding: "70px",
                cursor: "pointer",
              }}
              onClick={handleShow}
            />
          </div>
        </div>
        {profileImg && (
          <div className={`${styles["profile-div-btn-reset"]}`}>
            <ButtonComp
              label="Reset"
              onClick={deleteProfileImageApi}
              className={`${styles["profile-reset-btn"]}`}
            />
          </div>
        )}

        <Row className={`${styles["profile-name-field"]}`}>
          <Col
            className={`${styles["profile-name-bottom-distance"]}`}
            xl={12}
            md={12}
            xs={12}
          >
            <Form.Group>
              <label className={`${styles["profile-label-fix"]}`}>Name*</label>
              <InputComp
                name="firstName"
                className={`${styles["input-placeholder"]}`}
                placeholder="First Name"
                onChange={handleChange}
                value={profile?.firstName}
              />
            </Form.Group>
            {nameError && (
              <span className="text-danger" role="alert">
                {nameError}
              </span>
            )}
          </Col>
        </Row>
        <Row>
          <Col
            className={`${styles["profile-name-bottom-distance"]}`}
            xl={6}
            md={6}
            xs={12}
          >
            <Form.Group>
              <label className={`${styles["profile-label-fix"]}`}>
                Job Title*
              </label>

              <InputComp
                className={`${styles["input-placeholder"]}`}
                type="text"
                placeholder="Designation"
                name="designation"
                onChange={handleChange}
                value={profile.designation}
              />
            </Form.Group>

            {errors.designation && (
              <span className="text-danger" role="alert">
                {errors.designation}
              </span>
            )}
          </Col>
          <Col
            xl={6}
            md={6}
            xs={12}
            className={`${styles["profile-name-bottom-distance"]}`}
          >
            <Form.Group>
              <label className={`${styles["profile-label-fix"]}`}>
                Company Name
              </label>

              <InputComp
                className={`${styles["input-placeholder"]}`}
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={handleChange}
                value={profile?.companyName}
              />
            </Form.Group>
          </Col>
        </Row>
        <Col
          className={`${styles["profile-name-bottom-distance"]}`}
          xl={12}
          md={12}
          xs={12}
        >
          <Form.Group>
            <label className={`${styles["profile-label-fix"]}`}>
              Company Address
            </label>

            <InputComp
              className={`${styles["input-placeholder"]}`}
              type="text"
              name="companyAddress"
              placeholder="Company Address"
              onChange={handleChange}
              value={profile?.companyAddress}
            />
          </Form.Group>
        </Col>
        <Col xl={12} md={12} xs={12}>
          <Form.Group>
            <label className={`${styles["profile-label-fix"]}`}>
              Short Description
            </label>
            <Form.Control
              rows={5}
              as="textarea"
              maxLength={160}
              className={`${styles["input-placeholder"]}`}
              placeholder="Short Description"
              onChange={handleChange}
              name="shortDesc"
              value={profile?.shortDesc}
            />
          </Form.Group>
        </Col>

        <div className={`${styles["profile-div-btn"]}`} onClick={SubmitProfile}>
          <ButtonComp
            label="Save"
            type="submit"
            className={`${styles["profile-save-btn"]}`}
          />
        </div>
      </div>
      {/* Modal for Image */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pan to adjust your image</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalDiv}>
          <CropSection onSave={handleSave} onSavedSuccess={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ProfileInformation;
