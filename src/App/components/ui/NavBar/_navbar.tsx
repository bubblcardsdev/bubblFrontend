/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable simple-import-sort/imports */
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  getAccessToken,
  removeAccessToken,
  getCartValue,
} from "src/App/helpers/local-storage";
import { listingData } from "src/App/services/createProfileApi";
import { getCartItems } from "src/App/services/shopPage/shopServices";
import account from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/account-icon.svg";
import cart from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/cart-icon.svg";
import cartResp from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/cart-icon_resp.svg";
import notify from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/notification-icon.svg";
import pro from "../../../../../images/pro.svg";
import styles from "../Header/header.module.css";
import Logo from "../Logo/logo";

function NavBar({ cartTotal }: any) {
  const router = useRouter();
  const [cartLength, setCartLength] = useState();
  const [cartVal, setCartVal] = useState();

  const logoutHandler: MouseEventHandler = () => {
    removeAccessToken();
    router.replace("/");
  };
  const [isOpen, setOpen] = useState(false);

  const getProfiles = async () => {
    const profResponse = await listingData();
    return profResponse;
  };

  const landingNavigator = () => {
    getProfiles().then((respDatas) => {
      router.replace("/bubblProfiles");

      // if (respDatas?.data?.devices?.length === 0) {
      //   router.replace("/landing");
      // } else {
      //   router.replace("/landing1");
      // }
    });
  };

  const ProfileHandler = () => {
    router.push("/userProfile");
  };

  const homeClickFunction = () => {
    const token = getAccessToken();
    if (token) {
      router.push("/landing1");
    } else {
      router.push("/");
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
    getCartLength();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={styles.navbar_bg}
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={landingNavigator}>
          <Button
            variant="none"
            onClick={landingNavigator}
            className={styles.logo}
          >
            <Logo />
          </Button>
        </Navbar.Brand>
        <div className={styles.nav_reponsive}>
          <div className={styles.nav_reponsive_cart}>
            <div className={styles.iconsNav}>
              <div className={styles.nav_image}>
                <a href="/checkout">
                  <Image src={cartResp} alt="account" width={40} />
                </a>
              </div>
            </div>
          </div>

          <Navbar.Toggle
            className={styles.hamburger_resp}
            aria-controls="responsive-navbar-nav"
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="black"
              size={25}
              hideOutline={false}
            />
          </Navbar.Toggle>
        </div>

        {/* responsive */}

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" />
          </Nav>
          <Nav className={styles.nav_link_responsive}>
            <Nav.Link onClick={homeClickFunction} className={styles.nav_link}>
              Home
            </Nav.Link>
            <Nav.Link href="/myPlan" className={styles.nav_link}>
              My Plan
            </Nav.Link>
            <Nav.Link href="/shopPage" className={styles.nav_link}>
              Shop
            </Nav.Link>
            <Nav.Link
              href="/analyticsPro"
              className={`${styles.nav_link} ${styles.nav_linkt}`}
              style={{
                backgroundImage: `url(${pro.src})`,
              }}
            >
              Analytics
            </Nav.Link>
            <Nav.Link href="/order" className={styles.nav_link}>
              My Orders
            </Nav.Link>
            <div className={styles.hamburger_line} />
            <Nav.Link
              href="/userProfile"
              className={`${styles.nav_link} ${styles.nav_link_hamburger}`}
            >
              Profile Information
            </Nav.Link>
            <Nav.Link
              onClick={logoutHandler}
              className={`${styles.nav_link} ${styles.nav_link_hamburger}`}
            >
              Logout
            </Nav.Link>
            <div className={`${styles.logo} ${styles.logo_hamburger}`}>
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
              <div className={styles.hamburger_footer}>
                Bubbl 2023. All rights reserved
              </div>
            </div>
            <Nav.Link href="/checkout" className={styles.icons_hide}>
              <div className={styles.iconsNav}>
                <div className={styles.nav_image}>
                  <Image src={cart} alt="account" width={22} height={22} />
                  {cartTotal ? (
                    <span className={`${styles.lblCartCount}`}>
                      {cartTotal}
                    </span>
                  ) : (
                    <span className={`${styles.lblCartCount}`}>{cartVal}</span>
                  )}
                </div>
              </div>
            </Nav.Link>
            <NavDropdown
              className={styles.icons_hide}
              title={
                <div className={styles.iconsNav}>
                  <div className={styles.nav_image}>
                    <Image src={account} alt="account" width={18} height={18} />
                  </div>
                </div>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={ProfileHandler}
                className={styles.nav_link_dropdown}
              >
                Account
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={logoutHandler}
                className={styles.nav_link_dropdown}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
