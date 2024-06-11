/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { ToastContainer } from "react-toastify";
import { getAccessToken } from "src/App/helpers/local-storage";
import {
  getUserPlan,
  initiatePayment,
} from "src/App/services/myPlan/myPlanServices";

import arrow from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Banner/btnArrow.svg";
import custom from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/custom-badge.png";
import free from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/free-badge-icon.png";
import pro from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/pro-badge-icon.png";
import tick from "../../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/tick-icon.svg";
import customise from "../../../../../images/Bubble-website_assets/bubbl_Plan/bubbl_plan3x.png";
import styles from "./header.module.css";
import CurrentPlanHeader from "./upgradePlan_header";

function UpgradePlan() {
  const [yearlyPlanActive, setMonthlyPlanActive] = useState<any>(false);

  const router = useRouter();
  const [plan, setPlanItem] = useState<any>();

  const getPlanDetails = async () => {
    const token = getAccessToken();

    if (token !== null) {
      const plans = await getUserPlan();
      if (plans?.data.success) {
        setPlanItem(plans?.data);
      }
    }
  };
  useEffect(() => {
    getPlanDetails();
  }, []);

  const updatePlans = async (planIdVal: number) => {
    let trueOrFalse = "";
    const token = getAccessToken()!;

    if (token === null || token === undefined) {
      router.replace("/login");
    }
    if (yearlyPlanActive === true) {
      trueOrFalse = "annually";
    } else {
      trueOrFalse = "monthly";
    }
    const planObj = {
      planId: planIdVal,
    };
    const initiatePay = await initiatePayment(planObj);
    if (initiatePay?.data?.success) {
      router.push({
        pathname: "/processPayment",
        query: {
          orderId: initiatePay?.data?.createOrder?.id,
          value: trueOrFalse === "monthly" ? 199 : 1999,
          orderType: 1,
          planType: trueOrFalse === "monthly" ? 0 : 1,
        },
      });
    }
  };

  const PlanBenefits = [
    { id: "1", plan: "3 Templates with 1 URL" },
    { id: "2", plan: "3 Variation (for each template)" },
    { id: "3", plan: "1 card with 1 Unique URL" },
    { id: "4", plan: "4 Modes" },
  ];
  const FreePlan = [
    { id: "1", plan: "3 Templates" },
    { id: "2", plan: "1  card with 1 Unique URL" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className={styles.mode}>
        <Row className={styles.plan_mode}>
          <Col xl={4} lg={4}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 1 || plan === undefined ? (
                    <CurrentPlanHeader />
                  ) : null}

                  <h3 className={styles.bubblfree}>Bubbl FREE</h3>
                </div>
                <div className={styles.card_headerTwo}>
                  <Image src={free} alt="bubbl" />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  Enjoy the cool new benefits of the Free Bubbl Plan
                </p>
                <div className={styles.line}>{/* <Image src={lines} /> */}</div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Customize your Personal Info</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add your Social Links</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Get a free bubbl Link</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    Include additional contact info
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Change theme colours</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>add your personal uPI Info</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    customize with 3 template options
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add 3 URL Slots</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Bubbl Brand QR Code</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Basic Analytics</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Turn Off Card Feature</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Create 3 Profile Pages</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 2 ? <CurrentPlanHeader /> : null}

                  <h3 className={styles.bubblfree}>Bubbl PRO</h3>
                </div>
                <div className={styles.card_headerTwo}>
                  <Image src={pro} alt="bubbl" />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  Bubbl Pro is the Ultimate Plan for the Future of Networking
                </p>
                <div className={styles.line}>{/* <Image src={lines} /> */}</div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom Branded Templates</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Verified badge</p>
                </div>
                <div>
                  <div className={styles.listTwo}>
                    <Image src={tick} alt="bubbl" />
                    <p className={styles.lists}>4 powerful modes</p>
                  </div>
                  <div className={styles.powerfulfour}>
                    <Row>
                      <Col>
                        <p className={styles.modes}>Contact Card</p>
                      </Col>
                      <Col className={styles.fourmode}>
                        <p className={styles.modes}>Bubbl Profile</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className={styles.modes}>Lead Form</p>
                      </Col>
                      <Col className={styles.fourmode}>
                        <p className={styles.modes}>Direct URL</p>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Premium link</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>10 Customizable templates</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Unlimited URL slots</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Upload PDFs</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom QR builder</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Lead gen forms</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom email signature </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    Remove bubbl branding from profile
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Embed images and videos</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Embed music</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Indepth data analytics</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add to home screen</p>
                </div>

                <Form.Group className={styles.check}>
                  <Form.Check
                    checked={!yearlyPlanActive}
                    onClick={() => setMonthlyPlanActive(false)}
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Monthly
                    INR 199/Month"
                    className={styles.radio}
                  />
                  <Form.Check
                    checked={yearlyPlanActive}
                    onClick={() => setMonthlyPlanActive(true)}
                    value="food"
                    type="radio"
                    aria-label="radio 2"
                    label="Annually
                    INR 1999/Year"
                    className={styles.radio}
                  />
                </Form.Group>
                <div className={`${styles.buyPlan}`}>
                  <Button
                    className={styles.purchaseBtnTwo}
                    onClick={() => updatePlans(2)}
                  >
                    SUBSCRIBE
                    <Image
                      src={arrow}
                      className={styles.arrowBtn}
                      alt="bubbl"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 3 ? <CurrentPlanHeader /> : null}

                  <h3 className={styles.bubblfree}>Bubbl CUSTOM</h3>
                </div>
                <div className={styles.card_headerTwo}>
                  <Image src={custom} alt="bubbl" />
                </div>
              </div>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  At Bubbl we understand that there is always more to what our
                  customers want.
                </p>
                <p className={styles.cardContContact}>
                  Contact us to build your own Customized Devices and Plan.
                </p>
                <div className={styles.thirdcard}>
                  <Image src={customise} alt="bubbl" />
                </div>
              </div>
              <div className={`${styles.buyPlanTwo}`}>
                <Button href="/contactUs" className={styles.purchaseBtnTwo}>
                  CONTACT US
                  <Image src={arrow} className={styles.arrowBtn} alt="bubbl" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Responsive */}
      <div className={styles.mode__resp}>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className={styles.card_header}>
                <div className={styles.card_headerTwo}>
                  <Image src={free} alt="bubbl" />
                </div>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 1 ? <CurrentPlanHeader /> : null}
                  <h3 className={styles.bubblfree}>Bubbl FREE</h3>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.cards_resp}>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  Stand out from the crowd, and start your bubbl journey with
                  our free plan.
                </p>

                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Customize your Personal Info</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add your Social Links</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Get a free bubbl Link</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    Include additional contact info
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Change theme colours</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>add your personal uPI Info</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    customize with 3 template options
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add 3 URL Slots</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Bubbl Brand QR Code</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Basic Analytics</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Turn Off Card Feature</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Create 3 Profile Pages</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <div className={styles.gap}></div>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className={styles.card_header}>
                <div className={styles.card_headerTwo}>
                  <Image src={pro} alt="bubbl" />
                </div>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 2 ? <CurrentPlanHeader /> : null}
                  <h3 className={styles.bubblfree}>Bubbl PRO</h3>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.cards_resp}>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  Supercharge your networking experience with the ultimate plan
                  for Pros
                </p>

                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom Branded Templates</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Verified badge</p>
                </div>
                <div>
                  <div className={styles.listTwo}>
                    <Image src={tick} alt="bubbl" />
                    <p className={styles.lists}>4 powerful modes</p>
                  </div>
                  <div className={styles.powerfulfour}>
                    <Row>
                      <Col>
                        <p className={styles.modes}>Contact Card</p>
                      </Col>
                      <Col className={styles.fourmode}>
                        <p className={styles.modes}>Bubbl Profile</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className={styles.modes}>Lead Form</p>
                      </Col>
                      <Col className={styles.fourmode}>
                        <p className={styles.modes}>Direct URL</p>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Premium link</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>10 Customizable templates</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Unlimited URL slots</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Upload PDFs</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom QR builder</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Lead gen forms</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Custom email signature </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>
                    Remove bubbl branding from profile
                  </p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Embed images and videos</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Embed music</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Indepth data analytics</p>
                </div>
                <div className={styles.list}>
                  <Image src={tick} alt="bubbl" />
                  <p className={styles.lists}>Add to home screen</p>
                </div>
                <Form.Group className={styles.check}>
                  <Form.Check
                    checked={!yearlyPlanActive}
                    onClick={() => setMonthlyPlanActive(false)}
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Monthly
                    INR 500/Month"
                    className={styles.radio}
                  />
                  <Form.Check
                    checked={yearlyPlanActive}
                    onClick={() => setMonthlyPlanActive(true)}
                    value="food"
                    type="radio"
                    aria-label="radio 2"
                    label="Annually
                    INR 1500/Year"
                    className={styles.radio}
                  />
                </Form.Group>
                <div className={`${styles.buyPlan}`}>
                  <Button
                    className={styles.purchaseBtnTwo}
                    onClick={() => updatePlans(2)}
                  >
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <div className={styles.gap}></div>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className={styles.card_header}>
                <div className={styles.card_headerTwo}>
                  <Image src={custom} alt="bubbl" />
                </div>
                <div className={styles.card_headerOne}>
                  {plan?.getPlans?.planId === 3 ? <CurrentPlanHeader /> : null}
                  <h3 className={styles.bubblfree}>Bubbl CUSTOM</h3>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className={styles.cards_resp}>
              <div className={styles.card_bottom}>
                <p className={styles.cardCont}>
                  Bring the power of bubbl across your organization with custom
                  devices & plan.
                </p>
                <div className={styles.thirdcard}>
                  <Image src={customise} alt="bubbl" />
                </div>
                <div className={`${styles.buyPlanTwo}`}>
                  <Button href="/contact" className={styles.purchaseBtnTwo}>
                    CONTACT US{" "}
                    <Image
                      src={arrow}
                      className={styles.arrowBtn}
                      alt="bubbl"
                    />
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
export default UpgradePlan;
