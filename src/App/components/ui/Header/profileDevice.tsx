import { useRouter } from "next/router";
import { Button, Col, Row } from "react-bootstrap";

import styles from "./header.module.css";

function ProfileDevice() {
  const router = useRouter();

  const createProfileNavigation = () => {
    router.push("/createProfile");
  };
  return (
    <div className="container mt-3">
      <h5>Create Profile Name</h5>
      <hr />
      <div className={styles.profile_drvice_div}>
        <Row>
          <Col className={styles.your_devices}>Your Deveices</Col>
          <Col>
            <div className={styles.profile_sec_div}>
              <div className={styles.circle_device} />
              <div className={styles.qty_div}>
                <div>Bubbl Pop Socket</div>
                <div className={styles.device_qty}>QTY:1</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.profile_sec_div}>
              <div className={styles.square_device} />
              <div className={styles.qty_div}>
                <div>Bubbl NFC Card</div>
                <div className={styles.device_qty}>QTY:1</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <div className={styles.profile_content}>
          Start by creating a profile to link your Purchased device
        </div>
        <div className={styles.profile_content}>
          then continue to choose a template to start using your LYNX device{" "}
        </div>
      </div>
      <div className={styles.profile_content_btn}>
        <Button variant="secondary" onClick={createProfileNavigation}>
          <span>+ </span>Create Profile Name
        </Button>
      </div>
    </div>
  );
}
export default ProfileDevice;
