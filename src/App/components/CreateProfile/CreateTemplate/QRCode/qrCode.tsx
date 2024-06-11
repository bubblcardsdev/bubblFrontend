/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import generateQR from "src/App/services/qrGenerate";

// import qrbuubbl from "../../../../../../public/qrbubbl.png";
import styles from "./qrCode.module.css";

export default function QrCode({
  deviceIdQR,
  qrImageUrl,
}: {
  deviceIdQR: string;
  qrImageUrl: any;
}) {
  const ref = useRef<any>(null);
  const url = `https://bubbl.cards/profile/${deviceIdQR}`;
  const [urlOpened, setUrlOpened] = useState(false);

  useEffect(() => {
    // Check if the URL should be opened
    if (urlOpened) {
      // Your logic to open the URL
      window.open(url, "_blank");

      // Reset the state to prevent further openings
      setUrlOpened(false);
    }
  }, [urlOpened, url]);

  return (
    <div className={styles.qrsection}>
      {/* {qrImageUrl ? null : ( */}
      <div className={styles.qrsection_bubbl}>
        <img
          src="../../../../../../public/qrbubbl.png"
          width={20}
          height={20}
          className={styles.qrsection_bubbl_logo}
          alt="bubbl"
        />
      </div>
      {/* )} */}
      <p ref={ref} className={styles.qrsection_qrbrand} />
      <Image
        loader={({ src }) => src}
        src={generateQR(url, qrImageUrl)}
        width={200}
        height={200}
        alt="test"
      />
    </div>
  );
}
