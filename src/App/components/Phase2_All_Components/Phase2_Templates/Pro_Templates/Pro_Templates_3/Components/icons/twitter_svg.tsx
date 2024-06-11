/* eslint-disable react/function-component-definition */
import React from "react";

interface TwitterSVGProps {
  color: string;
}

const TwitterSVG: React.FC<TwitterSVGProps> = ({ color }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={35}
    height={35}
    viewBox="0 0 43 36"
    // style="enable-background:new 0 0 43 36;"
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`.st0 {
          fill: ${color};
        
        }`}
    </style>
    <g>
      <path
        className="st0"
        d="M33.2,6.1c-0.6-0.7-1.4-1.2-2.3-1.6C30.1,4.1,29.1,4,28.2,4c-3.8,0.1-7.4,2.5-7,8.4c0,0-5.7,1.7-14.7-6.7
		c0,0-2.9,4.7,2.2,9.1c0,0-1.4,0.4-3.3-0.7c0,0-1,4,5.5,6.9c0,0-2.2,0.6-3.2,0c0,0,0.6,4.2,6.5,5.2c0,0-3,3-10.2,2.9
		c0,0,14.9,7.6,25.2-2.2c7.4-7,6.3-16.3,6.3-16.3c1.5-0.6,2.7-1.6,3.5-3c0,0-2.5,0.8-3.9,0.6c0,0,2.7-1.7,2.9-3.7
		C38,4.7,35.7,6.3,33.2,6.1z"
      />
    </g>
  </svg>
);

export default TwitterSVG;
