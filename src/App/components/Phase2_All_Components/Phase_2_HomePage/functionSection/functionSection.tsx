import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

// import { useEffect, useState } from "react";
// import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";
import IosIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/andriod.svg";
import CustomIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/custom.svg";
import NFCIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/nfc.svg";
import NoAppIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/noapp.svg";
import SaveIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/saveTree.svg";
import SecureIcon from "../../../../../../images/Phase_2_All_Assets/testimonial/secure.svg";
import styles from "./functionSection.module.css";

function ParallaxWrapper({ children }: any) {
  return <Parallax speed={0}>{children}</Parallax>;
}

function FunctionSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topPositions = [40, 80, 50];
  const sizes = [65, 30, 45];
  const rightPositions = [-25, 0, 0];
  const leftPosition = [0, 0, -15];
  const showGradients = [true, false, false];
  return (
    <ParallaxWrapper>
      <div className={styles.functionContainer}>
        <div className={styles.backgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition / 10}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1
            showImage2={false}
            showImage3
            showGradients={showGradients}
          />
        </div>
        <div className={styles.contentContainer}>
          <h1>One Card - Many Functions</h1>

          <div className={styles.imageCompanyDiv}>
            <div className={styles.imageDiv}>
              <Image src={NoAppIcon} alt="App Icon" />
              <div>
                <p>No App </p>
                <p>Needed</p>
              </div>
            </div>
            <div className={styles.imageDiv}>
              <Image src={NFCIcon} alt="App Icon" />
              <div>
                <p>NFC </p>
                <p>Technology</p>
              </div>
            </div>
            <div className={styles.imageDiv}>
              <Image src={IosIcon} alt="App Icon" />
              <div>
                <p>Android/IOS </p>
                <p>Compatible</p>
              </div>
            </div>
            <div className={styles.imageDiv}>
              <Image src={SecureIcon} alt="App Icon" />
              <div>
                <p>Secured By </p>
                <p>AWS</p>
              </div>
            </div>
            <div className={styles.imageDiv}>
              <Image src={SaveIcon} alt="App Icon" />
              <div>
                <p>Save </p>
                <p>Tress</p>
              </div>
            </div>
            <div className={styles.imageDiv}>
              <Image src={CustomIcon} alt="App Icon" />
              <div>
                <p>Custom </p>
                <p>Themes</p>
              </div>
            </div>
          </div>
        </div>

        {/* RESPONSIVE */}

        <div className={styles.imageCompanyDivResponsiveContainer}>
          <div className="container">
            <div className={styles.together}>
              <div className={styles.gridItem}>
                <Image src={NoAppIcon} alt="bubbl" />
                <p className={styles.gridContent}>No App Needed</p>
              </div>
              <div className={styles.gridItem}>
                <Image src={NFCIcon} alt="bubbl" />
                <p className={styles.gridContent}>NFC Technology</p>
              </div>
              <div className={styles.gridItem}>
                <Image src={IosIcon} alt="bubbl" />
                <p className={styles.gridContent}>Android/IOS Compatible</p>
              </div>
            </div>
            <div className={styles.together}>
              <div className={styles.gridItem}>
                <Image src={SecureIcon} alt="bubbl" />
                <p className={styles.gridContent}>Secured By AWS</p>
              </div>
              <div className={styles.gridItem}>
                <Image src={SaveIcon} alt="bubbl" />
                <p className={styles.gridContent}>Save Tress</p>
              </div>
              <div className={styles.gridItem}>
                <Image src={CustomIcon} alt="bubbl" />
                <p className={styles.gridContent}>Custom Themes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxWrapper>
  );
}
export default FunctionSection;
