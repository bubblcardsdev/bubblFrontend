/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { directUrlMode } from "src/App/services/modes";

import axios from "../../../helpers/axios";
import ButtonComp from "../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../ui/CommonButtons/commonInput";
import ImgBanner from "../ImgBanner/imgBanner";
import styles from "./directURL.module.css";

function DirectURLForm({
  show,
  onClose,
  onSubmit,
  directValues,
  firstName,
  designation,
}: any) {
  const [urlValue, setUrlValue] = useState();
  const [urlError, setUrlError] = useState("");
  const [profileImages, setProfileImages] = useState<any>();

  // onClick function
  const submitFunction = async () => {
    if (urlValue === undefined || urlValue === "") {
      setUrlError("URL cannot be empty");
    } else {
      setUrlError("");
      const urlObj = {
        deviceId: directValues?.AccountDeviceLink?.Device?.id,
        url: urlValue,
      };
      const urlResponse = await directUrlMode(urlObj);
      if (urlResponse?.data?.success) {
        toast.success("Successfully Submitted", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      if (urlError === "") {
        onSubmit();
      }
    }
  };

  // handle Change for URL
  const urlHandleChange = (e: any) => {
    const invalidWord = "https://bubbl.cards/profile/";

    const inValidWordTwo = "bubbl.cards/profile/";

    const websiteRegex =
      /^(?:(https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/[a-zA-Z0-9-._~:/?#[\]@!$&%'()*+,;=]*)?$/;

    if (e.target.value.includes(invalidWord || inValidWordTwo)) {
      setUrlError("You can not add this");
    } else if (!websiteRegex.test(e.target.value)) {
      setUrlError("Invalid WebSite Address");
      setUrlValue(e.target.value);
    } else {
      setUrlValue(e.target.value);

      setUrlError("");
    }
  };

  const getProfileImages = async () => {
    const res = await axios.post("profile/getProfileImage", {
      profileId: directValues?.ProfileId,
    });
    const profileImgs = res?.data?.profileImages.reduce(
      (
        acc: { square: string; rectangle: string },
        item: { type: string; image: string }
      ) => {
        switch (item.type) {
          case "0":
            return { ...acc, square: item.image };
          default:
            return acc;
        }
      },
      {}
    );
    setProfileImages(profileImgs);
    return res;
  };

  useEffect(() => {
    getProfileImages();
  }, [urlValue]);

  return (
    <div>
      <ToastContainer />

      <Modal show={show} centered>
        <Modal.Body className={`${styles["url-main-container"]}`}>
          <div className="container">
            <p className={styles.closeButton} onClick={onClose}>
              X
            </p>
            <ImgBanner
              directValues={directValues}
              profileImg={profileImages}
              firstName={firstName}
              designation={designation}
            />
            <div className={styles.imageHrLine} />

            {/* direct form */}
            <h5 className={styles.url_headings}> Direct URL</h5>
            <div className={styles.urlLinkDiv}>
              <InputComp
                className={styles.inputDiv}
                onChange={urlHandleChange}
                type="text"
                name="url"
                placeholder="Enter your URL Link"
              />
            </div>
            {urlError && (
              <span className={styles.errorText} role="alert">
                {urlError}
              </span>
            )}
            {/* button */}
            <div
              onClick={submitFunction}
              className={styles.buttonDiv}
              style={{
                cursor: "pointer",
                opacity: urlError ? 0.5 : 1,
                pointerEvents: urlError ? "none" : "auto",
              }}
            >
              <ButtonComp
                className={styles.buttonTag}
                variant="none"
                label="Submit"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DirectURLForm;
