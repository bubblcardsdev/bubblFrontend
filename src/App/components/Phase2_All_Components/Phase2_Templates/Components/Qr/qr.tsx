import Image from "next/image";
import React, { useEffect, useState } from "react";
import generateQR from "src/App/services/qrGenerate";

import qrBubbl from "../../Images/assets_for_profile_templates/Common/qrBubbl.png";
import styles from "./qr.module.css";

export default function QrCode({
  deviceIdQR,
  qrImageUrl,
}: {
  deviceIdQR: string;
  qrImageUrl: any;
}) {
  const url = `https://bubbl.cards/profile/${deviceIdQR}`;
  const [urlOpened, setUrlOpened] = useState(false);

  useEffect(() => {
    if (urlOpened) {
      window.open(url, "_blank");

      setUrlOpened(false);
    }
  }, [urlOpened, url]);

  return (
    <div className={styles.qrSection}>
      {/* {qrImageUrl ? null : ( )} */}
      <div className={styles.qrSection_bubbl}>
        {/* Bubbl logo at center */}
        <Image
          loader={({ src }) => src}
          src={qrBubbl}
          width={20}
          height={20}
          className={styles.qrSection_bubbl_logo}
          alt="Icon"
        />
      </div>
      {/* Dynamic qr image */}
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
