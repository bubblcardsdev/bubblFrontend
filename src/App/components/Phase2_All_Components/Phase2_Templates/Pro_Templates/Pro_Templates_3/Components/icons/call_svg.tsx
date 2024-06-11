/* eslint-disable react/function-component-definition */
import React from "react";

interface CallSVGProps {
  color: string;
  onClick: () => void;
}

const CallSVG: React.FC<CallSVGProps> = ({ color, onClick }) => (
  <svg
    onClick={() => onClick()}
    width={35}
    height={35}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2526_2677)">
      <path
        d="M15.7498 11.595L11.7973 11.1375L9.90731 13.0275C7.78481 11.9475 6.0448 10.215 4.9648 8.085L6.8623 6.1875L6.4048 2.25H2.2723C1.8373 9.885 8.1148 16.1625 15.7498 15.7275V11.595V11.595Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2526_2677">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CallSVG;
