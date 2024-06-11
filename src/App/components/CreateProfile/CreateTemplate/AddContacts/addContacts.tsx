/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/function-component-definition */

import Image from "next/image";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import ContactIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/contact_details/contact_details-icon.svg";
import DeleteIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/contact_details/delete-icon.svg";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../../ui/CommonButtons/commonInput";
import styles from "./addContacts.module.css";

type Props = {
  contactValues: any;
  phoneHandleChange: any;
  mobile: any;
  addMobileClick: any;
  emailHandleChange: any;
  email: any;
  addEmailClick: any;
  websiteHandleChange: any;
  website: any;
  addWebsiteClick: any;
  handleAddress: any;
  contact: any;
  onSubmitSave: any;
  removeClick: any;
  removeClickEmail: any;
  removeClickWebsite: any;
  mobileEnableFunc: any;
  emailEnableFunc: any;
  websiteEnableFunc: any;
  mobileEnable: any;
  emailEnable: any;
  websiteEnable: any;
  emailError: any;
  zipNumberError: any;
  zipExceedError: any;
  editValues: any;
  phoneExceedError: any;
  webSiteError: any;
  DropDownHandleChange: any;
  phoneNullCheck: string;
  emailNullCheck: string;
  // websiteNullCheck: string;
  emailDropdownHandleChange: any;
  websiteDropdownHanldeChange: any;
};
interface contactInput {
  emailId: "string";
  webSite: "string";
  city: "string";
  zipCode: "string";
  state: "string";
  country: "string";
  address: "string";
}
const EmailValue = (props: any) => (
  <Col xl={12} className={`${styles["contact-delete-div"]}`}>
    <div className={`${styles["contact-dropdown-div"]}`}>
      <div
        className={`${styles["contact-dropdown-value-fix"]} ${styles["dropdown-value-mail"]}`}
      >
        <Form.Select
          defaultValue="Work"
          name="emailType"
          value={props?.emailType || ""}
          onChange={(e: any) => props?.emailDropdownHandleChange(props?.i, e)}
          className={`${styles["home-div"]}`}
          style={{ border: "none" }}
        >
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
        </Form.Select>
      </div>
      <div className={`${styles["contact-divider-div"]} `} />
      <div className={`${styles["contact-format-div"]} `}>
        <InputComp
          type="text"
          name="emailId"
          placeholder="Enter your mail id"
          onChange={(e: any) => props.emailHandleChange(props.i, e, props?.id)}
          value={props?.emails?.emailId || ""}
          className={`${styles["contact-input-div"]}`}
        />
      </div>
    </div>
    {props.length > 0 && (
      <div
        className={`${styles["contact-delete-img"]}`}
        onClick={() =>
          props.removeClickEmail(props.i + 1, props.i, props.emails)
        }
      >
        <Image src={DeleteIcon} alt="bubbl" />
      </div>
    )}
  </Col>
);
const MobileNumber = (props: any) => (
  <div className={`${styles["contact-delete-div"]}`}>
    <div className={`${styles["contact-dropdown-div"]}`}>
      <div
        className={`${styles["contact-dropdown-value-fix"]} ${styles["dropdown-value"]}`}
      >
        <Form.Select
          defaultValue="Work"
          name="phoneNumberType"
          value={props.phoneNumberType || ""}
          onChange={(e: any) => props.DropDownHandleChange(props.i, e)}
          className={`${styles["home-div"]}`}
          style={{ border: "none" }}
        >
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
        </Form.Select>
      </div>
      <div className={`${styles["contact-divider-div"]} `} />

      <div className={`${styles["contact-format-div"]} `}>
        <InputComp
          type="text"
          placeholder="Enter your phone number"
          name="phoneNumber"
          onChange={(e: any) => props.phoneHandleChange(props.i, e, props?.id)}
          value={props?.phoneNumber || ""}
          className={`${styles["contact-input-div"]}`}
        />
      </div>
    </div>
    {props.length > 0 && (
      <div
        className={`${styles["contact-delete-img"]}`}
        onClick={() => props.removeClick(props.i + 1, props.i, props.user)}
      >
        <Image src={DeleteIcon} alt="bubbl" />
      </div>
    )}
  </div>
);
const WebSiteValue = (props: any) => (
  <div className={`${styles["contact-delete-div"]}`}>
    <div className={`${styles["contact-dropdown-div"]}`}>
      <div
        className={`${styles["contact-dropdown-value-fix"]} ${styles["dropdown-value"]}`}
      >
        <Form.Select
          defaultValue="Work"
          name="websiteType"
          value={props.websiteType || ""}
          onChange={(e: any) => props.websiteDropdownHanldeChange(props.i, e)}
          className={`${styles["home-div"]}`}
          style={{ border: "none" }}
        >
          <option value="Personal">Personal</option>
          <option value="Office">Office</option>
        </Form.Select>
      </div>
      <div className={`${styles["contact-divider-div"]} `} />
      <div className={`${styles["contact-format-div"]} `}>
        <InputComp
          type="text"
          placeholder="Enter your website"
          name="website"
          onChange={(e: any) =>
            props?.websiteHandleChange(props?.i, e, props?.id)
          }
          value={props?.website?.website || ""}
          className={`${styles["contact-input-div"]} `}
        />
      </div>
    </div>
    {props.length > 0 && (
      <div
        className={`${styles["contact-delete-img"]}`}
        onClick={() =>
          props.removeClickWebsite(props.i + 1, props.i, props.website)
        }
      >
        <Image src={DeleteIcon} alt="bubbl" />
      </div>
    )}
  </div>
);
const AddContactDetails: React.FC<Props> = ({
  contactValues,
  phoneHandleChange,
  mobile,
  addMobileClick,
  emailHandleChange,
  email,
  emailError,
  addEmailClick,
  websiteHandleChange,
  website,
  addWebsiteClick,
  contact,
  handleAddress,
  onSubmitSave,
  removeClick,
  removeClickEmail,
  removeClickWebsite,
  mobileEnableFunc,
  emailEnableFunc,
  websiteEnableFunc,
  mobileEnable,
  emailEnable,
  websiteEnable,
  zipExceedError,
  zipNumberError,
  editValues,
  phoneExceedError,
  phoneNullCheck,
  webSiteError,
  DropDownHandleChange,
  emailDropdownHandleChange,
  websiteDropdownHanldeChange,
  emailNullCheck,
  // websiteNullCheck,
}) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const {
    control,
    formState: { errors },
  } = useForm<contactInput>();

  const mobileOnChange = (e: any) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMobileNumber(e.target.value);
    }
  };

  const contactSave = () => {
    onSubmitSave();
  };

  return (
    <div>
      <div className={`${styles["contact-heading-div"]}`} id="ContactSection">
        <div className={`${styles["contact-payment-icon-mediaHeading"]}`}>
          <Image src={ContactIcon} width="30px" height="30px" alt="bubbl" />
          <div className={`${styles["contact-details-heading"]}`}>
            Contact Details
          </div>
        </div>
      </div>
      <div className={`${styles["contact-heading-full-div"]}`}>
        {/* Phone Number Div */}
        <Row>
          <Col xl={9} md={9} xs={12}>
            <div className={`${styles["contact-toggle-div"]}`}>
              <div className={`${styles["contact-mobile-div"]}`}>
                Mobile Number*
              </div>
              <div className={`${styles["contact-mobile-toggle"]}`}>
                <Form.Check
                  type="switch"
                  label=""
                  checked={mobileEnable}
                  onChange={(e) => mobileEnableFunc(e)}
                />
              </div>
            </div>
            <div
              style={{
                pointerEvents: mobileEnable === true ? "auto" : "none",
                opacity: mobileEnable === true ? 1 : 0.5,
              }}
            >
              {mobile?.length === 0 || mobile === undefined ? (
                <MobileNumber
                  phoneHandleChange={phoneHandleChange}
                  phoneNumber=""
                  phoneNumberType=""
                  id={null}
                  DropDownHandleChange={DropDownHandleChange}
                  length={0}
                  i={0}
                  removeClick={removeClick}
                />
              ) : (
                <>
                  {mobile?.map((user: any, i: any) => (
                    <MobileNumber
                      phoneHandleChange={phoneHandleChange}
                      phoneNumber={user?.phoneNumber}
                      phoneNumberType={user?.phoneNumberType}
                      id={user?.id}
                      length={i}
                      DropDownHandleChange={DropDownHandleChange}
                      user={user}
                      i={i}
                      removeClick={removeClick}
                    />
                  ))}
                </>
              )}
            </div>
            {phoneNullCheck && (
              <span className="text-danger" role="alert">
                {phoneNullCheck}
              </span>
            )}

            {phoneExceedError && (
              <span className="text-danger" role="alert">
                {phoneExceedError}
              </span>
            )}
            <div
              className={`${styles["add-mobile-div"]}`}
              onClick={
                phoneExceedError || phoneNullCheck ? null : addMobileClick
              }
            >
              <p>+ Add Mobile Number</p>
            </div>
          </Col>
        </Row>

        {/* Mail ID div */}
        <Row>
          <Col xl={9} md={9} xs={12}>
            <div className={`${styles["contact-toggle-div"]}`}>
              <div className={`${styles["contact-email-div"]}`}>Email ID*</div>
              <div className={`${styles["contact-mobile-toggle"]}`}>
                <Form.Check
                  type="switch"
                  label=""
                  checked={emailEnable}
                  onChange={(e) => emailEnableFunc(e)}
                />
              </div>
            </div>
            <div
              style={{
                pointerEvents: emailEnable === true ? "auto" : "none",
                opacity: emailEnable === true ? 1 : 0.5,
              }}
            >
              {email?.length === 0 || email?.length === undefined ? (
                <EmailValue
                  emailHandleChange={emailHandleChange}
                  emailDropdownHandleChange={emailDropdownHandleChange}
                  emails=""
                  emailType=""
                  removeClickEmail=""
                  id={null}
                  i={0}
                  length={0}
                />
              ) : (
                <>
                  {email?.map((emails: any, i: any) => (
                    <EmailValue
                      emailHandleChange={emailHandleChange}
                      emailDropdownHandleChange={emailDropdownHandleChange}
                      emails={emails}
                      emailType={emails.emailType}
                      removeClickEmail={removeClickEmail}
                      i={i}
                      id={emails?.id}
                      length={i}
                    />
                  ))}
                </>
              )}
            </div>
            {emailNullCheck && (
              <span className="text-danger" role="alert">
                {emailNullCheck}
              </span>
            )}
            {emailError && (
              <span className="text-danger" role="alert">
                {emailError}
              </span>
            )}

            <div
              className={`${styles["add-mobile-div"]}`}
              onClick={emailError || emailNullCheck ? null : addEmailClick}
            >
              <p>+ Add email ID</p>
            </div>
            {errors.emailId && (
              <span className="text-danger" role="alert">
                {errors.emailId.message}
              </span>
            )}
          </Col>
        </Row>

        {/* Add Web Site */}
        <Row>
          <Col xl={9} md={9} xs={12}>
            <div className={`${styles["contact-toggle-div"]}`}>
              <div className={`${styles["contact-website-div"]}`}>Website*</div>
              <div className={`${styles["contact-mobile-toggle"]}`}>
                <Form.Check
                  type="switch"
                  label=""
                  checked={websiteEnable}
                  onChange={(e) => websiteEnableFunc(e)}
                />
              </div>
            </div>
            <div
              style={{
                pointerEvents: websiteEnable === true ? "auto" : "none",
                opacity: websiteEnable === true ? 1 : 0.5,
              }}
            >
              {website?.length === 0 || website === undefined ? (
                <WebSiteValue
                  websiteHandleChange={websiteHandleChange}
                  website=""
                  websiteType=""
                  i={0}
                  websiteDropdownHanldeChange={websiteDropdownHanldeChange}
                  length={0}
                  id={null}
                  removeClickWebsite={removeClickWebsite}
                />
              ) : (
                <>
                  {website?.map((web: any, i: any) => (
                    <WebSiteValue
                      websiteHandleChange={websiteHandleChange}
                      website={web}
                      websiteType={web?.websiteType}
                      id={web?.id}
                      websiteDropdownHanldeChange={websiteDropdownHanldeChange}
                      web={web}
                      i={i}
                      length={i}
                      removeClickWebsite={removeClickWebsite}
                    />
                  ))}
                </>
              )}
            </div>
            {webSiteError && (
              <span className="text-danger" role="alert">
                {webSiteError}
              </span>
            )}
            <div
              className={`${styles["add-mobile-div"]}`}
              onClick={addWebsiteClick}
            >
              <p>+ Add Website</p>
            </div>
            {errors.webSite && (
              <span className="text-danger" role="alert">
                {errors.webSite.message}
              </span>
            )}
          </Col>
        </Row>
        <div className={`${styles["address-div"]}`}>Address</div>
        <div>
          <Col
            xl={8}
            md={8}
            xs={12}
            className={`${styles["address-div-space"]}`}
          >
            <Form.Group>
              <InputComp
                placeholder="Enter your address"
                onChange={handleAddress}
                name="address"
                value={contact.address}
                className={styles.address_input}
              />
            </Form.Group>
          </Col>
          <Row className={`${styles["address-div-space"]}`}>
            <Col xl={4} md={4} xs={6} className={styles.address_field}>
              <Form.Group>
                <InputComp
                  placeholder="City"
                  onChange={handleAddress}
                  name="city"
                  value={contact.city}
                  className={styles.address_input}
                />
              </Form.Group>
            </Col>
            <Col xl={4} md={4} xs={6} className={styles.address_field}>
              <Form.Group>
                <InputComp
                  type="text"
                  placeholder="Zip Code"
                  onChange={handleAddress}
                  name="zipCode"
                  value={contact.zipCode}
                  className={styles.address_input}
                />
              </Form.Group>
              {zipNumberError && (
                <span className="text-danger" role="alert">
                  {zipNumberError}
                </span>
              )}
              {zipExceedError && (
                <span className="text-danger" role="alert">
                  {zipExceedError}
                </span>
              )}
            </Col>
          </Row>
          <Row className={`${styles["address-div-space-btn"]}`}>
            <Col xl={4} md={4} xs={6} className={styles.address_field}>
              <Form.Group>
                <Controller
                  name="state"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputComp
                      type="text"
                      onChange={handleAddress}
                      placeholder="State"
                      name="state"
                      value={contact.state}
                      className={styles.address_input}
                    />
                  )}
                />
              </Form.Group>
            </Col>
            <Col xl={4} md={4} xs={6} className={styles.address_field}>
              <Form.Group>
                <Controller
                  name="country"
                  control={control}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <InputComp
                      type="text"
                      placeholder="Country"
                      onChange={handleAddress}
                      name="country"
                      value={contact.country}
                      className={styles.address_input}
                    />
                  )}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className={`${styles["contact-div-btn"]}`} onClick={contactSave}>
            <ButtonComp
              label="Save"
              type="submit"
              className={`${styles["contact-save-btn"]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddContactDetails;
