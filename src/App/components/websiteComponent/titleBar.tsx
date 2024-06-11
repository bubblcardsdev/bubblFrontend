/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAccessToken, getCartValue } from "src/App/helpers/local-storage";
import { getCartItems } from "src/App/services/shopPage/shopServices";

import cart from "../../../../images/Bubble-website_assets/bubbl-banner/add_to_cart.svg";
import Logo from "../../../../images/Bubble-website_assets/bubbl-banner/logo.svg";
import styles from "./titleBar.module.css";

function TitleBar() {
  const router = useRouter();
  const [cartLength, setCartLength] = useState();
  const [cartVal, setCartVal] = useState();

  const getCartItemsLength = async () => {
    const token = getAccessToken();
    if (token !== null) {
      const cartResponse: any = await getCartItems();
      setCartLength(cartResponse?.response?.data.cartLength);
    }
  };

  const LoginPage = () => {
    router.push("/login");
  };

  const cartNavigation = () => {
    const token = getAccessToken();
    if (token === null) {
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  const getCartLength = async () => {
    const getCart: any = getCartValue();
    const cartCount = JSON.parse(getCart);
    if (cartCount !== null) {
      setCartVal(cartCount.length);
    }
  };

  useEffect(() => {
    getCartItemsLength();
    getCartLength();
  });
  return (
    <div className={styles.sticky_nav}>
      <div className="container">
        <div className={styles.userprofile}>
          <div className={styles.logo}>
            <Image src={Logo} onClick={() => router.push("/")} alt="bubbl" />
          </div>

          <div className={styles.userprofile_link}>
            <div className={styles.home}>
              <a href="/">HOME</a>
              <a href="/shop">SHOP</a>
              <a href="/bubblpro">BUBBL PRO</a>
              <a href="/contact">CONTACT US</a>
            </div>
            <div className={styles.cart}>
              <div className={styles.cart_number}>
                <Image
                  alt="bubbl"
                  src={cart}
                  className={styles.cart_img}
                  onClick={cartNavigation}
                />

                <span className={`${styles.lblCartCount}`}>{cartVal}</span>
              </div>

              <div className={styles.login} onClick={LoginPage}>
                LOGIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TitleBar;
