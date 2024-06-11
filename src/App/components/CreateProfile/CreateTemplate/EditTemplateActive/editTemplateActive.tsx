import Image from "next/image";

import TemplateIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color-white.svg";
import CreateProfileIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color.svg";
import LinkDeviceIcon from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color.svg";
import styles from "./editTemplateActive.module.css";

function EditTemplateActiveTab() {
  return (
    <div>
      <div className={styles.device_header_line} />
      <div className={styles.device_header}>
        <div>
          <div className={styles.profile_icon}>
            <Image src={LinkDeviceIcon} alt="bubbl" />
          </div>
          <div className={styles.device_header_profile}>Link your Device</div>
        </div>
        <div>
          <div className={styles.profile_icon}>
            <Image src={CreateProfileIcon} alt="bubbl" />
          </div>
          <div>
            <div className={styles.device_header_profile}>
              Create Profile Name
            </div>
          </div>
        </div>
        <div>
          <div className={styles.link_icon_background}>
            <Image src={TemplateIcon} width="25" alt="bubbl" />
          </div>
          <div>
            <div className={styles.device_header_linkedDevice}>
              Edit Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditTemplateActiveTab;
