/* eslint-disable no-unused-expressions */
/* eslint-disable simple-import-sort/imports */
// Import necessary modules and components from Next.js and your project
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { listingData } from "src/App/services/createProfileApi";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";

// Import SVG images for use in the component
import Right from "../../images/Phase_2_All_Assets/comman_assets/rightArr.svg";
import Card from "../../images/Phase_2_All_Assets/create_profile/01.svg";

// Import CSS module for styling
import styles from "./createProfileStep1.module.css";

// Define the functional component CreateProfileStep1
function CreateProfileStep1() {
  const [allProfiles, setAllProfiles] = useState<any>();
  const [plan, setPlan] = useState<any>();

  // function for getting all the devices
  const getAllDeviceFunction = async () => {
    const response = await listingData();
    setAllProfiles(response?.data?.profiles);
  };

  // GET ALL PLANS
  const getPlanDetails = async () => {
    const planResp = await getUserPlan();

    if (planResp?.data?.success) {
      setPlan(planResp?.data);
    }
  };

  useEffect(() => {
    getAllDeviceFunction();
    getPlanDetails();
  }, []);

  const router = useRouter();

  return (
    // Start of the section for creating profile
    <LoaderScreen>
      <section className={styles.createProfileSection}>
        <ToastContainer />
        <div className={styles.createProfilePage}>
          {/* Navigation component */}
          <div className={styles.navContainer}>
            <Navigation />
          </div>

          {/* Breadcrumbs section */}
          <div className={styles.breadCrumbs}>
            <div className={styles.link1}>
              {/* Link to Home */}
              <Link href="/">Home</Link>
            </div>
            {/* Right arrow SVG */}
            <Image src={Right} alt="right" />
            <div className={styles.link2}>
              {/* Link to Create Profile */}
              <Link href="/">Create Profile</Link>
            </div>
          </div>

          {/* Main content of Create Profile page */}
          <div className={styles.createProfile}>
            <h2>Create Profile</h2>
            <p>
              Start by creating a profile to link your Purchased device then
              continue to choose a template to start using your Bubbl device
            </p>
            <p className={styles.OrContent}>Or</p>
            <div className={styles.shopNowButton}>
              <div className={styles.BuyNowText}>
                {/* Link for creating a new profile */}
                <Link href="/shopPage">Shop Now</Link>
              </div>
            </div>

            {/* Card image */}
            <div className={styles.cardImg}>
              <Image src={Card} alt="Card" width={250} height={250} />
            </div>

            {/* Profile action links */}
            <div className={styles.profileAction}>
              <div className={styles.ProfileLink}>
                {/* Link for users who already have a profile */}
                <Link href="/bubblProfiles">Already have a profile</Link>
              </div>

              {plan?.getPlans?.planId === 1 ? (
                <div
                  className={styles.Profile}
                  style={{ opacity: allProfiles?.length >= 2 ? 0.5 : 1 }}
                >
                  <Button
                    className={styles.profileBtn}
                    onClick={() => {
                      allProfiles?.length >= 2
                        ? toast.error("Cannot create more than 2 profiles")
                        : router.push("/createProfileStep2");
                    }}
                  >
                    New profile
                  </Button>
                </div>
              ) : (
                <div
                  className={styles.Profile}
                  style={{ opacity: allProfiles?.length >= 25 ? 0.5 : 1 }}
                >
                  <Button
                    className={styles.profileBtn}
                    onClick={() => {
                      allProfiles?.length >= 25
                        ? toast.error("Cannot create more than 5 profiles")
                        : router.push("/createProfileStep2");
                    }}
                  >
                    New profile
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <section className={styles.footerSection}>
          <div className={styles.footerSectionInside}>
            <Footer />
          </div>
        </section>
      </section>
    </LoaderScreen>
  );
}

// Export the component as the default export
export default CreateProfileStep1;
