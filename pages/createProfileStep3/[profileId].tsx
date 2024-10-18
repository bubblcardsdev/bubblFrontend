/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "react-toastify/dist/ReactToastify.css";

import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEventHandler,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Button, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast, ToastContainer } from "react-toastify";
import LoaderScreen from "src/App/components/lottie/lottie";
import EditAddressModal from "src/App/components/Phase2_All_Components/Modals/EditAddressModal";
import EditDigitalModal from "src/App/components/Phase2_All_Components/Modals/EditDigitalModal";
import EditEmailIdModal from "src/App/components/Phase2_All_Components/Modals/EditMailModal";
import EditMobileNumberModal from "src/App/components/Phase2_All_Components/Modals/EditMobileNumberModal";
import EditProfileNameModal from "src/App/components/Phase2_All_Components/Modals/EditProfileNameModal";
import EditSocialModal from "src/App/components/Phase2_All_Components/Modals/EditSocialModal";
import EditWebsiteModal from "src/App/components/Phase2_All_Components/Modals/EditWebsiteModal";
import ViewAddressModal from "src/App/components/Phase2_All_Components/Modals/ViewAddressModal";
import ViewMailModal from "src/App/components/Phase2_All_Components/Modals/ViewMailModal";
import ViewMobileNumberModal from "src/App/components/Phase2_All_Components/Modals/ViewMobileNumberModal";
import ViewWebsiteModal from "src/App/components/Phase2_All_Components/Modals/ViewWebsiteModal";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import FreeTemplateOne from "src/App/components/Phase2_All_Components/Phase2_Templates/Free_Templates/Free_Template_1";
import FreeTemplateTwo from "src/App/components/Phase2_All_Components/Phase2_Templates/Free_Templates/Free_Template_2";
import ProTemplateThree from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_3";
import ProTemplateFour from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_4";
import ProTemplateFive from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_5";
import { CreateProfilePostApi } from "src/App/services/api";
import {
  getProfileId,
  IDeviceBranding,
  IProfile,
} from "src/App/services/createProfileApi";
import {
  getUserPlan,
  IPlanDetail,
} from "src/App/services/myPlan/myPlanServices";
import { chooseTemplate } from "src/App/services/templateApi";
import { getUniqueName, updateUniqueName } from "src/App/services/unique";
import {
  BrandingLogoPostApi,
  ProfileImagePostApi,
} from "src/App/services/upload";
import { MODAL_TYPES, ModalT } from "types/modal";
import { ProfileActionT, ProfileErrorT, ProfileStateT } from "types/profile";

import customCloseButtonImage from "../../images/Phase_2_All_Assets/comman_assets/close.png";
import ProBanner from "../../images/Phase_2_All_Assets/comman_assets/footerBanner 1.png";
import Info from "../../images/Phase_2_All_Assets/comman_assets/information.png";
import Tick from "../../images/Phase_2_All_Assets/create_profile/tick.svg";
import Arrow from "../../images/Phase_2_All_Assets/templatre_edit_page/arrowEdit.svg";
import LinkIcon from "../../images/Phase_2_All_Assets/templatre_edit_page/link_icon.svg";
import Pencil from "../../images/Phase_2_All_Assets/templatre_edit_page/pencil.svg";
import ViewMoreTemplates from "../../images/Phase_2_All_Assets/templatre_edit_page/viewmoreTemplates.svg";
import SmallArrow from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/smallArrow.svg";
import neon from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/template_cover/neon.png";
import opal from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/template_cover/opal.png";
import Quartz from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/template_cover/quatz.png";
import ruby from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/template_cover/ruby.png";
import saphire from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/template_cover/saphire.png";
import UpArrow from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Common/up_white.png";
import template2 from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Template_Preview/FREE TEMP 1/dark version-3.png";
import template1 from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Template_Preview/FREE TEMP 2/117.png";
import template5 from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Template_Preview/PRO TEMP 1/profile 247.png";
import template3 from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Template_Preview/PRO TEMP 2/Template 18.png";
import template4 from "../../src/App/components/Phase2_All_Components/Phase2_Templates/Images/assets_for_profile_templates/Template_Preview/PRO TEMP 3/Template 49.png";
import styles from "./createProfileStep3.module.css";

type ThemeT = "light" | "dark";
type TemplateIdsT = 1 | 2 | 3 | 4 | 5;

