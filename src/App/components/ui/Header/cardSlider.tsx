import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getfirstName } from "src/App/helpers/local-storage";

import arrow from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/btnArrow.svg";
import bannerhome from "../../../../../images/landing_page_product.svg";
import styles from "./header.module.css";

const bannerStyle = {
  backgroundImage:
    "radial-gradient(50% 50% at 50% 50%,#AF38D6 0%, #0f0720 0.01%,#0c0618 100%)",
};

function CardSlider({ plan }: any) {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const firstname: any = getfirstName();
    setFirstName(firstname);
  }, []);

  return (
    <div className={styles.banner} style={bannerStyle}>
      <div className={styles.bubblBanner}>
        <div className="container">
          <div className={styles.bannerBanner}>
            <div>
              <div className={styles.silderRow}>
                <div className={styles.nameContent}>
                  <h4
                    className={styles.userName}
                    style={{ textTransform: "capitalize" }}
                  >
                    Welcome {firstName}
                  </h4>
                  <h4
                    className={styles.userName_reponsive}
                    style={{ textTransform: "capitalize" }}
                  >
                    Welcome,
                    <br />
                    {firstName}
                  </h4>
                  <div className={styles.userParaOne}>
                    Congratulations! Enjoy the cool{" "}
                    {plan?.getPlans?.planId === 1 ? (
                      <span>New Benefits of your Free Bubbl Plan.</span>
                    ) : (
                      <span>New Benefits of your Pro Bubbl Plan.</span>
                    )}
                  </div>

                  <div className={styles.userParaTwo}>
                    Start by purchasing a new Bubbl Device
                  </div>
                </div>
              </div>
              <div className={`${styles["purchase-device-btn-div"]}`}>
                <Button href="/shopPage" className={styles.purchaseBtn}>
                  PURCHASE DEVICE{" "}
                  <Image src={arrow} className={styles.arrowBtn} alt="bubbl" />
                </Button>
              </div>
            </div>
            <div className={styles.banner_imag}>
              <Image src={bannerhome} alt="bubbl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardSlider;
