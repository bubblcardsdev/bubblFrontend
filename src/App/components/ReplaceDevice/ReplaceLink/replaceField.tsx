/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { replaceDeviceApi } from "src/App/services/replaceDeviceApi";

import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color.svg";
import CreateProfileIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color.svg";
import LinkImage from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/bubbl-card_socket-img.png";
import InfoIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/info-icon.svg";
import LinkDeviceIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color-white.svg";
import { listingData } from "../../../services/createProfileApi";
import style from "./replaceLink.module.css";

function ReplaceDeviceField() {
  const router = useRouter();
  const deviceIdObj = router.query?.deviceIdVal;
  const [deviceNumber, setDeviceNumber] = useState("");
  const [linkNumber, setLinkNumber] = useState("");
  const [linkNumberErr, setLinkNumberErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSkipProfile, setShowSkipProfile] = useState(null);

  const profileNameLink = async () => {
    if (linkNumber === "") {
      setLinkNumberErr("Device Number is required");
      return;
    }

    const deviceLinkObj = {
      deviceUid: linkNumber,
      deviceId: deviceIdObj,
    };

    const response = await replaceDeviceApi(deviceLinkObj);
    const deviceValue = response?.data;

    if (response?.success === true) {
      router.push({ pathname: "/bubblProfiles" });
    }

    const resMsg = response?.message;
    if (resMsg === "Check Your Device Number") {
      setErrorMsg(resMsg);
    } else if (resMsg === "Device Linked with another Account") {
      setErrorMsg("Device is already linked with account");
    }
  };

  const allProfiles = async () => {
    const res = await listingData();
    setShowSkipProfile(res?.data?.devices);
  };

  useEffect(() => {
    allProfiles();
    const deviceNum = localStorage.getItem("deviceNumber");
    if (deviceNum) {
      setDeviceNumber(deviceNum);
      setLinkNumber(deviceNum);
      localStorage.removeItem("deviceNumber");
    }
  }, [router]);

  const cancelFunction = () => {
    router.push("/bubblProfiles");
  };

  const handleLinkDevice = (e: { target: { value: any } }) => {
    const { value } = e.target;
    if (value) {
      setErrorMsg("");
      setLinkNumberErr("");
    }
    setDeviceNumber(value);
    setLinkNumber(value);
  };

  return (
    <div className={style.fieldContainer}>
      <div>
        <Row className={style.linkDeviceHeader}>
          <Col xl={3} md={4} className={style.linkDeviceHeader_section}>
            <div>
              <Image src={LinkImage} alt="bubbl" />
            </div>
          </Col>
          <Col xl={5} lg={6} md={10} className={style.linkDevice_input}>
            <div className={style.linkDevice_heading_div}>
              <span className={style.linkDevice_heading}>
                Replace & Link New Device
              </span>
            </div>
            <div className={style.inputButtonDiv}>
              <div>
                <Form.Control
                  autoComplete="nope"
                  className={style.inputDiv}
                  placeholder="Enter device number"
                  type="text"
                  value={deviceNumber}
                  onChange={handleLinkDevice}
                />
              </div>
              <div className={style.linkDeviceBtn}>
                <Button onClick={profileNameLink}>Replace Device</Button>
              </div>
            </div>
            {linkNumberErr && (
              <span style={{ color: "red" }}>{linkNumberErr}</span>
            )}
            {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
            <div className={style.link_information}>
              <div>
                <Image src={InfoIcon} width="25px" height="25px" alt="bubbl" />
              </div>
              <div className={style.info_content}>
                Please tap the device you have received into your mobile and get
                your device number
              </div>
            </div>

            <div className={style.link_device_cancel_div}>
              <Button
                variant="none"
                onClick={cancelFunction}
                className={style.link_device_cancel_btn}
              >
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ReplaceDeviceField;
