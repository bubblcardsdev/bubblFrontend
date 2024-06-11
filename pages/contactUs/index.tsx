/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-useless-computed-key */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-html-link-for-pages */
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import TitleBar from "src/App/components/websiteComponent/titleBar";
import ResponsiveNavbar from "src/App/components/websiteComponent/titleBar_responsive";
import { contactUs } from "src/App/services/shopPage/shopServices";

import contactus from "../../images/Bubble-website_assets/contact_us/call_3x.png";
import styles from "../index.module.css";

export default function Shop({ active }: any) {
  let [contactError, setContactError] = useState({
    name: "",
    emailId: "",
    phoneNumber: "",
    question: "",
    message: "",
  });

  let [contact, setContact] = useState({
    name: "",
    emailId: "",
    phoneNumber: "",
    question: "",
    message: "",
    isRead: false,
  });
  function validateForm() {
    const errors = {};
    if (!contact.name.trim()) {
      contactError.name = "Name is required";
    } else {
      contactError.name = "";
    }
    if (!contact.emailId.trim()) {
      contactError.emailId = "Email is Required";
    } else {
      contactError.emailId = "";
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(contact.emailId)) {
        contactError.emailId = "Enter a valid email address";
      } else {
        contactError.emailId = "";
      }
    }
    // phone number
    if (!contact.phoneNumber.trim()) {
    } else if (!/^\d{10}$/.test(contact.phoneNumber)) {
      contactError.phoneNumber = "Phone number must be 10 digits";
    } else {
      contactError.phoneNumber = "";
    }

    return errors;
  }
  function onSubmitSave() {
    let isInvalid = false;
    const errors = validateForm();

    setContactError({
      name: contactError.name,
      emailId: contactError.emailId,
      phoneNumber: contactError.phoneNumber,
      question: contactError.question,
      message: contactError.message,
    });
    if (
      contactError.name === "" &&
      contactError.emailId === "" &&
      contactError.phoneNumber === "" &&
      contactError.question === "" &&
      contactError.message === ""
    ) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
    return isInvalid;
  }

  const updateContact = async () => {
    const isSuccess: boolean = onSubmitSave();
    if (isSuccess) {
      const contactObj = {
        name: contact.name,
        emailId: contact.emailId,
        phoneNumber: contact.phoneNumber,
        question: contact.question,
        message: contact.message,
      };
      const resp = await contactUs(contactObj);
      if (resp?.res?.data?.success) {
        toast.success("Details submitted successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const [value, setValue] = useState("Select any one Question from dropdown");
  const handleSelect = (e: any) => {
    setValue(e);
  };

  const handleContactDetailChange = (e: any) => {
    const { name, value } = e.target;

    setContact(() => ({ ...contact, [name]: value }));
  };

  return (
    <div>
      <div>
        <Head>
          <title>
            Contact Us - QR Enabled, Smart NFC Business Cards in India
          </title>
          <meta
            name="description"
            content="Your opinion matters for your business card. Stay connected to know our new customizable and creative digital card ideas."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.wholepage}>
          <section className={styles.navbar}>
            <div className="container">
              <ResponsiveNavbar />
            </div>
          </section>
          <section className={styles.contact_us}>
            <div className="container">
              <ToastContainer />
              <NavBar />
              <Col xl={12} lg={12} md={12} className={styles.contactus_comp}>
                <Col xl={6} lg={6} md={12}>
                  <Col xl={6}>
                    <h1 className={styles.contactus_head}>
                      Get in Touch <span>with us</span>
                    </h1>
                    <p className={styles.contact_cont}>
                      Fill out the form below and we will get back to you as
                      soon as possible.
                    </p>
                  </Col>
                  <Col xl={12} className={styles.phone}>
                    <Col xl={9} className={styles.phone_img}>
                      <Image src={contactus} alt="phone" />
                    </Col>
                    <Col className={styles.contact_play}>
                      <h2>Work. Play. Grow.</h2>
                    </Col>
                  </Col>
                </Col>

                <Col xl={5} lg={5} md={12} sm={12} xs={12}>
                  <div>
                    <form className={styles.contact_form}>
                      <Form.Group>
                        <div className={styles.contactfield}>
                          <label htmlFor="fname" className={styles.label}>
                            First Name *
                          </label>

                          <input
                            autoComplete="nope"
                            type="text"
                            id="fname"
                            placeholder="Enter your name"
                            name="name"
                            className={styles.name}
                            onChange={handleContactDetailChange}
                          />
                          {contactError.name && (
                            <span className="text-danger" role="alert">
                              {contactError.name}
                            </span>
                          )}
                        </div>
                      </Form.Group>

                      <Form.Group>
                        <div className={styles.contactfield}>
                          <label className={styles.label}>Email Address</label>
                          <input
                            autoComplete="nope"
                            type="text"
                            id="fname"
                            placeholder="Enter your mail address "
                            name="emailId"
                            className={styles.name}
                            onChange={handleContactDetailChange}
                          />
                          {contactError.emailId && (
                            <span className="text-danger" role="alert">
                              {contactError.emailId}
                            </span>
                          )}
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <div className={styles.contactfield}>
                          <label className={styles.label}>Phone Number</label>
                          <br />
                          <input
                            autoComplete="nope"
                            type="number"
                            id="fname"
                            placeholder="Enter your mobile number"
                            name="phoneNumber"
                            className={styles.number}
                            onChange={handleContactDetailChange}
                            pattern="[0-9]{10}"
                            maxLength={10}
                          />
                          {contactError.phoneNumber && (
                            <span className="text-danger" role="alert">
                              {contactError.phoneNumber}
                            </span>
                          )}
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <div className={styles.contactfield}>
                          <label className={styles.label}>Question</label>
                          <input
                            autoComplete="nope"
                            type="text"
                            id="fname"
                            placeholder="You can ask anything"
                            name="question"
                            className={styles.name}
                            onChange={handleContactDetailChange}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <div className={styles.contactfield}>
                          <label className={styles.label}>
                            Enter your Feedback/Comment
                          </label>
                          <input
                            autoComplete="nope"
                            type="text"
                            id="fname"
                            placeholder="Enter your message here"
                            name="message"
                            className={styles.name}
                            onChange={handleContactDetailChange}
                          />
                          {contactError.message && (
                            <span className="text-danger" role="alert">
                              {contactError.message}
                            </span>
                          )}
                        </div>
                      </Form.Group>

                      <div className={styles.contact_submit}>
                        <Button
                          className={styles.submitButton}
                          onClick={updateContact}
                        >
                          SUBMIT
                        </Button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Col>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
