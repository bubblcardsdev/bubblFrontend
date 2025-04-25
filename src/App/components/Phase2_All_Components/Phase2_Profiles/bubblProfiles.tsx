/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
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
import { Button, Card, Dropdown } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { toast, ToastContainer } from "react-toastify";
import { getfirstName } from "src/App/helpers/local-storage";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import { userProfile } from "src/App/services/userProfile/userProfileService";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/template_icon.svg";
import NumberIcon from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Profile-Page-after-creating-Profile/Profile-List/device_number-icon.svg";
import ModeIcon from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Profile-Page-after-creating-Profile/Profile-List/modes-icon.svg";
import Right from "../../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import menuIcon from "../../../../../images/Phase_2_All_Assets/create_profile/menuIcon.svg";
import CardImage from "../../../../../public/homeShopPage/Individual_card/blue_individual.png";
import SocketImage from "../../../../../public/homeShopPage/popSocketResp/blue_pop_socket.png";
import TileImage from "../../../../../public/homeShopPage/tileResp/blue_tile3x.png";
import CustomToggle from "../../../../../public/listing_profile_icons/dropdown_icon.svg";
import {
  getAllTemplate,
  switchTemplate,
} from "../../../services/allTemplateApi";
import { listingData } from "../../../services/createProfileApi";
import { getAllModes, switchMode } from "../../../services/modes";
import { switchProfileName } from "../../../services/switchProfileName";
import ActivateModal from "../../ActivateDevice/activateDevice";
import DeActivateModal from "../../DeActiveDevice/deactivateDevice";
import DeleteDevice from "../../DeleteDevice/deleteDevice";
import DirectURLForm from "../../Modes/URL/directURL";
import ReplaceModal from "../../ReplaceDevice/replaceDevice";
import LinkDeviceModal from "../landingModals/linkDeviceModal";
import Footer from "../Phase2_Footer/footer";
import Navigation from "../Phase2_Navigation/navigation";
import styles from "./bubblProfiletest.module.css";

function ParallaxWrapper({ children }: any) {
  return <Parallax speed={40}>{children}</Parallax>;
}

