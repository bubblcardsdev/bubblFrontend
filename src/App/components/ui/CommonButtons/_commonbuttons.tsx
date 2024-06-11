/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

type Props = {
  label: any;
  variant?: any;
  onClick?: any;
  type?: any;
  className?: any;
  disabled?: boolean;
};
function ButtonComp({
  label,
  variant,
  onClick,
  type,
  className,
  disabled,
}: Props) {
  return (
    <div>
      <Button
        variant={variant}
        onClick={onClick}
        type={type}
        className={className}
        disabled={disabled}
      >
        {label}
      </Button>
    </div>
  );
}
export default ButtonComp;
