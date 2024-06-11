/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LinkDeviceApi } from "src/App/services/createProfileApi";

import TemplateIcon from "../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color.svg";
import CreateProfileIcon from "../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color.svg";
import LinkImage from "../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/bubbl-card_socket-img.png";
import InfoIcon from "../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/info-icon.svg";
import LinkDeviceIcon from "../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color-white.svg";
import style from "./profileDevice.module.css";

function ProfileDeviceLink() {
  const router = useRouter();
  const [linkNumber, setLinkNumber] = useState("");
  const [linkNumberErr, setLinkNumberErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { profileId } = router.query;

  const profileNameLink = async () => {
    if (linkNumber === "") {
      setLinkNumberErr("Device Number is required");
    } else {
      const deviceLinkObj = {
        deviceUid: linkNumber,
        profileId: profileId,
      };
      const response = await LinkDeviceApi(deviceLinkObj);
      const resMsg = response?.data?.message;
      if (resMsg === "Device is already linked") {
        setErrorMsg(resMsg);
      } else {
        router.push({
          pathname: "/landing1",
        });
      }
    }
  };

  // onChange function for device number
  const handleLinkDevice = (e: any) => {
    const { value } = e.target;
    if (value) {
      setErrorMsg("");
    }

    if (value !== "") {
      setLinkNumberErr("");
    }
    setLinkNumber(value);
  };

  return (
    <div>
      <div className={style.device_header_line} />
      <div className={style.device_header}>
        <div>
          <div className={style.link_icon_background}>
            <Image src={LinkDeviceIcon} width="25" alt="bubbl" />
          </div>
          <div className={style.device_header_linkedDevice}>
            Link your Device
          </div>
        </div>
        <div>
          <div className={style.profile_icon}>
            <Image src={CreateProfileIcon} alt="bubbl" />
          </div>
          <div>
            <div className={style.device_header_profile}>
              Create Profile Name
            </div>
          </div>
        </div>
        <div>
          <div className={style.profile_icon}>
            <Image src={TemplateIcon} width="25" alt="bubbl" />
          </div>
          <div>
            <div className={style.device_header_profile}>Choose a Template</div>
          </div>
        </div>
      </div>
      <div>
        <Row className={style.linkDeviceHeader}>
          <Col xl={3} md={4} className={style.linkDeviceHeader_section}>
            <div>
              <Image src={LinkImage} alt="bubbl" />
            </div>
          </Col>
          <Col xl={5} lg={6} md={10} className={style.linkDevice_input}>
            <div className={style.linkDevice_heading_div}>
              <span className={style.linkDevice_heading}>Link Your Device</span>
            </div>
            <div className={style.inputButtonDiv}>
              <div>
                <Form.Control
                  autoComplete="nope"
                  className={style.inputDiv}
                  placeholder="Enter device number"
                  type="text"
                  onChange={handleLinkDevice}
                />
              </div>
              <div className={style.linkDeviceBtn}>
                <Button onClick={profileNameLink}>Link Device</Button>
              </div>
            </div>
            {linkNumberErr && (
              <span style={{ color: "red" }}>{linkNumberErr}</span>
            )}
            {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
            <div className={style.link_information}>
              <div>
                <Image src={InfoIcon} width="35px" height="35px" alt="bubbl" />
              </div>
              <div className={style.info_content}>
                You can find your device number on your Bubbl Device,
                Alternatively the device number may have been mail to your
                registered email ID
              </div>
            </div>
            <div className={style.buy_device_div}>
              If you want buy additional devices Click on
              <span
                className={style.buy_device_alignment}
                onClick={() => router.push("/shopPage")}
              >
                SHOP
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ProfileDeviceLink;
