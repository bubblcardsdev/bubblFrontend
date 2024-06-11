/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import NavBar from "../NavBar/_navbar";
import CardSlider from "./cardSlider";
import CreateProfile from "./createProfile";
import Fourmodes from "./fourmodes";
import styles from "./header.module.css";
import UpgradePlan from "./upgradPlan";
import WorkFlow from "./workFlow";

function Landing() {
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
    <div className={styles.LandingPage}>
      <div className={styles.headerBackgrnd}>
        <NavBar />

        <CardSlider plan={plan} />
      </div>

      <CreateProfile />

      <WorkFlow />
      <div className="container">
        <h3 className={styles.upgrade}>Upgrade your Plan</h3>
        <div>
          <span className={styles.current_plan}>Current Plan:</span>
          {plan?.getPlans?.planId === 1 ? (
            <span className={styles.planName}> Free Plan</span>
          ) : (
            <span className={styles.planName}> Pro Plan</span>
          )}
        </div>
      </div>

      <UpgradePlan />
      <Fourmodes />
    </div>
  );
}

export default Landing;
