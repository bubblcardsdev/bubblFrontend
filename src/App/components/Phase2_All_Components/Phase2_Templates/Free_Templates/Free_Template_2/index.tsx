/* eslint-disable no-nested-ternary */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
import { MODAL_TYPES } from "types/modal";
import CropSection from "@/pages/createProfileStep2/imageCropModal";
import CropSectionLogo from "@/pages/createProfileStep2/imageCropModalLogo";
import customCloseButtonImage from "../../../../../../../images/Phase_2_All_Assets/comman_assets/close.png";
import QrModal from "../../Components/QrModal/qrModal";
import SaveContactUnique from "../../Components/SaveContact_2_3/saveContact";
import useProfile from "../../hooks/useProfile";
import LogoBlue from "../../Images/assets_for_profile_templates/Common/logoBlue.svg";
import LogoWhite from "../../Images/assets_for_profile_templates/Common/logoWhite.png";
import PencilViewBlack from "../../Images/assets_for_profile_templates/Common/pencilIcon.svg";
import PencilView from "../../Images/assets_for_profile_templates/Common/pencilIcon_White.svg";
import ProfileEditIcon from "../../Images/assets_for_profile_templates/Common/profileEditIcon.svg";
import UserImg from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/dummy.svg";
import Gpay from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/google_pay-01.svg";
import Paytm from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytm-01.svg";
import PaytmWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/paytmWhite.svg";
import PhonePe from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepay-01.svg";
import PhonePeWhite from "../../Images/assets_for_profile_templates/FREE_TEMP_ASSETS/FREE_TEMP_1/ICONS/phonepeWhite.svg";
import Banner2 from "./Components/banner/01.png";
import Banner5 from "./Components/banner/Mask group.png";
import Banner4 from "./Components/banner/Mask group-1.png";
import Banner6 from "./Components/banner/Mask group-2.png";
import Banner1 from "./Components/banner/Mask group-3.png";
import Banner7 from "./Components/banner/Mask group-4.png";
import Banner3 from "./Components/banner/Mask group-5.png";
import CallSVG from "./Components/icons/call_svg";
import FacebookSVG from "./Components/icons/facebook_svg";
import InstaSVG from "./Components/icons/insta_svg";
import LinkDinSVG from "./Components/icons/linkdin_svg";
import LocationSVG from "./Components/icons/location_svg";
import MailSVG from "./Components/icons/mail_svg";
import PencilSVG from "./Components/icons/PencilSVG";
import ShareSVG from "./Components/icons/share_svg";
import TwitterSVG from "./Components/icons/twitter_svg";
import WatsSVG from "./Components/icons/wats_svg";
import WebSVG from "./Components/icons/web_svg";
import YoutubeSVG from "./Components/icons/youtube_svg";
import styles from "./style.module.css";
import ShareOutlined from "./Components/icons/share";
import QrOutlined from "./Components/icons/qr";
import VerticalDivider from "./Components/icons/verticalDivider";
import Caller_icon from "./Components/icons/caller_icon";
import Mail_icon from "./Components/icons/mail_icon";
import Instagram_icon from "./Components/icons/instagram_icon";
import Twitter_icon from "./Components/icons/twitter_icon";
import Linkedin_icon from "./Components/icons/linkdin_icon";
import Whatsapp from "./Components/icons/whatsapp_icon";
import Facebook from "./Components/icons/facebook_icon";
import Youtube from "./Components/icons/youtube_icon";
import RightArrow from "./Components/icons/rightArrow";
import Dribble from "./Components/icons/Dribble_icon";
import PhonePay from "./Components/icons/phonepay_icon";
import GooglePay from "./Components/icons/googlepay_icons";
import Paytm_icon from "./Components/icons/paytm_icon";
import { style } from "@mui/system";
import WebsiteIcon from "./Components/icons/website";
import MapsIcon from "./Components/icons/maps";
import ClientSection from "../../../Phase_2_HomePage/clientSection/clientSection";
import { getAccessToken } from "src/App/helpers/local-storage";
const bannerMap = {
  "#F53232": Banner1,
  "#0082E1": Banner2,
  "#635DD4": Banner3,
  "#4F4F4F": Banner4,
  "#FB794A": Banner5,
  "#1BA64C": Banner6,
  "#FBC529": Banner7,
};
const defaultBanner = Banner1;
export default function FreeTemplateTwo({
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
  userData,
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
  userData: any;
}) {
  const mode = deviceBranding?.darkMode ? "dark" : "light";
  var backgroundColor: string | undefined;
  const router = useRouter();

  if (deviceBranding !== undefined) {
    backgroundColor = deviceBranding?.brandingBackGroundColor;
  } else {
    backgroundColor = "#007AFF";
  }
  const [showPf, setShow] = useState(false);
  const [qrShow, setQrShow] = useState(false);
  const updateAddress = userProfile?.data?.address || getAllProfile?.address;
  let val2 = "";
  if (updateAddress) {
    // const val = updateAddress.replace(/ /g, "+");
    // console.log(val, "val");
    // val2 = updateAddress.replace(/,/g, "+");
    val2 = encodeURIComponent(updateAddress);
  }
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleQrClose = () => setQrShow(false);
  const handleQrShow = () => setQrShow(true);
  const [showPfLogo, setShowLogo] = useState(false);
  const handleCloseLogo = () => setShowLogo(false);
  const handleShowLogo = () => setShowLogo(true);
  const [userPlan, setUserPlan] = useState<null | IPlanDetail>(null);
  const token = getAccessToken();
  useEffect(() => {
    if (token) {
      const userPlanPromise = getUserPlan();
      if (userPlanPromise) {
        userPlanPromise
          .then((res) => res.data)
          .then((data) => {
            const { getPlans } = data;
            setUserPlan(getPlans);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [token]);
  const handleShareIconClick = () => {
    if (!userName) {
      toast.info("No unique name is configured");
      return;
    }
    const textToCopy = `https://bubbl.cards/profile/${userName}`;
    navigator.clipboard.writeText(textToCopy);
    toast.success(`Copied "${textToCopy}" to clipboard!`, { autoClose: 3000 });
  };
  //
  const handlePaymentClick = (paymentMethod: any) => {
    navigator.clipboard.writeText(paymentMethod);
    toast.success(`Copied ${paymentMethod} to clipboard!`, { autoClose: 3000 });
  };
  const handleClickEvent = async (clickId: any) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
  };
  const getPhoneNumbersWithCountryCode = (
    getAllProfile: any,
    userProfile: any
  ) => {
    try {
      if (getAllProfile?.profilePhoneNumbers) {
        return getAllProfile.profilePhoneNumbers;
      }
      if (userProfile?.data?.profilePhoneNumbers?.length) {
        return userProfile.data.profilePhoneNumbers.map(
          (phone: any, index: number) => ({
            ...phone,
            phoneNumber: `${phone?.countryCode || ""} ${
              phone?.phoneNumber || ""
            }`.trim(),
          })
        );
      }
      return [];
    } catch (error) {
      console.error("Error retrieving profile phone numbers:", error);
      return [];
    }
  };
  const handleClickSave = async (e: any) => {
    console.log(getAllProfile, "profile", userProfile);
    const firstName =
      getAllProfile?.firstName || (userProfile && userProfile?.data?.firstName);
    const vcfdata = await SaveVCFContact(
      firstName,
      getAllProfile?.lastName || (userProfile && userProfile?.data?.lastName),
      getAllProfile?.companyName ||
        (userProfile && userProfile?.data?.companyName),
      getAllProfile?.designation ||
        (userProfile && userProfile?.data?.designation),
      // getPhoneNumbersWithCountryCode(getAllProfile, userProfile),
      getAllProfile?.profilePhoneNumbers ||
        (userProfile && userProfile?.data?.profilePhoneNumbers),
      profileImage?.square,
      getAllProfile?.address || (userProfile && userProfile?.data?.address),
      getAllProfile?.profileSocialMediaLinks ||
        (userProfile && userProfile?.data?.profileSocialMediaLinks),
      getAllProfile?.profileWebsites ||
        (userProfile && userProfile?.data?.profileWebsites),
      getAllProfile?.profileEmails ||
        (userProfile && userProfile?.data?.profileEmails),
      getAllProfile?.id || (userProfile && userProfile?.data?.id),
      getAllProfile?.state || (userProfile && userProfile?.data?.state),
      getAllProfile?.city || (userProfile && userProfile?.data?.city),
      getAllProfile?.address || (userProfile && userProfile?.data?.address),
      getAllProfile?.zipCode || (userProfile && userProfile?.data?.zipCode),
      getAllProfile?.country || (userProfile && userProfile?.data?.country),
      deviceUid
    );

    const file = new Blob([vcfdata], { type: "text/vcard" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", `${firstName}.vcf`);
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    // setIsDownloading(false);
  };
  const showPhoneNumber =
    getAllProfile?.profilePhoneNumbers.length !== undefined ||
    edit ||
    (phoneNumberField && phoneNumberField.phoneNumber !== "");
  const showEmailIds =
    getAllProfile?.profileEmails.length !== undefined ||
    edit ||
    (emailIdField && emailIdField.emailId !== "");
  const showWebsite =
    getAllProfile?.profileWebsites.length !== undefined ||
    edit ||
    (websiteField && websiteField.website !== "");

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
  // if (getAllProfile?.profileDigitalPaymentLinks) {
  //   showDigitalPaymentSection = true;
  // }
  const bannerSrc =
    bannerMap[backgroundColor as keyof typeof bannerMap] || defaultBanner;
  const shouldHandleClick = router.pathname.startsWith("/createProfileStep3/");
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
        zipCode,
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
  const modal_types: any = {
    4: MODAL_TYPES.mobileNumberEdit,
    5: MODAL_TYPES.emailIdEdit,
    6: MODAL_TYPES.websiteEdit,
    7: MODAL_TYPES.addressEdit,
  };
  const onEdit = (e: any, type: number) => {
    e.stopPropagation();
    const modalType = modal_types[type];
    setModalType(modalType);
  };
  const onCallClick = () => {
    if (phoneNumberCount > 1) {
      setModalType(MODAL_TYPES.mobileNumberView);
    } else {
      window.open(
        `tel:${getAllProfile?.profilePhoneNumbers?.[0]?.countryCode || ""}${
          getAllProfile?.profilePhoneNumbers?.[0]?.phoneNumber ||
          phoneNumberField?.phoneNumber
        }`,
        "_self"
      );
    }
  };
  const onSocialClick = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank");
    }
  };
  const onMailClick = () => {
    if (emailIdFieldCount > 1) {
      setModalType(MODAL_TYPES.emailIdView);
    } else
      window.open(
        `mailto:${
          getAllProfile?.profileEmails?.[0]?.emailId || emailIdField?.emailId
        }`,
        "_self"
      );
  };

  // const onWebsiteClick = () => {
  //   if (websiteFieldCount > 1) {
  //     setModalType(MODAL_TYPES.websiteView);
  //   } else
  //     window.open(
  //      getAllProfile?.profileWebsites?.[0]?.website || websiteField?.website,
  //       "_blank"
  //     );
  // };
  const onWebsiteClick = () => {
    const website =
      getAllProfile?.profileWebsites?.[0]?.website || websiteField?.website;
    const formattedWebsite = website.startsWith("http")
      ? website
      : `https://${website}`;

    if (websiteFieldCount > 1) {
      setModalType(MODAL_TYPES.websiteView);
    } else {
      window.open(formattedWebsite, "_blank");
    }
  };

  const planId =
    userData?.BubblPlanManagements[0]?.planId || userPlan?.planId || 1;

  useEffect(() => {
    saveContactAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);
  console.log(getAllProfile, "profile", userProfile);
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
      {/* Upload Logo */}
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
        className={styles.FreeTemplateTwo}
        // style={mode === "dark" ? { background: "#262626" } : {}}
      >
        <div className={styles.UserImg}>
          <div className={styles.B_Img}>
            <Image
              className={styles.rupy_banner_img}
              src={profileImage?.square}
              alt="banner"
              height={600}
              width={1000}
            />
          </div>
          {/* <div className={styles.userProfile}>
                <div className={styles.ProfileImg}>
                  <div className={styles.respImg}>
                    {profileImage?.square && profileImage.square !== "" ? (
                      <Image src={profileImage?.square} loader={({ src }) => src} alt="UserImage"width={150}height={150}/>
                    ) : (
                      <Image src={UserImg} loader={({ src }) => src} alt="Dummy"width={1}height={1}/>
                    )}
                  </div>
                  {edit ? (
                    <div className={styles.userProfileEdit} style={{ backgroundColor }}>
                      <Image src={ProfileEditIcon} alt="ProfileEditIcon"width={18}height={18}onClick={handleShow}/>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div> */}
        </div>
        <div
          className={styles.Rupy_body_section}
          style={
            mode === "dark" ? { background: "black" } : { background: "#fff" }
          }
        >
          <div className={styles.rupy_logo_parent}>
            {/* User Profile Image */}
            <div>
              {profileImage?.square && profileImage.square !== "" ? (
                <Image
                  className={styles.rupy_logo_img}
                  src={profileImage?.square}
                  alt="UserImage"
                  width={150}
                  height={150}
                />
              ) : (
                <Image
                  className={styles.rupy_logo_img}
                  src={UserImg}
                  alt="Dummy"
                  width={120}
                  height={120}
                  style={{
                    borderColor: backgroundColor ?? "#B13DFF",
                    borderWidth: 3,
                    borderStyle: "solid",
                    borderRadius: 20,
                  }}
                />
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
          <div className={styles.ruby_body_parent}>
            <div className={styles.rupy_containerOne}>
              <div className={styles.rupy_name_container}>
                {/* UserName came to api  */}
                <div>
                  {editingFieldName === "firstName" ? (
                    <div className={styles.FirstNameEdit}>
                      <input
                        type="text"
                        value={userProfile?.data?.firstName || ""}
                        autoFocus
                        className={styles.input_line}
                        onChange={inputChangeHandlers.name}
                        onBlur={inputBlurHandlers.name}
                        maxLength={50}
                        style={mode === "dark" ? { color: "white" } : {}}
                      />
                      {userProfile?.error?.firstName && (
                        <div className={styles.error}>
                          {userProfile?.error?.firstName}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles.FirstName}>
                      <p
                        className={styles.FirstName_text}
                        style={mode === "dark" ? { color: "white" } : {}}
                      >
                        {getAllProfile?.firstName ||
                          userProfile?.data?.firstName ||
                          "Your Name"}
                      </p>
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
                      ) : null}
                    </div>
                  )}
                </div>
                <div>
                  {/* designation */}
                  <div className={styles.rupy_job_container}>
                    {editingFieldName === "designation" ? (
                      <div className={styles.RoleNameEdit}>
                        <input
                          type="text"
                          value={userProfile && userProfile?.data?.designation}
                          className={styles.input_line}
                          autoFocus
                          onChange={inputChangeHandlers.job}
                          onBlur={inputBlurHandlers.job}
                          maxLength={255}
                          style={mode === "dark" ? { color: "white" } : {}}
                        />
                        {userProfile?.error?.designation && (
                          <div className={styles.error}>
                            {userProfile?.error?.designation}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={styles.RoleName}>
                        <h3 style={mode === "dark" ? { color: "white" } : {}}>
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

                    {/* company name */}
                    {/* <div>
                      {editingFieldName === "companyName" ? (
                        <div className={styles.RoleNameEdit}>
                          <input
                            type="text"
                            value={
                              getAllProfile?.companyName ||
                              (userProfile && userProfile?.data?.companyName)
                            }
                            className={styles.input_line}
                            autoFocus
                            onChange={inputChangeHandlers.companyName}
                            onBlur={inputBlurHandlers.companyName}
                            maxLength={30}
                            style={mode === "dark" ? { color: "white" } : {}}
                          />
                          {userProfile?.error?.companyName && (
                            <div className={styles.error}>
                              {userProfile?.error?.companyName}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={styles.RoleName}>
                          <h3 style={mode === "dark" ? { color: "white" } : {}}>
                            {getAllProfile?.companyName ||
                              (userProfile && userProfile?.data?.companyName) ||
                              "Company Name"}
                          </h3>
                          {edit ? (
                            <div
                              onClick={editHandlers.companyName}
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
                    </div> */}
                  </div>
                </div>
              </div>
              <div
                className={styles.LogoBrand}
                style={mode === "dark" ? { backgroundColor: "#1E1E1E" } : {}}
              >
                {/* logo upload */}
                <div className={styles.qrImg}>
                  {planId === 2 && qrImage ? (
                    <img
                      src={qrImage}
                      alt="Logo"
                      className={styles.qrImgLogo}
                    />
                  ) : (
                    <Image
                      src={mode === "dark" ? LogoWhite : LogoBlue}
                      alt="Logo"
                      width={80}
                      height={22}
                    />
                  )}
                </div>

                {edit && planId === 2 ? (
                  <div className={styles.QrEdit} style={{ backgroundColor }}>
                    <Image
                      src={ProfileEditIcon}
                      alt="ProfileEditIcon"
                      width={12}
                      height={10}
                      onClick={handleShowLogo}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* contact save */}
            <div className={styles.ruby_share_container}>
              <button
                className={styles.rupy_save_contact_button}
                style={{ background: backgroundColor || "#007AFF" }}
                onClick={(e: any) => {
                  handleClickSave(e);
                  handleClickEvent(3);
                }}
              >
                Save Contact
              </button>
              <div
                style={{
                  backgroundColor: backgroundColor,
                  // mode === "dark"
                  //   ? {
                  //       background: "#3B3B3B",
                  //     }
                  //   : {
                  //       background: "rgba(235, 235, 235, 0.70)",
                  //     }
                }}
                className={styles.share_icon_btn}
                onClick={handleShareIconClick}
              >
                <ShareOutlined className={styles.share_icon} color="#ffffff" />
              </div>
              <div
                className={styles.share_icon_btn}
                style={{
                  backgroundColor: backgroundColor,
                }}
              >
                <div
                  className={styles.Qr}
                  style={{ backgroundColor: "transparent" }}
                >
                  <QrModal
                    saveIconBorderColor=""
                    saveIconBackgroundColor="transparent"
                    qrImageUrl=""
                    linkVal={userName}
                    qrComponent={
                      <QrOutlined
                        className={styles.share_icon}
                        color="#ffffff"
                      />
                    }
                  />
                </div>
              </div>
            </div>
            {/* description */}
            <div className={styles.descriptionContainer}>
              <div>
                <VerticalDivider color={backgroundColor || "#007AFF"} />
              </div>
              <div className={styles.shortDescription_text_container}>
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
                      maxLength={255}
                      style={
                        mode === "dark"
                          ? { color: "white" }
                          : { margin: "0 0 30px" }
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
                          ? { color: "white" }
                          : { width: "300px" }
                      }
                    >
                      {getAllProfile?.shortDescription
                        ? getAllProfile?.shortDescription
                        : (userProfile &&
                            userProfile?.data?.shortDescription) ||
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
            </div>
            <div>
              <div style={{ border: "", margin: "" }}>
                <h5
                  style={
                    mode === "dark"
                      ? { color: "white", margin: "0 0 25px 0 " }
                      : { margin: "0 0 25px 0" }
                  }
                >
                  Contact information
                </h5>
                <div className={styles.socialMediaShareParent}>
                  <div
                    style={
                      mode === "dark"
                        ? {
                            paddingRight: edit ? "10px" : "0",
                            background: "#3B3B3B",
                            color: "#fff",
                          }
                        : {
                            paddingRight: edit ? "10px" : "0",
                            background: "rgba(235, 235, 235, 0.70)",
                          }
                    }
                    className={styles.socialMediaShareParentContainer}
                    onClick={(e: any) => {
                      onCallClick();
                      handleClick(4);
                    }}
                  >
                    <div className={styles.socialMediaShareInnerContainer}>
                      <Caller_icon />
                      <div className={styles.shareInfoContentContainer}>
                        <p className={styles.shareInfoContent_contact}>
                          {getAllProfile?.profilePhoneNumbers?.[0]
                            ?.countryCode || phoneNumberField?.countryCode}
                          &nbsp;
                          {getAllProfile?.profilePhoneNumbers?.[0]
                            ?.phoneNumber || phoneNumberField?.phoneNumber}
                        </p>
                      </div>
                    </div>
                    {edit ? (
                      <Image
                        src={mode === "dark" ? PencilView : PencilViewBlack}
                        alt="PencilWhite"
                        width={25}
                        height={25}
                        className={styles.pointer}
                        onClick={(e: any) => onEdit(e, 4)}
                      />
                    ) : (
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          onClick={() => onCallClick()}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    )}
                  </div>
                  {/* Email */}
                  <div
                    style={
                      mode === "dark"
                        ? {
                            paddingRight: edit ? "10px" : "0",
                            background: "#3B3B3B",
                            color: "#fff",
                          }
                        : {
                            paddingRight: edit ? "10px" : "0",
                            background: "rgba(235, 235, 235, 0.70)",
                          }
                    }
                    className={styles.socialMediaShareParentContainer}
                    onClick={(e: any) => {
                      onMailClick();
                      handleClick(5);
                    }}
                  >
                    <div className={styles.socialMediaShareInnerContainer}>
                      <Mail_icon />
                      <div className={styles.shareInfoContentContainer}>
                        <p className={styles.shareInfoContent_mail}>
                          {getAllProfile?.profileEmails?.[0]?.emailId ||
                            emailIdField?.emailId}
                        </p>
                      </div>
                    </div>
                    {edit ? (
                      <Image
                        src={mode === "dark" ? PencilView : PencilViewBlack}
                        alt="PencilWhite"
                        width={25}
                        height={25}
                        className={styles.pointer}
                        onClick={(e: any) => onEdit(e, 5)}
                      />
                    ) : (
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          onClick={() => onMailClick()}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    )}
                  </div>
                  {/* Website */}
                  {(showWebsite || edit) && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              paddingRight: edit ? "10px" : "0",
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              paddingRight: edit ? "10px" : "0",
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={(e: any) => {
                        onWebsiteClick();
                        handleClick(6);
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <WebsiteIcon />
                        <div className={styles.shareInfoContentContainer}>
                          <p className={styles.shareInfoContent_mail}>
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
                      </div>
                      {edit ? (
                        <Image
                          src={mode === "dark" ? PencilView : PencilViewBlack}
                          alt="PencilWhite"
                          width={25}
                          height={25}
                          className={styles.pointer}
                          onClick={(e: any) => onEdit(e, 6)}
                        />
                      ) : (
                        <div
                          style={{
                            height: "100%",
                            width: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0 5px 5px 0px",
                            background: mode === "dark" ? "#292929" : "#E2E2E2",
                          }}
                        >
                          <RightArrow
                            className={styles.pointer}
                            onClick={(e: any) => {
                              handleClick(6);
                              onWebsiteClick();
                            }}
                            color={backgroundColor || "#007AFF"}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {/* Location */}

                  {(showAddress || edit) && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              paddingRight: edit ? "10px" : "0",
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              paddingRight: edit ? "10px" : "0",
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={(e: any) => {
                        handleClick(7);
                        setModalType(MODAL_TYPES.addressView);
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${
                            val2 || ""
                          }+${getAllProfile?.city || userProfile?.data?.city}+${
                            getAllProfile?.country || userProfile?.data?.country
                          }`,
                          "_blank"
                        );
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <MapsIcon />
                        <div className={styles.shareInfoContentContainer}>
                          <p className={styles.shareInfoContent_mail}>
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
                      </div>
                      {edit ? (
                        <Image
                          src={mode === "dark" ? PencilView : PencilViewBlack}
                          alt="PencilWhite"
                          width={25}
                          height={25}
                          className={styles.pointer}
                          onClick={(e: any) => onEdit(e, 7)}
                        />
                      ) : (
                        <div
                          style={{
                            height: "100%",
                            width: "35px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0 5px 5px 0px",
                            background: mode === "dark" ? "#292929" : "#E2E2E2",
                          }}
                        >
                          <RightArrow
                            className={styles.pointer}
                            onClick={(e: any) => {
                              handleClick(7);
                              setModalType(MODAL_TYPES.addressView);
                              window.open(
                                `https://www.google.com/maps/search/?api=1&query=${
                                  val2 || ""
                                }+${
                                  getAllProfile?.city || userProfile?.data?.city
                                }+${
                                  getAllProfile?.country ||
                                  userProfile?.data?.country
                                }`,
                                "_blank"
                              );
                            }}
                            color={backgroundColor || "#007AFF"}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {(showSocialMediaSection || edit) && (
                <div className={styles.socialLink_text_container}>
                  <div>
                    <h5 style={mode === "dark" ? { color: "white" } : {}}>
                      Social Links
                    </h5>
                  </div>
                  <div className={styles.socialLink_edit_container}>
                    {edit && (
                      <Image
                        src={mode === "dark" ? PencilView : PencilViewBlack}
                        alt="PencilWhite"
                        width={25}
                        height={25}
                        className={styles.pointer}
                        onClick={() => setModalType(MODAL_TYPES.socialEdit)}
                        style={{ border: "1px solid red" }}
                      />
                    )}
                  </div>
                </div>
              )}
              <div className={styles.socialMediaShareParent}>
                {mediaLinks?.instaLink && mediaLinks?.instaLink.length > 5 && (
                  <div
                    style={
                      mode === "dark"
                        ? {
                            background: "#3B3B3B",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(235, 235, 235, 0.70)",
                          }
                    }
                    className={styles.socialMediaShareParentContainer}
                    onClick={() => {
                      onSocialClick(mediaLinks?.instaLink);
                    }}
                  >
                    <div className={styles.socialMediaShareInnerContainer}>
                      <Instagram_icon />
                      <div className={styles.shareInfoContentContainer}>
                        <h2 className={styles.shareInfoTitle}>Instagram</h2>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "100%",
                        width: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0 5px 5px 0px",
                        background: mode === "dark" ? "#292929" : "#E2E2E2",
                      }}
                    >
                      <RightArrow
                        className={styles.pointer}
                        color={backgroundColor || "#007AFF"}
                      />
                    </div>
                  </div>
                )}
                {mediaLinks?.twitterLink && mediaLinks?.twitterLink.length > 5 && (
                  <div
                    style={
                      mode === "dark"
                        ? {
                            background: "#3B3B3B",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(235, 235, 235, 0.70)",
                          }
                    }
                    className={styles.socialMediaShareParentContainer}
                    onClick={() => {
                      onSocialClick(mediaLinks?.twitterLink);
                    }}
                  >
                    <div className={styles.socialMediaShareInnerContainer}>
                      <Twitter_icon />
                      <div className={styles.shareInfoContentContainer}>
                        <h2 className={styles.shareInfoTitle}>Twitter</h2>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "100%",
                        width: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0 5px 5px 0px",
                        background: mode === "dark" ? "#292929" : "#E2E2E2",
                      }}
                    >
                      <RightArrow
                        className={styles.pointer}
                        color={backgroundColor || "#007AFF"}
                      />
                    </div>
                  </div>
                )}
                {mediaLinks?.linkedInLink &&
                  mediaLinks?.linkedInLink.length > 5 && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={() => {
                        onSocialClick(mediaLinks?.linkedInLink);
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <Linkedin_icon />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>Linked in</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>{" "}
                    </div>
                  )}
                {mediaLinks?.youtubeLink && mediaLinks?.youtubeLink.length > 5 && (
                  <div
                    style={
                      mode === "dark"
                        ? {
                            background: "#3B3B3B",
                            color: "#fff",
                          }
                        : {
                            background: "rgba(235, 235, 235, 0.70)",
                          }
                    }
                    className={styles.socialMediaShareParentContainer}
                    onClick={() => {
                      onSocialClick(mediaLinks?.youtubeLink);
                    }}
                  >
                    <div className={styles.socialMediaShareInnerContainer}>
                      <Youtube />
                      <div className={styles.shareInfoContentContainer}>
                        <h2 className={styles.shareInfoTitle}>Youtube</h2>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "100%",
                        width: "35px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0 5px 5px 0px",
                        background: mode === "dark" ? "#292929" : "#E2E2E2",
                      }}
                    >
                      <RightArrow
                        className={styles.pointer}
                        color={backgroundColor || "#007AFF"}
                      />
                    </div>
                  </div>
                )}
                {mediaLinks?.facebookLink &&
                  mediaLinks?.facebookLink.length > 5 && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={() => {
                        onSocialClick(mediaLinks?.facebookLink);
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <Facebook />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>Facebook</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    </div>
                  )}
                {mediaLinks?.whatsAppLink &&
                  mediaLinks?.whatsAppLink.length > 5 && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={() => {
                        const whatsappURL = `https://wa.me/${mediaLinks.whatsAppLink}`;
                        onSocialClick(whatsappURL); // Optional if you still want to handle analytics or tracking
                        window.open(whatsappURL, "_blank"); // Open the WhatsApp link in a new tab
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <Whatsapp />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>WhatsApp</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    </div>
                  )}
              </div>
              {(showDigitalPaymentSection || edit) && (
                <div className={styles.socialLink_text_container}>
                  <div>
                    <h5 style={mode === "dark" ? { color: "white" } : {}}>
                      Digital Payments
                    </h5>
                  </div>
                  <div>
                    {edit && (
                      <Image
                        src={mode === "dark" ? PencilView : PencilViewBlack}
                        alt="PencilWhite"
                        width={25}
                        height={25}
                        className={styles.pointer}
                        onClick={() => setModalType(MODAL_TYPES.digitalEdit)}
                      />
                    )}
                  </div>
                </div>
              )}
              <div className={styles.socialMediaShareParent}>
                {digitalPayments.gPay.digitalPaymentLink &&
                  digitalPayments.gPay.digitalPaymentLink.length > 5 && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={() => {
                        handlePaymentClick(
                          digitalPayments.gPay.digitalPaymentLink
                        );
                        handleClick(13);
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <GooglePay />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>Google Pay</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    </div>
                  )}

                {digitalPayments.phonePe.digitalPaymentLink &&
                  digitalPayments.phonePe.digitalPaymentLink.length > 5 && (
                    <div
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                      className={styles.socialMediaShareParentContainer}
                      onClick={() => {
                        handlePaymentClick(
                          digitalPayments.phonePe.digitalPaymentLink
                        );
                        handleClick(14);
                      }}
                    >
                      <div className={styles.socialMediaShareInnerContainer}>
                        <PhonePay />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>Phone Pay</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    </div>
                  )}

                {digitalPayments.payTm.digitalPaymentLink &&
                  digitalPayments.payTm.digitalPaymentLink.length > 5 && (
                    <div
                      className={styles.socialMediaShareParentContainer}
                      style={
                        mode === "dark"
                          ? {
                              background: "#3B3B3B",
                              color: "#fff",
                            }
                          : {
                              background: "rgba(235, 235, 235, 0.70)",
                            }
                      }
                    >
                      <div
                        className={styles.socialMediaShareInnerContainer}
                        onClick={() => {
                          handlePaymentClick(
                            digitalPayments.payTm.digitalPaymentLink
                          );
                          handleClick(15);
                        }}
                      >
                        <Paytm_icon />
                        <div className={styles.shareInfoContentContainer}>
                          <h2 className={styles.shareInfoTitle}>Paytm</h2>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "100%",
                          width: "35px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "0 5px 5px 0px",
                          background: mode === "dark" ? "#292929" : "#E2E2E2",
                        }}
                      >
                        <RightArrow
                          className={styles.pointer}
                          color={backgroundColor || "#007AFF"}
                        />
                      </div>
                    </div>
                  )}
              </div>

              {/* Footer */}
              <div
                className={styles.TemplateFooter}
                style={mode === "dark" ? { borderTop: "1px solid white" } : {}}
              >
                <h3 style={mode === "dark" ? { color: "white" } : {}}>
                  Go Digital - Save Paper, Trees & Our Earth.
                </h3>
                <div className={styles.SubscribeText}>
                  <Button href="/">Try Now</Button>
                </div>
                <p style={mode === "dark" ? { color: "white" } : {}}>
                  Powered by bubbl cards.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
