/* eslint-disable no-unused-vars */
import {
  ClipboardEventHandler,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import styles from "./OtpInput.module.css";

export type Props = {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

export default function OtpInputGroup({ onChange }: Props) {
  const [otp, setOtp] = useState<Record<number, string>>({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const otpValue = otp[1] + otp[2] + otp[3] + otp[4];
    onChange(otpValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  const refGroup = [firstRef, secondRef, thirdRef, fourthRef] as const;

  const pasteHandler: ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData("text");
    const isNumber = !Number.isNaN(+data);
    if (isNumber && data.length === 4) {
      setOtp(
        data
          .split("")
          .reduce((acc, val, idx) => ({ ...acc, [idx + 1]: val }), {})
      );
      refGroup[refGroup.length - 1]?.current?.focus();
    }
  };

  return (
    <div className={styles.otp_group}>
      {refGroup.map((ref, index) => {
        const idx = index + 1;
        return (
          <input
            key={idx}
            type="text"
            ref={ref}
            autoComplete="one-time-code"
            onChange={(event) => {
              const otpNumber = event.target.value.trim();
              const isNumber = !Number.isNaN(+otpNumber);

              if (isNumber && otpNumber.length < 2) {
                setOtp((currOtp) => ({ ...currOtp, [idx]: otpNumber }));
                const focusingIndex = otpNumber === "" ? index - 1 : idx;
                refGroup[focusingIndex]?.current?.focus();
              }
            }}
            className={styles.otp_input}
            value={otp[idx]}
            onKeyDown={(e) => {
              if (otp[idx] === "" && e.key === "Backspace") {
                refGroup[index - 1]?.current?.focus();
              }
            }}
            onPaste={pasteHandler}
          />
        );
      })}
    </div>
  );
}