function YourProfile() {
  const router = useRouter();

  const [plan, setPlan] = useState<any>();

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
  const [activateValues, setActivateValues] = useState<any>();
  const [replaceValues, setReplaceValues] = useState<any>();
  const [allTemplate, setAllTemplate] = useState<any[]>([]);
  const [allMode, setAllMode] = useState<any[]>([]);
  const [firstName, setFirstName] = useState("");
  const [allProfiles, setAllProfiles] = useState<any>();
  const [linkModal, setLinkModal] = useState(false);
  const [linkDeviceValues, setLinkDeviceValues] = useState();
  const [profileId, setProfileId] = useState<any>();
  const [modeDevices, setModeDevices] = useState<any>();

  let indexNumber = 0;
  const arrColors = ["#603FF0", "#00CC99", "#FF3300", "#FEBF25"]; // colors for profile name div
  
  // function for profile page
  const EditProfilePage = (payload: any) => {
    const ProfileId = payload?.Profile?.id ? payload?.Profile?.id : payload;
    const DeviceLinkId = payload?.id;

    localStorage.setItem("deviceLinkId", DeviceLinkId);
    // jwt decrypt 
    router.replace({
      pathname: `/createProfileStep3/${ProfileId}`,
      // query: { deviceId },
    });
  };

  // function for getting all the devices
  const getAllDeviceFunction = async () => {
    const response = await listingData();
    setAllDevice(response?.data?.devices);
    setAllProfiles(response?.data?.profiles);
  };

  // GET ING ALL THE TEMPLATES

  const getAllTemplateFunction = async () => {
    const subType = await getUserProfileDetails();
    const response = await getAllTemplate();

    if (subType === "free") {
      const freeTemplate = response?.data?.template.splice(0, 2);
      setAllTemplate(freeTemplate);
    } else {
      setAllTemplate(response?.data?.template);
    }
  };

  // GET ALL  MODES
  const getAllTModeFunction = async () => {
    const response = await getAllModes();
    setAllMode(response?.data?.modes);
  };

  const getUserProfileDetails = async () => {
    const response = await userProfile();

    const subType =
      response?.data?.userProfile?.BubblPlanManagements[0]?.subscriptionType;

    return subType;
  };

  // GET ALL PLANS
  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };

  useEffect(() => {
    const firstname: any = getfirstName();
    setFirstName(firstname);
    getAllDeviceFunction();
    getPlanDetails();
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
    setLinkModal(false);
  };

  const handleCloseModeModal = () => {
    setDirectURLShow(false);
  };

  const handleSubmitModeModal = async () => {
    setDirectURLShow(false);
    const modeObj = {
      modeId: 3,
      deviceId: modeDevices,
    };
    await switchMode(modeObj);
    await getAllDeviceFunction();
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
    setProfileId(profileId);
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
      setModeDevices(deviceId);
    }

    if (mode !== 3) {
      const modeObj = {
        modeId: mode,
        deviceId: deviceId,
      };
      await switchMode(modeObj);
    }

    getAllDeviceFunction();
  };

  const checkIfNull = () => {
    return true;
  };

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topPositions = [10, 3, 40];
  const sizes = [65, 32, 55];
  const rightPositions = [0, 0, 0];
  const leftPosition = [-20, 100, 100];
  const showGradients = [false, true, false];

  return (
    <>
      <section className={styles.profileSection}>
        {linkModal === true && (
          <LinkDeviceModal
            show={linkModal}
            onClose={handleClose}
            profileId={linkDeviceValues}
            getAllDeviceFunction={getAllDeviceFunction}
          />
        )}
        <div className={styles.profileLandingPage}>
          <Navigation />
          <div className={styles.backgroundContainer}>
            <ParallaxWrapper>
              <ParallaxBackground
                scrollPosition={scrollPosition / 10}
                topPositions={topPositions}
                sizes={sizes}
                rightPositions={rightPositions}
                leftPositions={leftPosition}
                showImage1={false}
                showImage2={false}
                showImage3
                showGradients={showGradients}
              />
            </ParallaxWrapper>
          </div>

          {/* profile  Content */}
          <div className={styles.profileInformationDiv}>
            <h1>
              Welcome <span>{firstName}</span>
            </h1>
            <p className={styles.createProfileHeading}>Create Your Profile</p>
            <p className={styles.profileSubContent}>
              Start by Creating a Profile to link Purchased Device <br /> then
              continue to choose a template to start using your&nbsp;
              <span>BUBBL Device</span>
            </p>
            <div className={styles.backgroundContainer}>
              <ParallaxWrapper>
                <ParallaxBackground
                  scrollPosition={scrollPosition / 10}
                  topPositions={topPositions}
                  sizes={sizes}
                  rightPositions={rightPositions}
                  leftPositions={leftPosition}
                  showImage1={false}
                  showImage2={false}
                  showImage3
                  showGradients={showGradients}
                />
              </ParallaxWrapper>
            </div>
            <div className={styles.profileBtnDiv}>
              {plan?.getPlans?.planId === 1 ? (
                <Button
                  className={styles.profileBtn}
                  style={{
                    opacity: allProfiles?.length >= 2 ? 0.5 : 1,
                  }}
                  onClick={() => {
                    allProfiles?.length >= 2
                      ? toast.error("Cannot create more than 2 profiles")
                      : router.push("/createProfileStep2");
                  }}
                >
                  + CREATE PROFILE
                </Button>
              ) : (
                <Button
                  className={styles.profileBtn}
                  style={{
                    opacity: allProfiles?.length >= 25 ? 0.5 : 1,
                  }}
                  onClick={() => {
                    allProfiles?.length >= 25
                      ? toast.error("Cannot create more than 5 profiles")
                      : router.push("/createProfileStep2");
                  }}
                >
                  + CREATE PROFILE
                </Button>
              )}
            </div>
          </div>

          <div className={styles.hrLineTagTop} />

          <div className={styles.profileContentResponsive}>
            <div className={styles.welcomeContent}>Welcome,</div>
            <div className={styles.userNameRes}>{firstName}</div>
            <p className={styles.createProfileHeadingResp}>Create Your Profile</p>
            <div className={styles.contentRes}>
              Start by Creating a Profile to link Purchased Device <br /> then
              continue to choose a template to start using your&nbsp;
              <span>BUBBL Device</span>
            </div>
            <div className={styles.profileBtnRes}>
              {plan?.getPlans?.planId === 1 ? (
                <Button
                  className={styles.profileBtn}
                  style={{
                    opacity: allProfiles?.length >= 2 ? 0.5 : 1,
                  }}
                  onClick={() => {
                    allProfiles?.length >= 2
                      ? toast.error("Cannot create more than 2 profiles")
                      : router.push("/createProfileStep2");
                  }}
                >
                  + CREATE PROFILE
                </Button>
              ) : (
                <Button
                  className={styles.profileBtn}
                  style={{
                    opacity: allProfiles?.length >= 25 ? 0.5 : 1,
                  }}
                  onClick={() => {
                    allProfiles?.length >= 25
                      ? toast.error("Cannot create more than 5 profiles")
                      : router.push("/createProfileStep2");
                  }}
                >
                  + CREATE PROFILE
                </Button>
              )}
            </div>
          </div>

          <div className={styles.yourProfilefulldiv}>
            <div className="container ">
              <ToastContainer />
              <div className={styles.backgroundContainer}>
                <ParallaxWrapper>
                  <ParallaxBackground
                    scrollPosition={scrollPosition / 10}
                    topPositions={topPositions}
                    sizes={sizes}
                    rightPositions={rightPositions}
                    leftPositions={leftPosition}
                    showImage1={false}
                    showImage2
                    showImage3={false}
                    showGradients={showGradients}
                  />
                </ParallaxWrapper>
              </div>
              {allDevices?.map((allDevice: any, index: any) => {
                indexNumber++;
                if (indexNumber > 4) {
                  indexNumber = 0;
                  indexNumber++;
                }

                return (
                  <div>
                    {allDevice?.DeviceLink !== null && (
                      <>
                        {checkIfNull() && (
                          <div className={styles.card_alignment}>
                            <div className={styles.card_div_desktop}>
                              <Card className={styles.card_div}>
                                <div className={styles.multiple_cards}>
                                  {/* Condition for Changing the card Image based on Device card Type */}

                                  {allDevice?.DeviceLink?.AccountDeviceLink
                                    ?.Device?.deviceType === "Card" ? (
                                    <Image
                                      alt="bubbl"
                                      src={CardImage}
                                      width="100%"
                                      height="100%"
                                    />
                                  ) : allDevice?.DeviceLink?.AccountDeviceLink
                                      ?.Device?.deviceType === "Socket" ? (
                                    <Image
                                      alt="bubbl"
                                      src={SocketImage}
                                      width="100%"
                                      height="100%"
                                    />
                                  ) : allDevice?.DeviceLink?.AccountDeviceLink
                                      ?.Device?.deviceType === "Tile" ? (
                                    <Image
                                      alt="bubbl"
                                      src={TileImage}
                                      width="100%"
                                      height="100%"
                                    />
                                  ) : null}
                                  <div className={styles.deviceNumber}>
                                    <div className={styles.image_div}>
                                      <Image
                                        src={NumberIcon}
                                        width="40px"
                                        height="40px"
                                        alt="bubbl"
                                      />
                                    </div>

                                    {/* Device Number */}
                                    <div>
                                      <div className={styles.deviceNumber_div}>
                                        Device Number
                                      </div>
                                      <div className={styles.deviceNumber_id}>
                                        {
                                          allDevice?.DeviceLink
                                            ?.AccountDeviceLink?.Device
                                            ?.deviceUid
                                        }
                                        <span>...</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Template */}
                                  {plan?.getPlans?.planId === 2 ? (
                                    allDevice.DeviceLink.ModeId === 4 ||
                                    allDevice.DeviceLink.ModeId === 3 ? null : (
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
                                          <div
                                            className={styles.deviceNumber_div}
                                          >
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
                                                  color: "#FFF",
                                                  padding: 0,
                                                  fontFamily: "Oxygen",
                                                  fontSize: "18px",
                                                  fontWeight: 300,
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "end",
                                                  }}
                                                >
                                                  {
                                                    allDevice?.DeviceLink
                                                      ?.Template?.templateName
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

                                              <Dropdown.Menu
                                                className={
                                                  styles.dropdownBackground
                                                }
                                              >
                                                {allTemplate?.map(
                                                  (name: any) => {
                                                    if (
                                                      name.templateActiveStatus ===
                                                      true
                                                    ) {
                                                      return (
                                                        <Dropdown.Item
                                                          eventKey={
                                                            name.templateNameId
                                                          }
                                                          onClick={() =>
                                                            switchTemplateFunction(
                                                              name.templateNameId,
                                                              allDevice
                                                                ?.DeviceLink
                                                                ?.AccountDeviceLink
                                                                ?.DeviceId,
                                                              allDevice
                                                                .DeviceLink
                                                                .ProfileId
                                                            )
                                                          }
                                                          className={
                                                            styles.dropdownText
                                                          }
                                                          key={
                                                            name.templateNameId
                                                          } // Add a unique key for each item
                                                        >
                                                          {name.templateName}
                                                          <div
                                                            className={
                                                              styles.lineText
                                                            }
                                                          />
                                                        </Dropdown.Item>
                                                      );
                                                    }
                                                    return null; // Return null for items with templateActiveStatus set to false
                                                  }
                                                )}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  ) : (
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
                                        <div
                                          className={styles.deviceNumber_div}
                                        >
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
                                                color: "#FFF",
                                                padding: 0,
                                                fontFamily: "Oxygen",
                                                fontSize: "18px",
                                                fontWeight: 300,
                                              }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "end",
                                                }}
                                              >
                                                {
                                                  allDevice?.DeviceLink
                                                    ?.Template?.templateName
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

                                            <Dropdown.Menu
                                              className={
                                                styles.dropdownBackground
                                              }
                                            >
                                              {allTemplate?.map((name: any) => {
                                                if (
                                                  name.templateActiveStatus ===
                                                  true
                                                ) {
                                                  return (
                                                    <Dropdown.Item
                                                      eventKey={
                                                        name.templateNameId
                                                      }
                                                      onClick={() =>
                                                        switchTemplateFunction(
                                                          name.templateNameId,
                                                          allDevice?.DeviceLink
                                                            ?.AccountDeviceLink
                                                            ?.DeviceId,
                                                          allDevice.DeviceLink
                                                            .ProfileId
                                                        )
                                                      }
                                                      className={
                                                        styles.dropdownText
                                                      }
                                                      key={name.templateNameId} // Add a unique key for each item
                                                    >
                                                      {name.templateName}
                                                      <div
                                                        className={
                                                          styles.lineText
                                                        }
                                                      />
                                                    </Dropdown.Item>
                                                  );
                                                }
                                                return null; // Return null for items with templateActiveStatus set to false
                                              })}
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Modes */}
                                  {plan?.getPlans?.planId === 1 ? null : (
                                    <div
                                      className={styles.deviceNumber}
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
                                      <div className={styles.image_div}>
                                        <Image
                                          src={ModeIcon}
                                          width="40px"
                                          height="40px"
                                          alt="bubbl"
                                        />
                                      </div>
                                      <div>
                                        <div
                                          className={styles.deviceNumber_div}
                                        >
                                          Modes
                                        </div>
                                        <div className={styles.number_tag}>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              id="dropdown-basic"
                                              variant="none"
                                              className={styles.dropdown_fix}
                                              style={{
                                                color: "#FFF",
                                                padding: 0,
                                                fontFamily: "Oxygen",
                                                fontSize: "18px",
                                                fontWeight: 300,
                                              }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "end",
                                                }}
                                              >
                                                {
                                                  allDevice?.DeviceLink?.Mode
                                                    ?.mode
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

                                            <Dropdown.Menu
                                              className={
                                                styles.dropdownBackground
                                              }
                                            >
                                              {allMode?.map((mode: any) => {
                                                return (
                                                  <Dropdown.Item
                                                    eventKey={mode.id}
                                                    onClick={() =>
                                                      switchModeFunction(
                                                        mode.id,
                                                        allDevice?.DeviceLink
                                                          ?.AccountDeviceLink
                                                          ?.DeviceId,
                                                        allDevice?.DeviceLink
                                                      )
                                                    }
                                                    className={
                                                      styles.dropdownText
                                                    }
                                                  >
                                                    {mode.mode}
                                                    <div
                                                      className={
                                                        styles.lineText
                                                      }
                                                    />
                                                  </Dropdown.Item>
                                                );
                                              })}
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Device Status */}
                                  {/* Desktop */}
                                  <div className={styles.deviceNumber}>
                                    <div className={styles.activeFix}>
                                      <div className={styles.deviceNumber_div}>
                                        Active Profile
                                      </div>
                                      <Dropdown>
                                        <Dropdown.Toggle
                                          variant="none"
                                          className={styles.dropdown_fix2}
                                          style={{
                                            // color: "white",
                                            pointerEvents:
                                              allDevice?.DeviceLink !== null
                                                ? "auto"
                                                : "none",
                                            opacity:
                                              allDevice?.DeviceLink !== null
                                                ? 1
                                                : 0.5,
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              color: "white",
                                            }}
                                          >
                                            {
                                              allDevice?.DeviceLink?.Profile
                                                ?.profileName
                                            }
                                            <Image
                                              alt="bubbl"
                                              src={CustomToggle}
                                              width="13px"
                                              height="13px"
                                              style={{
                                                marginLeft: "3px",
                                                marginTop: "2px",
                                              }}
                                            />
                                          </div>
                                        </Dropdown.Toggle>

                                        {allDevice?.DeviceLink ===
                                        null ? null : (
                                          <Dropdown.Menu
                                            className={
                                              styles.dropdownBackground
                                            }
                                          >
                                            {allProfiles?.map(
                                              (profile: any) => {
                                                return (
                                                  <Dropdown.Item
                                                    eventKey={profile.id}
                                                    onClick={() =>
                                                      switchProfileFunction(
                                                        profile.id,
                                                        allDevice?.DeviceLink
                                                          ?.AccountDeviceLink
                                                          ?.Device?.id
                                                      )
                                                    }
                                                    className={
                                                      styles.dropdownText
                                                    }
                                                  >
                                                    {profile.profileName}
                                                    <div
                                                      className={
                                                        styles.lineText
                                                      }
                                                    />
                                                  </Dropdown.Item>
                                                );
                                              }
                                            )}
                                          </Dropdown.Menu>
                                        )}
                                      </Dropdown>
                                    </div>
                                  </div>

                                  <div className={styles.deviceNumber}>
                                    <div className={styles.activeFix}>
                                      <div className={styles.deviceNumber_div}>
                                        Status
                                      </div>
                                      {allDevice?.DeviceLink?.activeStatus ===
                                      true ? (
                                        <div
                                          className={styles.number_tag_inactive}
                                        >
                                          <span
                                            className={styles.active_green}
                                          />
                                          <span className={styles.activeSpan}>
                                            (Active)
                                          </span>
                                        </div>
                                      ) : (
                                        <div
                                          className={styles.number_tag_inactive}
                                        >
                                          <span className={styles.active_red} />
                                          <span className={styles.inActiveSpan}>
                                            ( In Active)
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  <div className={styles.deviceNumber}>
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="none"
                                        className={styles.dropdown_toggle}
                                        style={{
                                          pointerEvents:
                                            allDevice?.DeviceLink !== null
                                              ? "auto"
                                              : "none",
                                          opacity:
                                            allDevice?.DeviceLink !== null
                                              ? 1
                                              : 0.5,
                                        }}
                                      >
                                        <Image
                                          src={menuIcon}
                                          width="35"
                                          height="35"
                                          alt="bubbl"
                                        />
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu
                                        className={styles.dropdownBackground}
                                      >
                                        <div>
                                          {allDevice?.DeviceLink
                                            ?.activeStatus === true ? (
                                            <Dropdown.Item
                                              onClick={() =>
                                                deActiveFunction(allDevice)
                                              }
                                              className={styles.dropdownText}
                                            >
                                              Deactivate Device
                                              <div
                                                className={styles.lineText}
                                              />
                                            </Dropdown.Item>
                                          ) : (
                                            <Dropdown.Item
                                              onClick={() =>
                                                activeFunction(allDevice)
                                              }
                                              className={styles.dropdownText}
                                            >
                                              Activate Device
                                              <div
                                                className={styles.lineText}
                                              />
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
                                          onClick={() =>
                                            replaceDevice(allDevice)
                                          }
                                          className={styles.dropdownText}
                                        >
                                          Replace Device
                                          <div className={styles.lineText} />
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>

                                <div className={styles.hrLineTag} />
                                <div className={styles.editProfileBtn}>
                                  <div>
                                    <Button
                                      style={{
                                        visibility:
                                          plan?.getPlans?.planId === 2
                                            ? allDevice.DeviceLink.ModeId ===
                                                4 ||
                                              allDevice.DeviceLink.ModeId === 3
                                              ? "hidden"
                                              : "visible"
                                            : "visible",
                                      }}
                                      className={styles.profileCreateBtn}
                                      onClick={() =>
                                        EditProfilePage(allDevice?.DeviceLink)
                                      }
                                    >
                                      Edit Profile
                                    </Button>
                                  </div>

                                  {allDevice?.DeviceLink! == null && (
                                    <div
                                      onClick={() => {
                                        setLinkDeviceValues(allDevice?.id);
                                        setLinkModal(true);
                                      }}
                                    >
                                      <Button className={styles.linkDeviceBtn}>
                                        + Link device
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </Card>
                              {allDevice?.DeviceLink === null && (
                                <p className={styles.linkTag}>
                                  Your device is not currently linked. If you
                                  want buy devices click on <span>SHOP</span>
                                </p>
                              )}
                            </div>

                            {/* Responsive */}
                            <div className={styles.responsiveCard}>
                              {allDevice?.DeviceLink === null && (
                                <p className={styles.deviceTag}>
                                  Your device is not currently linked. If you
                                  want buy devices click on <span>SHOP</span>
                                </p>
                              )}
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

                                    <div
                                      className={styles.deviceNumber_responsive}
                                    >
                                      <div>
                                        <div
                                          className={styles.deviceNumber_div}
                                        >
                                          Device Number
                                        </div>
                                        <div className={styles.deviceNumber_id}>
                                          {
                                            allDevice?.DeviceLink
                                              ?.AccountDeviceLink?.Device
                                              ?.deviceUid
                                          }
                                          <span>...</span>
                                        </div>
                                        <div
                                          className={styles.deviceStatus_div}
                                        >
                                          Device Status
                                        </div>
                                        <div className={styles.activeFix}>
                                          {allDevice?.DeviceLink
                                            ?.activeStatus === true ? (
                                            <div
                                              className={
                                                styles.number_tag_responsive
                                              }
                                            >
                                              <div
                                                className={styles.active_green}
                                              />
                                              <div
                                                className={styles.active_tag}
                                              >
                                                (Active)
                                              </div>
                                            </div>
                                          ) : (
                                            <div
                                              className={
                                                styles.number_tag_inactive
                                              }
                                            >
                                              <span
                                                className={styles.active_red}
                                              />
                                              <span
                                                className={styles.inActiveSpan}
                                              >
                                                ( In Active)
                                              </span>
                                            </div>
                                          )}
                                        </div>

                                        {allDevice?.DeviceLink! == null && (
                                          <div
                                            className={
                                              styles.linkBtnResponsiveDiv
                                            }
                                          />
                                        )}
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
                                            src={menuIcon}
                                            width="30"
                                            height="30"
                                            alt="bubbl"
                                          />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                          style={{ marginLeft: "-110px" }}
                                        >
                                          <div>
                                            {allDevice?.DeviceLink
                                              ?.activeStatus === true ? (
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
                                            onClick={() =>
                                              replaceDevice(allDevice)
                                            }
                                          >
                                            Replace Device
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>

                                  {/** profile dropdown */}

                                  <div className={styles.profileContainer}>
                                    <p>Profile</p>
                                    <div className={styles.vertical_line} />
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant="none"
                                        className={styles.dropdown_fix}
                                        style={{
                                          color: "white",
                                          // pointerEvents:
                                          //   allDevice?.DeviceLink !== null
                                          //     ? "auto"
                                          //     : "none",
                                          // opacity:
                                          //   allDevice?.DeviceLink !== null
                                          //     ? 1
                                          // : 0.5,
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            fontSize: "16px",
                                          }}
                                        >
                                          <div>
                                            {allDevice?.DeviceLink?.Profile
                                              ?.profileName
                                              ? allDevice?.DeviceLink?.Profile
                                                  ?.profileName
                                              : allProfiles[0].profileName}
                                          </div>
                                          <Image
                                            alt="bubbl"
                                            src={CustomToggle}
                                            width="13px"
                                            height="13px"
                                            style={{
                                              marginTop: "2.5px",
                                              marginLeft: "2.8px",
                                            }}
                                          />
                                        </div>
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu
                                        className={styles.dropdownBackground}
                                      >
                                        {allProfiles?.map((profile: any) => {
                                          return (
                                            <Dropdown.Item
                                              eventKey={profile.id}
                                              onClick={() =>
                                                switchProfileFunction(
                                                  profile.id,
                                                  allDevice?.DeviceLink
                                                    ?.AccountDeviceLink?.Device
                                                    ?.id
                                                )
                                              }
                                              className={styles.dropdownText}
                                            >
                                              {profile.profileName}
                                              <div
                                                className={styles.lineText}
                                              />
                                            </Dropdown.Item>
                                          );
                                        })}
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>

                                  <div className={styles.buttonsContainer}>
                                    <div
                                      className={styles.editButtonResp}
                                      onClick={() =>
                                        EditProfilePage(allDevice?.DeviceLink)
                                      }
                                    >
                                      Edit Profile
                                    </div>
                                    {allDevice?.DeviceLink === null && (
                                      <div
                                        className={styles.linkButtonResp}
                                        onClick={() => {
                                          setLinkDeviceValues(allDevice?.id);
                                          setLinkModal(true);
                                        }}
                                      >
                                        + Link Device
                                      </div>
                                    )}
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
                                              color: "#FFF",
                                              padding: 0,
                                              fontFamily: "Oxygen",
                                              fontSize: "16px",
                                              fontWeight: 400,
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

                                          <Dropdown.Menu
                                            className={
                                              styles.dropdownBackground
                                            }
                                          >
                                            {allTemplate?.map((name: any) => {
                                              if (
                                                name.templateActiveStatus ===
                                                true
                                              ) {
                                                return (
                                                  <Dropdown.Item
                                                    eventKey={
                                                      name.templateNameId
                                                    }
                                                    onClick={() =>
                                                      switchTemplateFunction(
                                                        name.templateNameId,
                                                        allDevice?.DeviceLink
                                                          ?.AccountDeviceLink
                                                          ?.DeviceId,
                                                        allDevice.DeviceLink
                                                          .ProfileId
                                                      )
                                                    }
                                                    className={
                                                      styles.dropdownText
                                                    }
                                                    key={name.templateNameId} // Add a unique key for each item
                                                  >
                                                    {name.templateName}
                                                    <div
                                                      className={
                                                        styles.lineText
                                                      }
                                                    />
                                                  </Dropdown.Item>
                                                );
                                              }
                                              return null; // Return null for items with templateActiveStatus set to false
                                            })}
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                  {plan?.getPlans?.planId === 1 ? null : (
                                    <div
                                      className={`${styles.deviceNumber} ${styles.deviceNumber_resp}`}
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
                                      <div className={styles.image_div}>
                                        <Image
                                          alt="bubbl"
                                          src={ModeIcon}
                                          width="40px"
                                          height="40px"
                                        />
                                      </div>
                                      <div>
                                        <div
                                          className={styles.deviceNumber_div}
                                        >
                                          Modes
                                        </div>
                                        <div className={styles.number_tag}>
                                          <Dropdown>
                                            <Dropdown.Toggle
                                              id="dropdown-basic"
                                              variant="none"
                                              className={styles.dropdown_fix}
                                              style={{
                                                color: "#FFF",
                                                padding: 0,
                                                fontFamily: "Oxygen",
                                                fontSize: "16px",
                                                fontWeight: 300,
                                              }}
                                            >
                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "end",
                                                }}
                                              >
                                                {
                                                  allDevice?.DeviceLink?.Mode
                                                    ?.mode
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
                                              {allMode?.map((mode: any) => {
                                                return (
                                                  <Dropdown.Item
                                                    eventKey={mode.id}
                                                    onClick={() =>
                                                      switchModeFunction(
                                                        mode.id,
                                                        allDevice?.DeviceLink
                                                          ?.AccountDeviceLink
                                                          ?.DeviceId,
                                                        allDevice?.DeviceLink
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
                          </div>
                        )}
                      </>
                    )}

                    {deleteShow === true && (
                      <DeleteDevice
                        show={deleteShow}
                        onClose={handleClose}
                        deactiveValues={deleteValues}
                        getAllDeviceFunction={getAllDeviceFunction}
                      />
                    )}
                    {deActiveShow === true && (
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
                    {directURLShow === true && (
                      <DirectURLForm
                        show={directURLShow}
                        onClose={handleCloseModeModal}
                        onSubmit={handleSubmitModeModal}
                        directValues={directValues}
                      />
                    )}

                    {linkModal === true && (
                      <LinkDeviceModal
                        show={linkModal}
                        onClose={handleClose}
                        profileId={linkDeviceValues}
                        getAllDeviceFunction={getAllDeviceFunction}
                      />
                    )}
                  </div>
                );
              })}

              {/* NON LINK PROFILES */}
              {allProfiles?.map((profiles: any) => {
                if (profiles?.DeviceLink === null) {
                  return (
                    <div className={styles.card_alignment}>
                      <div className={styles.card_div_desktop}>
                        <Card className={styles.card_div}>
                          <div className={styles.multiple_cards}>
                            <div className={styles.deviceNumber}>
                              <div className={styles.image_div}>
                                <Image
                                  src={NumberIcon}
                                  width="40px"
                                  height="40px"
                                  alt="bubbl"
                                />
                              </div>

                              {/* Device Number */}
                              <div>
                                <div className={styles.deviceNumber_div}>
                                  Device Number
                                </div>
                                <div className={styles.deviceNumber_id}> -</div>
                              </div>
                            </div>

                            {/* Template */}
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
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <Dropdown.Toggle
                                      variant="none"
                                      className={styles.dropdown_fix}
                                      style={{
                                        color: "#FFF",
                                        padding: 0,
                                        fontFamily: "Oxygen",
                                        fontSize: "18px",
                                        fontWeight: 300,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "end",
                                        }}
                                      >
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
                                  </Dropdown>
                                </div>
                              </div>
                            </div>

                            {/* Modes */}
                            {plan?.getPlans?.planId === 1 ? null : (
                              <div className={styles.deviceNumber}>
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
                                          color: "#FFF",
                                          padding: 0,
                                          fontFamily: "Oxygen",
                                          fontSize: "18px",
                                          fontWeight: 300,
                                          pointerEvents: "none",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "end",
                                          }}
                                        >
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
                                    </Dropdown>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Device Status */}
                            {/* Desktop */}
                            <div className={styles.deviceNumber}>
                              <div className={styles.activeFix}>
                                <div className={styles.deviceNumber_div}>
                                  Active Profile
                                </div>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="none"
                                    className={styles.dropdown_fix2}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "white",
                                      }}
                                    >
                                      {profiles?.profileName}
                                      <Image
                                        alt="bubbl"
                                        src={CustomToggle}
                                        width="13px"
                                        height="13px"
                                        style={{
                                          marginLeft: "3px",
                                          marginTop: "2px",
                                        }}
                                      />
                                    </div>
                                  </Dropdown.Toggle>
                                </Dropdown>
                              </div>
                            </div>

                            <div className={styles.deviceNumber}>
                              <div className={styles.activeFix}>
                                <div className={styles.deviceNumber_div}>
                                  Status
                                </div>

                                <div className={styles.number_tag_inactive}>
                                  <span className={styles.active_red} />
                                  <span className={styles.inActiveSpan}>
                                    ( In Active)
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className={styles.deviceNumber}>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="none"
                                  className={styles.dropdown_toggle}
                                  style={{ pointerEvents: "none" }}
                                >
                                  <Image
                                    src={menuIcon}
                                    width="35"
                                    height="35"
                                    alt="bubbl"
                                  />
                                </Dropdown.Toggle>
                              </Dropdown>
                            </div>
                          </div>

                          <div className={styles.hrLineTag} />

                          <div className={styles.editProfileBtn}>
                            <div>
                              <Button
                                className={styles.profileCreateBtn}
                                onClick={() => EditProfilePage(profiles?.id)}
                              >
                                Edit Profiles
                              </Button>
                            </div>
                            <div
                              className={styles.linkButton}
                              onClick={() => {
                                setLinkDeviceValues(profiles?.id);
                                setLinkModal(true);
                              }}
                            >
                              + Link Device
                            </div>
                          </div>
                        </Card>
                        <p className={styles.linkTag}>
                          Your device is not currently linked. If you want buy
                          devices click on{" "}
                          <span onClick={() => router.push("/shopPage")}>
                            SHOP
                          </span>
                        </p>
                      </div>

                      {/* Responsive */}
                      <div className={styles.responsiveCard}>
                        <p className={styles.deviceTag}>
                          Your device is not currently linked.
                          <br /> If you want buy devices click on{" "}
                          <span onClick={() => router.push("/shopPage")}>
                            SHOP
                          </span>
                        </p>
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
                                <div>
                                  <div className={styles.deviceNumber_div}>
                                    Device Number
                                  </div>
                                  <div className={styles.deviceNumber_id}>
                                    <span>...</span>
                                  </div>
                                  <div className={styles.deviceStatus_div}>
                                    Device Status
                                  </div>
                                  <div className={styles.activeFix}>
                                    {/* {allDevice?.DeviceLink?.activeStatus ===
                    true ? ( */}
                                    <div
                                      className={styles.number_tag_responsive}
                                    >
                                      <div className={styles.active_green} />
                                      <div className={styles.active_tag}>
                                        (Active)
                                      </div>
                                    </div>
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
                                      src={menuIcon}
                                      width="30"
                                      height="30"
                                      alt="bubbl"
                                    />
                                  </Dropdown.Toggle>
                                </Dropdown>
                              </div>
                            </div>

                            {/** profile dropdown */}

                            <div className={styles.profileContainer}>
                              <p>Profile</p>
                              <div className={styles.vertical_line} />
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="none"
                                  className={styles.dropdown_fix}
                                  style={{
                                    color: "white",
                                    pointerEvents: "none",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      fontSize: "16px",
                                    }}
                                  >
                                    <div>{profiles?.profileName}</div>
                                    <Image
                                      alt="bubbl"
                                      src={CustomToggle}
                                      width="13px"
                                      height="13px"
                                      style={{
                                        marginTop: "2.5px",
                                        marginLeft: "2.8px",
                                      }}
                                    />
                                  </div>
                                </Dropdown.Toggle>
                              </Dropdown>
                            </div>

                            <div className={styles.buttonsContainer}>
                              <div
                                className={styles.editButtonResp}
                                onClick={() => EditProfilePage(profiles?.id)}
                              >
                                Edit Profile
                              </div>
                              <div
                                className={styles.linkButtonResp}
                                onClick={() => {
                                  setLinkDeviceValues(profiles?.id);
                                  setLinkModal(true);
                                }}
                              >
                                + Link Device
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
                              </div>
                            </div>
                            {plan?.getPlans?.planId === 1 ? null : (
                              <div
                                className={`${styles.deviceNumber} ${styles.deviceNumber_resp}`}
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
                                          color: "#FFF",
                                          padding: 0,
                                          fontFamily: "Oxygen",
                                          fontSize: "16px",
                                          fontWeight: 300,
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "end",
                                          }}
                                        >
                                          {/* {allDevice?.DeviceLink?.Mode?.mode} */}
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
                                            <Dropdown.Item eventKey={mode.id}>
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
                    </div>
                  );
                }
              })}

              <div className={styles.backgroundContainer}>
                <ParallaxWrapper>
                  <ParallaxBackground
                    scrollPosition={scrollPosition / 10}
                    topPositions={topPositions}
                    sizes={sizes}
                    rightPositions={rightPositions}
                    leftPositions={leftPosition}
                    showImage1
                    showImage2={false}
                    showImage3
                    showGradients={showGradients}
                  />
                </ParallaxWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}

export default YourProfile;
