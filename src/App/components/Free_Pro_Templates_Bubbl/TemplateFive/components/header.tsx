/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import FileSaver from "file-saver";
import Image from "next/image";

import tick from "../../commonComponents/TemplateImages/TemplateCommanAsstes/tick/tick.svg";
import styles from "../templateFive.module.css";

function UserInfo({
  shortDescription,
  firstName,
  designation,
  black,
  primaryColor,
  secondaryColor,
  fontFamily,
  lastName,
  emailId,
  phoneNumber,
  contacts,
}: any) {
  const title = "";
  const work = "";
  const handleClick = (e: any) => {
    e.preventDefault();
    const file = new Blob(
      [
        `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
TITLE:${title};
EMAIL;type=INTERNET;type=pref:${emailId[0]?.emailId}
TEL;type=MAIN:${work}
TEL;type=CELL;type=VOICE;type=pref:${phoneNumber[0]?.phoneNumber}
ADR;type=WORK;type=pref:;;;${contacts?.address};${contacts?.city};${contacts?.state};${contacts?.country};;
END:VCARD
`,
      ],
      { type: "text/vcard;charset=utf-8" }
    );
    FileSaver.saveAs(file, `${firstName}${lastName}.vcf`, true);
  };

  return (
    <div
      className={styles.userInfo_div}
      style={{ backgroundColor: !black ? "white" : "black" }}
    >
      <div className={styles.head}>
        <h1
          className={styles.name}
          style={{
            color: primaryColor,
            fontFamily: fontFamily,
            fontSize: "20px",
          }}
        >
          {firstName !== "" ? firstName : "Your Name"}
        </h1>
        &nbsp;
        <Image src={tick} alt="bubbl" />
      </div>

      <p
        className={styles.position}
        style={{
          color: black ? "white" : "#3C3C3C",
          fontFamily: "Montserrat",
        }}
      >
        {designation !== "" ? designation : "Designation"}
      </p>

      <div className={styles.contentdiv}>
        <p
          className={styles.content_des}
          style={{
            color: black ? "white" : "#3C3C3C",
          }}
        >
          {shortDescription !== "" ? shortDescription : "Short Description"}
        </p>
      </div>
    </div>
  );
}
export default UserInfo;
