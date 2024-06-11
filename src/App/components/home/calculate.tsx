/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import card from "../../../../images/Bubble-website_assets/calculate/calculate_product3x.png";
import money from "../../../../images/Bubble-website_assets/calculate/inr.svg";
import nos from "../../../../images/Bubble-website_assets/calculate/nos.svg";
import range from "../../../../images/Bubble-website_assets/calculate/nostwo.svg";
import save from "../../../../images/Bubble-website_assets/calculate/saved.svg";
import styles from "./CreateProfile.module.css";

export default function Calculate() {
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

  return (
    <section className={styles.calculate}>
      <div className="container">
        <Col
          xl={12}
          lg={12}
          md={12}
          xs={12}
          className={styles.calculateBenefits}
        >
          <Col xl={6} lg={6} md={12} xs={12}>
            <p className={styles.calculateHeading}>See Your Impact</p>
            <p className={styles.benefits}>
              Studies show an estimate 88% of paper cards get thrown away within
              the first year. By switching to Bubbl you Save money, save trees
              and reduce waste, all while looking stylish and cool! <br />
              <br />
              It really is a win-win.
            </p>
            <p className={styles.rollhead}>No of employees in company</p>
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
                      backgroundImage: `url(${range.src})`,
                    }}
                    type="number"
                    value={employeeCount}
                  />
                </Col>
              </Col>
            </form>

            <p className={styles.rollhead}>Monthly printing cost</p>
            <form>
              <Col xl={12} className={styles.range}>
                <Col xl={9} lg={10} md={10} xs={8}>
                  <input
                    autoComplete="nope"
                    readOnly={true}
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
          </Col>
          <Col xl={5} lg={4} className={styles.cardright}>
            <Image src={card} alt="bubbl" />
          </Col>
        </Col>
      </div>
    </section>
  );
}
