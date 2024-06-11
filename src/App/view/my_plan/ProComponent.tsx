/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

// import { cancelPlan } from "src/App/services/myPlan/myPlanServices";
import pro from "../../../../images/Bubbl-Post-Login-Landing-Page-Asset/Landing-Page/Bubbl-Plans/pro-badge-icon.png";
import arrow from "../../../../public/order_page/checkout-arrow.svg";
import DeActivatePlanModal from "./deActivePlan";
import styles from "./myPlanPage.module.css";
import PlanSubscribeModal from "./SubScribeModal/subscribeModal";

type Props = {
  planId: any;
  planValidity: any;
  planStartDate: any;
  planEndDate: any;
};
// eslint-disable-next-line no-undef, react/function-component-definition
const Pro: React.FC<Props> = ({
  planId,
  planValidity,
  planStartDate,
  planEndDate,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalSubscribe, setShowModalSubscribe] = useState(false);
  const router = useRouter();
  const cancelMyPlan = async () => {
    // const res = await cancelPlan();
  };

  const deActivateFunction = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowModalSubscribe(false);
  };

  const renewPlan = () => {
    setShowModalSubscribe(true);
  };
  return (
    <div>
      {/* Pro Plan */}
      <div className={styles.list_plan}>
        <div className={styles.free_plan}>
          <div className={styles.free_plan_header}>
            <Image src={pro} className={styles.free_plan_img} alt="bubbl" />
            {planId === 2 ? <h2>Bubbl PRO</h2> : <h2>Bubbl Custom</h2>}
          </div>
          <div className={styles.free_plan_hamburger}>
            <Dropdown>
              <Dropdown.Toggle
                className={styles.dropdown_toggle}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "black",
                  border: "none",
                }}
              >
                ...
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: "-110px" }}>
                <Dropdown.Item onClick={deActivateFunction}>
                  Deactivate Plan
                </Dropdown.Item>
                {/* <Dropdown.Item onClick={cancelMyPlan}>
                  Deactivate Plan
                </Dropdown.Item> */}
                {/* <Dropdown.Item onClick={() => renewPlan()}>
                  Renew Plan
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className={styles.pro_plan_details}>
          <Col xl={11} className={styles.pro_plan_bg}>
            <h3>
              <span>Bubbl Pro</span> comes with single unique URL which can be
              linked to only 1 card
            </h3>
            <div className={styles.orderLine} />
            <Col xl="7" className={styles.validity_pro}>
              <div>
                <h4>Plan Validity :</h4>
                <p>{planValidity}</p>
              </div>
              <div>
                <h4>Plan Validity :</h4>
                <p>{moment(planStartDate).format("DD/MM/YYYY")}</p>
              </div>
              <div>
                <h4>Plan Validity :</h4>
                <p>{moment(planEndDate).format("DD/MM/YYYY")}</p>
              </div>
            </Col>
          </Col>
          <Button
            type="button"
            variant="none"
            className={styles.upgrade}
            onClick={() => renewPlan()}
          >
            RENEW PLAN
            <span>
              <Image width={16} height={20} src={arrow} alt="bubbl" />
            </span>
          </Button>
        </div>
      </div>
      {showModal === true && (
        <DeActivatePlanModal show={showModal} onClose={handleClose} />
      )}
      {showModalSubscribe === true && (
        <PlanSubscribeModal show={showModalSubscribe} onClose={handleClose} />
      )}
    </div>
  );
};

export default Pro;
