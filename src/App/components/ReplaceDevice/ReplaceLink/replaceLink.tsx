import { Card } from "react-bootstrap";

import Footer from "../../Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "../../Phase2_All_Components/Phase2_Navigation/navigation";
import ReplaceDeviceField from "./replaceField";
import ReplaceDeviceHeader from "./replaceHeader";
import style from "./replaceLink.module.css";

function ReplaceLink() {
  return (
    <div className={style.container}>
      <div className={style.replaceDeviceContainer}>
        <div className={style.navigationContainer}>
          <Navigation />
        </div>
        <div className={style.container_div}>
          <div className="container">
            <ReplaceDeviceHeader />
            {/* Link device card and input */}
            <Card className={style.card_header}>
              <ReplaceDeviceField />
            </Card>
          </div>
        </div>
        <div className={style.FooterContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ReplaceLink;
