/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";

import Cart from "../../../../../../images/Phase_2_All_Assets/comman_assets/cart.svg";
import Ham from "../../../../../../images/Phase_2_All_Assets/comman_assets/ham.svg";
import NavLogo from "../../../../../../images/Phase_2_All_Assets/comman_assets/logo.svg";
import styles from "./homeNavigation.module.css";

interface NavigationProps {
  refresh?: boolean;
  onRefresh?: () => void;
}

function HomePageNavigation(props: NavigationProps) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };
  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { refresh, onRefresh } = props;

  const cartCountVal = () => {
    const cartData = window.localStorage.getItem("cart") ?? "";
    const data = cartData ? JSON.parse(cartData) : [];
    let cartCountValRaw = 0;
    data.forEach((element: any) => {
      cartCountValRaw += element.quantity;
    });
    return cartCountValRaw;
  };

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
    // Add logic for handling My Profile click
    setShowDropdown(false);
  };

  const handleLogout = () => {
    // Add logic for handling logout click
    setShowDropdown(false);
  };

  // Effect to set initial active link on component mount
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
          <div className={styles.Nav_list}>
            <Link href="/" className={styles.Nav_list}>
              <button
                style={{ color: activeLink === "/" ? "#AB39D2" : "white" }}
                className={styles.navContent}
                type="button"
              >
                HOME
              </button>
            </Link>
            <Link href="/shopPage" className={styles.Nav_list}>
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
                className={styles.navContent}
                type="button"
              >
                SHOP
              </button>
            </Link>

            <Link href="/bubblpro" className={styles.Nav_list}>
              <button
                style={{
                  color: activeLink === "/bubblpro" ? "#AB39D2" : "white",
                }}
                className={styles.navContent}
                type="button"
              >
                BUBBL PRO
              </button>
            </Link>
            <Link href="/networking" className={styles.Nav_list}>
              <button
                style={{
                  color: activeLink === "/networking" ? "#AB39D2" : "white",
                }}
                className={styles.navContent}
                type="button"
              >
                BUBBL FOR YOU
              </button>
            </Link>
            <Link href="/contact" className={styles.Nav_list}>
              <button
                style={{
                  color: activeLink === "/contact" ? "#AB39D2" : "white",
                }}
                className={styles.navContent}
                type="button"
              >
                CONTACT US
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

          {/* <span className={styles.profile_dropdown}>
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
                My Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
          </span> */}
          <span
            onClick={() => router.push("/login")}
            className={styles.loginBtn}
          >
            LOGIN
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
            {/* <span>
              <Image src={Profile} alt="Profile" width={28} height={28} />
            </span> */}
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
          <ul className={styles.Nav_listResp}>
            <li>
              <Link href="/">
                <button
                  style={{ color: activeLink === "/" ? "#AB39D2" : "white" }}
                  className={styles.navContent}
                  type="button"
                >
                  HOME
                </button>
              </Link>
            </li>
            <li>
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
                  className={styles.navContent}
                  type="button"
                >
                  SHOP
                </button>
              </Link>
            </li>
            <li>
              <Link href="/bubblpro">
                <button
                  style={{
                    color: activeLink === "/bubblpro" ? "#AB39D2" : "white",
                  }}
                  className={styles.navContent}
                  type="button"
                >
                  BUBBL PRO
                </button>
              </Link>
            </li>
            <li>
              <Link href="/networking">
                <button
                  style={{
                    color: activeLink === "/networking" ? "#AB39D2" : "white",
                  }}
                  className={styles.navContent}
                  type="button"
                >
                  BUBBL FOR YOU
                </button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button
                  style={{
                    color: activeLink === "/contact" ? "#AB39D2" : "white",
                  }}
                  className={styles.navContent}
                  type="button"
                >
                  CONTACT US
                </button>
              </Link>
            </li>
            {/* <li>MY PROFILE</li> */}
            <li onClick={() => router.push("/login")}>
              <button
                type="button"
                style={{
                  color: activeLink === "/login" ? "#AB39D2" : "white",
                }}
              >
                LOGIN
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePageNavigation;
