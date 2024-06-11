/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ParallaxBackground from "@/pages/backgroundimageswithgradient/background";

import NavBar from "../ui/NavBar/_navbar";
import styles from "./productList.module.css";

function ProductList() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  const topPositions = [10, 30, 40];
  const sizes = [200, 32, 45];
  const rightPositions = [0, 0, 0];
  const leftPosition = [0, 0, 7];
  const showGradients = [true, true, false];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <Row
          style={{ marginTop: "130px" }}
          className={styles.responsive_nameCustom}
        >
          <div className={styles.background}>
            <ParallaxBackground
              scrollPosition={scrollPosition / 10}
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
          <div className={styles.productListHomeTag}>
            <a onClick={() => router.push("/landing1")}>
              <span className={styles.home_color_head}>Home {" / "}</span>
            </a>
            <a onClick={() => router.push("/shopPage")}>
              <span className={styles.home_color_head}>&nbsp;Shop {" / "}</span>
            </a>
            <span className={styles.linkDevice_color_head}>
              &nbsp;Bubbl - Basic Card
            </span>
          </div>
        </Row>
        <Row className={styles.ImageRowDiv}>
          <Col>
            <p>ddd</p>
          </Col>
          <Col>
            <div className={styles.leftSideContent}>
              <h2>Bubbl- Basic Card</h2>
              <p>
                Made with Recyclable PVC in a Matte finish with Spot UV coating,
              </p>
              <p>Stylish and Sleek. Comes in 8 bubbly colours</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProductList;
