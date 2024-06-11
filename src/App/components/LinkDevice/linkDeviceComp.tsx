import { Card } from "react-bootstrap";

import LinkDeviceHeader from "../CreateProfile/LinkDeviceNumber/LinkDeviceHeader";
import NavBar from "../ui/NavBar/_navbar";
import ProfileDeviceLink from "./profileDevice";
import style from "./profileDevice.module.css";

function LinkDeviceComp() {
  return (
    <>
      <NavBar />
      <div className="container">
        <LinkDeviceHeader />
        <Card className={style.card_header}>
          <ProfileDeviceLink />
        </Card>
      </div>
    </>
  );
}

export default LinkDeviceComp;
