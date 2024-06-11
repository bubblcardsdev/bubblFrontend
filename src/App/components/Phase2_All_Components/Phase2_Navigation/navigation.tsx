/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Col, Dropdown, DropdownButton } from "react-bootstrap";
import { removeAccessToken } from "src/App/helpers/local-storage";

import Cart from "../../../../../images/Phase_2_All_Assets/comman_assets/cart.svg";
import Ham from "../../../../../images/Phase_2_All_Assets/comman_assets/ham.svg";
import NavLogo from "../../../../../images/Phase_2_All_Assets/comman_assets/logo.svg";
import Profile from "../../../../../images/Phase_2_All_Assets/comman_assets/profile.svg";
import styles from "./navigation.module.css";

interface NavigationProps {
  refresh?: boolean;
  onRefresh?: () => void;
}

function Navigation(props: NavigationProps) {
  const router = useRouter();

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };
  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [cartCount, setCartCount] = useState(0);

  const cartCountVal = () => {
    const cartData = window.localStorage.getItem("cart") ?? "";
    const data = cartData ? JSON.parse(cartData) : [];
    let cartCountValRaw = 0;
    data.forEach((element: any) => {
      cartCountValRaw += element.quantity;
    });
    return cartCountValRaw;
  };

  const { refresh, onRefresh } = props;

  useEffect(() => {
    if (refresh) {
      if (onRefresh) {
        onRefresh();
      }
    }

    setCartCount(cartCountVal());
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [refresh, onRefresh]);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMyProfileClick = () => {
    // Add logic for handling My Profile click]
    router.push("/myProfile");
    setShowDropdown(false);
  };

  const handleLogout = () => {
    // Add logic for handling logout click
    removeAccessToken();
    router.push("/login");
    setShowDropdown(false);
  };
  // Initialize state for active link

  useEffect(() => {
    const storedActiveLink = router.pathname;

    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, [router.pathname]);
  return (
    <>
      {/* Desktop */}
      <section className={styles.Navigation}>
        <Col xl={10} className={styles.NavigationSection}>
          <div className={styles.logo_sec}>
            <Image
              src={NavLogo}
              className={styles.navLogo}
              alt="NavLogo"
              width={98}
              height={24}
              onClick={() => router.push("/")}
            />
          </div>
          <div style={{ display: "flex" }} className={styles.Nav_list}>
            <Link href="/">
              <button
                style={{
                  color: activeLink === "/" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                HOME
              </button>
            </Link>
            <Link href="/bubblProfiles">
              <button
                style={{
                  color: activeLink === "/bubblProfiles" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                MY PROFILE
              </button>
            </Link>
            <Link href="/myPlanPage">
              <button
                style={{
                  color: activeLink === "/myPlanPage" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                MY PLAN
              </button>
            </Link>
            <Link href="/shopPage">
              <button
                style={{
                  color:
                    activeLink === "/shopPage" ||
                    activeLink === "/productList/card" ||
                    activeLink === "/productList/socket" ||
                    activeLink === "/productList/tile" ||
                    activeLink === "/BubblCardCustomization" ||
                    activeLink === "/BubblNameCustomization" ||
                    activeLink === "/productList/bundle"
                      ? "#AB39D2"
                      : "white",
                }}
                type="button"
              >
                SHOP
              </button>
            </Link>
            <Link href="/BubblAnalytics">
              <button
                style={{
                  color: activeLink === "/BubblAnalytics" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                ANALYTICS
              </button>
            </Link>
            <Link href="/order">
              <button
                style={{
                  color:
                    activeLink === "/order" || activeLink === "/order_details"
                      ? "#AB39D2"
                      : "white",
                }}
                type="button"
              >
                MY ORDERS
              </button>
            </Link>
          </div>
        </Col>
        <Col className={styles.ActionButton}>
          {cartCount > 0 ? (
            <div className={styles.cartIconContainer}>
              {cartCount > 0 && (
                <div className={styles.cartCount}>{cartCount}</div>
              )}
              <span className={styles.cartIcon}>
                <Image
                  src={Cart}
                  alt="cart"
                  width={30}
                  height={30}
                  onClick={() => router.push("/checkout")}
                />
              </span>
            </div>
          ) : (
            <span className={styles.cartIconNoVal}>
              <Image
                src={Cart}
                alt="cart"
                width={30}
                height={30}
                onClick={() => router.push("/checkout")}
              />
            </span>
          )}
          {/* <span className={styles.cartIcon}>
            <Image src={Bell} alt="Notification" width={30} height={30} />
          </span> */}
          <span className={styles.profile_dropdown}>
            <DropdownButton
              id="profile-dropdown"
              title={
                <Image src={Profile} alt="profile" width={32} height={32} />
              }
              show={showDropdown}
              ref={dropdownRef}
              onClick={handleProfileClick}
            >
              <Dropdown.Item onClick={handleMyProfileClick}>
                Account
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          </span>
        </Col>
        <div />
      </section>
      {/* Mobile */}
      <section className={styles.NavigationMobile}>
        <div className={styles.NavigationResp}>
          <Image
            src={NavLogo}
            className={styles.navLogo}
            alt="NavLogo"
            width={98}
            height={24}
            onClick={() => router.push("/")}
          />

          <div className={styles.ActionButtonResp}>
            {cartCount > 0 ? (
              <div className={styles.cartIconContainer}>
                {cartCount > 0 && (
                  <div className={styles.cartCountResp}>{cartCount}</div>
                )}
                <span className={styles.cartIcon}>
                  <Image
                    src={Cart}
                    alt="cart"
                    width={30}
                    height={30}
                    onClick={() => router.push("/checkout")}
                  />
                </span>
              </div>
            ) : (
              <span className={styles.cartIconNoVal}>
                <Image
                  src={Cart}
                  alt="cart"
                  width={30}
                  height={30}
                  onClick={() => router.push("/checkout")}
                />
              </span>
            )}

            <span className={styles.hamburgerResp} onClick={toggleSidePanel}>
              <Image src={Ham} alt="cart" width={32} height={32} />
            </span>
          </div>
        </div>
        {/* Side panel */}
        <div
          className={`${styles.sidePanel} ${
            isSidePanelOpen ? styles.open : ""
          }`}
        >
          {/* Close button */}
          <span className={styles.closeButton} onClick={closeSidePanel}>
            &times;
          </span>
          <div className={styles.Nav_listResp}>
            <Link href="/">
              <button
                style={{
                  color: activeLink === "/" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                HOME
              </button>
            </Link>
            <Link href="/bubblProfiles">
              <button
                style={{
                  color: activeLink === "/bubblProfiles" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                MY PROFILE
              </button>
            </Link>
            <Link href="/myPlanPage">
              <button
                style={{
                  color: activeLink === "/myPlanPage" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                MY PLAN
              </button>
            </Link>
            <Link href="/shopPage">
              <button
                style={{
                  color:
                    activeLink === "/shopPage" ||
                    activeLink === "/productList/card" ||
                    activeLink === "/productList/socket" ||
                    activeLink === "/productList/tile" ||
                    activeLink === "/BubblCardCustomization" ||
                    activeLink === "/BubblNameCustomization" ||
                    activeLink === "/productList/bundle"
                      ? "#AB39D2"
                      : "white",
                }}
                type="button"
              >
                SHOP
              </button>
            </Link>
            <Link href="/BubblAnalytics">
              <button
                style={{
                  color: activeLink === "/BubblAnalytics" ? "#AB39D2" : "white",
                }}
                type="button"
              >
                ANALYTICS
              </button>
            </Link>
            <Link href="/order">
              <button
                style={{
                  color:
                    activeLink === "/order" || activeLink === "/order_details"
                      ? "#AB39D2"
                      : "white",
                }}
                type="button"
              >
                MY ORDERS
              </button>
            </Link>
            <Link href="/myProfile">
              <button
                style={{
                  color:
                    activeLink === "/myProfile" || activeLink === "/myProfile"
                      ? "#AB39D2"
                      : "white",
                }}
                type="button"
              >
                MY ACCOUNT
              </button>
            </Link>

            <Link href="/login">
              <button
                onClick={() => {
                  removeAccessToken();
                  router.push("/login");
                }}
                type="button"
              >
                LOGOUT
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
