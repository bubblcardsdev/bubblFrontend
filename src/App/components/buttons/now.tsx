import { useRouter } from "next/router";

import styles from "./button.module.css";

export default function ButtonNow({ productName }: { productName: string }) {
  const router = useRouter();
  const addCartValue = async () => {
    if (productName === "Card") {
      router.push("/productList/card");
    } else if (productName === "Socket") {
      router.push("/productList/socket");
    } else if (productName === "Tile") {
      router.push("/productList/tile");
    } else if (productName === "Bundle Devices") {
      router.push("/productList/bundle");
    }
  };

  return (
    <button
      type="button"
      className={styles.buttonShopNow}
      onClick={() => addCartValue()}
    >
      <p>SHOP NOW</p>
    </button>
  );
}
