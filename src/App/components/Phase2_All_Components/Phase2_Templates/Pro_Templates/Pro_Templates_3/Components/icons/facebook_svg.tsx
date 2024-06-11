/* eslint-disable react/function-component-definition */
import React from "react";

interface FacebookSVGProps {
  color: string;
}

const FacebookSVG: React.FC<FacebookSVGProps> = ({ color }) => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 27 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2526_2664)">
      <path
        d="M22.4615 5.91693V0.0553801L16.1232 0C13.4357 0 9.57775 3.07987 9.57775 6.57295V12.8477H4V19.4973H9.49325V36H15.988V19.4207H21.7305L22.4615 12.9244H16.064V8.1491C16.0504 7.56229 16.2684 6.99401 16.6701 6.5691C17.0717 6.14418 17.6243 5.89737 18.2064 5.88285C19.06 5.88285 22.4615 5.91693 22.4615 5.91693Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2526_2664"
        x="0"
        y="0"
        width="26.4614"
        height="44"
        filterUnits="userSpaceOnUse"
        // colorInterpolation-filters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2526_2664"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2526_2664"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default FacebookSVG;
