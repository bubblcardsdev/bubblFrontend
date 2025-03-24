/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LeadGenerationForm from "src/App/components/Modes/LeadForm/leadGenerationForm";
import ViewAddressModal from "src/App/components/Phase2_All_Components/Modals/ViewAddressModal";
import ViewMailModal from "src/App/components/Phase2_All_Components/Modals/ViewMailModal";
import ViewMobileNumberModal from "src/App/components/Phase2_All_Components/Modals/ViewMobileNumberModal";
import ViewWebsiteModal from "src/App/components/Phase2_All_Components/Modals/ViewWebsiteModal";
import FreeTemplateOne from "src/App/components/Phase2_All_Components/Phase2_Templates/Free_Templates/Free_Template_1";
import FreeTemplateTwo from "src/App/components/Phase2_All_Components/Phase2_Templates/Free_Templates/Free_Template_2";
import ProTemplateTwo from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_3";
import ProTemplateThree from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_4";
import ProTemplateFive from "src/App/components/Phase2_All_Components/Phase2_Templates/Pro_Templates/Pro_Templates_5";
import { getAccessToken } from "src/App/helpers/local-storage";
import { getProfileByDevice, getProfileByName } from "src/App/services/api";
import { getDirectUrlMode } from "src/App/services/modes";
import { PostTapDetails } from "src/App/services/tapApi";
import { getUniqueName } from "src/App/services/unique";
import { MODAL_TYPES, ModalT } from "types/modal";

import RegisterPage from "./register";

export interface typeProfileI {
  firstName: string;
  designation: string;
}

