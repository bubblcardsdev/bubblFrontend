/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import Image from "next/image";

import tick from "../../commonComponents/TemplateImages/TemplateCommanAsstes/tick/tick.svg";
import styles from "../templateSix.module.css";

function Header({
  firstName,
  lastName,
  designation,
  shortDescription,
  black,
  primaryColor,
  textColor,
  paddingTop,
  fontFamily,
}: any) {
  return (
    <div>
      <div>
        <div className={styles.userName}>
          <div>
            <h1
              className={styles.name}
              style={{ color: primaryColor || (black ? "white" : "#7349B7") }}
            >
              {firstName !== "" ? firstName : "Your Name"}
            </h1>
          </div>
          <div>
            &nbsp;
            <Image src={tick} alt="bubbl" />
          </div>
        </div>

        <p
          className={styles.position}
          style={{ color: black ? "white" : "#090909" }}
        >
          {designation !== "" ? designation : "Designation"}
        </p>
      </div>
      <div className={styles.contentdiv}>
        <p
          className={styles.content}
          style={{ color: black ? "white" : "#090909" }}
        >
          {shortDescription !== "" ? shortDescription : "Short Description"}
        </p>
      </div>
    </div>
  );
}
export default Header;
