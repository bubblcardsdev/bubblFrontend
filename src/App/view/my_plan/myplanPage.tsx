/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Right from "../../../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import Free from "./freeComponent";
import styles from "./myPlanPage.module.css";
import Pro from "./ProComponent";
import TableCompPage from "./TableComponent/tableComponent";

function MyplanPage() {
  const [plan, setPlan] = useState<any>();

  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    getPlanDetails();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topPositions = [10, 40, 30];
  const sizes = [65, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-5, 0, 18];
  const showGradients = [false, true, false];

  return (
    <LoaderScreen>
      <div className={styles.planContainer}>
        <div className={styles.subContainer}>
          <div className={styles.planSection}>
            <div className={styles.backgroundContainer}>
              <ParallaxBackground
                scrollPosition={scrollPosition}
                topPositions={topPositions}
                sizes={sizes}
                rightPositions={rightPositions}
                leftPositions={leftPosition}
                showImage1={false}
                showImage2
                showImage3
                showGradients={showGradients}
              />
            </div>
            <div className={styles.planLandingPage}>
              <Navigation />

              {/* Breadcrumbs section */}
              {/* <div className={styles.breadCrumbs}>
                <div className={styles.link1}>
                  <Link href="/">Home</Link>
                </div>
                <Image src={Right} alt="right" />
                <div className={styles.link2}>
                  <Link href="/">My Plan</Link>
                </div>
              </div> */}
              <p className={styles.plan_heading}>My Plan</p>
              {/* Plan Sub Content */}
              <div>
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

              <div className={styles.plan_section}>
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
              </div>

              {/* TABLE COMPONENT */}
              <div className={styles.proTableDiv}>
                <TableCompPage />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </div>
        <div className={styles.backgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1={false}
            showImage2={false}
            showImage3
            showGradients={showGradients}
          />
        </div>
      </div>
    </LoaderScreen>
  );
}

export default MyplanPage;
