/* eslint-disable react/function-component-definition */
import React from "react";

interface ShareSVGProps {
  color: string;
}

const ShareSVG: React.FC<ShareSVGProps> = ({ color }) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={20}
    height={20}
    viewBox="0 0 21 24"
    // style="enable-background:new 0 0 21 24;"
    xmlSpace="preserve"
  >
    <style type="text/css">
      {`.st0 {
          fill: ${color};
          stroke:${color};
          stroke-width:0.5;
        }`}
    </style>
    <path
      className="st0"
      d="M16.4,15.8c-1,0-2,0.5-2.6,1.2l-5.9-3.7c0.2-0.4,0.2-0.8,0.2-1.3c0-0.5-0.1-0.9-0.2-1.3L13.8,7
	c0.7,0.7,1.6,1.2,2.6,1.2c2,0,3.6-1.6,3.6-3.6c0-2-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6c0,0.5,0.1,0.9,0.2,1.3L7.2,9.6
	C6.6,8.9,5.6,8.4,4.6,8.4C2.6,8.4,1,10,1,12c0,2,1.6,3.6,3.6,3.6c1,0,2-0.5,2.6-1.2l5.9,3.7c-0.2,0.4-0.2,0.8-0.2,1.3
	c0,2,1.6,3.6,3.6,3.6c2,0,3.6-1.6,3.6-3.6C20,17.4,18.4,15.8,16.4,15.8z M14.2,4.6c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3
	c0,1.3-1,2.3-2.3,2.3C15.2,6.9,14.2,5.9,14.2,4.6z M4.6,14.3c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3
	S5.8,14.3,4.6,14.3z M14.2,19.4c0-1.3,1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3c0,1.3-1,2.3-2.3,2.3C15.2,21.7,14.2,20.7,14.2,19.4z"
    />
  </svg>
);

export default ShareSVG;
