/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import { IDeviceBranding } from "src/App/services/createProfileApi";
import {
  getUserPlan,
  IPlanDetail,
} from "src/App/services/myPlan/myPlanServices";
import { PostTapDetails } from "src/App/services/tapApi";
import { MODAL_TYPES } from "types/modal";

import CropSection from "@/pages/createProfileStep2/imageCropModal";
import CropSectionLogo from "@/pages/createProfileStep2/imageCropModalLogo";

import customCloseButtonImage from "../../../../../../../images/Phase_2_All_Assets/comman_assets/close.png";
import SaveVCFContact from "../../../../../helpers/saveContactHelper";
import QrModal from "../../Components/QrModal/qrModal";
import SaveContact from "../../Components/SaveContact_1/saveContact";
import useProfile from "../../hooks/useProfile";
import BubblIcon from "../../Images/assets_for_profile_templates/Common/B_Icon.svg";
import LogoWhite from "../../Images/assets_for_profile_templates/Common/logoWhite.png";
import PencilViewBlack from "../../Images/assets_for_profile_templates/Common/pencilIcon.svg";
import PencilView from "../../Images/assets_for_profile_templates/Common/pencilIcon_White.svg";
import ProfileEditIcon from "../../Images/assets_for_profile_templates/Common/profileEditIcon.svg";
import Share from "../../Images/assets_for_profile_templates/Common/shareIcon.svg";
import UserImg from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/dummy.svg";
import Gpay from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/google_pay-01.svg";
import Paytm from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytm-01.svg";
import PhonePe from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepay-01.svg";
import Arrow from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/rightArrow.svg";
import CallSVG from "./Components/icons/call_svg";
import FacebookSVG from "./Components/icons/facebook_svg";
import InstaSVG from "./Components/icons/insta_svg";
import LinkdinSVG from "./Components/icons/linkdin_svg";
import LocationSVG from "./Components/icons/location_svg";
import MailSVG from "./Components/icons/mail_svg";
import TwitterSVG from "./Components/icons/twitter_svg";
import WhatsAppSVG from "./Components/icons/wats_svg";
import WebSVG from "./Components/icons/web_svg";
import YotubesSVG from "./Components/icons/youtube_svg";
import styles from "./style.module.css";

