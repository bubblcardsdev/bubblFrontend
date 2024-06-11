/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color.svg";
import CreateProfileIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color.svg";
import LinkImage from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/2assets.svg";
import InfoIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/info-icon.svg";
import LinkDeviceIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color-white.svg";
import {
  DeviceLinkAccountApi,
  listingData,
} from "../../../services/createProfileApi";
import style from "./linkDevice.module.css";

function LinkDeviceField() {
  const router = useRouter();
  const [linkNumber, setLinkNumber] = useState("");
  const [linkNumberErr, setLinkNumberErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [deviceLinkId, setSelectedDevice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [myDevices, setMyDevices] = useState<any>();
  const [deviceId, setDeviceId] = useState();
  const [newDeviceId, setNewDeviceId] = useState();
  const [checkProfiles, setCheckProfiles] = useState<any>();
  const [plan, setPlan] = useState<any>();

  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };

  const profileNameLink = async () => {
    if (linkNumber === "") {
      setLinkNumberErr("Device Number is required");
    } else {
      const deviceLinkObj = {
        deviceUid: linkNumber,
      };
      setLoading(true);

      const response = await DeviceLinkAccountApi(deviceLinkObj);
      const deviceValue = response?.data;
      const linkId: any = deviceValue?.createAccountLink?.id;
      setNewDeviceId(deviceValue?.createAccountLink?.deviceId);

      if (response?.data?.success === true) {
        localStorage.removeItem("deviceNumber");

        router.replace({
          pathname: "/createProfile/success",
          query: {
            linkId,
            deviceVal: deviceValue?.createAccountLink?.deviceId,
          },
        });
      }
      const resMsg = response?.data?.message;
      if (resMsg === "Device not found") {
        setErrorMsg(resMsg);
      } else if (resMsg === "device is already linked to another user") {
        setErrorMsg("Device is already linked with account");
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const allProfiles = async () => {
    const res = await listingData();
    setCheckProfiles(res?.data?.profiles);

    let myDeviceList = [];
    myDeviceList = res?.data?.devices;
    setMyDevices(myDeviceList);

    if (myDeviceList) {
      if (myDeviceList.length !== 0) {
        setDeviceId(myDeviceList[0]?.Device?.id);
        setSelectedDevice(myDeviceList[0].id);
      }
    }
  };

  const getDeviceNumber = () => {
    const storeId: any = localStorage.getItem("deviceNumber");
    setLinkNumber(storeId);
  };

  useEffect(() => {
    allProfiles();
    getDeviceNumber();
    getPlanDetails();
  }, []);

  const BindExistingDevice = async () => {
    localStorage.removeItem("deviceNumber");

    router.replace({
      pathname: "/createProfile/profilename",
      query: { deviceLinkId, deviceVal: deviceId },
    });
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
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner animation="border" />
        </div>
      ) : (
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
                <div className={style.device_header_profile}>
                  Create Profile
                </div>
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
                  <span className={style.linkDevice_heading}>
                    Link Your Device
                  </span>
                </div>
                <div className={style.inputButtonDiv}>
                  <div>
                    <Form.Control
                      autoComplete="nope"
                      className={style.inputDiv}
                      placeholder="Enter device number"
                      type="text"
                      onChange={handleLinkDevice}
                      value={linkNumber}
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
                    <Image
                      src={InfoIcon}
                      width="25px"
                      height="25px"
                      alt="bubbl"
                    />
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
                {myDevices && myDevices.length > 0 && (
                  <>
                    <p className={style.buy_device_or}>or</p>
                    <div>
                      <h6 className={style.buy_ex_device}>
                        Create Profile with Existing Device
                      </h6>
                      <Form.Select
                        placeholder="Devices"
                        defaultValue="none"
                        onChange={(e) => {
                          const index: any = e.target.value;
                          setDeviceId(myDevices[index]?.Device?.id);
                          setSelectedDevice(myDevices[index]?.id);
                        }}
                        style={{
                          borderTop: "none",
                          borderRight: "none",
                          borderLeft: "none",
                          borderRadius: "0px",
                          borderColor: "1px solid rgba(175, 56, 214, 0.8",
                          borderBottom: "1px solid rgba(175, 56, 214, 0.8)",
                          boxShadow: "none",
                          cursor: "pointer",
                        }}
                      >
                        {myDevices?.map((val: any, index: number) => (
                          <option value={index}>
                            {val?.Device?.deviceUid}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                    {plan?.getPlans?.planId === 1 ? (
                      <div className={style.link_device_cancel_div}>
                        <Button
                          className={style.SkipLinkProfileBtn}
                          onClick={BindExistingDevice}
                        >
                          Create Profile
                        </Button>
                      </div>
                    ) : (
                      <div className={style.link_device_cancel_div}>
                        <Button
                          className={style.SkipLinkProfileBtn}
                          onClick={BindExistingDevice}
                        >
                          Create Profile
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}
export default LinkDeviceField;
