import React from "react";

const RightArrow = (props: any) => {
  const {color="#000"}=props
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 11.7148L5.09024 7.33244C5.60252 6.78357 5.60252 5.93183 5.09024 5.38296L1 1.00056"
        stroke={color}
        strokeWidth="1.42857"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RightArrow;
