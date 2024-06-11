/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import "react-toastify/dist/ReactToastify.css";

import copy from "copy-to-clipboard";
import Image from "next/image";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

import gpay from "../../../../public/template/icons/SVG/gpay.svg";
import paytm from "../../../../public/template/icons/SVG/paytm.svg";
import phonepe from "../../../../public/template/icons/SVG/phonepe.svg";
import styles from "./payment.module.css";

type Props = {
  payments: any;
  // toast: any;
};
const Payment: React.FC<Props> = ({ payments }) => {
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
  return (
    <>
      <ToastContainer />
      <div className={styles.pay}>
        {gpayfilterData[0]?.activeStatus === false ? null : (
          <div className={styles.gpay} onClick={() => gPayPaymentOpen()}>
            <Image src={gpay} alt="bubbl" />
          </div>
        )}
        {phonePeFilterData[0]?.activeStatus === false ? null : (
          <div className={styles.gpay} onClick={() => payTmPayPaymentOpen()}>
            <Image src={phonepe} alt="bubbl" />
          </div>
        )}
        {paytmInFilterData[0]?.activeStatus === false ? null : (
          <div className={styles.gpay} onClick={() => phonePayPaymentOpen()}>
            <Image src={paytm} alt="bubbl" />
          </div>
        )}
      </div>
    </>
  );
};
export default Payment;
