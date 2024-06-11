import React, { useState } from "react";
import validator from "validator";

function WebsiteUrl() {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value: string) => {
    if (validator.isURL(value)) {
      setErrorMessage("Is Valid URL");
    } else {
      setErrorMessage("Is Not Valid URL");
    }
  };

  return (
    <div
      style={{
        marginLeft: "0px",
      }}
    >
      <pre>
        <input
          type="text"
          onChange={(e) => validate(e.target.value)}
          autoComplete="nope"
        />
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {errorMessage}
        </span>
      </pre>
    </div>
  );
}

export default WebsiteUrl;
