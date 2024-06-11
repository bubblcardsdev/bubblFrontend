/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

import currentPlan from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/currentPlan.svg";

function CurrentPlanHeader() {
  return (
    <div>
      <Image src={currentPlan} alt="bubbl" />
    </div>
  );
}
export default CurrentPlanHeader;
