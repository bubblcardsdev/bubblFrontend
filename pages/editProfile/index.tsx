/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-computed-key */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { CountryDropdown } from "react-country-region-selector";
import DatePicker from "react-datepicker";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import axios from "src/App/helpers/axios";
import {
  getAccessToken,
  getEmail,
  setclaimName,
} from "src/App/helpers/local-storage";
import {
  getClaimLink,
  updateClaimLink,
} from "src/App/services/claimLink/claimLink";

import circle from "../../public/order_page/circle.svg";
import {
  updateUserProfile,
  userProfile,
} from "../../src/App/services/userProfile/userProfileService";
import styles from "./editProfile.module.css";

function EditUserProfilePage() {
  const router = useRouter();
  const [country, setCountry] = useState("");
  const [updateProf, setUpdateProf] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    DOB: "",
    gender: "",
    country: "",
    ClaimLinks: [],
  });
  const [startDate, setStartDate] = useState<any>();
  const [errorDate, setErrorDate] = useState<any>("");
  const [claimFlag, setClaimFlag] = useState(false);

  const [value, setValue] = useState("Click to Select Gender");
  const [claimLinkName, setClaimLinkName] = useState();
  const [claimNameStatus, setClaimNameStatus] = useState<any>();
  const [userImage, setUserImgae] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [editProfileValidations, setEditProfileValidations] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    country: "",
    phoneNumber: "",
  });

  const handleSelect = (e: any) => {
    setValue(e);
    setUpdateProf(() => ({ ...updateProf, gender: e }));
  };

  const getUserInfo = async () => {
    const profile: any = await userProfile();

    setUpdateProf(profile?.data?.userProfile);
    setClaimLinkName(profile?.data?.userProfile?.ClaimLinks[0]?.claimLinkName);
    setCountry(profile?.data?.userProfile?.country);
    setUserImgae(profile?.data?.userProfile?.userImage);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const updateProfile = async () => {
    const isSuccess: boolean = onSubmitSave();
    if (isSuccess) {
      const userObj = {
        firstName: updateProf?.firstName,
        lastName: updateProf?.lastName,
        DOB:
          startDate === null || startDate === undefined
            ? updateProf?.DOB
            : startDate.toString(),
        gender:
          updateProf?.gender === null ? "" : updateProf?.gender.toString(),
        country: country === null ? "" : country.toString(),
        phoneNumber: updateProf?.phoneNumber,
      };

      const profile = await updateUserProfile(userObj);
      if (claimFlag === true) {
        setClaimFlag(false);
        updateClaimName();
      }

      router.push("/userProfile");
    }
  };

  function validateForm() {
    const errors = {};
    // check name is null
    if (!updateProf.firstName.trim()) {
      editProfileValidations.firstName = "First name is required";
    } else {
      editProfileValidations.firstName = "";
    }

    // check name contains special characters
    if (updateProf.firstName.trim()) {
      const pattern = /^[a-zA-Z]+$/;
      if (!pattern.test(updateProf.firstName)) {
        editProfileValidations.firstName = "First name is invalid";
      } else {
        editProfileValidations.firstName = "";
      }
    } else {
      editProfileValidations.firstName = "";
    }

    // check name is null
    if (!updateProf.lastName.trim()) {
      editProfileValidations.lastName = "Last name is required";
    } else {
      editProfileValidations.lastName = "";
    }

    // check name contains special characters
    if (updateProf.lastName.trim()) {
      const pattern = /^[a-zA-Z]+$/;
      if (!pattern.test(updateProf.lastName)) {
        editProfileValidations.lastName = "Last name is invalid";
      } else {
        editProfileValidations.lastName = "";
      }
    }
    // phone number
    if (!updateProf.phoneNumber.trim()) {
      editProfileValidations.phoneNumber = "Phone number is required";
    } else if (!/^[0-9\b +]+$/.test(updateProf.phoneNumber)) {
      editProfileValidations.phoneNumber = "In valid Phone Number";
    } else {
      editProfileValidations.phoneNumber = "";
    }
    return errors;
  }

  function onSubmitSave() {
    let isInvalid = false;
    // event.preventDefault();
    const errors = validateForm();

    // You can submit the form data to a server here

    setEditProfileValidations({
      firstName: editProfileValidations.firstName,
      lastName: editProfileValidations.lastName,

      DOB: errorDate,
      gender: editProfileValidations.gender,
      country: editProfileValidations.country,
      phoneNumber: editProfileValidations.phoneNumber,
    });

    if (
      editProfileValidations.firstName === "" &&
      editProfileValidations.lastName === "" &&
      errorDate === "" &&
      editProfileValidations.gender === "" &&
      editProfileValidations.country === "" &&
      editProfileValidations.phoneNumber === ""
    ) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
    return isInvalid;
  }

  const testPattern = (regPattern: any) => {
    let boolPatterMatch = false;
    const pattern = regPattern;
    if (!pattern.test(value)) {
      boolPatterMatch = false;
    } else {
      boolPatterMatch = true;
    }
    return boolPatterMatch;
  };

  const handleUserProfileDetailChange = (e: any) => {
    const { name, value } = e.target;
    setUpdateProf(() => ({ ...updateProf, [name]: value }));
    setValue(
      updateProf.gender === null || updateProf.gender === ""
        ? "Click to Select Gender"
        : updateProf.gender
    );
  };

  const updateClaimName = async () => {
    const claimObj: any = {
      claimLinkName: claimLinkName,
      emailId: updateProf?.email,
    };

    const claimName = await updateClaimLink(claimObj);
  };

  const getClaimName = async () => {
    if (claimLinkName !== null) {
      const claimLinkNameObj = {
        claimLinkName: claimLinkName,
      };
      const claimNameResp = await getClaimLink(claimLinkNameObj);
      if (claimNameResp?.data.success) {
        setClaimFlag(true);
        setClaimNameStatus(1);
      } else {
        setClaimFlag(false);
        setClaimNameStatus(0);
      }
    }
  };

  const handleClaimName = async (val: any) => {
    const { value } = val.target;
    if (value.trim !== "") {
      setClaimLinkName(value);
    }
  };

  const handleFileUpload = async (e: any) => {
    const { files } = e.target;
    const formData = new FormData();
    formData.append("userImage", files[0]);
    const imgResponse = await userProfileImageUpload(formData);
    const res = imgResponse?.data;
    setUserImgae(res?.userImageUrl);
  };

  const userProfileImageUpload = async (profileUpload: any) => {
    const headers = {
      authorization: getAccessToken(),
    };
    try {
      const res = await axios.post("upload/userimage", profileUpload, {
        headers: headers,
      });

      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <NavBar />

      <div className={styles.order_banner}>
        <div className="container">
          <div className={styles.plan_header_div}>
            <div className={styles.plan_header_left}>
              <a href="/">
                <span className={styles.home_color_head}>Home {" > "}</span>
              </a>
              <a href="/userProfile">
                <span className={styles.home_color_head}>
                  My Account {" > "}
                </span>
              </a>
              <span className={styles.linkDevice_color_head}>Edit Account</span>
              <div className={styles.plan_heading}>My Account</div>
              <div className={styles.plan_heading_content}>
                Welcome to my profile page! Feel free to personalize your
                information by editing your details below.
              </div>
            </div>
          </div>
          <div className={styles.shippingHeading}>
            <Col xl={7} className={styles.shipping}>
              <Image src={circle} alt="bubbl" />
              <div>
                <h2>Claim Your Custom URL</h2>
              </div>
            </Col>

            <Form>
              <Col className={styles.custom_url}>
                <div className={styles.static_data_claim}>
                  <Col xl={5}>
                    <InputGroup className={styles.claim} size="lg">
                      <InputGroup.Text className={styles.static_data}>
                        bubbl.cards/
                      </InputGroup.Text>

                      <Form.Control
                        autoComplete="nope"
                        type="text"
                        placeholder="Type Here"
                        name="ClaimLinks"
                        value={claimLinkName}
                        className={styles.dynamic_name}
                        onChange={handleClaimName}
                      />
                    </InputGroup>
                    <div>
                      {claimNameStatus !== undefined &&
                        (claimFlag ? (
                          <a href="#save" className={styles.success}>
                            Name Is Available!!&nbsp;
                            <span
                              style={{
                                fontWeight: 700,
                                borderBottom: "1px solid #4bb543",
                              }}
                            >
                              Click here to Save.
                            </span>
                          </a>
                        ) : (
                          <p className={styles.taken}>
                            Name Is Already Taken !!
                          </p>
                        ))}
                    </div>
                  </Col>
                  <div>
                    <Button
                      variant="none"
                      className={styles.claim_button}
                      onClick={getClaimName}
                    >
                      Check Availability
                    </Button>
                  </div>
                </div>
              </Col>
            </Form>
            <Col xl={7} className={styles.shipping}>
              <Image src={circle} alt="bubbl" />

              <div>
                <h2>Profile Information</h2>
              </div>
            </Col>
            <div className={styles.edit_data}>
              <h4>Upload your Photo</h4>
              <div className={`${styles["avatar-wrapper"]}`}>
                {userImage === null ? (
                  <Image
                    alt="bubbl"
                    src={circle}
                    width="144px"
                    height="144px"
                  />
                ) : (
                  <Image
                    src={userImage}
                    width="144px"
                    height="144px"
                    alt="bubbl"
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
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <Col xl={8} className={styles.edit_section}>
            <Form>
              <Col className={styles.edit_form}>
                <Col xl={4} lg={4} md={4} xs={12}>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      First Name
                    </Form.Label>
                    <input
                      autoComplete="nope"
                      type="text"
                      name="firstName"
                      placeholder="Type Here"
                      value={updateProf?.firstName}
                      className={styles.field_password}
                      onChange={handleUserProfileDetailChange}
                    />
                  </Form.Group>
                  {editProfileValidations.firstName && (
                    <span className="text-danger" role="alert">
                      {editProfileValidations.firstName}
                    </span>
                  )}
                </Col>
                <Col xl={4} lg={4} md={4} xs={12} className={styles.left_space}>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Last Name
                    </Form.Label>
                    <input
                      autoComplete="nope"
                      type="text"
                      placeholder="Type Here"
                      name="lastName"
                      value={updateProf?.lastName}
                      className={styles.field_password}
                      onChange={handleUserProfileDetailChange}
                    />
                  </Form.Group>
                  {editProfileValidations.lastName && (
                    <span className="text-danger" role="alert">
                      {editProfileValidations.lastName}
                    </span>
                  )}
                </Col>
              </Col>
              <Col className={styles.edit_form}>
                <Col xl={4} lg={4} md={4} xs={12}>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Mobile Number
                    </Form.Label>
                    <input
                      autoComplete="nope"
                      type="text"
                      placeholder="Type Here"
                      name="phoneNumber"
                      value={updateProf?.phoneNumber}
                      className={styles.field_password}
                      onChange={handleUserProfileDetailChange}
                    />
                  </Form.Group>
                  {editProfileValidations.phoneNumber && (
                    <span className="text-danger" role="alert">
                      {editProfileValidations.phoneNumber}
                    </span>
                  )}
                </Col>
                <Col xl={4} lg={4} md={4} xs={12} className={styles.left_space}>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Email ID
                    </Form.Label>
                    <input
                      autoComplete="nope"
                      type="text"
                      placeholder="Type Here"
                      name="emailId"
                      value={updateProf?.email}
                      className={styles.field_password}
                      onChange={handleUserProfileDetailChange}
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Col>
              <Col className={styles.edit_form}>
                <Col
                  xl={4}
                  lg={4}
                  md={4}
                  xs={12}
                  className={styles.edit_form_date}
                >
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Date of Birth
                    </Form.Label>

                    <DatePicker
                      selected={startDate}
                      value={
                        startDate ||
                        moment(updateProf?.DOB).format("MM/DD/YYYY")
                      }
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>

                  {errorDate && (
                    <span className="text-danger" role="alert">
                      {errorDate}
                    </span>
                  )}
                </Col>
                <Col xl={4} lg={4} md={4} xs={12} className={styles.left_space}>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>Gender</Form.Label>

                    <DropdownButton
                      title={
                        updateProf?.gender === "" ? value : updateProf?.gender
                      }
                      className={styles.field_dropdown}
                      id="dropdown-menu-align-right"
                      onSelect={handleSelect}
                    >
                      <Dropdown.Item
                        eventKey="Male"
                        className={styles.dropdown_list}
                      >
                        Male
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="Female"
                        className={styles.dropdown_list}
                      >
                        Female
                      </Dropdown.Item>
                    </DropdownButton>
                  </Form.Group>
                </Col>
              </Col>
              <Col className={styles.edit_form}>
                <Col xl={4} lg={4} md={4} xs={12}>
                  <Form.Group>
                    <Form.Label className={styles.form_head}>
                      Country or Region
                    </Form.Label>
                    <Col className={styles.countryCode}>
                      <CountryDropdown
                        value={country}
                        name="country"
                        onChange={(val) => {
                          setCountry(val);
                          handleUserProfileDetailChange;
                        }}
                      />
                    </Col>
                  </Form.Group>
                </Col>
              </Col>
            </Form>

            <div className={styles.field_password_btn}>
              <Button
                variant="none"
                className={styles.cancel_btn}
                onClick={() => {
                  router.push("/userProfile");
                }}
              >
                Cancel
              </Button>
              <Button
                variant="none"
                className={styles.set_btn}
                onClick={updateProfile}
                id="save"
              >
                Save
              </Button>
            </div>
          </Col>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EditUserProfilePage;
function addDays(
  arg0: Date,
  arg1: number
): import("react").SetStateAction<null> {
  throw new Error("Function not implemented.");
}
