/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { Form } from "react-bootstrap";

type Props = {
  placeholder: any;
  as: any;
  onBlur?: () => void;
  onChange?: () => void;
  value?: any;
  className?: any;
  name?: any;
};

function TextAreaComponent({
  placeholder,
  as,
  name,
  onBlur = undefined,
  className = undefined,
  onChange = undefined,
  value = undefined,
}: Props) {
  return (
    <Form.Control
      autoComplete="nope"
      as={as}
      className={className}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
export default TextAreaComponent;
