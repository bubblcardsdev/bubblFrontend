/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import styles from "./name_customization.module.css";

const baseMaterialStyle = {
  borderRadius: "3px",
  height: "100%",
  display: "block",
  lineHeight: "0",
  padding: "3px",
  outline: "2px solid transparent",
};

const materialStyle = {
  outline: "2px solid black",
  borderRadius: "3px",
  height: "45px",
  display: "flex",
  alignItems: "center",
};

function NameCustomizationPattern({
  patternId,
  onSelect,
  thumbnailImages,
  patternImages,
}: {
  patternId: string;
  onSelect: MouseEventHandler<HTMLImageElement>;
  thumbnailImages: any;
  patternImages: any;
}) {
  return (
    <div className={styles.pattern_section}>
      <h3>Select your Pattern</h3>
      <Col className={styles.select_pattern}>
        {/* images */}
        {thumbnailImages?.map((cardImg: any, index: any) => {
          const isFirstItem = index === 0;
          return (
            <div>
              {cardImg?.NameCustomImages?.map((val: any) => {
                const id = val.id as number;
                // eslint-disable-next-line no-param-reassign
                cardImg.elId = id;
                // View front view on name custom images
                if (val.cardView === false) {
                  const isSelected = patternId.length
                    ? +patternId === id
                    : isFirstItem;
                  return (
                    <div key={id} className={styles.select_pattern_img}>
                      <span
                        style={isSelected ? materialStyle : baseMaterialStyle}
                      >
                        <img
                          src={val?.imageUrl}
                          width={70}
                          height={70}
                          id={cardImg?.id}
                          onClick={() => onSelect(cardImg)}
                          style={{ borderRadius: "5px" }}
                        />
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </Col>
    </div>
  );
}

export default NameCustomizationPattern;
