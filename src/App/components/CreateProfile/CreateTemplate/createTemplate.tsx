/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-lonely-if */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-const-assign */
/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/exhaustive-deps */
import "react-toastify/dist/ReactToastify.css";

import { AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";

// Api
import { switchTemplate } from "src/App/services/allTemplateApi";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import { chooseTemplate } from "src/App/services/templateApi";
import { userProfile } from "src/App/services/userProfile/userProfileService";
import {
  EmailDeleteApi,
  MobileDeleteApi,
  WebSiteDeleteApi,
} from "src/App/services/deleteApis";
import {
  BrandingLogoPostApi,
  ProfileImagePostApi,
  qrImageUploadApi,
} from "src/App/services/upload";
import { CreateProfilePostApi } from "../../../services/api";
import {
  deleteBrandingImage,
  deleteProfileImage,
  deleteQRImage,
  getProfileId,
  mobileDelete,
} from "../../../services/createProfileApi";

// Components Imported
import ArrowIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/call_to_action-arrow.svg";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import Footer from "../../ui/Footer/footer";
import NavBar from "../../ui/NavBar/_navbar";

import AddContactDetails from "./AddContacts/addContacts";
import BrandingTemplate from "./Branding/brandingTemplate";
import TemplateActiveTab from "./CreateTemplateActive/createTemplateActive";
import DigitalPayments from "./digitalPayments/digitalPayments";
import EditTemplateHeader from "./EditHeaderBanner/editHeaderBanner";
import EditTemplateActiveTab from "./EditTemplateActive/editTemplateActive";
import PreviewSection from "./PreviewSection/previewSection";
import ProfileInformation from "./ProfileInformation/profileInformation";
import SocialMedia from "./SocialMedia/socialMediaLinks";
import styles from "./template.module.css";
import Template from "./Template/template";
import TemplateHeader from "./TemplateHeader.tsx/templateHeader";

const CreateTemplate: React.FC = () => {
  const router = useRouter();
  const deviceId: any = router.query.profileId;
  const deviceLinkId: any = router.query?.nameId;
  const editDeviceId: any = router?.query?.deviceId;
  const tempSwitchId: any = router?.query?.accId;
  const tempSelectId: any = router?.query?.deviceVal;

  const apiId = deviceLinkId === undefined ? editDeviceId : deviceLinkId;
  const isEdit: any = router.query?.isEdit;
  const modeId: any = router?.query?.modeId;
  const inputRefs: any = useRef({});
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    companyName: "",
    companyAddress: "",
    shortDesc: "",
  });

  const [users, setUsers] = useState<any[]>([]);
  const [website, setWebSite] = useState<any>([]);
  const [fontStyle, setFontStyle] = useState<any>("");
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  },[]);

  let [profileErrors, setProfileErrors] = useState({
    firstName: "",
    designation: "",
    // shortDesc: "",
  });

  let [nameError, setNameError] = useState("");

  const [email, setEmail] = useState<any>([]);

  const [contact, setContact] = useState({
    address: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
  });

  const [mediaArray, setMediaArray] = useState<any[]>([]);
  const [emailError, setEmailError] = useState("");

  const [phoneExceedError, setPhoneExceedError] = useState<string>("");
  const [phoneNullCheck, setPhoneNullCheck] = useState("");
  const [emailNullCheck, setEmailNullCheck] = useState("");
  // const [websiteNullCheck, setWebsiteNullCheck] = useState("");
  const [zipNumberError, setZipNumberError] = useState("");
  const [mediValidateErr, setMediaValidateErr] = useState("");
  const [FbErr, setFbErr] = useState("");
  const [linkedInErr, setLinkedInErr] = useState("");
  const [twitterErr, setTwitterErr] = useState("");
  const [youtubeErr, setYoutubeErr] = useState("");

  const [zipExceedError, setZipExceedError] = useState("");

  const [mobileEnable, setMobileEnable] = useState(true);
  const [emailEnable, setEmailEnable] = useState(true);
  const [websiteEnable, setWebsiteEnable] = useState(true);
  const [socialMediaEnable, setSocialMediaEnable] = useState(true);
  const [digitalEnable, setDigitalEnable] = useState(true);
  const [qrEnable, setQrEnable] = useState(true);

  const [profileImg, setProfileImg] = useState<{
    square: string;
    rectangle: string;
  } | null>(null);
  const [qrImageUrl, setQrImageUrl] = useState(null);
  const [qrImg, setQrImg] = useState(null);
  const [payments, setPayments] = useState<any>([]);
  const [templateId, setTemplateId] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [backColor, setBackgroundColor] = useState("");
  const [secondaryColor, setAccentColor] = useState("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [selectFile, setSelectedFile] = useState<any>("");
  const [dragFile, setDragFile] = useState("");

  const [logoUrl, setLogoUrl] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [responseVal, setResponseVal] = useState<any>("");
  const [webSiteError, setWebSiteError] = useState<any>("");
  const [userSubscriptionType, setUserSubscriptionType] = useState();
  const [delPhone, setDelPhone] = useState<any>([]);
  const [emailDelRest, setEmailDel] = useState<any[]>([]);
  const [webSiteDel, setWebSiteDel] = useState<any[]>([]);
  const [profileImage, setProfileImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveEnable, setSaveEnable] = useState(false);
  const [mediaError, setMediaError] = useState<any>("");

  const [plantId, setPlanId] = useState();
  const [dropValue, setDropValue] = useState("Personal");
  const [emailDropValue, setEmailDropValue] = useState("Personal");
  const [webDropValue, setWebDropValue] = useState("Personal");
  // state for Crop
  const editorRef = useRef<AvatarEditor>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>("");
  const [croppedImage, setCroppedImage] = useState("");
  const [zoom, setZoom] = React.useState(1);
  const [deviceUid, setDeviceUid] = useState("");

  const socialMediaToggle = (e: any, id: any) => {
    let socialArray = mediaArray;
    const socialFilter = socialArray.filter(
      (val: any) => val.profileSocialMediaId === id
    );
    if (socialFilter.length === 0) {
      socialArray.push({
        socialMediaName: "",
        profileSocialMediaId: id,
        profileSocialMediaLinkId: null,
        activeStatus: e.target.checked,
        enableStatus: true,
      });
    }
    const updatedSocial = socialArray.find(
      (social) => social.profileSocialMediaId === id
    );
    updatedSocial.activeStatus = e.target.checked;
    // Use the spread operator to create a new array with the updated element
    const newSocialArray = [...socialArray];
    setMediaArray(newSocialArray);
  };

  const paymentToggleFunc = (e: any, id: any) => {
    let socialArray = payments;
    const socialFilter = socialArray.filter(
      (val: any) => val.profileDigitalPaymentsId === id
    );
    if (socialFilter.length === 0) {
      socialArray.push({
        profileDigitalPaymentLinkId: null,
        profileDigitalPaymentsId: id,
        digitalPaymentLink: "",
        activeStatus: e.target.checked,
        enableStatus: true,
      });
    }
    const updatedSocial = socialArray.find(
      (social: any) => social.profileDigitalPaymentsId === id
    );
    updatedSocial.activeStatus = e.target.checked;
    // Use the spread operator to create a new array with the updated element
    const newSocialArray = [...socialArray];
    setPayments(newSocialArray);
  };

  const socialMediaRegexValidation = (value: any, id: number) => {
    switch (id) {
      case 1:
        if (value.includes("https://")) {
          const regex = /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com)/;
          if (!regex.test(value)) {
            setMediaValidateErr("Invalid Instagram");
          } else {
            setMediaValidateErr("");
          }
        } else {
          setMediaValidateErr("");
        }
        break;
      case 2:
        if (value.includes("https://")) {
          const FbRegex =
            /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
          if (!FbRegex.test(value)) {
            setFbErr("Invalid Facebook");
          } else {
            setFbErr("");
          }
        } else {
          setFbErr("");
        }
        break;

      case 4:
        if (value.includes("https://")) {
          const YoutubeRegex =
            /^https?:\/\/(?:www\.)?youtube\.com\/(?:c\/|channel\/|user\/)?([a-zA-Z0-9_-]{1,})/;
          // /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}$/;
          if (!YoutubeRegex.test(value)) {
            setYoutubeErr("Invalid Youtube");
          } else {
            setYoutubeErr("");
          }
        } else {
          setYoutubeErr("");
        }
        break;

      default:
        return null;
    }
  };

  const socialMediaFunction = (e: any, id: any) => {
    const { value } = e.target;
    socialMediaRegexValidation(value, id);

    let socialArray = mediaArray;
    let updatedSocial = [];
    const socialFilter = socialArray.filter(
      (val: any) => val.profileSocialMediaId === id
    );
    if (socialFilter.length === 0) {
      socialArray.push({
        socialMediaName: e.target.value,
        profileSocialMediaId: id,
        profileSocialMediaLinkId: null,
        activeStatus: true,
        enableStatus: true,
      });
      const array = socialArray?.forEach((link: any) => {
        if (!link.socialMediaName.includes("@")) {
          setMediaError("");
        }
      });
      setMediaArray(socialArray);
    }
    // else {
    let updatedSocialArray = [...socialArray];

    updatedSocial = updatedSocialArray.map((val: any) => {
      if (!val.socialMediaName.includes("@")) {
        setMediaError("");
      }
      if (val.profileSocialMediaId === id) {
        return { ...val, socialMediaName: e.target.value };
      }
      return val;
    });

    setMediaArray(updatedSocial);
    // }
  };

  const paymentFunction = (e: any, id: any) => {
    const { value } = e.target;

    let paymentArray = payments;
    const paymentFilter = paymentArray.filter(
      (val: any) => val.profileDigitalPaymentsId === id
    );
    if (paymentFilter.length === 0) {
      paymentArray.push({
        profileDigitalPaymentLinkId: null,
        profileDigitalPaymentsId: id,
        digitalPaymentLink: value,
        activeStatus: true,
        enableStatus: true,
      });
    }

    const updatedPayment = paymentArray.find(
      (payment: any) => payment.profileDigitalPaymentsId === id
    );
    updatedPayment.digitalPaymentLink = value;
    const newPaymentArray = [...paymentArray];
    setPayments(newPaymentArray);
  };

  const getTemplateId = async (id: any) => {
    setLoading(true);
    setTemplateId(id.target.id);
    const tempObj = {
      deviceId: Number(tempSelectId),
      templateNameId: id.target.id,
      profileId: Number(deviceId),
    };
    const response = await chooseTemplate(tempObj);
    const newObj = {
      darkMode: false,
      brandingAccentColor: "",
      brandingFontColor: "",
      profileId: Number(deviceId),
      deviceLinkId: Number(apiId),
      templateId: templateId,
      brandingBackGroundColor: backColor || "",
      firstName: profile.firstName,
      lastName: profile.lastName,
      designation: profile.designation,
      companyName: profile.companyName,
      companyAddress: profile.companyAddress,
      shortDescription: profile.shortDesc,
      address: contact.address,
      city: contact.city || "",
      zipCode: contact.zipCode || "",
      state: contact.state || "",
      country: contact.country || "",
      brandingFont: fontStyle || "",
      phoneNumberEnable: mobileEnable,
      emailEnable: emailEnable,
      websiteEnable: websiteEnable,
      socialMediaEnable: socialMediaEnable,
      digitalMediaEnable: digitalEnable,
      phoneNumbers: users || [],
      emailIds: email || [],
      websites: website || [],
      socialMediaNames: mediaArray,
      digitalPaymentLinks: payments,
    };
    const responses: any = await CreateProfilePostApi(newObj);
    setLoading(false);

    if (response?.success === true) {
      toast.success("Template Switched", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    getProfileDetailsById();
  };

  const switchTemplateFunction = async (id: any, profileId: any) => {
    const templateObj = {
      deviceId: Number(profileId),
      templateNameId: Number(id),
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
  };

  // onChange function for profile Information
  function handleChange(e: any) {
    const { name, value } = e.target;
    const pattern = /^[a-zA-Z\s.]+$/;
    setNameError("");

    setProfile(() => ({ ...profile, [name]: value }));
    // if (name === "firstName" && value !== "") {
    //   if (!pattern.test(value)) {
    //     profileErrors.firstName = "First name is invalid";
    //   } else {
    //     profileErrors.firstName = "";
    //     setProfileErrors({
    //       ...profileErrors,
    //       firstName: "",
    //     });
    //   }
    // }
    // if (name === "shortDesc" && value !== "") {
    //   setProfileErrors({
    //     ...profileErrors,
    //     shortDesc: "",
    //   });
    // }
    // if (name === "designation" && value !== "") {
    //   if (!pattern.test(value)) {
    //     profileErrors.designation = "Job Title is invalid";
    //   } else {
    //     profileErrors.designation = "";
    //     setProfileErrors({
    //       ...profileErrors,
    //       designation: "",
    //     });
    //   }
    // }
  }

  function handleAddress(e: any) {
    const { name, value } = e.target;
    if (name === "zipCode") {
      const re = /^[0-9\b]+$/;
      if (e.target.value === "" || re.test(e.target.value)) {
        setZipNumberError("");
        setContact(() => ({ ...contact, [name]: value }));

        if (e.target.value.length < 6 || e.target.value.length > 6) {
          setZipExceedError("Zip code should be 6 digits");
        } else {
          setZipExceedError("");
        }
      } else {
        setZipNumberError("Enter only numbers");
      }
    } else {
      setContact(() => ({ ...contact, [name]: value }));
    }
  }

  function handleDarkMode(e: any) {
    setDarkMode(e.target.checked);
  }

  const DropDownHandleChange = (i: any, e: any) => {
    const { value } = e.target;
    setDropValue(value);
    if (users.length === 0) {
      const newUsers = [...users];
      newUsers[i] = {
        ...newUsers[i],
        // [name]: value,
        countryCode: "",
        // phoneNumberId: null,
        activeStatus: true,
        checkBoxStatus: true,
        // phoneNumber: value,
        phoneNumberType: value,
      };
      setUsers(newUsers);
    } else {
      users?.map((val: any, index: number) => {
        if (index === i) {
          const newUsers = [...users];
          newUsers[i] = {
            ...newUsers[i],
            // [name]: value,
            countryCode: "",
            phoneNumberId: val.phoneNumberId,
            activeStatus: true,
            checkBoxStatus: true,
            // phoneNumber: value,
            phoneNumberType: value,
          };
          setUsers(newUsers);
        }
      });
    }
  };

  const emailDropdownHandleChange = (i: any, e: any) => {
    const { value } = e.target;
    setEmailDropValue(value);
    if (email?.length === 0) {
      const newUsers = [...email];
      newUsers[i] = {
        ...newUsers[i],
        activeStatus: true,
        checkBoxStatus: true,
        emailType: value,
      };
      setEmail(newUsers);
    } else {
      email?.map((val: any, index: number) => {
        if (index === i) {
          const newUsers = [...email];
          newUsers[i] = {
            ...newUsers[i],
            emailIdNumber: val.emailIdNumber,
            activeStatus: true,
            checkBoxStatus: true,
            emailType: value,
          };
          setEmail(newUsers);
        }
      });
    }
  };

  const websiteDropdownHanldeChange = (i: any, e: any) => {
    const { value } = e.target;
    setWebDropValue(value);
    if (website.length === 0) {
      const newUsers = [...website];
      newUsers[i] = {
        ...newUsers[i],
        activeStatus: true,
        checkBoxStatus: true,
        websiteType: value,
      };
      setWebSite(newUsers);
    } else {
      website?.map((val: any, index: number) => {
        if (index === i) {
          const newUsers = [...website];
          newUsers[i] = {
            ...newUsers[i],
            websiteId: val.websiteId,
            activeStatus: true,
            checkBoxStatus: true,
            websiteType: value,
          };
          setWebSite(newUsers);
        }
      });
    }
  };

  // onChange function for contact Information
  const phoneNumberHandleChange = (i: number, e: any) => {
    setPhoneNullCheck("");
    const re = /^[0-9\b +]+$/;

    const { name, value } = e.target;
    if (e.target.value === "" || re.test(e.target.value)) {
      if (e.target.value.length < 6 || e.target.value.length > 20) {
        setPhoneExceedError("Mobile Number should be between 6 and 20 digits");
      } else {
        setPhoneExceedError("");
      }
      if (e.target.value === "") {
        setUsers([]);
      }

      if (users.length === 0) {
        const newUsers = [...users];
        newUsers[i] = {
          ...newUsers[i],
          [name]: value,
          phoneNumberType: dropValue,
          countryCode: "",
          phoneNumberId: null,
          activeStatus: true,
          checkBoxStatus: true,
        };
        setUsers(newUsers);
      } else {
        try {
          users?.map((val: any, index: number) => {
            if (val?.phoneNumberId === "") {
              const newUsers = [...users];
              newUsers[i] = {
                ...newUsers[i],
                [name]: value,
                phoneNumberType: val.phoneNumberType,
                countryCode: "",
                phoneNumberId: null,
                activeStatus: true,
                checkBoxStatus: true,
              };
            } else {
              if (index === i) {
                const newUsers = [...users];
                newUsers[i] = {
                  ...newUsers[i],
                  [name]: value,
                  phoneNumberType: val.phoneNumberType,
                  countryCode: "",
                  phoneNumberId: val.phoneNumberId,
                  activeStatus: true,
                  checkBoxStatus: true,
                };
                setUsers(newUsers);
              }
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const removeClick = async (i: number, j: number, user: any) => {
    if (user.phoneNumberId === null) {
      const newUsers = [...users];
      newUsers.splice(j, 1);
      setUsers(newUsers);
    } else {
      const mobDel = {
        phoneNumberId: user?.phoneNumberId,
      };

      const response = await MobileDeleteApi(mobDel);
      const newUsers = [...users];
      newUsers.splice(j, 1);
      setUsers(newUsers);
    }
    setPhoneExceedError("");
  };

  const addMobileClick = () => {
    setDropValue("Personal");

    setUsers([
      ...users,
      {
        phoneNumberType: "Personal",
        countryCode: "",
        phoneNumber: "",
        phoneNumberId: null,
        activeStatus: true,
        checkBoxStatus: true,
      },
    ]);
  };

  const handleQRUpload = async (e: any) => {
    const profileId = deviceId;
    const { files } = e.target;
    const formData = new FormData();
    formData.append("profileId", deviceId);

    formData.append("qrCodeImage", files[0]);
    const imgResponse = await qrImageUploadApi(formData);
    const res = imgResponse?.data;
    setQrImageUrl(res?.qrCodeImageUrl);
  };

  const emailHandleChange = (i: number, e: any) => {
    setEmailNullCheck("");
    const { name, value } = e.target;

    if (email?.length === 0) {
      const newUsers = [...email];
      newUsers[i] = {
        ...newUsers[i],
        [name]: value,
        emailType: emailDropValue,
        emailIdNumber: null,
        activeStatus: true,
        checkBoxStatus: true,
      };
      setEmail(newUsers);
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid Email Address");

      try {
        email?.map((val: any, index: number) => {
          if (val?.emailIdNumber === "") {
            const newUsers = [...email];
            newUsers[i] = {
              ...newUsers[i],
              [name]: value,
              emailType: val.emailType,
              emailIdNumber: null,
              activeStatus: true,
              checkBoxStatus: true,
            };
          } else {
            if (index === i) {
              const newUsers = [...email];
              newUsers[i] = {
                ...newUsers[i],
                [name]: value,
                emailType: val.emailType,
                emailIdNumber: val.emailIdNumber,
                activeStatus: true,
                checkBoxStatus: true,
              };
              setEmail(newUsers);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
      return false;
    }
    setEmailError("");

    if (email.length === 0) {
      const newUsers = [...email];
      newUsers[i] = {
        ...newUsers[i],
        [name]: value,
        emailType: emailDropValue,
        emailIdNumber: null,
        activeStatus: true,
        checkBoxStatus: true,
      };
      setEmail(newUsers);
    } else {
      try {
        email?.map((val: any, index: number) => {
          if (val?.emailIdNumber === "") {
            const newUsers = [...email];
            newUsers[i] = {
              ...newUsers[i],
              [name]: value,
              emailType: val.emailType,
              emailIdNumber: null,
              activeStatus: true,
              checkBoxStatus: true,
            };
          } else {
            if (index === i) {
              const newUsers = [...email];
              newUsers[i] = {
                ...newUsers[i],
                [name]: value,
                emailType: val.emailType,
                emailIdNumber: val.emailIdNumber,
                activeStatus: true,
                checkBoxStatus: true,
              };
              setEmail(newUsers);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeClickEmail = async (i: number, j: number, emailval: any) => {
    if (email.emailIdNumber === null) {
      const newUsers = [...email];
      newUsers.splice(j, 1);
      setEmail(newUsers);
    } else {
      const emailDel = {
        emailIdNumber: emailval?.emailIdNumber,
      };
      const response = await EmailDeleteApi(emailDel);
      const newUsers = [...email];
      newUsers.splice(j, 1);
      setEmail(newUsers);
    }
    setEmailError("");
  };

  const addEmailClick = () => {
    setEmailDropValue("");

    setEmail([
      ...email,
      {
        emailType: "",
        emailId: "",
        emailIdNumber: null,
        activeStatus: true,
        checkBoxStatus: true,
      },
    ]);
  };

  const websiteHandleChange = (i: number, e: any) => {
    const { name, value } = e.target;

    if (website?.length === 0) {
      const newUsers = [...website];
      newUsers[i] = {
        ...newUsers[i],
        [name]: value,
        websiteType: webDropValue,
        websiteId: null,
        activeStatus: true,
        checkBoxStatus: true,
      };
      setWebSite(newUsers);
    }

    const websiteRegex =
      /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    if (!websiteRegex.test(e.target.value)) {
      setWebSiteError("InValid WebSite Address");
      try {
        website?.map((val: any, index: number) => {
          if (val?.websiteId === "") {
            const newUsers = [...website];
            newUsers[i] = {
              ...newUsers[i],
              [name]: value,
              websiteType: webDropValue || val.websiteType,
              emailIdNumber: null,
              activeStatus: true,
              checkBoxStatus: true,
            };
          } else {
            if (index === i) {
              const newUsers = [...website];
              newUsers[i] = {
                ...newUsers[i],
                [name]: value,
                websiteType: val.websiteType,
                websiteId: val.websiteId,
                activeStatus: true,
                checkBoxStatus: true,
              };
              setWebSite(newUsers);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
      return false;
    }
    setWebSiteError("");

    if (website.length === 0) {
      const newUsers = [...website];
      newUsers[i] = {
        ...newUsers[i],
        [name]: value,
        websiteType: webDropValue,
        websiteId: null,
        activeStatus: true,
        checkBoxStatus: true,
      };
      setWebSite(newUsers);
    } else {
      try {
        website?.map((val: any, index: number) => {
          if (val?.websiteId === "") {
            const newUsers = [...website];
            newUsers[i] = {
              ...newUsers[i],
              [name]: value,
              websiteType: val.websiteType,
              websiteId: null,
              activeStatus: true,
              checkBoxStatus: true,
            };
          } else {
            if (index === i) {
              const newUsers = [...website];
              newUsers[i] = {
                ...newUsers[i],
                [name]: value,
                websiteType: val.websiteType,
                websiteId: val.websiteId,
                activeStatus: true,
                checkBoxStatus: true,
              };
              setWebSite(newUsers);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const removeClickWebsite = async (i: number, j: number, websites: any) => {
    if (websites.websiteId === null) {
      const newUsers = [...website];
      newUsers.splice(j, 1);
      setWebSite(newUsers);
    } else {
      const websiteDel = {
        websiteId: websites.websiteId,
      };
      const response = await WebSiteDeleteApi(websiteDel);
      const newUsers = [...website];
      newUsers.splice(j, 1);
      setWebSite(newUsers);
    }
  };
  const addWebsiteClick = () => {
    setWebDropValue("");
    setWebSite((prevState: any) => [
      ...prevState,
      { websiteType: "", website: "", websiteId: null, activeStatus: true },
    ]);
  };

  const socialMediaDeleteFunc = async (i: any) => {
    const newUsers = [...mediaArray];
    newUsers.splice(i, 1);
    setMediaArray(newUsers);

    const socialMediaName = {};
    const delResponse = await mobileDelete();
  };

  const [editValues, setEditValues] = useState<any>("");
  let ProfileDetailsResponse: AxiosResponse<any, any> | null | undefined;

  const getProfileDetailsById = async () => {
    const ProfileIdObj = {
      profileId: deviceId,
    };
    if (ProfileDetailsResponse !== null) {
      ProfileDetailsResponse = await getProfileId(ProfileIdObj);
      setDeviceUid(ProfileDetailsResponse?.data?.data?.deviceUid?.deviceUid);
      const profileImages = ProfileDetailsResponse?.data?.data?.profileImgs;
      if (profileImages && Object.keys(profileImages).length !== 0) {
        setProfileImg(profileImages);
      }
      setEditValues(ProfileDetailsResponse?.data?.data?.profile);
    }
    const updateData = ProfileDetailsResponse?.data?.data?.profile;
    if (updateData?.qrCodeImageUrl) {
      setQrImageUrl(updateData?.qrCodeImageUrl);
    }

    setLogoUrl(updateData?.brandingLogoUrl);

    ProfileDetailsResponse?.data?.data?.deviceBranding?.map((val: any) => {
      if (val.templateId === updateData?.DeviceLink?.templateId) {
        setDarkMode(val.darkMode);
        setBackgroundColor(val.brandingBackGroundColor);
        setAccentColor(val.brandingAccentColor);
      }
    });
    if (updateData) {
      setProfile({
        firstName: updateData?.firstName,
        lastName: updateData?.lastName,
        designation: updateData?.designation,
        companyAddress: updateData?.companyAddress,
        companyName: updateData?.companyName,
        shortDesc: updateData?.shortDescription,
      });
      setContact({
        address: updateData?.address,
        city: updateData?.city,
        zipCode: updateData?.zipCode,
        state: updateData?.state,
        country: updateData?.country,
      });
      setSocialMediaEnable(
        ProfileDetailsResponse?.data?.data?.profile?.socialMediaEnable
      );

      setDigitalEnable(
        ProfileDetailsResponse?.data?.data?.profile?.digitalMediaEnable
      );
      // setQrEnable(
      //   ProfileDetailsResponse?.data?.data?.profile?.digitalMediaEnable
      // );
      setEmailEnable(ProfileDetailsResponse?.data?.data?.profile?.emailEnable);
    }
    setMobileEnable(
      ProfileDetailsResponse?.data?.data?.profile?.phoneNumberEnable
    );
    setWebsiteEnable(
      ProfileDetailsResponse?.data?.data?.profile?.websiteEnable
    );

    if (updateData?.DeviceLink !== null) {
      setTemplateId(updateData?.DeviceLink?.TemplateId.toString());
    }
    // start of phone numbers
    const PhoneAdd =
      ProfileDetailsResponse?.data?.data?.profile?.profilePhoneNumbers;
    const UpdatedPhoneArray = PhoneAdd?.map((val: any, index: any) => ({
      ...val,
      phoneNumberId: val.id,
    }));
    setUsers(UpdatedPhoneArray);
    const keysToRemovePhone = [
      "id",
      "ProfileId",
      "updatedAt",
      "createdAt",
      "profileId",
    ];
    let PhoneDelKey = UpdatedPhoneArray?.map((obj: { [x: string]: any }) =>
      Object.keys(obj)
        .filter((key: any) => !keysToRemovePhone.includes(key))
        .reduce((acc: any, key: any) => ({ ...acc, [key]: obj[key] }), {})
    );

    const activeNumbers = PhoneDelKey?.filter((obj: any) => obj.activeStatus);

    setUsers(activeNumbers);

    // end of phone numbers
    // starting of emails
    const emailAdd = ProfileDetailsResponse?.data?.data?.profile?.profileEmails;
    const UpdatedEmailArray = emailAdd?.map((val: any, index: any) => ({
      ...val,
      emailIdNumber: val.id,
    }));
    setEmail(UpdatedEmailArray);
    const keysToRemoveEmail = [
      "id",
      "ProfileId",
      "updatedAt",
      "createdAt",
      "profileId",
    ];
    const EmailDelKey = UpdatedEmailArray?.map((obj: { [x: string]: any }) =>
      Object.keys(obj)
        .filter((key: any) => !keysToRemoveEmail.includes(key))
        .reduce((acc: any, key: any) => ({ ...acc, [key]: obj[key] }), {})
    );
    const activeEmails = EmailDelKey?.filter((obj: any) => obj.activeStatus);
    setEmail(activeEmails);

    // end of emails
    // starting of website
    const WebsiteAdd =
      ProfileDetailsResponse?.data?.data?.profile?.profileWebsites;
    const UpdatedWebSiteArray = WebsiteAdd?.map((val: any, index: any) => ({
      ...val,
      websiteId: val.id,
    }));
    setWebSite(UpdatedWebSiteArray);
    const keysToRemoveWebsite = [
      "id",
      "ProfileId",
      "updatedAt",
      "createdAt",
      "profileId",
    ];
    const WebSiteDelKey = UpdatedWebSiteArray?.map(
      (obj: { [x: string]: any }) =>
        Object.keys(obj)
          .filter((key: any) => !keysToRemoveWebsite.includes(key))
          .reduce((acc: any, key: any) => ({ ...acc, [key]: obj[key] }), {})
    );
    const activeWebsite = WebSiteDelKey?.filter((obj: any) => obj.activeStatus);
    setWebSite(activeWebsite);
    // ending of website
    const mediaVal =
      ProfileDetailsResponse?.data?.data?.profile?.profileSocialMediaLinks;
    if (mediaVal?.length > 0) {
      const UpdatedMediaArray = mediaVal?.map((val: any, index: any) => ({
        ...val,
        profileSocialMediaLinkId: val.id,
      }));
      const keysToRemoveMedia = [
        "id",
        "ProfileId",
        "updatedAt",
        "createdAt",
        "profileId",
      ];
      const MediaDelKey = UpdatedMediaArray?.map((obj: any) =>
        Object.keys(obj)
          .filter((key: any) => !keysToRemoveMedia.includes(key))
          .reduce((acc: any, key: any) => ({ ...acc, [key]: obj[key] }), {})
      );
      setMediaArray(MediaDelKey);
    }
    const profileVal = ProfileDetailsResponse?.data?.data?.profile;

    const digitalVal = profileVal?.profileDigitalPaymentLinks;
    if (digitalVal?.length > 0) {
      const UpdatedDigitalArray = digitalVal?.map((val: any, index: any) => ({
        ...val,
        profileDigitalPaymentLinkId: val.id,
      }));
      const keysToRemoveMedia = [
        "id",
        "ProfileId",
        "updatedAt",
        "createdAt",
        "profileId",
      ];
      const DigitalDelKey = UpdatedDigitalArray?.map((obj: any) =>
        Object.keys(obj)
          .filter((key: any) => !keysToRemoveMedia.includes(key))
          .reduce((acc: any, key: any) => ({ ...acc, [key]: obj[key] }), {})
      );

      setPayments(DigitalDelKey);
    }

    // setting colors

    const deviceLinkValues = ProfileDetailsResponse?.data?.data;
    deviceLinkValues?.deviceBranding?.map((brand: any) => {
      if (templateId == brand?.templateId) {
        setPrimaryColor(brand?.brandingFontColor);
        setBackgroundColor(brand?.brandingBackGroundColor);
        setAccentColor(brand?.brandingAccentColor);
      }
    });
  };
  const getUserProfileDetails = async () => {
    const response = await userProfile();
    setUserSubscriptionType(
      response?.data?.userProfile?.BubblPlanManagements[0]?.subscriptionType
    );
  };

  useEffect(() => {
    getUserProfileDetails();
    getProfileDetailsById();
    proUser();
  }, [router, templateId]);

  // start branding onChange functions
  function handleColorChangeBackground(e: any) {
    setBackgroundColor(e.hex);
  }
  function handleColorChange(e: any) {
    setPrimaryColor(e.hex);
  }
  function handleColorChangeAccent(e: any) {
    setPrimaryColor(e.hex);
  }
  function handleSecColorChange(e: any) {
    setBackgroundColor(e.hex);
  }
  function handleAccentColorChange(e: any) {
    setAccentColor(e.hex);
  }
  function handleFontChange(e: any) {
    setFontStyle(e.target.value);
  }

  function getUpdateErrors() {
    return profileErrors;
  }

  const onSubmitSave = async () => {
    let errorVal = "";

    const checkMediaArray = mediaArray?.forEach((link: any) => {
      if (link?.socialMediaName.includes("@")) {
        errorVal = "Kindly remove @";
        setMediaError("Kindly remove @");
      }
    });

    if (emailEnable) {
      if (email.length === 0) {
        findSectorAndScrollOnError(2);
        setEmailNullCheck("Email cannot be empty");
      } else {
        setEmailNullCheck("");
      }
    }

    if (mobileEnable === true) {
      if (users.length === 0) {
        findSectorAndScrollOnError(2);
        setPhoneNullCheck("Mobile Number cannot be empty");
      }
    } else {
      setPhoneNullCheck("");
    }
    if (profile.firstName === "") {
      findSectorAndScrollOnError(1);
      setNameError("First name is required");
    }
    if (profile.designation === "") {
      findSectorAndScrollOnError(1);
      profileErrors.designation = "Job Title is required";
    }
    setProfileErrors(profileErrors);

    // Function to scroll to error section
    if (profileErrors.firstName !== "" || profileErrors.designation !== "") {
      findSectorAndScrollOnError(1);
    }
    if (
      phoneExceedError !== "" ||
      emailError !== "" ||
      emailNullCheck !== "" ||
      phoneNullCheck !== "" ||
      webSiteError !== ""
    ) {
      findSectorAndScrollOnError(2);
    }
    if (mediaError !== "") {
      findSectorAndScrollOnError(3);
    }

    const createDataObj = {
      profileId: Number(deviceId),
      deviceLinkId: Number(apiId),
      templateId: templateId,
      brandingFontColor: primaryColor || "",
      brandingBackGroundColor: backColor || "",
      brandingAccentColor: secondaryColor || "",
      darkMode: darkMode,
      firstName: profile.firstName,
      lastName: profile.lastName,
      designation: profile.designation,
      companyName: profile.companyName,
      companyAddress: profile.companyAddress,
      shortDescription: profile.shortDesc,
      address: contact.address,
      city: contact.city || "",
      zipCode: contact.zipCode || "",
      state: contact.state || "",
      country: contact.country || "",
      brandingFont: fontStyle || "",
      phoneNumberEnable: mobileEnable,
      emailEnable: emailEnable,
      websiteEnable: websiteEnable,
      socialMediaEnable: socialMediaEnable,
      digitalMediaEnable: digitalEnable,
      phoneNumbers: users || [],
      emailIds: email || [],
      websites: website || [],
      socialMediaNames: mediaArray,
      digitalPaymentLinks: payments,
    };

    if (
      profile.firstName !== "" &&
      profileErrors.firstName === "" &&
      nameError === "" &&
      profileErrors.designation === "" &&
      profile.designation !== "" &&
      phoneExceedError === "" &&
      emailError === "" &&
      webSiteError === "" &&
      phoneNullCheck === "" &&
      emailNullCheck === "" &&
      mediaError === "" &&
      errorVal === ""
    ) {
      const response: any = await CreateProfilePostApi(createDataObj);
      setResponseVal(response?.data.profile);

      const phoneVal = response?.data.profile?.profilePhoneNumbers;

      if (phoneVal?.length > 0) {
        let UpdatedPhoneArray = phoneVal?.map((val: any, index: any) => {
          if (val.id) {
            return {
              phoneNumberId: val.id,
              phoneNumber: val.phoneNumber,
              phoneNumberType: val.phoneNumberType,
              countryCode: val.countryCode,
              checkBoxStatus: val.checkBoxStatus,
              activeStatus: val.activeStatus,
            };
          }
        });
        UpdatedPhoneArray = UpdatedPhoneArray.filter(
          (obj: any) => obj.activeStatus
        );
        if (UpdatedPhoneArray !== undefined) {
          setUsers(UpdatedPhoneArray);
        }
      }
      const emailval = response?.data.profile?.profileEmails;
      if (emailval?.length > 0) {
        let UpdatedEmailArray = emailval?.map((val: any, index: any) => {
          if (val.id) {
            return {
              emailIdNumber: val.id,
              emailId: val.emailId,
              emailType: val.emailType,
              checkBoxStatus: val.checkBoxStatus,
              activeStatus: val.activeStatus,
            };
          }
        });
        UpdatedEmailArray = UpdatedEmailArray.filter(
          (obj: any) => obj.activeStatus
        );
        if (UpdatedEmailArray !== undefined) {
          setEmail(UpdatedEmailArray);
        }
      }
      const webSiteval = response?.data.profile?.profileWebsites;
      if (webSiteval?.length > 0) {
        let UpdatedWebSiteArray = webSiteval?.map((val: any, index: any) => {
          if (val.id) {
            return {
              websiteType: val.websiteType,
              website: val.website,
              websiteId: val.id,
              checkBoxStatus: val.checkBoxStatus,
              activeStatus: val.activeStatus,
            };
          }
        });
        UpdatedWebSiteArray = UpdatedWebSiteArray.filter(
          (obj: any) => obj.activeStatus
        );

        if (UpdatedWebSiteArray !== undefined) {
          setWebSite(UpdatedWebSiteArray);
        }
      }

      const socialMediaVal = response?.data.profile?.profileSocialMediaLinks;
      if (socialMediaVal?.length > 0) {
        const socialMediaArray = socialMediaVal?.map((val: any, index: any) => {
          if (val.id) {
            return {
              socialMediaName: val.socialMediaName,
              profileSocialMediaId: val.profileSocialMediaId,
              profileSocialMediaLinkId: val.id,
              activeStatus: val.activeStatus,
              enableStatus: val.enableStatus,
            };
          }
        });
        if (socialMediaArray !== undefined) {
          setMediaArray(socialMediaArray);
        }
      }
      const digitalVal = response?.data.profile?.profileDigitalPaymentLinks;
      if (digitalVal?.length > 0) {
        const DigitalArray = digitalVal?.map((val: any, index: any) => {
          if (val.id) {
            return {
              profileDigitalPaymentLinkId: val.id,
              profileDigitalPaymentsId: val.profileDigitalPaymentsId,
              digitalPaymentLink: val.digitalPaymentLink,
              enableStatus: val.enableStatus,
              activeStatus: val.activeStatus,
            };
          }
        });
        if (DigitalArray !== undefined) {
          setPayments(DigitalArray);
        }
      }

      if (response?.data.success === true) {
        toast.success("Successfully Saved", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      if (response?.data.success === false) {
        toast.error("Something went wrong", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const onDrop = async (file: any) => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append("profileId", deviceId);
      formData.append("brandingLogo", file[0]);
      const imgResponse = await BrandingLogoPostApi(formData);
      const res = imgResponse?.data;
      setDragFile(file[0].name);
      setLogoUrl(res.brandingLogoUrl);
    }
  };
  const mobileEnableFunc = (e: any) => {
    if (e.target.checked === false) {
      setPhoneExceedError("");
      setPhoneNullCheck("");
    }
    setMobileEnable(e.target.checked);
  };

  const emailEnableFunc = (e: any) => {
    if (e.target.checked === false) {
      setEmailError("");
      setEmailNullCheck("");
    }
    setEmailEnable(e.target.checked);
  };

  const websiteEnableFunc = (e: any) => {
    if (e.target.checked === false) {
      setWebSiteError("");
      // setWebsiteNullCheck("");
    }
    setWebsiteEnable(e.target.checked);
  };
  const socialEnableFunc = (e: any) => {
    setSocialMediaEnable(e.target.checked);
  };
  const digitalEnableFunc = (e: any) => {
    setDigitalEnable(e.target.checked);
  };
  const qrUploadEnableFunc = (e: any) => {
    setQrEnable(e.target.checked);
  };

  const findSectorAndScrollOnError = (sectionID: number) => {
    switch (sectionID) {
      case 1: // Navigate to profile section
        {
          const section = document.getElementById("ProfileSection");

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
        break;
      case 2: // Navigate to Contact section
        {
          const section = document.getElementById("ContactSection");

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
        break;
      case 3: // Navigate to Socail Media section
        {
          const section = document.getElementById("SocailMediaSection");

          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
        break;

      default:
        break;
    }
  };

  const saveFunction = () => {
    setSaveEnable(true);
    // Standard error validations
    if (profile.firstName === "") {
      profileErrors.firstName = "FirstName is required";
      findSectorAndScrollOnError(1);
      setNameError("FirstName is required");
    }
    if (profile.designation === "") {
      profileErrors.designation = "Job Title is required";
      findSectorAndScrollOnError(1);
    }
    if (email.length === 0) {
      setEmailNullCheck("Email cannot be empty");
      findSectorAndScrollOnError(2);
    }
    if (users.length === 0) {
      setPhoneNullCheck("Mobile Number cannot be empty");
      findSectorAndScrollOnError(2);
    }

    // Function to scroll to error section
    if (profileErrors.firstName !== "" || profileErrors.designation !== "") {
      findSectorAndScrollOnError(1);
    }
    if (
      phoneExceedError !== "" ||
      emailError !== "" ||
      emailNullCheck !== "" ||
      phoneNullCheck !== "" ||
      webSiteError !== ""
    ) {
      findSectorAndScrollOnError(2);
    }
    if (mediaError !== "") {
      findSectorAndScrollOnError(3);
    }

    // On no error condition
    if (
      profile.firstName !== "" &&
      profileErrors.firstName === "" &&
      nameError === "" &&
      profileErrors.designation === "" &&
      profile.designation !== "" &&
      // profile.shortDesc !== "" &&
      phoneExceedError === "" &&
      emailError === "" &&
      webSiteError === "" &&
      phoneNullCheck === "" &&
      emailNullCheck === "" &&
      mediaError === ""
      // websiteNullCheck === ""
    ) {
      // Fire API call if no Errors are found
      onSubmitSave();
      router.replace("/landing1");
    }
    setProfileErrors(profileErrors);
  };

  const CancelFunction = () => {
    router.replace("/landing1");
  };

  const resetFunctionality = async () => {
    const resetPhoneNumber = users?.map((val: any) => {
      if (val.phoneNumberId) {
        return { ...val, phoneNumber: "" };
      }
    });

    const resetEmail = email?.map((val: any) => {
      if (val.emailIdNumber) {
        return { ...val, emailId: "" };
      }
    });

    const resetWebsite = website?.map((val: any) => {
      if (val.websiteId) {
        return { ...val, website: "" };
      }
    });

    const resetSocialMedia = mediaArray.map((val: any) => {
      if (val.profileSocialMediaId) {
        return { ...val, socialMediaName: "" };
      }
    });

    setDelPhone(resetPhoneNumber);
    setEmailDel(resetEmail);
    setWebSiteDel(resetWebsite);
    setProfileImg(null);
    setImage("");
    setAccentColor("");
    setPrimaryColor("");
    setBackgroundColor("");
    setEmail([]);
    setWebSite([]);
    setMediaArray(resetSocialMedia);
    setPayments([]);
    setContact({
      ...contact,
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    });
    setMobileEnable(true);
    setEmailEnable(true);
    setProfile({
      ...profile,
      firstName: "",
      lastName: "",
      designation: "",
      companyAddress: "",
      companyName: "",
      shortDesc: "",
    });

    const createDataObj = {
      profileId: Number(deviceId),
      deviceLinkId: Number(apiId),
      templateId: templateId,
      brandingFontColor: "",
      brandingBackGroundColor: "",
      brandingAccentColor: "",
      darkMode: false,
      firstName: "",
      lastName: "",
      designation: "",
      companyName: "",
      companyAddress: "",
      shortDescription: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
      country: "",
      brandingFont: "",
      phoneNumberEnable: mobileEnable,
      emailEnable: emailEnable,
      websiteEnable: websiteEnable,
      socialMediaEnable: socialMediaEnable,
      digitalMediaEnable: digitalEnable,
      phoneNumbers: resetPhoneNumber,
      emailIds: resetEmail,
      websites: resetWebsite,
      socialMediaNames: resetSocialMedia,
      digitalPaymentLinks: [],
      profileImage: "",
    };
    const response: any = await CreateProfilePostApi(createDataObj);
    setSaveEnable(false);
    getProfileDetailsById();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // api for finding pro user
  const proUser = async () => {
    const resp = await getUserPlan();
    const valId = resp?.data?.getPlans?.PlanId;
    if (valId === 1) {
      setDarkMode(false);
      setPrimaryColor("");
      setAccentColor("");
      setFontStyle("");
    }
    setPlanId(valId);
  };

  // Image Crop Functionalities
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const imageSrc = event.target?.result as string;
      setImage(imageSrc);
      setCroppedImage("");
    };

    reader.readAsDataURL(file);
  };

  const handleZoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newZoom = parseFloat(e.target.value);
    setZoom(newZoom);
  };

  const handleSave = async ({
    squareImgBlob,
    rectangleImgBlob,
  }: {
    squareImgBlob: Blob;
    rectangleImgBlob: Blob;
  }) => {
    const imgResponse = await ProfileImagePostApi({
      profileId: deviceId,
      squareImage: squareImgBlob,
      rectangleImage: rectangleImgBlob,
    });
    const res = imgResponse?.data;
    setProfileImg(res?.profileImageUrl);
  };
  // delete function for branding
  const deleteImageApi = async () => {
    setDragFile("");
    const delObj = {
      profileId: deviceId,
    };
    const delResponse = await deleteBrandingImage(delObj);
    getProfileDetailsById();
  };
  const hiddenFileInput = useRef<any>(null);

  // delete function for QR
  const deleteQRImageApi = async () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = null; // Reset the input value
    }

    setQrImageUrl(null);
    const qrDelObj = {
      profileId: deviceId,
    };
    const imgResponse = await deleteQRImage(qrDelObj);
    getProfileDetailsById();
  };

  // delete function for Profile Image
  const deleteProfileImageApi = async () => {
    setProfileImg(null);
    const profileDelObj = {
      profileId: deviceId,
    };
    const imgResponse = await deleteProfileImage(profileDelObj);
    getProfileDetailsById();
  };

  return (
    <div className={styles.templateDiv}>
      <ToastContainer />
      <div>
        <div className="container">
          <NavBar />
          {isEdit ? <EditTemplateHeader /> : <TemplateHeader />}

          <Row>
            <Col xl={6} md={12}>
              {isEdit ? <EditTemplateActiveTab /> : <TemplateActiveTab />}
              <Template idValue={editValues} getTemplateId={getTemplateId} />

              {/* Profile Information */}
              <ProfileInformation
                handleChange={handleChange}
                profile={profile}
                onSubmitSave={onSubmitSave}
                profileImg={profileImg}
                getUpdateErrors={getUpdateErrors}
                nameError={nameError}
                handleSave={handleSave}
                deleteProfileImageApi={deleteProfileImageApi}
              />

              {/* Branding */}
              {userSubscriptionType === "free" ? (
                <div style={{ opacity: "0.5", pointerEvents: "none" }}>
                  <BrandingTemplate
                    BrandingValues={onSubmitSave}
                    onDrop={onDrop}
                    fontColor={primaryColor}
                    backColor={backColor}
                    accentColor={secondaryColor}
                    handleDarkMode={handleDarkMode}
                    handleColorChangeBackground={handleColorChangeBackground}
                    handleColorChange={handleColorChange}
                    handleColorChangeAccent={handleColorChangeAccent}
                    handleSecColorChange={handleSecColorChange}
                    handleAccentColorChange={handleAccentColorChange}
                    handleFontChange={handleFontChange}
                    brandLogo={dragFile}
                    darkMode={darkMode}
                    fontStyle={fontStyle}
                    templateId={templateId}
                    deleteImageApi={deleteImageApi}
                    logoUrl={logoUrl}
                  />
                </div>
              ) : (
                <div>
                  <BrandingTemplate
                    BrandingValues={onSubmitSave}
                    onDrop={onDrop}
                    fontColor={primaryColor}
                    backColor={backColor}
                    accentColor={secondaryColor}
                    handleDarkMode={handleDarkMode}
                    handleColorChangeBackground={handleColorChangeBackground}
                    handleColorChange={handleColorChange}
                    handleColorChangeAccent={handleColorChangeAccent}
                    handleSecColorChange={handleSecColorChange}
                    handleAccentColorChange={handleAccentColorChange}
                    handleFontChange={handleFontChange}
                    brandLogo={dragFile}
                    darkMode={darkMode}
                    fontStyle={fontStyle}
                    templateId={templateId}
                    deleteImageApi={deleteImageApi}
                    logoUrl={logoUrl}
                  />
                </div>
              )}

              {/* Add Contact Detail */}
              <AddContactDetails
                phoneExceedError={phoneExceedError}
                webSiteError={webSiteError}
                contactValues={onSubmitSave}
                handleAddress={handleAddress}
                contact={contact}
                phoneHandleChange={phoneNumberHandleChange}
                DropDownHandleChange={DropDownHandleChange}
                emailHandleChange={emailHandleChange}
                mobile={users}
                addMobileClick={addMobileClick}
                emailDropdownHandleChange={emailDropdownHandleChange}
                emailError={emailError}
                email={email}
                addEmailClick={addEmailClick}
                phoneNullCheck={phoneNullCheck}
                websiteHandleChange={websiteHandleChange}
                websiteDropdownHanldeChange={websiteDropdownHanldeChange}
                website={website}
                addWebsiteClick={addWebsiteClick}
                onSubmitSave={onSubmitSave}
                removeClick={removeClick}
                removeClickEmail={removeClickEmail}
                removeClickWebsite={removeClickWebsite}
                mobileEnableFunc={mobileEnableFunc}
                emailEnableFunc={emailEnableFunc}
                websiteEnableFunc={websiteEnableFunc}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                zipNumberError={zipNumberError}
                zipExceedError={zipExceedError}
                editValues={editValues}
                emailNullCheck={emailNullCheck}
                // websiteNullCheck={websiteNullCheck}
              />
              {/* Social Media Links */}
              <SocialMedia
                onSubmitSave={onSubmitSave}
                inputRef={inputRefs}
                socialMediaFunction={socialMediaFunction}
                socialMediaToggle={socialMediaToggle}
                mediaValidation={mediValidateErr}
                mediaArray={mediaArray}
                socialEnableFunc={socialEnableFunc}
                socialMediaEnable={socialMediaEnable}
                socialMediaDeleteFunc={socialMediaDeleteFunc}
                fbErr={FbErr}
                youtubeErr={youtubeErr}
                twitterErr={twitterErr}
                linkedInErr={linkedInErr}
                mediaError={mediaError}
              />

              {/* Digital Payments */}
              <DigitalPayments
                DigitalPaymentsfunc={paymentFunction}
                paymentToggle={paymentToggleFunc}
                digitalSaveSubmit={onSubmitSave}
                payments={payments}
                handleQRUpload={handleQRUpload}
                digitalEnableFunc={digitalEnableFunc}
                digitalEnable={digitalEnable}
                qrEnable={qrEnable}
                planId={plantId}
                qrImageUrl={qrImageUrl}
                hiddenFileInput={hiddenFileInput}
                deleteQRImageApi={deleteQRImageApi}
              />

              <div className={`${styles["warning-information-div"]}`}>
                Please check the information provided and click on one of the
                option below{" "}
              </div>

              {/* save and cancel Buttons  */}
              <div className={`${styles["media-div-btn"]}`}>
                <Button
                  type="submit"
                  className={`${styles["media-save-btn"]}`}
                  onClick={saveFunction}
                >
                  {!isEdit ? "Save and Create Profile" : "Update Profile"}
                  &nbsp;
                  <Image
                    src={ArrowIcon}
                    className={`${styles["arrow-btn"]}`}
                    alt="bubbl"
                  />
                </Button>
              </div>
              <div className={`${styles["cancel-btns-div"]}`}>
                <div>
                  <ButtonComp
                    variant="none"
                    label="Cancel"
                    onClick={CancelFunction}
                  />
                </div>
                <div
                  className={`${styles["reset-btn"]}`}
                  onClick={resetFunctionality}
                >
                  <ButtonComp variant="none" label="Reset" />
                </div>
              </div>
            </Col>

            <Col h-50>
              <div className={styles.preview_fixed}>
                {loading ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  <PreviewSection
                    profile={profile}
                    mobileNumbers={users}
                    emailUsers={email}
                    websiteUsers={website}
                    contact={contact}
                    templateId={templateId}
                    darkMode={darkMode}
                    mobileEnable={mobileEnable}
                    emailEnable={emailEnable}
                    websiteEnable={websiteEnable}
                    socialMediaEnable={socialMediaEnable}
                    digitalEnable={digitalEnable}
                    primaryColor={primaryColor}
                    backColor={backColor}
                    secondaryColor={secondaryColor}
                    mediaArray={mediaArray}
                    profileImg={profileImg}
                    paymentArray={payments}
                    modeId={modeId}
                    logoUrl={logoUrl}
                    plantId={plantId}
                    textColor={primaryColor}
                    accentColor={secondaryColor}
                    qrImageUrl={qrImageUrl}
                    deviceId={deviceUid}
                    companyName={profile?.companyName}
                    linkVal={deviceUid}
                  />
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
      <div className="btn-holder">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Mobile Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PreviewSection
              profile={profile}
              mobileNumbers={users}
              emailUsers={email}
              websiteUsers={website}
              contact={contact}
              templateId={templateId}
              darkMode={darkMode}
              mobileEnable={mobileEnable}
              emailEnable={emailEnable}
              websiteEnable={websiteEnable}
              socialMediaEnable={socialMediaEnable}
              digitalEnable={digitalEnable}
              primaryColor={primaryColor}
              backColor={backColor}
              secondaryColor={secondaryColor}
              mediaArray={mediaArray}
              profileImg={profileImg}
              paymentArray={payments}
              modeId={modeId}
              logoUrl={logoUrl}
              plantId={plantId}
              textColor={primaryColor}
              accentColor={secondaryColor}
              qrImageUrl={qrImageUrl}
              deviceId={deviceUid}
              companyName={profile?.companyName}
              linkVal={deviceUid}
            />
          </Modal.Body>
        </Modal>
        <button
          className="floating-btn-holder"
          type="button"
          onClick={handleShow}
        >
          Click To Preview
        </button>
      </div>
    </div>
  );
};
export default CreateTemplate;
