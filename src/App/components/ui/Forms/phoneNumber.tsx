/* eslint-disable no-unused-vars */
import "react-phone-number-input/style.css";

import { Controller, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

function PhoneNumber() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="user-info-form"
      autoComplete="nope"
    >
      <div>
        <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput value={value} onChange={onChange} id="phone-input" />
          )}
        />
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone</p>
        )}
      </div>
    </form>
  );
}

export default PhoneNumber;
