/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";

import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";

import eyeClose from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye_close_icon.svg";
import eyeOpen from "../../images/Bubbl-Post_Login_Asset/Sign_up/eye-icon.svg";
import circle from "../../public/order_page/circle.svg";
import {
  resetPassword,
  userProfile,
} from "../../src/App/services/userProfile/userProfileService";
import styles from "./userProfile.module.css";

function UserProfilePage() {
  const router = useRouter();
  const [userProfileData, setUserProfileData] = useState<any>();
  const [resetPass, setResetPass] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassErr, setCurrentPassErr] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirm, setRevealConfirm] = useState(false);
  const [currentConfirm, setCurrentConfirm] = useState(false);

  const getUserInfo = async () => {
    const profile = await userProfile();
    setUserProfileData(profile?.data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  const resetPassFunction = async () => {
    if (resetPass.newPassword === resetPass.confirmPassword) {
      const pass = await resetPassword(resetPass);
      if (pass?.data.success === true) {
        toast.success("Password Updated Successfully", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Unable to Update the Password", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } else {
      toast.error("Password Mismatch", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleCurrentPassword = (e: any) => {
    const { name, value } = e.target;
    setResetPass(() => ({ ...resetPass, [name]: value }));
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setCurrentPassErr(
        "Use 8 or more character with a mix of letter, number & symbols"
      );
    } else {
      setCurrentPassErr("");
    }
  };
  const handlePasswordChange = (e: any) => {
    const { name, value } = e.target;
    setResetPass(() => ({ ...resetPass, [name]: value }));
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Use 8 or more character with a mix of letter, number & symbols"
      );
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e: any) => {
    const { name, value } = e.target;
    setResetPass(() => ({ ...resetPass, [name]: value }));
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setConfirmPassword(
        "Use 8 or more character with a mix of letter, number & symbols"
      );
    } else {
      setConfirmPassword("");
    }
  };

  const navigateToEditPage = () => {
    router.push("/editProfile");
  };
  return (
    <div>
      <ToastContainer />

      <NavBar />
      <div className={styles.order_banner}>
        <div className="container">
          <div className={styles.plan_header_div}>
            <div className={styles.plan_header_left}>
              <a href="/">
                <span className={styles.home_color_head}>Home {" > "}</span>
              </a>
              <span className={styles.linkDevice_color_head}>My Account</span>
              <div className={styles.plan_heading}>My Account</div>
              <div className={styles.plan_heading_content}>
                Welcome to my profile page! Feel free to personalize your
                information by editing your details below.
              </div>
            </div>
          </div>

          <div className={styles.shippingHeading}>
            <h1>Account Overview</h1>
            <Col xl={7} className={styles.shipping}>
              <Image src={circle} alt="bubbl" />
              <div>
                <h2>Profile Information</h2>
              </div>
            </Col>
            <div className={styles.edit_data}>
              <div className={`${styles["avatar-wrapper"]}`}>
                {userProfileData?.userProfile?.userImage !== null ? (
                  <Image
                    src={userProfileData?.userProfile?.userImage}
                    width="250px"
                    height="250px"
                    alt="bubbl"
                  />
                ) : (
                  <Image
                    src={circle}
                    width="250px"
                    height="250px"
                    alt="bubbl"
                  />
                )}

                <div className={`${styles["upload-button"]}`} />
              </div>

              <Col xl={7} className={styles.edit_profile}>
                <div className={styles.edit_profile_details}>
                  <h3>User Name</h3>
                  <p>
                    {userProfileData?.userProfile?.firstName === null
                      ? "Your Name"
                      : userProfileData?.userProfile?.firstName}
                  </p>
                </div>
                <div className={styles.orderLine} />
                <div className={styles.edit_profile_details}>
                  <h3>Mobile Number</h3>
                  <p>
                    {userProfileData?.userProfile?.phoneNumber === null ||
                    userProfileData?.userProfile?.phoneNumber === ""
                      ? "Yet to be updated"
                      : userProfileData?.userProfile?.phoneNumber}
                  </p>
                </div>
                <div className={styles.orderLine} />
                <div className={styles.edit_profile_details}>
                  <h3>Email ID</h3>
                  <p>
                    {userProfileData?.userProfile?.email === null
                      ? "Yet to be updated"
                      : userProfileData?.userProfile?.email}
                  </p>
                </div>
                <div className={styles.orderLine} />
                <div className={styles.edit_profile_details}>
                  <h3>Date of Birth</h3>
                  <p>
                    {userProfileData?.userProfile?.DOB === null ||
                    userProfileData?.userProfile?.DOB === undefined ||
                    userProfileData?.userProfile?.DOB === ""
                      ? "Yet to be updated"
                      : moment(userProfileData?.userProfile?.DOB).format(
                          "MM-DD-YYYY"
                        )}
                  </p>
                </div>
                <div className={styles.orderLine} />
                <div className={styles.edit_profile_details}>
                  <h3>Gender</h3>
                  <p>
                    {userProfileData?.userProfile?.gender === null ||
                    userProfileData?.userProfile?.gender === ""
                      ? "Yet to be updated"
                      : userProfileData?.userProfile?.gender}
                  </p>
                </div>
                <div className={styles.orderLine} />
                <div className={styles.edit_profile_details}>
                  <h3>Country</h3>
                  <p>
                    {" "}
                    {userProfileData?.userProfile?.country === null ||
                    userProfileData?.userProfile?.country === ""
                      ? "Yet to be updated"
                      : userProfileData?.userProfile?.country}
                  </p>
                </div>

                <Button
                  variant="none"
                  className={styles.edit_btn}
                  onClick={navigateToEditPage}
                >
                  Edit Profile
                </Button>
              </Col>
            </div>
          </div>

          <Col xl={7} className={styles.reset}>
            <Image src={circle} alt="bubbl" />
            <div>
              <h2>Reset Password</h2>
            </div>
          </Col>
          <Col xl={3} className={styles.password_section}>
            <Form autoComplete="nope">
              {userProfileData?.userProfile?.local ? (
                <>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Current Password
                    </Form.Label>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          autoComplete="nope"
                          type={currentConfirm ? "text" : "password"}
                          placeholder="Type Here"
                          name="currentPassword"
                          className={styles.field_password}
                          onChange={handleCurrentPassword}
                        />
                      </div>
                      <div className={styles.eyeIconDiv}>
                        <span style={{ cursor: "pointer" }}>
                          <Image
                            alt="bubbl"
                            src={currentConfirm ? eyeOpen : eyeClose}
                            onClick={() => {
                              setCurrentConfirm((isReveal) => !isReveal);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </Form.Group>
                  {currentPassErr && (
                    <span className="text-danger" role="alert">
                      {currentPassErr}
                    </span>
                  )}
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      New Password
                    </Form.Label>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          autoComplete="nope"
                          type={revealPassword ? "text" : "password"}
                          placeholder="Type Here"
                          name="newPassword"
                          className={styles.field_password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className={styles.eyeIconDiv}>
                        <span style={{ cursor: "pointer" }}>
                          <Image
                            src={revealPassword ? eyeOpen : eyeClose}
                            onClick={() => {
                              setRevealPassword((isReveal) => !isReveal);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </Form.Group>
                  {passwordError && (
                    <span className="text-danger" role="alert">
                      {passwordError}
                    </span>
                  )}
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Confirm New Password
                    </Form.Label>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          autoComplete="nope"
                          type={revealConfirm ? "text" : "password"}
                          placeholder="Type Here"
                          name="confirmPassword"
                          className={styles.field_password}
                          onChange={handleConfirmPassword}
                        />
                      </div>
                      <div className={styles.eyeIconDiv}>
                        <span style={{ cursor: "pointer" }}>
                          <Image
                            alt="bubbl"
                            src={revealConfirm ? eyeOpen : eyeClose}
                            onClick={() => {
                              setRevealConfirm((isReveal) => !isReveal);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </Form.Group>
                  {confirmPassword && (
                    <span className="text-danger" role="alert">
                      {confirmPassword}
                    </span>
                  )}
                </>
              ) : (
                <>
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      New Password
                    </Form.Label>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          autoComplete="nope"
                          type={revealPassword ? "text" : "password"}
                          placeholder="Type Here"
                          name="newPassword"
                          className={styles.field_password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className={styles.eyeIconDiv}>
                        <span style={{ cursor: "pointer" }}>
                          <Image
                            alt="bubbl"
                            src={revealPassword ? eyeOpen : eyeClose}
                            onClick={() => {
                              setRevealPassword((isReveal) => !isReveal);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </Form.Group>
                  {passwordError && (
                    <span className="text-danger" role="alert">
                      {passwordError}
                    </span>
                  )}
                  <Form.Group
                    className={styles.form_space}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={styles.form_head}>
                      Confirm New Password
                    </Form.Label>
                    <div style={{ display: "flex" }}>
                      <div>
                        <input
                          autoComplete="nope"
                          type={revealConfirm ? "text" : "password"}
                          placeholder="Type Here"
                          name="confirmPassword"
                          className={styles.field_password}
                          onChange={handleConfirmPassword}
                        />
                      </div>
                      <div className={styles.eyeIconDiv}>
                        <span style={{ cursor: "pointer" }}>
                          <Image
                            alt="bubbl"
                            src={revealConfirm ? eyeOpen : eyeClose}
                            onClick={() => {
                              setRevealConfirm((isReveal) => !isReveal);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </Form.Group>
                  {confirmPassword && (
                    <span className="text-danger" role="alert">
                      {confirmPassword}
                    </span>
                  )}
                </>
              )}
            </Form>

            <div className={styles.field_password_btn}>
              {/* <Button variant="none" className={styles.cancel_btn}>
                Cancel
              </Button> */}
              {passwordError || currentPassErr || confirmPassword ? (
                <Button
                  style={{
                    opacity: 0.5,
                    pointerEvents: "none",
                  }}
                  variant="none"
                  className={styles.set_btn}
                  onClick={resetPassFunction}
                >
                  Set New
                </Button>
              ) : (
                <Button
                  style={{
                    opacity: resetPass.newPassword === "" ? 0.5 : 1,
                    pointerEvents:
                      resetPass.newPassword === "" ? "none" : "auto",
                  }}
                  variant="none"
                  className={styles.set_btn}
                  onClick={resetPassFunction}
                >
                  Set New Password
                </Button>
              )}
            </div>
          </Col>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfilePage;
