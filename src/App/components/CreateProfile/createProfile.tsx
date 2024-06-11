import { Card } from "react-bootstrap";

import NavBar from "../ui/NavBar/_navbar";
import style from "./createProfile.module.css";
import LinkDeviceHeader from "./LinkDeviceNumber/LinkDeviceHeader";
import LInkDeviceField from "./LinkDeviceNumber/linkInput";

function CreateProfile() {
  return (
    <>
      <NavBar />
      <div className={style.container_div}>
        <div className="container">
          <LinkDeviceHeader />
          {/* Link device card and input */}
          <Card className={style.card_header}>
            <LInkDeviceField />
          </Card>
        </div>
      </div>
    </>
  );
}

export default CreateProfile;
