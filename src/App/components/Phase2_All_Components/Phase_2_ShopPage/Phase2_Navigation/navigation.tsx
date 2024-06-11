/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Col, Dropdown, DropdownButton } from "react-bootstrap";

import Cart from "../../../../../../images/Phase_2_All_Assets/comman_assets/cart.svg";
import Ham from "../../../../../../images/Phase_2_All_Assets/comman_assets/ham.svg";
import NavLogo from "../../../../../../images/Phase_2_All_Assets/comman_assets/logo.svg";
import Profile from "../../../../../../images/Phase_2_All_Assets/comman_assets/profile.svg";
import styles from "./navigation.module.css";

function ShopPageNavigation() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };
  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

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
            />
          </div>
          <div className={styles.Nav_list}>
            <Link href="/" className={styles.navContent}>
              HOME
            </Link>
            <Link href="/" className={styles.navContent}>
              MY PLAN
            </Link>
            <Link href="/" className={styles.navContent}>
              SHOP
            </Link>
            <Link href="/" className={styles.navContent}>
              ANALYTICS
            </Link>
            <Link href="/" className={styles.navContent}>
              MY ORDERS
            </Link>
          </div>
        </Col>
        <Col className={styles.ActionButton}>
          <span className={styles.cartIcon}>
            <Image src={Cart} alt="cart" width={30} height={30} />
          </span>
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
          />

          <div className={styles.ActionButtonResp}>
            <span>
              <Image src={Cart} alt="cart" width={28} height={28} />
            </span>
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
            <li>HOME</li>
            <li>MY PLAN</li>
            <li>SHOP</li>
            <li>ANALYTICS</li>
            <li>MY ORDERS</li>
            <li>MY PROFILE</li>
            <li>LOGOUT</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ShopPageNavigation;
