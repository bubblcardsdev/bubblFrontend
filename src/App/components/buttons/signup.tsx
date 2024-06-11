/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { newsLetter } from "src/App/services/shopPage/shopServices";

import styles from "./button.module.css";

type Props = {
  emailId: any;
  emailError: string;
};

const SignUp: React.FC<Props> = ({ emailId, emailError }) => {
  const [mail, setMail] = useState<any>();
  const signValue = async () => {
    if (!emailError && emailId) {
      const emailObj = {
        emailId: emailId,
      };
      const signup = await newsLetter(emailObj);
      setMail(signup);
    }
  };
  return (
    <>
      {mail?.res?.data?.success ? (
        <div style={{ color: "#af6fef" }}>
          {mail.res?.data?.message}
        </div>

      ) : (
        <button className={styles.signupbtn} onClick={signValue}>
          <p>SIGN UP</p>
        </button>
      )}
    </>
  );
};

export default SignUp;
