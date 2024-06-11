/* eslint-disable react/function-component-definition */
import React from "react";

interface DownSVGProps {
  color: string;
}

const DownSVG: React.FC<DownSVGProps> = ({ color }) => (
  <svg
    width="17"
    height="9"
    viewBox="0 0 17 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L7.13537 6.72634C7.90378 7.44353 9.09622 7.44353 9.86464 6.72634L16 1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default DownSVG;
