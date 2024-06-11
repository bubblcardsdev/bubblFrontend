/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import styles from "./button.module.css";

type Props = {
  submitFun: any;
};
const Submit: React.FC<Props> = ({ submitFun }) => (
  <button className={styles.signupbtn}>
    <p>SUBMIT</p>
  </button>
);
export default Submit;
