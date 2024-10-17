/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SaveVCFContact from "src/App/helpers/saveContactHelper";
import { PostTapDetails } from "src/App/services/tapApi";

import styles from "./saveContact.module.css";

function SaveContactUnique({
  deviceUid,
  phoneNumber,
  firstName,
  lastName,
  emailId,
  contacts,
  saveIconBackgroundColor,
  state,
  city,
  country,
  deviceId,
  mediaArray,
  companyName,
  designation,
  profileImg,
  website,
}: any) {
  const handleClickEvent = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleClickSave = async (e: any) => {
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
      state,
      city,
      contacts,
      country,
      deviceUid
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
    <div>
      <button
        type="button"
        className={styles.rupy_save_contact_button}
        onClick={(e: any) => {
          handleClickSave(e);
          handleClickEvent(3);
        }}
        style={{
          border: `2px solid ${saveIconBackgroundColor}`,
          color: saveIconBackgroundColor,
        }}
      >
        Save Contact
      </button>
    </div>
  );
}
export default SaveContactUnique;
