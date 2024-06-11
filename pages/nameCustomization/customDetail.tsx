/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */

import { Button, Col, Form } from "react-bootstrap";

import styles from "./name_customization.module.css";

function NameCustomizationDetails({
  userNameOnChange,
  userName,
  fontOnChange,
  incrementCountFunc,
  decrementCountFunc,
  itemCount,
  fontStyle,
  addCartFunction,
  priceValue,
  nameError,
}: any) {
  return (
    <div>
      <Col className={styles.custom_details}>
        <Col className={`${styles.customization_details_left} col-5`}>
          <h2>Name*</h2>
          <p>Enter the name you want to be apply on card</p>
          <Form className={styles.enterName}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className={styles.placeholder_color}
                onChange={userNameOnChange}
                value={userName}
                maxLength={14}
              />
            </Form.Group>
            {nameError && <span style={{ color: "red" }}>{nameError}</span>}
          </Form>

          <h3 className={styles.quantity_responsive}>Quantity</h3>
          <div className={styles.number}>
            <span
              role="button"
              tabIndex={0}
              className={styles.minus}
              onClick={decrementCountFunc}
            >
              -
            </span>
            <input
              autoComplete="nope"
              type="text"
              value={itemCount}
              className={styles.input}
              style={{ outline: "none", backgroundColor: "#f5f5f7" }}
              disabled
            />
            <span
              role="button"
              tabIndex={0}
              className={styles.plus}
              onClick={incrementCountFunc}
            >
              +
            </span>
          </div>
        </Col>
        <Col className={`${styles.customization_details_right} col-5`}>
          <h2>Font</h2>
          <p>Select the font you want to be apply on card</p>
          <Form.Select
            placeholder="Font Size"
            value={fontStyle}
            className={`${styles["font-div"]}`}
            style={{ borderColor: "#696969" }}
            onChange={fontOnChange}
          >
            <option value="amenti">Amenti</option>
            <option value="muller">Muller</option>
            <option value="romeliosans">Romeliosans</option>
          </Form.Select>
          <h3>Price</h3>
          <h4>
            Rs.{priceValue}
            <span> Per Card</span>
          </h4>
        </Col>
      </Col>
      {/* Responsive for Add Product */}
      <h3 className={styles.quantity}>Quantity</h3>
      <div className={styles.number_resp}>
        <span
          role="button"
          tabIndex={0}
          className={styles.minus}
          onClick={decrementCountFunc}
        >
          -
        </span>
        <input
          autoComplete="nope"
          type="text"
          value={itemCount}
          className={styles.input}
          style={{ outline: "none", backgroundColor: "#f5f5f7" }}
          disabled
        />
        <span
          role="button"
          tabIndex={0}
          className={styles.plus}
          onClick={incrementCountFunc}
        >
          +
        </span>
      </div>
      <Button
        type="submit"
        className={styles.cartButton}
        onClick={addCartFunction}
      >
        ADD TO CART
      </Button>
    </div>
  );
}

export default NameCustomizationDetails;
