/* eslint-disable prettier/prettier */
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
import { Col, Form, Overlay, Popover, Row } from "react-bootstrap";
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
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "*/*": [] },
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

  const colorsArr = ["blue", "red"];

  const handleColors = () => {
    if (templateId === "1") {
      setFontSelect(["#DE5D2E", "#D47D58", "#F6BC26"]);
    }
    if (templateId === "2") {
      setFontSelect(["#1F618D", "#BA4A00"]);
    }
    if (templateId === "3") {
      setFontSelect(["#145A32 ", "#D4AC0D "]);
    }
    if (templateId === "4") {
      setFontSelect(["#909497 ", "	#008000"]);
    }
    if (templateId === "4") {
      setFontSelect(["orange", "green"]);
    }
    if (templateId === "6") {
      setFontSelect(["#1B2631", "#1A5276 "]);
    }
    if (templateId === "7") {
      setFontSelect(["#FF69B4", "#FFFACD"]);
    }
    if (templateId === "8") {
      setFontSelect(["#F0F8FF", "#B22222"]);
    }

    return fontSelect;
  };

  const handleColorShowClick = () => {
    setShowColor(!showColor);
    handleColors();
  };
  const handleColorBg = () => {
    setShowColorBg(!showSecondaryColor);
  };
  const handleSecondaryColorShowClick = () => {
    setShowSecondaryColor(!showSecondaryColor);
  };
  const handleAccentColorShowClick = () => {
    setShowAccentColor(!showAccentColor);
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

  return (
    <div>
      <div className={`${styles["branding-heading-div"]}`}>
        <div className={`${styles["branding-payment-icon-mediaHeading"]}`}>
          <Image src={BrandIcon} width="30px" height="30px" alt="bubbl"/>
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
                    <Image src={UploadIcon} alt="bubbl"/>
                  </div>
                  <div className={`${styles["branding-drag-div"]}`}>
                    Drag file here or <span>Browse</span>
                  </div>
                  <div className={`${styles["branding-drag-content-div"]}`}>
                    5 MB max file size
                  </div>
                </div>
              </div>
              <p className={styles.uploadErrorMsg}>
                *Upload only .png file of dimensions 50x90{" "}
              </p>
              <p>{brandLogo}</p>

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
              {/* Background Color */}

              <div>
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
                        width="88px"
                        triangle="hide"
                      />
                    </Popover>
                  </Overlay>
                </div>
              </div>
            </Col>
          </Row>
          <ButtonComp
            label="Save"
            type="submit"
            className={`${styles["branding-save-btn_resp"]}`}
          />
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
