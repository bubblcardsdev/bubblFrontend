import React from "react";

import image2 from "../../images/Phase_2_All_Assets/home_page/3.png";
import image1 from "../../images/Phase_2_All_Assets/home_page/Asset13.png";
import image3 from "../../images/Phase_2_All_Assets/home_page/PurpleGradientBubbles10.png";
import styles from "./background.module.css";

interface ParallaxBackgroundProps {
  scrollPosition: number;
  topPositions: number[];
  rightPositions: number[];
  sizes: number[];
  leftPositions: number[];
  showImage1: boolean;
  showImage2: boolean;
  showImage3: boolean;
  showGradients: boolean[];
}

// eslint-disable-next-line react/function-component-definition
const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  scrollPosition,
  topPositions,
  rightPositions,
  sizes,
  leftPositions,
  showImage1,
  showImage2,
  showImage3,
  showGradients,
}) => (
  <div className={styles.homePageSection}>
    {sizes &&
      sizes.map((size, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={`${styles.backgroundContainer}`}>
          {index === 0 && showImage1 && (
            <div
              className={styles[`background${index + 1}`]}
              style={{
                backgroundImage: `url(${image1})`,
                transform: `translateY(-${scrollPosition}px)`,
                backgroundSize: `${size}%`,
                top: `${topPositions[index]}%`,
                right:
                  rightPositions[index] !== 0
                    ? `${rightPositions[index]}%`
                    : "auto",
                left:
                  leftPositions[index] !== 0
                    ? `${leftPositions[index]}%`
                    : "auto",
              }}
            >
              <div>
                {showGradients[index] && (
                  <div className={styles.gradientBackground} />
                )}
              </div>
            </div>
          )}
          {index === 1 && showImage2 && (
            <div
              className={styles[`background${index + 1}`]}
              style={{
                backgroundImage: `url(${image2})`,
                transform: `translateY(-${scrollPosition}px)`,
                backgroundSize: `${size}%`,
                top: `${topPositions[index]}%`,
                right:
                  rightPositions[index] !== 0
                    ? `${rightPositions[index]}%`
                    : "auto",
                left:
                  leftPositions[index] !== 0
                    ? `${leftPositions[index]}%`
                    : "auto",
              }}
            >
              <div>
                {showGradients[index] && <div className={styles.gradient1} />}
              </div>
            </div>
          )}
          {index === 2 && showImage3 && (
            <div
              className={styles[`background${index + 1}`]}
              style={{
                backgroundImage: `url(${image3})`,
                transform: `translateY(-${scrollPosition}px)`,
                backgroundSize: `${size}%`,
                top: `${topPositions[index]}%`,
                right:
                  rightPositions[index] !== 0
                    ? `${rightPositions[index]}%`
                    : "auto",
                left:
                  leftPositions[index] !== 0
                    ? `${leftPositions[index]}%`
                    : "auto",
              }}
            >
              <div>
                {showGradients[index] && (
                  <div className={styles.gradientBackground} />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
  </div>
);

export default ParallaxBackground;
