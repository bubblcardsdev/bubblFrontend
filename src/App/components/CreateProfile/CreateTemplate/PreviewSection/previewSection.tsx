/* eslint-disable import/no-unresolved */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/function-component-definition */
import React from "react";
// Temp8
import TemplateEightBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateEight/templateEightBlack";
import TemplateEightLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateEight/templateEightLite";

// Temp5
import TemplateFiveLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFive/templateFiveLite";
import TemplateFiveBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateFive/templateFiveBlack";
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
import TemplateSixLite from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSix/templateSixLite";
import TemplateSixBlack from "src/App/components/Free_Pro_Templates_Bubbl/TemplateSix/templatesSixBlack";

// Temp2
import TemplateTwoBlack from "../../../Free_Pro_Templates_Bubbl/TemplateTwo/templateTwoBlack";
import TemplateTwoLite from "../../../Free_Pro_Templates_Bubbl/TemplateTwo/templateTwoLite";
// Temp3
import TemplateThreeBlack from "../../../Free_Pro_Templates_Bubbl/TemplateThree/TemplateThreeBlack";
import TemplateThreeLite from "../../../Free_Pro_Templates_Bubbl/TemplateThree/TemplateThreeLite";
import style from "./previewSection.module.css";

type Props = {
  profile: any;
  mobileNumbers: any;
  emailUsers: any;
  websiteUsers: any;
  contact: any;
  templateId: any;
  darkMode: any;
  mobileEnable: any;
  emailEnable: any;
  websiteEnable: any;
  socialMediaEnable: any;
  digitalEnable: any;
  textColor: any;
  backColor: any;
  secondaryColor: any;
  mediaArray: any;
  profileImg: { square: string; rectangle: string } | null;
  paymentArray: any;
  modeId: any;
  logoUrl: any;
  plantId: any;
  primaryColor: any;
  qrImageUrl: any;
  accentColor: any;
  deviceId: any;
  companyName: any;
  linkVal: any;
};
const PreviewSection: React.FC<Props> = ({
  profile,
  mobileNumbers,
  websiteUsers,
  emailUsers,
  contact,
  templateId,
  darkMode,
  mobileEnable,
  emailEnable,
  websiteEnable,
  digitalEnable,
  socialMediaEnable,
  textColor,
  backColor,
  mediaArray,
  accentColor,
  secondaryColor,
  profileImg,
  paymentArray,
  modeId,
  logoUrl,
  plantId,
  primaryColor,
  qrImageUrl,
  deviceId,
  companyName,
  linkVal,
}) => {
  return (
    <>
      {(() => {
        if (templateId === "1" || templateId === 1) {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateOneBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                secondaryColor={secondaryColor}
                backColor={backColor}
                profileImg={profileImg}
                mediaArray={mediaArray}
                paymentArray={paymentArray}
                modeId={modeId}
                plantId={plantId}
                logoUrl={logoUrl}
                primaryColor={primaryColor}
                accentColor={accentColor}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateOneLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                backColor={backColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                modeId={modeId}
                plantId={plantId}
                logoUrl={logoUrl}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "2") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateTwoBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                backColor={backColor}
                profileImg={profileImg}
                mediaArray={mediaArray}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateTwoLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                backColor={backColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }

        if (templateId === "3") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateThreeBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
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
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateThreeLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
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
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "4") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateFourBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
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
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateFourLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
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
                plantId={plantId}
                primaryColor={primaryColor}
                logoUrl={logoUrl}
                deviceId={deviceId}
                secondaryColor={secondaryColor}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "5") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateFiveBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                backColor={backColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                logoUrl={logoUrl}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateFiveLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                backColor={backColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                logoUrl={logoUrl}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "6") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateSixBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                profileImg={profileImg}
                mediaArray={mediaArray}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                logoUrl={logoUrl}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateSixLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                profileImg={profileImg}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                logoUrl={logoUrl}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "7") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateSevenBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                textColor={textColor}
                accentColor={accentColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                logoUrl={logoUrl}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateSevenLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                textColor={textColor}
                accentColor={accentColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                logoUrl={logoUrl}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
        if (templateId === "8") {
          return darkMode === true ? (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateEightBlack
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                textColor={textColor}
                accentColor={accentColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          ) : (
            <div className={style.smartphone}>
              <p className={style.smartphone_speaker}>Speaker</p>
              <h1 className={style.smartphone_camera}>Camera</h1>
              <TemplateEightLite
                firstName={profile.firstName}
                lastName={profile.lastName}
                phoneNumber={mobileNumbers}
                emailId={emailUsers}
                website={websiteUsers}
                contacts={contact}
                shortDescription={profile.shortDesc}
                designation={profile.designation}
                mediaArray={mediaArray}
                mobileEnable={mobileEnable}
                emailEnable={emailEnable}
                websiteEnable={websiteEnable}
                socialMediaEnable={socialMediaEnable}
                digitalEnable={digitalEnable}
                textColor={textColor}
                accentColor={accentColor}
                profileImg={profileImg}
                paymentArray={paymentArray}
                plantId={plantId}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                logoUrl={logoUrl}
                modeId={modeId}
                deviceId={deviceId}
                qrImageUrl={qrImageUrl}
                companyName={companyName}
                linkVal={linkVal}
              />
            </div>
          );
        }
      })()}
    </>
  );
};
export default PreviewSection;
