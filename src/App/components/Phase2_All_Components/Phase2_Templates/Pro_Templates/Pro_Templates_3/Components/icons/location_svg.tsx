/* eslint-disable react/function-component-definition */
import React from "react";

interface LocationSVGProps {
  color: string;
  onClick: () => void;
}

const LocationSVG: React.FC<LocationSVGProps> = ({ color, onClick }) => (
  <svg
    onClick={onClick}
    width="21"
    height="30"
    viewBox="0 0 21 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9314 0.935059C5.39512 0.935059 0.91748 5.4127 0.91748 10.9489C0.91748 18.4594 10.9314 29.5462 10.9314 29.5462C10.9314 29.5462 20.9453 18.4594 20.9453 10.9489C20.9453 5.4127 16.4676 0.935059 10.9314 0.935059ZM10.9314 14.5253C8.9572 14.5253 7.35498 12.9231 7.35498 10.9489C7.35498 8.97478 8.9572 7.37256 10.9314 7.37256C12.9055 7.37256 14.5078 8.97478 14.5078 10.9489C14.5078 12.9231 12.9055 14.5253 10.9314 14.5253Z"
      fill={color}
    />
  </svg>
);

export default LocationSVG;
