/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import businessImg from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/business.png";
import Events from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/events.png";
import Individuals from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/individuals.png";
import Retail from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/retail.png";
import Univertise from "../../../../../../images/Phase_2_All_Assets/home_page/homePageNetworking/univertise.png";
import styles from "./networking.module.css";

function NetworkingSection() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverImg, setHoverImg] = useState<any>(businessImg);

  const hanldeImage = (id: number) => {
    switch (id) {
      case 0:
        return setHoverImg(businessImg);
      case 1:
        return setHoverImg(Univertise);
      case 2:
        return setHoverImg(Individuals);
      case 3:
        return setHoverImg(Retail);
      case 4:
        return setHoverImg(Events);

      default:
        return setHoverImg(businessImg);
    }
  };

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
  const topPositions = [10, 35, 100];
  const sizes = [20, 32, 45];
  const rightPositions = [0, -50, 0];
  const leftPosition = [-40, 0, -10];
  const showGradients = [false, true, false];
  const handleMouseOver0 = () => {
    setIsHovered(true);
    hanldeImage(0);
  };
  const handleMouseOver1 = () => {
    setIsHovered(true);
    hanldeImage(1);
  };
  const handleMouseOver2 = () => {
    setIsHovered(true);
    hanldeImage(2);
  };
  const handleMouseOver3 = () => {
    setIsHovered(true);
    hanldeImage(3);
  };
  const handleMouseOver4 = () => {
    setIsHovered(true);
    hanldeImage(4);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    router.push("/networking");
  };
  return (
    <div className={styles.networkingContainer}>
      <h1 className={styles.networkingHead}>The Future Of Networking</h1>
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
      <div className={styles.networkingContentDiv}>
        <p>
          Learn more on how you can unleash a new era of connectivity, build,
          connections and showcase your offerings using our products tailored
          for business, individuals, events, universities, retail & more
        </p>
      </div>

      <div className={styles.imageContainer}>
        <div>
          <div className={styles.firstCol}>
            <div className={styles.paragraphContainers}>
              <p
                className={`${styles.business} ${
                  isHovered ? styles.hovered : ""
                }`}
                onMouseOver={handleMouseOver0}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                For Businesses
                <span className={styles.arrow}>&#8594;</span>
              </p>
            </div>
            <div className={styles.paragraphContainers}>
              <p
                className={`${styles.business} ${
                  isHovered ? styles.hovered : ""
                }`}
                onMouseOver={handleMouseOver1}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                For Individuals
                <span className={styles.arrow}>&#8594;</span>
              </p>
            </div>{" "}
            <div className={styles.paragraphContainers}>
              <p
                className={`${styles.business} ${
                  isHovered ? styles.hovered : ""
                }`}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                For Events
                <span className={styles.arrow}>&#8594;</span>
              </p>
            </div>{" "}
            <div className={styles.paragraphContainers}>
              <p
                className={`${styles.business} ${
                  isHovered ? styles.hovered : ""
                }`}
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                For Universities
                <span className={styles.arrow}>&#8594;</span>
              </p>
            </div>{" "}
            <div className={styles.paragraphContainers}>
              <p
                className={`${styles.business} ${
                  isHovered ? styles.hovered : ""
                }`}
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
              >
                For Retail
                <span className={styles.arrow}>&#8594;</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.secondCol}>
          <div className={styles.imageDiv}>
            {hoverImg ? <Image src={hoverImg} /> : <p>DEFAULT</p>}
          </div>
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
          showImage2
          showImage3
          showGradients={showGradients}
        />
      </div>
    </div>
  );
}
export default NetworkingSection;
