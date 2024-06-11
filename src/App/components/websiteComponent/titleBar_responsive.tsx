/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Nav, Navbar, NavDropdown } from "react-bootstrap";

import logores from "../../../../images/Bubble-website_assets/bubbl-banner/logo.svg";
import userres from "../../../../images/Bubble-website_assets/contact_us/responsive_user.svg";
import cartresp from "../../../../images/Bubble-website_assets/mobile_nav/cart.svg";
import contact from "../../../../images/Bubble-website_assets/mobile_nav/contact.svg";
import home from "../../../../images/Bubble-website_assets/mobile_nav/home.svg";
import pro from "../../../../images/Bubble-website_assets/mobile_nav/pro.svg";
import shop from "../../../../images/Bubble-website_assets/mobile_nav/shop.svg";
import styles from "./titleBar.module.css";

export default function ResponsiveNavbar() {
  return (
    <div className={styles.responsive_nav}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={styles.responsive_nav_bg}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <Image src={logores} alt="bubbl" />
        </Navbar.Brand>
        <Navbar.Brand href="/login">
          <Image src={userres} alt="bubbl" />
        </Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.responsive_nav}
        >
          <Nav className="mt-5">
            <Nav.Link href="/">
              <div className={styles.navlinks}>
                <Image src={home} alt="bubbl" />
                <p>HOME</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/shop">
              <div className={styles.navlinks}>
                <Image src={shop} alt="bubbl" />
                <p>SHOP</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/bubblpro">
              <div className={styles.navlinks}>
                <Image src={pro} alt="bubbl" />
                <p>BUBBL PRO</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/contact">
              <div className={styles.navlinks}>
                <Image src={contact} alt="bubbl" />
                <p>CONTACT US</p>
              </div>
            </Nav.Link>
            <Nav.Link href="/checkout">
              <div className={styles.navlinkstwo}>
                <Image src={cartresp} alt="bubbl" />
                <p>YOUR CART</p>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className={styles.navlinksthree}>
                <Image src={logores} alt="bubbl" />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
