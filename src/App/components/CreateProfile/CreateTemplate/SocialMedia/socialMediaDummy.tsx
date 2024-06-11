/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import Image from "next/image";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import DeleteIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/social_media_links/delete-icon.svg";
import SocialMediaIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/social_media_links/social_media-icon.svg";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../../ui/CommonButtons/commonInput";
import styles from "./socialMedia.module.css";

interface SocialMediaInput {
  instagram: "string";
  linkedin: "string";
  twitter: "string";
  facebook: "string";
  youtube: "string";
}
type Props = {
  socialEnable: any;
  socialMediaFunction: any;
  socialMediaToggle: any;
  mediaArray: any;
  onSubmitSave: any;
  socialEnableFunc: any;
  socialMediaEnable: any;
  socialMediaDeleteFunc: any;
};

// eslint-disable-next-line react/prop-types, no-unused-vars, react/function-component-definition
const SocialMedia: React.FC<Props> = ({
  socialEnable,
  socialMediaFunction,
  mediaArray,
  onSubmitSave,
  socialEnableFunc,
  socialMediaEnable,
  socialMediaDeleteFunc,
  socialMediaToggle,
}) => {
  const [twitterToggle, setTwitterToggle] = useState(true);
  const [youTubeToggle, setYouTubeToggle] = useState(true);
  const [fbToggle, setFBToggle] = useState(true);
  const [linkedIn, setLinkedIn] = useState(true);
  const [socialToggle, setSocialToggle] = useState(true);
  const { control, handleSubmit } = useForm<SocialMediaInput>();

  const onSubmit = () => {
    onSubmitSave();
  };

  const socialToggleFunc = (e: any) => {
    setSocialToggle(e.target.checked);
    socialEnable(e.target.checked);
  };

  const toggleFunction = (e: any, id: any) => {};
  return (
    <div>
      <div className={`${styles["media-heading-div"]}`}>
        <div className={`${styles["media-payment-icon"]}`}>
          <div className={`${styles["media-payment-icon-mediaHeading"]}`}>
            <div className={`${styles["media-payment-icon"]}`}>
              <Image
                src={SocialMediaIcon}
                width="30px"
                height="30px"
                alt="bubbl"
              />
            </div>
            <div className={`${styles["social-media-heading"]}`}>
              Social Media Links
            </div>
          </div>
        </div>
        <div>
          <div>
            <Form.Check
              type="switch"
              label=""
              onChange={socialEnableFunc}
              checked={socialMediaEnable}
            />
          </div>
        </div>
      </div>
      {socialMediaEnable === false ? (
        <div className={`${styles["scoial-enable"]}`}>
          {/* Add button */}
          <div className={`${styles["media-add-btn-form"]}`}>
            <ButtonComp
              label="+ Add"
              className={`${styles["media-add-btn"]}`}
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${styles["media-add-btn-form"]}`}
          >
            <Form.Group>
              <div className={`${styles["media-phone-toggle-div"]}`}>
                <Col xs={8}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        Instagram
                      </div>
                      <Form.Check type="switch" label="" />
                    </div>
                    <div className={`${styles["social-media-input-div"]}`}>
                      <InputComp
                        type="text"
                        id="1"
                        name="socialMediaName"
                        placeholder="https://www.instagram.com"
                        onChange={(e: any) => socialMediaFunction(e, 1)}
                      />
                    </div>
                  </div>
                </Col>

                <div className={`${styles["media-delete-img"]}`}>
                  <Image src={DeleteIcon} />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={`${styles["media-phone-toggle-div"]}`}>
                <Col xs={8}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        LinkedIn
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          onChange={(e) => setLinkedIn(e.target.checked)}
                        />
                      </div>
                    </div>
                    <div className={`${styles["social-media-input-div"]}`}>
                      <InputComp
                        type="text"
                        id="5"
                        name="so"
                        placeholder="https://www.linkedin.com"
                        onChange={(e: any) => socialMediaFunction(e, 5)}
                      />
                    </div>
                  </div>
                </Col>

                <div className={`${styles["media-delete-img"]}`}>
                  <Image src={DeleteIcon} />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={`${styles["media-phone-toggle-div"]}`}>
                <Col xs={8}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>Twitter</div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          onChange={(e) => setTwitterToggle(e.target.checked)}
                        />
                      </div>
                    </div>
                    <div className={`${styles["social-media-input-div"]}`}>
                      <Controller
                        name="twitter"
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                          <InputComp
                            type="text"
                            id="3"
                            placeholder="https://www.twitter.com"
                            onChange={(e: any) => socialMediaFunction(e, 3)}
                            value={value}
                            onBlur={onBlur}
                          />
                        )}
                      />
                    </div>
                  </div>
                </Col>

                <div className={`${styles["media-delete-img"]}`}>
                  <Image src={DeleteIcon} />
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <div className={`${styles["media-phone-toggle-div"]}`}>
                <Col xs={8}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        FaceBookrferferf
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          onChange={(e: any) => socialMediaFunction(e, 2)}
                        />
                      </div>
                    </div>
                    <div className={`${styles["social-media-input-div"]}`}>
                      <InputComp
                        type="text"
                        id="2"
                        placeholder="https://www.facebook.com"
                        onChange={(e: any) => socialMediaFunction(e, 2)}
                      />
                    </div>
                  </div>
                </Col>

                <div className={`${styles["media-delete-img"]}`}>
                  <Image src={DeleteIcon} />
                </div>
              </div>
            </Form.Group>

            <Form.Group>
              <div className={`${styles["media-phone-toggle-div"]}`}>
                <Col xs={8}>
                  <div>
                    <div className={`${styles["media-phone-toggle"]}`}>
                      <div className={`${styles["media-values"]}`}>
                        {" "}
                        YouTube
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          onChange={(e) => setYouTubeToggle(e.target.checked)}
                        />
                      </div>
                    </div>
                    <div className={`${styles["social-media-input-div"]}`}>
                      <Controller
                        name="youtube"
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                          <InputComp
                            type="text"
                            id="4"
                            placeholder="https://www.youtube.com"
                            onChange={(e: any) => socialMediaFunction(e, 4)}
                            value={value}
                            onBlur={onBlur}
                          />
                        )}
                      />
                    </div>
                  </div>
                </Col>

                <div className={`${styles["media-delete-img"]}`}>
                  <Image src={DeleteIcon} />
                </div>
              </div>
            </Form.Group>

            <div className={`${styles["media-div-btn"]}`}>
              <ButtonComp
                label="Save"
                type="submit"
                className={`${styles["media-save-btn"]}`}
              />
            </div>
          </form>
        </div>
      ) : (
        <div>
          {mediaArray.length === 0 ? (
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`${styles["media-add-btn-form"]}`}
              >
                <Form.Group>
                  <div className={`${styles["media-phone-toggle-div"]}`}>
                    <Col xs={8}>
                      <div>
                        <div className={`${styles["media-phone-toggle"]}`}>
                          <div className={`${styles["media-values"]}`}>
                            Instagram
                          </div>
                          <div>
                            <Form.Check
                              type="switch"
                              label=""
                              id="1"
                              onChange={(e: any) => socialMediaToggle(e, 1)}
                            />
                          </div>
                        </div>
                        <div className={`${styles["social-media-input-div"]}`}>
                          <InputComp
                            type="text"
                            id="1"
                            name="socialMediaName"
                            placeholder="https://www.instagram.com"
                            onChange={(e: any) => socialMediaFunction(e, 1)}
                          />
                        </div>
                      </div>
                    </Col>

                    <div className={`${styles["media-delete-img"]}`}>
                      <Image
                        src={DeleteIcon}
                        onClick={() => socialMediaDeleteFunc()}
                      />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group>
                  <div className={`${styles["media-phone-toggle-div"]}`}>
                    <Col xs={8}>
                      <div>
                        <div className={`${styles["media-phone-toggle"]}`}>
                          <div className={`${styles["media-values"]}`}>
                            LinkedIn
                          </div>
                          <div>
                            <Form.Check
                              id="5"
                              type="switch"
                              label=""
                              onChange={(e: any) => socialMediaToggle(e, 5)}
                            />
                          </div>
                        </div>
                        <div className={`${styles["social-media-input-div"]}`}>
                          <Controller
                            name="linkedin"
                            control={control}
                            render={({
                              field: { onChange, value, onBlur },
                            }) => (
                              <InputComp
                                type="text"
                                id="5"
                                name="so"
                                placeholder="https://www.linkedin.com"
                                onChange={(e: any) => socialMediaFunction(e, 5)}
                                value={value}
                                onBlur={onBlur}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </Col>

                    <div className={`${styles["media-delete-img"]}`}>
                      <Image src={DeleteIcon} />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group>
                  <div className={`${styles["media-phone-toggle-div"]}`}>
                    <Col xs={8}>
                      <div>
                        <div className={`${styles["media-phone-toggle"]}`}>
                          <div className={`${styles["media-values"]}`}>
                            {" "}
                            Twitter
                          </div>
                          <div>
                            <Form.Check
                              type="switch"
                              id="3"
                              label=""
                              onChange={(e: any) => socialMediaToggle(e, 3)}
                            />
                          </div>
                        </div>
                        <div className={`${styles["social-media-input-div"]}`}>
                          <Controller
                            name="twitter"
                            control={control}
                            render={({
                              field: { onChange, value, onBlur },
                            }) => (
                              <InputComp
                                type="text"
                                id="3"
                                placeholder="https://www.twitter.com"
                                onChange={(e: any) => socialMediaFunction(e, 3)}
                                value={value}
                                onBlur={onBlur}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </Col>

                    <div className={`${styles["media-delete-img"]}`}>
                      <Image src={DeleteIcon} />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className={`${styles["media-phone-toggle-div"]}`}>
                    <Col xs={8}>
                      <div>
                        <div className={`${styles["media-phone-toggle"]}`}>
                          <div className={`${styles["media-values"]}`}>
                            FaceBook
                          </div>
                          <div>
                            <Form.Check
                              type="switch"
                              label=""
                              id="2"
                              onChange={(e: any) => socialMediaToggle(e, 2)}
                            />
                          </div>
                        </div>
                        <div className={`${styles["social-media-input-div"]}`}>
                          <Controller
                            name="facebook"
                            control={control}
                            render={({
                              field: { onChange, value, onBlur },
                            }) => (
                              <InputComp
                                type="text"
                                id="2"
                                placeholder="https://www.facebook.com"
                                onChange={(e: any) => socialMediaFunction(e, 2)}
                                value={value}
                                onBlur={onBlur}
                              />
                            )}
                          />
                        </div>
                      </div>
                    </Col>

                    <div className={`${styles["media-delete-img"]}`}>
                      <Image src={DeleteIcon} />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group>
                  <div className={`${styles["media-phone-toggle-div"]}`}>
                    <Col xs={8}>
                      <div>
                        <div className={`${styles["media-phone-toggle"]}`}>
                          <div className={`${styles["media-values"]}`}>
                            {" "}
                            YouTube
                          </div>
                          <div>
                            <Form.Check
                              type="switch"
                              label=""
                              id="4"
                              onChange={(e: any) => socialMediaToggle(e, 4)}
                            />
                          </div>
                        </div>
                        <div className={`${styles["social-media-input-div"]}`}>
                          <InputComp
                            type="text"
                            id="4"
                            placeholder="https://www.youtube.com"
                            onChange={(e: any) => socialMediaFunction(e, 4)}
                          />
                        </div>
                      </div>
                    </Col>

                    <div className={`${styles["media-delete-img"]}`}>
                      <Image src={DeleteIcon} />
                    </div>
                  </div>
                </Form.Group>

                <div className={`${styles["media-div-btn"]}`}>
                  <ButtonComp
                    label="Save"
                    type="submit"
                    className={`${styles["media-save-btn"]}`}
                  />
                </div>
              </form>
            </div>
          ) : (
            <div>
              {mediaArray.map((medias: any) => (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={`${styles["media-add-btn-form"]}`}
                >
                  <Form.Group>
                    <div className={`${styles["media-phone-toggle-div"]}`}>
                      <Col xs={8}>
                        {medias.profileSocialMediaId === 1 ? (
                          <div>
                            <div className={`${styles["media-phone-toggle"]}`}>
                              <div className={`${styles["media-values"]}`}>
                                Instagram
                              </div>
                              <div>
                                <Form.Check
                                  type="switch"
                                  label=""
                                  id="1"
                                  onChange={(e: any) => socialMediaToggle(e, 1)}
                                />
                              </div>
                            </div>
                            <div
                              className={`${styles["social-media-input-div"]}`}
                            >
                              <InputComp
                                type="text"
                                id="1"
                                name="socialMediaName"
                                placeholder="https://www.instagram.com"
                                onChange={(e: any) => socialMediaFunction(e, 1)}
                              />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className={`${styles["media-phone-toggle"]}`}>
                              <div className={`${styles["media-values"]}`}>
                                Instagram
                              </div>
                              <div>
                                <Form.Check
                                  type="switch"
                                  label=""
                                  id="1"
                                  onChange={(e: any) => socialMediaToggle(e, 1)}
                                />
                              </div>
                            </div>
                            <div
                              className={`${styles["social-media-input-div"]}`}
                            >
                              <InputComp
                                type="text"
                                id="1"
                                name="socialMediaName"
                                placeholder="https://www.instagram.com"
                                onChange={(e: any) => socialMediaFunction(e, 1)}
                              />
                            </div>
                          </div>
                        )}
                      </Col>

                      <div className={`${styles["media-delete-img"]}`}>
                        <Image
                          src={DeleteIcon}
                          onClick={() => socialMediaDeleteFunc()}
                        />
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <div className={`${styles["media-phone-toggle-div"]}`}>
                      <Col xs={8}>
                        <div>
                          <div className={`${styles["media-phone-toggle"]}`}>
                            <div className={`${styles["media-values"]}`}>
                              LinkedIn
                            </div>
                            <div>
                              <Form.Check
                                id="5"
                                type="switch"
                                label=""
                                onChange={(e: any) => socialMediaToggle(e, 5)}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles["social-media-input-div"]}`}
                          >
                            <Controller
                              name="linkedin"
                              control={control}
                              render={({
                                field: { onChange, value, onBlur },
                              }) => (
                                <InputComp
                                  type="text"
                                  id="5"
                                  name="so"
                                  placeholder="https://www.linkedin.com"
                                  onChange={(e: any) =>
                                    socialMediaFunction(e, 5)
                                  }
                                  value={value}
                                  onBlur={onBlur}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <div className={`${styles["media-delete-img"]}`}>
                        <Image src={DeleteIcon} />
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <div className={`${styles["media-phone-toggle-div"]}`}>
                      <Col xs={8}>
                        <div>
                          <div className={`${styles["media-phone-toggle"]}`}>
                            <div className={`${styles["media-values"]}`}>
                              {" "}
                              Twitter
                            </div>
                            <div>
                              <Form.Check
                                type="switch"
                                id="3"
                                label=""
                                onChange={(e: any) => socialMediaToggle(e, 3)}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles["social-media-input-div"]}`}
                          >
                            <Controller
                              name="twitter"
                              control={control}
                              render={({
                                field: { onChange, value, onBlur },
                              }) => (
                                <InputComp
                                  type="text"
                                  id="3"
                                  placeholder="https://www.twitter.com"
                                  onChange={(e: any) =>
                                    socialMediaFunction(e, 3)
                                  }
                                  value={value}
                                  onBlur={onBlur}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <div className={`${styles["media-delete-img"]}`}>
                        <Image src={DeleteIcon} />
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <div className={`${styles["media-phone-toggle-div"]}`}>
                      <Col xs={8}>
                        <div>
                          <div className={`${styles["media-phone-toggle"]}`}>
                            <div className={`${styles["media-values"]}`}>
                              FaceBook
                            </div>
                            <div>
                              <Form.Check
                                type="switch"
                                label=""
                                id="2"
                                onChange={(e: any) => socialMediaToggle(e, 2)}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles["social-media-input-div"]}`}
                          >
                            <Controller
                              name="facebook"
                              control={control}
                              render={({
                                field: { onChange, value, onBlur },
                              }) => (
                                <InputComp
                                  type="text"
                                  id="2"
                                  placeholder="https://www.facebook.com"
                                  onChange={(e: any) =>
                                    socialMediaFunction(e, 2)
                                  }
                                  value={value}
                                  onBlur={onBlur}
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <div className={`${styles["media-delete-img"]}`}>
                        <Image src={DeleteIcon} />
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <div className={`${styles["media-phone-toggle-div"]}`}>
                      <Col xs={8}>
                        <div>
                          <div className={`${styles["media-phone-toggle"]}`}>
                            <div className={`${styles["media-values"]}`}>
                              {" "}
                              YouTube
                            </div>
                            <div>
                              <Form.Check
                                type="switch"
                                label=""
                                id="4"
                                onChange={(e: any) => socialMediaToggle(e, 4)}
                              />
                            </div>
                          </div>
                          <div
                            className={`${styles["social-media-input-div"]}`}
                          >
                            <InputComp
                              type="text"
                              id="4"
                              placeholder="https://www.youtube.com"
                              onChange={(e: any) => socialMediaFunction(e, 4)}
                            />
                          </div>
                        </div>
                      </Col>

                      <div className={`${styles["media-delete-img"]}`}>
                        <Image src={DeleteIcon} />
                      </div>
                    </div>
                  </Form.Group>

                  <div className={`${styles["media-div-btn"]}`}>
                    <ButtonComp
                      label="Save"
                      type="submit"
                      className={`${styles["media-save-btn"]}`}
                    />
                  </div>
                </form>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SocialMedia;
