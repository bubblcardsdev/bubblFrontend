/* eslint-disable no-unused-vars */
import Image from "next/image";
import React from "react";
import { Col, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import DeleteIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/digital_payment/delete-icon.svg";
import DigitalIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/digital_payment/didital_payment-icon.svg";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import InputComp from "../../../ui/CommonButtons/commonInput";
import styles from "./digitalPayments.module.css";

function DidgitalPayments() {
  return (
    <div className={`${styles["digital-enable"]}`}>
      <form className={`${styles["digital-add-btn-form"]}`}>
        <Form.Group>
          <div className={`${styles["phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["phone-toggle"]}`}>
                  <div className={`${styles["digital-values"]}`}>GPay</div>
                </div>
                <div className={`${styles["digital-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    placeholder="https://www.gpay.com"
                    className={styles.payment_input}
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>

        <Form.Group>
          <div className={`${styles["phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["phone-toggle"]}`}>
                  <div className={`${styles["digital-values"]}`}>Paytm</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["digital-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    placeholder="https://www.paytm.com"
                    className={styles.payment_input}
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>

        <Form.Group>
          <div className={`${styles["phone-toggle-div"]}`}>
            <Col xl={8} md={8} xs={12}>
              <div>
                <div className={`${styles["phone-toggle"]}`}>
                  <div className={`${styles["digital-values"]}`}>PhonePe</div>
                  <div>
                    <Form.Check type="switch" label="" />
                  </div>
                </div>
                <div className={`${styles["digital-media-input-div"]}`}>
                  <InputComp
                    type="text"
                    placeholder="https://www.phonepe.com"
                    className={styles.payment_input}
                  />
                </div>
              </div>
            </Col>
          </div>
        </Form.Group>
        <div className={`${styles["digital-div-btn"]}`}>
          <ButtonComp
            label="Save"
            type="submit"
            className={`${styles["digital-save-btn"]}`}
          />
        </div>
      </form>
    </div>
  );
}
export default DidgitalPayments;
