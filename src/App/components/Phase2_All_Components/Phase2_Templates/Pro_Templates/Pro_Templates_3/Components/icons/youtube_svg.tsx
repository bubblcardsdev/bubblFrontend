/* eslint-disable react/function-component-definition */
import React from "react";

interface WebSVGProps {
  color: string;
}

const YoutubeSVG: React.FC<WebSVGProps> = ({ color }) => (
  <svg
    width={35}
    height={35}
    viewBox="0 0 42 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_3510_831)">
      <mask
        id="mask0_3510_831"
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="40"
        height="40"
      >
        <path d="M1 0H41V40H1V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3510_831)">
        <path
          d="M40.1667 10.8448C39.9402 10.0369 39.499 9.30538 38.8901 8.72813C38.2639 8.13314 37.4964 7.70753 36.6601 7.49147C33.5301 6.66647 20.9901 6.66647 20.9901 6.66647C15.7623 6.60699 10.5358 6.86859 5.34005 7.4498C4.5037 7.68182 3.73766 8.11695 3.11005 8.71647C2.49339 9.3098 2.04672 10.0415 1.81339 10.8431C1.25287 13.8627 0.980539 16.9287 1.00005 19.9998C0.980052 23.0681 1.25172 26.1331 1.81339 29.1565C2.04172 29.9548 2.48672 30.6831 3.10505 31.2715C3.72339 31.8598 4.49339 32.2848 5.34005 32.5098C8.51172 33.3331 20.9901 33.3331 20.9901 33.3331C26.2245 33.3927 31.4577 33.1311 36.6601 32.5498C37.4964 32.3337 38.2639 31.9081 38.8901 31.3131C39.4988 30.736 39.9395 30.0044 40.1651 29.1965C40.7402 26.1781 41.0199 23.1108 41.0001 20.0381C41.0433 16.9525 40.764 13.8724 40.1667 10.8448ZM17.0034 25.7065V14.2948L27.4367 20.0015L17.0034 25.7065Z"
          fill={color}
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_3510_831"
        x="0"
        y="6.6582"
        width="42"
        height="28.6831"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3510_831"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3510_831"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default YoutubeSVG;
