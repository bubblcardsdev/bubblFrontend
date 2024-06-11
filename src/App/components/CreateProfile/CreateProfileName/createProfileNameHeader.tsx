import Image from "next/image";

import CreateProfileImg from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/free_subscription.svg";
import Style from "./createProfileName.module.css";

function CreateProfileHeader() {
  return (
    <div>
      <div className={Style.createProfile_header_div}>
        <div className={Style.createProfile_header_left}>
          <span className={Style.home_color_head}>Home {" > "}</span>
          <span className={Style.home_color_head}>
            Link Your Device {" > "}
          </span>
          <span className={Style.linkDevice_color_head}>
            Create Profile Name
          </span>
          <div className={Style.createProfile_heading}>Create Profile Name</div>
          <div className={Style.createProfile_heading_content}>
            Start by creating a profile to link your Purchased device then
            continue to choose a template to start using your Bubbl Device
          </div>
        </div>

        <div className={Style.image_head}>
          <Image src={CreateProfileImg} alt="bubbl" />
        </div>
      </div>
    </div>
  );
}
export default CreateProfileHeader;
