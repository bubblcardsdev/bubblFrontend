/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import nos from "../../../../../../images/Bubble-website_assets/calculate/nos.svg";
import range from "../../../../../../images/Bubble-website_assets/calculate/nostwo.svg";
import money from "../../../../../../images/Phase_2_All_Assets/home_page/moneyIcon.svg";
import save from "../../../../../../images/Phase_2_All_Assets/home_page/treeIcon.svg";
import card from "../../../../../../images/Phase_2_All_Assets/main_page/savetrees11.svg";
import styles from "./calculateTree.module.css";

function CalculateTree() {
  const [employeeCount, setEmployeeCount] = useState(10);
  const [employeeCost, setEmployeeCost] = useState(0);
  const [printCount, setPrintCount] = useState(1000);
  const [printCost, setPrintCost] = useState(0);

  const treesFormula = Math.round(employeeCount * 0.025);

  useEffect(() => {
    // Update printCost whenever employeeCount changes
    const bubblCardPrice = 10;
    const cardPrice = employeeCount * printCount;
    const bubblPrice = employeeCount * bubblCardPrice;
    const costDifference = cardPrice - bubblPrice;
    setPrintCost(costDifference);
  }, [employeeCount, printCount]);

  const employeeCountHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = +e.target.value;
    setEmployeeCount(value);
    setEmployeeCost(treesFormula);
  };

  const printCountHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = +e.target.value;
    setPrintCount(value);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topPositions = [305, 35, 80];
  const sizes = [65, 30, 45];
  const rightPositions = [0, 0, -20];
  const leftPosition = [-16, -10, 0];
  const showGradients = [false, false, false];
  return (
    <div className={styles.calculateSectionContainer}>
      <h1 className={styles.networkingHead}>Netwoking Made Eco-friendly</h1>
      <div className={styles.networkingContentDiv}>
        <p>
          Step into the eco-friendly future of networking with Bubbl's digital
          business cards. Customize, save money, trees, and waste—studies show
          88% of paper cards are discarded within a year. Choose Bubbl for
          sustainable business cards.
          <br />
          <span>
            <Link href="/shopPage">Try it now!</Link>
          </span>
        </p>
      </div>
      <div className={styles.backgroundContainer}>
        <ParallaxBackground
          scrollPosition={scrollPosition / 10}
          topPositions={topPositions}
          sizes={sizes}
          rightPositions={rightPositions}
          leftPositions={leftPosition}
          showImage1
          showImage2={false}
          showImage3
          showGradients={showGradients}
        />
      </div>

      <div className={styles.imageContainerTree}>
        <Image src={card} className={styles.ImageContainerTree} />
      </div>

      <div className="container">
        <Col
          xl={12}
          lg={12}
          md={12}
          xs={12}
          className={styles.calculateBenefits}
        >
          <Col xl={6} lg={6} md={12} xs={12}>
            <p className={styles.calculateHeading}>
              Calculate Your Benefits with Bubbl
            </p>
            {/* <p className={styles.benefits}>Your Benefits with Bubbl</p> */}
            <p className={styles.rollHeadCompany}>No of Employees in company</p>
            <form>
              <Col xl={12} className={styles.range}>
                <Col xl={9} lg={10} md={10} xs={8}>
                  <input
                    autoComplete="nope"
                    className={styles.range__slider}
                    max={1000}
                    min={10}
                    onChange={employeeCountHandler}
                    type="range"
                    value={employeeCount}
                  />
                </Col>
                <Col xl={3} lg={2} md={2} xs={2}>
                  <input
                    autoComplete="nope"
                    readOnly
                    className={styles.range__amountTwo}
                    style={{
                      backgroundImage: `url(${range.src})!`,
                    }}
                    type="number"
                    value={employeeCount}
                  />
                </Col>
              </Col>
            </form>

            <p className={styles.rollhead}>Printing Cost (per 500 cards)</p>
            <form>
              <Col xl={12} className={styles.range}>
                <Col xl={9} lg={10} md={10} xs={8}>
                  <input
                    autoComplete="nope"
                    readOnly
                    className={styles.range__slider}
                    id="slider"
                    max={10000}
                    min={1000}
                    onChange={printCountHandler}
                    type="range"
                    value={printCount}
                  />
                </Col>
                <Col xl={3} lg={2} md={2} xs={2}>
                  <input
                    autoComplete="nope"
                    readOnly
                    className={styles.range__amount}
                    style={{
                      backgroundImage: `url(${nos.src})`,
                    }}
                    id="amount"
                    type="number"
                    onChange={printCountHandler}
                    value={printCount}
                  />
                </Col>
              </Col>
            </form>
            <div className={styles.line} />
            <div className={styles.calcBen}>
              <div className={styles.icons}>
                <Image src={money} alt="bubbl" />
                <p className={styles.moneyhead}>INR {printCost}/year </p>
                <p className={styles.moneycont}>You Save</p>
              </div>
              <div>
                <Image src={save} alt="bubbl" />
                <p className={styles.moneyhead}>{employeeCost} Trees</p>
                <p className={styles.moneycont}>Saved</p>
              </div>
            </div>
            {/* RESPONSIVE */}
            <div className={styles.saveBtnContainerRes}>
              <div className={styles.saveTag}>
                <h2>You Saved</h2>
              </div>
              <div className={styles.calcBens}>
                <div className={styles.iconsRes}>
                  <Image src={money} alt="bubbl" />
                  <p className={styles.moneyhead}>INR {printCost}/year </p>
                </div>
                <div>
                  <Image src={save} alt="bubbl" />
                  <p className={styles.moneyhead}>{employeeCost} Trees</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={4} className={styles.cardRight}>
            <Image src={card} alt="bubbl" />
          </Col>
        </Col>
      </div>
    </div>
  );
}
export default CalculateTree;
