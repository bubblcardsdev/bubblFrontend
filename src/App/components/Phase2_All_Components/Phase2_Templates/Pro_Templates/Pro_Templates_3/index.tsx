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

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import SaveVCFContact from "src/App/helpers/saveContactHelper";
import { IDeviceBranding } from "src/App/services/createProfileApi";
import { PostTapDetails } from "src/App/services/tapApi";
import { MODAL_TYPES } from "types/modal";

import CropSection from "@/pages/createProfileStep2/imageCropModal";

import customCloseButtonImage from "../../../../../../../images/Phase_2_All_Assets/comman_assets/close.png";
import QrModal from "../../Components/QrModal/qrModal";
import SaveContactUnique from "../../Components/SaveContact_2_3/saveContact";
import useProfile from "../../hooks/useProfile";
import LogoWhite from "../../Images/assets_for_profile_templates/Common/logoWhite.png";
import PencilViewBlack from "../../Images/assets_for_profile_templates/Common/pencilIcon.svg";
import ProfileEditIcon from "../../Images/assets_for_profile_templates/Common/profileEditIcon.svg";
import ProfileEditIconBlack from "../../Images/assets_for_profile_templates/Common/profileEditIconBlack.svg";
import Gpay from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/google_pay-01.svg";
import Paytm from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytm-01.svg";
import PaytmWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytmWhite.svg";
import PhonePe from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepay-01.svg";
import PhonePeWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepeWhite.svg";
import UserImage from "./Components/banner/dummy.png";
import CallSVG from "./Components/icons/call_svg";
import FacebookSVG from "./Components/icons/facebook_svg";
import InstaSVG from "./Components/icons/insta_svg";
import LinkDinSVG from "./Components/icons/linkdin_svg";
import LocationSVG from "./Components/icons/location_svg";
import MailSVG from "./Components/icons/mail_svg";
import PencilView from "./Components/icons/pencilIcon_White.svg";
import PencilSVG from "./Components/icons/PencilSVG";
import PencilDesSVG from "./Components/icons/PencilSVGDes";
import ShareSVG from "./Components/icons/share_svg";
import TwitterSVG from "./Components/icons/twitter_svg";
import WatsSVG from "./Components/icons/wats_svg";
import WebSVG from "./Components/icons/web_svg";
import YoutubeSVG from "./Components/icons/youtube_svg";
import styles from "./style.module.css";

