import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { updateProfileName } from "src/App/services/api";
import { validateProfileName } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

import NotAvailable from "@/images/Phase_2_All_Assets/create_profile/notAvailable.svg";
import Tick from "@/images/Phase_2_All_Assets/create_profile/tick.svg";

import styles from "./modals.module.css";

function EditProfileNameModal({
  onHide,
  userProfile,
  userProfileDispatch,
}: {
  onHide: ModalProps["onHide"];
  userProfile: ProfileStateT;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const router = useRouter();
  const saveProfileName = (name: string) => {
    userProfileDispatch({
      type: "update",
      payload: { profileName: name },
    });
    validateProfileName(name).then((res) => {
      userProfileDispatch({
        type: "error",
        payload: { profileName: res.success ? "" : res.message },
      });
    });
  };
  const handleInputChangeModal = (e: any) => {
    saveProfileName(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    saveProfileName(suggestion);
  };

  const handleProfileNameUpdate = () => {
    const { profileId } = router.query;
    if (typeof profileId === "string") {
      updateProfileName({
        profileId,
        profileName: userProfile?.data?.profileName,
      }).then(() => {
        toast.success("Profile Name Updated!", {
          position: "top-right",
          theme: "dark",
          autoClose: 1500,
        });
        if (onHide) {
          onHide();
        }
      });
    }
  };

  return (
    <Modal show onHide={onHide} centered>
      <Modal.Body>
        <div className={styles.step2Details}>
          <h2>Edit Profile Name</h2>
          <div className={styles.line} />
          <h3>Edit profile name for your device*</h3>
          <Form>
            <Form.Group className={styles.formHeight}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Your Profile Name"
                  className={styles.inputFieldStep2}
                  value={userProfile?.data?.profileName}
                  onChange={handleInputChangeModal}
                />
                <div className={styles.confirmationTick}>
                  <InputGroup.Text>
                    {userProfile?.error?.profileName ? (
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
              {userProfile?.error?.profileName && (
                <h6 className={styles.error}>
                  {userProfile?.error?.profileName}
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
          <div className={styles.ActionModal_Image}>
            <Button onClick={onHide} className={styles.ModalClose}>
              Close
            </Button>
            <Button
              onClick={handleProfileNameUpdate}
              className={styles.ModalSave}
            >
              Update
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditProfileNameModal;
