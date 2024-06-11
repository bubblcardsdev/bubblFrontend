/* eslint-disable no-unused-vars */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { listingData } from "src/App/services/createProfileApi";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color.svg";
import CreateProfileIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color.svg";
import LinkDeviceIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color-white.svg";
import SuccessImg from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/tick-icon.svg";
import Footer from "../../ui/Footer/footer";
import NavBar from "../../ui/NavBar/_navbar";
import LinkDeviceHeader from "../LinkDeviceNumber/LinkDeviceHeader";
import Styles from "./profileVerified.module.css";

function ProfileVerified() {
  const [nameHide, setNameHide] = useState(true);
  const router = useRouter();
  const deviceLinkId = router.query.linkId;
  const deviceVal = router?.query?.deviceVal;
  const [plan, setPlan] = useState<any>();
  const [checkProfiles, setCheckProfiles] = useState<any>();

  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };

  const allProfiles = async () => {
    const res = await listingData();
    setCheckProfiles(res?.data?.profiles);
  };

  useEffect(() => {
    getPlanDetails();
    allProfiles();
  }, []);

  const profileCreation = () => {
    setNameHide(false);

    router.replace({
      pathname: "/createProfile/profilename",
      query: { deviceLinkId, deviceVal: deviceVal },
    });
    setNameHide(true);
  };
  return (
    <>
      <NavBar />
      <div className={Styles.profile_full_background}>
        <div className="container">
          <LinkDeviceHeader />
          <div className={Styles.card_header}>
            <div className={Styles.device_header_line} />
            <div className={Styles.device_header}>
              <div>
                <div className={Styles.link_icon_background}>
                  <Image src={LinkDeviceIcon} width="25" alt="bubbl" />
                </div>
                <div className={Styles.device_header_linkedDevice}>
                  Link your Device
                </div>
              </div>
              <div>
                <div className={Styles.profile_icon}>
                  <Image src={CreateProfileIcon} alt="bubbl" />
                </div>
                <div>
                  <div className={Styles.device_header_profile}>
                    Create Profile Name
                  </div>
                </div>
              </div>
              <div>
                <div className={Styles.profile_icon}>
                  <Image src={TemplateIcon} width="25" alt="bubbl" />
                </div>
                <div>
                  <div className={Styles.device_header_profile}>
                    Choose a Template
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className={Styles.suceessImg}>
                  <Image src={SuccessImg} width="40px" alt="bubbl" />
                </div>

                <div className={Styles.successImg_msg}>
                  Your Device is Successfully Linked
                </div>
              </div>
              <div className={Styles.successImg_createName}>
                Proceed to Create a Profile Name
              </div>

              {plan?.getPlans?.planId === 1 ? (
                <div className={Styles.create_profile_btn}>
                  <Button
                    onClick={profileCreation}
                    className={Styles.profileName_btn}
                  >
                    {nameHide ? (
                      "Create a Profile Name"
                    ) : (
                      <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                  </Button>
                </div>
              ) : (
                <div className={Styles.create_profile_btn}>
                  <Button
                    onClick={profileCreation}
                    className={Styles.profileName_btn}
                  >
                    {nameHide ? (
                      "Create a Profile Name"
                    ) : (
                      <Spinner animation="grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default ProfileVerified;
