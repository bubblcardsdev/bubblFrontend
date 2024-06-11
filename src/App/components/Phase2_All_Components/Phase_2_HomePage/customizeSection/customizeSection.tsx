import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import arrow from "../../../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import styles from "./customizeSection.module.css";

function ParallaxWrapper({ children }: any) {
  return <Parallax speed={20}>{children}</Parallax>;
}
function CustomizeSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const cardRoute = () => {
    router.push("/shopPage");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topPositions = [10, 35, 10];
  const sizes = [20, 46, 46];
  const rightPositions = [0, -45, -15];
  const leftPosition = [-40, 0, 0];
  const showGradients = [false, false, false];
  return (
    <div className={styles.customizeContainer}>
      <p>Customize Your Card</p>
      <div className={styles.customizeDiv}>
        <div className={styles.customizeSubContent}>
          Our Customize section allows you to design your own cards with your
          name, Unique logo and branding, making a lasting impression on those
          you meet.
        </div>
      </div>

      <div className={styles.backgroundContainer}>
        <ParallaxBackground
          scrollPosition={scrollPosition / 10}
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
      <div className={styles.chooseVideoDiv}>
        <video
          autoPlay
          muted
          loop
          className={styles.chooseVideo}
          preload="auto"
          playsInline
          controls={false}
        >
          <source src="static/images/video/customVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.buttonDiv}>
        <Button className={styles.buttonShop} onClick={cardRoute}>
          <p>DESIGN YOUR CARD</p>
          <Image src={arrow} className={styles.arw} alt="bubbl" />
        </Button>
      </div>
      <div className={styles.backgroundContainer}>
        <ParallaxWrapper>
          <ParallaxBackground
            scrollPosition={scrollPosition / 10}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={[-60, 0, 0]}
            showImage1
            showImage2={false}
            showImage3
            showGradients={showGradients}
          />
        </ParallaxWrapper>
      </div>
    </div>
  );
}
export default CustomizeSection;
