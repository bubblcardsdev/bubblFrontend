/* eslint-disable react/jsx-no-bind */
import React, { Dispatch, useState } from "react";
import { Button, Form, Modal, ModalProps } from "react-bootstrap";
import { ProfileActionT, ProfileStateT } from "types/profile";

import styles from "./modals.module.css";

function EditAddressModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const profileDetails = userProfile.data;
  const [address, setAddress] = useState({
    data: {
      address: profileDetails.address,
      state: profileDetails.state,
      zipCode: profileDetails.zipCode,
      city: profileDetails.city,
      country: profileDetails.country,
      emailEnable: profileDetails.emailEnable,
    },
    error: {
      address: "",
      state: "",
      zipCode: "",
      city: "",
      country: "",
    },
  });
  const [isEnabled, setEnabled] = useState(userProfile.data.emailEnable);

  function handleChange(value: string, fieldName: keyof typeof address.data) {
    setAddress((currAddress) => ({
      ...currAddress,
      data: {
        ...currAddress.data,
        [fieldName]: value.replace(/\s+/g, " "),
      },
      // error: {
      //   ...currAddress.error,
      //   [fieldName]: "", // Clear the error for the field being changed
      // },
    }));
  }

  function handleSave() {
    // Validation logic
    // if (!isEnabled) {
    //   setAddress((prevState) => ({
    //     ...prevState,
    //     error: {
    //       address: "",
    //       state: "",
    //       zipCode: "",
    //       city: "",
    //       country: "",
    //     },
    //   }));
    // } else
    {
      // Validation logic
      const {
        address: addressValue,
        state,
        zipCode,
        city,
        country,
      } = address.data;
      if (!city || !country) {
        // If any field is empty, set the error and return
        setAddress((prevState) => ({
          ...prevState,
          error: {
            address: "",
            state: "",
            zipCode: "",
            city: !city ? "City is required" : "",
            country: !country ? "Country is required" : "",
          },
        }));
        return;
      }
    }

    // If all fields are filled, dispatch update action and close modal
    userProfileDispatch({ type: "update", payload: address.data });
    if (onHide) {
      onHide();
    }
  }

  return (
    <Modal show onHide={onHide} className={styles.BgModal} centered>
      <Modal.Body>
        <div className={styles.step2DetailsView}>
          <h2>Edit Location</h2>
          <div className={styles.line_View} />
          <Form>
            <div className={styles.checked_box} style={{ display: "none" }}>
              <h3>Disable Email</h3>
              <Form.Check
                type="switch"
                label=""
                onChange={() => setEnabled((enable) => !enable)}
                checked={isEnabled}
                className={styles.checkToggle}
              />
            </div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className={styles.placeholder_head}>
                Address
              </Form.Label>
              <div className={styles.placeholder_text_msg}>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Enter Address"
                  name="address"
                  // disabled={!isEnabled}
                  value={address.data.address}
                  onChange={(e) => handleChange(e.target.value, "address")}
                />
                {address.error.address && (
                  <div className={styles.error}>{address.error.address}</div>
                )}
              </div>
            </Form.Group>
            <Form.Group className={styles.SocialHead}>
              <Form.Label className={styles.placeholder_head}>State</Form.Label>
              <div className={styles.placeholder_text}>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  value={address.data.state}
                  // disabled={!isEnabled}
                  onChange={(e) => handleChange(e.target.value, "state")}
                />
                {address.error.state && (
                  <div className={styles.error}>{address.error.state}</div>
                )}
              </div>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput2"
              className={styles.SocialHead}
            >
              <Form.Label className={styles.placeholder_head}>City</Form.Label>
              <div className={styles.placeholder_text}>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  value={address.data.city}
                  // disabled={!isEnabled}
                  onChange={(e) => handleChange(e.target.value, "city")}
                />
                {address.error.city && (
                  <div className={styles.error}>{address.error.city}</div>
                )}
              </div>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput2"
              className={styles.SocialHead}
            >
              <Form.Label className={styles.placeholder_head}>
                Zipcode
              </Form.Label>
              <div className={styles.placeholder_text}>
                <Form.Control
                  type="number"
                  name="zipcode"
                  placeholder="Enter Zipcode"
                  value={address.data.zipCode}
                  // disabled={!isEnabled}
                  onChange={(e) => handleChange(e.target.value, "zipCode")}
                />
                {address.error.zipCode && (
                  <div className={styles.error}>{address.error.zipCode}</div>
                )}
              </div>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput2"
              className={styles.SocialHead}
            >
              <Form.Label className={styles.placeholder_head}>
                Country
              </Form.Label>
              <div className={styles.placeholder_text}>
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="Enter Country"
                  // disabled={!isEnabled}
                  value={address.data.country}
                  onChange={(e) => handleChange(e.target.value, "country")}
                />
                {address.error.country && (
                  <div className={styles.error}>{address.error.country}</div>
                )}
              </div>
            </Form.Group>
          </Form>

          <div className={styles.ActionModal_Social}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
            <Button onClick={handleSave} className={styles.ModalSave}>
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditAddressModal;
