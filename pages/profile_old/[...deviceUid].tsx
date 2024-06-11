/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import FileSaver from "file-saver";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LeadGenerationForm from "src/App/components/Modes/LeadForm/leadGenerationForm";
// Temp8
import TemplateEightBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateEight/templateEightBlack";
import TemplateEightLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateEight/templateEightLite";
// Temp5
import TemplateFiveBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFive/templateFiveBlack";
import TemplateFiveLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFive/templateFiveLite";
// Temp4
import TemplateFourBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFour/templateFourBlack";
import TemplateFourLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFour/templateFourLite";
// Temp1
import TemplateOneBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateOne/templateOneBlack";
import TemplateOneLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateOne/templateOneLite";
// Temp7
import TemplateSevenBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSeven/templateSevenBlackNew";
import TemplateSevenLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSeven/templateSevenLiteNew";
// Temp6
import TemplateSixBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSix/templatesSixBlack";
import TemplateSixLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSix/templateSixLite";
// Temp3
import TemplateThreeBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateThree/TemplateThreeBlack";
import TemplateThreeLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateThree/TemplateThreeLite";
// Temp2
import TemplateTwoBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateTwo/templateTwoBlack";
import TemplateTwoLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateTwo/templateTwoLite";
// Api
import { getAccessToken } from "src/App/helpers/local-storage";
import { getProfileByDevice } from "src/App/services/api";
import { getDirectUrlMode } from "src/App/services/modes";
import { PostTapDetails } from "src/App/services/tapApi";
import axios from "axios";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import { getImageUrl } from "src/App/services/getImage";
import SaveVCFContact from "src/App/helpers/saveContactHelper";
import RegisterPage from "../register/index";

