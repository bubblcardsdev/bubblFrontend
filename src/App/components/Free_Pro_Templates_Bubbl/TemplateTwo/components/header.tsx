/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import styles from "../templateTwo.module.css";

function NameComponent({
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
        <h1
          className={styles.name}
          style={{
            color: textColor || (black ? "white" : "#ECB526"),
            fontSize: "28px",
            fontFamily: fontFamily,
          }}
        >
          {firstName !== "" ? firstName : "Your Name"}
          {/* {lastName !== "" ? lastName : "Last Name"} */}
        </h1>
        <p
          className={styles.position}
          style={{
            color: black ? "white" : "#090909",
            fontFamily: fontFamily,
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
            fontFamily: fontFamily,
          }}
        >
          {shortDescription !== "" ? shortDescription : "Short Description"}
        </p>
      </div>
    </div>
  );
}
export default NameComponent;
