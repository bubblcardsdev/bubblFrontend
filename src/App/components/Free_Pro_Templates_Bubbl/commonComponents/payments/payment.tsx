/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import "react-toastify/dist/ReactToastify.css";

import copy from "copy-to-clipboard";
import Image from "next/image";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { PostTapDetails } from "src/App/services/tapApi";

import styles from "./payment.module.css";
import gpay from "./paymentIcons/gpay.svg";
import paytm from "./paymentIcons/paytm.svg";
import phonepe from "./paymentIcons/phonepe.svg";

type Props = {
  payments: any;
  deviceId: number;
};
const Payment: React.FC<Props> = ({ payments, deviceId }) => {
  const gpayfilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 1
  );
  const paytmInFilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 2
  );
  const phonePeFilterData = payments?.filter(
    (id: any) => id.profileDigitalPaymentsId === 3
  );

  const gPayPaymentOpen = () => {
    copy(gpayfilterData[0]?.digitalPaymentLink, {
      debug: true,
    });
    toast.success("Copied GPay", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const phonePayPaymentOpen = () => {
    copy(phonePeFilterData[0]?.digitalPaymentLink, {
      debug: true,
    });
    toast.success("Copied Phonepe", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const payTmPayPaymentOpen = () => {
    copy(paytmInFilterData[0]?.digitalPaymentLink, {
      debug: true,
    });
    toast.success("Copied paytm", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // click func for click event
  const handleClick = async (clickId: number) => {
    const tapObj = {
      deviceId: deviceId,
      clickAction: clickId,
    };
    const tapResponse = await PostTapDetails(tapObj);
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.pay}>
        {gpayfilterData[0]?.activeStatus === false ? null : (
          <div
            className={styles.gpay}
            onClick={() => {
              gPayPaymentOpen();
              handleClick(13);
            }}
          >
            <Image src={gpay} style={{ cursor: "pointer" }} alt="bubbl" />
          </div>
        )}
        {phonePeFilterData[0]?.activeStatus === false ? null : (
          <div
            className={styles.gpay}
            onClick={() => {
              // payTmPayPaymentOpen();
              phonePayPaymentOpen();
              handleClick(14);
            }}
          >
            <Image src={phonepe} style={{ cursor: "pointer" }} alt="bubbl" />
          </div>
        )}
        {paytmInFilterData[0]?.activeStatus === false ? null : (
          <div
            className={styles.gpay}
            onClick={() => {
              // phonePayPaymentOpen();
              payTmPayPaymentOpen();
              handleClick(15);
            }}
          >
            <Image src={paytm} style={{ cursor: "pointer" }} alt="bubbl" />
          </div>
        )}
      </div>
    </>
  );
};
export default Payment;
