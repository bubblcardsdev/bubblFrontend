/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import {
  getAllTemplate,
  switchTemplate,
} from "src/App/services/allTemplateApi";
import { listingData } from "src/App/services/createProfileApi";
import { getAllModes, switchMode } from "src/App/services/modes";
import { switchProfileName } from "src/App/services/switchProfileName";
import { userProfile } from "src/App/services/userProfile/userProfileService";

import dot from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/menu_icon.svg";
import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/template_icon.svg";
import NumberIcon from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Profile-Page-after-creating-Profile/Profile-List/device_number-icon.svg";
import ModeIcon from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Profile-Page-after-creating-Profile/Profile-List/modes-icon.svg";
import Right from "../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import menuIcon from "../../../../../images/Phase_2_All_Assets/create_profile/menuIcon.svg";
import CardImage from "../../../../../public/homeShopPage/Individual_card/blue_individual.png";
import SocketImage from "../../../../../public/homeShopPage/popSocketResp/blue_pop_socket.png";
import TileImage from "../../../../../public/homeShopPage/tileResp/blue_tile3x.png";
import CustomToggle from "../../../../../public/listing_profile_icons/dropdown_icon.svg";
import CustomToggleWhite from "../../../../../public/listing_profile_icons/dropdown_profile_icon.svg";
import Navigation from "../Phase2_Navigation/navigation";
import styles from "./bubblProfile.module.css";

