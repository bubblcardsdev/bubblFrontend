import Link from "next/link";

import style from "./replaceLink.module.css";

function ReplaceDeviceHeader() {
  return (
    <div className={style.createProfile_header_div}>
      <div className={style.createProfile_header_left}>
        <Link href="/">
          <span className={style.home_color_head}>Home {" > "}</span>
        </Link>
        <Link href="/bubblProfiles">
          <span className={style.home_color_head}>BubblProfiles{" > "}</span>
        </Link>
        <span className={style.linkDevice_color_head}>Replace</span>
        <div className={style.createProfile_heading}>Replace Your Device</div>
        {/* <div className={style.createProfile_heading_content}>
          Start by creating a profile to link your Purchased device then
          continue to choose a template to start using your Bubbl Device
        </div> */}
      </div>
      {/* 
      <div className={style.image_head}>
        <Image src={CreateProfileImg} alt="bubbl" />
      </div> */}
    </div>
  );
}
export default ReplaceDeviceHeader;
