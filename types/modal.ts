// This constant object defines various types of modals used within the application.
// Each modal type corresponds to a specific functionality or view.
// The keys represent the modal types, and the values represent the string identifiers associated with each type.

export const MODAL_TYPES = {
  empty: "", // Represents an empty modal
  editProfile: "editProfile", // Represents a modal for editing the user's profile, same for all below mentioned
  mobileNumberView: "mobileNumberView",
  mobileNumberEdit: "mobileNumberEdit",
  emailIdView: "emailIdView",
  emailIdEdit: "emailIdEdit",
  websiteView: "websiteView",
  websiteEdit: "websiteEdit",
  addressView: "addressView",
  addressEdit: "addressEdit",
  socialEdit: "socialEdit",
  digitalEdit: "digitalEdit",
} as const;

// This type definition represents the union type of all modal types available in the application.
// It utilizes TypeScript's typeof operator to infer the type from the MODAL_TYPES object.
export type ModalT = typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
