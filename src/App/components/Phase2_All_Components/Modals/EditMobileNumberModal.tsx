/* eslint-disable react/no-array-index-key */
import "react-phone-number-input/style.css";

import Image from "next/image";
import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import Delete from "../Phase2_Templates/Images/assets_for_profile_templates/Common/delete-icon.svg";
import styles from "./modals.module.css";

const emptyPhone = {
  activeStatus: true,
  checkBoxStatus: true,
  countryCode: "",
  phoneNumber: "",
  phoneNumberId: null,
  id: null,
  profileId: null,
  ProfileId: null,
  phoneNumberType: "Personal",
};

function EditMobileNumberModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const initialPhoneNumbers = (
    userProfile.data.profilePhoneNumbers || []
  ).slice(0, 2);

  for (let i = initialPhoneNumbers.length; i < 2; i += 1) {
    initialPhoneNumbers.push({ ...emptyPhone });
  }

  const [phoneNumbers, setPhoneNumbers] = useState<{
    data: IProfile["profilePhoneNumbers"];
    errors: Record<number, string>;
  }>({
    data: initialPhoneNumbers,
    errors: {},
  });
  const [isEnabled, setEnabled] = useState(userProfile.data.phoneNumberEnable);

  const isValid = () => {
    const hasErrors = Object.values(phoneNumbers.errors).some(
      (error) => error !== ""
    );
    return !hasErrors; // Only checking for errors now
  };
  const handlePhoneNumberChange = (
    {
      phoneNumber,
      countryCode,
    }: {
      phoneNumber: string;
      countryCode: string;
    },
    index: number
  ) => {
    setPhoneNumbers((phones) => ({
      data: (phones.data || []).map((phone, idx) => {
        if (idx === index) {
          return { ...phone, phoneNumber, countryCode };
        }
        return phone;
      }),
      errors: {
        ...phones.errors,
        [index]: "",
      },
    }));
  };

  const updateError = (error: string, index: number) => {
    setPhoneNumbers((phones) => ({
      data: phones.data,
      errors: {
        ...phones.errors,
        [index]: error,
      },
    }));
  };

  const handleDeletePhoneNumber = (idx: any) => {
    const updatedPhoneNumbers = [...phoneNumbers.data];
    updatedPhoneNumbers[idx].phoneNumber = "";
    setPhoneNumbers({ data: updatedPhoneNumbers, errors: [] });
  };
  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Edit Phone Number</h2>
          <div className={styles.line_View} />
          <Form>
            <div className={styles.checked_box} style={{ display: "none" }}>
              <h3>Disable Mobile Number</h3>
              <Form.Check
                type="switch"
                label=""
                onChange={() => setEnabled((enable) => !enable)}
                checked={isEnabled}
                className={styles.checkToggle}
              />
            </div>
            {(phoneNumbers.data || []).map((phone, idx) => {
              const countryCode = phone.countryCode.replace("+", "");
              const countryString = getCountries().find(
                (country: any) => getCountryCallingCode(country) === countryCode
              );
              return (
                <Form.Group key={idx} className={styles.SocialHead}>
                  <div className={styles.placeholder_head}>
                    <Form.Label>Phone Number {idx + 1}</Form.Label>
                    <div className={styles.deleteBtn}>
                      <Image
                        src={Delete}
                        alt="delete"
                        onClick={() => handleDeletePhoneNumber(idx)}
                      />
                    </div>
                  </div>

                  <div className={styles.placeholder_text}>
                    {/* <Form.Control
                    type="number"
                    placeholder="1234567890"
                    value={phone.phoneNumber}
                    // disabled={!isEnabled}
                    maxLength={15}
                    onChange={(e) => {
                      handlePhoneNumberChange(e.target.value, idx);
                    }}
                  /> */}
                    <PhoneInput
                      defaultCountry={countryString || "IN"}
                      value={(phone.countryCode || "+91") + phone.phoneNumber}
                      international
                      countryCallingCodeEditable={false}
                      onChange={(value) => {
                        if (!value) {
                          handlePhoneNumberChange(
                            {
                              phoneNumber: "",
                              countryCode: "",
                            },
                            idx
                          );
                          return;
                        }
                        const phoneNumber = parsePhoneNumber(value);
                        if (!phoneNumber) {
                          return;
                        }
                        const newMobileNumber =
                          phoneNumber.nationalNumber.toString();

                        const currCountryCode =
                          phoneNumber.countryCallingCode?.toString() || "";
                        // setMobileNumber(newMobileNumber);
                        // setErrors((currErrors) => ({
                        //   ...currErrors,
                        //   mobileNumber: "",
                        // }));
                        // setCountryCode(`+${currCountryCode}`);

                        handlePhoneNumberChange(
                          {
                            phoneNumber: newMobileNumber,
                            countryCode: `+${currCountryCode}`,
                          },
                          idx
                        );
                      }}
                      onBlur={() => {
                        let errorMessage = "";
                        if (!phone.phoneNumber) {
                          return;
                        }
                        if (
                          !isPossiblePhoneNumber(
                            `${phone.countryCode}${phone.phoneNumber}`
                          )
                        ) {
                          errorMessage = "Invalid Phone number";
                        }
                        updateError(errorMessage, idx);
                      }}
                      placeholder="Mobile Number"
                      className={styles.inputFieldStep1}
                      // defaultCountry={defaultCountry}
                      // countrySelectProps={{ unicodeFlags: true }}
                    />
                    {phoneNumbers.errors[idx] && (
                      <div className={styles.error}>
                        {phoneNumbers.errors[idx]}
                      </div>
                    )}
                  </div>
                </Form.Group>
              );
            })}
          </Form>
          <div className={styles.ActionModal_Social}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                userProfileDispatch({
                  type: "update",
                  payload: {
                    profilePhoneNumbers: phoneNumbers.data,
                    phoneNumberEnable: isEnabled,
                  },
                });
                if (onHide) {
                  onHide();
                }
              }}
              className={styles.ModalSave}
              disabled={!isValid()}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditMobileNumberModal;
