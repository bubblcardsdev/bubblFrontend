import React from "react";
interface FacebookIconProps {}

const facebook_icon:React.FC<FacebookIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M24.5932 0H7.4068C3.31614 0 0 3.31614 0 7.4068V24.5932C0 28.6839 3.31614 32 7.4068 32H24.5932C28.6839 32 32 28.6839 32 24.5932V7.4068C32 3.31614 28.6839 0 24.5932 0Z"
        fill="#3E5C9A"
      />
      <path
        d="M16.9396 32H21.8259V19.8948H25.2346L25.5984 15.8432H21.8259V13.5351C21.8259 12.583 22.0218 12.2066 22.9454 12.2066H25.5872V8H22.2289C18.5907 8 16.9508 9.58302 16.9508 12.6162V15.8432H14.3984V19.9502H16.9396V32Z"
        fill="white"
      />
    </svg>
  );
};

export default facebook_icon;
