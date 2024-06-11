/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import { Form, FormGroup } from "react-bootstrap";

import styles from "./button.module.css";

type Props = {
  type?: any;
  placeholder: any;
  onChange?: any;
  onBlur?: any;
  value?: any;
  className?: any;
  onPaste?: any;
  id?: any;
  name?: any;
  onFocus?: any;
  ref?: any;
};
function InputComp({
  type,
  placeholder,
  onBlur,
  onChange,
  value,
  className,
  onPaste,
  id,
  onFocus,
  name,
  ref,
}: Props) {
  const hanldeKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <form className={styles.common_form}>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className={className}
        onPaste={onPaste}
        id={id}
        name={name}
        onFocus={onFocus}
        ref={ref}
        onKeyDown={hanldeKeyDown}
      />
    </form>
  );
}

InputComp.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  value: undefined,
  type: undefined,
  className: undefined,
};

export default InputComp;
