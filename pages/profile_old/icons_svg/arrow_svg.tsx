/* eslint-disable import/export */
/* eslint-disable react/function-component-definition */
import React from "react";

type Props = {
  color: any;
};

const TemplateSVG: React.FC<Props> = ({ color }) => (
  <svg
    width="9"
    height="14"
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L6.75 6.75L1 12.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default TemplateSVG;
