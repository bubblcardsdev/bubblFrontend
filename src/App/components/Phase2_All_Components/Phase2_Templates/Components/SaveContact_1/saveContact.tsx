/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SaveVCFContact from "src/App/helpers/saveContactHelper";

import styles from "./saveContact.module.css";

function SaveContact({
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
  console.log(deviceUid, "deviceUid");
  console.log(phoneNumber, "phoneNumber");
  console.log(firstName, "firstName");
  console.log(lastName, "lastName");
  console.log(emailId, "emailId");
  console.log(contacts, "contacts");
  console.log(state, "state");
  console.log(city, "city");
  console.log(country, "country");
  console.log(deviceId, "deviceId");
  console.log(mediaArray, "mediaArray");
  console.log(companyName, "companyName");
  console.log(profileImg, "profileImg");
  console.log(website, "website");

  const handleClickEvent = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
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
      state,
      city,
      "address",
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
        className={styles.contact_btn}
        onClick={(e: any) => {
          handleClick(e);
          handleClickEvent(3);
        }}
        style={{
          background: saveIconBackgroundColor,
          border: `1px solid ${saveIconBackgroundColor}`,
        }}
      >
        Save Contact
      </button>
    </div>
  );
}
export default SaveContact;
