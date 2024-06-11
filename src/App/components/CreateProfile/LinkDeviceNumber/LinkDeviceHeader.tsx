/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

import CreateProfileImg from "../../../../../images/BUBBL_Create_Profile_Page_Asset/link_device/free_subscription.svg";
import style from "./linkDevice.module.css";

function LinkDeviceHeader() {
  return (
    <div className={style.createProfile_header_div}>
      <div className={style.createProfile_header_left}>
        <a href="/">
          <span className={style.home_color_head}>Home {" > "}</span>
        </a>
        {/* <span className={style.home_color_head}>Home {" > "}</span> */}
        <span className={style.linkDevice_color_head}>Link your Device</span>
        <div className={style.createProfile_heading}>Link Your Device</div>
        <div className={style.createProfile_heading_content}>
          Start by creating a profile to link your Purchased device then
          continue to choose a template to start using your Bubbl Device
        </div>
      </div>

      <div className={style.image_head}>
        <Image src={CreateProfileImg} alt="bubbl" />
      </div>
    </div>
  );
}
export default LinkDeviceHeader;
