import Image from "next/image";

import CreateProfileImg from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/free_subscription.svg";
import Style from "./templateHeader.module.css";

function TemplateHeader() {
  return (
    <div className={Style.createProfile_header_banner}>
      <div className={Style.createProfile_header_div}>
        <div className={Style.createProfile_header_left}>
          <span className={Style.home_color_head}>Home {" > "}</span>
          <span className={Style.home_color_head}>
            Link Your Device {" > "}
          </span>
          <span className={Style.home_color_head}>
            Create Profile Name{" > "}
          </span>
          <span className={Style.linkDevice_color_head}>Create Profile</span>

          <div className={Style.createProfile_heading}>Create Profile</div>

          <div className={Style.createProfile_heading_content}>
            Start by creating a profile to link your Purchased device then
            continue to choose a template to start using your Bubbl device
          </div>
        </div>

        <div className={Style.image_head}>
          <Image src={CreateProfileImg} alt="bubbl" />
        </div>
      </div>
    </div>
  );
}
export default TemplateHeader;