export default function ProTemplateTwo({
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
  // const { brandingBackGroundColor: backgroundColor } = deviceBranding;
  let backgroundColor: string | undefined;

  if (deviceBranding !== undefined) {
    backgroundColor = deviceBranding?.brandingBackGroundColor;
  } else {
    backgroundColor = "rgb(31, 135, 250)";
  }

  const [showPf, setShow] = useState(false);
  const [qrShow, setQrShow] = useState(false);
  const updateAddress = userProfile?.data?.address || getAllProfile?.address;
  let val2 = "";
  if (updateAddress) {
    const val = updateAddress.replace(/ /g, "+");
    val2 = val.replace(/,/g, "");
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
    socialMediaNames,
    websiteField,
    websiteFieldCount,
  } = useProfile({ getAllProfile, userProfile, userProfileDispatch });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleQrClose = () => setQrShow(false);
  const handleQrShow = () => setQrShow(true);
  const router = useRouter();
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
    getAllProfile?.profileWebsites.length !== undefined ||
    edit ||
    (websiteField && websiteField.website !== "");

  const { address, city, state, country, zipCode } =
    getAllProfile || userProfile?.data || {};
  const showAddress = edit || address || city || state || zipCode || country;

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
      {/* Body Starts Here */}
      <section
        className={styles.FreeTemplateThree}
        style={
          mode === "dark"
            ? {
                background: "black",
              }
            : {}
        }
      >
        <div className={styles.templateBanner}>
          <div className={styles.BannerImg}>
            <div className={styles.UserImg}>
              <div className={styles.B_Img}>
                {profileImage?.square !== null &&
                profileImage?.square !== undefined &&
                profileImage.square !== "" ? (
                  <Image
                    src={profileImage.square}
                    alt="UserImage"
                    loader={({ src }) => src}
                    width={400}
                    height={400}
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
                    style={
                      mode === "dark"
                        ? {
                            backgroundColor: "black",
                          }
                        : {}
                    }
                  >
                    {mode === "dark" ? (
                      <Image
                        src={ProfileEditIcon}
                        alt="PencilDark"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src={ProfileEditIconBlack}
                        alt="PencilWhite"
                        width={20}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className={styles.InfoSection}
            style={
              mode === "dark"
                ? {
                    background: "black",
                  }
                : {}
            }
          >
            <div className={styles.InfoSectionDetails}>
              <div
                className={styles.InfoHeader}
                style={
                  mode === "dark"
                    ? {
                        backgroundColor: backgroundColor,
                      }
                    : {}
                }
              >
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
                        style={
                          mode === "dark"
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      />
                      {userProfile.error.firstName && (
                        <div className={styles.error}>
                          {userProfile.error.firstName}
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
                          : userProfile?.data?.firstName || "Your Name"}
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
                          maxLength={28}
                          style={
                            mode === "dark"
                              ? {
                                  color: "white",
                                }
                              : {}
                          }
                        />
                        {userProfile.error.designation && (
                          <div className={styles.error}>
                            {userProfile.error.designation}
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
                            : userProfile?.data?.designation || "Designation"}
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

                  <div className={styles.Description}>
                    {editingFieldName === "shortDescription" ? (
                      <div className={styles.DesEdit}>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          type="text"
                          autoFocus
                          value={userProfile.data.shortDescription}
                          onChange={inputChangeHandlers.desc}
                          onBlur={inputBlurHandlers.desc}
                          className={styles.input_line_des}
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
                        {userProfile.error.shortDescription && (
                          <div className={styles.error}>
                            {userProfile.error.shortDescription}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={styles.DescriptionPara}>
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
                            : userProfile?.data?.shortDescription ||
                              "Description"}
                          &nbsp;
                          <div>
                            {edit ? (
                              <div
                                onClick={editHandlers.desc}
                                className={styles.PencilEditDes}
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
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={styles.LogoBrand}
                  style={
                    mode === "dark"
                      ? {
                          background: "#171717",
                        }
                      : {}
                  }
                >
                  <div className={styles.qrImg}>
                    {qrImage ? (
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
                  {edit ? (
                    <div className={styles.QrEdit} style={{ backgroundColor }}>
                      <Image
                        src={ProfileEditIcon}
                        alt="ProfileEditIcon"
                        width={12}
                        height={12}
                        onClick={handleQrShow}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className={styles.SaveContactSection}>
                <div className={styles.SaveContact}>
                  <SaveContactUnique
                    deviceUid={deviceUid}
                    black=""
                    saveTextBorderColor=""
                    saveTextFieldColor=""
                    saveTextBackColor=""
                    saveIconBorderColor=""
                    saveIconBackgroundColor={
                      backgroundColor || "rgb(31, 135, 250)"
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
                  <a
                    className={styles.Share}
                    onClick={handleShareIconClick}
                    style={{
                      borderColor: backgroundColor,
                    }}
                  >
                    <ShareSVG color={backgroundColor} />
                  </a>
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
                  <div className={styles.ContactIcons}>
                    {showPhoneNumber ? (
                      <div
                        className={styles.ContactInfo}
                        onClick={() => handleClick(4)}
                      >
                        <CallSVG
                          onClick={() =>
                            setModalType(MODAL_TYPES.mobileNumberView)
                          }
                          color={backgroundColor || "rgb(31, 135, 250)"}
                        />
                        {edit ? (
                          <span
                            onClick={() =>
                              setModalType(MODAL_TYPES.mobileNumberEdit)
                            }
                            className={styles.ContactNumber}
                            style={{ backgroundColor }}
                          >
                            <Image src={PencilView} alt="pencil" />
                          </span>
                        ) : (
                          <span
                            className={styles.ContactNumber}
                            onClick={() =>
                              setModalType(MODAL_TYPES.mobileNumberView)
                            }
                            style={{ backgroundColor }}
                          >
                            {phoneNumberCount}
                          </span>
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
                        <MailSVG
                          onClick={() => setModalType(MODAL_TYPES.emailIdView)}
                          color={backgroundColor || "rgb(31, 135, 250)"}
                        />
                        {edit ? (
                          <span
                            className={styles.ContactNumber}
                            style={{ backgroundColor }}
                            onClick={() =>
                              setModalType(MODAL_TYPES.emailIdEdit)
                            }
                          >
                            <Image src={PencilView} alt="pencil" />
                          </span>
                        ) : (
                          <span
                            className={styles.ContactNumber}
                            onClick={() =>
                              setModalType(MODAL_TYPES.emailIdView)
                            }
                            style={{ backgroundColor }}
                          >
                            {emailIdFieldCount}
                          </span>
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
                        <WebSVG
                          onClick={() => setModalType(MODAL_TYPES.websiteView)}
                          color={backgroundColor || "rgb(31, 135, 250)"}
                        />

                        {edit ? (
                          <span
                            className={styles.ContactNumber}
                            onClick={() =>
                              setModalType(MODAL_TYPES.websiteEdit)
                            }
                            style={{ backgroundColor }}
                          >
                            <Image src={PencilView} alt="pencil" />
                          </span>
                        ) : (
                          <span
                            className={styles.ContactNumber}
                            onClick={() =>
                              setModalType(MODAL_TYPES.websiteView)
                            }
                            style={{ backgroundColor }}
                          >
                            {websiteFieldCount}
                          </span>
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
                          target="_blank"
                          href={`https://www.google.com/maps/search/?api=1&query=${
                            val2 || ""
                          }+${getAllProfile?.city || userProfile?.data?.city}+${
                            getAllProfile?.country || userProfile?.data?.country
                          }`}
                          rel="noreferrer"
                        >
                          <LocationSVG
                            onClick={() =>
                              setModalType(MODAL_TYPES.addressView)
                            }
                            color={backgroundColor || "rgb(31, 135, 250)"}
                          />
                        </a>
                        {edit ? (
                          <span
                            className={styles.ContactNumber}
                            onClick={() =>
                              setModalType(MODAL_TYPES.addressEdit)
                            }
                            style={{ backgroundColor }}
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

              {modeId === 1 ? null : (
                <>
                  {showSocialMediaSection ? (
                    <div className={styles.socialSection}>
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
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.linkedInLink !== "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <LinkDinSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
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
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <FacebookSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
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
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <InstaSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
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
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.twitterLink !== "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <TwitterSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
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
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <WatsSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
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
                              backgroundColor,
                              pointerEvents:
                                mediaLinks.youtubeLink !== "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <YoutubeSVG
                              color={backgroundColor || "rgb(31, 135, 250)"}
                            />
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {showDigitalPaymentSection ? (
                    <div className={styles.DigitalPayment}>
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
                            onClick={() =>
                              setModalType(MODAL_TYPES.digitalEdit)
                            }
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
                                digitalPayments.gPay.digitalPaymentLink !== "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <Image src={Gpay} alt="gpay" />
                          </div>
                        ) : (
                          ""
                        )}
                        {edit || digitalPayments.phonePe.digitalPaymentLink ? (
                          <div
                            className={styles.SocailInfo}
                            onClick={() => {
                              handlePaymentClick(
                                digitalPayments.phonePe.digitalPaymentLink
                              );
                              handleClick(14);
                            }}
                            style={{
                              pointerEvents:
                                digitalPayments.phonePe.digitalPaymentLink !==
                                "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <Image
                              src={mode === "dark" ? PhonePeWhite : PhonePe}
                              alt="PhonePe"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        {edit || digitalPayments.payTm.digitalPaymentLink ? (
                          <div
                            className={styles.SocailInfo}
                            onClick={() => {
                              handlePaymentClick(
                                digitalPayments.payTm.digitalPaymentLink
                              );
                              handleClick(15);
                            }}
                            style={{
                              pointerEvents:
                                digitalPayments.payTm.digitalPaymentLink !== "#"
                                  ? undefined
                                  : "none",
                              ...(mode === "dark"
                                ? {
                                    background:
                                      "linear-gradient(90deg, #262626 0.5%, #3D3D3D 95.48%)",
                                  }
                                : {}),
                            }}
                          >
                            <Image
                              src={mode === "dark" ? PaytmWhite : Paytm}
                              alt="Paytm"
                            />
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
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
