/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

import CreateProfileImg from "../../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/free_subscription.svg";
import Style from "./editHeaderBanner.module.css";

function EditTemplateHeader() {
  return (
    <div className={Style.createProfile_header_banner}>
      <div className={Style.createProfile_header_div}>
        <div className={Style.createProfile_header_left}>
          <a href="/">
            <span className={Style.home_color_head}>Home {" > "}</span>
          </a>
          <span className={Style.linkDevice_color_head}>Edit Profile</span>

          <div className={Style.createProfile_heading}>Edit Profile</div>

          <div className={Style.createProfile_heading_content}>
            Start by edit profile to link your Purchased device then continue to
            choose a template to start using your Bubbl device
          </div>
        </div>

        <div className={Style.image_head}>
          <Image src={CreateProfileImg} />
        </div>
      </div>
    </div>
  );
}
export default EditTemplateHeader;