const getImageSize = async (imageFile: File | Blob) =>
  new Promise<{ width: number; height: number }>((resolve) => {
    const objectUrl = URL.createObjectURL(imageFile);
    const img = new Image();
    img.onload = function (event: any) {
      const { width, height } = event.target as HTMLImageElement;

      resolve({ width, height });
      URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;
  });

const colorTemplateMap = {
  1: [
    "#9000FF",
    "#1F87FA",
    "#FF00A3",
    "#4BC100",
    "#00BCB6",
    "#FF6700",
    "#2E2E2E",
  ],
  2: [
    "#F53232",
    "#0082E1",
    "#635DD4",
    "#4F4F4F",
    "#FB794A",
    "#1BA64C",
    "#FBC529",
  ],
  3: [
    "#1F87FA",
    "#FF00A3",
    "#4BC100",
    "#9000FF",
    "#00BCB6",
    "#FF6700",
    "#2E2E2E",
  ],
  4: [
    "#8D00D2",
    "#D94A3F",
    "#8D7310",
    "#00B053",
    "#7A6F56",
    "#00787F",
    "#4F4F4F",
  ],
  5: [
    "#aa22ec",
    "#1494a1",
    "#5b99cc",
    "#177efa",
    "#f78e38",
    "#fd8491",
    "#b5e872",
  ],
};

const templateImageMap = {
  1: opal,
  2: ruby,
  3: saphire,
  4: Quartz,
  5: neon,
} as const;

const initialUserProfile: IProfile = {
  id: 18,
  userId: 2,
  Mode: { id: 1, mode: "Contact Card", activeStatus: true },
  ModeId: 1,
  modeId: 1,
  TemplateId: 1,
  Template: {
    id: 1,
  },
  profileName: "ModalTester",
  profileImage: "",
  firstName: "Benny",
  lastName: "",
  designation: "Full Stack Developer",
  companyName: "",
  companyAddress: "",
  shortDescription: "I'm  a passionate developer",
  address: "",
  city: "",
  zipCode: "",
  state: "",
  country: "",
  brandingLogo: "",
  brandingLogoUrl: "",
  brandingFont: "",
  phoneNumberEnable: true,
  emailEnable: true,
  websiteEnable: true,
  socialMediaEnable: true,
  digitalMediaEnable: true,
  qrCodeImage: "",
  createdAt: "2024-02-27T16:16:56.000Z",
  updatedAt: "2024-03-02T11:43:25.000Z",
  UserId: 2,
  DeviceLink: null,
  profilePhoneNumbers: [
    {
      id: 18,
      profileId: 18,
      phoneNumberType: "",
      countryCode: "",
      phoneNumber: "45345435",
      checkBoxStatus: true,
      activeStatus: true,
      ProfileId: 18,
    },
  ],
  profileEmails: [
    {
      id: 18,
      profileId: 18,
      emailId: "kiran008@gmail.com",
      emailType: "",
      checkBoxStatus: true,
      activeStatus: true,
      ProfileId: 18,
    },
  ],
  profileWebsites: [
    {
      id: 18,
      profileId: 18,
      website: "www.google.com",
      websiteType: "",
      checkBoxStatus: true,
      activeStatus: true,
      ProfileId: 18,
    },
  ],
  profileSocialMediaLinks: [
    {
      id: 1,
      profileId: 18,
      profileSocialMediaId: 1,
      socialMediaName: "be",
      enableStatus: true,
      activeStatus: true,
      ProfileId: 18,
    },
  ],
  profileDigitalPaymentLinks: [
    {
      id: 2,
      profileId: 18,
      profileDigitalPaymentsId: 1,
      digitalPaymentLink: "linsk",
      enableStatus: true,
      activeStatus: true,
      ProfileId: 18,
    },
  ],
};

const initialErrorState: ProfileErrorT = Object.keys(initialUserProfile).reduce(
  (acc, fieldName) => {
    if (
      [
        "phoneNumbers",
        "emailIds",
        "websites",
        "socialMediaNames",
        "digitalPaymentLinks",
      ].includes(fieldName)
    ) {
      return { ...acc, [fieldName]: {} };
    }
    return { ...acc, [fieldName]: "" };
  },
  {} as ProfileErrorT
);

function userProfileReducer(
  state: ProfileStateT,
  action: ProfileActionT
): ProfileStateT {
  switch (action.type) {
    case "update":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    case "error":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

// Define the functional component CreateProfileStep1
function CreateProfileStep3() {
  const router = useRouter();
  const [touched, setTouched] = useState(false);

  const [templateId, setTemplateId] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [templateChosen, setTemplateChosen] = useState<TemplateIdsT | null>(1);
  const [isEdit, setEdit] = useState(false);
  const [userName, setUsername] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [profileImage, setProfileImage] = useState<any>("");

  const { profileId: queryProfileId } = router.query;

  const profileId = typeof queryProfileId === "string" ? queryProfileId : "";

  // const { profileId: queryProfileId, deviceLinkId: queryDeviceLinkId } =
  //   router.query;

  // // Ensure queryProfileId and queryDeviceLinkId are strings
  // const profileId = typeof queryProfileId === "string" ? queryProfileId : "";
  // const deviceLinkId =
  //   typeof queryDeviceLinkId === "string" ? queryDeviceLinkId : "";

  const [userProfile, userProfileDispatch] = useReducer(userProfileReducer, {
    data: initialUserProfile,
    error: initialErrorState,
  });

  const [deviceBranding, setDeviceBranding] = useState<null | IDeviceBranding>(
    null
  );
  const [deviceBrands, setDeviceBrands] = useState<IDeviceBranding[]>([]);

  const [dataLoaded, setDataLoaded] = useState(false);

  const [modalType, setModalType] = useState<ModalT>("");
  const [logo, setLogo] = useState<any>();

  const [showTemplate, setShowTemplate] = useState(false);
  const [showSaveExit, setShowSaveExit] = useState(false);
  const [showUserNameModal, setUserNameModal] = useState(false);
  const [showProModal, setShowProModal] = useState(false);
  const [showTemp1, setShowTemp1Modal] = useState(false);
  const [showTemp2, setShowTemp2Modal] = useState(false);
  const [showTemp3, setShowTemp3Modal] = useState(false);
  const [showTemp4, setShowTemp4Modal] = useState(false);
  const [showTemp5, setShowTemp5Modal] = useState(false);
  const [userPlan, setUserPlan] = useState<null | IPlanDetail>(null);
  const colors = colorTemplateMap[templateId];
  const [showArrow, setShowArrow] = useState(false);
  const [deviceLinkId, setDeviceLinkId] = useState<any>();

  const [imageError, setImageError] = useState("");
  const [deviceUidVal, setDeviceUidVal] = useState<any>("");

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function getProfileData() {
    if (profileId) {
      getProfileId({ profileId })
        .then((data) => {
          const {
            profile,
            deviceBranding: deviceBrandsData,
            deviceUid,
            profileImgs: profileImages,
          } = data.data.data;

          const updatedTemplateColors =
            colorTemplateMap[profile.Template.id as TemplateIdsT];

          userProfileDispatch({
            type: "update",
            payload: profile,
          });
          if (deviceUid) {
            setDeviceUidVal(deviceUid);
          }

          const profileImg = {
            square: profileImages.square || "",
            rectangle: profileImages.rectangle || "",
          };

          setLogo(profile.brandingLogoUrl);

          setProfileImage(profileImg);

          // QR code

          setTemplateId(profile.Template.id);
          setTemplateChosen(profile.Template.id);
          setDeviceBrands(deviceBrandsData);
          if (deviceBrandsData) {
            const allDeviceBrandingForTemplateId = deviceBrandsData.filter(
              (brandingData: any) =>
                brandingData.templateId === profile.Template.id &&
                brandingData.DeviceLinkId &&
                brandingData.DeviceLinkId.toString() === deviceLinkId
                  ? deviceLinkId
                  : null
            );

            const deviceBrandingData =
              allDeviceBrandingForTemplateId[
                allDeviceBrandingForTemplateId.length - 1
              ];
            if (deviceBrandingData && updatedTemplateColors[0]) {
              setDeviceBranding({
                ...deviceBrandingData,
                brandingBackGroundColor:
                  deviceBrandingData.brandingBackGroundColor ||
                  updatedTemplateColors[0],
              });
            }
          }

          setDataLoaded(true);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          toast.error("Error fetching profile data");
          router.replace("/bubblProfiles");
          setDataLoaded(false);
        });
    }
  }

  const handleShowTemplate = () => setShowTemplate(true);
  const handleCloseTemplate = () => {
    setShowTemplate(false);
    getProfileData();
  };
  const handleSaveExitShowClose = () => setShowSaveExit(false);
  const handleUserNameModalClose = () => setUserNameModal(false);
  const onTemplateChange = (id: TemplateIdsT) => {
    setTemplateChosen(id);
  };

  // Function to handle input change and update the username state
  const handleUserNameChange = (event: any) => {
    const { value } = event.target;
    const nameRegex = /^[a-zA-Z@#_]+$/;

    const error = !value.trim()
      ? "Username is required"
      : !nameRegex.test(value)
      ? "Invalid username format"
      : "";
    setUserNameError(error);
    setUsername(event.target.value);
  };

  // Dark Light switch function
  const toggleTheme = (theme: ThemeT) => {
    setDeviceBranding((currDeviceBranding) => {
      if (currDeviceBranding) {
        return {
          ...currDeviceBranding,
          darkMode: theme === "dark",
        };
      }
      return currDeviceBranding;
    });
  };

  const handleSaveImage = async ({
    squareImgBlob,
    rectangleImgBlob,
  }: {
    squareImgBlob: Blob;
    rectangleImgBlob: Blob;
  }) => {
    const imgResponse = await ProfileImagePostApi({
      profileId: profileId,
      squareImage: squareImgBlob,
      rectangleImage: rectangleImgBlob,
    });
    const res = imgResponse?.data;
    const profImage = {
      square: res?.data?.profileImageUrl[0].image,
      rectangle: res?.data?.profileImageUrl[1].image,
    };

    setProfileImage(profImage);
  };

  const QrUpload = async (imageQr: Blob) => {
    // const { target } = event;
    // const { files } = target;
    // const ImageQr = files ? files[0] : null;
    const formData = new FormData();

    formData.append("profileId", profileId);
    formData.append("brandingLogo", imageQr);

    const { width, height } = await getImageSize(imageQr);
    if (width > 5000 || height > 5000) {
      const list = new DataTransfer();
      setImageError("Image Size should be 5000x5000 or smaller");
      return;
    }
    setImageError("");
    const imgResponse = await BrandingLogoPostApi(formData);
    const res = imgResponse?.data;

    setLogo(res.brandingLogoUrl);
  };

  const handleSave = () => {
    const {
      id,
      Mode,
      ModeId,
      modeId,
      templateId: dummyTemplateId,
      TemplateId,
      Template,
      userId,
      brandingLogo,
      brandingLogoUrl,
      qrCodeImage,
      createdAt,
      updatedAt,
      UserId,
      DeviceLink,
      profilePhoneNumbers,
      profileEmails,
      profileWebsites,
      profileSocialMediaLinks,
      profileDigitalPaymentLinks,
      profileName,
      ...payload
    } = userProfile.data;
    const updateData = {
      ...payload,
      deviceLinkId: Number(deviceLinkId) || null,
      templateId,
      profileId: id.toString(),
      darkMode: deviceBranding ? deviceBranding.darkMode : false,
      phoneNumbers: profilePhoneNumbers.map((phone) => {
        const {
          id: phoneNumberId,
          profileId: profileID,
          ProfileId,
          ...newData
        } = phone;
        return {
          ...newData,
          phoneNumberId,
        };
      }),
      emailIds: (profileEmails || []).map((email) => {
        const {
          id: emailIdNumber,
          profileId: profileID,
          ProfileId,
          ...newEmail
        } = email;
        return { ...newEmail, emailIdNumber };
      }),
      websites: (profileWebsites || []).map((website) => {
        const {
          id: websiteId,
          profileId: profileID,
          ProfileId,
          ...newWebsite
        } = website;
        return { ...newWebsite, websiteId };
      }),
      socialMediaNames: (profileSocialMediaLinks || []).map(
        (socialMediaLink) => {
          const {
            id: profileSocialMediaLinkId,
            profileId: profileID,
            ProfileId,
            ...newSocialMediaLink
          } = socialMediaLink;
          return { ...newSocialMediaLink, profileSocialMediaLinkId };
        }
      ),

      digitalPaymentLinks: (profileDigitalPaymentLinks || []).map(
        (digitalLink) => {
          const {
            id: profileDigitalPaymentLinkId,
            profileId: profileID,
            ProfileId,
            ...newDigitalLink
          } = digitalLink;
          return { ...newDigitalLink, profileDigitalPaymentLinkId };
        }
      ),

      brandingBackGroundColor: deviceBranding?.brandingBackGroundColor,
    };

    // console.log(updateData, "fhfh");

    const apiData = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      address: payload.address,
      brandingAccentColor: "",
      brandingFont: payload.brandingFont,
      brandingFontColor: "",
      city: payload.city,
      state: payload.state,
      country: payload.country,
      designation: payload.designation,
      zipCode: payload.zipCode,
      shortDescription: payload.shortDescription,
      digitalMediaEnable: payload.digitalMediaEnable,
      emailEnable: payload.emailEnable,
      phoneNumberEnable: payload.phoneNumberEnable,
      socialMediaEnable: payload.socialMediaEnable,
      companyAddress: payload.companyAddress,
      companyName: payload.companyName,
      websiteEnable: payload.websiteEnable,
      deviceLinkId: Number(deviceLinkId) || null,
      templateId,
      profileId: id.toString(),
      darkMode: deviceBranding ? deviceBranding.darkMode : false,
      phoneNumbers: profilePhoneNumbers.map((phone) => {
        const {
          id: phoneNumberId,
          profileId: profileID,
          ProfileId,
          ...newData
        } = phone;
        return {
          ...newData,
          phoneNumberId,
        };
      }),
      emailIds: (profileEmails || []).map((email) => {
        const {
          id: emailIdNumber,
          profileId: profileID,
          ProfileId,
          ...newEmail
        } = email;
        return { ...newEmail, emailIdNumber };
      }),
      websites: (profileWebsites || []).map((website) => {
        const {
          id: websiteId,
          profileId: profileID,
          ProfileId,
          ...newWebsite
        } = website;
        return { ...newWebsite, websiteId };
      }),
      socialMediaNames: (profileSocialMediaLinks || []).map(
        (socialMediaLink) => {
          const {
            id: profileSocialMediaLinkId,
            profileId: profileID,
            ProfileId,
            ...newSocialMediaLink
          } = socialMediaLink;
          return { ...newSocialMediaLink, profileSocialMediaLinkId };
        }
      ),
      digitalPaymentLinks: (profileDigitalPaymentLinks || []).map(
        (digitalLink) => {
          const {
            id: profileDigitalPaymentLinkId,
            profileId: profileID,
            ProfileId,
            ...newDigitalLink
          } = digitalLink;
          return { ...newDigitalLink, profileDigitalPaymentLinkId };
        }
      ),

      brandingBackGroundColor: deviceBranding?.brandingBackGroundColor,
    };

    CreateProfilePostApi(apiData).then((res) => {
      if (res && res.data.success) {
        toast.success("Saved and showing preview!", { autoClose: 2000 });
      } else {
        toast.error("Failed to Save");
        console.log(res?.data.error || "Error on getting response");
      }
    });
  };

  const inValid = (
    ["firstName", "designation", "shortDescription"] as const
  ).some((fieldName) => userProfile.error[fieldName] !== "");

  const handleSaveAndExit = () => {
    setShowSaveExit(true);
  };
  const handleUserNameModal = () => {
    setUserNameModal(true);
  };
  const handleEditClickTemplate = () => {
    handleShowTemplate();
  };

  const saveAndExit = () => {
    handleSave();
    router.push("/bubblProfiles");
  };

  const handleCopyClick = () => {
    // Construct the text to copy
    const textToCopy = `Bubbl.cards/${userName}`;

    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Copied to clipboard!", { autoClose: 2000 });
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        toast.error("Failed to copy to clipboard.", { autoClose: 2000 });
      });
  };
  const handleUserNameSave = () => {
    setTouched(true);

    const error = !userName.trim() ? "Username is required" : "";
    setUserNameError(error);
    if (!error) {
      updateUniqueName({
        uniqueName: userName,
        deviceLinkId: userProfile.data.DeviceLink?.id || null,
        profileId: profileId,
      }).then((data) => {
        if (data.success) {
          toast.success("Username saved!", { autoClose: 2000 });
        } else {
          toast.error(data.message || "Failed to copy to clipboard.", {
            autoClose: 2000,
          });
          setUsername("");
        }
      });
    }
  };

  useEffect(() => {
    const handleBackButton = (event: any) => {
      event.preventDefault();
      router.push("/");
    };

    // Add event listener for the "popstate" event
    window.addEventListener("popstate", handleBackButton);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [router]);

  useEffect(() => {
    const deviceLinkIds = localStorage.getItem("deviceLinkId");
    setDeviceLinkId(deviceLinkIds);
    getProfileData();

    if (deviceLinkId) {
      getUniqueName({
        deviceLinkId: deviceLinkIds,
      }).then((data) => {
        if (data.success) {
          setUsername(data.name.uniqueName);
        }
      });
    }
  }, [profileId, templateId, deviceLinkId, showTemplate]);

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
  const handleUserName = (e: any) => {};

  let modal: React.ReactNode = null;

  const hideModal = () => setModalType(MODAL_TYPES.empty);

  switch (modalType) {
    case MODAL_TYPES.empty:
      modal = null;
      break;
    case MODAL_TYPES.editProfile:
      modal = (
        <EditProfileNameModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.mobileNumberView:
      modal = (
        <ViewMobileNumberModal
          onHide={hideModal}
          userProfile={userProfile}
          getAllProfile={undefined}
        />
      );
      break;
    case MODAL_TYPES.mobileNumberEdit:
      modal = (
        <EditMobileNumberModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.emailIdView:
      modal = (
        <ViewMailModal
          onHide={hideModal}
          userProfile={userProfile}
          getAllProfile={undefined}
        />
      );
      break;
    case MODAL_TYPES.emailIdEdit:
      modal = (
        <EditEmailIdModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.websiteView:
      modal = (
        <ViewWebsiteModal
          onHide={hideModal}
          userProfile={userProfile}
          getAllProfile={undefined}
        />
      );
      break;
    case MODAL_TYPES.websiteEdit:
      modal = (
        <EditWebsiteModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.addressView:
      modal = <ViewAddressModal onHide={hideModal} userProfile={userProfile} />;
      break;
    case MODAL_TYPES.addressEdit:
      modal = (
        <EditAddressModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.socialEdit:
      modal = (
        <EditSocialModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    case MODAL_TYPES.digitalEdit:
      modal = (
        <EditDigitalModal
          onHide={hideModal}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
        />
      );
      break;
    default:
      break;
  }

  let templateNode = null;
  const deviceUpdateId = deviceLinkId != null ? deviceLinkId : "";

  switch (templateId) {
    case 1:
      templateNode = (
        <FreeTemplateOne
          edit={isEdit}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
          setModalType={setModalType}
          deviceBranding={deviceBranding}
          profileImage={profileImage}
          handleSave={handleSaveImage}
          handleQrSave={QrUpload}
          qrImage={logo}
          userName={userName || deviceUidVal?.deviceUid}
          getAllProfile={undefined}
          modeId={undefined}
          imageError={imageError}
          deviceUid={deviceUpdateId}
          deviceId={deviceUpdateId}
        />
      );

      break;
    case 2:
      templateNode = (
        <FreeTemplateTwo
          edit={isEdit}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
          setModalType={setModalType}
          deviceBranding={deviceBranding}
          profileImage={profileImage}
          handleSave={handleSaveImage}
          handleQrSave={QrUpload}
          qrImage={logo}
          userName={userName || deviceUidVal?.deviceUid}
          getAllProfile={undefined}
          modeId={undefined}
          imageError={imageError}
          deviceUid={deviceUpdateId}
          deviceId={deviceUpdateId}
        />
      );
      break;
    case 3:
      templateNode = (
        <ProTemplateThree
          edit={isEdit}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
          setModalType={setModalType}
          deviceBranding={deviceBranding}
          profileImage={profileImage}
          handleSave={handleSaveImage}
          handleQrSave={QrUpload}
          qrImage={logo}
          userName={userName || deviceUidVal?.deviceUid}
          getAllProfile={undefined}
          modeId={undefined}
          imageError={imageError}
          deviceUid={deviceUpdateId}
          deviceId={deviceUpdateId}
        />
      );
      break;
    case 4:
      templateNode = (
        <ProTemplateFour
          edit={isEdit}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
          setModalType={setModalType}
          deviceBranding={deviceBranding}
          profileImage={profileImage}
          handleSave={handleSaveImage}
          handleQrSave={QrUpload}
          qrImage={logo}
          userName={userName || deviceUidVal?.deviceUid}
          getAllProfile={undefined}
          modeId={undefined}
          imageError={imageError}
          deviceUid={deviceUpdateId}
          deviceId={deviceUpdateId}
        />
      );
      break;
    case 5:
      templateNode = (
        <ProTemplateFive
          edit={isEdit}
          userProfile={userProfile}
          userProfileDispatch={userProfileDispatch}
          setModalType={setModalType}
          deviceBranding={deviceBranding}
          profileImage={profileImage}
          handleSave={handleSaveImage}
          handleQrSave={QrUpload}
          qrImage={logo}
          userName={userName || deviceUidVal?.deviceUid}
          getAllProfile={undefined}
          modeId={undefined}
          imageError={imageError}
          deviceUid={deviceUpdateId}
          deviceId={deviceUpdateId}
        />
      );
      break;
    default:
      break;
  }
  // }

  return (
    <>
      {modal}
      {/* Choose Template Modal */}
      <Modal
        show={showTemplate}
        onHide={handleCloseTemplate}
        className={styles.BgModal}
        backdrop="static"
        centered
      >
        <Modal.Body>
          <div className={styles.step2DetailsTemplate}>
            <h2>Select Template</h2>
            <div className={styles.FreeTemplate}>
              <h3>Free Templates</h3>
              <div className={styles.CoverContainer}>
                <div>
                  <div
                    className={`${styles.image_cover} ${
                      templateChosen === 1 ? styles.active_Card : ""
                    }`}
                    onClick={() => onTemplateChange(1)}
                  >
                    <NextImage src={opal} alt="cover" width={72} height={72} />
                    <div>
                      <p
                        onClick={() => setShowTemp1Modal(true)}
                        className={styles.buttonPreview}
                      >
                        Preview
                      </p>
                    </div>
                  </div>
                  <h6 className={styles.CoverHead}>Opal</h6>
                </div>
                <div>
                  <div
                    className={`${styles.image_cover} ${
                      templateChosen === 2 ? styles.active_Card : ""
                    }`}
                    onClick={() => onTemplateChange(2)}
                  >
                    <NextImage src={ruby} alt="cover" width={72} height={72} />
                    <div>
                      <p
                        className={styles.buttonPreview}
                        onClick={() => setShowTemp2Modal(true)}
                      >
                        Preview
                      </p>
                    </div>
                  </div>
                  <h6 className={styles.CoverHead}>Ruby</h6>
                </div>
              </div>

              <div className={styles.line} />
            </div>

            <div className={styles.ProTemplate}>
              <div className={styles.ProTemplateHead}>
                <h3>Pro Templates</h3>
                <h6>
                  Subscribe to Bubbl PRO <Link href="/myPlanPage">Try now</Link>
                </h6>
              </div>
              <div
                className={styles.BlurEffect}
                style={{
                  opacity: userPlan?.planId === 1 ? 0.3 : undefined,
                }}
              >
                <div className={styles.CoverContainer_Pro}>
                  <div>
                    <div
                      className={`${styles.image_cover} ${
                        templateChosen === 3 ? styles.active_Card : ""
                      }`}
                      onClick={() => {
                        if (userPlan?.planId === 1) {
                          return;
                        }
                        onTemplateChange(3);
                      }}
                    >
                      <NextImage
                        src={saphire}
                        alt="cover"
                        width={72}
                        height={72}
                      />
                      <div>
                        <p
                          className={styles.buttonPreview}
                          onClick={() => setShowTemp3Modal(true)}
                        >
                          Preview
                        </p>
                      </div>
                    </div>
                    <h6 className={styles.CoverHead}>Saphire</h6>
                  </div>
                  <div>
                    <div
                      className={`${styles.image_cover} ${
                        templateChosen === 4 ? styles.active_Card : ""
                      }`}
                      onClick={() => {
                        if (userPlan?.planId === 1) {
                          return;
                        }
                        onTemplateChange(4);
                      }}
                    >
                      <NextImage
                        src={Quartz}
                        alt="cover"
                        width={72}
                        height={72}
                      />
                      <div>
                        <p
                          className={styles.buttonPreview}
                          onClick={() => setShowTemp4Modal(true)}
                        >
                          Preview
                        </p>
                      </div>
                    </div>
                    <h6 className={styles.CoverHead}>Quartz</h6>
                  </div>
                  <div>
                    <div
                      className={`${styles.image_cover} ${
                        templateChosen === 5 ? styles.active_Card : ""
                      }`}
                      onClick={() => {
                        if (userPlan?.planId === 1) {
                          return;
                        }
                        onTemplateChange(5);
                      }}
                    >
                      <NextImage
                        src={neon}
                        alt="cover"
                        width={72}
                        height={72}
                      />
                      <div>
                        <p
                          className={styles.buttonPreview}
                          onClick={() => setShowTemp5Modal(true)}
                        >
                          Preview
                        </p>
                      </div>
                    </div>
                    <h6 className={styles.CoverHead}>Neon</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ActionModal_Image}>
              <Button
                onClick={handleCloseTemplate}
                className={styles.ModalClose}
              >
                Close
              </Button>
              <Button
                onClick={async () => {
                  if (templateChosen) {
                    const updateTemplate = {
                      templateNameId: templateChosen.toString(),
                      profileId: userProfile.data.id,
                    } as {
                      templateNameId: string;
                      profileId: number;
                      deviceId?: number;
                    };
                    const deviceLinkIdVal = deviceLinkId;
                    if (deviceLinkIdVal) {
                      updateTemplate.deviceId = deviceLinkId;
                    }

                    const updateTemplatePromise =
                      chooseTemplate(updateTemplate);

                    setTemplateId(templateChosen);

                    const profileData = await getProfileId({ profileId });

                    const activeTemplateBrandingAll =
                      profileData?.data?.data?.deviceBranding.filter(
                        (dataVal: any) =>
                          dataVal.templateId === templateChosen &&
                          dataVal.DeviceLinkId.toString() === deviceLinkId
                      );

                    const activeTemplateBranding =
                      activeTemplateBrandingAll[
                        activeTemplateBrandingAll.length - 1
                      ];

                    const newActiveColors =
                      activeTemplateBranding?.brandingBackGroundColor
                        ? activeTemplateBranding?.brandingBackGroundColor
                        : colorTemplateMap[templateChosen][0];

                    updateTemplatePromise.then((data) => {
                      if (data && data.success) {
                        const {
                          id,
                          Mode,
                          ModeId,
                          modeId,
                          templateId: dummyTemplateId,
                          TemplateId,
                          Template,
                          userId,
                          brandingLogo,
                          brandingLogoUrl,
                          qrCodeImage,
                          createdAt,
                          updatedAt,
                          UserId,
                          DeviceLink,
                          profilePhoneNumbers,
                          profileEmails,
                          profileWebsites,
                          profileSocialMediaLinks,
                          profileDigitalPaymentLinks,
                          profileName,
                          ...payload
                        } = userProfile.data;

                        const brandingInfo = deviceBrands.find(
                          (device) => device.templateId === templateChosen
                        );

                        const apiData = {
                          firstName: payload.firstName,
                          lastName: payload.lastName,
                          address: payload.address,
                          brandingAccentColor: "",
                          brandingFont: payload.brandingFont,
                          brandingFontColor: "",
                          city: payload.city,
                          state: payload.state,
                          country: payload.country,
                          designation: payload.designation,
                          zipCode: payload.zipCode,
                          shortDescription: payload.shortDescription,
                          digitalMediaEnable: payload.digitalMediaEnable,
                          emailEnable: payload.emailEnable,
                          phoneNumberEnable: payload.phoneNumberEnable,
                          socialMediaEnable: payload.socialMediaEnable,
                          companyAddress: payload.companyAddress,
                          companyName: payload.companyName,
                          websiteEnable: payload.websiteEnable,
                          deviceLinkId: Number(deviceLinkId) || null,
                          templateId: templateChosen,
                          profileId: id.toString(),
                          darkMode: deviceBranding
                            ? deviceBranding.darkMode
                            : false,
                          phoneNumbers: profilePhoneNumbers.map((phone) => {
                            const {
                              id: phoneNumberId,
                              profileId: profileID,
                              ProfileId,
                              ...newData
                            } = phone;
                            return {
                              ...newData,
                              phoneNumberId,
                            };
                          }),
                          emailIds: (profileEmails || []).map((email) => {
                            const {
                              id: emailIdNumber,
                              profileId: profileID,
                              ProfileId,
                              ...newEmail
                            } = email;
                            return { ...newEmail, emailIdNumber };
                          }),
                          websites: (profileWebsites || []).map((website) => {
                            const {
                              id: websiteId,
                              profileId: profileID,
                              ProfileId,
                              ...newWebsite
                            } = website;
                            return { ...newWebsite, websiteId };
                          }),
                          socialMediaNames: (profileSocialMediaLinks || []).map(
                            (socialMediaLink) => {
                              const {
                                id: profileSocialMediaLinkId,
                                profileId: profileID,
                                ProfileId,
                                ...newSocialMediaLink
                              } = socialMediaLink;
                              return {
                                ...newSocialMediaLink,
                                profileSocialMediaLinkId,
                              };
                            }
                          ),
                          digitalPaymentLinks: (
                            profileDigitalPaymentLinks || []
                          ).map((digitalLink) => {
                            const {
                              id: profileDigitalPaymentLinkId,
                              profileId: profileID,
                              ProfileId,
                              ...newDigitalLink
                            } = digitalLink;
                            return {
                              ...newDigitalLink,
                              profileDigitalPaymentLinkId,
                            };
                          }),

                          brandingBackGroundColor: newActiveColors,
                        };

                        CreateProfilePostApi(apiData).then((res) => {
                          if (res && res.data.success) {
                            toast.success("Saved and showing preview!", {
                              autoClose: 2000,
                            });
                          } else {
                            toast.error("Failed to Save");
                            console.log(
                              res?.data.error || "Error on getting response"
                            );
                          }
                        });
                      } else {
                        toast.error("Failed to Save");
                        console.log(data?.error || "Error on getting response");
                      }
                    });
                  }

                  handleCloseTemplate();
                }}
                className={styles.ModalSave}
              >
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Save and Exit */}
      <Modal
        show={showSaveExit}
        onHide={handleSaveExitShowClose}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSection}>
            <div className={styles.ModalSectionDetails}>
              <div>
                {/* <Image src={Edit} alt="Confirm" /> */}
                <NextImage src={Info} alt="Info" />
                <p>Are you sure you want to save and exit?</p>
              </div>
            </div>
            <div className={styles.ActionModal}>
              <Button
                onClick={handleSaveExitShowClose}
                className={styles.ModalClose}
              >
                Close
              </Button>
              <Button className={styles.ModalSave} onClick={saveAndExit}>
                Sure!
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Subscribe to Pro */}
      <Modal
        show={showProModal}
        onHide={() => setShowProModal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowProModal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <div>
                <NextImage
                  src={ProBanner}
                  alt="Pro Banner"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className={styles.ProText}>
                <h2>Subscribe to</h2>
                <h3>
                  Bubbl <span>Pro</span>
                </h3>
                <Button
                  className={styles.ModalSave}
                  onClick={() => router.push("/myPlanPage")}
                >
                  Try Now
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Create Username modal for responsive */}
      <Modal
        show={showUserNameModal}
        onHide={handleUserNameModalClose}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div
            className={styles.step2DetailsTemplate}
            style={{
              opacity: userPlan?.planId === 1 ? 0.8 : undefined,
            }}
          >
            <h2>Edit User Name</h2>
            <div className={styles.UsernameResp}>
              <div className={styles.input_container}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  maxLength={20}
                  value={userName}
                  onChange={handleUserNameChange}
                  disabled={userPlan?.planId === 1}
                />
                <span className={styles.tick}>
                  <NextImage src={Tick} alt="Tick" />
                </span>
              </div>
              {userNameError && <p className={styles.error}>{userNameError}</p>}

              {/* {touched && !userName.trim() && (
                <p className={styles.error}>{userNameError}</p>
              )} */}

              <h6>Bubbl.cards</h6>
              <div className={styles.CopySection}>
                <div className={styles.linkCopy} onClick={handleCopyClick}>
                  <p>
                    bubbl.cards/<span>{userName}</span>
                  </p>
                </div>
                <div className={styles.LinkImg} onClick={handleCopyClick}>
                  <NextImage src={LinkIcon} alt="link" width={15} height={15} />
                </div>
              </div>
              <div className={styles.profileBtnSave}>
                <div className={styles.userNameSave}>
                  <a
                    onClick={handleUserNameModalClose}
                    className={styles.ModalCloseResp}
                  >
                    Close
                  </a>
                  <Button
                    type="button"
                    onClick={() => {
                      if (userPlan?.planId === 1) {
                        setShowProModal(true);
                        return;
                      }
                      handleUserNameSave();
                    }}
                    disabled={userPlan?.planId === 1}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Template 1 preview */}
      <Modal
        show={showTemp1}
        onHide={() => setShowTemp1Modal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowTemp1Modal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <NextImage src={template1} alt="template1" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Template 2 preview */}
      <Modal
        show={showTemp2}
        onHide={() => setShowTemp2Modal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowTemp2Modal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <NextImage src={template2} alt="template2" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Template 3 preview */}
      <Modal
        show={showTemp3}
        onHide={() => setShowTemp3Modal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowTemp3Modal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <NextImage src={template3} alt="template2" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Template 4 preview */}
      <Modal
        show={showTemp5}
        onHide={() => setShowTemp5Modal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowTemp5Modal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <NextImage src={template5} alt="template2" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Template 5 preview */}
      <Modal
        show={showTemp4}
        onHide={() => setShowTemp4Modal(false)}
        className={styles.BgModal}
        centered
        backdrop="static"
      >
        <Modal.Body>
          <div className={styles.ModalSectionPro}>
            <div
              className={styles.ModalSectionProClose}
              onClick={() => setShowTemp4Modal(false)}
            >
              <NextImage src={customCloseButtonImage} alt="close" />
            </div>

            <div className={styles.ModalSectionDetailsPro}>
              <NextImage src={template4} alt="template5" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Start of the section for creating profile */}
      <LoaderScreen>
        <section className={styles.createProfileSection}>
          <div className={styles.createProfilePage}>
            <div className={styles.RespNavBar}>
              {/* Navigation component */}
              <Navigation />
            </div>

            {/* Main content of Edit Template */}
            <div className={styles.desktopTemplateSelection}>
              <Col xl={4} className={styles.RespBg}>
                {/* {showLeftColumn && ( */}
                <div className={styles.leftColumnWrapper}>
                  <div className={styles.left_template_details_1}>
                    <div className={styles.CustomSelection}>
                      <div className={styles.themeSelection}>
                        {templateId !== 5 ? (
                          <span
                            className={`${styles.lightThemes} ${
                              deviceBranding && !deviceBranding.darkMode
                                ? styles.active
                                : ""
                            }`}
                            onClick={() => toggleTheme("light")}
                          >
                            Light
                          </span>
                        ) : (
                          ""
                        )}
                        {/* onClick={handlePro} */}
                        <div>
                          <span
                            className={`${styles.darkThemes} ${
                              deviceBranding && !deviceBranding.darkMode
                                ? styles.active
                                : ""
                            }`}
                            onClick={() => {
                              if (userPlan?.planId === 1) {
                                setShowProModal(true);
                                return;
                              }
                              toggleTheme("dark");
                            }}
                          >
                            Dark
                          </span>
                        </div>
                      </div>

                      <div className={styles.StyleColor}>
                        <h2>Style</h2>
                        <div className={styles.ColorCode}>
                          {colors.map((color) => (
                            <Button
                              key={color}
                              className={styles.color1}
                              style={
                                isEdit
                                  ? { backgroundColor: color }
                                  : {
                                      cursor: "not-allowed",
                                      backgroundColor: color,
                                      opacity: 0.5,
                                    }
                              }
                              onClick={() => {
                                if (isEdit) {
                                  setDeviceBranding(
                                    (currDeviceBranding) =>
                                      currDeviceBranding && {
                                        ...currDeviceBranding,
                                        brandingBackGroundColor: color,
                                      }
                                  );
                                } else {
                                  toast.info(
                                    "Click on 'Edit Template' to enable ",
                                    {
                                      position: toast.POSITION.TOP_RIGHT,
                                      autoClose: 2000,
                                    }
                                  );
                                }
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.chooseTemplate}>
                      <h3>Choose Template</h3>
                      <div className={styles.ChooseTemplateDetails}>
                        <div className={styles.templateSelect}>
                          <NextImage
                            src={templateImageMap[templateId]}
                            alt="Cover Image"
                            width={59}
                            height={59}
                          />
                        </div>
                        <div
                          className={styles.viewMoreButton}
                          onClick={handleEditClickTemplate}
                        >
                          <div>
                            <NextImage
                              src={ViewMoreTemplates}
                              alt="ViewMoreTemplates"
                              width={64}
                              height={64}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Responsive */}
                  <div className={styles.ActionResponsive}>
                    <div
                      onClick={() => {
                        if (userPlan?.planId === 1) {
                          setShowProModal(true);
                        }
                      }}
                    >
                      <Button
                        onClick={() => {
                          if (userPlan?.planId === 1) {
                            setShowProModal(true);
                            return;
                          }
                          handleUserNameModal();
                        }}
                      >
                        Edit user name&nbsp;
                        <NextImage src={SmallArrow} alt="Cover Image" />
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          if (userPlan?.planId === 1) {
                            setShowProModal(true);
                            return;
                          }
                          setModalType("editProfile");
                        }}
                      >
                        Edit profile name&nbsp;
                        <NextImage src={SmallArrow} alt="Cover Image" />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.ChooseTemplateDetailsDown}>
                    <div className={styles.save}>
                      <Button onClick={handleSaveAndExit}>Save and Exit</Button>
                    </div>
                    <div className={styles.Edit}>
                      <Button
                        onClick={
                          isEdit
                            ? () => {
                                handleSave();
                                setEdit(false);
                              }
                            : () => {
                                setEdit(true);
                                toast.info("You're now in edit mode!", {
                                  position: toast.POSITION.TOP_RIGHT,
                                  autoClose: 2000,
                                });
                              }
                        }
                        disabled={inValid}
                      >
                        {isEdit ? (
                          "Save & Preview"
                        ) : (
                          <>
                            <NextImage src={Pencil} alt="pencil" />
                            &nbsp;Edit Template
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <div
                    className={styles.ChooseTemplateDetailsEdit}
                    onClick={() => {
                      if (userPlan?.planId === 1) {
                        setShowProModal(true);
                        return;
                      }
                      setModalType("editProfile");
                    }}
                  >
                    <div>
                      <p>Edit profile name for your device </p>
                    </div>
                    <div>
                      <NextImage src={Arrow} alt="Arrow" />
                    </div>
                  </div>

                  <div
                    className={styles.ChooseTemplateDetailsUserName}
                    style={{
                      opacity: userPlan?.planId === 1 ? 0.4 : undefined,
                    }}
                  >
                    <div
                      className={styles.ChooseTemplateDetailsUserNameDetails}
                    >
                      <h5>Create a user name </h5>

                      <div
                        className={styles.input_container}
                        onClick={() => {
                          if (userPlan?.planId === 1) {
                            setShowProModal(true);
                          }
                        }}
                      >
                        <input
                          type="text"
                          placeholder="Enter your name"
                          maxLength={20}
                          value={userName}
                          onChange={handleUserNameChange}
                          disabled={userPlan?.planId === 1}
                        />
                        <span className={styles.tick}>
                          <NextImage src={Tick} alt="Tick" />
                        </span>
                      </div>
                      {userNameError && (
                        <p className={styles.error}>{userNameError}</p>
                      )}

                      <h6>Bubbl.cards</h6>
                      <div className={styles.CopySection}>
                        <div
                          className={styles.linkCopy}
                          onClick={handleCopyClick}
                        >
                          <p>
                            bubbl.cards/<span>{userName}</span>
                          </p>
                        </div>
                        <div
                          className={styles.LinkImg}
                          onClick={handleCopyClick}
                        >
                          <NextImage
                            src={LinkIcon}
                            alt="link"
                            width={15}
                            height={15}
                          />
                        </div>
                      </div>
                      <div className={styles.profileBtnSave}>
                        <div className={styles.userNameSave}>
                          <Button
                            type="button"
                            onClick={() => {
                              if (userPlan?.planId === 1) {
                                setShowProModal(true);
                                return;
                              }
                              handleUserNameSave();
                            }}
                            disabled={userPlan?.planId === 1}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* )} */}
                {/* <button onClick={() => setShowLeftColumn(!showLeftColumn)}>
                  {showLeftColumn ? "Hide" : "Show"} Left Column
                </button> */}
              </Col>

              <Col xl={5} className={styles.template_All}>
                {templateNode}
              </Col>
            </div>
          </div>
          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>
          {/* Up Arrow */}
          {showArrow && (
            <div className={styles.upArrow} onClick={scrollToTop}>
              <NextImage src={UpArrow} alt="upArrow" width={20} height={20} />
            </div>
          )}
          {/* Toast container component */}
          <ToastContainer />
        </section>
      </LoaderScreen>
    </>
  );
}

// Export the component as the default export
export default CreateProfileStep3;
