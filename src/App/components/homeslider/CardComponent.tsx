/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";

import { useMemo, useState } from "react";

import ButtonNow from "../buttons/now";
import BundleCards from "../ui/Card/bundles";
import styles from "./slider.module.css";

function CardComponent({
  price,
  title,
  description,
  images,
  showDiscount,
}: {
  price: number;
  title: string;
  description: string;
  images: Record<string, string>;
  showDiscount?: boolean;
}) {
  const colors = useMemo(() => Object.keys(images), [images]);
  const [color, setColor] = useState(colors[0] || "");

  let staticText = "Bubbl Basic";

  if (title.includes("Bundle")) {
    staticText = "Bubbl";
  }

  return (
    <div className={styles.bundlecards}>
      <BundleCards
        price={price}
        selectedColor={color}
        images={images}
        // setColors={setColor}
        title={title}
        showDiscount={showDiscount}
      />
      <div className={styles.quantity}>
        <p className={styles.heading}>
          {staticText} {title}
        </p>
      </div>
      <p className={styles.productcont}>{description}</p>
      <div className={styles.product_buttons}>
        <ButtonNow productName={title} />
      </div>
    </div>
  );
}

export default CardComponent;