function BubblProfilesComponent() {
  const router = useRouter();

  const plan: any = 2;
  const [allDevices, setAllDevice] = useState<any>([]);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteValues, setDeleteValues] = useState<any>();
  const [deActiveShow, setDeActiveShow] = useState(false);
  const [replaceShow, setReplaceShow] = useState(false);
  const [deActiveValues, setDeActiveValues] = useState<any>();
  const [activeShow, setActiveShow] = useState(false);
  const [qrShow, setQRShow] = useState(false);
  const [directURLShow, setDirectURLShow] = useState(false);
  const [directValues, setDirectValues] = useState<any>();
  const [leadFormShow, setLeadFormShow] = useState<boolean>(false);
  const [leadValues, setLeadValues] = useState<any>();
  const [activateValues, setActivateValues] = useState<any>();
  const [replaceValues, setReplaceValues] = useState<any>();
  const [allTemplate, setAllTemplate] = useState<any[]>([]);
  const [allMode, setAllMode] = useState<any[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  let indexNumber = 0;
  const arrColors = ["#603FF0", "#00CC99", "#FF3300", "#FEBF25"]; // colors for profile name div

  const profileNavigation = () => {
    router.replace("/createProfile");
  };

  // function for profile page
  const EditProfilePage = (
    profileId: any,
    modeId: any,
    deviceId: any,
    deviceVal: any,
    accId: any
  ) => {
    router.replace({
      pathname: "/createProfile/profilepage",
      query: { profileId, isEdit, modeId, deviceId, accId, deviceVal },
    });
  };

  // function for getting all the devices
  const getAllDeviceFunction = async () => {
    const response = await listingData();
    // if (response?.data?.devices?.length === 0) {
    //   router.replace("landing");
    // }
    setAllDevice(response?.data);
  };
  const getUserProfileDetails = async () => {
    const response = await userProfile();

    const subType =
      response?.data?.userProfile?.BubblPlanManagements[0]?.subscriptionType;

    return subType;
  };
  const getAllTemplateFunction = async () => {
    const subType = await getUserProfileDetails();
    const response = await getAllTemplate();

    if (subType === "free") {
      const freeTemplate = response?.data?.template.splice(0, 3);
      setAllTemplate(freeTemplate);
    } else {
      setAllTemplate(response?.data?.template);
    }
  };

  const getAllTModeFunction = async () => {
    const response = await getAllModes();
    setAllMode(response?.data?.modes);
  };

  useEffect(() => {
    getAllDeviceFunction();
    getAllTModeFunction();
    getAllTemplateFunction();
  }, [router]);

  const deleteFunction = (delValues: any) => {
    setDeleteShow(true);
    setDeleteValues(delValues);
  };

  const handleClose = () => {
    setDeleteShow(false);
    setDeActiveShow(false);
    setActiveShow(false);
    setReplaceShow(false);
    setQRShow(false);
    setDirectURLShow(false);
    setLeadFormShow(false);
  };

  const deActiveFunction = (activeVal: any) => {
    setDeActiveShow(true);
    setDeActiveValues(activeVal);
  };

  const activeFunction = (activeVal: any) => {
    setActiveShow(true);
    setActivateValues(activeVal);
  };

  const ShowQRCode = () => {
    setQRShow(true);
  };

  const switchTemplateFunction = async (
    id: any,
    profileId: any,
    profileValue: any
  ) => {
    const templateObj = {
      deviceId: profileId,
      templateNameId: Number(id),
      profileId: profileValue,
    };
    const res = await switchTemplate(templateObj);
    if (res?.data?.success === true) {
      toast.success("Template Switched", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    getAllDeviceFunction();
  };

  const switchProfileFunction = async (profileId: any, accountId: any) => {
    const profileObj = {
      profileId: profileId,
      deviceId: accountId,
    };
    const res = await switchProfileName(profileObj);
    getAllDeviceFunction();
  };

  const switchModeFunction = async (
    mode: any,
    deviceId: any,
    allValues: any
  ) => {
    if (mode === 3) {
      setDirectURLShow(true);
      setDirectValues(allValues);
    }

    const modeObj = {
      modeId: mode,
      deviceId: deviceId,
    };
    const res = await switchMode(modeObj);
    getAllDeviceFunction();
  };

  const checkIfNull = () => true;

  const replaceDevice = (values: any) => {
    setReplaceShow(true);
    setReplaceValues(values.DeviceId);
  };

  const profileNameValue = (id: number, deviceId: number) => {
    router.replace({
      pathname: "/createProfile/profilename",
      query: { deviceNumber: id, deviceVal: deviceId },
    });
  };

  return (
    <section className={styles.profileSection}>
      <div className={styles.profileLandingPage}>
        <Navigation />

        {/* Breadcrumbs section */}
        <div className={styles.breadCrumbs}>
          <div className={styles.link1}>
            {/* Link to Home */}
            <Link href="/">Home</Link>
          </div>
          {/* Right arrow SVG */}
          <Image src={Right} alt="right" />
          <div className={styles.link2}>
            {/* Link to Create Profile */}
            <Link href="/">Create Profile</Link>
          </div>
        </div>
        {/* profile  Content */}
        <div className={styles.profileInformationDiv}>
          <h1>Welcome Kumar</h1>
          <p className={styles.createProfileHeading}>Create Your Profile</p>
          <p className={styles.profileSubContent}>
            Start by Creating a Profile to link Purchased Device <br /> then
            continue to choose a template to start using your&nbsp;
            <span>Bubbl Device</span>
          </p>
          <div className={styles.profileBtnDiv}>
            <Button className={styles.profileBtn}>+ CREATE PROFILE</Button>
          </div>
        </div>

        <div className={styles.hrLine} />

        {allDevices?.devices?.map((allDevice: any, index: any) => {
          indexNumber++;
          if (indexNumber > 4) {
            indexNumber = 0;
            indexNumber++;
          }
          return (
            <div>
              {allDevice?.isDeleted === false && (
                <>
                  {checkIfNull() && (
                    <div className={styles.allProfileDiv}>
                      <div>
                        <span
                          className={styles.allProfileListDiv}
                          // style={{ backgroundColor: arrColors[indexNumber - 1] }}
                        >
                          {/* Profile Listing */}
                          <span className={styles.profileName}>Profile</span>
                          <span className={styles.hr_profile_div_css} />

                          <span className={styles.device_profile_name}>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="none"
                                className={styles.dropdown_fix}
                                style={{ color: "#fffff" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {allDevice?.DeviceLink === null ? (
                                    <>
                                      {plan === 1 ? (
                                        <a
                                          className={styles.newCreateProfile}
                                          // style={{
                                          //   opacity:
                                          //     allDevices?.profiles?.length < 3
                                          //       ? 1
                                          //       : 0.5,
                                          //   pointerEvents:
                                          //     allDevices?.profiles?.length < 3
                                          //       ? "auto"
                                          //       : "none",
                                          // }}
                                          onClick={() =>
                                            profileNameValue(
                                              allDevice?.id,
                                              allDevice?.Device?.id
                                            )
                                          }
                                          // href={`/createProfile/profilename?deviceNumber=${allDevice.id}deviceVal=${allDevice?.Device?.id}`}
                                        >
                                          CreateProfile
                                        </a>
                                      ) : (
                                        <a
                                          className={styles.newCreateProfile}
                                          onClick={() =>
                                            profileNameValue(
                                              allDevice?.id,
                                              allDevice?.Device?.id
                                            )
                                          }
                                          // href={`/createProfile/profilename?deviceNumber=${allDevice.id}deviceVal=${allDevice?.Device?.id}`}
                                        >
                                          CreateProfile
                                        </a>
                                      )}
                                    </>
                                  ) : (
                                    <div>
                                      {
                                        allDevice?.DeviceLink?.Profile
                                          ?.profileName
                                      }
                                    </div>
                                  )}

                                  {allDevice?.DeviceLink === null ? null : (
                                    <Image
                                      alt="bubbl"
                                      src={CustomToggleWhite}
                                      width="13px"
                                      height="13px"
                                      style={{
                                        marginLeft: "3px",
                                        marginTop: "2px",
                                      }}
                                    />
                                  )}
                                </div>
                              </Dropdown.Toggle>

                              {allDevice?.DeviceLink === null ? null : (
                                <Dropdown.Menu
                                  className={styles.dropdownBackground}
                                >
                                  {allDevices?.profiles?.map((profile: any) => {
                                    return (
                                      <Dropdown.Item
                                        eventKey={profile.id}
                                        onClick={() =>
                                          switchProfileFunction(
                                            profile.id,
                                            allDevice?.deviceId
                                          )
                                        }
                                        className={styles.dropdownText}
                                      >
                                        {profile.profileName}
                                        <div className={styles.lineText} />
                                      </Dropdown.Item>
                                    );
                                  })}
                                </Dropdown.Menu>
                              )}
                            </Dropdown>
                          </span>
                        </span>

                        <div className={styles.deviceCardDiv}>
                          <Row className={styles.deviceRow}>
                            <Col md={2} xl={2} className={styles.imageDiv}>
                              {allDevice?.Device?.deviceType === "Card" ? (
                                <Image
                                  alt="bubbl"
                                  src={CardImage}
                                  width="100%"
                                  height="100%"
                                />
                              ) : allDevice?.Device?.deviceType === "Socket" ? (
                                <Image
                                  alt="bubbl"
                                  src={SocketImage}
                                  width="100%"
                                  height="100%"
                                />
                              ) : allDevice?.Device?.deviceType === "Tile" ? (
                                <Image
                                  alt="bubbl"
                                  src={TileImage}
                                  width="100%"
                                  height="100%"
                                />
                              ) : null}
                            </Col>
                            <Col md={2} xl={2}>
                              <div
                                className={styles.deviceImageNumberContainer}
                              >
                                <div>
                                  <Image
                                    src={NumberIcon}
                                    width="50px"
                                    height="50px"
                                    alt="bubbl"
                                  />
                                </div>

                                {/* Device Number */}
                                <div className={styles.deviceNumberDiv}>
                                  <div>
                                    <div className={styles.deviceHeading}>
                                      Device Number
                                    </div>
                                    <div className={styles.deviceSubHeading}>
                                      {allDevice?.Device?.deviceUid}
                                      <span>...</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            {/* Template */}
                            <Col md={2} xl={2}>
                              <div className={styles.deviceNumber}>
                                <div className={styles.image_div}>
                                  <Image
                                    src={TemplateIcon}
                                    width="40px"
                                    height="40px"
                                    alt="bubbl"
                                  />
                                </div>
                                <div>
                                  <div className={styles.deviceNumber_div}>
                                    Template
                                  </div>

                                  <div className={styles.number_tag}>
                                    <Dropdown
                                      className={styles.dropdown_arrow}
                                      style={{
                                        opacity:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? 1
                                            : 0.5,

                                        pointerEvents:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? "auto"
                                            : "none",
                                      }}
                                    >
                                      <Dropdown.Toggle
                                        variant="none"
                                        className={styles.dropdown_fix}
                                        style={{
                                          color: "black",
                                          padding: 0,
                                          marginTop: "-10px",
                                        }}
                                      >
                                        <div className={styles.templateNumber}>
                                          {
                                            allDevice?.DeviceLink?.Template
                                              ?.templateName
                                          }
                                          <Image
                                            alt="bubbl"
                                            src={CustomToggle}
                                            width="20px"
                                            height="20px"
                                            style={{
                                              marginLeft: "3px",
                                            }}
                                          />
                                        </div>
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        {allTemplate?.map(
                                          (name: any, index: any) => {
                                            return (
                                              <Dropdown.Item
                                                eventKey={name.templateNameId}
                                                onClick={() =>
                                                  switchTemplateFunction(
                                                    name.templateNameId,
                                                    allDevice.DeviceId,
                                                    allDevice.DeviceLink
                                                      .ProfileId
                                                  )
                                                }
                                              >
                                                {name.templateName}
                                              </Dropdown.Item>
                                            );
                                          }
                                        )}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            </Col>

                            <Col md={2} xl={2}>
                              {plan === 1 ? null : (
                                <div
                                  className={styles.deviceNumber}
                                  style={{
                                    opacity:
                                      allDevice?.DeviceLink?.activeStatus ===
                                      true
                                        ? 1
                                        : 0.5,

                                    pointerEvents:
                                      allDevice?.DeviceLink?.activeStatus ===
                                      true
                                        ? "auto"
                                        : "none",
                                  }}
                                >
                                  <div className={styles.image_div}>
                                    <Image
                                      src={ModeIcon}
                                      width="40px"
                                      height="40px"
                                      alt="bubbl"
                                    />
                                  </div>
                                  <div>
                                    <div className={styles.deviceNumber_div}>
                                      Modes
                                    </div>
                                    <div className={styles.number_tag}>
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          id="dropdown-basic"
                                          variant="none"
                                          className={styles.dropdown_fix}
                                          style={{
                                            padding: 0,
                                            marginTop: "-10px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "end",
                                            }}
                                          >
                                            {allDevice?.DeviceLink?.Mode?.mode}
                                            <Image
                                              alt="bubbl"
                                              src={CustomToggle}
                                              width="20px"
                                              height="20px"
                                              style={{
                                                marginLeft: "3px",
                                              }}
                                            />
                                          </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          {allMode?.map((mode: any) => {
                                            return (
                                              <Dropdown.Item
                                                eventKey={mode.id}
                                                onClick={() =>
                                                  switchModeFunction(
                                                    mode.id,
                                                    allDevice.deviceId,
                                                    allDevice
                                                  )
                                                }
                                              >
                                                {mode.mode}
                                              </Dropdown.Item>
                                            );
                                          })}
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Col>
                            <Col md={2} xl={2}>
                              <div className={styles.deviceNumber}>
                                <div className={styles.activeFix}>
                                  <div className={styles.deviceNumber_div}>
                                    Device Status
                                  </div>
                                  {allDevice?.DeviceLink?.activeStatus ===
                                  true ? (
                                    <div>
                                      <div className={styles.number_tag}>
                                        <div className={styles.active_green} />
                                        <div className={styles.active_tag}>
                                          Active
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className={styles.number_tag_inactive}>
                                      <span className={styles.active_red} />
                                      In Active
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Col>
                            <Col md={2} xl={2}>
                              {" "}
                              <div className={styles.deviceNumber}>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="none"
                                    className={styles.dropdown_toggle}
                                  >
                                    <Image
                                      src={menuIcon}
                                      width="35"
                                      height="35"
                                      alt="bubbl"
                                    />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      style={{
                                        opacity:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? 1
                                            : 0.5,

                                        pointerEvents:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? "auto"
                                            : "none",
                                      }}
                                      onClick={() =>
                                        EditProfilePage(
                                          allDevice?.DeviceLink?.profileId,
                                          allDevice?.DeviceLink?.ModeId,
                                          allDevice?.DeviceLink?.id,
                                          allDevice?.Device?.id,
                                          allDevice?.DeviceLink
                                            ?.accountDeviceLinkId
                                        )
                                      }
                                    >
                                      Edit Profile
                                    </Dropdown.Item>

                                    <div>
                                      {allDevice?.DeviceLink?.activeStatus ===
                                      true ? (
                                        <Dropdown.Item
                                          onClick={() =>
                                            deActiveFunction(allDevice)
                                          }
                                        >
                                          Deactivate Device
                                        </Dropdown.Item>
                                      ) : (
                                        <Dropdown.Item
                                          onClick={() =>
                                            activeFunction(allDevice)
                                          }
                                        >
                                          Activate Device
                                        </Dropdown.Item>
                                      )}
                                    </div>

                                    <Dropdown.Item
                                      style={{
                                        opacity:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? 1
                                            : 0.5,

                                        pointerEvents:
                                          allDevice?.DeviceLink
                                            ?.activeStatus === true
                                            ? "auto"
                                            : "none",
                                      }}
                                      onClick={() => replaceDevice(allDevice)}
                                    >
                                      Replace Device
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                          <div className={styles.hrLineTag} />
                          <div className={styles.editProfileBtn}>
                            <div>
                              <Button className={styles.profileCreateBtn}>
                                Edit Profile
                              </Button>
                            </div>
                            <div>
                              <Button className={styles.linkDeviceBtn}>
                                + Link device
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Responsive */}
                        <div className={styles.card_div_resp}>
                          <Card className={`${styles.card_div}`}>
                            <div className={styles.multiple_cards}>
                              <div>
                                <Image
                                  alt="bubbl"
                                  src={CardImage}
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                              <div className={styles.deviceNumber_responsive}>
                                <div className={styles.image_div}>
                                  <Image
                                    alt="bubbl"
                                    src={NumberIcon}
                                    width="40px"
                                    height="40px"
                                  />
                                </div>

                                {/* Device Number */}
                                <div>
                                  <div className={styles.deviceNumber_div}>
                                    Device Number
                                  </div>
                                  <div className={styles.deviceNumber_id}>
                                    {allDevice?.Device?.deviceUid}
                                    <span>...</span>
                                  </div>
                                  {/* Device Status */}
                                  <div className={styles.activeFix}>
                                    {allDevice?.DeviceLink?.activeStatus ===
                                    true ? (
                                      <div>
                                        <div
                                          className={
                                            styles.number_tag_responsive
                                          }
                                        >
                                          <div
                                            className={styles.active_green}
                                          />
                                          <div className={styles.active_tag}>
                                            Active
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.number_tag_inactive}
                                      >
                                        <span className={styles.active_red} />
                                        In Active
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {/* Dropdown */}
                              <div className={styles.deviceNumber}>
                                <Dropdown className={styles.dot_img}>
                                  <Dropdown.Toggle
                                    variant="none"
                                    className={styles.dropdown_toggle}
                                  >
                                    <Image
                                      src={dot}
                                      width="30"
                                      height="30"
                                      alt="bubbl"
                                    />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu
                                    style={{ marginLeft: "-110px" }}
                                  >
                                    <Dropdown.Item
                                      onClick={() =>
                                        EditProfilePage(
                                          allDevice?.DeviceLink?.profileId,
                                          allDevice?.DeviceLink?.ModeId,
                                          allDevice?.DeviceLink?.id,
                                          allDevice?.Device?.id,
                                          allDevice?.DeviceLink
                                            ?.accountDeviceLinkId
                                        )
                                      }
                                    >
                                      Edit Profile
                                    </Dropdown.Item>

                                    <div>
                                      {allDevice?.DeviceLink?.activeStatus ===
                                      true ? (
                                        <Dropdown.Item
                                          onClick={() =>
                                            deActiveFunction(allDevice)
                                          }
                                        >
                                          Deactivate Device
                                        </Dropdown.Item>
                                      ) : (
                                        <Dropdown.Item
                                          onClick={() =>
                                            activeFunction(allDevice)
                                          }
                                        >
                                          Activate Device
                                        </Dropdown.Item>
                                      )}
                                    </div>

                                    <Dropdown.Item
                                      onClick={() => replaceDevice(allDevice)}
                                    >
                                      Replace Device
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>

                            {/* Template */}
                            <div
                              className={`${styles.deviceNumber} ${styles.deviceNumber_resp}`}
                            >
                              <div className={styles.image_div}>
                                <Image
                                  alt="bubbl"
                                  src={TemplateIcon}
                                  width="40px"
                                  height="40px"
                                />
                              </div>
                              <div>
                                <div className={styles.deviceNumber_div}>
                                  Template
                                </div>

                                <div className={styles.number_tag}>
                                  <Dropdown
                                    className={styles.dropdown_arrow}
                                    style={{
                                      opacity:
                                        allDevice?.DeviceLink?.activeStatus ===
                                        true
                                          ? 1
                                          : 0.5,

                                      pointerEvents:
                                        allDevice?.DeviceLink?.activeStatus ===
                                        true
                                          ? "auto"
                                          : "none",
                                    }}
                                  >
                                    <Dropdown.Toggle
                                      variant="none"
                                      className={styles.dropdown_fix}
                                      style={{
                                        color: "black",
                                        padding: 0,
                                        marginTop: "-10px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "end",
                                        }}
                                      >
                                        {
                                          allDevice?.DeviceLink?.Template
                                            ?.templateName
                                        }
                                        <Image
                                          alt="bubbl"
                                          src={CustomToggle}
                                          width="20px"
                                          height="20px"
                                          style={{
                                            marginLeft: "4px",
                                          }}
                                        />
                                      </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      {allTemplate?.map((name: any) => {
                                        return (
                                          <Dropdown.Item
                                            eventKey={name.templateNameId}
                                            onClick={() =>
                                              switchTemplateFunction(
                                                name.templateNameId,
                                                allDevice.DeviceId,
                                                allDevice.DeviceLink.ProfileId
                                              )
                                            }
                                          >
                                            {name.templateName}
                                          </Dropdown.Item>
                                        );
                                      })}
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                            {plan === 1 ? null : (
                              <div
                                className={`${styles.deviceNumber} ${styles.deviceNumber_resp}`}
                                style={{
                                  opacity:
                                    allDevice?.DeviceLink?.activeStatus === true
                                      ? 1
                                      : 0.5,

                                  pointerEvents:
                                    allDevice?.DeviceLink?.activeStatus === true
                                      ? "auto"
                                      : "none",
                                }}
                              >
                                <div className={styles.image_div}>
                                  <Image
                                    alt="bubbl"
                                    src={ModeIcon}
                                    width="40px"
                                    height="40px"
                                  />
                                </div>
                                <div>
                                  <div className={styles.deviceNumber_div}>
                                    Modes
                                  </div>
                                  <div className={styles.number_tag}>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        id="dropdown-basic"
                                        variant="none"
                                        className={styles.dropdown_fix}
                                        style={{
                                          color: "black",
                                          padding: 0,
                                          marginTop: "-10px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "end",
                                          }}
                                        >
                                          {allDevice?.DeviceLink?.Mode?.mode}
                                          <Image
                                            alt="bubbl"
                                            src={CustomToggle}
                                            width="20px"
                                            height="20px"
                                            style={{
                                              marginLeft: "3px",
                                            }}
                                          />
                                        </div>
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        {allMode?.map((mode: any) => {
                                          return (
                                            <Dropdown.Item
                                              eventKey={mode.id}
                                              onClick={() =>
                                                switchModeFunction(
                                                  mode.id,
                                                  allDevice.deviceId,
                                                  allDevice
                                                )
                                              }
                                            >
                                              {mode.mode}
                                            </Dropdown.Item>
                                          );
                                        })}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Card>
                        </div>
                      </div>
                      {allDevice?.Device?.deviceUid !== null && (
                        <p className={styles.linkTag}>
                          Your device is not currently linked; kindly connect
                          it. If you want buy devices click on <span>SHOP</span>
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}

              {/* {deleteShow === true && (
                <DeleteDevice
                  show={deleteShow}
                  onClose={handleClose}
                  deactiveValues={deleteValues}
                  getAllDeviceFunction={getAllDeviceFunction}
                />
              )} */}
              {/* {deActiveShow === true && (
                <DeActivateModal
                  show={deActiveShow}
                  onClose={handleClose}
                  deactiveValues={deActiveValues}
                  getAllDeviceFunction={getAllDeviceFunction}
                />
              )}
              {activeShow === true && (
                <ActivateModal
                  show={activeShow}
                  onClose={handleClose}
                  activateValues={activateValues}
                  getAllDeviceFunction={getAllDeviceFunction}
                />
              )}
              {replaceShow === true && (
                <ReplaceModal
                  show={replaceShow}
                  onClose={handleClose}
                  replaceValues={replaceValues}
                  getAllDeviceFunction={getAllDeviceFunction}
                />
              )}

              {/* URL form */}
              {/* {directURLShow === true && (
                <DirectURLForm
                  show={directURLShow}
                  onClose={handleClose}
                  directValues={directValues}
                />
              )}  */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default BubblProfilesComponent;