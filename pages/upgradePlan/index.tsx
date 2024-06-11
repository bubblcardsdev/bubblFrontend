/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "src/App/components/ui/Footer/footer";
import Fourmodes from "src/App/components/ui/Header/fourmodes";
import UpgradePlan from "src/App/components/ui/Header/upgradPlan";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import banner from "../../public/order_page/banner_im.png";
import styles from "./upgrade.module.css";

function MyplanPage() {
  const [plan, setPlan] = useState<any>();
  const getPlanDetails = async () => {
    const plans = await getUserPlan();

    setPlan(plans?.data);
  };
  useEffect(() => {
    getPlanDetails();
  }, []);
  return (
    <div>
      <NavBar />
      <div className={styles.order_banner}>
        <div className="container">
          <div className={styles.plan_header_div}>
            <div className={styles.plan_header_left}>
              <a href="/">
                <span className={styles.home_color_head}>Home {" > "}</span>
              </a>
              <a href="/myPlan">
                <span className={styles.home_color_head}>
                  Your Plan {" > "}
                </span>
              </a>

              <span className={styles.linkDevice_color_head}>Upgrade Plan</span>
              <div className={styles.plan_heading}>
                Why Should you Upgrade Plan ?
              </div>
              <div className={styles.plan_heading_content}>
                Upgrading your plan will give you access to even more premium
                content.
              </div>
              <div style={{ marginTop: "30px" }}>
                <a href="#upgradePlan" className={styles.view_plan}>
                  View Plan
                </a>
              </div>
            </div>
            <div className={styles.banner_img}>
              <Image src={banner} alt="bubbl" />
            </div>
          </div>

          <div className={styles.plan_section}>
            {/* Four Modes */}

            <Fourmodes />
            {/* Choose Your Plan */}
            <div className={styles.yourPlan}>
              <h2>Choose your Plan </h2>
              <p>
                Current Plan:
                <span>Bubbl {plan?.getPlans?.subscriptionType}</span>
              </p>
            </div>
            <div id="upgradePlan">
              <UpgradePlan />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyplanPage;
