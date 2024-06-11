/* eslint-disable react/function-component-definition */
import React from "react";

interface MailSVGProps {
  color: string;
}

const MailSVG: React.FC<MailSVGProps> = ({ color }) => (
  <svg
    width={23}
    height={23}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2526_2678)">
      <path
        d="M16.5 3H1.5075L1.5 15H16.5V3ZM15 13.5H3V6L9 9.75L15 6V13.5ZM9 8.25L3 4.5H15L9 8.25Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_2526_2678">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MailSVG;
