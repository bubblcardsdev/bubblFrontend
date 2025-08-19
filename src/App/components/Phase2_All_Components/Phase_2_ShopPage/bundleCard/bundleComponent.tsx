/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";

import { useMemo, useState } from "react";

// import ButtonCart from "../buttons/addtocart";
// import { DeviceT } from "src/App/services/shop";
import ButtonNow from "../../../buttons/now";
import BundleImage from "../bundleImage/bundleImage";
import styles from "./bundleComponent.module.css";

function BundleComponent({
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
      <BundleImage
        price={price}
        selectedColor={color}
        images={images}
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

export default BundleComponent;
