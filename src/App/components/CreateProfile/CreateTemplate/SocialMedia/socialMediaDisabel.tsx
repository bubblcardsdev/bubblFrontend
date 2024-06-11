import { Col, Form } from "react-bootstrap";

import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../../ui/CommonButtons/commonInput";
import styles from "./socialMedia.module.css";

function SocialMediaDisable() {
  return (
    <div className={`${styles["scoial-enable"]}`}>
      {/* Add button */}
      <form className={`${styles["media-add-btn-form"]}`}>
        <Form.Group>
          <div className={`${styles["media-phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["media-phone-toggle"]}`}>
                  <div className={`${styles["media-values"]}`}>Instagram</div>
                </div>
                <div className={`${styles["social-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    id="1"
                    name="socialMediaName"
                    placeholder="userName or https://www.instagram.com "
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>

        <Form.Group>
          <div className={`${styles["media-phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["media-phone-toggle"]}`}>
                  <div className={`${styles["media-values"]}`}>LinkedIn</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["social-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    id="5"
                    name="so"
                    placeholder="@UserName or https://www.linkedin.com"
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>

        <Form.Group>
          <div className={`${styles["media-phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["media-phone-toggle"]}`}>
                  <div className={`${styles["media-values"]}`}>Twitter</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["social-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    id="3"
                    placeholder="@Username or https://www.twitter.com"
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>
        <Form.Group>
          <div className={`${styles["media-phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["media-phone-toggle"]}`}>
                  <div className={`${styles["media-values"]}`}>FaceBook</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["social-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    id="2"
                    placeholder="@Username or https://www.facebook.com"
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>

        <Form.Group>
          <div className={`${styles["media-phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["media-phone-toggle"]}`}>
                  <div className={`${styles["media-values"]}`}> YouTube</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["social-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    id="4"
                    placeholder="@Username or https://youtube.com "
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>
      </form>

      <div className={`${styles["media-div-btn"]}`}>
        <ButtonComp
          label="Save"
          type="submit"
          className={`${styles["media-save-btn"]}`}
        />
      </div>
    </div>
  );
}
export default SocialMediaDisable;
