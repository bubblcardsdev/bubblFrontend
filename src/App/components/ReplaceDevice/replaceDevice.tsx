/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Modal } from "react-bootstrap";

import close_Icon from "../../../../images/Phase_2_All_Assets/comman_assets/deleteIconnew.svg";
import replaceIcon from "../../../../images/Phase_2_All_Assets/comman_assets/replaceIcon.svg";
import { activateApi, deActivateApi } from "../../services/deActivateApi";
import ButtonComp from "../ui/CommonButtons/_commonbuttons";
// eslint-disable-next-line import/no-unresolved
import styles from "./replaceDevice.module.css";
import ReplaceLink from "./ReplaceLink/replaceLink";

type Props = {
  show: any;
  onClose: any;
  replaceValues: any;
  getAllDeviceFunction: any;
};

// eslint-disable-next-line react/function-component-definition
const ReplaceModal: React.FC<Props> = ({
  show,
  onClose,
  replaceValues,
  getAllDeviceFunction,
}) => {
  const router = useRouter();
  const replaceFunction = async (values: any) => {
    const deviceIdVal = replaceValues;

    router.push({
      pathname: "replaceLink",
      query: { deviceIdVal },
    });
  };

  return (
    <div className={`${styles["replace-main-container"]}`}>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Body>
          <div className={styles.step2DetailsTemplate}>
            <div
              className={`${styles["replace-close-img-circle-div-container"]}`}
            >
              <div
                onClick={onClose}
                className={`${styles["replace-close-img-circle"]}`}
              >
                <Image
                  src={close_Icon}
                  // width="15px"
                  // height="15px"
                  alt="bubbl"
                />
              </div>
            </div>
            <div className={`${styles["replace-img-circle-div-container"]}`}>
              <div className={`${styles["replace-img-circle"]}`}>
                <Image
                  src={replaceIcon}
                  width="50px"
                  height="50px"
                  alt="bubbl"
                />
              </div>
            </div>
            <div className={`${styles["replace-container"]}`}>
              <h4>Replace Device</h4>
              <h5>You're going to replace your device.</h5>
              <p>Are You Sure ?</p>

              <div className={`${styles["replace-buttons"]}`}>
                <ButtonComp
                  label="No, Keep It."
                  className={`${styles["replace-buttons-one"]}`}
                  onClick={onClose}
                  variant="none"
                />
                <ButtonComp
                  label="Yes, Replace!"
                  variant="none"
                  className={`${styles["replace-buttons-two"]}`}
                  onClick={() => replaceFunction(replaceValues)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReplaceModal;
