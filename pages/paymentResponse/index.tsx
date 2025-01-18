/* eslint-disable no-unused-expressions */
/* eslint-disable simple-import-sort/imports */
// Import necessary modules and components from Next.js and your project
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Card from "../../images/Phase_2_All_Assets/create_profile/01.svg";

// Import CSS module for styling
import styles from "./paymentResponse.module.css";
import HomePageNavigation from "src/App/components/Phase2_All_Components/Phase_2_HomePage/navigationHome/homeNavigation";
import {
  removeCartValue,
  removeShippingDetails,
  removePriceValue,
} from "src/App/helpers/local-storage";

// Define the functional component PaymentResponse
function PaymentResponse() {
  // function for getting all the devices

  const router = useRouter();

  const orderId = router.query?.orderId;

  useEffect(() => {
    removeCartValue();
    removeShippingDetails();
    removePriceValue();
  }, []);

  return (
    // Start of the section for creating profile
    <LoaderScreen>
      <section className={styles.createProfileSection}>
        <ToastContainer />
        <div className={styles.createProfilePage}>
          {/* Navigation component */}
          <div className={styles.navContainer}>
            <HomePageNavigation />
          </div>

          {/* Main content of Create Profile page */}
          <div className={styles.createProfile}>
            <h2>Thank you for your purchase!</h2>
            <p>
              While you wait for your bubbl to arrive, create a free account and
              get Started
            </p>

            {/* Card image */}
            <div className={styles.cardImg}>
              <Image src={Card} alt="Card" width={250} height={250} />
            </div>

            {/* Profile action links */}
            <div className={styles.profileAction}>
              <div className={styles.ProfileLink}>
                {/* Link for users who already have a profile */}
                <Link href={`/order_details?orderId=${orderId}`}>
                  Show Order details
                </Link>
              </div>

              <div className={styles.Profile}>
                <Button
                  className={styles.profileBtn}
                  onClick={() => router.push("/register")}
                >
                  Create Account
                </Button>
              </div>
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
export default PaymentResponse;