function TapComponent() {
  const router: any = useRouter();
  const { deviceUid } = router.query;

  const [getAllProfile, setAllProfile] = useState<any>();
  const [userData, setUserData] = useState<any>();
  const [deviceBranding, setDeviceBranding] = useState<any>();
  const [profileImg, setProfileImg] = useState<{
    square: string;
    rectangle: string;
  } | null>(null);
  const [logo, setLogo] = useState<any>();

  const [modalType, setModalType] = useState<ModalT>("");
  const [uniqueName, setUniqueName] = useState<any>();
  const [templateId, setTemplateId] = useState(1);
  const [modeId, setModeId] = useState();
  const [getUrlValue, setGetUrlValue] = useState<any>();
  const [leadFormShow, setLeadFormShow] = useState<boolean>(false);
  const [leadValues, setLeadValues] = useState<any>();
  const [profileInformation, setProfileInformation] = useState<typeProfileI>();
  const [page, setPage] = useState("");
  const [deviceNo, setDeviceNo] = useState<any>();

  // GET UNIQUE  NAME
  const getUniqueNameFunc = async (deviceLinkId: number) => {
    const nameObj = {
      deviceLinkId: deviceLinkId,
    };
    const resp: any = await getUniqueName(nameObj);
    setUniqueName(resp?.name?.uniqueName);

    // if (resp?.name?.uniqueName) {
    //   router.replace(`/template/${resp?.name?.uniqueName}`);
    // }
  };
  // GET DIRECT URL
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
      ? router?.query?.deviceUid
      : null;
    if (numberVal !== null) {
      localStorage.setItem("deviceNumber", numberVal);
    }
    if (token !== null) {
      router.push("/login");
    }
  };

  const [twiceVal, setTwiceVal] = useState(false);

  const tapApiFunction = async () => {
    if (!twiceVal) {
      setTwiceVal(true);
      const tapId = router?.query?.deviceUid ? router?.query?.deviceUid : null;
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

  const getProfileByDeviceFunction = async () => {
    if (deviceUid) {
      // Check if deviceUid contains at least one digit
      const containsNumbers = /\d/.test(deviceUid);
      let response: any;
      if (containsNumbers === false) {
        const uniqueName = deviceUid;
        response = await getProfileByName(uniqueName);
        setDeviceNo(
          response?.profile?.DeviceLink?.AccountDeviceLink?.Device?.deviceUid
        );
        setAllProfile(response?.profile);
        setUserData(response?.user);
      } else {
        response = await getProfileByDevice(deviceUid);
        setDeviceNo(deviceUid);
      }

      console.log(response, "resoo");
      if (response.success === true) {
        setAllProfile(response?.profile);
        setUserData(response?.user);
        if (response?.profile?.DeviceLink) {
          setProfileInformation(response?.profile);
          setModeId(response?.profile?.DeviceLink?.ModeId);
          setTemplateId(response?.profile?.DeviceLink?.TemplateId);
          setLogo(response?.profile?.brandingLogoUrl);
          getURLFunction(
            response?.profile?.DeviceLink?.AccountDeviceLink?.DeviceId,
            response?.profile?.DeviceLink?.ModeId
          );
        }
        if (response?.profile?.DeviceLink?.id) {
          getUniqueNameFunc(response?.profile?.DeviceLink?.id);
        }
        const profileImage = response?.profileImages.reduce(
          (
            acc: { square?: string; rectangle?: string },
            item: { type: number; image: string }
          ) => {
            switch (Number(item.type)) {
              case 0:
                return { ...acc, square: item.image };
              case 1:
                return { ...acc, rectangle: item.image };
              default:
                return acc;
            }
          },
          {}
        );

        setProfileImg(profileImage);

        response?.deviceBranding?.map((val: any) => {
          if (val.templateId === response?.profile?.DeviceLink?.templateId) {
            setDeviceBranding(val);
          }
        });
        tapApiFunction();
        setPage("profile");
      } else {
        getDeviceIdFromStorage();
        setPage("register");
      }
    }
  };

  let modal: React.ReactNode = null;

  const hideModal = () => setModalType(MODAL_TYPES.empty);

  switch (modalType) {
    case MODAL_TYPES.empty:
      modal = null;
      break;

    case MODAL_TYPES.mobileNumberView:
      modal = (
        <ViewMobileNumberModal
          onHide={hideModal}
          getAllProfile={getAllProfile}
          userProfile={undefined}
        />
      );
      break;

    case MODAL_TYPES.emailIdView:
      modal = (
        <ViewMailModal
          onHide={hideModal}
          userProfile={undefined}
          getAllProfile={getAllProfile}
        />
      );
      break;

    case MODAL_TYPES.websiteView:
      modal = (
        <ViewWebsiteModal
          onHide={hideModal}
          userProfile={undefined}
          getAllProfile={getAllProfile}
        />
      );
      break;

    case MODAL_TYPES.addressView:
      modal = (
        <ViewAddressModal onHide={hideModal} userProfile={getAllProfile} />
      );
      break;

    default:
      break;
  }
  useEffect(() => {
    getProfileByDeviceFunction();
  }, [router]);

  function ApplyTemplate() {
    let templateNode = null;

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
    }

    if (modeId === 4) {
      setLeadFormShow(true);

      templateNode = (
        <div>
          {leadFormShow && (
            <LeadGenerationForm
              show={leadFormShow}
              leadValues={leadValues}
              firstName={profileInformation?.firstName || ""}
              designation={profileInformation?.designation || ""}
              profileImg={profileImg || ""}
              deviceId={router?.query?.deviceUid}
            />
          )}
        </div>
      );
      return templateNode;
    }
    switch (templateId) {
      case 1:
        templateNode = (
          <FreeTemplateOne
            edit={false}
            deviceBranding={deviceBranding}
            qrImage={logo}
            userName={uniqueName || deviceUid}
            profileImage={profileImg}
            handleSave={undefined}
            handleQrSave={undefined}
            userProfile={undefined}
            userProfileDispatch={undefined}
            setModalType={setModalType}
            getAllProfile={getAllProfile}
            modeId={modeId}
            imageError=""
            deviceUid={deviceNo}
            deviceId={deviceNo}
          />
        );

        break;
      case 2:
        templateNode = (
          <FreeTemplateTwo
            edit={false}
            deviceBranding={deviceBranding}
            userProfile={undefined}
            profileImage={profileImg}
            userProfileDispatch={undefined}
            setModalType={setModalType}
            handleSave={undefined}
            handleQrSave={undefined}
            qrImage={logo}
            userName={uniqueName || deviceUid}
            getAllProfile={getAllProfile}
            modeId={modeId}
            imageError=""
            deviceUid={deviceNo}
            deviceId={deviceNo}
            userData={userData}
          />
        );
        break;
      case 3:
        templateNode = (
          <ProTemplateTwo
            edit={false}
            deviceBranding={deviceBranding}
            userProfile={undefined}
            profileImage={profileImg}
            userProfileDispatch={undefined}
            setModalType={setModalType}
            handleSave={undefined}
            handleQrSave={undefined}
            qrImage={logo}
            userName={uniqueName || deviceUid}
            getAllProfile={getAllProfile}
            modeId={modeId}
            imageError=""
            deviceUid={deviceNo}
            deviceId={deviceNo}
          />
        );
        break;
      case 4:
        templateNode = (
          <ProTemplateThree
            edit={false}
            deviceBranding={deviceBranding}
            userProfile={undefined}
            profileImage={profileImg}
            userProfileDispatch={undefined}
            setModalType={setModalType}
            handleSave={undefined}
            handleQrSave={undefined}
            qrImage={logo}
            userName={uniqueName || deviceUid}
            getAllProfile={getAllProfile}
            modeId={modeId}
            imageError=""
            deviceUid={deviceNo}
            deviceId={deviceNo}
          />
        );
        break;
      case 5:
        templateNode = (
          <ProTemplateFive
            edit={false}
            deviceBranding={deviceBranding}
            userProfile={undefined}
            profileImage={profileImg}
            userProfileDispatch={undefined}
            setModalType={setModalType}
            handleSave={undefined}
            handleQrSave={undefined}
            qrImage={logo}
            userName={uniqueName || deviceUid}
            getAllProfile={getAllProfile}
            modeId={modeId}
            imageError=""
            deviceUid={deviceNo}
            deviceId={deviceNo}
          />
        );
        break;

      default:
        break;
    }
    return (
      <div>
        {modal}
        {templateNode}
      </div>
    );
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
export default TapComponent;
