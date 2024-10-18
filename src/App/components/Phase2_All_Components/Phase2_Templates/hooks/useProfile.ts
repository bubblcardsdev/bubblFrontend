import { ChangeEvent, Dispatch, FocusEvent, useState } from "react";
import { IProfile } from "src/App/services/createProfileApi";
import { ProfileActionT, ProfileStateT } from "types/profile";

type FieldNames =
  | "firstName"
  | "designation"
  | "shortDescription"
  | "companyName";

const SOCIAL_SITE_MAP = {
  INSTAGRAM: 1,
  FACEBOOK: 2,
  TWITTER: 3,
  YOUTUBE: 4,
  LINKED_IN: 5,
  WHATSAPP: 6,
} as const;
type SocialMediaIdsT = typeof SOCIAL_SITE_MAP[keyof typeof SOCIAL_SITE_MAP];
type SocialMediaLinksT = Record<
  SocialMediaIdsT,
  IProfile["profileSocialMediaLinks"][number]
>;

const DIGITAL_PAYMENT_MAP = {
  G_PAY: 1,
  PHONE_PE: 2,
  PAY_TM: 3,
} as const;

type DigitalPaymentT = IProfile["profileDigitalPaymentLinks"][number];

const getFormattedMediaLinks = (value: string) =>
  value.startsWith("https://") ? value : `https://${value}`;

