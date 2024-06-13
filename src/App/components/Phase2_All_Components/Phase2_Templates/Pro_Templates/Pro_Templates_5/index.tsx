/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Dispatch, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import SaveVCFContact from "src/App/helpers/saveContactHelper";
import { IDeviceBranding } from "src/App/services/createProfileApi";
import {
  getUserPlan,
  IPlanDetail,
} from "src/App/services/myPlan/myPlanServices";
import { PostTapDetails } from "src/App/services/tapApi";
import { MODAL_TYPES, ModalT } from "types/modal";
// eslint-disable-next-line no-unused-vars
import { ProfileActionT, ProfileStateT } from "types/profile";

import CropSection from "@/pages/createProfileStep2/imageCropModal";
import CropSectionLogo from "@/pages/createProfileStep2/imageCropModalLogo";

import customCloseButtonImage from "../../../../../../../images/Phase_2_All_Assets/comman_assets/close.png";
import QrModal from "../../Components/QrModal/qrModal";
import SaveContactFive from "../../Components/SaveContact_5/saveContact";
import useProfile from "../../hooks/useProfile";
import LogoBlue from "../../Images/assets_for_profile_templates/Common/logoBlue.svg";
import PencilViewBlack from "../../Images/assets_for_profile_templates/Common/pencilIcon.svg";
import ProfileEditIcon from "../../Images/assets_for_profile_templates/Common/profileEditIcon.svg";
import ProfileEditIconBlack from "../../Images/assets_for_profile_templates/Common/profileEditIconBlack.svg";
import Gpay from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/google_pay-01.svg";
import PaytmWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytmWhite.svg";
import PhonePeWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepeWhite.svg";
import violet1 from "./Components/banner/1.png";
import violet2 from "./Components/banner/2.png";
import violet3 from "./Components/banner/3.png";
import green1 from "./Components/banner/4.png";
import green2 from "./Components/banner/5.png";
import green3 from "./Components/banner/6.png";
import liteBlue1 from "./Components/banner/7.png";
import liteBlue2 from "./Components/banner/8.png";
import liteBlue3 from "./Components/banner/9.png";
import darkBlue1 from "./Components/banner/10.png";
import darkBlue2 from "./Components/banner/11.png";
import darkBlue3 from "./Components/banner/12.png";
import orange1 from "./Components/banner/13.png";
import orange2 from "./Components/banner/14.png";
import orange3 from "./Components/banner/15.png";
import pink1 from "./Components/banner/16.png";
import pink2 from "./Components/banner/17.png";
import pink3 from "./Components/banner/18.png";
import liteGreen1 from "./Components/banner/19.png";
import liteGreen2 from "./Components/banner/20.png";
import liteGreen3 from "./Components/banner/21.png";
import UserImage from "./Components/banner/dummy.png";
import CallSVG from "./Components/icons/call_svg";
import Facebook from "./Components/icons/facebook.svg";
import instagram from "./Components/icons/instagram.svg";
import LinkDin from "./Components/icons/linked.svg";
import LocationSVG from "./Components/icons/location_svg";
import MailSVG from "./Components/icons/mail_svg";
import PencilView from "./Components/icons/pencilIcon_White.svg";
import share from "./Components/icons/shareIco.svg";
import twitter from "./Components/icons/twitter.svg";
import WebSVG from "./Components/icons/web_svg";
import whatsApp from "./Components/icons/whatsapp.svg";
import Youtube from "./Components/icons/youtube.svg";
import styles from "./style.module.css";

const colorObjectMap: Record<
  string,
  {
    bgColor: string;
    imgSrc: {
      one: StaticImageData;
      two: StaticImageData;
      three: StaticImageData;
    };
  }
