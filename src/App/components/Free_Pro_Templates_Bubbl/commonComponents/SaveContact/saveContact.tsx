/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
import FileSaver from "file-saver";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SaveVCFContact from "src/App/helpers/saveContactHelper";
import { getImageUrl } from "src/App/services/getImage";
import { PostTapDetails } from "src/App/services/tapApi";

import Qr from "../../../../../../images/qr_template.svg";
import axios from "../../../../helpers/axios";
import QRCodeModal from "../../../CreateProfile/CreateTemplate/QRCode/qrCode";
import styles from "./saveContact.module.css";

function SaveContactNew({
  phoneNumber,
  fontFamily,
  firstName,
  lastName,
  emailId,
  contacts,
  fontSize,
  fontWeight,
  saveTextBorderColor,
  saveTextFieldColor,
  saveTextBackColor,
  saveIconBorderColor,
  saveIconBackgroundColor,
  deviceId,
  qrImageUrl,
  mediaArray,
  companyName,
  designation,
  profileImg,
  linkVal,
  website,
}: any) {
  const [show, setShow] = useState(false);
  const [base64Image, setBase64Image] = useState<any>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const title = "";
  const work = "";
  function getSocialMediaType(profileSocialMediaId: any) {
    if (profileSocialMediaId?.socialMediaName !== "") {
      switch (profileSocialMediaId?.profileSocialMediaId) {
        case 1:
          return "Instagram";
        case 2:
          return "Facebook";
        case 3:
          return "Twitter";
        case 4:
          return "Youtube";
        case 5:
          return "LinkedIn";
        default:
          return null;
      }
    }
  }

  function getSocialMediaName(profileSocialMediaId: any) {
    if (profileSocialMediaId?.profileSocialMediaId) {
      if (
        profileSocialMediaId?.socialMediaName.includes("https://") ||
        profileSocialMediaId?.socialMediaName.includes("http://")
      ) {
        switch (profileSocialMediaId.profileSocialMediaId) {
          case 1:
            return profileSocialMediaId?.socialMediaName;
          case 2:
            return profileSocialMediaId?.socialMediaName;
          case 3:
            return profileSocialMediaId?.socialMediaName;
          case 4:
            return profileSocialMediaId?.socialMediaName;
          case 5:
            return profileSocialMediaId?.socialMediaName;
          default:
            return null;
        }
      } else {
        switch (profileSocialMediaId.profileSocialMediaId) {
          case 1:
            return `https://instagram.com/${profileSocialMediaId?.socialMediaName}`;
          case 2:
            return `https://www.facebook.com/${profileSocialMediaId?.socialMediaName}`;

          case 3:
            return `https://twitter.com/${profileSocialMediaId?.socialMediaName}`;
          case 4:
            return `https://youtube.com/@${profileSocialMediaId?.socialMediaName}`;
          case 5:
            return `https://linkedin.com/in/${profileSocialMediaId?.socialMediaName}`;
          default:
            return null;
        }
      }
    }
  }

  const handleClickEvent = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async (e: any) => {
    const vcfdata = await SaveVCFContact(
      firstName,
      lastName,
      companyName,
      designation,
      phoneNumber,
      profileImg,
      contacts,
      mediaArray,
      website,
      emailId,
      deviceId,
      contacts?.state,
      contacts?.city,
      contacts,
      contacts?.zipCode,
      contacts?.country,
      contacts?. deviceUid
    );

    const file = new Blob([vcfdata], { type: "text/vcard" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", `${firstName}.vcf`);
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    setIsDownloading(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton={false} style={{ backgroundColor: "black" }}>
          <Modal.Title style={{ color: "white" }}>Qr Code</Modal.Title>
          <Button
            className="custom-close-button"
            onClick={handleClose}
            style={{ background: "transparent", border: "0" }}
          >
            X
          </Button>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          <QRCodeModal deviceIdQR={linkVal} qrImageUrl={qrImageUrl} />
        </Modal.Body>
      </Modal>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.contact_btn}
          onClick={(e: any) => {
            handleClick(e);
            handleClickEvent(3);
          }}
          style={{
            border: `1px solid ${saveTextBorderColor}`,

            background: saveTextBorderColor,
          }}
        >
          Save Contact
        </button>
        <Button
          onClick={() => {
            handleShow();
          }}
          type="button"
          className={styles.contact_black_btntwo}
          style={{
            // border: `1px solid ${saveIconBorderColor}`,
            backgroundColor: saveIconBackgroundColor,
            paddingTop: "12px",
          }}
        >
          <Image src={Qr} width="25px" alt="bubbl" />
        </Button>
      </div>
    </>
  );
}
export default SaveContactNew;
