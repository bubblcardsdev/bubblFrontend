/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import PhoneInput, { CountryData } from "react-phone-input-2";
import { toast, ToastContainer } from "react-toastify";
import { LeadFormMode } from "src/App/services/modes";

import axios from "../../../helpers/axios";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../ui/CommonButtons/commonInput";
import ImgBanner from "../ImgBanner/imgBanner";
import styles from "./leadGeneration.module.css";

function LeadGenerationForm({ show, firstName, designation, deviceId }: any) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [emailId, setEmailId] = useState("");
  const [profileImages, setProfileImages] = useState<any>();

  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const assignNumber = (value: string, country: CountryData): void => {
    const { dialCode } = country;
    if (dialCode) {
      const countryCodes = `+${dialCode}`;
      const mobileNumber = value.replace(dialCode, "").replaceAll(/[^\d]/g, "");
      setPhoneNumber(mobileNumber);
      setCountryCode(countryCodes);
    }
  };

  const emailOnChange = (e: any) => {
    setEmailId(e.target.value);

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid Email Address");
    } else {
      setEmailError("");
    }
  };
  const getProfileImages = async () => {
    const res = await axios.post("profile/getProfileImageForLeadGen", {
      deviceId: deviceId,
    });
    const profileImgs = res?.data?.profileImages?.reduce(
      (
        acc: { square: string; rectangle: string },
        item: { type: string; image: string }
      ) => {
        switch (item.type) {
          case "0":
            return { ...acc, square: item.image };
          default:
            return acc;
        }
      },
      {}
    );
    setProfileImages(profileImgs);
    return res;
  };

  // submit function
  const submitFunction = async () => {
    if (nameVal === "") {
      setNameError("Name is Required");
    }
    if (emailId === "") {
      setEmailError("Email is Required");
    }
    if (phoneNumber === "") {
      setErrorMessage("PhoneNumber is Required");
    }
    if (emailError === "" && errorMessage === "" && nameError === "") {
      const subObj = {
        name: nameVal,
        emailId: emailId,
        mobileNumber: countryCode + phoneNumber,
        deviceId: deviceId,
      };
      const leadResponse = await LeadFormMode(subObj);
      if (leadResponse?.data?.success) {
        toast.success("Successfully Submitted", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };
  useEffect(() => {
    getProfileImages();
  }, []);
  return (
    <div>
      <ToastContainer />

      <Modal show={show} centered>
        <Modal.Body className={`${styles["url-main-container"]}`}>
          <div className="container">
            <ImgBanner
              firstName={firstName || "your Name"}
              profileImg={profileImages}
              designation={designation || "Your Designation"}
              directValues={[]}
            />
            <div className={styles.imageHrLine} />

            {/* direct form */}
            <div className={styles.lead_headings}>
              <div>Share your info with </div>
              <div>{firstName || "Your Name"}</div>
            </div>

            {/* Lead Form */}
            <div className={styles.formDiv}>
              {/* Name */}
              <div>
                <Form.Group>
                  <p className={styles.nameDiv}>Name</p>
                  <div className={styles.urlLinkDiv}>
                    <InputComp
                      className={styles.inputDiv}
                      onChange={(e: any) => {
                        setNameVal(e.target.value);
                        setNameError("");
                      }}
                      type="text"
                      name="url"
                      placeholder="Enter your name"
                    />
                  </div>
                  {nameError && (
                    <span
                      className="text-danger"
                      role="alert"
                      style={{ fontSize: "14px" }}
                    >
                      {nameError}
                    </span>
                  )}
                </Form.Group>
              </div>
              {/* Email */}
              <div className={styles.emailDiv}>
                <Form.Group>
                  <p className={styles.nameDiv}>Email</p>
                  <div className={styles.urlLinkDiv}>
                    <InputComp
                      className={styles.inputDiv}
                      onChange={(e: any) => emailOnChange(e)}
                      type="text"
                      name="url"
                      placeholder="Enter your work email"
                    />
                  </div>
                  {emailError && (
                    <span
                      className="text-danger"
                      role="alert"
                      style={{ fontSize: "14px" }}
                    >
                      {emailError}
                    </span>
                  )}
                </Form.Group>
              </div>

              {/* Phone Number */}
              <div className={styles.emailDiv}>
                <p className={styles.nameDiv}>Phone</p>

                <div className={styles.urlLinkDiv}>
                  <PhoneInput
                    country="in"
                    placeholder="Enter your mobile number"
                    countryCodeEditable
                    enableSearch
                    onChange={(value, country) => {
                      assignNumber(value, country as CountryData);
                      setErrorMessage("");
                    }}
                    inputProps={{
                      required: true,
                      autoFocus: true,
                      style: {
                        color: "#000000", // Ensure text remains black
                      },
                    }}
                    containerStyle={{
                      width: "100%",
                    }}
                    inputStyle={{
                      width: "100%",
                      color: "#FFFFFF", // Ensure text remains black
                    }}
                  />
                </div>
              </div>
            </div>
            {errorMessage && (
              <p
                style={{
                  color: "red",

                  fontSize: "14px",
                }}
              >
                {errorMessage}
              </p>
            )}

            {/* button */}
            <div className={styles.buttonDiv} onClick={submitFunction}>
              <ButtonComp
                className={styles.buttonTag}
                variant="none"
                label="Submit"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default LeadGenerationForm;
