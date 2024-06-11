/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { CreateProfilePostApi } from "src/App/services/api";
import {
  LinkDeviceApi,
  linkDeviceWithAccount,
} from "src/App/services/linkDeviceApi";

import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import styles from "./linkDeviceModal.module.css";

export default function LinkDeviceModal({
  show,
  onClose,
  getAllDeviceFunction,
  profileId,
}: any) {
  const [deviceNumber, setDeviceNumber] = useState<any>();

  // Function to handle changes in profile link input
  const handleProfileLinkChange = (e: any) => {
    const { value } = e.target;
    setDeviceNumber(value);
  };

  const deviceLinkFunctionality = async () => {
    if (deviceNumber) {
      const createObj = {
        deviceUid: deviceNumber,
        profileId: profileId,
      };
      const upateProfile = await LinkDeviceApi(createObj);
      getAllDeviceFunction();
      onClose();
    }
  };

  useEffect(() => {
    const deviceNum = localStorage.getItem("deviceNumber");
    setDeviceNumber(deviceNum);
  }, []);

  return (
    <div>
      <Modal show={show} centered backdrop="static">
        <Modal.Body>
          <div className={styles.step2DetailsTemplate}>
            <p className={styles.linkHeading}>
              Link Your Device OR Create Profile With Existing Device
            </p>
            <div className={styles.hrDivLine} />
            <Form.Group className={styles.inputHead}>
              <div className={styles.placeholder_head}>
                <Form.Label>Link Your Device</Form.Label>
              </div>
              <div className={styles.placeholder_text}>
                <Form.Control
                  type="text"
                  placeholder="Enter Device Number"
                  value={deviceNumber}
                  onChange={handleProfileLinkChange}
                  className={styles.linkText}
                />
              </div>
            </Form.Group>
            <p className={styles.linkSubContent}>
              You can find your device number{"  "}
              <span>
                {" "}
                WHILE TAPPING YOUR DEVICE NEW ON YOUR PHONE, logging in and the
                clicking the same LINK DEVICE button
              </span>
            </p>
            <p className={styles.ContinueContent}>
              Please Continue this process using you Mobile.
            </p>

            {/* BUTTON */}
            <div className={styles.doneBtnDiv}>
              <ButtonComp
                label="Done"
                className={styles.doneBtn}
                onClick={() => deviceLinkFunctionality()}
              />
              <div>
                <ButtonComp
                  label="Close"
                  className={styles.closeBtn}
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
