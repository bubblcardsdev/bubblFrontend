/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/ui/Footer/footer";
import UpgradePlan from "src/App/components/ui/Header/upgradPlan";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import Free from "./freeComponent";
import styles from "./myPlanPage.module.css";
import Pro from "./ProComponent";

function MyplanPage() {
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
        <div className={styles.order_banner}>
          <div className="container">
            <div className={styles.plan_header_div}>
              <div className={styles.plan_header_left}>
                <a href="/">
                  <span className={styles.home_color_head}>Home {" > "}</span>
                </a>

                <span className={styles.linkDevice_color_head}>My Plan</span>
                <p className={styles.plan_heading}>My Plan</p>
                {plan?.getPlans?.planId === 1 ? (
                  <p className={styles.plan_heading_content}>
                    Enjoy the cool New Benefits of your Bubbl Free Plan.
                  </p>
                ) : (
                  <p className={styles.plan_heading_content}>
                    Enjoy the cool New Benefits of your Bubbl Pro Plan.
                  </p>
                )}
              </div>
            </div>

            <div className={styles.plan_section}>
              <h1>My Plan</h1>

              {plan?.getPlans?.planId === 1 || plan === undefined ? (
                <Free />
              ) : (
                <Pro
                  planValidity={plan?.getPlans?.planValidity}
                  planStartDate={plan?.getPlans?.planStartDate}
                  planEndDate={plan?.getPlans?.planEndDate}
                  planId={plan?.getPlans?.planId}
                />
              )}

              <div className={styles.yourPlan}>
                <h2>Choose your Plan </h2>
                <p>
                  Current Plan:{" "}
                  <span> Bubbl {plan?.getPlans?.subscriptionType}</span>
                </p>
              </div>
              <UpgradePlan />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LoaderScreen>
  );
}

export default MyplanPage;