export default function FreeTemplateOne({
  edit,
  deviceBranding,
  userProfile,
  profileImage,
  userProfileDispatch,
  setModalType,
  handleSave,
  handleQrSave,
  qrImage,
  userName,
  getAllProfile,
  modeId,
  imageError,
  deviceUid,
  deviceId,
}: {
  edit: boolean;
  deviceBranding: IDeviceBranding | null;
  userProfile: any | undefined;
  profileImage: any;
  userProfileDispatch: any;
  setModalType: any;
  handleSave: any;
  handleQrSave: any;
  qrImage: any;
  userName: string;
  getAllProfile: any;
  modeId: any;
  imageError: string;
  deviceUid: any;
  deviceId: any;
}) {
  const mode = deviceBranding?.darkMode ? "dark" : "light";
  let backgroundColor: string | undefined;

  if (deviceBranding !== undefined) {
    backgroundColor = deviceBranding?.brandingBackGroundColor;
  } else {
    backgroundColor = "rgb(144, 0, 255)";
  }
  // const { brandingBackGroundColor: backgroundColor } = deviceBranding;
  const [showPf, setShow] = useState(false);
  const [showPfLogo, setShowLogo] = useState(false);
  const [qrShow, setQrShow] = useState(false);

  const {
    digitalPayments,
    editHandlers,
    editingFieldName,
    emailIdField,
    inputBlurHandlers,
    inputChangeHandlers,
    mediaLinks,
    phoneNumberField,
    socialMediaNames,
    websiteField,
    phoneNumberCount,
    emailIdFieldCount,
    websiteFieldCount,
  } = useProfile({ userProfile, userProfileDispatch, getAllProfile });
  const router = useRouter();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseLogo = () => setShowLogo(false);
  const handleShowLogo = () => setShowLogo(true);
  const handleQrClose = () => setQrShow(false);
  const handleQrShow = () => setQrShow(true);
  const updateAddress = userProfile?.data?.address || getAllProfile?.address;
  const [userPlan, setUserPlan] = useState<null | IPlanDetail>(null);
  let val2 = "";
  if (updateAddress) {
    // const val = updateAddress.replace(/ /g, "+");
    val2 = updateAddress.replace(/,/g, "+");
  }
  useEffect(() => {
    const userPlanPromise = getUserPlan();
    if (userPlanPromise) {
      userPlanPromise
        .then((res) => res.data)
        .then((data) => {
          const { getPlans } = data;
          setUserPlan(getPlans);
        });
    }
  }, []);
  const handleShareIconClick = () => {
    if (!userName) {
      toast.info("No unique name is configured");
      return;
    }
    const textToCopy = `https://bubbl.cards/profile/${userName}`;
    navigator.clipboard.writeText(textToCopy);
    toast.success(`Copied "${textToCopy}" to clipboard!`, { autoClose: 3000 });
  };

  const handlePaymentClick = (paymentMethod: any) => {
    navigator.clipboard.writeText(paymentMethod);
    toast.success(`Copied ${paymentMethod} to clipboard!`, { autoClose: 3000 });
  };

  // Handling individual field preview and hide
  const showPhoneNumber =
    getAllProfile?.profilePhoneNumbers?.length !== undefined ||
    edit ||
    (phoneNumberField && phoneNumberField?.phoneNumber !== "");
  const showEmailIds =
    getAllProfile?.profileEmails?.length !== undefined ||
    edit ||
    (emailIdField && emailIdField?.emailId !== "");
  const showWebsite =
    getAllProfile?.profileWebsites?.length !== undefined ||
    edit ||
    (websiteField && websiteField?.website !== "");

  const { address, city, state, country, zipCode } =
    getAllProfile || (userProfile && userProfile?.data) || {};
  const showAddress = edit || address || city || state || zipCode || country;

  // Handling Full preview and hide section

  let showContactSection = [
    showPhoneNumber,
    showEmailIds,
    showWebsite,
    showAddress,
  ].some((show) => show);

  if (getAllProfile?.profilePhoneNumbers?.length > 0) {
    showContactSection = true;
  }
  const showSocialMediaSection =
    edit || Object.values(mediaLinks).some((socialLink) => socialLink !== "#");

  // if (getAllProfile?.profileSocialMediaLinks?.length > 0) {
  //   showSocialMediaSection = true;
  // }

  const showDigitalPaymentSection =
    edit ||
    Object.values(digitalPayments).some(
      (digitalPaymentLink) => digitalPaymentLink.digitalPaymentLink
    );
  // if (getAllProfile?.profileDigitalPaymentLinks?.length > 0) {
  //   showDigitalPaymentSection = true;
  // }
  const shouldHandleClick = !router.pathname.startsWith("/createProfileStep3/");

  const handleClick = async (clickId: any) => {
    if (shouldHandleClick) {
      const tapObj = {
        deviceId: deviceId,
        clickAction: clickId,
      };
      console.log("Calling PostTapDetails with:", tapObj);
      const tapResponse = await PostTapDetails(tapObj);
      console.log("Response:", tapResponse);
    }
  };

  async function saveContactAuto() {
    const firstName = getAllProfile?.firstName;
    const lastName = getAllProfile?.lastName;
    const phoneNumber = getAllProfile?.profilePhoneNumbers;
    const emailId = getAllProfile?.profileEmails;
    const website = getAllProfile?.profileWebsites;
    const addressList = getAllProfile?.address;
    const stateList = getAllProfile?.state;
    const cityList = getAllProfile?.city;
    const countryList = getAllProfile?.country;
    const companyList = getAllProfile?.companyList;
    const designationList = getAllProfile?.designationList;
    const descriptionList = getAllProfile?.shortDescription;
    const saveId = getAllProfile?.id;
    const socialMedia = getAllProfile?.profileSocialMediaLinks;
    const profileImgs = profileImage;

    if (Number(modeId) === 1) {
      const vcfData = await SaveVCFContact(
        firstName,
        lastName,
        companyList,
        designationList,
        phoneNumber,
        profileImgs,
        "",
        socialMedia,
        website,
        emailId,
        "",
        stateList,
        cityList,
        addressList,
        countryList,
        deviceUid
      );
      const file = new Blob([vcfData], { type: "text/vcard" });
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", `${firstName}.vcf`);
      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    }
  }

  useEffect(() => {
    saveContactAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Upload Logo */}
      <Modal
        show={qrShow}
        onHide={handleQrClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className={styles.CropBody}>
          <Modal.Header className={styles.CropBodyHeader}>
            <Modal.Title className={styles.ImageCrop}>Upload Logo</Modal.Title>
            <Image
              src={customCloseButtonImage}
              onClick={handleQrClose}
              alt="Close"
              className={styles.CustomCloseButton}
            />
          </Modal.Header>
          <Modal.Body className={styles.modalDiv}>
            <div>
              <div className={styles.LogoUploadInput}>
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingBottom: "5px",
                  }}
                >
                  Note: Upload only png image
                </span>
                <input
                  type="file"
                  accept="image/png"
                  id="qrImageInput"
                  onChange={handleQrSave}
                />
              </div>

              {imageError && (
                <p style={{ color: "red" }} className={styles.errorMsg}>
                  {imageError}
                </p>
              )}
            </div>
            <Button onClick={handleQrClose} className={styles.SaveLogo}>
              Save
            </Button>
          </Modal.Body>
        </div>
      </Modal>
      {/* Upload Profile Image */}
      <Modal
        show={showPf}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className={styles.CropBody}>
          <Modal.Header className={styles.CropBodyHeader}>
            <Modal.Title className={styles.ImageCrop}>
              Upload Profile Image
            </Modal.Title>
            <Image
              src={customCloseButtonImage}
              onClick={handleClose}
              alt="Close"
              className={styles.CustomCloseButton}
            />
          </Modal.Header>
          <Modal.Body className={styles.modalDiv}>
            <CropSection onSave={handleSave} onSavedSuccess={handleClose} />
          </Modal.Body>
        </div>
      </Modal>
      {/* Upload Logo Image */}
      <Modal
        show={showPfLogo}
        onHide={handleCloseLogo}
        backdrop="static"
        keyboard={false}
        centered
      >
        <div className={styles.CropBody}>
          <Modal.Header className={styles.CropBodyHeader}>
            <Modal.Title className={styles.ImageCrop}>Upload Logo</Modal.Title>
            <Image
              src={customCloseButtonImage}
              onClick={handleCloseLogo}
              alt="Close"
              className={styles.CustomCloseButton}
            />
          </Modal.Header>
          <Modal.Body className={styles.modalDiv}>
            <CropSectionLogo
              onSave={handleQrSave}
              onSavedSuccess={handleCloseLogo}
            />
          </Modal.Body>
        </div>
      </Modal>
      {/* Body Starts Here */}
      <section
        className={styles.FreeTemplateOneLite}
        style={
          mode === "dark"
            ? {
                background: "black",
              }
            : {}
        }
      >
        <div className={styles.templateBanner}>
          <div className={styles.BannerImg} style={{ backgroundColor }}>
            {/* Banner Image Container */}
            <div className={styles.B_Img}>
              {/* BubblIcon Image */}
              <Image src={BubblIcon} alt="BubblIcon" />
            </div>
            {/* User Image Container */}
            <div className={styles.UserImg}>
              <div className={styles.userProfile}>
                {/* User Profile Image */}

                <div className={styles.ProfileImg}>
                  {profileImage?.square && profileImage.square !== "" ? (
                    <Image
                      src={profileImage?.square}
                      alt="UserImage"
                      width={120}
                      height={120}
                    />
                  ) : (
                    <Image src={UserImg} alt="Dummy" width={120} height={120} />
                  )}
                </div>
                {/* User Profile Edit Icon Container */}
                {edit ? (
                  <div
                    className={styles.userProfileEdit}
                    style={{ backgroundColor }}
                  >
                    {/* Profile Edit Icon Image */}

                    <Image
                      src={ProfileEditIcon}
                      alt="ProfileEditIcon"
                      width={18}
                      height={18}
                      onClick={handleShow}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* Main Body Section */}
          <div className={styles.templateOutline}>
            {/* Banner */}
            <div className={styles.templateActions}>
              <div>
                <div className={styles.templateSaveContact}>
                  <SaveContact
                    deviceUid={deviceUid}
                    black=""
                    saveTextBorderColor=""
                    saveTextFieldColor=""
                    saveTextBackColor=""
                    saveIconBorderColor=""
                    saveIconBackgroundColor={
                      backgroundColor || "rgb(144, 0, 255)"
                    }
                    saveIconColor=""
                    fontSize=""
                    fontWeight=""
                    firstName={
                      getAllProfile?.firstName ||
                      (userProfile && userProfile?.data?.firstName)
                    }
                    lastName={
                      getAllProfile?.lastName ||
                      (userProfile && userProfile?.data?.lastName)
                    }
                    phoneNumber={
                      getAllProfile?.profilePhoneNumbers ||
                      (userProfile && userProfile?.data?.profilePhoneNumbers)
                    }
                    emailId={
                      getAllProfile?.profileEmails ||
                      (userProfile && userProfile?.data?.profileEmails)
                    }
                    website={
                      getAllProfile?.profileWebsites ||
                      (userProfile && userProfile?.data?.profileWebsites)
                    }
                    contacts={
                      getAllProfile?.address ||
                      (userProfile && userProfile?.data?.address)
                    }
                    state={
                      getAllProfile?.state ||
                      (userProfile && userProfile?.data?.state)
                    }
                    city={
                      getAllProfile?.city ||
                      (userProfile && userProfile?.data?.city)
                    }
                    country={
                      getAllProfile?.state ||
                      (userProfile && userProfile?.data?.country)
                    }
                    deviceId={
                      getAllProfile?.id ||
                      (userProfile && userProfile?.data?.id)
                    }
                    qrImageUrl={qrImage}
                    mediaArray={
                      getAllProfile?.profileSocialMediaLinks ||
                      (userProfile &&
                        userProfile?.data?.profileSocialMediaLinks)
                    }
                    profileImg={profileImage?.square}
                    companyName={
                      getAllProfile?.companyName ||
                      (userProfile && userProfile?.data?.companyName)
                    }
                    designation={
                      getAllProfile?.designation ||
                      (userProfile && userProfile?.data?.designation)
                    }
                  />
                </div>

                <div className={styles.Share_Qr}>
                  <div
                    className={styles.Share}
                    onClick={handleShareIconClick}
                    style={{ backgroundColor }}
                  >
                    <Image src={Share} alt="ShareIcon" width={20} height={20} />
                  </div>
                  <div className={styles.Qr} style={{ backgroundColor }}>
                    <QrModal
                      saveIconBorderColor=""
                      saveIconBackgroundColor=""
                      qrImageUrl=""
                      linkVal={userName}
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.LogoBrand}
                style={
                  mode === "dark"
                    ? {
                        backgroundColor: "#1E1E1E",
                      }
                    : {}
                }
              >
                <div className={styles.qrImg}>
                  {userPlan?.planId !== 1 && qrImage ? (
                    <img
                      src={qrImage}
                      alt="Logo"
                      className={styles.qrImgLogo}
                    />
                  ) : (
                    <Image
                      src={mode === "dark" ? LogoWhite : LogoWhite}
                      alt="Logo"
                      width={79}
                      height={19}
                    />
                  )}
                </div>

                {edit && userPlan?.planId !== 1 ? (
                  <div className={styles.QrEdit} style={{ backgroundColor }}>
                    <Image
                      src={ProfileEditIcon}
                      alt="ProfileEditIcon"
                      width={12}
                      height={12}
                      onClick={handleShowLogo}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* Top 3 data */}
            <div className={styles.templateUserDetails}>
              <div>
                {/* FirstName */}
                <div>
                  {editingFieldName === "firstName" ? (
                    <div className={styles.FirstNameEdit}>
                      <input
                        type="text"
                        value={userProfile && userProfile?.data?.firstName}
                        autoFocus
                        className={styles.input_line}
                        onChange={inputChangeHandlers.name}
                        onBlur={inputBlurHandlers.name}
                        maxLength={32}
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      />
                      {userProfile?.error?.firstName && (
                        <div className={styles.error}>
                          {userProfile?.error?.firstName}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles.FirstName}>
                      <h2
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      >
                        {getAllProfile?.firstName
                          ? getAllProfile?.firstName
                          : (userProfile && userProfile?.data?.firstName) ||
                            "Your Name"}
                      </h2>
                      {edit ? (
                        <div
                          onClick={editHandlers.name}
                          className={styles.PencilEdit}
                        >
                          {mode === "dark" ? (
                            <Image
                              src={PencilView}
                              alt="PencilDark"
                              width={25}
                              height={25}
                            />
                          ) : (
                            <Image
                              src={PencilViewBlack}
                              alt="PencilWhite"
                              width={25}
                              height={25}
                            />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
                {/* Designation */}
                <div>
                  {editingFieldName === "designation" ? (
                    <div className={styles.RoleNameEdit}>
                      <input
                        type="text"
                        value={userProfile && userProfile?.data?.designation}
                        className={styles.input_line}
                        autoFocus
                        onChange={inputChangeHandlers.job}
                        onBlur={inputBlurHandlers.job}
                        maxLength={30}
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      />
                      {userProfile?.error?.designation && (
                        <div className={styles.error}>
                          {userProfile?.error?.designation}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles.RoleName}>
                      <h3
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      >
                        {getAllProfile?.designation
                          ? getAllProfile?.designation
                          : (userProfile && userProfile?.data?.designation) ||
                            "Designation"}
                      </h3>
                      {edit ? (
                        <div
                          onClick={editHandlers.job}
                          className={styles.PencilEdit}
                        >
                          {mode === "dark" ? (
                            <Image
                              src={PencilView}
                              alt="PencilDark"
                              width={25}
                              height={25}
                            />
                          ) : (
                            <Image
                              src={PencilViewBlack}
                              alt="PencilWhite"
                              width={25}
                              height={25}
                            />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* Short Description */}
              {editingFieldName === "shortDescription" ? (
                <div className={styles.DesEdit}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    autoFocus
                    value={userProfile && userProfile?.data?.shortDescription}
                    className={styles.input_line}
                    onChange={inputChangeHandlers.desc}
                    onBlur={inputBlurHandlers.desc}
                    maxLength={200}
                    style={
                      mode === "dark"
                        ? {
                            // Add style for placeholder text in dark mode
                            color: "white",
                          }
                        : {}
                    }
                  />
                  {userProfile?.error?.shortDescription && (
                    <div className={styles.error}>
                      {userProfile?.error?.shortDescription}
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.Description}>
                  <p
                    style={
                      mode === "dark"
                        ? {
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {getAllProfile?.shortDescription
                      ? getAllProfile?.shortDescription
                      : (userProfile && userProfile?.data?.shortDescription) ||
                        "Description"}
                  </p>
                  {edit ? (
                    <div
                      onClick={editHandlers.desc}
                      className={styles.PencilEdit}
                    >
                      {mode === "dark" ? (
                        <Image
                          src={PencilView}
                          alt="PencilDark"
                          width={25}
                          height={25}
                        />
                      ) : (
                        <Image
                          src={PencilViewBlack}
                          alt="PencilWhite"
                          width={25}
                          height={25}
                        />
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
            {/* Contact Information  */}
            {showContactSection ? (
              <div className={styles.ContactInformation}>
                <h2
                  style={
                    mode === "dark"
                      ? {
                          color: "white",
                        }
                      : {}
                  }
                >
                  Contact Information
                </h2>

                <div className={styles.ContactInformationDetails}>
                  {/* Phone Number */}
                  {showPhoneNumber ? (
                    <div
                      className={styles.ContactAction}
                      onClick={() => handleClick(4)}
                    >
                      <div
                        className={styles.Left}
                        style={
                          mode === "dark"
                            ? {
                                backgroundColor: "#313131",
                              }
                            : {}
                        }
                      >
                        <CallSVG fill={backgroundColor || "#313131"} />
                      </div>

                      {getAllProfile?.profilePhoneNumbers?.length > 1 ||
                      phoneNumberCount > 1 ? (
                        <div
                          className={styles.Middle}
                          onClick={() =>
                            setModalType(MODAL_TYPES.mobileNumberView)
                          }
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profilePhoneNumbers[0]
                              ?.phoneNumber ||
                            (phoneNumberField &&
                              phoneNumberField.phoneNumber) ? (
                              getAllProfile?.profilePhoneNumbers?.[0]
                                ?.phoneNumber || phoneNumberField?.phoneNumber
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your number
                              </span>
                            )}
                          </p>
                        </div>
                      ) : (
                        <a
                          className={styles.Middle}
                          href={`tel:${
                            getAllProfile?.profilePhoneNumbers?.[0]
                              ?.phoneNumber || phoneNumberField?.phoneNumber
                          }`}
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profilePhoneNumbers[0]
                              ?.phoneNumber ||
                            (phoneNumberField &&
                              phoneNumberField.phoneNumber) ? (
                              getAllProfile?.profilePhoneNumbers?.[0]
                                ?.phoneNumber || phoneNumberField?.phoneNumber
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your number
                              </span>
                            )}
                          </p>
                        </a>
                      )}
                      {edit ? (
                        <div
                          className={styles.Right}
                          onClick={() =>
                            setModalType(MODAL_TYPES.mobileNumberEdit)
                          }
                          style={{ backgroundColor }}
                        >
                          <Image
                            src={PencilView}
                            alt="Pencil"
                            width={35}
                            height={35}
                          />
                        </div>
                      ) : getAllProfile?.profilePhoneNumbers?.length > 1 ||
                        phoneNumberCount > 1 ? (
                        <div
                          className={styles.Right}
                          style={{ backgroundColor }}
                          onClick={() => {
                            setModalType(MODAL_TYPES.mobileNumberView);
                          }}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </div>
                      ) : (
                        <a
                          className={styles.Right}
                          href={`tel:${
                            getAllProfile?.profilePhoneNumbers?.[0]
                              ?.phoneNumber || phoneNumberField?.phoneNumber
                          }`}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </a>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Email */}
                  {showEmailIds ? (
                    <div
                      className={styles.ContactAction}
                      onClick={() => handleClick(5)}
                    >
                      <div
                        className={styles.Left}
                        style={
                          mode === "dark"
                            ? {
                                backgroundColor: "#313131",
                              }
                            : {}
                        }
                      >
                        <MailSVG color={backgroundColor || "#313131"} />
                      </div>
                      {getAllProfile?.profileEmails?.length > 1 ||
                      emailIdFieldCount > 1 ? (
                        <div
                          className={styles.Middle}
                          onClick={() => setModalType(MODAL_TYPES.emailIdView)}
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profileEmails[0]?.emailId ||
                            (emailIdField && emailIdField.emailId) ? (
                              getAllProfile?.profileEmails[0]?.emailId ||
                              emailIdField?.emailId
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your Mail id
                              </span>
                            )}
                          </p>
                        </div>
                      ) : (
                        <a
                          className={styles.Middle}
                          href={`mailto:${
                            getAllProfile?.profileEmails?.[0]?.emailId ||
                            emailIdField?.emailId
                          }`}
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profileEmails[0]?.emailId ||
                            (emailIdField && emailIdField.emailId) ? (
                              getAllProfile?.profileEmails[0]?.emailId ||
                              emailIdField?.emailId
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your Mail id
                              </span>
                            )}
                          </p>
                        </a>
                      )}
                      {edit ? (
                        <div
                          className={styles.Right}
                          onClick={() => setModalType(MODAL_TYPES.emailIdEdit)}
                          style={{ backgroundColor }}
                        >
                          <Image
                            src={PencilView}
                            alt="Pencil"
                            width={35}
                            height={35}
                          />
                        </div>
                      ) : getAllProfile?.profileEmails?.length > 1 ||
                        emailIdFieldCount > 1 ? (
                        <div
                          className={styles.Right}
                          style={{ backgroundColor }}
                          onClick={() => setModalType(MODAL_TYPES.emailIdView)}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </div>
                      ) : (
                        <a
                          className={styles.Right}
                          href={`mailto:${
                            getAllProfile?.profileEmails?.[0]?.emailId ||
                            emailIdField?.emailId
                          }`}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </a>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Website */}
                  {showWebsite ? (
                    <div
                      className={styles.ContactAction}
                      onClick={() => {
                        handleClick(6);
                      }}
                    >
                      <div
                        className={styles.Left}
                        style={
                          mode === "dark"
                            ? {
                                backgroundColor: "#313131",
                              }
                            : {}
                        }
                      >
                        <WebSVG color={backgroundColor || "#313131"} />
                      </div>

                      {getAllProfile?.profileWebsites?.length > 1 ||
                      websiteFieldCount > 1 ? (
                        <div
                          className={styles.Middle}
                          onClick={() => setModalType(MODAL_TYPES.websiteView)}
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profileWebsites[0]?.website ||
                            (websiteField && websiteField?.website) ? (
                              getAllProfile?.profileWebsites[0]?.website ||
                              websiteField?.website
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your website
                              </span>
                            )}
                          </p>
                        </div>
                      ) : (
                        <a
                          className={styles.Middle}
                          href={`${
                            getAllProfile?.profileWebsites?.[0]?.website ||
                            websiteField?.website
                          }`}
                          target="_blank"
                          rel="noreferrer"
                          style={
                            mode === "dark"
                              ? {
                                  backgroundColor: "#313131",
                                }
                              : {}
                          }
                        >
                          <p
                            style={
                              mode === "dark"
                                ? {
                                    color: "white",
                                  }
                                : {}
                            }
                          >
                            {getAllProfile?.profileWebsites[0]?.website ||
                            (websiteField && websiteField?.website) ? (
                              getAllProfile?.profileWebsites[0]?.website ||
                              websiteField?.website
                            ) : (
                              <span style={{ opacity: 0.5 }}>
                                Enter your website
                              </span>
                            )}
                          </p>
                        </a>
                      )}
                      {edit ? (
                        <div
                          className={styles.Right}
                          onClick={() => setModalType(MODAL_TYPES.websiteEdit)}
                          style={{ backgroundColor }}
                        >
                          <Image
                            src={PencilView}
                            alt="Pencil"
                            width={35}
                            height={35}
                          />
                        </div>
                      ) : getAllProfile?.profileWebsites?.length > 1 ||
                        websiteFieldCount > 1 ? (
                        <div
                          className={styles.Right}
                          style={{ backgroundColor }}
                          onClick={() => setModalType(MODAL_TYPES.websiteView)}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </div>
                      ) : (
                        <a
                          className={styles.Right}
                          href={`${
                            getAllProfile?.profileWebsites?.[0]?.website ||
                            websiteField?.website
                          }`}
                          target="_blank"
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </a>
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  {/* Address */}
                  {showAddress ? (
                    <div
                      className={styles.ContactAction}
                      onClick={() => handleClick(7)}
                    >
                      <div
                        className={styles.Left}
                        style={
                          mode === "dark"
                            ? {
                                backgroundColor: "#313131",
                              }
                            : {}
                        }
                      >
                        <a
                          target="_blank"
                          href={`https://www.google.com/maps/search/?api=1&query=${
                            val2 || ""
                          }+${getAllProfile?.city || userProfile?.data?.city}+${
                            getAllProfile?.country || userProfile?.data?.country
                          }`}
                          rel="noreferrer"
                        >
                          <LocationSVG color={backgroundColor || "#313131"} />
                        </a>
                      </div>
                      <div
                        className={styles.Middle}
                        style={
                          mode === "dark"
                            ? {
                                backgroundColor: "#313131",
                              }
                            : {}
                        }
                        onClick={() => {
                          setModalType(MODAL_TYPES.addressView);
                          window.open(
                            `https://www.google.com/maps/search/?api=1&query=${
                              val2 || ""
                            }+${
                              getAllProfile?.city || userProfile?.data?.city
                            }+${
                              getAllProfile?.country ||
                              userProfile?.data?.country
                            }`
                          );
                        }}
                      >
                        <p
                          style={
                            mode === "dark"
                              ? {
                                  color: "white",
                                }
                              : {}
                          }
                        >
                          {getAllProfile?.city || userProfile?.data?.city ? (
                            `${
                              getAllProfile?.city || userProfile?.data?.city
                            }, ${
                              getAllProfile?.country ||
                              userProfile?.data?.country
                            }`
                          ) : (
                            <span style={{ opacity: 0.5 }}>
                              Enter city and country
                            </span>
                          )}
                        </p>
                      </div>

                      {edit ? (
                        <div
                          className={styles.Right}
                          onClick={() => setModalType(MODAL_TYPES.addressEdit)}
                          style={{ backgroundColor }}
                        >
                          <Image
                            src={PencilView}
                            alt="Pencil"
                            width={35}
                            height={35}
                          />
                        </div>
                      ) : (
                        <div
                          className={styles.Right}
                          style={{ backgroundColor }}
                          onClick={() => setModalType(MODAL_TYPES.addressView)}
                        >
                          <Image src={Arrow} alt="Arrow" />
                        </div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Social Media */}

            {modeId === 1 ? null : (
              <>
                {showSocialMediaSection ? (
                  <div className={styles.SocialInformation}>
                    <div className={styles.SocialEdit}>
                      <h2
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      >
                        Social Media
                      </h2>

                      {edit ? (
                        <div
                          className={styles.SocialEditImg}
                          onClick={() => setModalType(MODAL_TYPES.socialEdit)}
                        >
                          {mode === "dark" ? (
                            <Image
                              src={PencilView}
                              alt="PencilDark"
                              width={25}
                              height={25}
                            />
                          ) : (
                            <Image
                              src={PencilViewBlack}
                              alt="PencilWhite"
                              width={25}
                              height={25}
                            />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={styles.SocialInformationDetails}>
                      {/* Instagram */}
                      {edit || mediaLinks.instaLink !== "#" ? (
                        <a
                          className={styles.SocialAction}
                          href={mediaLinks.instaLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.instaLink !== "#" ? undefined : "none",
                          }}
                          onClick={() => {
                            handleClick(8);
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <InstaSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Instagram
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.instaName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter Instagram
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            href={mediaLinks.instaLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.instaLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                            className={styles.SocialRight}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                      {/* Twitter */}
                      {edit || mediaLinks.twitterLink !== "#" ? (
                        <a
                          onClick={() => {
                            handleClick(10);
                          }}
                          className={styles.SocialAction}
                          href={mediaLinks.twitterLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.twitterLink !== "#"
                                ? undefined
                                : "none",
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <TwitterSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Twitter
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.twitterName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter Twitter
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            className={styles.SocialRight}
                            href={mediaLinks.twitterLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.twitterLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                      {/* LinkedIn */}
                      {edit || mediaLinks.linkedInLink !== "#" ? (
                        <a
                          onClick={() => {
                            handleClick(9);
                          }}
                          className={styles.SocialAction}
                          href={mediaLinks.linkedInLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.linkedInLink !== "#"
                                ? undefined
                                : "none",
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <LinkdinSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Linkedin
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.linkedInName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter LinkedIn
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            className={styles.SocialRight}
                            href={mediaLinks.linkedInLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.linkedInLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                      {/* Youtube */}
                      {edit || mediaLinks.youtubeLink !== "#" ? (
                        <a
                          onClick={() => {
                            handleClick(12);
                          }}
                          className={styles.SocialAction}
                          href={mediaLinks.youtubeLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.youtubeLink !== "#"
                                ? undefined
                                : "none",
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <YotubesSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Youtube
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.youtubeName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter YouTube
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            className={styles.SocialRight}
                            href={mediaLinks.youtubeLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.youtubeLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                      {/* Facebook */}
                      {edit || mediaLinks.facebookLink !== "#" ? (
                        <a
                          onClick={() => {
                            handleClick(11);
                          }}
                          className={styles.SocialAction}
                          href={mediaLinks.facebookLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.facebookLink !== "#"
                                ? undefined
                                : "none",
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <FacebookSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Facebook
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.facebookName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter Facebook
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            className={styles.SocialRight}
                            href={mediaLinks.facebookLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.facebookLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                      {/* WhatsApp */}
                      {edit || mediaLinks.whatsAppLink !== "#" ? (
                        <a
                          className={styles.SocialAction}
                          href={`https://wa.me/+91${mediaLinks.whatsAppLink}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            pointerEvents:
                              mediaLinks.whatsAppLink !== "#"
                                ? undefined
                                : "none",
                          }}
                        >
                          <div
                            className={styles.SocialLeft}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <WhatsAppSVG color={backgroundColor || "#313131"} />
                          </div>
                          <div
                            className={styles.SocialMiddle}
                            style={
                              mode === "dark"
                                ? {
                                    backgroundColor: "#313131",
                                  }
                                : {}
                            }
                          >
                            <p
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              Whatsapp
                            </p>
                            <span
                              style={
                                mode === "dark"
                                  ? {
                                      color: "white",
                                    }
                                  : {}
                              }
                            >
                              {socialMediaNames.whatsAppName || (
                                <span
                                  style={
                                    mode === "dark"
                                      ? {
                                          opacity: 0.5,
                                          color: "white",
                                        }
                                      : {
                                          opacity: 0.5,
                                        }
                                  }
                                >
                                  Enter Whatsapp
                                </span>
                              )}
                            </span>
                          </div>
                          <a
                            className={styles.SocialRight}
                            href={`https://wa.me/+91${mediaLinks.whatsAppLink}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.whatsAppLink !== "#"
                                  ? undefined
                                  : "none",
                            }}
                          >
                            <Image src={Arrow} alt="Arrow" />
                          </a>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {/* Digital Payment */}

                {showDigitalPaymentSection ? (
                  <div className={styles.PaymentInformation}>
                    <div className={styles.PaymentInformationHead}>
                      <h2
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      >
                        Digital Payments
                      </h2>
                      {edit ? (
                        <div
                          className={styles.DigitalEditImg}
                          onClick={() => setModalType(MODAL_TYPES.digitalEdit)}
                        >
                          {mode === "dark" ? (
                            <Image
                              src={PencilView}
                              alt="PencilDark"
                              width={25}
                              height={25}
                            />
                          ) : (
                            <Image
                              src={PencilViewBlack}
                              alt="PencilWhite"
                              width={25}
                              height={25}
                            />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className={styles.PaymentInformationDetails}>
                      {edit || digitalPayments.gPay.digitalPaymentLink ? (
                        <div
                          className={styles.PaymentBg}
                          onClick={() => {
                            handlePaymentClick(
                              digitalPayments.gPay.digitalPaymentLink
                            );
                            handleClick(13);
                          }}
                        >
                          <Image src={Gpay} alt="GPay" />
                        </div>
                      ) : (
                        ""
                      )}
                      {edit || digitalPayments.phonePe.digitalPaymentLink ? (
                        <div
                          className={styles.PaymentBg}
                          onClick={() => {
                            handlePaymentClick(
                              digitalPayments.phonePe.digitalPaymentLink
                            );
                            handleClick(14);
                          }}
                        >
                          <Image src={PhonePe} alt="PhonePe" />
                        </div>
                      ) : (
                        ""
                      )}
                      {edit || digitalPayments.payTm.digitalPaymentLink ? (
                        <div
                          className={styles.PaymentBg}
                          onClick={() => {
                            handlePaymentClick(
                              digitalPayments.payTm.digitalPaymentLink
                            );
                            handleClick(15);
                          }}
                        >
                          <Image src={Paytm} alt="Paytm" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}

            {/* Footer */}
            <div
              className={styles.TemplateFooter}
              style={
                mode === "dark"
                  ? {
                      borderTop: "1px solid white",
                    }
                  : {}
              }
            >
              <h3
                style={
                  mode === "dark"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                Go Digital - Save Paper, Trees & Our Earth.
              </h3>
              <div className={styles.SubscribeText}>
                <Button href="/">Try Now</Button>
              </div>
              <p
                style={
                  mode === "dark"
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                Powered by bubbl cards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
