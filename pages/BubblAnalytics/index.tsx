/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import moment from "moment";
import { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import LoaderScreen from "src/App/components/lottie/lottie";
import Footer from "src/App/components/Phase2_All_Components/Phase2_Footer/footer";
import Navigation from "src/App/components/Phase2_All_Components/Phase2_Navigation/navigation";
import { getUserPlan } from "src/App/services/myPlan/myPlanServices";
import {
  getContactTaps,
  getDeviceTypes,
  getLeadGenData,
  getModesDetails,
  getPaymentTaps,
  getSocialTaps,
  getTapDetails,
  getUserDevice,
} from "src/App/services/tapApi";

import ParallaxBackground from "../backgroundimageswithgradient/background";
import styles from "./analytics.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticsPro() {
  const [planId, setPlanId] = useState();
  const [userDevices, setUserDevices] = useState<any>();

  // Data for charts
  const [getTapsData, setTapsData] = useState<any>();
  const [tapsTimeRange, setTapsTimeRange] = useState<any>("Weekly");
  const [getModesData, setModesData] = useState<any>();
  const [modeUsageTimeRange, setModeUsageTimeRange] = useState<any>("Weekly");
  const [getSocailTaps, setSocailTaps] = useState<any>();
  const [socailTapsTimeRange, setSocailTapsTimeRange] = useState<any>("Weekly");
  const [getPaymentTapsVal, setPaymentTaps] = useState<any>();
  const [paymentTapsTimeRange, setPaymentTapsTimeRange] =
    useState<any>("Weekly");
  const [getContactTapsVal, setContactTaps] = useState<any>();
  const [contactTapsTimeRange, setContactTapsTimeRange] =
    useState<any>("Weekly");
  const [leadGenData, setLeadGenData] = useState<any>();
  const [leadGenDataTimeRange, setLeadGenDataTimeRange] =
    useState<any>("Weekly");
  const [typeData, setTypeData] = useState<any>();
  const [deviceTypeTimeRange, setDeviceTypeTimeRange] = useState<any>("Weekly");
  const [userDeviceDataRaw, setUserDeviceDataRaw] = useState<any>();

  const getPlanDetails = async () => {
    const plans = await getUserPlan();
    setPlanId(plans?.data?.getPlans.PlanId);
  };

  // fro taps Tile
  const getTapFunctions = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const getTapsValues = await getTapDetails(tapObj);
    setTapsData(getTapsValues);
  };

  // for modes PieChart
  const getModeUsageFunction = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const usageValues = await getModesDetails(tapObj);
    setModesData(usageValues);
  };

  // for social Taps PieChart
  const getSocailTapsFunction = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const usageValues = await getSocialTaps(tapObj);

    setSocailTaps(usageValues);
  };

  // data for payment Taps PieChart
  const getPaymentTapsFunction = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const usageValues = await getPaymentTaps(tapObj);
    setPaymentTaps(usageValues);
  };

  // data for contact Taps PieChart
  const getContactTapsFunction = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const usageValues = await getContactTaps(tapObj);
    setContactTaps(usageValues);
  };

  // data for lead Gen Table
  const getLeadGenDataFunction = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }

    const usageValues = await getLeadGenData(tapObj);
    setLeadGenData(usageValues);
  };

  // data for  get device
  const getDeviceType = async (Trange: String) => {
    let tapObj = {};
    if (userDevices === undefined || userDevices === "all") {
      tapObj = {
        deviceId: "All",
        range: Trange,
      };
    } else {
      tapObj = {
        deviceId: userDevices,
        range: Trange,
      };
    }
    const usageValues = await getDeviceTypes(tapObj);

    setTypeData(usageValues);
  };

  const getUserDeviceDataFunction = async () => {
    const userDevice = await getUserDevice();
    setUserDeviceDataRaw(userDevice);
  };
  const dataMode = {
    datasets: [
      {
        label: "# of Taps",
        data:
          planId !== 1
            ? [
                getModesData?.counts[0] === undefined
                  ? 0
                  : getModesData?.counts[0].count,
                getModesData?.counts[1] === undefined
                  ? 0
                  : getModesData?.counts[1].count,
                getModesData?.counts[2] === undefined
                  ? 0
                  : getModesData?.counts[2].count,
                getModesData?.counts[3] === undefined
                  ? 0
                  : getModesData?.counts[3].count,
              ]
            : [5, 7, 9, 10],
        backgroundColor: ["blue", "green", "red", "yellow"],
        borderColor: ["blue", "green", "red", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  const dataSocial = {
    datasets: [
      {
        label: "# of Taps",
        data:
          planId !== 1
            ? [
                getSocailTaps?.finalData[0].count,
                getSocailTaps?.finalData[1].count,
                getSocailTaps?.finalData[2].count,
                getSocailTaps?.finalData[3].count,
                getSocailTaps?.finalData[4].count,
              ]
            : [5, 2, 7, 6, 9],
        backgroundColor: [
          "rgb(192, 24, 88)",
          "lightblue",
          "rgb(198, 216, 222)",
          "blue",
          "red",
        ],
        borderColor: [
          "rgb(192, 24, 88)",
          "lightblue",
          "rgb(198, 216, 222)",
          "blue",
          "red",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPayments = {
    datasets: [
      {
        label: "# of Taps",
        data:
          planId !== 1
            ? [
                getPaymentTapsVal?.finalData[0].count,
                getPaymentTapsVal?.finalData[1].count,
                getPaymentTapsVal?.finalData[2].count,
              ]
            : [10, 6, 5],
        backgroundColor: ["blue", "yellow", "red"],
        borderColor: ["blue", "yellow", "red"],
        borderWidth: 1,
      },
    ],
  };

  const dataContact = {
    datasets: [
      {
        label: "# of Taps",
        data:
          planId !== 1
            ? [
                getContactTapsVal?.finalData[0].count,
                getContactTapsVal?.finalData[1].count,
                getContactTapsVal?.finalData[2].count,
                getContactTapsVal?.finalData[3].count,
              ]
            : [10, 5, 3, 2],
        backgroundColor: ["blue", "green", "yellow", "violet"],
        borderColor: ["blue", "green", "yellow", "violet"],
        borderWidth: 1,
      },
    ],
  };

  const dataDevice = {
    datasets: [
      {
        label: "# of Taps",
        data:
          planId !== 1
            ? [
                typeData?.androidCount,
                typeData?.iosCount,
                typeData?.othersCount,
              ]
            : [12, 19, 15],
        backgroundColor: ["#DE1848", "#FFBF00", "#4339F2"],
        borderColor: ["#DE1848", "#FFBF00", "#4339F2"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    getPlanDetails();
    getUserDeviceDataFunction();
    getTapFunctions(tapsTimeRange);
    getModeUsageFunction(modeUsageTimeRange);
    getSocailTapsFunction(socailTapsTimeRange);
    getPaymentTapsFunction(paymentTapsTimeRange);
    getContactTapsFunction(contactTapsTimeRange);
    getLeadGenDataFunction(leadGenDataTimeRange);
    getDeviceType(deviceTypeTimeRange);
  }, [userDevices]);

  function setUserDevice(e: any) {
    const userDevice = e.target.value;
    setUserDevices(userDevice);
  }

  function setTapsTimeRangeFun(e: any) {
    const tapsRange = e.target.value;
    setTapsTimeRange(tapsRange);
    getTapFunctions(tapsRange);
  }

  function setDevicesTimeRange(e: any) {
    const tapsRange = e.target.value;
    setDeviceTypeTimeRange(tapsRange);
    getDeviceType(tapsRange);
  }

  function setModeUsagePickerTimeRange(e: any) {
    const tapsRange = e.target.value;
    setModeUsageTimeRange(tapsRange);
    getModeUsageFunction(tapsRange);
  }

  function setSocailTapsPickerTimeRange(e: any) {
    const tapsRange = e.target.value;
    setSocailTapsTimeRange(tapsRange);
    getSocailTapsFunction(tapsRange);
  }

  function setPaymentTapsPickerTimeRange(e: any) {
    const tapsRange = e.target.value;
    setPaymentTapsTimeRange(tapsRange);
    getPaymentTapsFunction(tapsRange);
  }

  function setContactTapsPickerTimeRange(e: any) {
    const tapsRange = e.target.value;
    setContactTapsTimeRange(tapsRange);
    getContactTapsFunction(tapsRange);
  }

  function checkIfPieDataInZero(pieValues: any) {
    const checkedForAllZero = pieValues.datasets[0].data.every(
      (value: number) => value === 0
    );
    return checkedForAllZero;
  }

  function setLeadTimeRange(e: any) {
    const tapsRange = e.target.value;
    setLeadGenDataTimeRange(tapsRange);
    getLeadGenDataFunction(tapsRange);
  }

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

  const topPositions = [10, 40, 30];
  const sizes = [65, 45, 45];
  const rightPositions = [0, -27, 0];
  const leftPosition = [-13, 0, 18];
  const showGradients = [false, true, false];

  return (
    <LoaderScreen>
      <div className={styles.container}>
        <div className={styles.navigationContainer}>
          <Navigation />
        </div>
        <div className={styles.analyticsBackgroundContainer}>
          <ParallaxBackground
            scrollPosition={scrollPosition}
            topPositions={topPositions}
            sizes={sizes}
            rightPositions={rightPositions}
            leftPositions={leftPosition}
            showImage1={false}
            showImage2
            showImage3
            showGradients={showGradients}
          />
        </div>

        <div className={styles.order_banner}>
          <div className="container">
            {/* Header */}
            <div className={styles.plan_header_div}>
              <div className={styles.plan_header_left}>
                {/* <a href="/bubblProfiles">
                  <span className={styles.home_color_head}>Home {" > "}</span>
                </a>
                <span className={styles.linkDevice_color_head}>Analytics</span> */}
                <p className={styles.plan_heading}>Analytics</p>
                <p className={styles.plan_heading_content}>
                  Real time insights across all bubbl devices. Track your
                  networking efforts with easy to use, Click-Level Analytics.
                  Never miss a thing with activity history.
                </p>
              </div>
            </div>

            {/* Taps */}

            <div className={styles.analytics_section}>
              <div>
                {/* FREE */}
                {/* 1st Section */}
                <div className={styles.filterByDevice}>
                  <div>
                    <h1 className={styles.heading}>Analytics Free</h1>
                  </div>

                  <div className={styles.formSelectOptions}>
                    <Form.Select
                      placeholder="Font Size"
                      className={styles.deviceFilter}
                      style={{
                        border: "2px solid #af38d6",
                        width: "150px",
                        color: "white",
                      }}
                      onChange={(e: any) => setUserDevice(e)}
                      value={userDevices}
                    >
                      <option value="all">All</option>
                      {userDeviceDataRaw?.deviceName.map((data: any) => (
                        <option value={data?.deviceName}>
                          {data?.deviceName}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>

                <Col className={styles.analytics_topSection}>
                  <Col
                    xl={3}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.analytics}
                  >
                    <div className={styles.analytics_tap}>
                      <div className={styles.analytics_tapBox}>
                        <div>
                          <h5>Taps</h5>
                        </div>
                        <div className={styles.formSelectOptions}>
                          <Form.Select
                            placeholder="Font Size"
                            className={styles.timeRange}
                            style={{ borderColor: "white", color: "white" }}
                            onChange={(e: any) => setTapsTimeRangeFun(e)}
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </Form.Select>
                        </div>
                      </div>
                      <hr className={styles.line} />

                      <div className={styles.analytics_tapBox_details}>
                        <div>
                          <h6>No.of.Tap</h6>
                          <p>{getTapsData?.tapsTimeRange}</p>
                        </div>
                        <div>
                          <h6>Total No.of.Taps</h6>
                          <p>{getTapsData?.totalTaps}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Col>

                {/* PRO */}
                {/* 2nd Section */}
                <div className={styles.analyticsBackgroundContainer}>
                  <ParallaxBackground
                    scrollPosition={scrollPosition}
                    topPositions={topPositions}
                    sizes={sizes}
                    rightPositions={rightPositions}
                    leftPositions={leftPosition}
                    showImage1
                    showImage2={false}
                    showImage3={false}
                    showGradients={showGradients}
                  />
                </div>
                <h1 className={styles.heading}>
                  Analytics Pro
                  {planId !== 1 ? (
                    ""
                  ) : (
                    <a href="/myPlan" className={styles.upgrade}>
                      Click to Upgrade
                    </a>
                  )}
                </h1>
                <div className={planId !== 1 ? "" : styles.blur}>
                  {/* <div> */}
                  <Col className={styles.analytics_firstSection}>
                    <Col
                      xl={3}
                      md={12}
                      sm={12}
                      xs={12}
                      className={styles.analytics}
                    >
                      <div className={styles.analytics_deviceType}>
                        <div className={styles.analytics_timeRange}>
                          <div>
                            <h5>Device Type</h5>
                          </div>
                          <div className={styles.formSelectOptions}>
                            <Form.Select
                              placeholder="Font Size"
                              className={styles.timeRange}
                              style={{ borderColor: "white", color: "white" }}
                              onChange={(e: any) => setDevicesTimeRange(e)}
                            >
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Form.Select>
                          </div>
                        </div>
                        <hr className={styles.line} />
                        {checkIfPieDataInZero(dataDevice) === false ? (
                          <div className={styles.chartjs}>
                            <Doughnut data={dataDevice} />
                          </div>
                        ) : (
                          <p className={styles.noData}>
                            No data to be displayed
                          </p>
                        )}

                        <div className={styles.chart_details}>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorY} />
                              <h6>Android</h6>
                            </div>
                            <div>
                              <p>{typeData?.androidCount}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorG} />
                              <h6>ios</h6>
                            </div>
                            <div>
                              <p>{typeData?.iosCount}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorB} />
                              <h6>Others</h6>
                            </div>
                            <div>
                              <p>{typeData?.othersCount}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xl={3}
                      md={12}
                      sm={12}
                      xs={12}
                      className={styles.analytics}
                    >
                      <div className={styles.analytics_deviceType}>
                        <div className={styles.analytics_timeRange}>
                          <div>
                            <h5>Mode Usage</h5>
                          </div>
                          <div className={styles.formSelectOptions}>
                            <Form.Select
                              placeholder="Font Size"
                              className={styles.timeRange}
                              style={{ borderColor: "white", color: "white" }}
                              onChange={(e: any) =>
                                setModeUsagePickerTimeRange(e)
                              }
                            >
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Form.Select>
                          </div>
                        </div>
                        <hr className={styles.line} />
                        {checkIfPieDataInZero(dataMode) === false ? (
                          <div className={styles.chartjs}>
                            <Doughnut data={dataMode} />
                          </div>
                        ) : (
                          <p className={styles.noData}>
                            No data to be displayed
                          </p>
                        )}

                        <div className={styles.chart_details}>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorMB} />
                              <h6>
                                {getModesData?.counts[0] === undefined
                                  ? "Contact Card"
                                  : getModesData?.counts[0].modeName}
                              </h6>
                            </div>
                            <div>
                              <p>
                                {getModesData?.counts[0] === undefined
                                  ? 0
                                  : getModesData?.counts[0].count}
                              </p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorMG} />
                              <h6>
                                {getModesData?.counts[1] === undefined
                                  ? "Bubbl Profile"
                                  : getModesData?.counts[1].modeName}
                              </h6>
                            </div>
                            <div>
                              <p>
                                {getModesData?.counts[1] === undefined
                                  ? 0
                                  : getModesData?.counts[1].count}
                              </p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorMR} />
                              <h6>
                                {" "}
                                {getModesData?.counts[2] === undefined
                                  ? "Direct URL"
                                  : getModesData?.counts[2].modeName}
                              </h6>
                            </div>
                            <div>
                              <p>
                                {getModesData?.counts[2] === undefined
                                  ? 0
                                  : getModesData?.counts[2].count}
                              </p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorMY} />
                              <h6>
                                {" "}
                                {getModesData?.counts[3] === undefined
                                  ? "Lead Form"
                                  : getModesData?.counts[3].modeName}
                              </h6>
                            </div>
                            <div>
                              <p>
                                {getModesData?.counts[3] === undefined
                                  ? 0
                                  : getModesData?.counts[3].count}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xl={3}
                      md={12}
                      sm={12}
                      xs={12}
                      className={styles.analytics}
                    >
                      <div className={styles.analytics_deviceType}>
                        <div className={styles.analytics_timeRange}>
                          <div>
                            <h5>Social Taps</h5>
                          </div>
                          <div className={styles.formSelectOptions}>
                            <Form.Select
                              placeholder="Font Size"
                              className={styles.timeRange}
                              style={{ borderColor: "white", color: "white" }}
                              onChange={(e: any) =>
                                setSocailTapsPickerTimeRange(e)
                              }
                            >
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Form.Select>
                          </div>
                        </div>
                        <hr className={styles.line} />
                        {checkIfPieDataInZero(dataSocial) === false ? (
                          <div className={styles.chartjs}>
                            <Doughnut data={dataSocial} />
                          </div>
                        ) : (
                          <p className={styles.noData}>
                            No data to be displayed
                          </p>
                        )}

                        <div className={styles.chart_details}>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorSPR} />
                              <h6>{getSocailTaps?.finalData[0].name}</h6>
                            </div>
                            <div>
                              <p>{getSocailTaps?.finalData[0].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorSLB} />
                              <h6>{getSocailTaps?.finalData[1].name}</h6>
                            </div>
                            <div>
                              <p>{getSocailTaps?.finalData[1].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorSLB2} />
                              <h6>{getSocailTaps?.finalData[2].name}</h6>
                            </div>
                            <div>
                              <p>{getSocailTaps?.finalData[2].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorSB} />
                              <h6>{getSocailTaps?.finalData[3].name}</h6>
                            </div>
                            <div>
                              <p>{getSocailTaps?.finalData[3].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorSR} />
                              <h6>{getSocailTaps?.finalData[4].name}</h6>
                            </div>
                            <div>
                              <p>{getSocailTaps?.finalData[4].count}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>

                  {/* 3rd Section */}
                  <Col className={styles.analytics_secondSection}>
                    <Col
                      xl={3}
                      md={12}
                      sm={12}
                      xs={12}
                      className={styles.analytics}
                    >
                      <div className={styles.analytics_deviceType}>
                        <div className={styles.analytics_timeRange}>
                          <div>
                            <h5>Payment Taps</h5>
                          </div>
                          <div className={styles.formSelectOptions}>
                            <Form.Select
                              placeholder="Font Size"
                              className={styles.timeRange}
                              style={{ borderColor: "white", color: "white" }}
                              onChange={(e: any) =>
                                setPaymentTapsPickerTimeRange(e)
                              }
                            >
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Form.Select>
                          </div>
                        </div>
                        <hr className={styles.line} />
                        {checkIfPieDataInZero(dataPayments) === false ? (
                          <div className={styles.chartjs}>
                            <Doughnut data={dataPayments} />
                          </div>
                        ) : (
                          <p className={styles.noData}>
                            No data to be displayed
                          </p>
                        )}

                        <div className={styles.chart_details}>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorPB} />
                              <h6>{getPaymentTapsVal?.finalData[0].name}</h6>
                            </div>
                            <div>
                              <p>{getPaymentTapsVal?.finalData[0].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorPG} />
                              <h6>{getPaymentTapsVal?.finalData[1].name}</h6>
                            </div>
                            <div>
                              <p>{getPaymentTapsVal?.finalData[1].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorPR} />
                              <h6>{getPaymentTapsVal?.finalData[2].name}</h6>
                            </div>
                            <div>
                              <p>{getPaymentTapsVal?.finalData[2].count}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col
                      xl={3}
                      md={12}
                      sm={12}
                      xs={12}
                      className={styles.analytics}
                    >
                      <div className={styles.analytics_deviceType}>
                        <div className={styles.analytics_timeRange}>
                          <div>
                            <h5>Contact Taps</h5>
                          </div>
                          <div className={styles.formSelectOptions}>
                            <Form.Select
                              placeholder="Font Size"
                              className={styles.timeRange}
                              style={{ borderColor: "white", color: "white" }}
                              onChange={(e: any) =>
                                setContactTapsPickerTimeRange(e)
                              }
                            >
                              <option value="Weekly">Weekly</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Yearly">Yearly</option>
                            </Form.Select>
                          </div>
                        </div>
                        <hr className={styles.line} />
                        {checkIfPieDataInZero(dataContact) === false ? (
                          <div className={styles.chartjs}>
                            <Doughnut data={dataContact} />
                          </div>
                        ) : (
                          <p className={styles.noData}>
                            No data to be displayed
                          </p>
                        )}

                        <div className={styles.chart_details}>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorCB} />
                              <h6>{getContactTapsVal?.finalData[0].name}</h6>
                            </div>
                            <div>
                              <p>{getContactTapsVal?.finalData[0].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorCG} />
                              <h6>{getContactTapsVal?.finalData[1].name}</h6>
                            </div>
                            <div>
                              <p>{getContactTapsVal?.finalData[1].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorCY} />
                              <h6>{getContactTapsVal?.finalData[2].name}</h6>
                            </div>
                            <div>
                              <p>{getContactTapsVal?.finalData[2].count}</p>
                            </div>
                          </div>
                          <div className={styles.details}>
                            <div className={styles.details_info}>
                              <div className={styles.colorCV} />
                              <h6>{getContactTapsVal?.finalData[3].name}</h6>
                            </div>
                            <div>
                              <p>{getContactTapsVal?.finalData[3].count}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Col>

                  <div className={styles.analyticsBackgroundContainer}>
                    <ParallaxBackground
                      scrollPosition={scrollPosition}
                      topPositions={topPositions}
                      sizes={sizes}
                      rightPositions={rightPositions}
                      leftPositions={leftPosition}
                      showImage1={false}
                      showImage2={false}
                      showImage3
                      showGradients={showGradients}
                    />
                  </div>
                  {/* 4rd Section */}
                  <div className={styles.analytics_ThirdSection}>
                    <Col
                      xl={12}
                      className={`${styles.analytics_lead} ${styles.scrollableContainer}`}
                    >
                      <div className={styles.analytics_tapBox}>
                        <div>
                          <h5>My Leads Info</h5>
                        </div>
                        <div className={styles.formSelectOptions}>
                          <Form.Select
                            placeholder="Font Size"
                            className={styles.timeRange}
                            style={{
                              borderColor: "white",
                              fontSize: "12px",
                              color: "white",
                            }}
                            onChange={setLeadTimeRange}
                          >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                          </Form.Select>
                        </div>
                      </div>

                      <hr className={styles.line} />

                      {leadGenData?.leadGenData?.length === 0 ? (
                        <p className={styles.noData}>No Data</p>
                      ) : (
                        <table className={styles.analytics_leadForm_section}>
                          <thead>
                            <tr>
                              <th className={styles.name}>Name</th>
                              <th className={styles.name}>Mobile Number</th>
                              <th className={styles.name}>Email</th>
                              <th className={styles.name}>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {leadGenData?.leadGenData.map((data: any) => (
                              <tr key={data.id}>
                                <td className={styles.names}>{data.name}</td>
                                <td className={styles.names}>
                                  {data.mobileNumber}
                                </td>
                                <td className={styles.names}>{data.emailId}</td>
                                <td className={styles.names}>
                                  {moment(data.createdAt).format("DD-MM-YYYY")}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </Col>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.analyticsFooterContainer}>
          <div className={styles.footerSection}>
            <div className={styles.footerSectionInside}>
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </LoaderScreen>
  );
}

export default AnalyticsPro;
