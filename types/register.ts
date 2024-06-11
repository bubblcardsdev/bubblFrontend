export type RegisterDetailsT = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  serverEmail: string;
};

export type LoginDetailsT = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  token: any;
};

export interface IFormInputs extends RegisterDetailsT {
  confirmPassword: string;
}
