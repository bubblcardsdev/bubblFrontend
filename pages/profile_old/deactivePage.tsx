/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getProfileByDevice } from "src/App/services/api";

import DeAcivateIcon from "../../public/profile/deactivate_icon.svg";
import styles from "./deactivatePage.module.css";

function DeviceDeActivatePage() {
  const router = useRouter();
  const deviceIdVal = router?.query?.deviceValue;

  const getProfiles = async () => {
    if (deviceIdVal) {
      const response: any = await getProfileByDevice(deviceIdVal);
      if (response.success) {
        if (response?.profile?.DeviceLink?.activeStatus === true) {
          router.push(`${deviceIdVal}`);
        }
      }
    }
  };
  useEffect(() => {
    getProfiles();
  }, [router]);
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
          <p>Currently device is deactivated</p>
          <p>Please activate the device from your profile</p>
        </div>
      </div>
    </div>
  );
}
export default DeviceDeActivatePage;
