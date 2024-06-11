/* eslint-disable no-unused-vars */
import { IProfile } from "src/App/services/createProfileApi";

// This type takes an object type T and converts each of its properties into a string type.
// It's used to ensure that all values in a profile error object are stringified for consistency.
type StringifyValues<T> = {
  [K in keyof T]: string; // Convert each property value to string type
};

// This type represents the structure of errors associated with a user profile.
// It extends the properties of IProfile by converting them into string types using StringifyValues.
// Additionally, it includes specific error messages for phone numbers, email IDs, websites,
// social media names, and digital payment links using Record<number, string> format.
export type ProfileErrorT = StringifyValues<IProfile> & {
  phoneNumbers: Record<number, string>; // Error messages associated with phone numbers
  emailIds: Record<number, string>;
  websites: Record<number, string>;
  socialMediaNames: Record<number, string>;
  digitalPaymentLinks: Record<number, string>;
};

// This type represents the state structure of a user profile in the application.
// It consists of two main properties: data, which holds the user profile information,
// and error, which holds any error messages associated with the profile.
export type ProfileStateT = {
  data: IProfile; // User profile data
  error: ProfileErrorT; // Error messages associated with the user profile
};

// This type represents the possible actions that can be dispatched to modify the profile state.
// It includes two types of actions: "update" to modify the profile data and "error" to handle profile errors.
export type ProfileActionT =
  | {
      type: "update"; // Action type to update profile data
      payload: Partial<IProfile>; // Partial data to update the profile with
    }
  | {
      type: "error"; // Action type to handle profile errors
      payload: Partial<ProfileErrorT>; // Partial error data to handle profile errors
    };
