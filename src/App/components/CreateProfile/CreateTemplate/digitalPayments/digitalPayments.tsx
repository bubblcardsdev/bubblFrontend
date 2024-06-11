/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable simple-import-sort/imports */
import Image from "next/image";
import React from "react";
import { Col, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import DeleteIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/digital_payment/delete-icon.svg";
import DigitalIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/digital_payment/didital_payment-icon.svg";
import InputComp from "../../../ui/CommonButtons/commonInput";
import ButtonComp from "../../../ui/CommonButtons/_commonbuttons";
import DidgitalPayments from "./digitalPaymentDisable";
import styles from "./digitalPayments.module.css";

interface digitalInput {
  gpay: "string";
  phonePe: "string";
  paytm: "string";
}
type Props = {
  payments: any;
  DigitalPaymentsfunc: any;
  digitalSaveSubmit: any;
  digitalEnableFunc: any;
  digitalEnable: any;
  handleQRUpload: any;
  paymentToggle: any;
  qrEnable: any;
  planId: any;
  deleteQRImageApi: any;
  qrImageUrl: any;
  hiddenFileInput: any;
};

// eslint-disable-next-line react/prop-types, no-unused-vars, react/function-component-definition
const DigitalPayments: React.FC<Props> = ({
  DigitalPaymentsfunc,
  digitalSaveSubmit,
  digitalEnableFunc,
  digitalEnable,
  payments,
  handleQRUpload,
  paymentToggle,
  qrEnable,
  planId,
  deleteQRImageApi,
  qrImageUrl,
  hiddenFileInput,
}) => {
  const { control } = useForm<digitalInput>();

  const digitalSave = () => {
    digitalSaveSubmit();
  };

  const gpayfilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 1
  );
  const paytmInFilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 2
  );
  const phonePeFilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 3
  );

  return (
    <div>
      {/* Payment heading */}
      <div className={`${styles["payment-heading-div"]}`}>
        <div className={`${styles["image-payment-icon"]}`}>
          <div className={`${styles["image-payment-icon-paymentHeading"]}`}>
            <div className={`${styles["image-payment-icon"]}`}>
              <Image src={DigitalIcon} width="30px" height="30px" alt="bubbl"/>
            </div>
            <div className={`${styles["digital-payment-heading"]}`}>
              Digital Payments
            </div>
          </div>
        </div>
        <div>
          <div>
            <Form.Check
              type="switch"
              label=""
              onChange={digitalEnableFunc}
              checked={digitalEnable}
            />
          </div>
        </div>
      </div>
      {digitalEnable === false ? (
        <DidgitalPayments />
      ) : (
        <div>
          <div className={`${styles["digital-add-btn-form"]}`}>
            <Form.Group>
              <div className={`${styles["phone-toggle-div"]}`}>
                <Col xl={8} md={8} xs={12}>
                  <div>
                    <div className={`${styles["phone-toggle"]}`}>
                      <div className={`${styles["digital-values"]}`}>GPay</div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          checked={
                            gpayfilterData[0]?.activeStatus === undefined
                              ? true
                              : gpayfilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => paymentToggle(e, 1)}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles["digital-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          gpayfilterData[0]?.activeStatus === true ||
                          gpayfilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          gpayfilterData[0]?.activeStatus === true ||
                          gpayfilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        placeholder="https://www.gpay.com"
                        onChange={(e: any) => DigitalPaymentsfunc(e, 1)}
                        value={
                          gpayfilterData.length === 0
                            ? ""
                            : gpayfilterData[0]?.digitalPaymentLink
                        }
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
                        <Form.Check
                          type="switch"
                          label=""
                          checked={
                            paytmInFilterData[0]?.activeStatus === undefined
                              ? true
                              : paytmInFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => paymentToggle(e, 2)}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles["digital-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          paytmInFilterData[0]?.activeStatus === true ||
                          paytmInFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          paytmInFilterData[0]?.activeStatus === true ||
                          paytmInFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        placeholder="https://www.paytm.com"
                        onChange={(e: any) => DigitalPaymentsfunc(e, 2)}
                        value={
                          paytmInFilterData.length === 0
                            ? ""
                            : paytmInFilterData[0]?.digitalPaymentLink
                        }
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
                      <div className={`${styles["digital-values"]}`}>
                        PhonePe
                      </div>
                      <div>
                        <Form.Check
                          type="switch"
                          label=""
                          checked={
                            phonePeFilterData[0]?.activeStatus === undefined
                              ? true
                              : phonePeFilterData[0]?.activeStatus
                          }
                          onChange={(e: any) => paymentToggle(e, 3)}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles["digital-media-input-div"]}`}
                      style={{
                        pointerEvents:
                          phonePeFilterData[0]?.activeStatus === true ||
                          phonePeFilterData[0]?.activeStatus === undefined
                            ? "auto"
                            : "none",
                        opacity:
                          phonePeFilterData[0]?.activeStatus === true ||
                          phonePeFilterData[0]?.activeStatus === undefined
                            ? 1
                            : 0.5,
                      }}
                    >
                      <InputComp
                        type="text"
                        placeholder="https://www.phonepe.com"
                        onChange={(e: any) => DigitalPaymentsfunc(e, 3)}
                        value={
                          phonePeFilterData.length === 0
                            ? ""
                            : phonePeFilterData[0]?.digitalPaymentLink
                        }
                        className={styles.payment_input}
                      />
                    </div>
                  </div>
                </Col>
              </div>
            </Form.Group>
            <div
              className={`${styles["digital-div-btn"]}`}
              onClick={digitalSave}
            >
              <ButtonComp
                label="Save"
                type="submit"
                className={`${styles["digital-save-btn"]}`}
              />
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          pointerEvents: planId !== 1 ? "auto" : "none",
          opacity: planId !== 1 ? 1 : 0.5,
        }}
      >
        <div className={`${styles["qr-heading-div"]}`}>
          <div className={`${styles["image-qr-icon"]}`}>
            <div className={`${styles["image-qr-icon-paymentHeading"]}`}>
              <div className={`${styles["image-qr-icon"]}`}>
                <Image src={DigitalIcon} width="30px" height="30px" alt="bubbl" />
              </div>
              <div className={`${styles["digital-qr-heading"]}`}>
                Customize QR Code
              </div>
            </div>
          </div>
        </div>
        <div className={styles.upload_qr}>
          <h2>Upload your logo in QR Code</h2>
          <p>This will appear at the center of your QR Code</p>
          <Col xl={10} md={8} xs={12} className={styles.choose_file_section}>
            <div>
              <input
                ref={hiddenFileInput}
                type="file"
                autoComplete="nope"
                accept="image/*"
                className={styles.choose_file}
                onChange={(e) => handleQRUpload(e)}
              />
            </div>
          </Col>
          {qrImageUrl && (
            <ButtonComp
              label="Reset"
              type="submit"
              onClick={deleteQRImageApi}
              className={`${styles["digital-save-btn"]}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default DigitalPayments;
