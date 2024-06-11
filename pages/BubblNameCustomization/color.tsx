/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from "react";
import { Button, Col } from "react-bootstrap";

import styles from "./name_customization.module.css";

type ColorT = "black" | "grey";

const highlight = {
  outline: "3px solid black",
};

function NameCustomizationColor({
  value,
  setValue,
  metalCards,
  metalImages,
}: {
  value: ColorT;
  setValue: Dispatch<SetStateAction<ColorT>>;
  metalCards: any;
  metalImages: any;
}) {
  return (
    <div>
      <h3>Color</h3>
      <Col className={styles.select_metal_section}>
        <Button onClick={() => setValue("black")} className={styles.circle}>
          <span
            className={styles.select_metalBlack}
            style={value === "black" ? highlight : {}}
          />
        </Button>
        <Button onClick={() => setValue("grey")} className={styles.circle}>
          <span
            className={styles.select_metalGrey}
            style={value === "grey" ? highlight : {}}
          />
        </Button>
      </Col>
    </div>
  );
}
export default NameCustomizationColor;
