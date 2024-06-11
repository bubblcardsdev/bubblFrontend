import Image from "next/image";

import TemplateIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/choose_a_template/choose_a_template-icon-color.svg";
import CreateProfileIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/create_profile/create_profile-icon-color-white.svg";
import LinkDeviceIcon from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/link_device-icon-color.svg";
import Styles from "./createProfileName.module.css";

function ProfileNameActiveTab() {
  return (
    <div>
      <div className={Styles.device_header_line} />
      <div className={Styles.device_header}>
        <div>
          <div className={Styles.profile_icon}>
            <Image src={LinkDeviceIcon} alt="bubbl" />
          </div>
          <div className={Styles.device_header_profile}>Link your Device</div>
        </div>
        <div>
          <div className={Styles.link_icon_background}>
            <Image src={CreateProfileIcon} width="25" alt="bubbl" />
          </div>
          <div>
            <div className={Styles.device_header_linkedDevice}>
              Create Profile Name
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.profile_icon}>
            <Image src={TemplateIcon} alt="bubbl" />
          </div>
          <div>
            <div className={Styles.device_header_profile}>Create Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileNameActiveTab;
