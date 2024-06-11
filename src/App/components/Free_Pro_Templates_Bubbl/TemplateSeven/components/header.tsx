/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */

import Image from "next/image";

import tick from "../../commonComponents/TemplateImages/TemplateCommanAsstes/tick/tick.svg";
import styles from "../templateSevenNew.module.css";

function Header({
  firstName,
  lastName,
  designation,
  shortDescription,
  black,
  textColor,
  paddingTop,
  fontFamily,
}: any) {
  return (
    <div>
      <div>
        <div className={styles.heading_name}>
          <div>
            <h1
              className={styles.name}
              style={{
                color: textColor,
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              {firstName !== "" ? firstName : "Your Name"}
            </h1>
          </div>
          <div style={{ marginTop: "3px" }}>
            &nbsp;
            <Image src={tick} alt="bubbl" />
          </div>
        </div>

        <p
          className={styles.position}
          style={{
            color: black ? "white" : "#090909",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          {designation !== "" ? designation : "Designation"}
        </p>
      </div>
      <div className={styles.contentdiv}>
        <p
          className={styles.content}
          style={{
            color: black ? "white" : "#090909",

            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          {shortDescription !== "" ? shortDescription : "Short Description"}
        </p>
      </div>
    </div>
  );
}
export default Header;
