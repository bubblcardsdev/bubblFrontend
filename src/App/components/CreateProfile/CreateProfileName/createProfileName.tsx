/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import LinkImage from "../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/3assets_card.svg";
import {
  listingData,
  PostLinkDevice,
} from "../../../services/createProfileApi";
import InputComp from "../../ui/CommonButtons/commonInput";
import Footer from "../../ui/Footer/footer";
import NavBar from "../../ui/NavBar/_navbar";
import Loader from "../CreateTemplate/Loader";
import Style from "./createProfileName.module.css";
import CreateProfileNameHeader from "./createProfileNameHeader";
import ProfileNameActiveTab from "./profileNameActiveTab";

function CreateProfileName() {
  const router = useRouter();
  let deviceVal: any = "";

  const skipProfile = router?.query?.deviceNumber;
  deviceVal = router?.query?.deviceVal;
  let deviceIdVal: any = "";

  if (skipProfile) {
    deviceIdVal = router?.query?.deviceNumber;
    deviceVal = router?.query?.deviceVal;
  } else {
    deviceIdVal = router?.query?.deviceLinkId;
    deviceVal = router?.query?.deviceVal;
  }

  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const [existErr, setExistError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const templateFunction = async () => {
    setIsLoading(false);
    if (nameError) {
      setNameError("In Valid Name");
    } else {
      const postObj = {
        profileName: nameValue,
        accountDeviceLinkId: Number(deviceIdVal) || null,
      };

      const response: any = await PostLinkDevice(postObj);

      let profileId = "";
      let nameId = "";
      let accId = "";

      const responseError = response.res.data.message;
      if (response?.res?.data?.data) {
        profileId = response?.res?.data?.data?.createDeviceLink?.profileId;
        nameId = response?.res?.data?.data?.createDeviceLink?.id;
        accId =
          response?.res?.data?.data?.createDeviceLink?.accountDeviceLinkId;

        if (nameValue === "") {
          setIsLoading(true);
          setNameError("Profile name cannot be empty");
        } else if (responseError === "Profile name already exists") {
          setIsLoading(true);
          setExistError(responseError);
        } else {
          setIsLoading(true);

          router.replace({
            pathname: "/createProfile/profilepage",
            query: { profileId, nameId, accId, deviceVal },
          });
        }
      } else {
        profileId = response?.res?.data?.createDeviceLink?.profileId;
        nameId = response?.res?.data?.createDeviceLink?.id;
        accId = response?.res?.data?.createDeviceLink?.accountDeviceLinkId;

        if (nameValue === "") {
          setIsLoading(true);
          setNameError("Profile name cannot be empty");
        } else if (responseError === "Profile name already exists") {
          setIsLoading(true);
          setExistError(responseError);
        } else {
          setIsLoading(true);

          router.replace({
            pathname: "/createProfile/profilepage",
            query: { profileId, nameId, accId, deviceVal },
          });
        }
      }
    }
  };

  const listingDataFunc = async () => {
    const response = await listingData();
  };
  useEffect(() => {
    listingDataFunc();
  }, []);
  const SuggestionValues = [
    { id: 1, value: "Home" },
    { id: 2, value: "Office" },
    { id: 3, value: "Personal" },
    { id: 4, value: "Work" },
  ];
  const nameChangeFunction = (e: any) => {
    setNameValue(e.target.value);

    const pattern = /^[a-zA-Z\s]+$/;

    if (!pattern.test(e.target.value)) {
      setNameError("InValid Name");
    } else {
      setExistError("");
      setNameError("");
    }
  };

  const cancelBtn = () => {
    router.replace("/bubblProfiles");
  };

  return (
    <section>
      <ToastContainer />
      <NavBar />
      <div className={Style.profileName_full_div}>
        <div className="container">
          <CreateProfileNameHeader />
          <Card className={Style.card_header}>
            <ProfileNameActiveTab />
            <Row className={Style.card_header_section}>
              <Col xl={4} lg={4}>
                <div className={Style.Image_div}>
                  <Image src={LinkImage} alt="bubbl" />
                </div>
              </Col>
              <Col xl={5} lg={6} md={10} className={Style.ProfileDiv}>
                <div className={Style.linkDevice}>
                  Create a profile name for your device
                </div>
                <div className={Style.inputButtonDiv}>
                  <InputComp
                    className={Style.inputDiv}
                    type="text"
                    placeholder="Create your profile Name"
                    onChange={(e: any) => nameChangeFunction(e)}
                    value={nameValue}
                  />
                </div>

                {nameError && <span style={{ color: "red" }}>{nameError}</span>}
                {existErr && <span style={{ color: "red" }}>{existErr}</span>}
                <div className={`${Style["example-profile-name"]}`}>
                  Suggestions (Profile Name)
                </div>

                {SuggestionValues.map((val: any) => (
                  <Button
                    className={`${Style["suggestion-names"]}`}
                    onClick={() => {
                      setNameValue(val.value);
                      setNameError("");
                    }}
                  >
                    {val.value}
                  </Button>
                ))}

                <br />
                <div className={`${Style["next-btn-div"]}`}>
                  <div>
                    <Button variant="none" onClick={cancelBtn}>
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      className={`${Style["next-btn-name"]}`}
                      onClick={templateFunction}
                    >
                      {isLoading ? (
                        "Next"
                      ) : (
                        <Spinner animation="grow" size="sm">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      )}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <Footer />
      </div>
    </section>
  );
}
export default CreateProfileName;