> = {
  "#aa22ec": {
    bgColor: "linear-gradient(94deg, #DD38D8 0.21%, #4B57FF 99.89%)",
    imgSrc: {
      one: violet1,
      two: violet2,
      three: violet3,
    },
  },
  "#1494a1": {
    bgColor: "linear-gradient(109deg, #17E256 -1.98%, #1213FF 99.78%)",
    imgSrc: {
      one: green1,
      two: green2,
      three: green3,
    },
  },
  "#5b99cc": {
    bgColor: "linear-gradient(109deg, #23C6DA -1.98%, #E70D7F 99.78%)",
    imgSrc: {
      one: liteBlue1,
      two: liteBlue2,
      three: liteBlue3,
    },
  },
  "#177efa": {
    bgColor: "linear-gradient(109deg, #0AC0EE -1.98%, #1303F3 99.78%)",
    imgSrc: {
      one: darkBlue1,
      two: darkBlue2,
      three: darkBlue3,
    },
  },
  "#f78e38": {
    bgColor: "linear-gradient(109deg, #FEBD3C -1.98%, #FF1316 99.78%)",
    imgSrc: {
      one: orange1,
      two: orange2,
      three: orange3,
    },
  },
  "#fd8491": {
    bgColor: "linear-gradient(109deg, #F7B799 -1.98%, #E80F5B 99.78%)",
    imgSrc: {
      one: pink1,
      two: pink2,
      three: pink3,
    },
  },
  "#b5e872": {
    bgColor: "linear-gradient(109deg, #D7E65C -1.98%, #13F6F7 99.78%)",
    imgSrc: {
      one: liteGreen1,
      two: liteGreen2,
      three: liteGreen3,
    },
  },
};

