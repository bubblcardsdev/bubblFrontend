/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import freeIcon from "../../../../../../../../images/Bubble-website_assets/bubbl_pro/free-badge-icon.svg";
import orange from "../../../../../../../../images/Bubble-website_assets/bubbl_pro/orange.svg";
import pro from "../../../../../../../../images/Bubble-website_assets/bubbl_pro/pro-badge-icon.svg";
import violet from "../../../../../../../../images/Phase_2_All_Assets/home_page/freeIcon.svg";
import crossV from "../../../../../../../../images/Phase_2_All_Assets/home_page/noIcon.svg";
import ProIcon from "../../../../../../../../images/Phase_2_All_Assets/home_page/proIcon.png";
import responsiveProIcon from "../../../../../../../../images/Phase_2_All_Assets/home_page/responisveProIcon.png";
import styles from "./responsiveTable.module.css";

export default function ResponsiveTableComp() {
  return (
    <>
      {/* WEB */}
      <Row className={styles.responsiveTableBackground}>
        <Col className={styles.featureCol}>
          <div className={styles.featureDivm}>
            <p className={styles.featureHeading}>Features</p>
          </div>
          <div className={styles.chipTag}>
            <p>NFC Chip</p>
            <div className={styles.lineFeature} />
            <p>QR Customisable</p>
            <div className={styles.lineFeature} />
            <p>Device Support</p>
            <div className={styles.lineFeature} />
            <p>Verified Badge</p>
            <div className={styles.lineFeature} />
            <p>Modes for templates</p>
            <div className={styles.lineFeature} />
            <p>Customisable Link</p>
            <div className={styles.lineFeature} />
            <p>No of Template</p>
            <div className={styles.lineFeature} />
            <p>URL</p>
            <div className={styles.lineFeature} />
            <p>Analytics</p>
            <div className={styles.lineFeature} />
            <p>Profile</p>
            <div className={styles.lineFeature} />
            <p>Lead generation</p>
            <div className={styles.lineFeature} />
            <p>Remove Bubble brand from profile</p>
            <div className={styles.lineFeature} />
            <p>Google wallet/apple wallet</p>
          </div>
        </Col>
        <Col className={styles.freeCol}>
          <div className={styles.featureDiv}>
            <div className={styles.freeImageHeadDiv}>
              <Image src={freeIcon} alt="free" />
              <p>
                Bubbl <span> &nbsp;Free</span>
              </p>
            </div>
          </div>
          <div className={styles.featureBgFree}>
            <div>
              <Image src={violet} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <h4>Android and IOS</h4>
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <h4>2</h4>
            </div>
            <div>
              <h4>3</h4>
            </div>
            <div>
              <h4>Basic</h4>
            </div>
            <div>
              <h4>2</h4>
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
          </div>
        </Col>
        <Col className={styles.proCol}>
          <div className={styles.featureDiv}>
            <div className={styles.proImageHeadDiv}>
              <Image src={pro} alt="free" />
              <p>
                Bubbl <span>&nbsp;PRO</span>
              </p>
            </div>
          </div>
          <div className={styles.featureBgPro}>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <h4>Android and IOS</h4>
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <h4>5</h4>
            </div>
            <div>
              <h4>Unlimited</h4>
            </div>
            <div>
              <h4>Advance</h4>
            </div>
            <div>
              <h4>Unlimited</h4>
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
          </div>
        </Col>
      </Row>
      {/* RESPONSIVE */}
      <Row className={styles.tables}>
        <Col className={styles.featureCol}>
          <div className={styles.featureDivm}>
            <p className={styles.featureHeading}>Features</p>
          </div>
          <div className={styles.chipTag}>
            <p>NFC Chip</p>
            <div className={styles.lineFeatureRes} />
            <p>QR Customisable</p>
            <div className={styles.lineFeatureRes} />
            <p>Device Support</p>
            <div className={styles.lineFeatureRes} />
            <p>Verified Badge</p>
            <div className={styles.lineFeatureRes} />
            <p>Modes for templates</p>
            <div className={styles.lineFeatureRes} />
            <p>Customisable Link</p>
            <div className={styles.lineFeatureRes} />
            <p>No of Template</p>
            <div className={styles.lineFeatureRes} />
            <p>URL</p>
            <div className={styles.lineFeatureRes} />
            <p>Analytics</p>
            <div className={styles.lineFeatureRes} />
            <p>Lead generation</p>
            <div className={styles.lineFeatureRes} />
            <p>Remove Bubble brand from profile</p>
            <div className={styles.lineFeatureRes} />
            <p>Google wallet/apple wallet</p>
          </div>
        </Col>

        <Col className={styles.featuresProRes}>
          <div>
            <div className={styles.freeImageHeadDivRes}>
              <Image src={freeIcon} alt="free" />
              <p className={styles.freeIcon}>
                Bubbl <span> &nbsp;Free</span>
              </p>
            </div>
          </div>
          <div className={styles.featureBgFreeRes}>
            <div>
              <Image src={violet} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div className={styles.androidTextRes}>
              <h4>Android and IOS</h4>
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div className={styles.androidTextRes}>
              <h4>2</h4>
            </div>
            <div className={styles.androidTextRes}>
              <h4>3</h4>
            </div>
            <div className={styles.androidTextRes}>
              <h4>Basic</h4>
            </div>
            <div className={styles.androidTextRes}>
              <h4>2</h4>
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
            <div>
              <Image src={crossV} alt="bubbl" />
            </div>
          </div>
        </Col>

        <Col className={styles.proColRes}>
          <div className={styles.featureDivRes}>
            <div className={styles.proImageHeadDivRes}>
              <Image src={pro} alt="free" />
              <p>
                Bubbl <span>&nbsp;PRO</span>
              </p>
            </div>
          </div>
          <div className={styles.featureBgProRes}>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div className={styles.androidText}>
              <h4>Android and IOS</h4>
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div className={styles.androidText}>
              <h4>5</h4>
            </div>
            <div className={styles.androidText}>
              <h4>Unlimited</h4>
            </div>
            <div className={styles.androidText}>
              <h4>Advance</h4>
            </div>
            <div className={styles.androidText}>
              <h4>Unlimited</h4>
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={responsiveProIcon} alt="bubbl" />
            </div>
          </div>
        </Col>
        {/*
      <div className={styles.featureBgFree}>
        <div>
          <Image src={violet} alt="bubbl" />
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <h4>Android and IOS</h4>
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <h4>2</h4>
        </div>
        <div>
          <h4>3</h4>
        </div>
        <div>
          <h4>Basic</h4>
        </div>
        <div>
          <h4>2</h4>
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
        <div>
          <Image src={crossV} alt="bubbl" />
        </div>
      </div> */}
        {/* <Col>
        <div className={styles.bubblProImage}>
          <div className={styles.bubblImageContainer}>
            <div className={styles.featureDiv}>
              <h2>FEATURES</h2>
              <div className={styles.chipTag}>
                <p>NFC Chip</p>
                <div className={styles.lineFeature} />
                <p>QR Customisable</p>
                <div className={styles.lineFeature} />
                <p>Device Support</p>
                <div className={styles.lineFeature} />
                <p>Verified Badge</p>
                <div className={styles.lineFeature} />
                <p>Modes for templates</p>
                <div className={styles.lineFeature} />
                <p>Customisable Link</p>
                <div className={styles.lineFeature} />
                <p>No of Template</p>
                <div className={styles.lineFeature} />
                <p>URL</p>
                <div className={styles.lineFeature} />
                <p>Analytics</p>
                <div className={styles.lineFeature} />
                <p>Profile</p>
                <div className={styles.lineFeature} />
                <p>Lead generation</p>
                <div className={styles.lineFeature} />
                <p>Remove Bubble brand from profile</p>
                <div className={styles.lineFeature} />
                <p>Google wallet/apple wallet</p>
                <div className={styles.lineFeature} />
              </div>
            </div>

            <div className={styles.bubblFreeDiv}>
              <div className={styles.bubblImageDiv}>
                <h3>
                  BUBBL <span>FREE</span>
                </h3>
                <div className={styles.freeImage}>
                  <Image src={freeIcon} alt="bubbl" />
                </div>
              </div>

              <div className={styles.featureBgFree}>
                <div>
                  <Image src={violet} alt="bubbl" />
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <h4>Android and IOS</h4>
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <h4>2</h4>
                </div>
                <div>
                  <h4>3</h4>
                </div>
                <div>
                  <h4>Basic</h4>
                </div>
                <div>
                  <h4>2</h4>
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
                <div>
                  <Image src={crossV} alt="bubbl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col> */}

        {/* <Col className={styles.featuresPro}>
        <div className={styles.featuresBack}>
          <div className={styles.featuresFreeHead}>
            <h3>
              BUBBL <span className={styles.proHeading}>PRO</span>
            </h3>
            <div>
              <Image src={pro} alt="bubbl" />
            </div>
          </div>

          <div className={styles.featureBgPro}>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <h4>Android and IOS</h4>
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <h4>5</h4>
            </div>
            <div>
              <h4>Unlimited</h4>
            </div>
            <div>
              <h4>Advance</h4>
            </div>
            <div>
              <h4>Unlimited</h4>
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
            <div>
              <Image src={ProIcon} alt="bubbl" />
            </div>
          </div>
        </div>
      </Col> */}
      </Row>
    </>
  );
}
