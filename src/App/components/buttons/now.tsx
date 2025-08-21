import { useRouter } from "next/router";

import styles from "./button.module.css";

interface RoutePath {
  [key: string]: string;
}

export default function ButtonNow({ productName }: { productName: string }) {
  const router = useRouter();

  const routePath: RoutePath = {
    Card: "/productList/card",
    Socket: "/productList/socket",
    Tile: "/productList/tile",
    "Bundle Devices": "/productList/bundle",
    "Wrist Band": "/productList/wristband",
  };

  return (
    <button
      type="button"
      className={styles.buttonShopNow}
      onClick={() => {
        const path = routePath[productName];
        if (path) {
          router.push(path);
        } else {
          console.warn(`No route defined for product: ${productName}`);
        }
      }}
    >
      <p>SHOP NOW</p>
    </button>
  );
}
