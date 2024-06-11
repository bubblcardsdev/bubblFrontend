import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import Accordian from "../../accordian/accordian";
import styles from "./frequently.module.css";

function FrequentlyQuestions() {
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
  const topPositions = [100, 205, 200];
  const sizes = [65, 32, 45];
  const rightPositions = [0, -5, 0];
  const leftPosition = [-15, 0, -10];
  const showGradients = [false, true, false];
  return (
    <div className={styles.frequentSectionContainer}>
      <div className={styles.frequentSection}>
        <div className={styles.accord}>
          <Col className="col-6">
            {/* <h2 className={styles.frequently}>Frequently Asked Questions</h2> */}
            <h2 className={styles.frequently}>Bubbl FAQ&apos;s</h2>
          </Col>
          <Col className="col-6">
            <Accordian />
          </Col>
        </div>
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
      </div>

      {/* RESPONSIVE */}
      <div className={styles.responsiveFrequent}>
        <div className={styles.responsiveFrequentWidth}>
          {/* <h1>
            Frequently Asked <br /> Questions
          </h1> */}
          <h1 className={styles.bubblFaq}>Bubbl FAQ&apos;s</h1>
          <Accordian />
        </div>
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
      </div>
    </div>
  );
}
export default FrequentlyQuestions;
