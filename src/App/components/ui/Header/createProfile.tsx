import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";

import createProfile from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Create-Profile/create-profile-badge_icon.png";
import styles from "./header.module.css";

function CreateProfile() {
  return (
    <div className="container">
      <h5 className={`${styles.create_profile_header}`}>Create Your Profile</h5>
      <div className={styles.barDivide}>
        <Image src={createProfile} alt="bubbl" />
      </div>
      <div className={styles.barDivide_text}>
        <div className={styles.profile_content}>
          Start by creating a profile to link your Purchased device
        </div>
        <div className={styles.profile_contentt}>
          then continue to choose a template to start using your
          <span> Bubbl Device</span>
        </div>
      </div>
      <Link href="/createProfile">
        <div className={styles.profile_content_btn}>
          <Button className={styles.purchaseBtn}>
            <span>+ </span>CREATE PROFILE
          </Button>
        </div>
      </Link>
    </div>
  );
}
export default CreateProfile;
