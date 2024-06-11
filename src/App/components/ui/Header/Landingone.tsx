/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import LoaderScreen from "../../lottie/lottie";
import Footer from "../Footer/footer";
import NavBar from "../NavBar/_navbar";
import CardSlider from "./cardSlider";
import Fourmodes from "./fourmodes";
import styles from "./header.module.css";
import UpgradePlan from "./upgradPlan";
import WorkFlow from "./workFlow";
import YourProfile from "./yourProfile";

function LandingOne() {
  const [plan, setPlan] = useState<any>();

  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };
  useEffect(() => {
    getPlanDetails();
  }, []);
  return (
    <LoaderScreen>
      <div>
        <NavBar />
        <div className={styles.headerBackgrnd}>
          <CardSlider plan={plan} />
        </div>
        <YourProfile plan={plan} />
        <Footer />
      </div>
    </LoaderScreen>
  );
}

export default LandingOne;