export default function Profile() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [emailId, setEmailId] = useState<any>("");
  const [website, setWebsite] = useState([]);
  const [contacts, setContacts] = useState({
    city: "",
    country: "",
    state: "",
    address: "",
  });
  const [websiteType, setWebsiteType] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileEnable, setMobileEnable] = useState(true);
  const [emailEnable, setEmailEnable] = useState(true);
  const [websiteEnable, setWebsiteEnable] = useState(true);
  const [socialMediaEnable, setSocialMediaEnable] = useState(true);
  const [digitalEnable, setDigitalEnable] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");
  const [backColor, setBackColor] = useState("");
  const [profileImg, setProfileImg] = useState<{
    square: string;
    rectangle: string;
  } | null>(null);
  const [mediaArray, setMediaArray] = useState([]);
  const [paymentArray, setPaymentArray] = useState([]);
  const [deviceIdVal, setDeviceIdVal] = useState<any>();
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [twiceVal, setTwiceVal] = useState(false);

  const [claimLink, setClaimLink] = useState<any>("");
  const [modeId, setModeId] = useState();
  const [planId, setPlanId] = useState<any>();
  const [profileId, setProfileId] = useState<any>();
  // state values for lead form

  const [leadFormShow, setLeadFormShow] = useState<boolean>(false);
  const [leadValues, setLeadValues] = useState<any>();
  const [getUrlValue, setGetUrlValue] = useState<any>();

  const [template, setTemplate] = useState(1);
  const [page, setPage] = useState("");
  const [deviceValId, setDeviceValId] = useState();

  const [isDownloading, setIsDownloading] = useState(false);

  const work = "";

  const getURLFunction = async (id: number, modeVal: any) => {
    const urlObj = {
      deviceId: id,
    };
    if (modeVal === 3) {
      const urlResponse = await getDirectUrlMode(urlObj);
      setGetUrlValue(urlResponse?.data?.modeUrl?.url);
    }
  };

  const getDeviceIdFromStorage = () => {
    const token = getAccessToken();

    const numberVal = router?.query?.deviceUid
      ? router?.query?.deviceUid[0]
      : null;
    if (numberVal !== null) {
      localStorage.setItem("deviceNumber", numberVal);
    }
    if (token !== null) {
      router.push("/createProfile");
    }
  };
  const tapApiFunction = async () => {
    if (!twiceVal) {
      setTwiceVal(true);
      const tapId = router?.query?.deviceUid
        ? router?.query?.deviceUid[0]
        : null;
      if (tapId !== null) {
        localStorage.setItem("deviceNumber", tapId);
      }
      const tapObj = {
        deviceId: tapId,
        clickAction: "1",
      };
      const tapResponse = await PostTapDetails(tapObj);
    }
  };

  const handleClick = async (
    phoneNumber: any,
    profileImg: any,
    deviceIdVal: any,
    lastName: any,
    firstName: any,
    companyName: any,
    designation: any,
    emailId: any,
    website: any,
    state: any,
    city: any,
    address: any,
    country: any,
    deviceUid: any
  ) => {
    const vcfdata = await SaveVCFContact(
      firstName,
      lastName,
      companyName,
      designation,
      phoneNumber,
      profileImg,
      contacts,
      mediaArray,
      website,
      emailId,
      deviceValId,
      state,
      city,
      address,
      country,
      deviceUid
    );
    const file = new Blob([vcfdata], { type: "text/vcard" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "contact.vcf");
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    setIsDownloading(false);
  };

  const setProfileByDevice = async () => {
    const deviceId = router?.query?.deviceUid
      ? router?.query?.deviceUid[0]
      : null;
    setDeviceIdVal(deviceId);
    const deviceValue = deviceId;

    let newUrl = "";
    let newFirstName = firstName?.replace(/\s/g, "");
    let newLastName = lastName?.replace(/\s/g, "");
    if (claimLink === null || claimLink === undefined) {
      if (
        !window.location.pathname.includes(`/${newFirstName}${newLastName}`)
      ) {
        newUrl = `${window.location.pathname}/${newFirstName}${newLastName}`;
      }

      if (window.location.pathname.toString() !== newUrl && newUrl !== "") {
        router.push(
          `${window.location}/${newFirstName}${newLastName}`,
          undefined,
          {
            shallow: true,
          }
        );
      }
    } else {
      if (!window.location.pathname.includes(`/${claimLink}`)) {
        newUrl = `${window.location.pathname}/${claimLink}`;
      }

      if (window.location.pathname.toString() !== newUrl && newUrl !== "") {
        router.push(`${window.location}/${claimLink}`, undefined, {
          shallow: true,
        });
      }
    }
    if (deviceId !== null) {
      const response: any = await getProfileByDevice(deviceId);
      if (response.success === true) {
        if (response?.profile?.DeviceLink?.activeStatus === false) {
          router.push({
            pathname: "/profile/deactivePage",
            query: { deviceValue },
          });
        }

        const profileImage = response?.profileImages?.reduce(
          (
            acc: { square: string; rectangle: string },
            item: { type: string; image: string }
          ) => {
            switch (item.type) {
              case "0":
                return { ...acc, square: item.image };
              case "1":
                return { ...acc, rectangle: item.image };
              default:
                return acc;
            }
          },
          {}
        );
        setProfileId(response?.profile?.DeviceLink?.AccountDeviceLink.deviceId);
        setDeviceValId(
          response?.profile?.DeviceLink?.AccountDeviceLink.deviceId
        );
        setFirstName(response?.profile?.firstName);
        setLastName(response?.profile?.lastName);
        setPhoneNumber(response?.profile?.profilePhoneNumbers);
        setCompanyName(response?.profile?.companyName);
        setEmailId(response?.profile?.profileEmails);
        setWebsite(response?.profile?.profileWebsites);
        setQrImageUrl(response?.profile?.qrCodeImageUrl);
        setContacts({
          state: response?.profile?.state,
          city: response?.profile?.city,
          country: response?.profile?.country,
          address: response?.profile?.address,
        });

        setShortDescription(response?.profile?.shortDescription);
        setDesignation(response?.profile?.designation);
        setMobileEnable(response?.profile?.phoneNumberEnable);
        setEmailEnable(response?.profile?.emailEnable);
        setWebsiteEnable(response?.profile?.websiteEnable);
        setSocialMediaEnable(response?.profile?.socialMediaEnable);
        setDigitalEnable(response?.profile?.digitalMediaEnable);
        setLogoUrl(response?.profile?.brandingLogoUrl);
        setBackColor(response?.profile?.brandingBackGroundColor);
        setProfileImg(profileImage);
        setMediaArray(response?.profile?.profileSocialMediaLinks);
        setPaymentArray(response?.profile?.profileDigitalPaymentLinks);
        setModeId(response?.profile?.DeviceLink?.ModeId);
        setTemplate(response?.profile?.DeviceLink?.templateId);
        setClaimLink(response?.user?.ClaimLinks[0]?.claimLinkName);
        getURLFunction(
          response?.profile?.DeviceLink?.AccountDeviceLink?.DeviceId,
          response?.profile?.DeviceLink?.ModeId
        );
        setPlanId(response?.user?.BubblPlanManagements[0]?.planId);

        if (response?.profile?.DeviceLink?.ModeId === 1) {
          const deviceuiid = "";
          handleClick(
            response?.profile?.profilePhoneNumbers,
            profileImage,
            deviceId,
            response?.profile?.lastName,
            response?.profile?.firstName,
            response?.profile?.companyName,
            response?.profile?.designation,
            response?.profile?.profileEmails,
            response?.profile?.profileWebsites,
            response?.profile?.state,
            response?.profile?.city,
            response?.profile?.address,
            response?.profile?.country,
            "1"
          );
        }

        response?.deviceBranding?.map((val: any) => {
          if (val.templateId === response?.profile?.DeviceLink?.templateId) {
            setDarkMode(val.darkMode);
            setBackColor(val.brandingBackGroundColor);
            setAccentColor(val.brandingAccentColor);
            setPrimaryColor(val.brandingFontColor);
          }
        });

        setPage("profile");
      } else {
        getDeviceIdFromStorage();
        setPage("register");
      }
    }
  };

  useEffect(() => {
    tapApiFunction();
    setProfileByDevice();
  }, [router]);

  // close function for Modal
  const handleClose = () => {
    setLeadFormShow(false);
  };
  function ApplyTemplate() {
    const qrImage = window.location.href;
    let selectedTemplate = null;

    if (modeId === 3) {
      if (getUrlValue) {
        if (
          getUrlValue.includes("https://") ||
          getUrlValue.includes("http://")
        ) {
          window.open(getUrlValue, "_blank", "noreferrer");
        } else {
          window.open(`https://${getUrlValue}`, "_blank", "noreferrer");
        }
      }

      // if (getUrlValue) {
      //   let tabOpened = false;

      //   if (
      //     getUrlValue.includes("https://") ||
      //     getUrlValue.includes("http://")
      //   ) {
      //     window.location.href = getUrlValue;
      //     tabOpened = true;
      //   } else {
      //     window.location.href = `https://${getUrlValue}`;
      //     tabOpened = true;
      //   }

      //   // Close the tab if it was opened
      //   if (tabOpened) {
      //     window.close();
      //   }
      // }
    }
    // if mode Id 4, it render the lead generation form
    if (modeId === 4) {
      setLeadFormShow(true);

      selectedTemplate = (
        <div>
          {leadFormShow && (
            <LeadGenerationForm
              show={leadFormShow}
              leadValues={leadValues}
              firstName={firstName || ""}
              designation={designation || ""}
              profileImg={profileImg || ""}
              deviceId={router?.query?.deviceUid}
            />
          )}
        </div>
      );
      return selectedTemplate;
    }
    if (modeId! <= 2) {
      switch (template) {
        case 1:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateOneBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  websiteType={websiteType}
                  companyAddress={companyAddress}
                  shortDescription={shortDescription}
                  designation={designation}
                  city={city}
                  darkMode={darkMode}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  primaryColor={primaryColor}
                  accentColor={accentColor}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  qrImage={qrImage}
                  deviceId={deviceIdVal}
                  qrImageUrl={qrImageUrl}
                  plantId={planId}
                  logoUrl={logoUrl}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateOneLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  plantId={planId}
                  logoUrl={logoUrl}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        case 2:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateTwoBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  plantId={planId}
                  logoUrl={logoUrl}
                  primaryColor={primaryColor}
                  secondaryColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateTwoLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  plantId={planId}
                  logoUrl={logoUrl}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;

        case 3:
          if (template === 3) {
            if (darkMode) {
              selectedTemplate = (
                <div>
                  <TemplateThreeBlack
                    firstName={firstName}
                    lastName={lastName}
                    phoneNumber={phoneNumber}
                    emailId={emailId}
                    website={website}
                    contacts={contacts}
                    shortDescription={shortDescription}
                    designation={designation}
                    mobileEnable={mobileEnable}
                    emailEnable={emailEnable}
                    websiteEnable={websiteEnable}
                    socialMediaEnable={socialMediaEnable}
                    digitalEnable={digitalEnable}
                    accentColor={accentColor}
                    backColor={backColor}
                    profileImg={profileImg}
                    mediaArray={mediaArray}
                    paymentArray={paymentArray}
                    modeId={modeId}
                    deviceId={deviceIdVal}
                    plantId={planId}
                    logoUrl={logoUrl}
                    primaryColor={primaryColor}
                    secondaryColor={undefined}
                    qrImageUrl={qrImageUrl}
                    companyName={companyName}
                    linkVal={deviceIdVal}
                  />
                </div>
              );
            } else {
              selectedTemplate = (
                <div>
                  <TemplateThreeLite
                    firstName={firstName}
                    lastName={lastName}
                    phoneNumber={phoneNumber}
                    emailId={emailId}
                    website={website}
                    contacts={contacts}
                    shortDescription={shortDescription}
                    designation={designation}
                    mobileEnable={mobileEnable}
                    emailEnable={emailEnable}
                    websiteEnable={websiteEnable}
                    socialMediaEnable={socialMediaEnable}
                    digitalEnable={digitalEnable}
                    backColor={backColor}
                    profileImg={profileImg}
                    mediaArray={mediaArray}
                    paymentArray={paymentArray}
                    modeId={modeId}
                    deviceId={deviceIdVal}
                    accentColor={accentColor}
                    plantId={planId}
                    logoUrl={logoUrl}
                    primaryColor={primaryColor}
                    secondaryColor={accentColor}
                    qrImageUrl={qrImageUrl}
                    companyName={companyName}
                    linkVal={deviceIdVal}
                  />
                </div>
              );
            }
          }
          break;
        case 4:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateFourBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  accentColor={accentColor}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  primaryColor={primaryColor}
                  secondaryColor={undefined}
                  plantId={planId}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateFourLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  accentColor={accentColor}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  plantId={planId}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        case 5:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateFiveBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  primaryColor={primaryColor}
                  secondaryColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateFiveLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  backColor={backColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        case 6:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateSixBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateSixLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  primaryColor={primaryColor}
                  secondaryColor={accentColor}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        case 7:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateSevenBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  primaryColor={primaryColor}
                  accentColor={accentColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  secondaryColor={undefined}
                  textColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateSevenLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  primaryColor={primaryColor}
                  accentColor={accentColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  secondaryColor={accentColor}
                  textColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        case 8:
          if (darkMode) {
            selectedTemplate = (
              <div>
                <TemplateEightBlack
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  primaryColor={primaryColor}
                  accentColor={accentColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  secondaryColor={undefined}
                  textColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          } else {
            selectedTemplate = (
              <div>
                <TemplateEightLite
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  emailId={emailId}
                  website={website}
                  contacts={contacts}
                  shortDescription={shortDescription}
                  designation={designation}
                  mobileEnable={mobileEnable}
                  emailEnable={emailEnable}
                  websiteEnable={websiteEnable}
                  socialMediaEnable={socialMediaEnable}
                  digitalEnable={digitalEnable}
                  primaryColor={primaryColor}
                  accentColor={accentColor}
                  profileImg={profileImg}
                  mediaArray={mediaArray}
                  paymentArray={paymentArray}
                  modeId={modeId}
                  deviceId={deviceIdVal}
                  logoUrl={logoUrl}
                  plantId={undefined}
                  secondaryColor={accentColor}
                  textColor={undefined}
                  qrImageUrl={qrImageUrl}
                  companyName={companyName}
                  linkVal={deviceIdVal}
                />
              </div>
            );
          }
          break;
        default:
          return null;
      }
    }

    return selectedTemplate;
  }

  function RenderPage() {
    let render = null;
    if (page === "register") {
      render = <RegisterPage />;
    } else if (page === "profile") {
      render = <ApplyTemplate />;
    }
    return render;
  }

  return <RenderPage />;
}
