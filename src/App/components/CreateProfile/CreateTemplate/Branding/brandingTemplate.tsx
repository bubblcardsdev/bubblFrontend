/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Overlay, Popover, Row } from "react-bootstrap";
import { CompactPicker, GithubPicker, SketchPicker } from "react-color";
import { useDropzone } from "react-dropzone";
import Footer from "src/App/components/ui/Footer/footer";

import BrandIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/branding/branding-icon.svg";
import UploadIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/branding/upload-icon.png";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import styles from "./brandingTemplate.module.css";

type Props = {
  BrandingValues: any;
  handleColorChange: any;
  handleColorChangeBackground: any;
  handleColorChangeAccent: any;
  fontColor: string;
  backColor: any;
  handleSecColorChange: any;
  handleAccentColorChange: any;
  accentColor: any;
  handleDarkMode: any;
  onDrop: any;
  brandLogo: any;
  darkMode: boolean;
  handleFontChange: any;
  fontStyle: any;
  templateId: any;
  deleteImageApi: any;
  logoUrl: any;
};

// eslint-disable-next-line react/function-component-definition
const BrandingTemplate: React.FC<Props> = ({
  BrandingValues,
  handleColorChange,
  handleSecColorChange,
  handleColorChangeBackground,
  handleColorChangeAccent,
  fontColor,
  handleAccentColorChange,
  handleFontChange,
  accentColor,
  handleDarkMode,
  backColor,
  onDrop,
  brandLogo,
  fontStyle,
  darkMode,
  templateId,
  deleteImageApi,
  logoUrl,
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop,
  });

  const [showColor, setShowColor] = useState(false);
  const [showColorBg, setShowColorBg] = useState(false);
  const [showSecondaryColor, setShowSecondaryColor] = useState(false);
  const [showAccentColor, setShowAccentColor] = useState(false);
  const target = useRef(null);
  const showColorTargetFontColor = useRef(null);
  const showColorTargetBackgroundColor = useRef(null);
  const showColorTargetAccent = useRef(null);
  const [fontSelect, setFontSelect] = useState<any>([]);
  const [secondaryColorSelect, setSecondaryColorSelect] = useState<any>([]);

  const colorsArr = ["blue", "red"];
  // colors for Primary Color picker
  const handlePrimaryColors = () => {
    if (templateId === "1") {
      setFontSelect(["#DE5D2E", "#D47D58", "#F6BC26"]);
    }
    if (templateId === "2") {
      setFontSelect(["#ECB526", "#4D62B2", "#5E4F7D"]);
    }
    if (templateId === "3") {
      setFontSelect(["#155FB7 ", "#5049A1", "#6199ED"]);
    }
    if (templateId === "4") {
      setFontSelect(["#FB6574", "#58B7B2", "#9B5785"]);
    }
    if (templateId === "5") {
      setFontSelect(["#BC5B9C", "#B76850", "#50B1B7"]);
    }
    if (templateId === "6") {
      setFontSelect(["#7349B7", "#B78449", "#B75D49"]);
    }
    if (templateId === "7") {
      setFontSelect(["#287365", "#BBC858", "#76B062"]);
    }
    if (templateId === "8") {
      setFontSelect(["#19A985", "#A157A3", "#BCB048"]);
    }
    return fontSelect;
  };

  // colors for Secondary Color picker

  const handleSecondaryColors = () => {
    if (templateId === "1") {
      setSecondaryColorSelect(["#FFEBE3", "#FEE9E0", "#FFF7E3"]);
    }
    if (templateId === "2") {
      setSecondaryColorSelect(["#FFF7E2", "#E2E8FF", "#ECE2FF"]);
    }
    if (templateId === "3") {
      setSecondaryColorSelect(["#E2EFFF ", "#E5E2FF", "#E2EEFF"]);
    }
    if (templateId === "4") {
      setSecondaryColorSelect(["#FFE2E5 ", "#58B7B2", "#FFE2F6"]);
    }
    if (templateId === "5") {
      setSecondaryColorSelect(["#BC5B9C", "#FFE9E2", "#E1FDFF"]);
    }
    if (templateId === "6") {
      setSecondaryColorSelect(["#7349B7", "#FFF2E2", "#FFE7E2"]);
    }
    if (templateId === "7") {
      setSecondaryColorSelect(["#E2FFFA", "#FBFEE2", "#E9FFE1"]);
    }
    if (templateId === "8") {
      setSecondaryColorSelect(["#A157A3", "#FFFCE2", "#E1FFF8"]);
    }
    return secondaryColorSelect;
  };

  const handleColorShowClick = () => {
    setShowColor(!showColor);
    handlePrimaryColors();
  };

  const handleAccentColorShowClick = () => {
    setShowAccentColor(!showAccentColor);
    handleSecondaryColors();
  };

  const handleClose = () => {
    setShowColor(false);
    setShowSecondaryColor(false);
    setShowAccentColor(false);
    setShowColorBg(false);
  };

  const BrandingSave = (e: any) => {
    e.preventDefault();
    const colorValues = {
      primaryColor: fontColor,
      secondaryColor: backColor,
    };
    BrandingValues(colorValues);
  };

  const deleteImageDunction = (e: any) => {
    e.preventDefault();
    deleteImageApi();
  };

  return (
    <div>
      <div className={`${styles["branding-heading-div"]}`}>
        <div className={`${styles["branding-payment-icon-mediaHeading"]}`}>
          <Image src={BrandIcon} width="30px" height="30px" alt="bubbl" />
          <div className={`${styles["branding-text"]}`}>Branding</div>
        </div>
      </div>
      <div className="container">
        <form>
          <Row>
            <Col
              className={`${styles["branding-upload-left"]}`}
              xl={6}
              md={6}
              xs={12}
            >
              <div className={`${styles["branding-upload"]}`}>
                Upload your Logo
              </div>
              <div
                className={`${styles["branding-upload-div"]}`}
                {...getRootProps()}
              >
                <input {...getInputProps()} autoComplete="nope" />

                <div>
                  <div className={`${styles["branding-img-div"]}`}>
                    <Image src={UploadIcon} alt="bubbl" />
                  </div>
                  <div className={`${styles["branding-drag-div"]}`}>
                    Drag file here or <span>Browse</span>
                  </div>
                  <div className={`${styles["branding-drag-content-div"]}`}>
                    5 MB max file size
                  </div>
                </div>
              </div>
              <p className={styles.uploadErrorMsg}>*Upload only image file</p>
              <p>{brandLogo}</p>
              {logoUrl && (
                <div className={`${styles["profile-div-btn-reset"]}`}>
                  <ButtonComp
                    label="Reset Image"
                    onClick={deleteImageDunction}
                    className={`${styles["profile-reset-btn"]}`}
                  />
                </div>
              )}

              <div
                className={`${styles["branding-div-btn"]}`}
                onClick={BrandingSave}
              >
                <ButtonComp
                  label="Save"
                  type="submit"
                  className={`${styles["branding-save-btn"]}`}
                />
              </div>
            </Col>
            <Col xl={6} md={6} xs={12} className={styles.choose_mode}>
              <p className={styles.color_mode}>Choose your color Mode</p>
              <div className={styles.color_mode_section}>
                <div className={styles.dark_color_mode}>
                  <h3>Dark Mode</h3>
                </div>
                <div className={`${styles["dark-color-div"]}`}>
                  <Form.Check
                    type="switch"
                    label=""
                    onChange={handleDarkMode}
                    checked={darkMode}
                  />
                </div>
              </div>
              <h6 className={styles.dark_color_or}>(or)</h6>
              <p className={`${styles["brand-color-heading"]}`}>
                Choose your brand colors
              </p>
              {/* Font Color */}
              <div>
                <div className={`${styles["branding-color-div"]}`}>
                  <div className={`${styles["placeholder-color-div"]}`}>
                    {fontColor === "" ? "Primary Color" : fontColor}
                  </div>
                  <div
                    ref={showColorTargetFontColor}
                    className={`${styles["branding-color-box"]}`}
                    onClick={handleColorShowClick}
                    style={fontColor ? { backgroundColor: fontColor } : {}}
                  />
                  <Overlay
                    show={showColor}
                    rootClose
                    onHide={handleColorShowClick}
                    target={showColorTargetFontColor}
                  >
                    <Popover>
                      <GithubPicker
                        color={fontColor}
                        onChange={handleColorChange}
                        colors={fontSelect}
                        width="88px"
                        triangle="hide"
                      />
                    </Popover>
                  </Overlay>
                </div>
              </div>

              <div style={{ opacity: darkMode ? 0.3 : 1 }}>
                <div className={`${styles["branding-color-div"]}`}>
                  <div className={`${styles["placeholder-color-div"]}`}>
                    {accentColor === "" ? "Secondary Color" : accentColor}
                  </div>
                  <div
                    ref={showColorTargetAccent}
                    className={`${styles["branding-color-box"]}`}
                    onClick={handleAccentColorShowClick}
                    style={accentColor ? { backgroundColor: accentColor } : {}}
                  />
                  <Overlay
                    show={showAccentColor}
                    rootClose
                    onHide={handleAccentColorShowClick}
                    target={showColorTargetAccent}
                  >
                    <Popover>
                      <GithubPicker
                        color={fontColor}
                        onChange={handleAccentColorChange}
                        colors={secondaryColorSelect}
                        width="88px"
                        triangle="hide"
                      />
                    </Popover>
                  </Overlay>
                </div>
              </div>
            </Col>
          </Row>
          <div
            // className={`${styles["branding-div-btn"]}`}
            onClick={BrandingSave}
          >
            <ButtonComp
              label="Save"
              type="submit"
              className={`${styles["branding-save-btn_resp"]}`}
            />
          </div>
          {/* <ButtonComp
            label="Save"
            type="submit"
            className={`${styles["branding-save-btn_resp"]}`}
          /> */}
        </form>
      </div>

      {showSecondaryColor === true ? (
        <Overlay
          show={showSecondaryColor}
          target={target.current}
          placement="bottom"
          rootClose
        >
          {({
            placement,
            arrowProps,
            show: _show,
            popper,
            style,
            ...props
          }) => (
            <div
              {...props}
              onClick={handleClose}
              style={{
                ...style,
              }}
            >
              {/* <SketchPicker color={backColor} onChange={handleSecColorChange} /> */}
            </div>
          )}
        </Overlay>
      ) : null}

      {showAccentColor === true ? (
        <Overlay
          show={showAccentColor}
          target={target.current}
          placement="bottom"
          rootClose
        >
          {({
            placement,
            arrowProps,
            show: _show,
            popper,
            style,
            ...props
          }) => (
            <div
              {...props}
              onClick={handleClose}
              style={{
                ...style,
              }}
            >
              {/* <SketchPicker
                color={accentColor}
                onChange={handleAccentColorChange}
              /> */}
            </div>
          )}
        </Overlay>
      ) : null}
    </div>
  );
};
export default BrandingTemplate;
