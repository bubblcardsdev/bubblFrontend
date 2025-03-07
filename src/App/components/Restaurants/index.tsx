import React, { useState } from "react";
import { useRouter } from "next/router";
import ResTwitter from "./icon/twitter_icon";
import Insta from "./icon/insta_icon";
import Facebook from "./icon/facebook_icon";
import styles from "./css/Restaurants.module.css";
import Image from "next/image";
import LeftArrow from "./icon/leftArrow";

const Restaurants = () => {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState("home");

  const navigation = (path: any) => {
    setRestaurants(path);
  };

  return (
    <div className={styles["restaurants-parent-container"]}>
      {restaurants === "home" && (
        <div className={styles["restaurants-child-container"]}>
          <div className={styles["restaurants-image-container"]}>
            <Image
              src="/head_logo.png"
              alt="backgroundimg"
              className={styles["restaurants-image-banner"]}
              width={400}
              height={175}
            />
            <div className={styles["restaurants-image-child-container"]}>
              <Image src="/radioRoom.png" alt="logo" height={100} width={100} />
              {/* <img src={maskGroup} alt="logo" /> */}
            </div>
          </div>
          <div className={styles["restaurants-button-container-parent"]}>
            <div className={styles["restaurants-button-child-container"]}>
              <p className={styles["restaurants-text"]}>
                Happy hours: 5:30 - 7 pm everyday
              </p>
              <button className={styles["restaurants-button"]}>
                Reservation
              </button>
              <button
                className={styles["restaurants-button"]}
                onClick={() => navigation("menu")}
              >
                Menu
              </button>
              <button
                className={styles["restaurants-button"]}
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/place/Radioroom/@13.0172784,80.2679081,17z/data=!4m17!1m8!3m7!1s0x3a52672530dc605b:0xa623d1f3f59f9913!2sRadioroom!8m2!3d13.0172732!4d80.2704884!10e1!16s%2Fg%2F11hz6scrpp!3m7!1s0x3a52672530dc605b:0xa623d1f3f59f9913!8m2!3d13.0172732!4d80.2704884!9m1!1b1!16s%2Fg%2F11hz6scrpp?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
                    "_blank"
                  );
                }}
              >
                Write a review
              </button>
              <button
                className={styles["restaurants-button"]}
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/place/Radioroom/@13.0172784,80.2679081,17z/data=!4m15!1m8!3m7!1s0x3a52672530dc605b:0xa623d1f3f59f9913!2sRadioroom!8m2!3d13.0172732!4d80.2704884!10e1!16s%2Fg%2F11hz6scrpp!3m5!1s0x3a52672530dc605b:0xa623d1f3f59f9913!8m2!3d13.0172732!4d80.2704884!16s%2Fg%2F11hz6scrpp?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
                    "_blank"
                  );
                }}
              >
                Locations
              </button>
            </div>
          </div>
          <div className={styles["restaurants-icons"]}>
            <p>
              <Insta />
            </p>
            <p>
              <Facebook />
            </p>
            <p>
              <ResTwitter />
            </p>
          </div>
        </div>
      )}
      {restaurants === "menu" && (
        <div className={styles["restaurants-child-container"]}>
          <div
            onClick={() => navigation("home")}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "white",
              zIndex: "5",
              cursor: "pointer",
            }}
          >
            <LeftArrow />
          </div>
          <Image
            src="/food_menu.png"
            className={styles["restaurants-menu-img"]}
            width={400}
            height={1400}
          />
          <button className={styles["order-now"]}>Order Now</button>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