function useProfile({
  userProfile,
  userProfileDispatch,
  getAllProfile,
}: {
  userProfile?: ProfileStateT;
  getAllProfile?: any;
  userProfileDispatch: Dispatch<ProfileActionT>;
}) {
  const [editingFieldName, setEditingFieldName] = useState<null | FieldNames>(
    null
  );

  // Derived Data
  const phoneNumberFields = (
    getAllProfile?.profilePhoneNumbers ||
    userProfile?.data?.profilePhoneNumbers ||
    []
  ).slice(0, 2);

  const phoneNumberField = phoneNumberFields.find(
    (phone: any) => phone.phoneNumber
  );

  const phoneNumberCount = phoneNumberFields.reduce(
    (acc: any, phone: any) => acc + (phone.phoneNumber ? 1 : 0),
    0
  );

  const emailIdFields = (
    getAllProfile?.profileEmails ||
    userProfile?.data?.profileEmails ||
    []
  ).slice(0, 2);

  const emailIdField = emailIdFields.find((email: any) => email.emailId);

  const emailIdFieldCount = emailIdFields.reduce(
    (acc: any, email: any) => acc + (email.emailId ? 1 : 0),
    0
  );

  const websiteFields = (
    getAllProfile?.profileWebsites ||
    userProfile?.data?.profileWebsites ||
    []
  ).slice(0, 2);

  const websiteField = websiteFields.find(
    (websiteLink: any) => websiteLink.website
  );

  const websiteFieldCount = websiteFields.reduce(
    (acc: any, websiteLink: any) => acc + (websiteLink.website ? 1 : 0),
    0
  );

  //  Social Media Section
  // const profileSocialMediaLinksMap =
  //   userProfile?.data.profileSocialMediaLinks.reduce(
  //     (acc, socialMediaLink) => ({
  //       ...acc,
  //       [socialMediaLink.profileSocialMediaId]: socialMediaLink,
  //     }),
  //     {} as SocialMediaLinksT
  //   );
  let profileSocialMediaLinksMap: any;
  if (getAllProfile?.profileSocialMediaLinks) {
    profileSocialMediaLinksMap = getAllProfile?.profileSocialMediaLinks.reduce(
      (acc: any, socialMediaLink: any) => ({
        ...acc,
        [socialMediaLink.profileSocialMediaId]: socialMediaLink,
      }),
      {} as SocialMediaLinksT
    );
  } else {
    profileSocialMediaLinksMap =
      userProfile?.data?.profileSocialMediaLinks.reduce(
        (acc, socialMediaLink) => ({
          ...acc,
          [socialMediaLink.profileSocialMediaId]: socialMediaLink,
        }),
        {} as SocialMediaLinksT
      );
  }

  // const socialMediaLinks = Object.values(SOCIAL_SITE_MAP).reduce(
  //   (acc, profileSocialMediaId) => ({
  //     ...acc,
  //     [profileSocialMediaId]:
  //       profileSocialMediaLinksMap[profileSocialMediaId] || {},
  //   }),
  //   {} as SocialMediaLinksT
  // );

  const socialMediaLinks = Object.values(SOCIAL_SITE_MAP).reduce(
    (acc, profileSocialMediaId) => ({
      ...acc,
      [profileSocialMediaId]:
        profileSocialMediaLinksMap &&
        profileSocialMediaLinksMap[profileSocialMediaId]
          ? profileSocialMediaLinksMap[profileSocialMediaId]
          : {},
    }),
    {} as SocialMediaLinksT
  );

  // Socail Media View and Edit handling
  const socialMediaNames = {
    instaName: socialMediaLinks[SOCIAL_SITE_MAP.INSTAGRAM].socialMediaName,
    twitterName: socialMediaLinks[SOCIAL_SITE_MAP.TWITTER].socialMediaName,
    linkedInName: socialMediaLinks[SOCIAL_SITE_MAP.LINKED_IN].socialMediaName,
    youtubeName: socialMediaLinks[SOCIAL_SITE_MAP.YOUTUBE].socialMediaName,
    facebookName: socialMediaLinks[SOCIAL_SITE_MAP.FACEBOOK].socialMediaName,
    whatsAppName: socialMediaLinks[SOCIAL_SITE_MAP.WHATSAPP].socialMediaName,
  };

  const mediaLinks = {
    instaLink: socialMediaNames.instaName
      ? getFormattedMediaLinks(socialMediaNames.instaName)
      : "#",
    twitterLink: socialMediaNames.twitterName
      ? getFormattedMediaLinks(socialMediaNames.twitterName)
      : "#",
    linkedInLink: socialMediaNames.linkedInName
      ? getFormattedMediaLinks(socialMediaNames.linkedInName)
      : "#",
    youtubeLink: socialMediaNames.youtubeName
      ? getFormattedMediaLinks(socialMediaNames.youtubeName)
      : "#",
    facebookLink: socialMediaNames.facebookName
      ? getFormattedMediaLinks(socialMediaNames.facebookName)
      : "#",
    whatsAppLink: socialMediaNames.whatsAppName || "#",
  };

  // Digital Payment Section
  // const profileDigitalPaymentLinks =
  //   userProfile?.data?.profileDigitalPaymentLinks.reduce(
  //     (acc, digitalPaymentLink) => ({
  //       ...acc,
  //       [digitalPaymentLink.profileDigitalPaymentsId]: digitalPaymentLink,
  //     }),
  //     {} as Record<
  //       typeof DIGITAL_PAYMENT_MAP[keyof typeof DIGITAL_PAYMENT_MAP],
  //       DigitalPaymentT
  //     >
  //   );

  let profileDigitalPaymentLinks;
  if (getAllProfile?.profileDigitalPaymentLinks) {
    profileDigitalPaymentLinks =
      getAllProfile?.profileDigitalPaymentLinks.reduce(
        (acc: any, digitalPaymentLink: any) => ({
          ...acc,
          [digitalPaymentLink.profileDigitalPaymentsId]: digitalPaymentLink,
        }),
        {} as Record<
          typeof DIGITAL_PAYMENT_MAP[keyof typeof DIGITAL_PAYMENT_MAP],
          DigitalPaymentT
        >
      );
  } else {
    profileDigitalPaymentLinks =
      userProfile?.data?.profileDigitalPaymentLinks.reduce(
        (acc, digitalPaymentLink) => ({
          ...acc,
          [digitalPaymentLink.profileDigitalPaymentsId]: digitalPaymentLink,
        }),
        {} as Record<
          typeof DIGITAL_PAYMENT_MAP[keyof typeof DIGITAL_PAYMENT_MAP],
          DigitalPaymentT
        >
      );
  }
  const digitalPayments = {
    gPay:
      (profileDigitalPaymentLinks &&
        profileDigitalPaymentLinks[DIGITAL_PAYMENT_MAP.G_PAY]) ||
      {},
    phonePe:
      (profileDigitalPaymentLinks &&
        profileDigitalPaymentLinks[DIGITAL_PAYMENT_MAP.PHONE_PE]) ||
      {},
    payTm:
      (profileDigitalPaymentLinks &&
        profileDigitalPaymentLinks[DIGITAL_PAYMENT_MAP.PAY_TM]) ||
      {},
  };

  const handleFieldChange = (params: {
    fieldName: FieldNames;
    value: string;
    errorMessage: string;
  }) => {
    userProfileDispatch({
      type: "update",
      payload: { [params.fieldName]: params.value },
    });

    userProfileDispatch({
      type: "error",
      payload: {
        [params.fieldName]:
          params.value.trim() === "" ? params.errorMessage : "",
      },
    });
  };

  const editField = ({ fieldName }: { fieldName: FieldNames }) => {
    setEditingFieldName(fieldName);
    userProfileDispatch({ type: "error", payload: { [fieldName]: "" } });
  };

  const editHandlers = {
    name: () => {
      if (editingFieldName === null) {
        editField({ fieldName: "firstName" });
      }
    },
    job: () => {
      if (editingFieldName === null) {
        editField({ fieldName: "designation" });
      }
    },
    desc: () => {
      if (editingFieldName === null) {
        editField({ fieldName: "shortDescription" });
      }
    },
    companyName: () => {
      if (editingFieldName === null) {
        editField({ fieldName: "companyName" });
      }
    },
  };

  const inputChangeHandlers = {
    name: (event: ChangeEvent<HTMLInputElement>) =>
      handleFieldChange({
        fieldName: "firstName",
        value: event.target.value,
        errorMessage: "Name is required",
      }),
    job: (event: ChangeEvent<HTMLInputElement>) =>
      handleFieldChange({
        fieldName: "designation",
        value: event.target.value,
        errorMessage: "Job Title is required",
      }),
    desc: (event: ChangeEvent<HTMLInputElement>) =>
      handleFieldChange({
        fieldName: "shortDescription",
        value: event.target.value,
        errorMessage: "Description is required",
      }),
    companyName: (event: ChangeEvent<HTMLInputElement>) =>
      handleFieldChange({
        fieldName: "companyName",
        value: event.target.value,
        errorMessage: "company Name is required",
      }),
  };

  const blurHandlerHelper = (
    fieldName: FieldNames,
    event: FocusEvent<HTMLInputElement>
  ) => {
    let key: "name" | "job" | "desc" | "companyName" | null = null;
    switch (fieldName) {
      case "firstName":
        key = "name";
        break;
      case "designation":
        key = "job";
        break;
      case "shortDescription":
        key = "desc";
        break;
      case "companyName":
        key = "companyName";
        break;
      default:
        break;
    }
    if (key) {
      inputChangeHandlers[key](event);
    }
    if (key == "desc") {
      setEditingFieldName(null);
    } else {
      if (event.target.value.trim()) {
        setEditingFieldName(null);
      }
    }
  };

  const inputBlurHandlers = {
    name: (event: FocusEvent<HTMLInputElement>) =>
      blurHandlerHelper("firstName", event),
    job: (event: FocusEvent<HTMLInputElement>) =>
      blurHandlerHelper("designation", event),
    desc: (event: FocusEvent<HTMLInputElement>) =>
      blurHandlerHelper("shortDescription", event),
    companyName: (event: FocusEvent<HTMLInputElement>) =>
      blurHandlerHelper("companyName", event),
  };

  return {
    editingFieldName,
    phoneNumberField,
    phoneNumberCount,
    emailIdField,
    emailIdFieldCount,
    websiteField,
    websiteFieldCount,
    mediaLinks,
    digitalPayments,
    inputChangeHandlers,
    inputBlurHandlers,
    editHandlers,
    socialMediaNames,
  };
}

export default useProfile;
