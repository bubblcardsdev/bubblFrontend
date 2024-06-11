import Image from "next/image";
import React from "react";

import DeAcivateIcon from "../../public/profile/deactivate_icon.svg";
import styles from "./deviceDeacivate.module.css";

function DeviceDeActivatePage() {
  return (
    <div className={styles.activatePge}>
      <div>
        <div>
          <Image src={DeAcivateIcon} alt="bubbl" />
        </div>
        <div className={styles.activate_text}>
          <p>Device is </p>
          <p>Deactivated</p>
        </div>
        <div className={styles.content}>
          <p>Currently device is deactivated.</p>
          <p>Please activate the device from your profile</p>
        </div>
      </div>
    </div>
  );
}
export default DeviceDeActivatePage;
