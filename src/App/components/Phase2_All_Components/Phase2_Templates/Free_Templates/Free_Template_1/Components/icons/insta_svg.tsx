/* eslint-disable react/function-component-definition */
import React from "react";

interface InstaSVGProps {
  color: string;
}

const InstaSVG: React.FC<InstaSVGProps> = ({ color }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={23}
    height={23}
    viewBox="0 0 24 24"
    // style="enable-background:new 0 0 24 24;"
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`.st0 {
          fill: ${color};
        }`}
    </style>
    <path
      className="st0"
      d="M23,12.1c0,2.1,0,4.2,0,6.2c0,2.3-1.4,4.2-3.5,5c-0.6,0.2-1.2,0.3-1.8,0.3c-4.2,0-8.3,0-12.5,0
	c-2.6,0-4.6-1.6-5.1-4.1c-0.1-0.4-0.1-0.8-0.1-1.1c0-4.2,0-8.3,0-12.5c0-2.6,1.6-4.6,4.1-5.1C4.6,0.6,5,0.6,5.4,0.6
	c4.1,0,8.3,0,12.4,0c2.6,0,4.6,1.6,5.2,4.1C23,5.1,23,5.5,23,5.9C23,8,23,10.1,23,12.1z M22.1,12.1c0-2.1,0-4.3,0-6.4
	c0-0.3,0-0.5-0.1-0.8c-0.4-2-2.1-3.3-4.2-3.4c-4.2,0-8.4,0-12.6,0c-0.2,0-0.3,0-0.5,0C2.6,1.8,1,3.6,1,5.8c0,4.2,0,8.4,0,12.6
	c0,0.2,0,0.4,0.1,0.7c0.3,2,2,3.6,4,3.6c4.3,0,8.6,0,12.9,0c0.2,0,0.5,0,0.7-0.1c2-0.4,3.4-2.1,3.4-4.2
	C22.1,16.3,22.1,14.2,22.1,12.1z"
    />
    <path
      className="st0"
      d="M11.5,19.5c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.5,7.4-7.4c4.1,0,7.4,3.4,7.4,7.5C19,16.2,15.6,19.5,11.5,19.5z
	 M18.1,12.1c0-3.6-2.9-6.5-6.5-6.5C8,5.6,5,8.5,5,12.1c0,3.6,2.9,6.5,6.5,6.5C15.1,18.6,18.1,15.7,18.1,12.1z"
    />
    <path
      className="st0"
      d="M17.6,4.4c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6C20.7,5.3,20,6,19.1,6C18.3,6,17.6,5.3,17.6,4.4z
	 M19.2,3.8c-0.4,0-0.7,0.3-0.7,0.6c0,0.3,0.3,0.7,0.6,0.7c0.4,0,0.6-0.3,0.6-0.7C19.8,4.1,19.5,3.8,19.2,3.8z"
    />
    <path
      className="st0"
      d="M11.6,16.3c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2c2.3,0,4.2,1.9,4.2,4.2C15.8,14.4,13.9,16.3,11.6,16.3
	z M8.3,12.1c0,1.8,1.4,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3c0-1.8-1.5-3.3-3.3-3.3C9.7,8.8,8.3,10.3,8.3,12.1z"
    />
  </svg>
);

export default InstaSVG;