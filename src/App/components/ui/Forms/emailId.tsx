/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

function MailId() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="user-info-form"
      autoComplete="nope"
    >
      <input
        autoComplete="nope"
        type="email"
        {...register("gg", {
          required: "email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Enter a valid e-mail address",
          },
        })}
      />
    </form>
  );
}

export default MailId;
