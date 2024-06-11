/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import FileSaver from "file-saver";

import styles from "./templateFive.module.css";

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
        <button
          className={styles.saveConBtn}
          onClick={handleClick}
          style={{
            backgroundColor: primaryColor || "#BC5B9C",
            color: "white",
            fontFamily: "Montserrat",
          }}
        >
          Save Contact
        </button>
      </div>

      <div>
        <a href={`tel:${phoneNumber?.phoneNumber}`}>
          <button
            className={styles.savePhoneBtn}
            style={{
              backgroundColor: primaryColor || "#BC5B9C",
            }}
          >
            {/* <PhoneSVG color="white" /> */}
          </button>
        </a>
      </div>
    </div>
  );
}
export default UserInfo;
