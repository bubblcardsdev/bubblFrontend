/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// Import necessary CSS files and libraries
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PhoneInput, {
  getCountryCallingCode,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import { toast, ToastContainer } from "react-toastify";
import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { CreateProfilePostApi } from "src/App/services/api";
import {
  listingData,
  PostLinkDevice,
  validateProfileName,
} from "src/App/services/createProfileApi";
import {
  IAccountLinkedDevice,
  linkDeviceStatus,
  linkDeviceWithAccount,
} from "src/App/services/linkDeviceApi";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import { ProfileImagePostApi } from "src/App/services/upload";
import { userProfile } from "src/App/services/userProfile/userProfileService";

import customCloseButtonImage from "../../images/Phase_2_All_Assets/comman_assets/close.png";
// Importing images/icons
import Right from "../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import NotAvailable from "../../images/Phase_2_All_Assets/create_profile/notAvailable.svg";
import Tick from "../../images/Phase_2_All_Assets/create_profile/tick.svg";
import Edit from "../../images/Phase_2_All_Assets/create_profile/tickIcon.svg";
import Upload from "../../images/Phase_2_All_Assets/fill_your_details/upload.png";
import styles from "./createProfileStep2.module.css";
import CropSection from "./imageCropModal";

// Interface for defining errors
interface Errors {
  [x: string]: string;
  firstName: string;
  lastName: string;
  // companyName: string;
  email: string;
  mobileNumber: string;

  profileLink: string;
  profileName: string;
}

type Props = {
  profileImg: { square: string; rectangle: string } | null;
  handleSaveImage: ({
    squareImgBlob,
    rectangleImgBlob,
  }: {
    squareImgBlob: Blob;
    rectangleImgBlob: Blob;
  }) => Promise<void>;
};

// Main functional component for Step 2 of profile creation
function CreateProfileStep2({ handleSaveImage, profileImg }: Props) {
  // State variables for managing form inputs, errors, modal, accordion states, and edit modes
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  // const [instagramLink, setInstagramLink] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [profileName, setProfileName] = useState("");
  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    profileLink: "",
    profileName: "",
  });
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDisplay = () => setImageShow(true);
  const handleDisplayClose = () => setImageShow(false);
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [editMode3, setEditMode3] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false); // Track if the "Confirm" button has been clicked
  const [skipClicked, setSkipClicked] = useState(false); // Track if the "Skip" button has been clicked
  const [profileImage, setProfileImage] = useState<any>();
  const router = useRouter();
  const [accountLinkedDevices, setAccountLinkedDevices] = useState<
    IAccountLinkedDevice[]
  >([]);

  const [accountLinkId, setAccountLinkId] = useState<number | null>(null);
  const [deviceNumber, setDeviceNumber] = useState<any>(null);
  const [plan, setPlan] = useState<any>();

  const getPlanDetails = async () => {
    try {
      const planResp = await getUserPlan();
      if (planResp?.data?.success) {
        setPlan(planResp.data);
      }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching plan details:", error);
    }
  };

  // function for getting all the devices
  const getAllDeviceFunction = async () => {
    const response = await listingData();
    const allProfiles = response?.data?.profiles;
    if (plan?.getPlans?.planId === 1 && allProfiles.length >= 2) {
      router.push("/bubblProfiles");
    }

    if (plan?.getPlans?.planId !== 1 && allProfiles.length >= 25) {
      router.push("/bubblProfiles");
    }
  };

  // Function to handle validation and confirmation for Step 1
  const handleAgree1 = () => {
    // Validation
    const nameRegex = /^[a-zA-Z.\s_]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: Errors = {
      firstName: firstName.trim()
        ? nameRegex.test(firstName.trim())
          ? ""
          : "Use only letters, dots, underscores, and spaces"
        : "First Name is required",

      lastName: lastName.trim()
        ? nameRegex.test(lastName.trim())
          ? ""
          : "Use only letters, dots, underscores, and spaces"
        : "Last Name is required",
      // companyName: companyName.trim() ? "" : "Company Name is required",
      mobileNumber: "",
      email: email.trim()
        ? emailRegex.test(email.trim())
          ? ""
          : "Invalid email format"
        : "Email is required",

      profileLink: "",
      profileName: "",
    };
    if (mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d{6,15}$/.test(mobileNumber.trim())) {
      newErrors.mobileNumber = "Mobile Number must be between 6 and 15 digits";
    }
    setErrors(newErrors);

    // Check if there are no errors
    if (Object.values(newErrors).every((error) => error === "")) {
      // All fields are filled, close the accordion and clear errors
      setExpanded1(false);
      setEditMode1(true);
      // Open Step 2 accordion
      if (!confirmClicked && !skipClicked) {
        setExpanded2(true);
      } else {
        setExpanded3(true);
      }
      // Show toast notification
      toast.success("Step 1 Updated!", {
        position: "top-right",
        theme: "dark",
        autoClose: 1500,
      });
    }
  };

  // Function to handle validation and confirmation for Step 2
  const handleAgree2 = () => {
    // Validation for Step 2
    const newErrors: Errors = {
      ...errors,
      profileLink: "",
    };

    const profileLinkVal = profileLink.trim() || deviceNumber.trim();
    if (profileLinkVal === "") {
      newErrors.profileLink = "Device Number is required";
    }
    setErrors(newErrors);

    // Check if there are no errors
    if (newErrors.profileLink.length === 0) {
      // All fields are filled, close the accordion and clear errors
      setExpanded2(false);
      setEditMode2(true);

      // Set confirm clicked to true
      const selectedDevice = accountLinkedDevices.find(
        (device) => device.Device.deviceUid === profileLink
      );
      if (selectedDevice) {
        setAccountLinkId(selectedDevice.id);
        // Open the final step accordion
        setExpanded3(true);
        // Show toast notification
        toast.success("Step 2 Updated!", {
          position: "top-right",
          theme: "dark",
          autoClose: 1500,
        });
      } else if (!accountLinkId) {
        linkDeviceWithAccount(profileLink)
          .then((data) => {
            setAccountLinkId(data.createAccountLink.id);
            setConfirmClicked(true);
            setSkipClicked(false);
            // Open the final step accordion
            setExpanded3(true);
            // Show toast notification
            toast.success("Step 2 Updated!", {
              position: "top-right",
              theme: "dark",
              autoClose: 1500,
            });
            handleClose();
          })
          .catch((error) => {
            // Handle device not found error
            setErrors((prevErrors) => ({
              ...prevErrors,
              profileLink: "Device not found",
            }));
            setExpanded2(true); // Keep the accordion open
          });
      }
    }
    handleClose();
  };

  // Function to handle changes in profile link input
  const handleProfileLinkChange = (e: any) => {
    const { value } = e.target;
    setProfileLink(value);
  };

  // Function to handle skip action for Step 2
  const handleSkip = () => {
    // Close the second accordion
    setExpanded2(false);
    toast.info("Step 2 Skipped!", {
      position: "top-right",
      theme: "dark",
      autoClose: 1500,
    });
    // Set skip clicked to true
    setSkipClicked(true);
    // Open the final step accordion
    setExpanded3(true);
  };

  const handleProfileName = (name: string) => {
    setProfileName(name);
    validateProfileName(name).then((res) => {
      if (!res.success) {
        setErrors((val) => ({ ...val, profileName: res.message }));
      } else {
        setErrors((val) => ({ ...val, profileName: "" }));
      }
    });
  };

  // Function to handle suggestion click for profile name
  const handleSuggestionClick = (suggestion: any) => {
    handleProfileName(suggestion);
  };

  // Function to handle changes in profile name input
  const handleInputChange = (e: any) => {
    handleProfileName(e.target.value);
  };

  const dataURLToBlob = async (dataUrl: any) => {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    return blob;
  };
  // Function to handle validation and confirmation for Step 3
  const handleAgree3 = () => {
    // Validation for Step 3
    const newErrors: Errors = {
      ...errors,
    };
    if (profileName.trim() === "") {
      newErrors.profileName = "Profile Name is required";
    } else {
      newErrors.profileName = "";
    }
    setErrors(newErrors);

    // Check if there are no errors
    if (newErrors.profileName === "") {
      // All fields are filled, close the accordion and clear errors
      setExpanded3(false);
      setEditMode3(true);
      PostLinkDevice({
        profileName,
        accountDeviceLinkId: accountLinkId,
      })
        .then(async (obj) => {
          if (obj) {
            const { res } = obj;
            const profileData =
              res.data.create ||
              res.data.createDeviceLink ||
              res.data.createDeviceLink;
            if (res.data.create) {
              const squareImgDataUrl = localStorage.getItem("squareImg");
              const rectangleImgDataUrl = localStorage.getItem("rectangleImg");
              // Convert image data URLs to blobs
              const squareImgBlob = squareImgDataUrl
                ? await dataURLToBlob(squareImgDataUrl)
                : null;
              const rectangleImgBlob = rectangleImgDataUrl
                ? await dataURLToBlob(rectangleImgDataUrl)
                : null;
              // Include images in the API call payload
              const imageUpload =
                squareImgBlob && rectangleImgBlob
                  ? await ProfileImagePostApi({
                      profileId: profileData.id,
                      squareImage: squareImgBlob,
                      rectangleImage: rectangleImgBlob,
                    })
                  : null;
              return CreateProfilePostApi({
                deviceLinkId: null,
                profileId: profileData.id,
                templateId: 1,
                emailIds: [
                  {
                    emailIdNumber: null,
                    emailId: email,
                    emailType: "work",
                    checkBoxStatus: true,
                    activeStatus: true,
                  },
                ],
                websites: [],
                socialMediaNames: [],
                digitalPaymentLinks: [],
                firstName,
                lastName,
                companyName,
                phoneNumbers: [
                  {
                    phoneNumberId: null,
                    countryCode: countryCode,
                    phoneNumber: mobileNumber,
                    phoneNumberType: "",
                    checkBoxStatus: true,
                    activeStatus: true,
                  },
                ],
              });
              // eslint-disable-next-line no-else-return
            } else {
              const squareImgDataUrl = localStorage.getItem("squareImg");
              const rectangleImgDataUrl = localStorage.getItem("rectangleImg");
              // Convert image data URLs to blobs
              const squareImgBlob = squareImgDataUrl
                ? await dataURLToBlob(squareImgDataUrl)
                : null;
              const rectangleImgBlob = rectangleImgDataUrl
                ? await dataURLToBlob(rectangleImgDataUrl)
                : null;
              // Include images in the API call payload only if they are not empty
              const imageUpload =
                squareImgBlob && rectangleImgBlob
                  ? await ProfileImagePostApi({
                      profileId: profileData.profileId,
                      squareImage: squareImgBlob,
                      rectangleImage: rectangleImgBlob,
                    })
                  : null;

              return CreateProfilePostApi({
                deviceLinkId: profileData?.id ? profileData?.id : null,
                profileId: profileData?.profileId,
                templateId: 1,
                emailIds: [
                  {
                    emailIdNumber: null,
                    emailId: email,
                    emailType: "work",
                    checkBoxStatus: true,
                    activeStatus: true,
                  },
                ],
                websites: [],
                socialMediaNames: [],
                digitalPaymentLinks: [],
                firstName,
                lastName,
                companyName,
                phoneNumbers: [
                  {
                    phoneNumberId: null,
                    countryCode: "",
                    phoneNumber: mobileNumber,
                    phoneNumberType: "",
                    checkBoxStatus: true,
                    activeStatus: true,
                  },
                ],
              });
            }
          }
          throw new Error("Data not found");
        })
        .then((res) => {
          const isSuccess = res?.data.success;

          if (isSuccess) {
            toast.success("Final Step Updated!", {
              position: "top-right",
              theme: "dark",
              autoClose: 1500,
            });

            router.push(`/createProfileStep3/${res.data.profile.id}`);
          } else {
            toast.error("Profile Creation Failed", {
              position: "top-right",
              theme: "dark",
              autoClose: 1500,
            });
          }
        });
    }
  };

  const handleDeviceSelection = (e: MouseEvent<HTMLDivElement>) => {
    const selectedAccountLinkId = (e.target as HTMLSpanElement).getAttribute(
      "data-account-link-id"
    );
    if (selectedAccountLinkId) {
      const accountId = Number(selectedAccountLinkId);
      if (!Number.isNaN(accountId)) {
        setAccountLinkId(Number(selectedAccountLinkId) || null);
        const selectedDevice = accountLinkedDevices.find(
          (device) => device.id === accountId
        );
        if (selectedDevice) {
          setProfileLink(selectedDevice.Device.deviceUid);
          setErrors((curr) => ({ ...curr, profileLink: "" }));
        }
      }
    }
  };

  useEffect(() => {
    getPlanDetails();
    getAllDeviceFunction();
    const deviceNum = localStorage.getItem("deviceNumber");
    setDeviceNumber(deviceNum);
    localStorage.removeItem("deviceNumber");
    if (deviceNum) {
      setProfileLink(deviceNum);
    }

    linkDeviceStatus().then((data) => {
      if (data.unlinkedDevices) {
        setAccountLinkedDevices(data.unlinkedDevices);
      }
    });
    userProfile()?.then((data) => {
      setEmail(data.data.userProfile.email);
    });
  }, [profileLink]);

  const handleSave = async ({
    squareImgBlob,
    rectangleImgBlob,
  }: {
    squareImgBlob: Blob;
    rectangleImgBlob: Blob;
  }) => {
    const squareImgUrl = squareImgBlob
      ? URL.createObjectURL(squareImgBlob)
      : "";
    const rectangleImgUrl = rectangleImgBlob
      ? URL.createObjectURL(rectangleImgBlob)
      : "";

    // Set the profile images
    setProfileImage(squareImgUrl);

    // setProfileImage(squareImgBlob);
    const squareImgDataUrl = squareImgBlob
      ? await blobToDataURL(squareImgBlob)
      : "";
    const rectangleImgDataUrl = rectangleImgBlob
      ? await blobToDataURL(rectangleImgBlob)
      : "";

    // Save data URLs in local storage if images are uploaded
    if (squareImgDataUrl) {
      localStorage.setItem("squareImg", squareImgDataUrl);
    }
    if (rectangleImgDataUrl) {
      localStorage.setItem("rectangleImg", rectangleImgDataUrl);
    }
  };

  const blobToDataURL = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Check if all fields in Step 1 are completed
  const isFirstStepCompleted = [
    firstName,
    lastName,
    // companyName,
    mobileNumber,
  ].every((val) => val.length > 0);

  // Check if all fields in Step 3 are completed
  const isThirdStepCompleted = profileName.length > 0;

  return (
    <>
      {/* Step 2 Modal for confirmation */}
      <LoaderScreen>
        <section className={styles.createProfileSection}>
          <div className={styles.createProfilePage}>
            {/* Navigation component */}
            <Navigation />
            <div className={styles.breadCrumbs}>
              {/* Breadcrumb links */}
              <div className={styles.link1}>
                <Link href="/bubblProfiles">Home</Link>
              </div>
              <Image src={Right} alt="right" />
              <div className={styles.link2}>
                <Link href="/createProfileStep2">Create Profile - Step 2</Link>
              </div>
            </div>
            <div className={styles.createProfile}>
              {/* Heading and description for profile creation */}
              <h2 className={styles.fillHead}>Fill your details</h2>
              <p className={styles.DescriptionPara}>
                Start by creating a profile to link your Purchased device then
                continue to choose a template to start using your BUBBL device
              </p>
              <div className={styles.accordionDetails}>
                {/* --------------------------------------------Step 1 ------------------------------------------*/}
                <Accordion
                  expanded={expanded1}
                  onChange={(e, isExpanded) => setExpanded1(isExpanded)}
                  className={
                    expanded1 ? styles.firstAccordion : styles.fadedAccordion
                  }
                >
                  {/* Accordion summary for Step 1 */}
                  <AccordionSummary
                    sx={
                      editMode1
                        ? {
                            "& .MuiAccordionSummary-expandIconWrapper": {
                              transform: "none",
                            },
                          }
                        : {}
                    }
                    expandIcon={
                      editMode1 ? (
                        <Image
                          src={Edit}
                          alt="edit"
                          className={styles.editIcon}
                        />
                      ) : (
                        <ExpandMoreIcon
                          style={{
                            color: "white",
                            fontSize: "34px",
                            fontWeight: "300",
                          }}
                        />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`${styles.customAccordionSummaryStep1} ${styles.increasedHeight}`}
                  >
                    <div>
                      <h5>
                        Step 01
                        {expanded1 ? null : <span>&nbsp; (Details) </span>}
                      </h5>
                      {expanded1 && <h3>Fill Your Details</h3>}
                    </div>
                    {!expanded1 && isFirstStepCompleted && (
                      <h4 className={styles.completedTextStep1}>
                        Completed&nbsp;&nbsp;
                        <Image src={Tick} alt="tick" width={12} height={12} />
                      </h4>
                    )}
                  </AccordionSummary>

                  {/* Accordion details for Step 1 */}
                  <AccordionDetails>
                    <div className={styles.step1Section}>
                      <div className={styles.UploadPhoto}>
                        <h2>Upload Photo</h2>
                        <div
                          className={`${styles["profile-form-full-div"]}`}
                          id="ProfileSection"
                        >
                          <div className={`${styles["avatar-wrapper"]}`}>
                            {profileImage ? (
                              <Image
                                loader={({ src }) => src}
                                src={profileImage}
                                width="200px"
                                height="200px"
                                alt="profile-pic"
                              />
                            ) : (
                              <Image
                                src={Upload}
                                alt="Upload Image"
                                className={`${styles["upload-icon"]}`}
                                width={200}
                                height={200}
                              />
                            )}
                            <div className={`${styles["upload-button"]}`}>
                              <input
                                autoComplete="nope"
                                className={`${styles["file-upload"]}`}
                                style={{
                                  opacity: "0",
                                  padding: "70px",
                                  cursor: "pointer",
                                }}
                                onClick={handleDisplay}
                              />
                            </div>
                          </div>
                          {/* Modal for Image */}
                          <Modal
                            show={imageShow}
                            onHide={handleDisplayClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                            className={styles.CropRad}
                          >
                            <div className={styles.CropBody}>
                              <Modal.Header className={styles.CropBodyHeader}>
                                <Modal.Title className={styles.ImageCrop}>
                                  Upload Profile Image
                                </Modal.Title>
                                <Image
                                  src={customCloseButtonImage}
                                  onClick={handleDisplayClose}
                                  alt="Close"
                                  className={styles.CustomCloseButton}
                                />
                              </Modal.Header>
                              <Modal.Body className={styles.modalDiv}>
                                <CropSection
                                  onSave={handleSave} // Pass handleSave as a prop to CropSection
                                  onSavedSuccess={handleDisplayClose}
                                />
                              </Modal.Body>
                            </div>
                          </Modal>
                        </div>
                      </div>
                      <div className={styles.step1Details}>
                        {/* Form inputs for Step 1 */}
                        <h3>First Name*</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              className={styles.inputFieldStep1}
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && (
                              <h6 className={styles.error}>
                                {errors.firstName}
                              </h6>
                            )}
                          </Form.Group>
                        </Form>

                        <h3>Last Name*</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              className={styles.inputFieldStep1}
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />

                            {errors.lastName && (
                              <h6 className={styles.error}>
                                {errors.lastName}
                              </h6>
                            )}
                          </Form.Group>
                        </Form>
                        <h3>Email*</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <Form.Control
                              type="text"
                              placeholder="Your Email"
                              className={styles.inputFieldStep1}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />

                            {errors.email && (
                              <h6 className={styles.error}>{errors.email}</h6>
                            )}
                          </Form.Group>
                        </Form>

                        <h3>Mobile Number*</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <PhoneInput
                              value={countryCode + mobileNumber}
                              international
                              countryCallingCodeEditable={false}
                              onChange={(value) => {
                                if (!value) {
                                  return;
                                }
                                const phoneNumber = parsePhoneNumber(value);
                                if (!phoneNumber) {
                                  return;
                                }
                                const newMobileNumber =
                                  phoneNumber.nationalNumber.toString();

                                setMobileNumber(newMobileNumber);
                                setErrors((currErrors) => ({
                                  ...currErrors,
                                  mobileNumber: "",
                                }));
                                const currCountryCode =
                                  phoneNumber.countryCallingCode?.toString() ||
                                  "";
                                setCountryCode(`+${currCountryCode}`);
                              }}
                              onBlur={() => {
                                let errorMessage = "";
                                if (
                                  !isPossiblePhoneNumber(
                                    `${countryCode}${mobileNumber}`
                                  )
                                ) {
                                  errorMessage = "Invalid Phone number";
                                }
                                setErrors((currErrors) => ({
                                  ...currErrors,
                                  mobileNumber: errorMessage,
                                }));
                              }}
                              placeholder="Mobile Number"
                              className={styles.inputFieldStep1}
                              defaultCountry="IN"
                            />

                            {/* <Form.Control
                              type="number"
                              placeholder="Mobile Number"
                              className={styles.inputFieldStep1}
                              value={mobileNumber}
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, "");
                                value = value.slice(0, 15);
                                setMobileNumber(value);
                              }}
                            /> */}
                            {errors.mobileNumber && (
                              <h6 className={styles.error}>
                                {errors.mobileNumber}
                              </h6>
                            )}
                          </Form.Group>
                        </Form>
                        <h3>Company Name</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <Form.Control
                              type="text"
                              placeholder="Company Name"
                              className={styles.inputFieldStep1}
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                            />
                            {/* {errors.companyName && (
                            <h6 className={styles.error}>
                              {errors.companyName}
                            </h6>
                          )} */}
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </AccordionDetails>

                  {/* Accordion actions for Step 1 */}
                  <AccordionActions>
                    <button onClick={handleAgree1} className={styles.SubmitBtn}>
                      Confirm
                    </button>
                  </AccordionActions>
                  {/* Error messages */}
                </Accordion>
                {/* -------------------------------------------Step 2 -----------------------------------------*/}
                <Accordion
                  disabled={!editMode1}
                  expanded={expanded2}
                  onChange={(e, isExpanded) => setExpanded2(isExpanded)}
                  className={
                    expanded2 ? styles.firstAccordion : styles.fadedAccordion
                  }
                >
                  {/* Accordion summary for Step 2 */}
                  <AccordionSummary
                    sx={
                      editMode2
                        ? {
                            "& .MuiAccordionSummary-expandIconWrapper": {
                              transform: "none",
                            },
                          }
                        : {}
                    }
                    expandIcon={
                      editMode2 ? (
                        <Image
                          src={Edit}
                          alt="edit"
                          className={styles.editIcon}
                        />
                      ) : (
                        <ExpandMoreIcon
                          style={{
                            color: "white",
                            fontSize: "34px",
                            fontWeight: "300",
                          }}
                        />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`${styles.customAccordionSummaryStep2} ${styles.increasedHeight}`}
                  >
                    <div>
                      <h5>
                        Step 02
                        {expanded2 ? null : <span>&nbsp; (Link device) </span>}
                      </h5>
                      {expanded2 && (
                        <h3>
                          Link Your Device OR Create Profile With Existing
                          Device
                        </h3>
                      )}
                    </div>
                    {!skipClicked && !expanded2 && confirmClicked && (
                      <h4 className={styles.completedTextStep2}>
                        Completed&nbsp;&nbsp;
                        <Image src={Tick} alt="tick" width={12} height={12} />
                      </h4>
                    )}
                  </AccordionSummary>

                  {/* Accordion details for Step 2 */}
                  <AccordionDetails>
                    <div className={styles.step1Section}>
                      <div className={styles.step2Details}>
                        {accountLinkedDevices &&
                        accountLinkedDevices.length > 0 ? (
                          <div className={styles.DeviceUnlink}>
                            <h5>Your UnLinked Device Number</h5>
                            <div
                              className={styles.IncompleteDevice}
                              onClick={handleDeviceSelection}
                            >
                              {accountLinkedDevices.map((device) => (
                                <span
                                  key={device.id}
                                  data-account-link-id={device.id}
                                >
                                  {device.Device.deviceType}
                                </span>
                              ))}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <h3>Link Your Device*</h3>
                        <Form className={styles.LinkDeviceForm}>
                          <div className={styles.LinkDeviceFormSection}>
                            <div>
                              <Form.Group className={styles.formHeight}>
                                {/* Input for device linking */}
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Device Number"
                                  className={`${styles.inputFieldStep2} ${
                                    confirmClicked && styles.blurInput
                                  }`}
                                  value={profileLink || deviceNumber}
                                  onChange={handleProfileLinkChange}
                                  disabled={
                                    confirmClicked || Boolean(accountLinkId)
                                  } // Disable input if Confirm button clicked
                                  // title={
                                  //   confirmClicked
                                  //     ? "Once a device number is confirmed, it cannot be edited. Please create a new profile to add a device number."
                                  //     : ""
                                  // }
                                />
                              </Form.Group>
                            </div>
                          </div>
                          {(confirmClicked || Boolean(accountLinkId)) && (
                            <div
                              className={styles.Clear}
                              onClick={() => {
                                setAccountLinkId(null);
                                setProfileLink("");
                                setConfirmClicked(false);
                                linkDeviceStatus().then((data) => {
                                  if (data.unlinkedDevices) {
                                    setAccountLinkedDevices(
                                      data.unlinkedDevices
                                    );
                                  }
                                });
                                setErrors((curr) => ({
                                  ...curr,
                                  profileLink: "",
                                }));
                              }}
                            >
                              <span>Clear</span>
                            </div>
                          )}
                        </Form>
                        {errors.profileLink && (
                          <h6 className={styles.error}>{errors.profileLink}</h6>
                        )}
                        {accountLinkId === null ? (
                          <p>
                            You can find your device name while tapping your
                            Device
                          </p>
                        ) : (
                          <p>Your Device is attached, you can click Confirm!</p>
                        )}
                      </div>
                    </div>
                  </AccordionDetails>

                  {/* Accordion actions for Step 2 */}
                  <AccordionActions>
                    <button
                      onClick={handleAgree2}
                      className={`${styles.SubmitBtnStep2} ${
                        confirmClicked && styles.blurConfirm
                      }`}
                      disabled={confirmClicked}
                    >
                      Confirm
                    </button>
                  </AccordionActions>
                  {/* Action button for shopping */}
                  <p className={styles.actionButton}>
                    If you want buy additional devices Click &nbsp;
                    <Link href="/">SHOP</Link>
                  </p>
                  {/* Skip button */}
                  <div className={styles.skip}>
                    <Button
                      className={confirmClicked ? styles.blurSkip : ""}
                      onClick={handleSkip}
                      disabled={confirmClicked} // Disable Skip button if Confirm button clicked
                    >
                      Skip
                    </Button>
                  </div>
                </Accordion>
                {/* ---------------------------------------Step 3-------------------------------------- */}
                <Accordion
                  disabled={!editMode1 || (!editMode2 && !skipClicked)}
                  expanded={expanded3}
                  onChange={(e, isExpanded) => setExpanded3(isExpanded)}
                  className={
                    expanded3 ? styles.firstAccordion : styles.fadedAccordion
                  }
                >
                  {/* Accordion summary for Step 3 */}
                  <AccordionSummary
                    sx={
                      editMode3
                        ? {
                            "& .MuiAccordionSummary-expandIconWrapper": {
                              transform: "none",
                            },
                          }
                        : {}
                    }
                    expandIcon={
                      editMode3 ? (
                        <Image
                          src={Edit}
                          alt="edit"
                          className={editMode3 ? styles.editIcon : ""}
                          style={{ transform: "none" }}
                        />
                      ) : (
                        <ExpandMoreIcon
                          style={{
                            color: "white",
                            fontSize: "34px",
                            fontWeight: "300",
                          }}
                        />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`${styles.customAccordionSummaryStep3} ${styles.increasedHeight}`}
                  >
                    <div>
                      <h5>
                        Final Step
                        {expanded3 ? null : <span>&nbsp; (Profile Name) </span>}
                      </h5>
                      {expanded3 && <h3>Create a profile name</h3>}
                    </div>
                    {!expanded3 && isThirdStepCompleted && (
                      <h4 className={styles.completedTextStep3}>
                        Completed&nbsp;&nbsp;
                        <Image src={Tick} alt="tick" width={12} height={12} />
                      </h4>
                    )}
                  </AccordionSummary>
                  {/* Accordion details for Step 3 */}
                  <AccordionDetails>
                    <div className={styles.step1Section}>
                      <div className={styles.step2Details}>
                        <h3>Create a profile name for your device*</h3>
                        <Form>
                          <Form.Group className={styles.formHeight}>
                            <InputGroup>
                              {/* Input for profile name */}
                              <Form.Control
                                type="text"
                                placeholder="Your Profile Name"
                                className={styles.inputFieldStep2}
                                value={profileName}
                                onChange={handleInputChange}
                              />
                              <div className={styles.confirmationTick}>
                                <InputGroup.Text>
                                  {errors.profileName ? (
                                    <Image
                                      src={NotAvailable}
                                      alt="Not Available"
                                      width={13}
                                      height={13}
                                    />
                                  ) : (
                                    <Image src={Tick} alt="Tick" />
                                  )}
                                </InputGroup.Text>
                              </div>
                            </InputGroup>
                            {errors.profileName && (
                              <h6 className={styles.error}>
                                {errors.profileName}
                              </h6>
                            )}
                          </Form.Group>
                        </Form>
                        {/* Suggestion for profile names */}
                        <div className={styles.selectingNameSection}>
                          <p>Suggestion Profile Name </p>
                          <div className={styles.selectingBox}>
                            <span
                              role="button"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleSuggestionClick("Home");
                                }
                              }}
                              tabIndex={0}
                              onClick={() => handleSuggestionClick("Home")}
                            >
                              Home
                            </span>
                            <span
                              role="button"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleSuggestionClick("Work");
                                }
                              }}
                              tabIndex={0}
                              onClick={() => handleSuggestionClick("Work")}
                            >
                              Work
                            </span>
                            <span
                              role="button"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleSuggestionClick("Office");
                                }
                              }}
                              tabIndex={0}
                              onClick={() => handleSuggestionClick("Office")}
                            >
                              Office
                            </span>
                            <span
                              role="button"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleSuggestionClick("Personal");
                                }
                              }}
                              tabIndex={0}
                              onClick={() => handleSuggestionClick("Personal")}
                            >
                              Personal
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                  {/* Accordion actions for Step 3 */}
                  <AccordionActions>
                    <button
                      onClick={handleAgree3}
                      className={styles.SubmitBtnStep3}
                    >
                      Finish
                    </button>
                  </AccordionActions>
                </Accordion>
              </div>
            </div>

            {/* Footer component */}
          </div>
          <section className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </section>
          {/* Toast container for notifications */}
          <ToastContainer />
        </section>
      </LoaderScreen>
    </>
  );
}

export default CreateProfileStep2;
