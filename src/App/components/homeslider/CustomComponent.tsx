/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { getAccessToken } from "src/App/helpers/local-storage";

import arrow from "../../../../images/Bubble-website_assets/bubbl-banner/shop-now-navigation.svg";
import BundleCards from "../ui/Card/bundles";
import styles from "./slider.module.css";

function CustomComponent({
  price,
  title,
  description,
  images,
}: {
  price: number;
  title: string;
  description: string;
  images: Record<string, string>;
}) {
  const router = useRouter();
  const colors = useMemo(() => Object.keys(images), [images]);
  const [color, setColor] = useState(colors[0] || "");
  let finalPrice: number = price;

  if (title === "Name Custom") {
    finalPrice = 0;
  }
  const customClick = (title: string) => {
    const token = getAccessToken();
    // if (token !== null) {
    if (title === "Name Custom") {
      router.push("/BubblNameCustomization");
    } else {
      router.push("/BubblCardCustomization");
    }
    // } else {
    //   router.push("/login");
    // }
  };

  return (
    <div className={styles.bundlecards}>
      <BundleCards
        price={finalPrice}
        // colors={colors}
        selectedColor={color}
        images={images}
        // setColors={setColor}
        title="" // originalPrice={0}
      />
      <div className={styles.quantity}>
        <p className={styles.heading}>Bubbl {title}</p>
      </div>
      <p className={styles.productcont}>{description}</p>
      {title === "Full Custom" ? (
        <div className={styles.product_buttons}>
          <button
            type="button"
            className={styles.startCustomizeBtn}
            onClick={() => customClick(title)}
          >
            <p>START CUSTOMIZING</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </button>
        </div>
      ) : (
        <div className={styles.product_buttons}>
          <button
            type="button"
            className={styles.startCustomizeBtn}
            onClick={() => customClick(title)}
          >
            <p>START CUSTOMIZING</p>
            <Image src={arrow} className={styles.arw} alt="bubbl" />
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomComponent;