export default function ProTemplateFive({
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
  setModalType: Dispatch<ModalT>;
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
    backgroundColor =
      "linear-gradient(94deg, rgb(221, 56, 216) 0.21%, rgb(75, 87, 255) 99.89%)";
  }
  const [showPf, setShow] = useState(false);
  const [qrShow, setQrShow] = useState(false);
  const updateAddress = userProfile?.data?.address || getAllProfile?.address;
  let val2 = "";
  if (updateAddress) {
    // const val = updateAddress.replace(/ /g, "+");
    val2 = updateAddress.replace(/,/g, "+");
  }
  const {
    digitalPayments,
    editHandlers,
    editingFieldName,
    emailIdField,
    emailIdFieldCount,
    inputBlurHandlers,
    inputChangeHandlers,
    mediaLinks,
    phoneNumberField,
    phoneNumberCount,
    // eslint-disable-next-line no-unused-vars
    socialMediaNames,
    websiteField,
    websiteFieldCount,
  } = useProfile({ userProfile, userProfileDispatch, getAllProfile });
  const router = useRouter();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleQrClose = () => setQrShow(false);
  const handleQrShow = () => setQrShow(true);
  const [showPfLogo, setShowLogo] = useState(false);
  const handleCloseLogo = () => setShowLogo(false);
  const handleShowLogo = () => setShowLogo(true);
  const [userPlan, setUserPlan] = useState<null | IPlanDetail>(null);
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
    (phoneNumberField && phoneNumberField.phoneNumber !== "");
  const showEmailIds =
    getAllProfile?.profileEmails?.length !== undefined ||
    edit ||
    (emailIdField && emailIdField.emailId !== "");
  const showWebsite =
    getAllProfile?.profileWebsites?.length !== undefined ||
    edit ||
    (websiteField && websiteField.website !== "");

  const { address, city, state, country, zipCode } = userProfile?.data || {};

  const showAddress =
    getAllProfile || edit || address || city || state || zipCode || country;

  // Handling Full preview and hide section
  let showContactSection = [
    showPhoneNumber,
    showEmailIds,
    showWebsite,
    showAddress,
  ].some((show) => show);

  if (getAllProfile?.profilePhoneNumbers.length > 0) {
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
  // if (getAllProfile?.profileDigitalPaymentLinks.length > 0) {
  //   showDigitalPaymentSection = true;
  // }

  const templateObj = colorObjectMap[backgroundColor || "#FFFFFF"];
  const { bgColor, imgSrc } = templateObj ?? {
    bgColor: undefined,
    imgSrc: {
      one: {
        src: "",
      },
      two: {
        src: "",
      },
      three: {
        src: "",
      },
    },
  };
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
      <section className={styles.FreeTemplateFive}>
        <div
          className={styles.templateBanner1}
          style={{
            backgroundImage: `url(${imgSrc.one.src})`,
          }}
        >
          <div
            className={styles.templateBanner2}
            style={{
              backgroundImage: `url(${imgSrc.two.src})`,
            }}
          >
            <div
              className={styles.templateBanner3}
              style={{
                backgroundImage: `url(${imgSrc.three.src})`,
              }}
            >
              <div className={styles.BannerImg}>
                <div className={styles.UserImg}>
                  <div className={styles.B_Img}>
                    {profileImage?.square && profileImage.square !== "" ? (
                      <Image
                        src={profileImage?.square}
                        alt="UserImage"
                        width={400}
                        height={400}
                        loader={({ src }) => src}
                      />
                    ) : (
                      <Image
                        src={UserImage}
                        alt="Dummy"
                        width={400}
                        height={400}
                        loader={({ src }) => src}
                      />
                    )}
                  </div>
                  {edit ? (
                    <div className={styles.userProfile}>
                      <div
                        className={styles.userProfileEdit}
                        onClick={handleShow}
                      >
                        <Image
                          src={ProfileEditIconBlack}
                          alt="PencilWhite"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles.InfoSectionDetails}>
                <div className={styles.TopInfoSection}>
                  <div className={styles.BoxRadius}>
                    <div className={styles.TopInfoSectionDetails}>
                      <div className={styles.InfoHeader}>
                        <div className={styles.Information}>
                          {editingFieldName === "firstName" ? (
                            <div className={styles.FirstNameEdit}>
                              <input
                                type="text"
                                value={userProfile.data.firstName}
                                autoFocus
                                className={styles.input_line}
                                onChange={inputChangeHandlers.name}
                                onBlur={inputBlurHandlers.name}
                                maxLength={32}
                              />
                              {userProfile.error.firstName && (
                                <div className={styles.error}>
                                  {userProfile.error.firstName}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className={styles.FirstName}>
                              <h2>
                                {getAllProfile?.firstName
                                  ? getAllProfile?.firstName
                                  : userProfile?.data.firstName || "Your Name"}
                              </h2>
                              {edit ? (
                                <div
                                  onClick={editHandlers.name}
                                  className={styles.PencilEdit}
                                >
                                  <Image
                                    src={PencilView}
                                    alt="PencilDark"
                                    width={25}
                                    height={25}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                          <div>
                            {editingFieldName === "designation" ? (
                              <div className={styles.RoleNameEdit}>
                                <input
                                  type="text"
                                  value={userProfile.data.designation}
                                  className={styles.input_line}
                                  autoFocus
                                  onChange={inputChangeHandlers.job}
                                  onBlur={inputBlurHandlers.job}
                                  maxLength={35}
                                />
                                {userProfile.error.designation && (
                                  <div className={styles.error}>
                                    {userProfile.error.designation}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className={styles.RoleName}>
                                <h3>
                                  {getAllProfile?.designation
                                    ? getAllProfile?.designation
                                    : userProfile?.data?.designation ||
                                      "Designation"}
                                </h3>
                                {edit ? (
                                  <div
                                    onClick={editHandlers.job}
                                    className={styles.PencilEdit}
                                  >
                                    <Image
                                      src={PencilView}
                                      alt="PencilDark"
                                      width={25}
                                      height={25}
                                    />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.LogoBrand}>
                          <div className={styles.qrImg}>
                            {userPlan?.planId !== 1 && qrImage ? (
                              <img
                                src={qrImage}
                                alt="Logo"
                                className={styles.qrImgLogo}
                              />
                            ) : (
                              <Image
                                src={mode === "dark" ? LogoBlue : LogoBlue}
                                alt="Logo"
                                width={79}
                                height={19}
                              />
                            )}
                          </div>
                          {edit && userPlan?.planId !== 1 ? (
                            <div
                              className={styles.QrEdit}
                              style={{
                                background: bgColor,
                              }}
                            >
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
                      <div className={styles.Description}>
                        {editingFieldName === "shortDescription" ? (
                          <div className={styles.DesEdit}>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              type="text"
                              autoFocus
                              value={userProfile.data.shortDescription}
                              onChange={inputChangeHandlers.desc}
                              onBlur={inputBlurHandlers.desc}
                              className={styles.input_line_des}
                              maxLength={200}
                            />
                            {userProfile.error.shortDescription && (
                              <div className={styles.error}>
                                {userProfile.error.shortDescription}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className={styles.DescriptionPara}>
                            <p>
                              {getAllProfile?.shortDescription
                                ? getAllProfile?.shortDescription
                                : userProfile?.data?.shortDescription ||
                                  "Description"}
                              &nbsp;
                              {edit ? (
                                <div
                                  onClick={editHandlers.desc}
                                  className={styles.PencilEditDes}
                                >
                                  <Image
                                    src={PencilView}
                                    alt="PencilDark"
                                    width={25}
                                    height={25}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className={styles.SaveContactSection}>
                        <SaveContactFive
                          deviceUid={deviceUid}
                          black=""
                          saveTextBorderColor=""
                          saveTextFieldColor=""
                          saveTextBackColor=""
                          saveIconBorderColor=""
                          saveIconBackgroundColor={bgColor || bgColor}
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
                            (userProfile &&
                              userProfile?.data?.profilePhoneNumbers)
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

                        <a
                          className={styles.Share}
                          onClick={handleShareIconClick}
                          style={{
                            background: bgColor,
                          }}
                        >
                          <Image src={share} alt="share" />
                        </a>

                        <div
                          className={styles.Qr}
                          style={{
                            background: bgColor,
                          }}
                        >
                          <QrModal
                            saveIconBorderColor=""
                            saveIconBackgroundColor=""
                            qrImageUrl=""
                            linkVal={userName}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  {showContactSection ? (
                    <div className={styles.ContactInformation}>
                      <h2>Contact Information</h2>
                      <div className={styles.ContactIcons}>
                        {showPhoneNumber ? (
                          <div
                            className={styles.ContactInfo}
                            onClick={() => handleClick(4)}
                          >
                            {getAllProfile?.profilePhoneNumbers?.length > 1 ||
                            phoneNumberCount > 1 ? (
                              <CallSVG
                                onClick={() =>
                                  setModalType(MODAL_TYPES.mobileNumberView)
                                }
                                color="white"
                              />
                            ) : (
                              <a
                                href={`tel:${
                                  getAllProfile?.profilePhoneNumbers?.[0]
                                    ?.phoneNumber ||
                                  phoneNumberField?.phoneNumber
                                }`}
                              >
                                <CallSVG onClick={() => {}} color="white" />
                              </a>
                            )}
                            {edit ? (
                              <span
                                onClick={() =>
                                  setModalType(MODAL_TYPES.mobileNumberEdit)
                                }
                                style={{
                                  background: backgroundColor,
                                }}
                                className={styles.ContactNumber}
                              >
                                <Image src={PencilView} alt="pencil" />
                              </span>
                            ) : getAllProfile?.profilePhoneNumbers?.length >
                                1 || phoneNumberCount > 1 ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: bgColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.mobileNumberView)
                                }
                              >
                                {phoneNumberCount}
                              </span>
                            ) : (
                              <a
                                className={styles.ContactNumber}
                                href={`tel:${
                                  getAllProfile?.profilePhoneNumbers?.[0]
                                    ?.phoneNumber ||
                                  phoneNumberField?.phoneNumber
                                }`}
                                style={{
                                  background: bgColor,
                                }}
                              >
                                {phoneNumberCount}
                              </a>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        {showEmailIds ? (
                          <div
                            className={styles.ContactInfo}
                            onClick={() => handleClick(5)}
                          >
                            {getAllProfile?.profileEmails?.length > 1 ||
                            emailIdFieldCount > 1 ? (
                              <MailSVG
                                color="white"
                                onClick={() =>
                                  setModalType(MODAL_TYPES.emailIdView)
                                }
                              />
                            ) : (
                              <a
                                href={`mailto:${
                                  getAllProfile?.profileEmails?.[0]?.emailId ||
                                  emailIdField?.emailId
                                }`}
                              >
                                <MailSVG color="white" onClick={() => {}} />
                              </a>
                            )}
                            {edit ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: backgroundColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.emailIdEdit)
                                }
                              >
                                <Image src={PencilView} alt="pencil" />
                              </span>
                            ) : getAllProfile?.profileEmails?.length > 1 ||
                              emailIdFieldCount > 1 ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: bgColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.emailIdView)
                                }
                              >
                                {emailIdFieldCount}
                              </span>
                            ) : (
                              <a
                                className={styles.ContactNumber}
                                href={`mailto:${
                                  getAllProfile?.profileEmails?.[0]?.emailId ||
                                  emailIdField?.emailId
                                }`}
                                style={{
                                  background: bgColor,
                                }}
                              >
                                {emailIdFieldCount}
                              </a>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        {showWebsite ? (
                          <div
                            className={styles.ContactInfo}
                            onClick={() => {
                              handleClick(6);
                            }}
                          >
                            {getAllProfile?.profileWebsites?.length > 1 ||
                            websiteFieldCount > 1 ? (
                              <WebSVG
                                color="white"
                                onClick={() =>
                                  setModalType(MODAL_TYPES.websiteView)
                                }
                              />
                            ) : (
                              <a
                                href={`${
                                  getAllProfile?.profileWebsites?.[0]
                                    ?.website || websiteField?.website
                                }`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <WebSVG color="white" onClick={() => {}} />
                              </a>
                            )}

                            {edit ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: bgColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.websiteEdit)
                                }
                              >
                                <Image src={PencilView} alt="pencil" />
                              </span>
                            ) : getAllProfile?.profileWebsites?.length > 1 ||
                              websiteFieldCount > 1 ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: bgColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.websiteView)
                                }
                              >
                                {websiteFieldCount}
                              </span>
                            ) : (
                              <a
                                className={styles.ContactNumber}
                                href={`${
                                  getAllProfile?.profileWebsites?.[0]
                                    ?.website || websiteField?.website
                                }`}
                                target="_blank"
                                style={{
                                  background: bgColor,
                                }}
                                rel="noreferrer"
                              >
                                {websiteFieldCount}
                              </a>
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        {showAddress ? (
                          <div
                            className={styles.ContactInfo}
                            onClick={() => handleClick(7)}
                          >
                            <a
                            // target="_blank"
                            // href={`https://www.google.com/maps/search/?api=1&query=${
                            //   val2 || ""
                            // }+${
                            //   getAllProfile?.city || userProfile?.data?.city
                            // }+${
                            //   getAllProfile?.country ||
                            //   userProfile?.data?.country
                            // }`}
                            // rel="noreferrer"
                            >
                              <LocationSVG
                                color="white"
                                onClick={() => {
                                  setModalType(MODAL_TYPES.addressView);
                                  window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${
                                      val2 || ""
                                    }+${
                                      getAllProfile?.city ||
                                      userProfile?.data?.city
                                    }+${
                                      getAllProfile?.country ||
                                      userProfile?.data?.country
                                    }`
                                  );
                                }}
                              />
                            </a>
                            {edit ? (
                              <span
                                className={styles.ContactNumber}
                                style={{
                                  background: bgColor,
                                }}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.addressEdit)
                                }
                              >
                                <Image src={PencilView} alt="pencil" />
                              </span>
                            ) : (
                              ""
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
                        <div className={styles.socialSection}>
                          <div className={styles.SocialEdit}>
                            <h2>Social Media</h2>
                            {edit ? (
                              <div
                                className={styles.SocialEditImg}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.socialEdit)
                                }
                              >
                                <Image
                                  src={PencilView}
                                  alt="PencilDark"
                                  width={25}
                                  height={25}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className={styles.SocialMediaIcons}>
                            {edit || mediaLinks.linkedInLink !== "#" ? (
                              <a
                                onClick={() => {
                                  handleClick(9);
                                }}
                                className={styles.SocailInfo}
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
                                <Image src={LinkDin} alt="linkDin" />
                              </a>
                            ) : (
                              ""
                            )}
                            {edit || mediaLinks.facebookLink !== "#" ? (
                              <a
                                onClick={() => {
                                  handleClick(11);
                                }}
                                className={styles.SocailInfo}
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
                                <Image src={Facebook} alt="facebook" />
                              </a>
                            ) : (
                              ""
                            )}
                            {edit || mediaLinks.instaLink !== "#" ? (
                              <a
                                onClick={() => {
                                  handleClick(8);
                                }}
                                className={styles.SocailInfo}
                                href={mediaLinks.instaLink}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  pointerEvents:
                                    mediaLinks.instaLink !== "#"
                                      ? undefined
                                      : "none",
                                }}
                              >
                                <Image src={instagram} alt="instagram" />
                              </a>
                            ) : (
                              ""
                            )}
                            {edit || mediaLinks.twitterLink !== "#" ? (
                              <a
                                onClick={() => {
                                  handleClick(10);
                                }}
                                className={styles.SocailInfo}
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
                                <Image src={twitter} alt="twitter" />
                              </a>
                            ) : (
                              ""
                            )}
                            {edit || mediaLinks.whatsAppLink !== "#" ? (
                              <a
                                className={styles.SocailInfo}
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
                                <Image src={whatsApp} alt="whatsapp" />
                              </a>
                            ) : (
                              ""
                            )}
                            {edit || mediaLinks.youtubeLink !== "#" ? (
                              <a
                                onClick={() => {
                                  handleClick(12);
                                }}
                                className={styles.SocailInfo}
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
                                <Image src={Youtube} alt="youtube" />
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
                        <div className={styles.DigitalPayment}>
                          <div className={styles.PaymentInformationHead}>
                            <h2>Digital Payments</h2>
                            {edit ? (
                              <div
                                className={styles.DigitalEditImg}
                                onClick={() =>
                                  setModalType(MODAL_TYPES.digitalEdit)
                                }
                              >
                                <Image
                                  src={PencilView}
                                  alt="PencilDark"
                                  width={25}
                                  height={25}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className={styles.DigitalMediaIcons}>
                            {edit || digitalPayments.gPay.digitalPaymentLink ? (
                              <div
                                className={styles.DigitalInfo}
                                onClick={() => {
                                  handlePaymentClick(
                                    digitalPayments.gPay.digitalPaymentLink
                                  );
                                  handleClick(13);
                                }}
                                style={{
                                  pointerEvents:
                                    digitalPayments.gPay.digitalPaymentLink !==
                                    "#"
                                      ? undefined
                                      : "none",
                                }}
                              >
                                <Image src={Gpay} alt="gpay" />
                              </div>
                            ) : (
                              ""
                            )}
                            {edit ||
                            digitalPayments.phonePe.digitalPaymentLink ? (
                              <div
                                className={styles.DigitalInfo}
                                onClick={() => {
                                  handlePaymentClick(
                                    digitalPayments.phonePe.digitalPaymentLink
                                  );
                                  handleClick(14);
                                }}
                                style={{
                                  pointerEvents:
                                    digitalPayments.phonePe
                                      .digitalPaymentLink !== "#"
                                      ? undefined
                                      : "none",
                                }}
                              >
                                <Image src={PhonePeWhite} alt="PhonePe" />
                              </div>
                            ) : (
                              ""
                            )}
                            {edit ||
                            digitalPayments.payTm.digitalPaymentLink ? (
                              <div
                                className={styles.DigitalInfo}
                                onClick={() => {
                                  handlePaymentClick(
                                    digitalPayments.payTm.digitalPaymentLink
                                  );
                                  handleClick(15);
                                }}
                                style={{
                                  pointerEvents:
                                    digitalPayments.payTm.digitalPaymentLink !==
                                    "#"
                                      ? undefined
                                      : "none",
                                }}
                              >
                                <Image src={PaytmWhite} alt="Paytm" />
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
                </div>
              </div>
              {/* Footer */}
              <div className={styles.TemplateFooter}>
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
              <p> &nbsp;</p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
